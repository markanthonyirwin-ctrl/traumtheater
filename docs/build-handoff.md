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
  i18n/ui.ts            every UI string in both languages + the hreflang pairs table
  data/testimonials.ts  client quotes, shared by both homepages
  layouts/
    Base.astro          shell: head, meta, JSON-LD, hreflang, nav, footer, all inline JS
    ServicePage.astro   the money pages; takes an faq array
    BlogIndex.astro     blog listing, both languages
    BlogPost.astro      single post, both languages
    LegalPage.astro     wraps extracted legal HTML
  components/
    CtaButtons.astro          WhatsApp + email buttons
    TestimonialCarousel.astro used twice per homepage, light and dark
  pages/
    index.astro                     German homepage, carries the main JSON-LD graph
    persoenliche|schriftliche|spirituelle-traumdeutung.astro
    beispiel-deutung.astro          the worked example interpretation
    blog/index.astro, blog/[...slug].astro
    impressum|datenschutz|agb|widerruf.astro     German only, deliberately
    en/                             the English mirror, 8 pages
      index.astro
      personal|written|spiritual-dream-interpretation.astro
      example-interpretation.astro
      blog/index.astro, blog/[...slug].astro
  content/
    blog/*.md           German posts
    blog-en/*.md        English posts
    legal/*.html        extracted legal text, imported with ?raw
  styles/global.css     everything, ~2150 lines
public/assets/          fonts, images
public/robots.txt
```

**Two languages.** German at the root, English under `/en/`. All chrome strings
come from `src/i18n/ui.ts`; page prose lives in the pages. hreflang comes from
the `pairs` table in that same file, not from the sitemap integration, so that
only genuine pairs are claimed and both directions always agree. See the "Two
languages" section in `CLAUDE.md` before touching any of it.

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
- **English mirror at `/en/`, August 2026.** 8 pages: homepage, three service
  pages, worked example, blog index, two translated posts. 20 pages total.
  Reciprocal hreflang on all 16 paired pages, `x-default` on German, none on
  the four legal pages. Verified: 0 failures, 0 third-party requests, no
  overflow at 360/412/1185/1265/1425

## 7. State: open

1. **`og:image` is still the logo**, not a 1200x630 share card. Needs a designed
   graphic from Mark. Last remaining item from the original audit
2. **Google Business Profile unclaimed.** Mark must do it himself; Google
   verifies the owner. Service-area, no public pin
3. **Bing Webmaster Tools** not set up
4. **Cornerstone post not written:** "Traumdeutung ohne Freud", targeting
   *spirituelle Traumdeutung*
5. `Herleitung` survives in the JSON-LD business description, inside the
   sentence carrying the protected `ohne esoterische Überfrachtung` phrase.
   Not visible to readers, left deliberately
6. **Channeling emphasis is an open strategic question.** Mark is certified in
   it, but the blog voice deliberately dials it back to protect the grounded
   positioning. Raise it rather than deciding silently
7. **English testimonials.** Ciara Clarke and Nicky E. originally wrote in
   English; the site shows Mark's German rendering, and the English page shows
   that same German text. It is the one place a client's words appear as a
   translation rather than as what they wrote. If Mark can find the English
   originals they belong in `src/data/testimonials.ts`
8. **The `/en/` pages have no inbound links yet** and are brand new, so they
   will take time to index. Worth submitting the sitemap again and checking
   coverage in Search Console after a few weeks
9. **Homepage trust card misses the fold by 2px at 1265x800.** Pre-existing,
   not caused by the English work: measured at 802px against an 800px fold with
   the language switcher removed. Only bites at that narrow band of viewport
   heights. Fixing it means touching hero spacing, which needs re-measuring
   across widths
10. `persoenliche-traumdeutung` meta description is 156 characters against a
    ~155 guideline. One over, pre-existing, left alone

**Deliberately not doing:** hreflang across DE/AT/CH (identical German is
duplicate content), a symbol dictionary (content-farm territory that would
undercut the paid positioning), analytics, translating the legal pages (the
German text is the binding version).

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

**hreflang reciprocity.** This is the one that fails silently: if `/blog`
points at `/en/blog` but `/en/blog` does not point back, Google discards the
pair and says nothing. Expect 16 OK, 0 failures, and the four legal pages
reporting no hreflang.

```powershell
$root = (Get-Location).Path + "\dist"; $site = 'https://traum-theater.de'
$pairs = @{}
foreach ($f in (Get-ChildItem dist -Recurse -Filter index.html)) {
  $h = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
  $de = [regex]::Match($h, 'hreflang="de" href="([^"]*)"').Groups[1].Value
  $en = [regex]::Match($h, 'hreflang="en" href="([^"]*)"').Groups[1].Value
  $xd = [regex]::Match($h, 'hreflang="x-default" href="([^"]*)"').Groups[1].Value
  $url = $site + ($f.FullName.Replace($root,"").Replace("\index.html","").Replace("\","/"))
  if ($url -eq $site) { $url = $site + "/" }
  if ($de -eq "" -and $en -eq "") { "$url (no hreflang)"; continue }
  $pairs[$url] = "$de|$en|$xd"
}
foreach ($k in ($pairs.Keys | Sort-Object)) {
  $p = $pairs[$k].Split("|")
  $ok = (($k -eq $p[0]) -or ($k -eq $p[1])) -and
        ($pairs[$p[0]] -eq $pairs[$k]) -and ($pairs[$p[1]] -eq $pairs[$k]) -and ($p[2] -eq $p[0])
  if ($ok) { "OK   $k" } else { "FAIL $k" }
}
```

**Nav width.** The nav collapses to the hamburger at 1260px. If you add a nav
item, re-measure `document.querySelector('.tt-nav').getBoundingClientRect()
.height` just above that breakpoint: it must stay 69px. A taller nav means a
label wrapped to two lines, and everything below it moves down, including the
homepage trust card.

For layout and mobile, use the browser tools against `localhost:4321` and
measure `document.documentElement.scrollWidth` against `clientWidth`. Mark
found a 33px overflow on a real phone that a 375px check had missed, so test
at **360 and 412**, and on the homepage specifically, since it has the hero.

## 9. Other docs

`CLAUDE.md` · `docs/brand-sheet.md` · `docs/blog-seo-handoff.md` ·
`docs/seo-backlinks-handoff.md` · `docs/client-inquiry-playbook.md` ·
`docs/whatsapp-business-setup.md` · `docs/poster-brief.md`
