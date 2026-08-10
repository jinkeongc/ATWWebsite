# Asian Top Wellness — Website

Marketing site for Asian Top Wellness (ATW), a Malaysia-based OEM / private-label wellness
product developer and manufacturer. Built with Next.js (App Router) + TypeScript.

## Status

The **homepage** is implemented, built from the approved design handoff in
[`Design Brief Submission/design_handoff_atw_homepage`](<Design Brief Submission/design_handoff_atw_homepage/README.md>).
Remaining pages (About, Products, Services, Contact) are specified in that handoff but not yet built —
follow the same design system when implementing them.

Photography is placeholder (`ImageSlot` drop-zones) until real/generated imagery is commissioned; see
the handoff's "Assets" section for what's needed.

## Design system

Tokens (colors, type, spacing, effects) are ported verbatim from the handoff into CSS custom properties
in [`app/globals.css`](app/globals.css). The `Button` component
([`components/ui/Button.tsx`](components/ui/Button.tsx)) implements the four variants (primary,
secondary, inverse, ghost) from the handoff's `Button.jsx` reference.

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
