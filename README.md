# Simiyu Motors — Website

Next.js (App Router) + TypeScript + Tailwind CSS.

## Status: Phase 1 (Foundation) + Phase 2 (Homepage) + Phase 3 (Inventory) + Phase 4 (Forms) + Phase 5 (About + Contact) + Phase 6 (SEO, accessibility, motion, responsive QA) ✅

**Real contact info is now live** — phone, WhatsApp, email, address, and
Instagram/Facebook/TikTok are the actual business details, no longer
placeholders. The floating WhatsApp button and footer links are active.
Only business hours and an X/Twitter link remain flagged placeholders
(not yet supplied).

**Phase 1 — Foundation**
- Project scaffold (Next.js 14, TypeScript strict mode, Tailwind, ESLint)
- Design tokens wired into Tailwind (`tailwind.config.ts` + `app/globals.css`)
- Typography: Space Grotesk (headings) + Inter (body) via `next/font/google`
- Brand assets prepared in `public/branding/` (see note below)
- Persistent layout: sticky/compacting header, footer, floating WhatsApp button
- All routes scaffolded and navigable, with placeholder content for pages not yet built

**Phase 2 — Homepage** (`app/page.tsx`, `components/home/*`)
- Hero with staggered reveal animation and diagonal cyan/red geometry echoing the logo's motion language
- Featured vehicles grid (`components/vehicles/VehicleCard.tsx`) pulling from sample data in `data/vehicles.ts`
- Why Simiyu Motors — typography-led trust section, no icon tiles
- Import teaser (3-step) + Services teaser + How it works (4-step)
- Testimonials — honest empty state, no fabricated quotes
- Trust stats band — placeholder-flagged until real figures are supplied
- Final CTA band with WhatsApp fallback to Contact when no number is configured
- All 32 `.ts`/`.tsx` files syntax-checked and all `@/` imports verified to resolve

**Phase 3 — Inventory** (`app/cars/`, `components/vehicles/*`)
- `/cars`: client-side filterable inventory (`CarsExplorer.tsx`) — make, body type, fuel, transmission, import status, max price, plus sort (newest, price, mileage). Live result count, "no results" state that offers Request a Car instead of a dead end, clear-filters affordance
- `/cars/[slug]`: full vehicle detail page — photo gallery with thumbnail switching (still placeholder photography), spec table, description, features list, sticky enquiry panel with mail + WhatsApp CTAs, breadcrumb, similar-vehicles section matched by body type/make
- Both routes are server components with real per-route/per-vehicle SEO metadata; `/cars/[slug]` uses `generateStaticParams` so every sample vehicle pre-renders; unknown slugs hit Next's `notFound()`
- `data/vehicles.ts` extended with `bodyType`, `description`, `features`, `photoCount`, plus `getVehicleBySlug` / `getSimilarVehicles` helpers

**Phase 4 — Import / Request / Sell / Services forms** (`app/import`, `app/request-a-car`, `app/sell-your-car`, `app/services`, `components/forms/*`, `app/api/*`)
- All four forms use React Hook Form + Zod (`lib/validation.ts`), with shared accessible field primitives (`components/forms/fields.tsx`) and a shared submit-status hook (`lib/useFormSubmit.ts`) driving real idle/loading/success/error states
- Each form POSTs to its own Next.js API route (`/api/import-request`, `/api/request-a-car`, `/api/sell-your-car`, `/api/book-service`), which validates server-side with the same Zod schema and returns a real response — **important:** these routes accept and validate submissions but do not yet forward them anywhere (no email/CRM/DB wired up). Every route has a `// TODO` marking exactly where to add that. Success/error states are driven by real HTTP responses, never faked client-side, per the brief's rule against pretending a form succeeded with no backend.
- `/import`: hero, 7-step process (`components/import/ImportProcess.tsx`), import request form, FAQ accordion (native `<details>`, no JS dependency)
- `/request-a-car`: single-purpose page, lighter form (name/contact/make/model/budget/details) — deliberately no nav-away temptation
- `/sell-your-car`: valuation-request framing, includes a photo picker that's UI-only for now (clearly labeled — it doesn't upload anywhere yet, since there's no storage backend to send it to)
- `/services`: service cards linking down to a booking form (`ServiceBookingForm`) at `#book`

**Phase 5 — About + Contact** (`app/about`, `app/contact`, `components/forms/ContactForm.tsx`, `app/api/contact`)
- `/about`: narrative order per the brief — what Simiyu Motors does → sourcing/import capability → quality commitment → servicing continuity → CTA. No generic "we're passionate about..." copy.
- `/contact`: real phone/WhatsApp/email/address rendered as working `tel:`/`wa.me`/`mailto:` links, a Google Maps embed (no API key required for the basic embed), business hours still shown as an explicit placeholder, and a validated contact form posting to `/api/contact` (same real-response pattern as the Phase 4 forms — logs server-side, not yet forwarded to email/CRM).

**Phase 6 — SEO, accessibility, motion, responsive QA**

*SEO*
- New `lib/seo.ts` — a `buildMetadata()` helper every route now uses, so each page gets a unique title/description **and** matching Open Graph data. (Next.js doesn't deep-merge a page's title/description into the root layout's `openGraph` object — without this, every page would've shared the home page's generic OG preview when shared on social media.)
- Added the missing metadata export on the homepage (it had none before).
- Every route now sets a canonical URL via `alternates.canonical`.

*Accessibility — two real WCAG AA failures fixed, not just cosmetic tokens:*
- **Brand red (`#F52F3E`) only hit 3.92:1 with white button text** (needs 4.5:1) — and every CTA button on the site is white-text-on-red. Introduced a ~10% darker `--color-red` (`#DC2A37`, 4.74:1) that's barely distinguishable from the original but passes. The true brand red is preserved as `--color-red-brand` and still used for the purely decorative hero overlay.
- **Brand cyan (`#019CE3`) only hit 3.06:1 on white** (great on navy at 6.41:1, fails badly on light backgrounds) — and it was used for the eyebrow label pattern on nearly every section. Added `--color-cyan-text` (`#0075AA`, 5.09:1) and swapped every light-background instance (eyebrows, links, "submit another" success links) across ~16 files, while leaving cyan-on-navy, large bold numerals, and aria-hidden icons on the original token.
- Also corrected `--color-muted` (was 4.46:1 on the lightest background, just under AA) and every `text-white/40` instance (3.78:1) sitewide.
- Added a skip-to-content link (`app/layout.tsx`) and `id="main-content"` on `<main>`.
- Fixed `next/image` width/height props on both logo crops to match actual asset dimensions (were mismatched, causing slight distortion/layout-shift risk).
- Deleted the now-dead `ComingSoon.tsx` placeholder component.
- All contrast fixes computed against the actual WCAG relative-luminance formula, not eyeballed — see the comments in `app/globals.css` for the exact numbers and reasoning.

*Motion*
- `HomeHero`'s Framer Motion stagger animation now reads `useReducedMotion()` and collapses to instant when reduced motion is requested. (The CSS-level `prefers-reduced-motion` override in `globals.css` only catches CSS transitions/animations — Framer Motion animates via JS and doesn't automatically respect it.)

*Responsive*
- Audited every fixed-width/pixel value and multi-column grid for overflow risk at 320–414px; the two `w-[…]%` decorative elements are `hidden` below `lg`, and the only non-responsive `grid-cols-2` usages are intentional two-column spec tables sized for a card's full mobile width.
- All 51 project files re-verified: syntax-checked and every `@/` import confirmed to resolve.

Not yet built (see `simiyu-motors-site-plan.md` for phase breakdown):
- Phase 7: final quality bar checklist

## Getting started

This environment has no network access, so dependencies aren't installed yet.
Locally:

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## A note on brand assets

`public/branding/logo-sheet-reference.png` is the original logo sheet as
supplied — it's kept as a reference, not used directly in the UI.

`logo-horizontal.png`, `logo-emblem.png`, and `logo-stacked-dark.png` were
cropped out of that sheet programmatically (white background keyed to
transparency) so the header/footer/favicon have something real to render
against. These are good enough for development, but before shipping to
production, ask the designer for proper vector (SVG) exports of each
lockup — a raster crop will look soft at large sizes (e.g. a big hero
placement) or under close inspection.

## Placeholder data

`data/site.ts` holds contact info and social links. Phone, WhatsApp,
email, address, Instagram, Facebook, and TikTok are now the real business
details. Business hours and an X/Twitter link are still typed placeholders
(`isPlaceholder: true`) — fill those in once supplied. Components already
handle the placeholder state gracefully (e.g. the WhatsApp button renders
disabled if the number were ever unset again).

## A note on sample content

`data/vehicles.ts` (6 sample listings), `data/stats.ts` (trust-band figures),
and `data/testimonials.ts` (empty) are all placeholder/demo data, flagged as
such in code comments. None of it should reach production as-is:
- Replace `vehicles.ts` with real inventory, real prices, and real photos
  before launch. Vehicle cards currently render a diagonal placeholder
  pattern labeled "Photo pending" instead of a real image.
- Replace `stats.ts` values once the business confirms real figures — the
  stat numbers render dimmed while `isPlaceholder: true`.
- Leave `testimonials.ts` empty until real, attributable reviews exist.
