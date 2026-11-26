# Project Notes

Running notes on decisions, current state, and things to revisit.

---

## Booking flow (current)

Simplified for first launch — no upfront payment required.

1. Student fills out `/book` form (Formspree)
2. Formspree emails submission to `bojan.milinic@gmail.com`
3. Student is redirected to `/booking-confirmed`
4. Bojan follows up manually to confirm time and collect payment

**Formspree endpoint:** `https://formspree.io/f/mqejygad`
**Post-submit redirect:** `https://bojanmilinic.netlify.app/booking-confirmed`

Form fields: name, email, session interest, online/in-person, who the session is for, student experience level and age, open-ended notes.

---

## Class pricing

All classes currently set to **$20 / 55 min** as a first-run rate.

When prices change, update three places:
1. `src/data/classes.js` — website updates automatically
2. Stripe — archive old payment link, create new one, update `stripeLink` in `classes.js`
3. Venmo — no action needed (students send manually)

---

## Domain

- **Domain:** `bojanmilinic.com` — purchased via Namecheap
- **DNS:** Netlify DNS configured ("Set up Netlify DNS for your domain" completed in Netlify dashboard)
- **Status:** Waiting on propagation — can take up to 48 hours (usually under 1 hour)
- **Next step:** Once propagated, verify `https://bojanmilinic.com` loads the site and SSL certificate is active (Netlify provisions this automatically)
- **After confirmed live:** Update Formspree `_next` redirect from `bojanmilinic.netlify.app/booking-confirmed` to `bojanmilinic.com/booking-confirmed`

---

## Git remotes

| Remote | Repo | Purpose |
|---|---|---|
| `origin` | `BojanMilinic/personal-website` | Primary repository; Netlify watches `main` |

After committing, `git push origin main` updates the branch Netlify deploys.

---

## Things to revisit later

- [ ] Verify `bojanmilinic.com` is live after DNS propagation
- [ ] Update Formspree `_next` redirect URL to `bojanmilinic.com` once domain is confirmed live
- [ ] Add Stripe payment links when ready to collect payment upfront
- [ ] Add Calendly links to `/booking-confirmed` and `/dance-booking` once account is set up
- [ ] Consider adding availability/timezone and goal fields to `/book` form
- [ ] Confirm Formspree email notifications are active in dashboard

---

## Writing / blog integration

The live Writing section is rendered by Astro, not Pelican. The integration is working locally as of 2026-06-02.

Normal publishing workflow:

1. Add or edit Markdown in `src/content/posts/`
2. Use YAML frontmatter for `title`, `date`, `summary`, `tags`, `category`, and `type`
3. Run `npm run build`
4. Astro generates `/posts` and `/posts/[slug]` into `dist/`

Lab notes work the same way under `src/content/lab/`, generating `/lab` and `/lab/[slug]`.

Pelican is only preserved as an experiment/archive. Only run Pelican when refreshing the historical Pelican snapshot that gets copied to `public/blog-archive/02-pelican/`.

Archive link note:

- The HTML/CSS archive index uses `Back to blog archive` and links to `../index.html`.
- In copied Pelican archive HTML, replace home links like `href="./"` and `href="../"` with explicit `index.html` targets.
- Astro's dev server can 404 on copied static directory URLs such as `/blog-archive/02-pelican/`, while explicit `index.html` URLs work reliably.
- Nested copied archive folders should also use explicit targets such as `04-pythonland/index.html`.
- If the Pelican archive is regenerated and recopied, rerun that link cleanup before testing.

Current live routes:

- `/reading` renders the draggable Reading Wall from `src/data/books.js`; cover images are requested from Open Library by ISBN
- `/posts` lists Writing posts from `src/content/posts/`
- `/posts/[slug]` renders individual Writing posts
- `/lab` lists public workflow notes from `src/content/lab/`
- `/lab/[slug]` renders individual Lab notes
- `/blog-archive` links to preserved experiment snapshots
- `/blog-archive/01-html-css/index.html` serves the manual HTML/CSS experiment snapshot
- `/blog-archive/02-pelican/index.html` serves the generated Pelican experiment snapshot

Verification completed:

- `npm run build` succeeded
- Full built-site link crawl passed across 64 HTML pages, 889 local references, and 86 anchor links
- Live dev-server route/link check passed across 64 pages and 70 unique linked local targets
- Writing, Lab, and archive navigation use valid explicit targets, including copied static archive pages
- External HTTP link probe found no user-clickable dead links; Google Fonts preconnect hosts and the Formspree POST endpoint are expected not to behave like normal clickable pages

---

## AI website manager

The ideal AI helper for this site is a website manager rather than only a code editor.

Responsibilities:

- Maintain and improve the live Astro site over time.
- Recommend updates to content, layout, navigation, SEO, accessibility, performance, and documentation.
- Keep track of stale notes, deployment details, form redirects, archive links, and publishing workflow.
- Propose improvements for approval before making broad changes.
- Make approved changes in small, understandable steps.
- Verify work with `npm run build` and, when relevant, preview or route checks.

Current operating model:

- Astro owns the live site.
- `src/data/books.js` is the Reading Wall catalog; `/reading` fetches Open Library covers by ISBN and derives each tile color from its cover.
- Markdown in `src/content/posts/` becomes Writing pages.
- Markdown in `src/content/lab/` becomes Lab pages.
- Pelican is only an archived experiment, not the normal publishing engine.
- The manager should preserve the old experiments while improving the current public site.
