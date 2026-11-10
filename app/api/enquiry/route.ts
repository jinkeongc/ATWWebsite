import { NextResponse, type NextRequest } from "next/server";
import { CONTACT_EMAIL } from "@/lib/content";
import { checkRateLimit, clientIp } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";
import { SITE_URL } from "@/lib/seo";

export const runtime = "nodejs";

const MAX_LENGTHS = {
  name: 120,
  company: 160,
  email: 254,
  country: 100,
  phone: 60,
  interest: 160,
  idea: 4000,
} as const;

type EnquiryField = keyof typeof MAX_LENGTHS;

/** Fields that end up on a single line (including the subject) keep no line breaks. */
const SINGLE_LINE_FIELDS: ReadonlySet<EnquiryField> = new Set([
  "name",
  "company",
  "email",
  "country",
  "phone",
  "interest",
]);

/**
 * Largest request body accepted, in bytes. The fields above total well under
 * 5 KB; this stops a large payload being parsed into memory at all. Vercel caps
 * request bodies anyway, but rejecting early costs nothing.
 */
const MAX_BODY_BYTES = 16 * 1024;

const CONTROL_CHARS = /[\u0000-\u001F\u007F-\u009F]/g;

/**
 * Strips control characters from submitted text. Line breaks in a value that is
 * interpolated into an email subject or address are the classic header
 * injection vector; Resend's JSON API should encode them safely, so this is
 * defence in depth rather than the only thing standing in the way.
 */
function sanitize(value: string, field: EnquiryField) {
  const stripped = value.replace(CONTROL_CHARS, field === "idea" ? "\n" : " ");
  const normalized = SINGLE_LINE_FIELDS.has(field)
    ? stripped.replace(/\s+/g, " ")
    : stripped.replace(/\n{3,}/g, "\n\n");
  return normalized.trim().slice(0, MAX_LENGTHS[field]);
}

function readField(body: Record<string, unknown>, field: EnquiryField) {
  const value = body[field];
  return typeof value === "string" ? sanitize(value, field) : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/**
 * Cross-origin check (CSRF protection).
 *
 * The origin is compared against hosts we know are ours, rather than against
 * the request's own `host` / `x-forwarded-host` headers — a caller can set
 * those, so the old comparison could be satisfied by sending a matching pair.
 *
 * A request with no `Origin` header is still allowed. Browsers always send it,
 * so this check does its job of stopping another website from posting the form
 * on a visitor's behalf. Requiring it would not stop a script, which can set any
 * origin it likes, but would break the occasional privacy proxy that strips the
 * header. Scripted abuse is handled by the rate limit and Turnstile instead.
 */
function isAllowedOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  let host: string;
  try {
    host = new URL(origin).host.toLowerCase();
  } catch {
    return false;
  }

  if (host === new URL(SITE_URL).host.toLowerCase()) return true;

  // Vercel preview deployments and local development.
  if (host.endsWith(".vercel.app")) return true;
  if (host === "localhost" || host.startsWith("localhost:")) return true;
  if (host === "127.0.0.1" || host.startsWith("127.0.0.1:")) return true;

  return false;
}

/**
 * Emails the visitor a short confirmation that their enquiry arrived. Replies
 * go to the ATW inbox. The enquiry itself has already been delivered by the
 * time this runs, so a failure here is logged and never shown to the visitor.
 */
async function sendAcknowledgement({
  apiKey,
  from,
  replyTo,
  name,
  email,
}: {
  apiKey: string;
  from: string;
  replyTo: string;
  name: string;
  email: string;
}) {
  const text = [
    `Hi ${name},`,
    "",
    "Thanks for writing an enquiry. We have received your message and will get back to you shortly.",
    "",
    "Asian Top Wellness",
    SITE_URL,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
        "User-Agent": "ATW-Website/1.0",
      },
      body: JSON.stringify({
        from,
        to: [email],
        reply_to: replyTo,
        subject: "Thanks for your enquiry — Asian Top Wellness",
        text,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected an enquiry acknowledgement.", { status: response.status });
    }
  } catch (error) {
    console.error(
      "Enquiry acknowledgement failed.",
      error instanceof Error ? error.message : "Unknown error",
    );
  }
}

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  const declaredLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Enquiry is too large." }, { status: 413 });
  }

  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots commonly fill fields that are visually hidden from real visitors.
  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  // Throttle before doing any outbound work, so a flood cannot burn the Resend
  // quota or make us call Cloudflare repeatedly.
  const ip = clientIp(request.headers);
  if (ip) {
    const limit = checkRateLimit(ip);
    if (!limit.allowed) {
      return NextResponse.json(
        { error: "You've already sent us an enquiry. Please email or WhatsApp us if it's urgent." },
        { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
      );
    }
  }

  const enquiry = {
    name: readField(body, "name"),
    company: readField(body, "company"),
    email: readField(body, "email"),
    country: readField(body, "country"),
    phone: readField(body, "phone"),
    interest: readField(body, "interest"),
    idea: readField(body, "idea"),
  };

  if (!enquiry.name || !isValidEmail(enquiry.email)) {
    return NextResponse.json({ error: "Please provide a name and valid email address." }, { status: 400 });
  }

  const turnstile = await verifyTurnstile(body.turnstileToken, ip);
  if (!turnstile.ok) {
    return NextResponse.json(
      { error: "We couldn't verify that you're human. Please reload the page and try again." },
      { status: 403 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ENQUIRY_FROM_EMAIL;
  const to = process.env.ENQUIRY_TO_EMAIL ?? CONTACT_EMAIL;

  if (!apiKey || !from) {
    console.error("Enquiry delivery is missing RESEND_API_KEY or ENQUIRY_FROM_EMAIL.");
    return NextResponse.json(
      { error: "Enquiry delivery is temporarily unavailable. Please email or WhatsApp us instead." },
      { status: 503 },
    );
  }

  const text = [
    "New product enquiry from the ATW website",
    "",
    `Name: ${enquiry.name}`,
    `Company: ${enquiry.company || "Not provided"}`,
    `Email: ${enquiry.email}`,
    `Country: ${enquiry.country || "Not provided"}`,
    `Phone / WhatsApp: ${enquiry.phone || "Not provided"}`,
    `Interest: ${enquiry.interest || "Not provided"}`,
    "",
    "Product idea:",
    enquiry.idea || "Not provided",
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
        "User-Agent": "ATW-Website/1.0",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: enquiry.email,
        subject: `New ATW product enquiry — ${enquiry.name}`,
        text,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected an enquiry email.", { status: response.status });
      return NextResponse.json(
        { error: "We couldn't send your enquiry. Please try again or contact us directly." },
        { status: 502 },
      );
    }

    await sendAcknowledgement({ apiKey, from, replyTo: to, name: enquiry.name, email: enquiry.email });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Enquiry delivery failed.", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { error: "We couldn't send your enquiry. Please try again or contact us directly." },
      { status: 502 },
    );
  }
}
