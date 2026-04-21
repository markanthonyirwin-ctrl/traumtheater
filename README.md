# Claude Code guide — Traumtheater

This file is read automatically by Claude Code when you open the project. It tells Claude how the site is structured and what to respect when editing.

## Project shape

- Static site. No build step. No package.json. No framework config.
- `index.html` loads React + Babel from CDN, then `traumtheater-page.jsx` renders into `#root`.
- All styling lives in `styles.css` using CSS custom properties (variables) at the top.
- Three images in `assets/` — do not rename without updating references.

## House style

- **Language:** German-first. The site is for German-speaking clients. Keep tone warm, grounded, not mystical-woo. Mark studied the Aisling system in Ireland — it's a named tradition, not vague spirituality.
- **Typography:** Uncial Antiqua for the display mark only. IM Fell English for headings. Jost for body. Don't introduce new font families without a reason.
- **Color palette:** warm cream `#e8d5a8`, deep brown `#1a0e04`, gold accent `#d4a84b`, aged `#8b6219`. Variables are in `styles.css` — edit the variables, not the usages.
- **Textures:** the paper texture is part of the identity. Don't flatten it to a solid color.
- **Voice in copy:** second-person ("du"), short sentences, no exclamation marks, no emoji.

## Things I want to keep

- The editorial / old-book aesthetic (serif, small caps, ornamental rules, paper texture)
- The hero headline hierarchy: eyebrow → large serif headline → tagline → CTAs
- The testimonials in their original languages (English / Polish translated to German by the author)
- The "kostenlos statt €69" framing — it's honest (he's building a portfolio) and it matters

## Things to ask me before changing

- Adding pages (about, pricing, blog) — I want to decide structure first
- Switching the form from mailto/WhatsApp to a real backend form
- Adding analytics or tracking of any kind
- Changing the core color palette or font stack

## Safe to do without asking

- Copy edits, typo fixes, tone polishing (in German)
- Adding or removing testimonials
- Adjusting spacing, sizes, small layout tweaks
- Adding a favicon variant, OG image, meta tags
- Swapping images in `assets/` (keep filenames)

## Deployment

Pushed to GitHub → auto-deploys to [wherever you set up: Netlify / Cloudflare Pages / GitHub Pages]. No build command, publish directory is the repo root.

## When in doubt

Open `index.html` in a browser — if it renders without console errors, the change is safe to commit.
