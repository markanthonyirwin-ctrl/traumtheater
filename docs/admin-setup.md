# Traumtheater — Business Admin Setup

Mark Anthony Irwin · Parkstraße 15, 47906 Kempen
Einzelunternehmen, Kleinunternehmer nach § 19 UStG
Stand: 01.09.2026

---

## 1. Legal identity — settled facts

| Item | Value | Source / note |
|---|---|---|
| Rechtsform | **Einzelunternehmen**, Gewerbetreibender **ohne HR-Eintragung** | GewA 2, Felder 1 + 2 blank |
| Firmenname | none — trades under the personal name **Mark Anthony Irwin** | GewA 2, Feld 3 blank |
| „Traumtheater" | a **Geschäftsbezeichnung** (trading label), not a registered Firma | |
| Steuernummer | *(nicht hier abgelegt — siehe Finanzamt-Schreiben)* | Finanzamt Kempen |
| Handelsregisternummer | **does not exist** | see §1.1 |
| IHK-Mitgliedsnummer | exists (automatic membership), **not** for invoices | the quarterly magazine |
| USt-IdNr. | not held — §19 Kleinunternehmer | |
| Tätigkeit (Feld 18) | Onlineberatung im Bereich Traumdeutung und Channelling | GewA 2, Ummeldung 15.06.2026 |
| Markets | DE / AT / CH · German and English | |
| Phone / WhatsApp Business | +49 151 50317725 | `CtaButtons.astro`, Impressum, JSON-LD |

### 1.1 The Handelsregisternummer question — closed

A Handelsregisternummer is issued by the **Amtsgericht** via a **notary**, at cost, with a certificate.
It is **not** produced by a Gewerbeanmeldung, and it is **not** the IHK membership number.

The GewA 2 is the proof: Feld 1 ("Im Handelsregister eingetragen") and Feld 2
("Ort und Nummer des Eintrages") are both blank and the form is stamped by Kempen's Ordnungsamt.

Free confirmation if ever needed: **handelsregister.de → Normale Suche → "Irwin", Kempen** → no result.

**An invoice with no HR line is normal for an Einzelunternehmer.
An invoice claiming an HR number that does not exist is a false statement.**

### 1.2 Three email addresses, not interchangeable

| Address | Use |
|---|---|
| `mark@traum-theater.de` | all client communication, CTAs, `Person` node in JSON-LD |
| `kontakt@traum-theater.de` | legal enquiries, `ProfessionalService` node |
| `buchhaltung@traum-theater.de` | invoicing (new — add to CLAUDE.md) |

---

## 2. Banking

**N26 Business** — active, free. Replaced the abandoned Fyrst application.

Answers used during the Fyrst application (kept for reference, same answers apply anywhere):

- Rechtsform: *Freiberufler/Gewerbetreibender* → *Gewerbetreibender ohne HR-Eintragung*
- Branche: *Erbringung von sonstigen Dienstleistungen a. n. g.* (WZ 96.09) preferred;
  *Personalcoaching / Unterricht a. n. g.* acceptable fallback
- SCHUFA + Geldwäschegesetz boxes: **both mandatory**, both true
- Marketing consent boxes: **leave empty** — cannot be required for account approval
- Gründungsdatum: the **original Gewerbeanmeldung**, not the 15.06.2026 Ummeldung

---

## 3. The stack — decided

```
Client → Mollie invoice + payment link → payment → Mollie payout → N26
                    ↓                                      ↓
          invoice PDF → archive folder          Traumtheater_Buchhaltung.xlsx
                                                          ↓
                                          ELSTER: Einkommensteuer + Anlage EÜR + Anlage G
```

| Layer | Tool | Cost |
|---|---|---|
| Invoicing + payment | Mollie Invoicing | €0/month + per-transaction fee |
| Business account | N26 Business | €0 |
| Bookkeeping | `Traumtheater_Buchhaltung.xlsx` (LibreOffice) | €0 |
| Archive | folder + receipt inbox | €0 |
| Tax filing | ELSTER, or WISO Steuer ~€40 once a year | ~€40/year |

**sevdesk: cancel.** €12.90 duplicates Mollie. €25.90 buys receipt scanning, bank sync, EÜR
generation and UStVA→ELSTER — and as a Kleinunternehmer there is **no UStVA at all**, so most
of it is unusable. €311/year is eleven €29 sessions in a business running at a loss.

**Export everything before cancelling** — invoices, credit notes, receipt images, booking data.
sevdesk retains data roughly three months after cancellation; the statutory obligation is eight years.

### Why not desktop software (Taxpool, WISO EÜR & Kasse, EasyCash&Tax)

Researched and rejected **for now**. Taxpool at ~€65 one-off has genuinely good licence economics,
but it is double-entry software with a Kontenrahmen and a dated interface — high activation energy,
which is precisely the failure mode to avoid. Half its value (UStVA, USt-Erklärung, DATEV) is
switched off by §19. Revisit when turnover crosses €25,000 and VAT returns begin.

Taxpool Mini is free — worth twenty minutes as a test of your own reaction, not as a commitment.

---

## 4. The anti-neglect design

The known pattern: no daily maintenance, then a six-month archaeological dig.

The system is built so that **six months of neglect costs nothing**:

- **N26** holds every transaction, exportable as CSV for any date range, forever
- **Mollie** holds every invoice and settlement, same
- Nothing is lost by not touching the spreadsheet — only the *labelling* has to be caught up

The one thing that genuinely rots is **receipts**. Hence:

### The single highest-value action — not yet done

Set up **`belege@traum-theater.de`** and change the billing address at every supplier to it:
Netlify · Anthropic · domain registrar · ProvenExpert · N26 · Mollie · insurance.

Twenty minutes once. From then on every receipt files itself into one inbox nobody else emails.
Without this, no software saves you. With it, even total neglect is recoverable.

### Rhythm

One hour, four times a year — end of March, June, September, December. In Tiimo, repeating.
Export N26 + Mollie for the quarter, type the rows, drop the receipts in the folder.
Miss one and the next takes ninety minutes. Nothing is ever lost.

---

## 5. The bookkeeping file

**`Traumtheater_Buchhaltung.xlsx`** — tested working in LibreOffice. One file, all years, perpetual.

| Sheet | Purpose |
|---|---|
| **Gesamtübersicht** | one year at a time; year in **F3** (dropdown). Monthly table, in-cell bars, bar + pie chart, Gewinn/Verlust, §19 ceiling gauge |
| **Einnahmen** | Datum · Rechnungs-Nr. · Referenz · Leistung · Betrag · Gebühr · Zahlungsweg · Beleg |
| **Ausgaben** | Datum · Lieferant · Beschreibung · **Kategorie** (dropdown) · Betrag · Zahlungsweg · Beleg |
| **Jahresvergleich** | every year 2026→2050 side by side, lifetime totals, §19 threshold note |
| **Auswertung** | expenses by category for the selected year, with percentages |
| **Privat** | Einlagen / Entnahmen — **memo only, never feeds the EÜR** |
| **Anleitung** | all rules, year-end checklist, what to do after neglect |

Design notes:

- **Referenz, not Kunde** — first name or initials only. Full name and address live on the
  Mollie invoice, where the law requires them. The ledger therefore holds no personal data
  and can live anywhere, including a cloud sheet.
- **Nothing hides silently.** A booking outside the year selected in F3 raises a live counter
  beside it: *"Hinweis: 3 Buchung(en) aus anderen Jahren."*
- **In-cell bars** (`REPT`) alongside the real charts, so the visuals render in any app —
  Proton Sheets and Google Sheets included.
- 800 rows per sheet; extend by copying the last row down. All sums use whole columns.

### Recording rules

**Record date = the day money moves between you and the outside world** (Zuflussprinzip),
not the day it lands in N26. Client pays Mollie 24 Aug, payout arrives 27 Aug → income date is **24 Aug**.

**Never enter:**
- Mollie payout → N26 (the revenue is already recorded — this would double-count it)
- Privateinlage / Privatentnahme (own money, already taxed)
- any transfer between your own accounts

**Do enter** business expenses paid with a **private** card — Ausgaben sheet, Zahlungsweg
*„Privat verauslagt"*. These are real Betriebsausgaben and reduce taxable profit.

**Reconciliation** is just this: every N26 credit is a client payment (in Einnahmen), a Mollie
payout, or your own money; every debit is a business expense (in Ausgaben) or your own withdrawal.
If every line falls into a bucket, the books are complete.

### The €150 Privateinlage (24.08.2026)

Goes on the **Privat** sheet, affects nothing:

| Datum | Art | Betrag | Notiz |
|---|---|---|---|
| 24.08.2026 | Privateinlage | 150,00 € | Anfangskapital, Privatkonto → N26 |

Write a one-paragraph **Eigenbeleg** (date, amount, purpose, name), save it in the receipts folder.
The N26 statement corroborates it.

### Year-end — ten minutes

1. F3 → the closing year
2. Check the hint reports nothing missing
3. Export Gesamtübersicht → PDF → that year's folder
4. Transfer the figures into **Anlage EÜR** (ELSTER or WISO Steuer)
5. Save a snapshot copy: `Traumtheater_Buchhaltung_Stand_31-12-JJJJ.xlsx`

The working file is never emptied and never replaced.

---

## 6. Mollie Invoicing — configuration and open defect

### Settings

| Setting | Value |
|---|---|
| Numbering | Präfix `RE` · Jahr **on** · Startnummer `0001` → **`#RE-2026-0001`** |
| Product | „Persönliche schriftliche Traumdeutung" · €29 (Einführungsangebot) |
| Second product | same, €69 (regulär) — create now, switch later without editing prices |
| Payment term | 7 days |
| isEInvoice | **false** — B2C needs no E-Rechnung (BMF: the mandate excludes private consumers) |

### Required on every invoice

```
Leistungsdatum: TT.MM.JJJJ            § 14 Abs. 4 Nr. 6 UStG
Steuernummer: <deine Steuernummer>    § 14 Abs. 4 UStG
Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.    § 34a UStDV
```

The §19 sentence is not optional decoration. Without it a bare "USt 0 %" line reads as a
zero-rated supply, which is a different thing in law.

### Defects found in the first draft invoice (25.08.2026)

| # | Problem | Status |
|---|---|---|
| 1 | The `Handelsregisternummer` line prints the **Steuernummer** — and no HR number exists | **OPEN — must be fixed** |
| 2 | Product listed **twice** (€58) with a 50 % discount cancelling it back to €29 | fixable in the draft — one line, no Rabatt |
| 3 | §19 statement missing | solved via API `memo` |
| 4 | Leistungsdatum missing | solved via API `memo` |
| 5 | „Angebot" appended to the product name; phone unformatted | cosmetic |

### The API is the fix for 3 and 4

`POST /v2/sales-invoices` has a top-level **`memo`** field — the spec states it *"will be shown
on the invoice PDF"*. The dashboard does not expose it; the API does.

**Correction to earlier advice:** `lines[].description` is capped at **100 characters**, so the
legal text does **not** fit there. It belongs in `memo`, which has no stated limit.

Create as `status: "draft"` via the API, then open and send from the dashboard — no need to
script the whole workflow.

```bash
curl -X POST https://api.mollie.com/v2/sales-invoices \
  -H "Authorization: Bearer live_YOURKEY" \
  -H "Content-Type: application/json" \
  -d '{
    "status": "draft",
    "vatMode": "inclusive",
    "paymentTerm": "7 days",
    "isEInvoice": false,
    "memo": "Leistungsdatum: 25.08.2026\nSteuernummer: <deine Steuernummer>\nGemäß § 19 UStG wird keine Umsatzsteuer berechnet.",
    "recipientIdentifier": "kunde-0001",
    "recipient": {
      "type": "consumer",
      "givenName": "...", "familyName": "...",
      "email": "...",
      "streetAndNumber": "...", "postalCode": "...", "city": "...",
      "country": "DE", "locale": "de_DE"
    },
    "lines": [{
      "description": "Persönliche schriftliche Traumdeutung nach der Aisling-Methode",
      "quantity": 1,
      "vatRate": "0.00",
      "unitPrice": { "currency": "EUR", "value": "29.00" }
    }]
  }'
```

API key: **Developers → API access tokens**. Test with a `test_` key first.
`_links.pdfLink` in the response gives the finished PDF — useful for automatic archiving.

### What the API cannot fix

**Nothing in the Sales Invoices schema touches your own business details.** `organizationNumber`
exists only on the `recipient` object. Your sender block — including the false HR line — renders
from the Mollie **organisation profile**, which this API does not expose.

So defect #1 stays a dashboard / support problem, and it is the only one that genuinely blocks.
Support chat has not resolved it yet. Push that single point; the other two are solved.

### Privacy on invoices

Neutral service descriptions only — „Persönliche schriftliche Traumdeutung", never the client's
actual theme. The invoice may be read by a partner, an accountant or a Finanzamt clerk.
There is no accounting reason to expose it.

The Datenschutzerklärung already covers Mollie for payments; add a sentence when next editing it,
since Mollie now also processes client **names and addresses** for invoicing.

---

## 7. Retention

**Eight years** for invoices and receipts (§ 14b UStG), from the end of the calendar year of issue.
An invoice dated 24.08.2026 must remain available through the end of **2034**.

**Mollie retains only five years.** Download every invoice PDF at the moment of issue — ten seconds
each, and it closes the gap permanently.

```
Traumtheater/
  2026/
    01-Ausgangsrechnungen/   RE-2026-0001.pdf …
    02-Eingangsrechnungen/   netlify, anthropic, provenexpert, domain …
    03-Kontoauszüge/         N26 monthly PDF
    04-Mollie/               monthly settlement report
    05-Eigenbelege/          Privateinlagen etc.
```

Synced to a cloud drive so a second copy always exists.

---

## 8. Open actions

1. **`belege@traum-theater.de`** — create, redirect every supplier's billing email. Highest value, not yet done.
2. **Pre-N26 expenses paid privately** — Gewerbe-Ummeldung €26,00, domain, hosting, Anthropic,
   ProvenExpert, Aisling certification. All deductible, all currently missing from a business
   running at a loss. **This is the part of the exercise with real money in it.**
3. **€150 Privateinlage** — Privat sheet + Eigenbeleg.
4. **Mollie HR field** — keep pushing support; clear it if the field accepts being emptied.
5. **Fix the draft invoice** — one line, no discount, memo populated. Then send to the first client.
6. **Cancel sevdesk** — after exporting everything.
7. **Quarterly hour** in Tiimo.
8. **WISO Steuer ~€40** around February 2027, for the 2026 return.
9. **CLAUDE.md** — record `buchhaltung@traum-theater.de` as the third address.

---

## 9. Thresholds to watch

**§ 19 Kleinunternehmerregelung ends** when the **previous** year exceeded **€25,000**
or the current year passes **€100,000**. The Jahresvergleich sheet tracks it.

At that point: VAT on invoices, UStVA to the Finanzamt, and desktop accounting software
(Taxpool at ~€65) finally earns its price. Not before.

---

## 10. The standing point

Bookkeeping is not the bottleneck in this business. **Client number two is.**

Total recurring software cost of this entire setup: **€0/month**, plus roughly €40 once a year.

---

*Not tax advice. A single consultation with a Steuerberater before the first Steuererklärung
is money better spent than a year of accounting software.*
