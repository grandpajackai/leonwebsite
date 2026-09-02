# Handoff: Leon Roofing &amp; Restoration — full marketing site

## Overview
A bilingual (English/Spanish) marketing website for **Leon Roofing & Restoration, Inc.** — a family-owned South Florida restoration and construction company (60+ years, Miami-Dade / Broward / Palm Beach). The site sells emergency restoration (water, mold, storm, sewage), HVAC service, roofing and exterior work, and the reconstruction that follows a loss.

Primary conversion goal: **phone call** — `(786) 702-2090`, live-answered 24/7. Secondary: the "Request a crew" form.

## About the Design Files
The files in `prototype/` are **design references created in HTML** — a working prototype demonstrating intended look, copy, and behavior. They are **not production code to copy directly.**

The prototype is authored in a proprietary streaming-template runtime (`support.js`, `<x-dc>`, `<sc-for>`, `<sc-if>`, `{{ holes }}`). **Do not try to keep that runtime.** The task is to **recreate these designs in a real production stack.** For a marketing site of this kind the recommended target is:

- **Next.js (App Router) + TypeScript + Tailwind CSS**, statically generated
- One route per page, `next-intl` (or equivalent) for the EN/ES split
- `next/image` for photography
- A form endpoint posting to email + CRM (see "Backend needs")

`prototype/site-content.js` is the single most valuable file: it contains **all finished copy in both languages** as a plain JS object. Port it as-is into typed content files (`content/en.ts`, `content/es.ts`) or a CMS. Do not rewrite the copy — it was written and approved for this client.

## Fidelity
**High-fidelity.** Colors, typography, spacing, hover states and copy are final. Recreate pixel-faithfully. Layout is desktop-first at a 1400px max content width; the developer must add the mobile/tablet breakpoints (see "Responsive behavior" — mobile layouts were mocked separately in the explorations file).

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| `navy` | `#0c1520` | Primary dark. Header, hero, dark bands, sidebars |
| `ink` | `#12100b` | Deepest dark. Footer, stat bands, button-on-amber |
| `amber` | `#f2b21a` | Primary accent / CTA. Top strip, buttons, CTA bands |
| `amber-hover` | `#ffc63c` | Hover on amber buttons |
| `gold` | `#e6bb5c` | Logo tagline text on dark |
| `gold-deep` | `#b8850c` | Small caps labels + links on light backgrounds |
| `paper` | `#f7f5f1` | Page background, light sections |
| `white` | `#ffffff` | Cards, alternating light sections |
| `card-border` | `rgba(12,21,32,.11)` | Card borders on light |
| `rule-light` | `rgba(12,21,32,.12–.18)` | Dividers on light |
| `rule-dark` | `rgba(255,255,255,.10–.16)` | Dividers on dark |
| `body-on-light` | `rgba(12,21,32,.66)` | Body copy on light |
| `body-on-dark` | `rgba(255,255,255,.72)` | Body copy on dark |
| `placeholder-stripe` | `repeating-linear-gradient(135deg,#dedad2 0 7px,#e9e5de 7px 14px)` | Light photo placeholder |
| `placeholder-stripe-dark` | `repeating-linear-gradient(135deg,rgba(255,255,255,.10) 0 7px,rgba(255,255,255,.04) 7px 14px)` | Dark photo placeholder |

Max 2 background colors per section. Amber is used only for urgency and CTAs — never decoratively.

### Typography
- **Archivo** (Google Fonts, weights 400/500/600/700/800) — everything
- **IBM Plex Mono** (400/500) — small caps labels, credentials, breadcrumbs, log tables

| Role | Spec |
|---|---|
| Home H1 | `800 64px/.95`, `letter-spacing:-.03em`, `text-wrap:balance` |
| Page H1 | `800 50px/1`, `-.03em` |
| Service H1 | `800 50px/1`, `-.03em` |
| Section H2 | `700 30–34px/1.1–1.15`, `-.02em` |
| Card H3 | `700 19–21px/1.2` |
| Sub-card H3 | `700 16–17px/1.25` |
| Lead paragraph | `400 17–17.5px/1.55–1.58`, `text-wrap:pretty`, max-width ~520px |
| Body | `400 14–15.5px/1.55–1.62` |
| Mono label | `500 10–11px/1`, `letter-spacing:.12–.14em`, uppercase |
| Logo wordmark | `800 20px/1`, `letter-spacing:.09em`, "LEON" |
| Logo tagline | `500 8px/1` mono, `letter-spacing:.16em`, "ROOFING & RESTORATION", `white-space:nowrap` (**must never wrap**) |
| Phone CTA | `700 14px/1`; hero phone `800 24px/1` |

### Spacing / geometry
- Content wrapper: `max-width:1400px; margin:0 auto; padding:0 32px`
- Section vertical padding: `52–64px` (dark bands `52px`, light `56–64px`)
- Card radius `10px`; sidebar/panel radius `12px`; button radius `7px`; pill radius `100px`
- Grid gaps: cards `18px`, gallery `14–16px`, hairline grids `1px` on a `rgba` background (the 1px-gap trick creates dividers — keep it)
- Card hover: `box-shadow:0 10px 26px rgba(12,21,32,.12); transform:translateY(-2px)`
- Sticky header shadow: `0 2px 14px rgba(0,0,0,.18)`
- Chat widget shadow: `0 10px 26px rgba(12,21,32,.3)`

## Site Structure (16 routes × 2 languages)

Nav is deliberately simple: **Services · Our Work · Service Areas · About · Contact**, with a services index page carrying the 14 service pages in four groups.

| Route | Page | Notes |
|---|---|---|
| `/` | Home | |
| `/services` | Services index | 4 groups |
| `/services/water-extraction` | Emergency water extraction | |
| `/services/structural-drying` | Structural drying | |
| `/services/mold` | Mold remediation | |
| `/services/storm` | Storm & flood cleanup | |
| `/services/sewage` | Sewage backup cleanup | |
| `/services/tarping` | Emergency tarping & board-up | |
| `/services/hvac` | HVAC service & installation | 8 sub-services; highest-value lead page |
| `/services/thermal-imaging` | Thermal imaging & leak detection | uses the real FLIR photo |
| `/services/roofing` | Roofing | |
| `/services/roof-cleaning` | Roof cleaning & soft wash | |
| `/services/packout` | Contents pack-out | |
| `/services/claims` | Insurance claims help | |
| `/services/rebuild` | Reconstruction & rebuild | |
| `/services/commercial` | Commercial & property managers | uses the real van photo |
| `/work` | Our work gallery | 20 photos |
| `/areas` | Service areas | 3 counties, 34 cities |
| `/about` | About | uses the real owner photo |
| `/contact` | Request a crew | 11-field form |

Service-page groups (order matters):
1. **EMERGENCY RESTORATION** — water-extraction, structural-drying, mold, storm, sewage, tarping
2. **HVAC & INSPECTIONS** — hvac, thermal-imaging
3. **ROOFING & EXTERIOR** — roofing, roof-cleaning
4. **AFTER THE EMERGENCY** — packout, claims, rebuild, commercial

## Screens / Views

### Global chrome (every page)

**1. Amber credential strip** — `background:#f2b21a; color:#12100b; padding:8px 32px`, flex space-between, `wrap`. Left: `600 12px` live-answer line. Right: four mono credentials at `500 10.5px/1`, `letter-spacing:.1em` — `EPA 608 CERTIFIED · OSHA 10 · 60+ YEARS OF EXPERIENCE · FULLY INSURED`. These four are the **only** credentials permitted — see "Legal / truthfulness constraints".

**2. Sticky header** — `background:#0c1520`, `position:sticky; top:0; z-index:40`. Row: logo lockup (44px lion mark + stacked LEON / ROOFING & RESTORATION) → nav items (`500 13.5px`, `rgba(255,255,255,.82)`, hover white + 1.5px amber bottom border) → language toggle (mono 11px in a `rgba(255,255,255,.25)` 1px box, radius 5px, label shows the *other* language) → amber phone button with a 7px ink dot.

**3. Footer** — `background:#12100b`. 4-column grid `1.3fr .9fr .9fr .8fr`: logo + tagline + email · Emergency services · After the emergency · Company nav. Bottom rule row: legal line left, credentials right, mono `10.5px`, `letter-spacing:.07em`.

**4. Text-us widget** — `position:fixed; right:22px; bottom:22px; z-index:60`. Collapsed: navy pill, amber dot, `700 14.5px` "Text us". Expanded: 290px white card, navy header with × close, body copy, phone input, amber send button. Bilingual.

### Home
Sections in order:
1. **Hero** — 2-col `1.05fr .95fr`, min-height 460px. Left (`padding:72px 48px 66px 32px`): amber mono live-dispatch line with dot → H1 (two lines, second line amber) → lead paragraph → amber "Call (786) 702-2090" + outlined "Request a crew →" → three trust bullets. Right: **real photo** (`assets/photos/thermal.png`, `center 22%/cover`).
2. **Proof band** — `#12100b`. 2-col `.85fr 1.15fr`: heading + body left; 3 hairline cards right, each with a 22px amber dot, H3, body.
3. **Services grid** — paper bg. Header row with H2 + "Services →" link. `repeat(auto-fit,minmax(300px,1fr))`, gap 18px. 8 cards: 112px photo strip (real photo or stripe placeholder), mono index `01–08`, H3, blurb. Whole card is the click target.
4. **Process band** — navy. H2 + sub, then `repeat(auto-fit,minmax(210px,1fr))` hairline grid of 5 steps: amber mono stage label (`CALL / ON SITE / DOCUMENT / DRY / REBUILD`), H3, body.
5. **Equipment band** — white, 2-col `.95fr 1.05fr`. Copy left, **real van photo** right (min-height 380px).
6. **Recent work** — paper. Header + "Our work →". 4 photo tiles, 200px tall, caption bar under each.
7. **Insurance + reviews** — white, 2-col. Left: mono INSURANCE label, H2, body, 3 amber-dot bullets, "Insurance claims help →". Right: reviews heading + **3 dashed empty review slots** (5 amber 11px squares + 3 grey skeleton bars). These are intentionally empty — see constraints.
8. **CTA band** — amber. H2 + sub left, ink phone button right.

### Service page (template, all 14)
- Navy header block: mono breadcrumb `SERVICES / <TITLE>` → 2-col `1.1fr .9fr` — H1 + intro + amber call button + outlined form button; right = photo (real or placeholder), min-height 340px, radius 8px.
- Paper body: 2-col `1.4fr .6fr`.
  - Main: **What's included** — 2-col hairline grid of 4–8 items (H3 + body). **How it goes** — 4 numbered rows, mono `01–04` in gold-deep, top rule per row. **Common questions** — accordion, first item open by default, `+` / `−` in gold-deep, hover `#faf9f6`, answer max-width 760px.
  - Sidebar (`position:sticky; top:88px`): navy call card (amber mono "Live answer, 24/7" + dot, `800 25px` phone, body, amber form button) · white credentials card · white related-services card (3 links, hover gold-deep).
- Amber CTA band footer.

### Services index
Navy header (H1 + sub) → paper body, 4 groups. Each group: mono label with bottom rule, then `repeat(auto-fit,minmax(300px,1fr))` white cards (H3, blurb, gold-deep arrow), same hover lift.

### Our work
Navy header → `repeat(auto-fill,minmax(260px,1fr))`, gap 16px. 20 tiles: 250px photo, caption + mono index in the bar.

### Service areas
Navy header → 300px map placeholder (needs a real map — see Assets) → 3 white county cards, each with a 2-col city list at `400 14px`.

### About
Navy header 2-col `1.15fr .85fr`: H1 + sub / **real owner photo** (min-height 400px). White band 2-col `1.2fr .8fr`: two body paragraphs at `400 17px/1.65` / credentials rail with a left rule. Paper band: "How we work" — 4 hairline value cards.

### Contact
Navy header → paper body 2-col `1.35fr .65fr`.
- White form card, radius 12px, padding 32px. 2-col field grid, gap 18px. Fields: **Name, Phone, Email, Property address, Type of damage (select), When did it happen (select), Insurance carrier, Claim number, You are the… (select), Best time to call back (select)** + full-width **photo drop zone** (dashed, hover amber border + `#fffdf6`). Amber submit button, then privacy line.
- Right rail: navy "Active emergency?" card with big amber phone button · white contact card (email, hours, credentials).
- On submit → success card: 44px amber dot, "Request received", body, ink phone button.

## Interactions & Behavior
- **Routing** — prototype is client-state; in production use real routes. Every card/nav/footer/related link navigates; scroll resets to top on navigation.
- **Language toggle** — swaps the entire content object; must be a real locale route in production (`/es/...`) for SEO. Toggle label always shows the language you'd switch *to*.
- **FAQ accordion** — one open at a time, index 0 open on page load; clicking the open item closes it.
- **Form** — no client validation in the prototype. Production: require name + phone; validate phone format; email optional; photo upload accepts multiple images, ~10MB each.
- **Hover** — nav (white + amber underline), amber buttons (`#ffc63c`), outlined buttons (amber border + amber text), cards (lift + shadow), FAQ rows (`#faf9f6`), footer links (amber), drop zone (amber border).
- **Phone links** — every phone instance is `tel:7867022090`. Keep that; it is the whole point of the site.
- **Responsive behavior (to build)** — below ~1000px collapse all 2-col grids to 1 col; header nav becomes a hamburger with a full-screen navy sheet; hero photo moves below the copy; keep the amber phone button visible in the collapsed header; add a sticky bottom call bar on mobile (mocked in the explorations file). Minimum tap target 44px.

## State Management
Prototype state, and its production equivalent:

| Prototype state | Production |
|---|---|
| `route`, `slug` | file-system routes |
| `lang` (`en` / `es`) | locale routing + middleware, persisted preference |
| `openFaq` (number, `0` default, `-1` = all closed) | local component state |
| `sent` (boolean) | form submission state (idle / submitting / sent / error) |
| `chatOpen` | local state, plus a real SMS/chat provider |
| `ready` | not needed — content is imported at build time |

## Backend needs (not in the prototype)
1. Form endpoint → email to `leonroofing.restoration@gmail.com` + CRM/Jobber/Housecall Pro; photo uploads to object storage; spam protection (Turnstile/reCAPTCHA); autoresponder.
2. Text-us widget → real SMS provider (Twilio) or a hosted widget.
3. Google reviews → live embed or a reviews API to fill the empty review slots.
4. Analytics + call tracking on the `tel:` links (this is the KPI).
5. SEO: per-page titles/descriptions in both languages, `hreflang` pairs, `LocalBusiness` + `Service` schema, per-city landing pages if they want local SEO reach.

## Assets

In `prototype/assets/`:

| File | What it is | Where used |
|---|---|---|
| `leon-lion-mark-900.png` (900×944, transparent) | Client's lion-and-ring logo, background knocked out and upscaled from their original raster file | Header, footer, mobile header |
| `photos/thermal.jpg` | **Real photo** — technician with FLIR thermal camera beside an air mover | Home hero, thermal-imaging page, claims page |
| `photos/van.jpg` | **Real photo** — service van loaded with drying equipment | Home equipment band, commercial page |
| `photos/owner.jpg` | **Real photo** — Uriah Leon in branded polo (trade show) | About page |
| `work/job-01…20.jpg` (≤900px wide) | 20 real job photos, cropped out of Instagram screenshots from `@leon_remodelandrestore` | Our work gallery, home recent-work |

**Asset gaps to fill with real photography** (currently labeled stripe placeholders, and the labels state exactly what's needed):
- Roof/exterior shots, a tarped roof, an AC condenser being serviced, a soft-wash "half-clean" roof line
- Extraction wand, air movers/LGR in place, containment barrier, PPE/sewage, pack-out boxes, multi-unit corridor
- A real three-county coverage map for `/areas`
- Google review content for the three empty review slots

**Logo caveat:** the mark is raster (900px wide here, compressed for upload; a 2250px master exists in the original design project). It softens at very large sizes. Get it redrawn as vector (SVG) before launch; the ring + lion silhouette is simple enough for a quick vector trace.

## Legal / truthfulness constraints — read this before writing any copy
The client explicitly approved only these claims. Earlier drafts contained invented figures that were **removed on purpose**; do not reintroduce them or invent new ones.

- Credentials are **exactly**: EPA 608 Certified · OSHA 10 · 60+ years of experience · Fully insured. **No contractor license number, no IICRC, no mold-remediation license number** — they aren't held yet. Add them only when the client supplies real numbers.
- **No response-time promise.** The site says "live answer 24/7" and never "45-minute arrival" or similar.
- **No statistics** — no job counts, star ratings, review counts, or years-to-dry numbers.
- **No fabricated testimonials.** The review slots are intentionally empty placeholders.
- Insurance language is deliberately hedged ("usually", "often", "we'll tell you honestly"). Keep that tone; don't harden it into guarantees.

## Domain connection (deployment)
1. Push the recreated Next.js app to GitHub.
2. Deploy to Vercel (or Netlify/Cloudflare Pages) — import the repo, framework auto-detected, build `next build`.
3. In the host's dashboard add the custom domain (e.g. `leonroofingrestoration.com` and the `www` alias).
4. At the registrar, point DNS at the host — typically an `A` record for the apex to the host's IP and a `CNAME` for `www`, or move the nameservers to the host. Propagation is minutes to a few hours.
5. TLS is issued automatically; verify HTTPS and the `www` → apex redirect.
6. Post-launch: Google Business Profile linked to the site, Search Console + Analytics, and submit `sitemap.xml`.

## Files in this bundle
```
prototype/
  Leon Restoration Website.dc.html              ← the full site prototype (primary reference)
  site-content.js                               ← ALL copy, EN + ES (port this, don't rewrite)
  Leon Water Mitigation -design explorations-.dc.html
                                                ← earlier turns: 3 homepage directions,
                                                   mobile screens, and 7 logo lockup studies
  support.js                                    ← prototype runtime only; DO NOT port
  assets/                                       ← logo, real photos, 20 gallery photos
```

To view the prototypes: open the `.dc.html` files in a browser from within the `prototype/` folder (they need `support.js`, `site-content.js` and `assets/` as siblings).
