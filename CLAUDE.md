# Claude Code guide — Traumtheater

This file is read automatically by Claude Code when you open the project. It tells Claude how the site is structured and what to respect when editing.

## Project shape

- **Astro static site.** Rebuilt from client-side React in August 2026.
- Every page ships complete HTML in the raw server response. **This is the whole point** — the old React/Babel-in-browser build served a 338-byte empty body, so Google, Bing and WhatsApp link previews saw nothing.
- Build: `npm run build` → `dist/`. Netlify runs this automatically on push to `main` (see `netlify.toml`).
- Local preview: `npm run dev` → http://localhost:4321

```
astro.config.mjs        — site URL, static output, sitemap integration
netlify.toml            — build command + publish dir (must stay in sync with package.json)
src/
  layouts/Base.astro    — <head>, meta, JSON-LD, nav, footer, the two small client scripts
  layouts/LegalPage.astro
  components/CtaButtons.astro
  pages/index.astro     — the homepage, all sections
  pages/impressum|datenschutz|agb|widerruf.astro
  pages/blog/index.astro
  pages/blog/[...slug].astro
  content/blog/*.md     — blog posts
  content/legal/*.html  — legal text extracted from the old datenschutz-content.js
  content.config.ts     — blog collection schema
  styles/global.css     — all styling
public/assets/          — images + self-hosted fonts (served from the site root)
```

## Adding a blog post

Add a `.md` file to `src/content/blog/`. Front matter:

```yaml
---
title: 'Titel des Beitrags'
description: 'Ein bis zwei Sätze — wird als Meta-Description und in der Blog-Liste verwendet.'
pubDate: 2026-08-04
draft: false
---
```

The URL is the filename: `meine-datei.md` → `/blog/meine-datei`. Set `draft: true` to keep a post out of the build entirely.

**Two ways to publish:**
1. Locally: add the file, `git add`, `git commit`, `git push`. Netlify rebuilds automatically.
2. Via GitHub in the browser: navigate to `src/content/blog`, "Add file" → "Create new file", paste, commit. Netlify rebuilds automatically.

Either way there is no manual build step — but the file does have to reach GitHub. Astro is a static generator, so the site is rebuilt on every push; "no rebuild" is not possible, only "no *manual* rebuild".

## House style

- **Language:** German-first. Warm, grounded, not mystical-woo. Mark studied the Aisling method in Ireland — it's a named tradition, not vague spirituality.
- **Always "Aisling-Methode"** (German) / "Aisling-Method" (English). Never "Aisling-System" — that was old wording, corrected in July 2026. His certificate reads "Aisling-Method — Certified Dream Interpreter".
- **Experience:** Mark has worked with dreams **since 2011** (over 15 years). Formal study with Michael Sheridan from 2023; certifications 2024 and 2026. Do not reintroduce the old "2014" date.
- **Languages served: German and English only.** Not Dutch, not Polish.
- **Markets: Germany, Austria, Switzerland.** Keep `areaServed` DE/AT/CH in the JSON-LD and don't let copy read as Germany-only. No hreflang — identical German across three countries is duplicate content, not three locales.
- **Reviews:** ProvenExpert shows 12 five-star reviews. If that number changes, update it in **both** the trust block copy and `aggregateRating.reviewCount` in `src/pages/index.astro`.
- **Two e-mail addresses, and they are not interchangeable.** `mark@traum-theater.de` is for all client communication — every CTA, the copy-email button, and the `Person` node in the JSON-LD. `kontakt@traum-theater.de` is for legal enquiries and sits on the `ProfessionalService` node. Don't collapse them into one.
- **Voice in copy:** second-person ("du"), short sentences, no exclamation marks, no emoji in prose.

## Typography — three families, three sizes

Locked in the 2026 rebuild after testers reported the body text was unreadable (it was IM Fell English at 16px).

- **Uncial Antiqua** — the "Traumtheater" wordmark and `h2` section headings. Display only.
- **IM Fell English** — italic literary accents only: the tagline and testimonial quotes.
- **Source Sans 3** — everything else: body, subheadings, labels, nav, buttons, legal.
- Body is **18px minimum**. Sizes come from `--size-heading` / `--size-subheading` / `--size-body`, plus `--size-small` for labels and `--size-fine` for legal fine print.
- **Cinzel and Jost were removed.** Do not reintroduce them.
- All fonts are **self-hosted** in `public/assets/fonts`. Never add a Google Fonts CDN link — that is a GDPR issue, and the site currently makes zero third-party requests.

## Things I want to keep

- The editorial / old-book aesthetic (serif display, ornamental rules, paper texture)
- The hero: logo → eyebrow → Uncial wordmark → `h1` tagline
- The above-the-fold trust block (portrait, name, credential, 15 years, ProvenExpert). It exists to kill "scam" perception and comes **before** any poetic content.
- The testimonials in their original languages (English / Polish translated to German by the author)
- The "€29 statt €69" Einführungsangebot framing

## Things to ask me before changing

- Adding pages beyond the current set
- Switching the form from mailto/WhatsApp to a real backend form
- Adding analytics or tracking of any kind
- Changing the core color palette or the font stack
- Touching the legal pages' text (Impressum, Datenschutz, AGB, Widerruf)

## Safe to do without asking

- Copy edits, typo fixes, tone polishing (in German)
- Adding or removing testimonials
- Adding blog posts
- Adjusting spacing, sizes, small layout tweaks
- Swapping images in `public/assets/` (keep filenames)

## Deployment

Push to `main` → Netlify builds with `npm run build` and publishes `dist/`. No other configuration needed; `netlify.toml` carries it.

## When in doubt

Run `npm run build`, then check that `dist/index.html` contains real German text inside `<body>`. If the body is near-empty, something has gone back to client-side rendering and the whole point of this rebuild has been lost.
