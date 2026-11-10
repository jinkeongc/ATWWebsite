# ATW Website — notes for agent sessions in this repo

## What this is (and is not)

Marketing site for **Asian Top Wellness (ATW)**, a Malaysia-based OEM / private-label wellness
product developer and manufacturer. Next.js (App Router) + TypeScript, deployed on Vercel at
https://www.asiantopwellness.com. GitHub: `jinkeongc/ATWWebsite`.

**Naming rule:** when Jin says just "ATW", they mean the **ATW search agent** (the ATW Research
Crawler, a.k.a. "Scout") — a separate repo at `/home/jinunix/ATW` inside WSL Ubuntu on this PC,
opened via a remote session. This repo is only ever "ATW Website" or "the site". If a request
mentions discovery, crawling, leads, outreach, or scoring, it belongs in that repo, not here.

Related but separate: `E:\ATW Business` holds business documents (outreach brief, revenue
workbook, product catalogue) — no code.

## Design system

The whole site follows the approved **v1** design: Lora + Schibsted Grotesk type, warm green +
gold palette, rounded/circular imagery. Tokens live as CSS custom properties in
`app/globals.css`; `components/ui/Button.tsx` implements the two v1 button variants. The design
handoff is under `Design Brief Submission/`. Photography under `public/placeholders` is approved
production photography (the folder name is legacy).

## Commands

```bash
npm install
npm run dev    # http://localhost:3000
npm run lint
npm run build
```

## Production services

- Enquiry form posts to `app/api/enquiry/route.ts`, delivered via **Resend** (server-only env in
  `.env.local` locally, Vercel env in production; `asiantopwellness.com` must stay verified as a
  Resend sending domain).
- **GA4** loads only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set; events (`generate_lead`,
  `whatsapp_click`, `email_click`, `phone_click`) go through `lib/analytics.ts`.
- Canonical URLs and the sitemap use `NEXT_PUBLIC_SITE_URL` (defaults to the production domain).
- See `README.md` for the full env/analytics details before touching any of this.
