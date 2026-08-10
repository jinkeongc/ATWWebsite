# Asian Top Wellness — Website

Marketing site for Asian Top Wellness (ATW), a Malaysia-based OEM / private-label wellness
product developer and manufacturer. Built with Next.js (App Router) + TypeScript.

## Status

The **homepage** is implemented, structured from the handoff in
[`Design Brief Submission/design_handoff_atw_homepage`](<Design Brief Submission/design_handoff_atw_homepage/README.md>)
but visually styled to match the approved **v1** design (`ATW Homepage v1.dc.html` in that folder) —
Lora/Schibsted Grotesk type, rounded/circular imagery, and the warm green + gold palette, with the v2
scroll-parallax and hero entrance animation retained. Remaining pages (About, Products, Services, Contact)
are specified in the handoff but not yet built — follow the same visual system when implementing them.

Photography is placeholder (`ImageSlot` drop-zones) until real/generated imagery is commissioned; see
the handoff's "Assets" section for what's needed.

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
