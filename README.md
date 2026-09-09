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

Vercel Web Analytics is included in the root layout. Enable Web Analytics for the project in the Vercel dashboard
before the production deployment.

Canonical URLs and the generated sitemap use `NEXT_PUBLIC_SITE_URL`, defaulting to
`https://www.asiantopwellness.com`.
