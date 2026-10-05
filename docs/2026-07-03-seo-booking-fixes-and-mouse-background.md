# 2026-07-03 — SEO Setup, Booking Fixes, Dev Sitemap, and Mouse-Reactive Background

## Project Goal

Build and maintain Bojan Milinic's personal website — a static Astro + Tailwind CSS site hosted on Netlify at **bojanmilinic.com**, showcasing a CV, Python/GIS projects, a writing blog, Python tutoring services, and booking flow. This session focused on polish: SEO foundations, fixing stale copy/links, and adding an interactive background effect.

## How to Run / Restart

```bash
cd ~/code_projects/personal_website
npm install   # only if node_modules/ is missing
npm run dev
# → http://localhost:4321
```

## Session Goal

General site revamp pass: fix outright bugs found in review, add SEO basics, build an internal dev page listing all routes, and add a mouse-reactive background to the dark pages.

## What Changed

### Commit `a6e77d8` — SEO metadata, stale payment copy, project citations

- **SEO foundations:** set `site: 'https://bojanmilinic.com'` in `astro.config.mjs`, added `@astrojs/sitemap` (pinned to **3.2.1** — 3.7.x requires Astro 5 and crashes the build on Astro 4.16), canonical/Open Graph/Twitter tags in `BaseLayout.astro`, and `public/robots.txt`.
- **Teaching page:** removed outdated "pay via Stripe/Venmo" copy — the real flow is the Formspree form at `/book` with no upfront payment. Steps now read: choose a session → request a booking → we meet live.
- **Projects:** trimmed long descriptions and moved raw DOIs/markdown syntax into a new `links` field on each project, rendered as clickable links in `ProjectCard.astro`.
- **New `/sitemap` dev page** (`src/pages/sitemap.astro`): internal route listing every page with a short description, for review. Not in nav, excluded from sitemap.xml.

### Commit `2f575cc` — Post-pull fixes (blog merge review)

After pulling the blog integration (`/posts`, `/lab`, `/blog-archive`, globe v2/v3) from origin:

- **Booking redirect bug:** the Formspree `_next` hidden field in `book.astro` pointed to `bojanmilinic.netlify.app/booking-confirmed`; now points to `bojanmilinic.com`.
- **Sitemap filter:** excluded `/globe` (now just a meta-refresh redirect stub to `/globe-v2`) from sitemap.xml.
- **Dev `/sitemap` page and CLAUDE.md** updated with the new blog and globe routes; the `/posts` entry got an expandable dropdown (native `<details>`) that lists every post pulled dynamically via `getCollection('posts')`.

### Commit `263ff20` — Mouse-reactive background

- Fixed background layer in `BaseLayout.astro`, rendered only when `darkMode` is set (16 dark pages; light pages like `/teaching`, `/cv`, `/book` unaffected).
- Accent-blue glow follows the cursor and reveals the 40px grid pattern around it (radial-gradient mask, ~280px radius).
- Position eased via `requestAnimationFrame` lerp; loop stops when idle. Layer is invisible until first pointer move (touch devices never see it) and disabled under `prefers-reduced-motion`.

## Merge Notes

Local work was stashed before pulling 4 remote commits (blog integration). Only conflict was `package.json` — remote added `d3-geo`/`topojson-client`/`world-atlas`, local added `@astrojs/sitemap`; both kept.

## Deployment Status

All 3 commits pushed to `origin` (ssgokuclaw/personal-website). **Not yet live** — needs a PR/sync to `BojanMilinic/personal-website` for Netlify to deploy. `gh` CLI was installed via Homebrew but is not authenticated (`gh auth login` pending). Manual compare URL:
`https://github.com/BojanMilinic/personal-website/compare/main...ssgokuclaw:main`

## Things to Revisit

- Theme unification: home/projects/posts are dark, `/cv` and `/teaching` are light — consider dark everywhere except `/cv` (printable).
- Real photo to replace the "BM" monogram.
- Testimonials on `/teaching`.
- An `og:image` for richer link previews (tags are in place, no image yet).
