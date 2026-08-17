# Handoff: local SEO and backlinks

For an external SEO or link-building specialist picking up **traum-theater.de**.
Everything below was verified live on 2026-08-14, not recalled.

---

## 0. Read this before you plan anything

**"Local SEO" is probably the wrong frame for this business, and the budget
can disappear into it.**

Mark is based in Kempen but the service is **remote and written**. Nothing is
delivered in person. There are no walk-ins, no premises a client ever visits,
no catchment area. Searches like *Traumdeuter Kempen* or *Traumdeutung
Nordrhein-Westfalen* have effectively no volume, and ranking for them would
reach almost nobody.

A July 2026 audit reached the same conclusion: a Google Business Profile is
**worth having for brand-name search and as a review surface, not as a traffic
channel.**

So:
- **Do** set up GBP properly, as a service-area business with no public pin
- **Do** treat citations as consistency and trust signals, not as a traffic play
- **Do not** build city landing pages for German towns. That is a doorway-page
  pattern and there is no demand behind it
- **The real opportunity is national and DACH-wide**, on informational and
  transactional dream-interpretation terms. See section 4

If a proposal is built around local pack rankings, push back before spending.

## 0b. Scope: links only

**This engagement is off-page only.** On-page and technical SEO are already
done and are not part of the brief.

- **In scope:** backlinks, guest placements, directory and citation listings,
  outreach, digital PR
- **Not in scope:** on-page copy, meta tags, schema, site structure, page
  speed, analytics setup

If you spot an on-page problem, **send it to Mark rather than fixing it.** He
has a developer workflow and a strict tone-of-voice kit; unbriefed copy edits
will breach it.

### Sequencing warning

**Do not start citation building until the Google Business Profile exists.**
GBP is the canonical NAP anchor. Building listings first and then correcting
details later is rework, and inconsistent NAP across listings is the exact
problem citations are meant to solve. GBP is currently unclaimed. See section 3.

---

## 1. The business

| | |
|---|---|
| Trading name | Traumtheater |
| Person | Mark Anthony Irwin (introduces himself as Mark Irwin) |
| Address | Parkstraße 15, 47906 Kempen, Germany |
| Phone / WhatsApp | +49 151 50317725 |
| Client email | mark@traum-theater.de |
| Legal email | kontakt@traum-theater.de |
| Website | https://traum-theater.de |
| ProvenExpert | https://www.provenexpert.com/mark-anthony-irwin/ |

**Use that NAP verbatim everywhere.** It matches the Impressum, the JSON-LD
and the site copy. Any variation creates a citation mismatch.

**What is sold:** a personal, written dream interpretation using the Aisling
Method. Delivered as a PDF of five to ten pages. **29 €** introductory,
**69 €** regular. No VAT charged (§19 UStG, German small-business rule).

**Markets:** Germany, Austria, Switzerland. German and English.

**Credentials:** certified 2024 (Channeling) and 2026 (Dream Interpreter) by
the Aisling School. Working with dreams since 2011.

**Reviews:** 12 five-star on ProvenExpert, 100% recommendation. Note the badge
*image* embedded on the site is a snapshot dated 17.07.2026 showing **10**.
Regenerating it is on Mark's list.

---

## 2. Current technical state

The site was rebuilt from a client-side React page into a static Astro site in
August 2026. Before that, a plain fetch returned a **338-byte body containing
no readable content** because everything rendered via Babel in the browser.
Search engines and social preview bots saw an empty page. That is fixed: every
page now ships complete HTML.

**Stack:** Astro 5, static output, deployed on Netlify from
`github.com/markanthonyirwin-ctrl/traumtheater`, publish directory `dist`.
Push to `main` triggers a rebuild.

**Live URLs, all 200 and all `index, follow`:**

```
/                                             homepage
/persoenliche-traumdeutung/                   money page
/schriftliche-traumdeutung/                   money page
/spirituelle-traumdeutung/                    money page
/beispiel-deutung/                            full worked example interpretation
/blog/                                        blog index
/blog/was-bedeutet-mein-traum-traumlexikon/   post
/blog/traumtagebuch-fuehren/                  post
/impressum/  /datenschutz/  /agb/  /widerruf/  legal
```

**Already in place:**
- `sitemap-index.xml`, generated at build, 12 URLs. Submitted to Search Console
- `robots.txt` allows all, points at the sitemap
- Schema: `Person`, `ProfessionalService`, `Service`, `Offer`,
  `AggregateRating`, `Review`, `PostalAddress`, `EducationalOccupationalCredential`
- `FAQPage` schema on all three money pages, twelve questions total
- Canonical tags on every page, hyphenated domain
- Titles and meta descriptions all inside ~60 and ~155 characters
- Self-hosted fonts, **zero third-party requests**. No Google Fonts, no CDN,
  no analytics of any kind

**Deliberately not done, with reasons:**
- **No hreflang.** Identical German across DE, AT and CH is duplicate content,
  not three locales. Do not add it unless genuinely separate localised pages
  are built
- **No analytics.** GDPR caution. If you need data, Plausible or similar
  self-hosted is preferred over GA4. Discuss before installing anything
- **No symbol dictionary / lexicon section.** See section 4

---

## 3. Gaps

### Yours (links only)

1. **No backlinks to speak of.** The single biggest constraint on this site.
   New domain, soft-authority niche, strong on-page and almost nothing pointing
   at it
2. **No directory or citation listings**, beyond ProvenExpert. See section 5

That is the whole brief. Everything else below stays with Mark.

### Mark's, not yours

- **Google Business Profile is unclaimed.** This one is **blocking for
  citations** and Mark has to do it himself: Google verifies the business
  owner by video call or by post to the address, and a third party cannot
  complete that step. Set up as a **service-area business with no public pin**,
  since clients never visit. Confirm it is live before building any listings
- **Bing Webmaster Tools** not set up. Free, ten minutes
- **og:image is still the logo**, not a 1200x630 share card. Costs click-through
  whenever the site is shared. Needs a designed graphic
- **Analytics:** none installed, deliberately. Not to be added without a GDPR
  discussion first

---

## 4. Keyword map

From the July 2026 audit. Volumes are DE monthly estimate ranges.

### Target

| Keyword | Est. vol | Status |
|---|---|---|
| was bedeutet mein Traum | 2k–5k | blog post live |
| Traumdeutung online | 1k–3k | no dedicated page yet |
| spirituelle Traumdeutung | 300–800 | page live |
| persönliche Traumdeutung | 100–300 | page live |
| ganzheitliche Traumdeutung | 100–300 | covered on spirituelle page |
| Traumdeutung buchen | 50–150 | no dedicated page yet |
| schriftliche Traumdeutung | 30–100 | page live, near-unopposed |

**Next tier:** wiederkehrende Träume Bedeutung (500–1.5k) · Albträume deuten
(500–1.5k) · **von Verstorbenen träumen** (high volume, high emotional intent,
the audit's strongest discovery) · Träume verstehen · intuitive Traumdeutung ·
Traumdeuter finden · keltische/irische Traumdeutung (near-zero volume, zero
competition, entirely on brand)

**English expat niche, almost uncontested:** English dream interpretation
Germany · English-speaking dream interpreter Berlin. Mark is a native speaker.
No English pages exist yet.

### Do not target

| Skip | Why |
|---|---|
| **Traumdeutung** (head term, 40k–90k) | Owned by symbol-lexicon content farms with 9,000 to 18,600 entries each. Unwinnable, and the intent is mostly free lookup |
| **Traumsymbole / Traumlexikon** | Same. Worse: ranking here trains Google to file the site under free-lookup and undercuts the paid positioning |
| **Klartraum, luzides Träumen** | Entire SERP is technique content. That audience wants to control dreams, not have them interpreted. Zero conversion |
| **Astralreise, OBE, AKE** | Different audience, no interpretation intent |
| **Energiearbeit, Chakren, Kundalini** | Healing-session intent, not dream reading |
| **"Aisling"** as a traffic term | Roughly zero German volume. It is an on-page differentiator, not a query |

**Do not build a symbol dictionary on the site.** It is a volume race against
content farms that cannot be won, and it destroys the paid positioning.

### Competitive landscape

Lexicon farms: traum-deutung.de (18,600 symbols, FAQ schema, earns rich
results), lexikon-der-traumdeutung.de (16,500), traumdeuter.ch (9,000),
astrologie-deutung.de. Clinical practitioner: online-psychologie.info. Swiss
hotline portal: zukunftsblick.ch.

**The gap Mark occupies:** a named, warm, non-Freudian practitioner delivering
a personal *written* interpretation in German or English. The market is
polarised between faceless free lexicons and clinical live-session therapists.
Nobody holds the middle.

---

## 5. Link plan, in priority order

For a new domain in a soft-authority niche, **three to five genuine, topically
relevant links will do more than thirty directory submissions.** Relevance
beats volume here by a wide margin. Please do not buy links or use PBNs; this
is a trust-based personal practice and a manual action would be terminal.

### Tier 1 — relationship links, highest value, no cost

These are warm. Mark already has the relationship.

1. **The Aisling School** (healingthroughdreams.com). Mark is a certified
   practitioner, certified 2024 and 2026. If they list practitioners, this is
   the most topically relevant link available anywhere. Ask Mark to make the
   introduction rather than cold-mailing them
2. **The Dream Interpretation Podcast** (Michael Sheridan, 365 episodes). Mark
   studied directly under him. A guest episode is a link plus a pre-warmed
   audience of exactly the right people. Highest single-item value on this list

### Tier 2 — niche directories that already rank for the target terms

3. **therapeutenfinder.com**
4. **heil-verzeichnis.de**
5. Comparable DE, AT and CH Esoterik / Lebensberatung directories

Intent-matched referral traffic as well as link value. **Blocked until GBP
exists** so the NAP is settled first.

### Tier 3 — guest pieces on German alternative and spirituality outlets

6. **Sein.de** · **spirit-online.de** · **connection.de**

Note `spirit-online.de` currently ranks for spiritual Traumdeutung terms, so it
is both a competitor and a placement opportunity. Pitch the differentiator: a
named practitioner delivering written interpretations, not another symbol list.

### Tier 4 — the English expat angle, least contested audience

7. **Toytown Germany**, city expat Facebook groups, r/germany-adjacent
   communities

Mark is a native English speaker and the English-speaking-dream-interpreter
niche in Germany is close to empty. **Genuine participation only, no link
drops.** These communities punish promotion and the reputational downside is
real. Note there are no English pages on the site yet, so this tier may be
premature until there are.

### Already live

ProvenExpert profile. Nothing else.

### Angles worth pitching

- Irish practitioner of an Irish dream tradition living in Germany
- Publishes a **complete worked interpretation** publicly, which almost nobody
  in this field does: `/beispiel-deutung`
- Written rather than live-session format, which is genuinely unusual
- Sits between the free symbol-lexicon farms and clinical practitioners

---

## 6. Constraints you must work inside

- **Voice.** Mark has a written tone-of-voice kit that governs all copy
  including anything you publish on his behalf. Key rules: no em dashes, no
  exclamation marks, German informal *du*, simple intermediate-level German,
  first person singular and never "wir", never push a spiritual worldview,
  always "die Aisling-Methode" and never "Aisling-System". Ask Mark for the
  file before writing anything client-facing
- **Never claim there is no dictionary involved.** Mark uses a 3,000-entry
  Aisling symbol book and the site says so. Any "no lexicon" claim is
  indefensible and was deliberately removed from the site
- **Client confidentiality.** Dream content is never published without
  documented consent. The example interpretation on the site is Mark's own
  dream, specifically to avoid this. Dream content can constitute GDPR
  Article 9 special-category data
- **Review counts must be real.** 12 on ProvenExpert. Inflating this in schema
  risks a Google manual action and is actionable under German competition law
- **No medical or therapeutic claims.** The service is explicitly reflective,
  not medical or psychotherapeutic (AGB §2a)
- **Nothing that adds third-party requests** without discussing GDPR first.
  The site currently makes zero

---

## 7. Access you will need from Mark

- **The tone-of-voice kit.** Mandatory before writing anything that will carry
  his name, including outreach emails and guest pieces
- **Google Search Console**, read access, to watch referring domains
- **Google Business Profile**, once Mark has claimed and verified it
- **ProvenExpert login**, only if you are managing review requests
- The July 2026 SEO audit, if you want the full competitor teardown

**No repo access needed.** Scope is off-page only. Send any on-page
observation to Mark.

## 8. Status, confirmed 2026-08-14

| | |
|---|---|
| Google Business Profile | **Not claimed.** Blocking for tier-2 citations. Mark must do this himself |
| Sitemap | **Resubmitted** to Search Console with all 12 URLs |
| Scope | **Links only.** No on-page, no technical, no analytics |
| Analytics | None installed, deliberate. Not to be added |

**First move:** tier 1. Those two relationship links need no GBP, cost nothing,
and are the highest-value items on the list. Start there while the profile is
being verified.

## 9. Related documents in this repo

- `docs/brand-sheet.md` — fonts, palette, brand facts
- `docs/blog-seo-handoff.md` — content strategy, keyword detail, publishing workflow
- `docs/client-inquiry-playbook.md` — the sales funnel and legal templates
