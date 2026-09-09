import { NextResponse, type NextRequest } from "next/server";
import { CONTACT_EMAIL } from "@/lib/content";

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

function readField(body: Record<string, unknown>, field: EnquiryField) {
  const value = body[field];
  return typeof value === "string" ? value.trim().slice(0, MAX_LENGTHS[field]) : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function sameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  const forwardedHost = request.headers.get("x-forwarded-host");
  const host = forwardedHost ?? request.headers.get("host");

  if (!origin || !host) return true;

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots commonly fill fields that are visually hidden from real visitors.
  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ ok: true });
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

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Enquiry delivery failed.", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { error: "We couldn't send your enquiry. Please try again or contact us directly." },
      { status: 502 },
    );
  }
}
