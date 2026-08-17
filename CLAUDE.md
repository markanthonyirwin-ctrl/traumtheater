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
  i18n/ui.ts            — every UI string in both languages, plus the hreflang pairs table
  data/testimonials.ts  — the client quotes, shared by both homepages
  layouts/Base.astro    — <head>, meta, JSON-LD, hreflang, nav, footer, the two small client scripts
  layouts/ServicePage.astro   — the money pages; takes an faq array
  layouts/BlogIndex.astro     — the blog listing, both languages
  layouts/BlogPost.astro      — a single post, both languages
  layouts/LegalPage.astro
  components/CtaButtons.astro
  components/TestimonialCarousel.astro
  pages/index.astro     — the German homepage, all sections
  pages/impressum|datenschutz|agb|widerruf.astro   — German only, deliberately
  pages/blog/index.astro, pages/blog/[...slug].astro
  pages/en/             — the English mirror: homepage, three service pages,
                          example-interpretation, blog
  content/blog/*.md     — German blog posts
  content/blog-en/*.md  — English blog posts
  content/legal/*.html  — legal text extracted from the old datenschutz-content.js
  content.config.ts     — blog collection schemas (both languages)
  styles/global.css     — all styling
public/assets/          — images + self-hosted fonts (served from the site root)
```

## Two languages

German is primary and lives at the root. English lives under `/en/` for the
expat market in DE/AT/CH. Added August 2026.

- **All UI chrome comes from `src/i18n/ui.ts`.** Nav, footer, layout headings,
  button labels, aria-labels. Page prose lives in the pages themselves, because
  it is writing rather than strings. Adding a nav item or a button means adding
  it to both language blocks in that file, and TypeScript will tell you if you
  forget.
- **hreflang comes from the `pairs` table in the same file**, not from the
  sitemap integration. One entry per page that exists in both languages. Both
  sides import from it, so a pair can never point one way only, which is the
  failure mode that makes Google discard hreflang silently. Blog posts pair
  through an `altSlug` field in their front matter instead, because their slugs
  differ by design: each is written for keywords in its own language.
- **English slugs are English.** `/en/written-dream-interpretation`, not the
  German slug under `/en/`. The whole point is English keywords.
- **The four legal pages stay German only.** The German text is the binding
  version and a translation would be a second legal representation. The English
  footer links to them and says so. They claim no hreflang.
- **Drift is the real risk in a full mirror.** Every German copy edit now needs
  an English counterpart or the two versions diverge quietly. Testimonials and
  UI strings are shared through single files so they cannot drift; page prose
  cannot be, so it is on you to change both.
- **English is British, not American.** Mark is from Cork. "recognise",
  "colour", "practise". `og:locale` is `en_GB`.
- **The nav is width-constrained.** It collapses to the hamburger at 1260px
  because the language switcher made it a nine-item row. Adding a tenth item
  will overflow it again: nav labels must never wrap to a second line, since a
  taller nav pushes the homepage trust block below the fold.

## Adding a blog post

Add a `.md` file to `src/content/blog/` for German, or `src/content/blog-en/`
for English. Front matter:

```yaml
---
title: 'Titel des Beitrags'
description: 'Ein bis zwei Sätze — wird als Meta-Description und in der Blog-Liste verwendet.'
pubDate: 2026-08-04
draft: false
altSlug: 'filename-of-the-english-version'   # optional
---
```

`altSlug` is the filename (without `.md`) of the same post in the other
language. Set it on **both** posts or neither: it is what produces reciprocal
hreflang between them. A post that exists in one language only just leaves it
off, and no hreflang is claimed for it.

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
- **Markets: Germany, Austria, Switzerland.** Keep `areaServed` DE/AT/CH in the JSON-LD and don't let copy read as Germany-only. Still **no hreflang across DE/AT/CH** — identical German in three countries is duplicate content, not three locales. The hreflang that does exist is German ↔ English only, which is a genuine language split.
- **Reviews:** ProvenExpert shows 12 five-star reviews. If that number changes, update it in **both** the trust block copy and `aggregateRating.reviewCount` in `src/pages/index.astro`.
- **Two e-mail addresses, and they are not interchangeable.** `mark@traum-theater.de` is for all client communication — every CTA, the copy-email button, and the `Person` node in the JSON-LD. `kontakt@traum-theater.de` is for legal enquiries and sits on the `ProfessionalService` node. Don't collapse them into one.
- **Voice in copy:** second-person ("du"), short sentences, no exclamation marks, no emoji in prose.

## Typography — two families, three sizes

Locked in the 2026 rebuild after testers reported the body text was unreadable (it was IM Fell English at 16px) and that too many typefaces stacked in the hero.

- **IM Fell English** — the "Traumtheater" wordmark, all headings, the tagline, and testimonial quotes.
- **Source Sans 3** — everything else: body, subheadings, labels, nav, buttons, legal.
- Body is **18px minimum**. Sizes come from `--size-heading` / `--size-subheading` / `--size-body`, plus `--size-small` for labels and `--size-fine` for legal fine print.
- **Cinzel, Jost and Uncial Antiqua were all removed.** Do not reintroduce them. Uncial went in August 2026 — with the wordmark moved to IM Fell it had no remaining purpose, and three faces in the hero read as visual noise.
- The wordmark's two-tone colour is not a font feature: `.tt-site-title` is ink, `.tt-site-title .tt-accent` is sienna. Keep both.
- All fonts are **self-hosted** in `public/assets/fonts`. Never add a Google Fonts CDN link — that is a GDPR issue, and the site currently makes zero third-party requests.
- **Never round-trip `global.css` through PowerShell's `Get-Content`/`Set-Content` without `-Encoding utf8` on the read.** Doing so double-encodes every `◆`, `✦` and em dash into mojibake. Use `[System.IO.File]::ReadAllText`/`WriteAllText` instead.

## Things I want to keep

- The editorial / old-book aesthetic (serif display, ornamental rules, paper texture)
- The hero is a **two-column layout**: logo on the left, eyebrow → wordmark → `h1` tagline on the right. This is what keeps the trust block above the fold; the earlier stacked, centred hero pushed it to 743px on a 743px viewport, i.e. entirely off the first screen.
- The above-the-fold trust block (portrait, name, credential, 15 years, ProvenExpert). It exists to kill "scam" perception and comes **before** any poetic content. If you change hero spacing, re-measure that the whole card still clears the fold.
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
