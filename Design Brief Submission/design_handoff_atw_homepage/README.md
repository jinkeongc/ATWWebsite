# Handoff: ATW Website Redesign — Homepage (Visual POC)

## Overview
Redesign of the Asian Top Wellness (asiantopwellness.com) marketing website around the positioning **"From idea to finished wellness product."** ATW is a Malaysia-based OEM / private-label wellness product developer and manufacturer; the site is a B2B lead-generation site (not ecommerce). This handoff covers the **homepage**; the remaining pages (About, Products, Services, Contact) are specified in the original brief and should follow the same visual system.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, not production code to copy directly. The task is to **recreate the design in the target codebase's environment** (e.g. Next.js/React, Astro, or whatever the production site will be built on) using its established patterns. If no environment exists yet, choose an appropriate modern framework (Next.js or Astro are good fits for a marketing site) and implement there.

`ATW Homepage v2.dc.html` is the approved design. Ignore the `<x-dc>`/`sc-for`/`x-import`/`image-slot` wrapper machinery — it is prototype tooling. What matters is the markup structure, inline styles, tokens, and copy.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and interactions are final design intent. Recreate pixel-perfectly. One caveat: this POC is **desktop-only** (~1200–1440px). Responsive/mobile behavior is NOT designed yet — implement desktop faithfully and make reasonable responsive judgments (or wait for a mobile pass).

## Design Tokens
Copy `tokens/` CSS files verbatim as CSS custom properties (or map to Tailwind config).

Colors (from `tokens/colors.css`):
- Greens: `--green-900: #123526`, `--green-800: #1b4433`, `--green-700: #2a5a44`, `--green-500: #4e7a5f`
- Sage: `--sage-300: #b6c9b1`, `--sage-200: #cfdcc9`, `--sage-100: #e4ecdf`
- Lime (accent, CTAs only): `--lime-400: #d7ef53`, `--lime-300: #e3f57e`, `--lime-500: #c4e02f`
- Cream: `--cream-100: #f6f2e8` (page bg), `--cream-200: #efe9da`, `--cream-300: #e7dfcc`
- Clay (rare accent): `--clay-500: #c2542f`, `--clay-300: #e0a183`
- Ink: `--ink-900: #191914`, `--ink-700: #3c3c34`, `--ink-500: #6b6b60`, `--ink-300: #a3a396`
- Semantic: page bg `cream-100`; inverse sections `green-900`; brand text `green-900`; links `green-800` → hover `green-500`; subtle border `rgba(25,25,20,.14)`; selection `lime-300`.

Typography (from `tokens/typography.css`):
- Sans (body/UI): **Hanken Grotesk** (Google Fonts), 300–600
- Serif (headlines): **Newsreader** (Google Fonts), 400–500, sentence case
- Scale: display clamp(44px,6vw,72px); h1 44px; h2 32px; h3 22px; body 16px; small 14px; micro 12px
- Leading: tight 1.05 (display/hero), snug 1.2 (headings), body 1.55
- Labels/eyebrows: 12px, weight 600, uppercase, letter-spacing .12em, sans

Effects (from `tokens/effects.css`):
- Radius: **0 on imagery and cards** (square corners are part of the identity); pill (999px) on buttons/chips
- Shadows: card `0 1px 2px rgba(25,25,20,.06)`, float `0 8px 28px rgba(25,25,20,.14)`
- Motion: ease `cubic-bezier(.22,1,.36,1)`, fast 150ms, medium 280ms

Spacing rhythm: sections pad ~112px vertical; content max-width 1200px with 24px side padding; grid gaps 24–72px.

## Buttons (see `Button.jsx` reference)
All buttons: pill radius, uppercase, sans 600, letter-spacing .12em; sizes sm 8×18/11px, md 12×26/12px, lg 16×34/13px.
- **primary**: lime-400 bg, ink-900 text → hover lime-500. Reserved for the highest-value CTAs (header CTA, hero, final CTA).
- **secondary**: transparent, 1px ink-900 border → hover cream-300 bg.
- **inverse**: green-900 bg, cream-100 text → hover green-800. Used for mid-page CTAs.
- **ghost**: plain text link + "→", no uppercase → hover green-500.

## Screens / Sections (homepage, top to bottom)

1. **Sticky nav** — 76px tall, `rgba(246,242,232,.94)` + blur(8px), 1px bottom border. Left: current ATW logo (height 44px). Center: Home / About Us / Products / Services / Contact (14px, 500). Right: primary button "Create Your Product".
2. **Hero** — 2-col grid (1.05fr/1fr, 64px gap). Left: eyebrow "OEM & PRIVATE-LABEL WELLNESS · MALAYSIA" with 28px rule; serif h1 64px green-900 "From idea to finished wellness product."; 19px ink-700 supporting paragraph; primary lg "Start Your Product" + secondary lg "See How It Works". Right: 600px-tall collage — sage-100 offset backdrop block, main 420×500 photo (formulation/powders), 200×200 ingredient photo bottom-left, white caption card bottom-right ("Idea → Sample → Shelf" serif 24px / "One partner across the whole journey" 14px muted). Entrance: fade-up 0.7s (right column delayed 0.15s).
3. **What we can create together** — h2 serif 44px + intro paragraph right-aligned in header row; 3×2 grid of format tiles (220px photo + 16px semibold title + 14px muted desc): drink powders & blends, functional coffee/beverages, wellness chocolate & cocoa, sachets/single-serve, jars/pouches/canisters, "Your formulation".
4. **Custom Product Development** — sage-100 full-width band, 2-col. Eyebrow; h2 serif 48px "Have an idea? Let's develop it."; paragraph; chip row (white pill chips, uppercase micro): An ingredient / A flavor / A health positioning / A target market / A rough concept / Packaging requirements; inverse lg button "Discuss Your Product Idea". Right: 520px photo.
5. **From idea to market** — green-900 full-width inverse band. h2 serif cream + right-aligned intro (sage-300). 7-col staggered grid (odd columns flush, even offset 36px down): 01 Product Idea → 02 Formulation → 03 Sampling → 04 Refinement → 05 Manufacturing → 06 Packaging → 07 Delivery. Each: top border rgba(cream,.28), serif number 36px sage-300, name 15px semibold cream, desc 13px sage-200. Centered lime text-link below: "Start at stage one — tell us your idea →".
6. **Example formulations** — eyebrow + h2 "Proof of what our lab can build" + framing paragraph (examples of capability, not consumer products). Two alternating 2-col rows: **Wheatgrass Coffee** (photo left) and **Moringa Chocolate** (photo right); each h3 serif 32px + paragraph + inverse md "Request a Sample" + secondary md "Customize This Product".
7. **Why brands build with ATW** — 2-col: sticky serif h2 left; right 2×3 grid of hairline-topped items: Custom formulation / OEM private label / Ingredient sourcing / Production & packaging / Export & logistics support / Flexible collaboration (title 16px semibold + 14px muted desc).
8. **About preview** — cream-200 band, 2-col: 400px photo left; eyebrow + h2 38px "A wellness product partner in Petaling Jaya, working with the world" + paragraph + ghost link "More about ATW →".
9. **Final CTA** — centered: serif 52px "Your next wellness product can start with a conversation." + paragraph + primary lg "Discuss Your Product Idea" + secondary lg "WhatsApp Us".
10. **Footer** — green-900. 4 cols: brand (serif 24px "Asian Top Wellness" + tagline), Explore nav, Start nav (Create Your Product / Request a Sample / WhatsApp), Contact (address: 30, Jalan SS 2/72, SS 2, 47300 Petaling Jaya, Selangor, Malaysia; info@asiantopwellness.com). Column headers uppercase micro sage-300; links sage-200 → hover cream. Copyright line below hairline.
11. **Floating WhatsApp button** — fixed bottom-right 28px, 56px circle, green-800 → hover green-700, white WhatsApp glyph, float shadow. Link: `https://api.whatsapp.com/send?phone=60129619900`.

## Interactions & Behavior
- **Parallax**: elements marked `data-parallax="±0.05/0.06"` translate Y by `(elementCenter − viewportCenter) × speed` on scroll, via a rAF-throttled passive scroll listener. Applied to the hero photos and each large section photo. Must be disabled under `prefers-reduced-motion: reduce`. Keep it subtle — max drift ~±40px.
- Hero entrance: fadeUp keyframe (opacity 0 / translateY 18px → 1 / 0), 0.7s ease.
- Button hovers per the Button spec; link hovers green-800 → green-500; all transitions 150ms with the ease-out curve.
- All CTAs route to the Contact page (mailto/WhatsApp in the POC).

## State Management
None beyond UI state. Static marketing page. (Contact-page form, when built, needs client-side validation + a submission endpoint — out of scope for this POC.)

## Assets
- **Logo**: current ATW logo, loaded from the existing site (Wix CDN URL in the prototype). Get the source file for production.
- **Photography**: all imagery is placeholder drop-zones (`<image-slot>`). Real/generated imagery needed: ingredient close-ups (wheatgrass, moringa, cocoa, powders), formulation/lab-style work (food-oriented, not pharmaceutical), neutral unbranded packaging (sachets, jars, pouches), facility/team. **Never show identifiable customer brands** — ATW is OEM; use neutral/fictional packaging only.
- Fonts: Hanken Grotesk + Newsreader from Google Fonts.
- WhatsApp icon: inline SVG in the prototype.

## Remaining pages (designed brief, not yet prototyped)
Follow the original brief: Products (custom-product hero dominates the two formulations), Services (journey-structured narrative page), About (concise, human), Contact (commercial enquiry form: name/company/email/country/phone-WhatsApp, interest checkboxes, idea textarea, CTA "Start the Conversation"). Reuse the tokens, buttons, band rhythm, and eyebrow/serif-headline pattern from the homepage.

## Files
- `ATW Homepage v2.dc.html` — approved homepage design (design-system version, with parallax)
- `ATW Homepage v1.dc.html` — earlier pre-design-system variant (reference only)
- `tokens/` — colors.css, typography.css, effects.css, spacing.css, fonts.css, base.css (copy verbatim)
- `styles.css` — design-system shared styles
- `Button.jsx` — reference React button component implementing the 4 variants
