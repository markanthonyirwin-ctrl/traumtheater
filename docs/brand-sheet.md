# Traumtheater brand sheet

Everything a design tool needs to make something that matches the website.
Values taken directly from `src/styles/global.css`, not from memory.

Last updated 2026-08-13.

---

## Fonts

Two families. Both are **free Google Fonts**, so most design tools already
have them. Nothing needs licensing or buying.

| Role | Font | Weights used |
|---|---|---|
| Display, headlines, wordmark, quotes | **IM Fell English** | 400 regular, 400 italic |
| Everything else: body, subheads, labels, buttons | **Source Sans 3** | 400, 600 |

```
--font-display : 'IM Fell English', Georgia, serif
--font-body    : 'Source Sans 3', system-ui, -apple-system, 'Segoe UI', sans-serif
```

**If IM Fell English is unavailable**, substitute in this order: EB Garamond,
Crimson Pro, Georgia. All are old-style serifs with similar colour on the
page. Do **not** substitute a modern or slab serif; it breaks the
old-book feel entirely.

**If Source Sans 3 is unavailable**: Source Sans Pro (its predecessor), then
Open Sans. Avoid geometric sans like Futura or Jost.

### Fonts that were deliberately removed

**Uncial Antiqua, Cinzel and Jost are gone.** Do not reintroduce them. Uncial
was the original wordmark face and was dropped in August 2026 because three
display faces stacked in the hero read as visual noise. If a tool suggests a
"Celtic" or "medieval" font, decline it.

### Local font files

Self-hosted woff2 in `public/assets/fonts/`:
`imfell-latin.woff2`, `imfell-italic-latin.woff2`,
`source-sans-3-latin-400-normal.woff2`, `source-sans-3-latin-400-italic.woff2`,
`source-sans-3-latin-600-normal.woff2`, plus latin-ext variants of the 400 and
600 weights.

---

## Colour

```
--parchment-light  #f5ecda    pale paper, panel backgrounds
--parchment        #e8d5a8    the main background
--parchment-dark   #c9a96e    deeper paper tone
--cream            #f7f0e2    text on dark panels

--ink              #1a0e04    primary text, headlines
--ink-soft         #2d1c0a    body text
--ink-mid          #4a3218    secondary text, captions

--gold             #8b6219    rules, ornaments, labels
--gold-bright      #b8892a
--gold-pale        #d4a84b    accents on dark backgrounds

--sienna           #6b2d18    the accent. Prices, the "theater" half of the
                              wordmark, emphasis
--forest           #243d26    the CTA button only
--forest-mid       #355737
```

**Working combinations**

- Ink on parchment: the default. Contrast around 13:1, comfortably AAA
- Sienna on parchment: accents and prices only, never body text
- Cream on ink: dark panels
- Gold on parchment: rules, small caps labels, ornaments. Too low-contrast for
  body copy at small sizes

---

## The wordmark

**Two-tone, and this is not optional.** "Traum" in `#1a0e04`, "theater" in
`#6b2d18`, set solid with no space:

> **Traum**theater

Set in IM Fell English. The colour split is the mark; losing it loses the
brand.

---

## Type scale

Three sizes on the web, plus two utility sizes.

```
--size-heading     clamp(1.75rem, 3.2vw, 2.5rem)   28 to 40px
--size-subheading  1.3rem                          20.8px
--size-body        1.125rem                        18px   <- floor
--size-small       1rem                            16px   labels, captions
--size-fine        0.9rem                          14.4px legal fine print only
```

**Body text never goes below 18px on screen.** The audience is largely 50+ and
testers found the earlier 16px setting hard to read. In print, keep body at
11 to 13pt and headlines large enough to read from a metre away.

---

## Ornaments

Only these characters. Nothing else.

| Glyph | Unicode | Used for |
|---|---|---|
| ◆ | U+25C6 | flanking small-caps labels, corner marks |
| ✦ | U+2726 | section dividers, the CTA button |
| „ … “ | U+201E, U+201C | German quotation marks in testimonials |

**Ogham characters (᚛ ᚜) appear on the website but do not survive export.**
Neither IM Fell nor Source Sans has ogham glyphs, so they fall back to
whatever the system provides, and in a headless render they break. Use ◆ or ✦
in anything destined for print or an image.

---

## Texture and imagery

- **Paper texture**: `public/assets/paper-texture.jpg`, used as a full-bleed
  background at `background-size: cover`. It is part of the identity and
  should not be flattened to a solid colour
- **Stone circle logo**: `public/assets/logo.png`. Always rendered with
  `mix-blend-mode: multiply` and `filter: contrast(1.08)` so it sits into the
  paper rather than floating on it. On a plain parchment fill, multiply alone
  is enough
- **Portrait**: `public/assets/mark-portrait.png`. Black and white. Square with
  rounded corners, roughly a 10px radius at 152px, and a 1 to 2pt gold border
- **Warm vignette** over the background, optional but used everywhere:

```css
radial-gradient(ellipse at 30% 20%, rgba(255,240,200,.20) 0%, transparent 55%),
radial-gradient(ellipse at 75% 80%, rgba(180,130,60,.13) 0%, transparent 50%)
```

- **No stock photography.** The site carries none. Adding any will make the
  design look pasted together from a different brand

---

## Copy rules that affect layout

These come from the tone-of-voice kit and are not stylistic preferences.

- **No em dashes.** Commas, colons, full stops. Applies to every piece of copy
- **No exclamation marks**
- German informal `du`. Greeting is "Hi" for du, "Hallo" for Sie
- Simple, intermediate-level German. No academic vocabulary
- Interpretation is offered, never declared: "kann bedeuten", not "bedeutet"
- Never claim there is no dictionary involved. Mark uses a 3,000-entry symbol
  book and the site says so
- Always "die Aisling-Methode", never "Aisling-System"
- Small-caps labels are uppercase with wide letterspacing, around 0.16em to
  0.28em, in gold

---

## Facts that must stay correct

- **Mark Anthony Irwin**, introduces himself as **Mark Irwin**
- **47**, Irish, from Cork, lives in Kempen
- Works with dreams **since 2011**, so over 15 years. Never 2014
- Certified 2024 (Channeling) and 2026 (Dream Interpreter)
- **12 five-star ProvenExpert reviews**, 100 percent recommendation
- Offer: **29 € statt 69 €**, Einführungsangebot, no VAT under §19 UStG
- Delivery: **five to ten pages** as a PDF. Never three to five
- Languages: **German and English**. Not Dutch
- Markets: Germany, Austria, Switzerland
- WhatsApp **0151 50317725** · **traum-theater.de**
- `mark@traum-theater.de` for clients, `kontakt@traum-theater.de` for legal

---

## Print specifics

- A4 is 210 x 297 mm. Home inkjets leave roughly 10 mm unprintable, so keep
  text and QR codes inside a 15 mm safe margin
- Backgrounds can bleed to the edge; expect a thin white rim
- Matte paper, 120 gsm or heavier
- Export text as vector where possible. A flattened image at 300 dpi is
  acceptable but softer
- Tear-off tabs on a noticeboard poster: about 48 mm tall, 8 strips, dashed
  dividers, rotated text. Keep the string short enough to fit the tab height
