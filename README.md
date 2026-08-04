# Traumtheater

Persönliche Traumdeutung nach der Aisling-Methode — website source.

## What this is

A static [Astro](https://astro.build) site. Every page is rendered to plain HTML at build time, so search engines and social link-preview bots see the full content in the raw response.

It was previously a single-page React app that transpiled JSX in the browser. That shipped a 338-byte empty `<body>` — invisible to Google, Bing and WhatsApp previews. The August 2026 rebuild fixed that.

## Requirements

Node 18.20+, 20.3+ or 22+. (Netlify pins Node 22 via `netlify.toml`.)

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve the built dist/
```

## Files

```
astro.config.mjs        site URL, static output, sitemap
netlify.toml            build command + publish dir
src/
  layouts/              Base.astro (head/nav/footer), LegalPage.astro
  components/           CtaButtons.astro
  pages/                index, impressum, datenschutz, agb, widerruf, blog/
  content/blog/         blog posts (markdown)
  content/legal/        legal text as HTML
  content.config.ts     blog collection schema
  styles/global.css     all styling
public/assets/          images + self-hosted fonts
```

## Adding a blog post

Drop a markdown file into `src/content/blog/` and push. See [`CLAUDE.md`](./CLAUDE.md) for the front-matter format and the browser-based publishing route.

## Hosting

Netlify, building from `main`. Build command `npm run build`, publish directory `dist`. Both are set in `netlify.toml`, so no dashboard configuration is required.

## Editing

See [`CLAUDE.md`](./CLAUDE.md) for house style, the typography rules, and what to ask before changing.

| What | Where |
|---|---|
| Homepage copy | `src/pages/index.astro` |
| Testimonials | `src/pages/index.astro` — `testimonials` array |
| Prices / offer wording | `src/pages/index.astro` — the `#angebot` section |
| Meta tags, JSON-LD | `src/pages/index.astro` frontmatter + `src/layouts/Base.astro` |
| Colors, fonts, spacing | `src/styles/global.css` — CSS variables at the top |
| Legal text | `src/content/legal/*.html`, `src/pages/impressum.astro` |
| Images | replace files in `public/assets/` (keep filenames) |

## Tech notes

- No client-side framework. Two small vanilla scripts handle the mobile nav and the copy-email button; all content is static HTML.
- Fonts are self-hosted (Uncial Antiqua, IM Fell English, Source Sans 3). No third-party requests anywhere on the site — no Google Fonts, no CDN, no analytics.
- `sitemap-index.xml` is generated at build time by `@astrojs/sitemap`.

## License

All rights reserved, Mark Anthony Irwin. Content and design are not for reuse.
