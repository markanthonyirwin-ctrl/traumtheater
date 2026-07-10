# Traumtheater

Persönliche Traumdeutung nach der Aisling-Methode — website source.

## What this is

A single-page website built as static HTML + CSS + a React component (loaded in-browser via Babel). No build step, no npm install. You can open `index.html` directly in a browser and it works.

## Files

```
index.html              — entry point (meta tags, fonts, React loader)
styles.css              — all styling
traumtheater-page.jsx   — the page component (hero, testimonials, offer, etc.)
assets/
  logo.png              — Traumtheater mark
  mark-portrait.png     — portrait photo
  paper-texture.jpg     — background texture
```

## Local preview

Just open `index.html` in a browser. For a cleaner dev experience (avoids CORS issues with local file:// URLs), serve the folder:

```bash
# Python
python3 -m http.server 8000
# → http://localhost:8000

# or Node
npx serve .
```

## Hosting

This folder deploys to any static host as-is:

- **Netlify** — drag the folder to [netlify.com/drop](https://app.netlify.com/drop)
- **Cloudflare Pages** — connect the GitHub repo, no build command, output directory `/`
- **GitHub Pages** — push to `main`, enable Pages in repo settings
- **Vercel** — import repo, framework preset: "Other"

## Editing

See [`CLAUDE.md`](./CLAUDE.md) for a guide to editing with Claude Code.

Main things you'll likely want to change, and where:

| What | Where |
|---|---|
| Headline, tagline, body copy | `traumtheater-page.jsx` |
| Testimonials | `traumtheater-page.jsx` — search for `TESTIMONIALS` |
| Prices / offer wording | `traumtheater-page.jsx` — search for `OFFER` |
| Colors, fonts, spacing | `styles.css` — CSS variables at the top |
| SEO (title, description) | `index.html` — `<meta>` tags in `<head>` |
| Images | replace files in `assets/` (keep same filenames) |

## Tech notes

- React 18 + Babel load from unpkg CDN (pinned versions, integrity hashes)
- JSX is transpiled in the browser — fine for a site this size, but means a brief flash of unstyled content on slow connections
- Fonts: Uncial Antiqua, IM Fell English, Cinzel, Jost (all Google Fonts)
- No tracking, no analytics, no forms — contact happens via `mailto:` and WhatsApp links

## License

All rights reserved, Mark [surname]. Content and design are not for reuse.
