# Build handoff: continuing work on traum-theater.de

For a fresh session picking up the website itself. Verified 2026-08-17.

Read `CLAUDE.md` first, then this. Design questions go to `docs/brand-sheet.md`,
content to `docs/blog-seo-handoff.md`.

---

## 1. Where everything is

| | |
|---|---|
| Repo | `github.com/markanthonyirwin-ctrl/traumtheater` |
| Local clone | `C:\Users\PC\Documents\Dream Interpretation\traumtheater-website` |
| Live | https://traum-theater.de |
| Host | Netlify, auto-deploys from `main` |
| Stack | Astro 5 static, Node 24, no framework runtime |
| Deploy config | `netlify.toml`: `npm run build`, publish `dist` |

**Do not clone a fresh copy.** Use the path above. It has working GitHub auth.
`gh` is installed at `C:\Program Files\GitHub CLI\gh.exe` but is not on PATH in
a fresh shell; plain `git push` works because the credential helper is
configured.

**Git identity is not set globally, deliberately.** Commit with inline
overrides, never `git config`:

```
git -c user.name="Mark Anthony Irwin" -c user.email="markanthonyirwin@gmail.com" commit -m "..."
```

---

## 2. Commands

```bash
npm install          # first time only
npm run build        # writes dist/
npm run preview      # serves dist/ on :4321
npm run dev          # hot reload on :4321
```

**Always `npm run build` and inspect `dist/` before pushing.** The whole point
of this site is that content ships in the raw HTML; a build that silently drops
a page is the failure mode that matters.

---

## 3. Structure

```
src/
  layouts/
    Base.astro          shell: head, meta, JSON-LD, nav, footer, all inline JS
    ServicePage.astro   the three money pages; takes an faq array
    LegalPage.astro     wraps extracted legal HTML
  components/
    CtaButtons.astro          WhatsApp + email buttons
    TestimonialCarousel.astro used twice on the homepage, light and dark
  pages/
    index.astro                     homepage, carries the main JSON-LD graph
    persoenliche|schriftliche|spirituelle-traumdeutung.astro
    beispiel-deutung.astro          the worked example interpretation
    blog/index.astro, blog/[...slug].astro
    impressum|datenschutz|agb|widerruf.astro
  content/
    blog/*.md           posts
    legal/*.html        extracted legal text, imported with ?raw
  styles/global.css     everything, ~1600 lines
public/assets/          fonts, images, robots.txt
```

**All CSS is in one file.** It grew by appended blocks, each with a comment
explaining why. Keep that pattern: append a commented block rather than editing
rules in place, so the reasoning survives.

---

## 4. Gotchas that have already cost time

### PowerShell will corrupt files if you loop over string pairs

A replacement loop built as `@(@("a","b"))` **flattens to two strings** when it
has one element. Iterating then yields single characters, and
`$c.Replace($pair[0], $pair[1])` replaced every lowercase `s` with `c` across
`[...slug].astro`. Recovered with `git checkout HEAD -- <file>`.

Use the `Edit` tool for source files. If you must script it, use explicit
sequential `.Replace()` calls, never a loop over a possibly-flattening array.

### Never round-trip `global.css` through `Get-Content` without `-Encoding utf8`

Reading as ANSI and writing as UTF-8 double-encodes every special character.
`◆` became `â—†` and shipped to production. Use:

```powershell
[System.IO.File]::ReadAllText($p, [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllText($p, $c, (New-Object System.Text.UTF8Encoding($false)))
```

### CSS specificity beats media queries here

`.tt-root[data-variant="editorial"] .tt-hero` (0,2,1) outranks `.tt-hero`
(0,1,0) inside `@media (max-width: 720px)`. Desktop styles leaked into mobile
and left the hero left-aligned on phones. **Any mobile override must restate
the same specificity inside the media query.**

### The sandbox blocks some PowerShell patterns

Regexes containing `\.git\\`, or a hashtable value of `"/"`, get read as
Remove-Item paths and the whole script is refused. Rephrase rather than retry.

### Commit messages break on double quotes

Use a single-quoted here-string with the closing `'@` at column 0, and avoid
`"` inside the message entirely.

### Testimonials are never edited

Two em dashes survive in the rendered homepage. Both are inside Monika's quote,
which appears in each carousel. Client words are evidence, not copy. Leave them.

---

## 5. House rules

From `CLAUDE.md` and the tone-of-voice kit
(`C:\Users\PC\Downloads\mark-tone-of-voice Deutsch and English  July 2026.md`),
which Mark confirmed governs website copy, not just messages.

- **No em dashes** in any visible copy. Commas, colons, full stops
- No exclamation marks
- German informal `du`. Greeting is "Hi", never "Hallo", for the du register
- Simple, intermediate German. No academic vocabulary
- Interpretation is offered, never declared: `kann bedeuten`, not `bedeutet`
- First person singular. Never "wir"
- Never push a spiritual worldview. An astral-plane opening was removed for this
- **Never claim there is no dictionary involved.** Mark uses a 3,000-entry
  symbol book and the site says so
- Always "die Aisling-Methode", never "Aisling-System"
- Two fonts only: IM Fell English, Source Sans 3. Cinzel, Jost and Uncial
  Antiqua were removed; do not reintroduce
- Body text never below 18px
- **Zero third-party requests.** No Google Fonts link, no CDN, no analytics
  without a GDPR discussion first

### Facts that drift and must stay right

2011 not 2014 · age 47 · 12 ProvenExpert reviews · five to ten pages, not three
to five · 29 € / 69 € · German and English, not Dutch · `mark@` for clients,
`kontakt@` for legal.

---

## 6. State: done

- Rebuilt from client-side React to static Astro. The old site served a
  **338-byte body with zero readable content**; the homepage now ships ~31 KB
- 12 pages live, all 200, all `index, follow`, all in the sitemap
- Schema: Person, ProfessionalService, Service, Offer, AggregateRating, Review,
  PostalAddress, credentials, FAQPage on the three money pages, BlogPosting
- Titles and metas all inside ~60 / ~155 characters
- Legal moved from homepage accordions to four indexable pages
- Blog with two posts, `draft: true` supported
- Full voice pass: em dashes removed from visible copy sitewide
- Mobile verified clean at 360px and 412px
- Sitemap resubmitted to Search Console

## 7. State: open

1. **`og:image` is still the logo**, not a 1200x630 share card. Needs a designed
   graphic from Mark. Last remaining item from the original audit
2. **Google Business Profile unclaimed.** Mark must do it himself; Google
   verifies the owner. Service-area, no public pin
3. **Bing Webmaster Tools** not set up
4. **No English pages.** The expat niche is near-empty and Mark is a native
   speaker. `/en/` plus reciprocal hreflang for those pages only
5. **Cornerstone post not written:** "Traumdeutung ohne Freud", targeting
   *spirituelle Traumdeutung*
6. `Herleitung` survives in the JSON-LD business description, inside the
   sentence carrying the protected `ohne esoterische Überfrachtung` phrase.
   Not visible to readers, left deliberately
7. **Channeling emphasis is an open strategic question.** Mark is certified in
   it, but the blog voice deliberately dials it back to protect the grounded
   positioning. Raise it rather than deciding silently

**Deliberately not doing:** hreflang across DE/AT/CH (identical German is
duplicate content), a symbol dictionary (content-farm territory that would
undercut the paid positioning), analytics.

---

## 8. Verification that actually works

```powershell
# Does every page ship real content?
foreach ($f in (Get-ChildItem dist -Recurse -Filter index.html)) {
  $h = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
  $i = $h.IndexOf('<body')
  "{0,-46} body={1,7}B" -f $f.FullName.Replace((Get-Location).Path+"\dist",""), ($h.Length-$i)
}

# Em dashes in visible text only, scripts and head stripped
$d = [char]0x2014
$body = [regex]::Replace($h.Substring($h.IndexOf('<body')), '<script[\s\S]*?</script>', ' ')
([regex]::Matches([regex]::Replace($body,'<[^>]*>',' '), [regex]::Escape($d))).Count

# Third-party requests, must all be 0
'fonts.googleapis','fonts.gstatic','unpkg','cdn.jsdelivr','google-analytics'
```

For layout and mobile, use the browser tools against `localhost:4321` and
measure `document.documentElement.scrollWidth` against `clientWidth`. Mark
found a 33px overflow on a real phone that a 375px check had missed, so test
at **360 and 412**, and on the homepage specifically, since it has the hero.

## 9. Other docs

`CLAUDE.md` · `docs/brand-sheet.md` · `docs/blog-seo-handoff.md` ·
`docs/seo-backlinks-handoff.md` · `docs/client-inquiry-playbook.md` ·
`docs/whatsapp-business-setup.md` · `docs/poster-brief.md`
