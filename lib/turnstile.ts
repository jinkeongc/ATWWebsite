/**
 * Cloudflare Turnstile verification for the enquiry form.
 *
 * Turnstile is an invisible CAPTCHA: real visitors see nothing, automated
 * submissions fail the challenge. It is the primary defence against enquiry
 * spam, because unlike IP rate limiting it also holds against a flood spread
 * across many addresses.
 *
 * Deliberate design choice — this FAILS OPEN:
 *
 * Verification is enforced only when BOTH keys are configured, and a Turnstile
 * outage or network error lets the enquiry through with an error logged.
 * The reasoning: a fail-closed check that misfires silently drops every real
 * business enquiry, which is a worse outcome for ATW than spam getting through.
 * Rate limiting still applies in every one of these cases.
 *
 * Consequence to be aware of: setting TURNSTILE_SECRET_KEY without also setting
 * NEXT_PUBLIC_TURNSTILE_SITE_KEY leaves the form unprotected by Turnstile
 * rather than broken. The mismatch is logged on every request.
 */

const VERIFY_ENDPOINT = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/** Guards against a huge string being forwarded to Cloudflare. Real tokens are far shorter. */
const MAX_TOKEN_LENGTH = 2048;

export type TurnstileResult =
  | { ok: true }
  | { ok: false; reason: "missing-token" | "rejected" };

function isConfigured() {
  return Boolean(process.env.TURNSTILE_SECRET_KEY && process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);
}

export async function verifyTurnstile(token: unknown, ip: string | null): Promise<TurnstileResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  if (secret && !siteKey) {
    console.error(
      "TURNSTILE_SECRET_KEY is set but NEXT_PUBLIC_TURNSTILE_SITE_KEY is not. " +
        "The form cannot produce a token, so Turnstile is being skipped. Set both keys.",
    );
  }

  if (!isConfigured()) return { ok: true };

  if (typeof token !== "string" || !token.trim() || token.length > MAX_TOKEN_LENGTH) {
    return { ok: false, reason: "missing-token" };
  }

  const body = new URLSearchParams({ secret: secret!, response: token.trim() });
  if (ip) body.set("remoteip", ip);

  try {
    const response = await fetch(VERIFY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      console.error("Turnstile verification endpoint returned an error.", { status: response.status });
      return { ok: true };
    }

    const result = (await response.json()) as { success?: boolean; "error-codes"?: string[] };

    if (result.success) return { ok: true };

    console.warn("Turnstile rejected an enquiry submission.", { errors: result["error-codes"] });
    return { ok: false, reason: "rejected" };
  } catch (error) {
    // Cloudflare unreachable or slow. Let the enquiry through rather than lose a lead.
    console.error(
      "Turnstile verification could not be completed; allowing the enquiry.",
      error instanceof Error ? error.message : "Unknown error",
    );
    return { ok: true };
  }
}
