# Projectour — website

Context for any Claude Code session working in this repo. Read this first.

## What Projectour is

A **global destination management company (DMC)**. One service, sold B2B to travel
agencies, advisors, creators and tour operators:

> Send us the brief. We quote it with a vetted local operator in the destination, re-check
> everything on the client's yes, book it, and run it on the ground. The agency keeps the
> client relationship and its margin.

The coverage is a network of local ground operators in 137 countries, each vetted by
Projectour and used on real trips.

### History, so you do not reintroduce it

Until September 2026 the company sold two things: **Autopilot**, a coordination software
product, and **Horizon**, the operator network. The founder dropped the software. The network
*is* the company now, under the Projectour name. `hyperporter-3.html` is the archived
prototype of that old two-product site and is not served.

### Terminology rules — do not break these

- Projectour is **not software**. Never describe a platform, app, dashboard, thread, pipeline,
  automation or subscription. There is nothing to "sign up" for or "demo".
- Do not use the names **Autopilot** or **Horizon** anywhere on the site. The network is
  "the network" or "Projectour's network".
- The customer's action is to **send a brief** (or **request a quote**). The company's
  actions are to quote, confirm, book, prepare and run.
- Every step is carried by a person. Money is confirmed by a person, in writing. Do not
  overstate speed or make service-level promises (response times, uptime) that nobody has
  signed off.
- The audience is the travel business, never the end traveller. Net rates are for the
  agency; the traveller never sees them.

## Current state of the code

Astro 7, fully static, no adapter. `npm run build` runs `astro check`, `astro build`, then
`scripts/check-seo.mjs`, which fails on SEO contradictions and on a canonical pointing at
the upstream domain. Deploys to **Vercel on push to `main`** — see `VERCEL.md`. Preview
deployments are noindex with no sitemap. Nothing hardcodes a domain: the origin resolves from
the environment in `src/lib/site.mjs`.

### Routes

| Route | Source | Notes |
|---|---|---|
| `/` | `src/pages/index.astro` | Dark map hero, scenes, regions, services, process, stats |
| `/how` | `src/pages/how.astro` | The six-step process, who carries each step |
| `/network` | `src/pages/network.astro` | Coverage, vetting, note for operators |
| `/destinations` | `src/pages/destinations/index.astro` | Interactive map and the full country list |
| `/destinations/{slug}` | `src/layouts/Destination.astro` | 137 pages, noindex until each has unique content |
| `/regions/{slug}` | `src/pages/regions/[slug].astro` | 7 pages |
| `/blog`, `/blog/{slug}` | content collection | 4 posts |
| `/contact` | `src/pages/contact.astro` | The brief form. No backend: it composes an email |
| `/about`, `/terms`, `/privacy` | | noindex until bios are real and counsel has reviewed |

Old URLs (`/autopilot`, `/horizon`, `/signup`, `/preview/*`) redirect in `vercel.json`.

### Data

- `src/lib/process.ts` — `PROCESS`, the six steps. Drives `/how` and the homepage accordion.
- `src/lib/counts.ts` — the single source for country and region figures. Never hard-code them.
- `src/lib/destinationContent.ts` — `SERVICES` and `GUARANTEE`, the shared destination blocks.
- `src/lib/feed.ts` — illustrative entries for the header's activity rail.
- `src/lib/contact.ts` — the one place the contact domain is written. It is spelled
  `projecture.com`, deliberately; see the comment there.
- `src/content/destinations/*.md` — frontmatter only: `title`, `region`, `description`,
  optional `heroImage` + `heroAlt`, `index` (default false).
- `src/content/blog/*.mdx` — `title`, `dek`, `cat`, `date`.
- `src/lib/landmark/` — 50 generated SVG landmark scenes, the fallback wherever a
  destination has no `heroImage`.
- `src/lib/worldMap.ts` + `WorldMap.astro` — Natural Earth geometry projected at build time.
  The build fails if any destination has no geometry.

### Design system

Light base, punctuated by full-bleed dark moments: the homepage hero, the coverage map, the
statement bands, the stats block and the footer. Structure and restraint from harvey.ai; the
dark hero and coverage map from starlink.com.

- **Display type**: Newsreader (serif). **Everything else**: Hyperlocal ROM, the brand cut of
  ABC ROM. IBM Plex Mono survives only in the activity rail.
- **No accent colour.** `--signal` resolves to a warm grey. Amber is the only colour on the
  site and means one thing: a step a person must touch. On this site that is the money step.
  Do not use it decoratively.
- Shared page patterns are the `hx-` classes in `src/styles/global.css`: page head, numbered
  rows, feature grid, note, tiles, editorial index, statement band, dark stats.
- Reveal-on-scroll (`.rv` → `.in`) and a full `prefers-reduced-motion` kill switch. Keep it.

### Font licence — outstanding

Hyperlocal ROM was supplied under a **desktop** licence, whose terms forbid "storing on
publicly available servers". It is live at the founder's explicit instruction. A Dinamo
**web** licence is still required.

## Known gaps — these need doing

1. **Thin destination content.** 137 destination pages share the same blocks apart from the
   country name and a one-line description. They are noindex until each has genuinely unique
   material. Flip `index: true` per page once it does.
2. **Contact form has no backend.** It opens the visitor's mail client with a composed
   email. Good enough to launch, but a real form handler is better.
3. **About page** has three `Name pending` placeholder bios and is noindex.
4. **Terms and Privacy** are drafts pending counsel and are noindex.
5. **Country count** — the dataset holds 137; a founder brief said "100+". Confirm the real
   number before making claims in print. The site derives it, so changing the dataset changes
   every page.
6. **Award badges** — "Hospitality B2B Travel Partner" and "UN Tourism Winner" have been
   REMOVED pending confirmation. Restore only once verified.
7. **Footer social links** are `#` placeholders.
8. **Photography.** All destination art is generated SVG. Set `heroImage` + `heroAlt` in a
   destination's frontmatter to use a licensed photo. See `public/photos/README.md`.

## Working style

- Terse and direct. Explain reasoning *before* implementing, not after.
- One decision at a time; wait for confirmation before moving to the next.
- Make targeted edits. Do not rebuild or "improve" things that weren't asked about.
- Push back on overstatement, wordiness, and visual clutter.
- Short punchy lines for positioning copy. Cleanly structured prose for spec documents.
