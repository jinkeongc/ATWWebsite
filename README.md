# Asian Top Wellness — Website

Marketing site for Asian Top Wellness (ATW), a Malaysia-based OEM / private-label wellness
product developer and manufacturer. Built with Next.js (App Router) + TypeScript.

## Status

The **homepage** is implemented, structured from the handoff in
[`Design Brief Submission/design_handoff_atw_homepage`](<Design Brief Submission/design_handoff_atw_homepage/README.md>)
but visually styled to match the approved **v1** design (`ATW Homepage v1.dc.html` in that folder) —
Lora/Schibsted Grotesk type, rounded/circular imagery, and the warm green + gold palette, with the v2
scroll-parallax and hero entrance animation retained. The About, Products, Capabilities, Services and Contact pages
follow the same visual system.

The photography under `public/placeholders` is approved production photography. The directory name remains for
compatibility with the existing page references.

## Design system

Tokens (colors, type, spacing, effects) live as CSS custom properties in
[`app/globals.css`](app/globals.css), matching the v1 design exactly. The `Button` component
([`components/ui/Button.tsx`](components/ui/Button.tsx)) implements the two variants used in v1
(primary, secondary/outline) across the four sizes the design calls for.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint   # eslint
npm run build  # production build
```

## Production services

The enquiry form posts to `app/api/enquiry/route.ts`, which delivers enquiries through Resend. Copy `.env.example`
to `.env.local` for local testing and configure the same server-only variables in Vercel. Verify
`asiantopwellness.com` as a sending domain in Resend before using the production sender address.

Vercel Web Analytics is included in the root layout for page views. Enable Web Analytics for the project in the
Vercel dashboard before the production deployment.

Google Analytics 4 loads only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` (the `G-...` measurement ID) is set. Enquiry
events (`generate_lead` for a delivered form, `whatsapp_click`, `email_click`, `phone_click`) are sent through
`lib/analytics.ts`. Register `interest` and `location` as event-scoped custom dimensions in GA4 Admin so they appear
in reports, and mark `generate_lead` and `whatsapp_click` as key events.

`GOOGLE_SITE_VERIFICATION` (optional) renders the Google Search Console HTML-tag verification meta. A DNS-verified
domain property does not need it.

Canonical URLs and the generated sitemap use `NEXT_PUBLIC_SITE_URL`, defaulting to
`https://www.asiantopwellness.com`.

## Security and abuse protection

### Enquiry form

`/api/enquiry` is the only endpoint on the site, so it is the only thing that can be attacked
directly. It has four layers in front of it, applied in this order:

1. **Cross-origin check** — a submission whose `Origin` is not this site (or a `*.vercel.app`
   preview, or localhost) is rejected. This stops another website posting the form on a visitor's
   behalf. The origin is compared against known-good hosts rather than the request's own
   `host` / `x-forwarded-host` headers, because a caller can set those itself.
2. **Body size limit** — anything over 16 KB is rejected before it is parsed.
3. **Honeypot** — a hidden `website` field. If it is filled in, the submission is silently
   accepted and discarded.
4. **Per-IP rate limit** — 3 enquiries per hour per IP (`lib/rate-limit.ts`), returning `429`
   with a `Retry-After` header. This runs *before* any outbound request, so a flood cannot burn
   the Resend quota.
5. **Cloudflare Turnstile** — an invisible CAPTCHA (`lib/turnstile.ts`), enabled only once its
   keys are set. See below.

Submitted text has control characters stripped before it goes anywhere near the email, so a
newline cannot be smuggled into the subject line or an address.

**Known limitation:** the rate limit is held in the memory of a single serverless instance, so the
real-world limit is looser than 3/hour and resets on cold starts. It is a speed bump against a
single noisy source, not a guarantee, and it does not stop a flood spread across many IP
addresses. Turnstile is what covers that case — which is why it is worth turning on.

### Turning on Turnstile (about 5 minutes, free)

Not yet configured. Until it is, the form works normally and the rate limit still applies.

1. Go to <https://dash.cloudflare.com> and sign up or log in (no domain transfer needed).
2. In the left sidebar choose **Turnstile**, then **Add widget**.
3. Name it `ATW website`, add the hostname `asiantopwellness.com`, and leave the widget mode as
   **Managed**. Click **Create**.
4. You now get two values: a **Site Key** and a **Secret Key**.
5. In Vercel, open the project → **Settings** → **Environment Variables**, and add:
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY` = the Site Key (all three environments)
   - `TURNSTILE_SECRET_KEY` = the Secret Key (all three environments, marked **Secret**)
6. Redeploy. A small "verifying" box appears on the contact form; real visitors never have to
   solve anything.

Add **both** keys together. A secret key without a site key cannot be verified, so Turnstile is
skipped (and the mismatch logged) rather than blocking enquiries.

### Deliberate fail-open behaviour

Turnstile verification is skipped — rather than rejecting the enquiry — when it is unconfigured,
misconfigured, or Cloudflare is unreachable. Losing every genuine business enquiry is a worse
outcome for ATW than letting some spam through, and the rate limit still applies in all of those
cases. Each one is logged. If you would rather fail closed, change the `return { ok: true }`
branches in `lib/turnstile.ts`.

### Security headers

`next.config.ts` sets a Content Security Policy, `X-Frame-Options`, `X-Content-Type-Options`,
`Referrer-Policy`, `Permissions-Policy` and HSTS on every route, and `no-store` on `/api/*`.
`poweredByHeader` is off, so responses no longer advertise the Next.js version.

Any new third-party script (a chat widget, a pixel, an embed) must have its origin added to the
CSP in `next.config.ts`, or the browser will block it. `'unsafe-eval'` is added in development
only, because `next dev` needs it for hot reloading.

HSTS includes `includeSubDomains`. If a subdomain ever needs to be served over plain HTTP, drop
that from the header.

### Dependencies

Production dependencies are clean (`npm audit --omit=dev` reports 0). The remaining moderate
advisories are in `minimatch`, reached only through `@typescript-eslint`, which runs during
`npm run lint` on a developer machine and is never part of the deployed site. Clearing them needs
a breaking `eslint-config-next` bump, which is not worth the risk for no change to the live site.

Check production dependencies with:

```bash
npm audit --omit=dev
```
