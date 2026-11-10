/**
 * Small in-memory rate limiter for the enquiry endpoint.
 *
 * Scope and honest limitations:
 * - State lives in the memory of a single serverless instance. Vercel runs
 *   several instances and recycles them, so the effective limit is looser than
 *   the numbers below and resets on cold starts. This is a speed bump against
 *   naive floods, not a guarantee.
 * - A distributed flood from many IPs is not stopped here. Turnstile
 *   (lib/turnstile.ts) is the primary defence against automated submissions;
 *   this layer exists so a single source cannot hammer the endpoint even if
 *   Turnstile is unconfigured or unreachable.
 * - Moving to a shared store (e.g. Upstash Redis) would make the limit exact
 *   across instances. That needs another account, so it is deliberately not a
 *   dependency here.
 */

type Window = { count: number; resetAt: number };

/** How long a counting window lasts. */
const WINDOW_MS = 60 * 60 * 1000;

/** Enquiries allowed per IP per window. Real buyers send one, maybe two. */
const MAX_PER_WINDOW = 3;

/** Hard ceiling on tracked IPs, so the map itself cannot be grown without bound. */
const MAX_TRACKED = 5_000;

const windows = new Map<string, Window>();

function dropExpired(now: number) {
  for (const [key, window] of windows) {
    if (window.resetAt <= now) windows.delete(key);
  }
}

/**
 * Keeps memory bounded. Expired entries go first; if the map is still over the
 * ceiling, the entries closest to expiring are evicted.
 */
function enforceCeiling(now: number) {
  if (windows.size <= MAX_TRACKED) return;

  dropExpired(now);
  if (windows.size <= MAX_TRACKED) return;

  const bySoonestReset = [...windows.entries()].sort((a, b) => a[1].resetAt - b[1].resetAt);
  for (const [key] of bySoonestReset.slice(0, windows.size - MAX_TRACKED)) {
    windows.delete(key);
  }
}

export type RateLimitResult =
  | { allowed: true }
  | { allowed: false; retryAfterSeconds: number };

export function checkRateLimit(key: string, now = Date.now()): RateLimitResult {
  enforceCeiling(now);

  const existing = windows.get(key);

  if (!existing || existing.resetAt <= now) {
    windows.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (existing.count >= MAX_PER_WINDOW) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  return { allowed: true };
}

/**
 * Best-effort client IP.
 *
 * On Vercel both headers are set by the platform edge. `x-real-ip` is a single
 * value and is preferred; `x-forwarded-for` may be a chain, where the leftmost
 * entry is the client. Returns null when neither is present (local `next dev`),
 * and the caller then skips IP-based limiting rather than lumping every visitor
 * under one shared key.
 */
export function clientIp(headers: Headers): string | null {
  const realIp = headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;

  const forwarded = headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  return first || null;
}
