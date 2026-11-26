# Project Notes — Bojan Milinic Personal Website

_Last updated: 2026-10-05_

---

## Goal & Overview

A personal website for Bojan Milinic — Physical Scientist & Python Educator at the USGS. The site serves as a professional portfolio covering scientific projects, teaching history, a student geography globe, and reproducible Quarto notebooks.

---

## Tech Stack

| Tool | Role |
|---|---|
| **Astro 4** | Static site framework — pages, layouts, components |
| **Tailwind CSS 3** | Utility-class styling |
| **Quarto 1.9** | Renders `.qmd` notebooks (Python) to self-contained HTML |
| **D3 v7** (CDN) | Interactive globe on the `/globe` page |
| **Netlify** | Production hosting; auto-deploys `main` from `BojanMilinic/personal-website` |

---

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `src/pages/index.astro` | Home / landing page |
| `/cv` | `src/pages/cv.astro` | CV / resume |
| `/projects` | `src/pages/projects.astro` | Scientific tools and data workflows |
| `/reading` | `src/pages/reading.astro` | Draggable Reading Wall generated from `src/data/books.js`; covers load from Open Library by ISBN |
| `/teaching` | `src/pages/teaching.astro` | Teaching history |
| `/globe` | `src/pages/globe.astro` | Interactive 3D globe — highlights countries with taught students |
| `/notebooks` | `src/pages/notebooks.astro` | Index of rendered Quarto notebooks |
| `/notebooks/hello.html` | `public/notebooks/hello.html` | Streamflow analysis notebook (static asset, served directly) |
| `/contact` | `src/pages/contact.astro` | Contact page |

---

## How to Run Locally

```bash
npm run dev
```

Opens at `http://localhost:4321`. Hot-reloads on file changes.

> Quarto-rendered notebooks in `public/notebooks/` are also served at runtime — no extra step needed for local viewing.

---

## How to Build

```bash
npm run build
```

Output goes to `dist/`. The `public/` folder (including pre-rendered notebooks) is copied in automatically by Astro.

---

## How to Add a Country to the Globe

1. Open `src/data/taughtCountries.js`
2. Add the ISO Alpha-3 code for the country to the array:

```js
export const taughtCountries = [
  "USA", // United States
  "ALB", // Albania
  "BIH", // Bosnia and Herzegovina
  "DEU", // Germany  ← add new entries like this
];
```

Full code list: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3

The country badge count and the accessible list below the globe both update automatically on the next build.

---

## How to Add a New Quarto Notebook

**Step 1 — Write the source file:**

Drop a `.qmd` file into `quarto/`. Example front matter:

```yaml
---
title: "Your Notebook Title"
author: "Bojan Milinic"
date: today
---
```

**Step 2 — Render it:**

```bash
npm run render:quarto
```

This runs `quarto render quarto/` which executes all Python cells and writes self-contained HTML to `public/notebooks/<filename>.html`.

**Step 3 — Add it to the index page:**

Open `src/pages/notebooks.astro` and add an entry to the `notebooks` array at the top:

```js
const notebooks = [
  {
    slug: 'hello',          // matches the .qmd filename (without extension)
    title: 'Streamflow Analysis: Upper Colorado Basin',
    description: 'Short description shown on the card.',
    tags: ['hydrology', 'python'],
    date: '2026-05-05',
  },
  {
    slug: 'your-new-notebook',  // ← new entry
    title: 'Your Title',
    description: '...',
    tags: ['tag1', 'tag2'],
    date: '2026-05-06',
  },
];
```

**Step 4 — Rebuild Astro:**

```bash
npm run build
```

---

## Quarto Project Config

`quarto/_quarto.yml` controls how notebooks are rendered:

```yaml
project:
  type: default
  output-dir: ../public/notebooks
  render:
    - "*.qmd"        # render all .qmd files in quarto/

format:
  html:
    embed-resources: true   # single self-contained HTML, no external deps
    toc: true
    code-fold: true
    theme: cosmo
```

> **Important:** The `render: ["*.qmd"]` glob is required. Without it, `quarto render quarto/` exits silently without rendering anything.

Python dependencies needed for notebook execution:
```bash
python3 -m pip install jupyter nbformat matplotlib pandas
```

---

## What's Left / Next Steps

- [ ] **Fill in placeholder content** — CV page, Teaching page, and Contact page likely still have placeholder copy.
- [ ] **Globe: more countries** — edit `src/data/taughtCountries.js` as teaching expands.
- [ ] **More notebooks** — add additional `.qmd` analyses to `quarto/` and register them in `notebooks.astro`.
- [ ] **Mobile nav polish** — the CSS-only hamburger menu (`<details>`/`<summary>`) works but doesn't close on link click; could add a small inline script for that.
- [ ] **OG / social meta tags** — `BaseLayout.astro` has no `og:image` or Twitter card meta; worth adding before sharing the URL publicly.
- [ ] **Favicon** — currently a placeholder SVG at `public/favicon.svg`.
