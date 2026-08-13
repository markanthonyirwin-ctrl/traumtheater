# WhatsApp Business setup

Copy-paste ready. Everything written to the tone-of-voice kit
(`C:\Users\PC\Downloads\mark-tone-of-voice Deutsch and English  July 2026.md`)
and consistent with the live site and `client-inquiry-playbook.md`.

Character counts verified against WhatsApp's real limits.

Last updated 2026-08-13.

---

## 1. Profile fields

Keep these identical to Google Business Profile, ProvenExpert and the website.
Inconsistent name/address/phone across listings is a known local-SEO drag.

| Field | Value |
|---|---|
| Business name | Traumtheater |
| Category | Beratungsservice (alternative: Persönlicher Coach) |
| Address | Parkstraße 15, 47906 Kempen |
| Phone | +49 151 50317725 |
| Email | mark@traum-theater.de |
| Website | https://traum-theater.de |

**On the address:** it is already public in the Impressum by law, so listing it
adds no exposure. Leave it off only if you would rather not show it in-app.

**On email:** `mark@` is client contact. `kontakt@` is legal only and does not
belong here.

---

## 2. Business description

**510 / 512 characters.** Written for the cold QR scanner, who arrives with no
context at all: name and credential first, then what they actually receive,
then the differentiator, then reach, then a low-friction invitation. No price,
per the kit's first-contact rule.

```
Hi, ich bin Mark Irwin, zertifizierter Traumdeuter nach der Aisling-Methode. Mit Träumen arbeite ich seit 2011.

Ich deute deinen Traum persönlich und schriftlich. Du bekommst ein ausführliches Dokument, das deine Lebenssituation einbezieht, statt Symbole nachzuschlagen. Zum Nachlesen, wann immer du magst.

Fundiert und spirituell zugleich, ohne esoterische Überfrachtung.

Auf Deutsch oder Englisch, für Deutschland, Österreich und die Schweiz.

Schreib mir einfach, worum es geht. Mehr auf traum-theater.de
```

---

## 3. Greeting message

Sent automatically to first-time contacts. This is the highest-stakes line in
the whole setup: for a QR scanner it is the first thing they ever read from
you. The kit is explicit that the opening is "not a sales funnel, it is a
conversation starting", so there is no price, no service list, and it does
**not** ask for the dream yet.

**115 / 200 characters.**

```
Hi, schön, dass du dich meldest. Was hat dich hergeführt? Ich antworte dir persönlich, meistens noch am selben Tag.
```

## 4. Away message

**140 / 200 characters.**

```
Hi, danke für deine Nachricht. Ich bin gerade nicht am Schreibtisch, melde mich aber, sobald ich kann. Erzähl mir gern schon, worum es geht.
```

---

## 5. Quick replies

WhatsApp caps each at 1024 characters. All of the below are verified under it.
Order matters: put `/krise` first so it is reachable without scrolling.

### /krise  (425)

> Was du schreibst, klingt gerade sehr schwer, und dafür möchte ich dir passendere Unterstützung nennen als eine schriftliche Deutung.
>
> Die Telefonseelsorge ist kostenlos rund um die Uhr erreichbar: 0800 111 0 111. Bei akuten Beschwerden ruf bitte deinen Hausarzt oder die 112 an.
>
> Meine Traumdeutung ist eine reflektierende Dienstleistung und ersetzt keine professionelle Betreuung. Melde dich später gerne wieder, ich bin da.

**Never take the booking and never interpret the dream when crisis signals
appear.** See the safeguarding section of the playbook.

### /ablauf  (412) — Stage 2

> Gerne, hier der Ablauf.
>
> Du schickst mir deinen Traum, so genau du ihn erinnerst, und ein paar Sätze zu deiner aktuellen Lebenssituation. Mehr brauche ich nicht.
>
> Ich lese ihn in Ruhe und schreibe dir eine ausführliche Deutung nach der Aisling-Methode. Du bekommst sie als Dokument, zum Nachlesen.
>
> Vorher klären wir kurz zwei formale Punkte und die Zahlung. Sag Bescheid, wenn ich dir die Details schicken soll.

### /aisling  (424) — Stage 2, curiosity as a buying signal

> Die Aisling-Methode ist eine irische Tradition, in drei Jahrzehnten gewachsen. Sie geht davon aus, dass jedes Element eines Traums einen Teil von dir darstellt: die Orte, die Menschen, die Tiere, sogar dein eigenes Tempo.
>
> Das heißt auch: Ein Traum sagt dir nie, was ein anderer Mensch ändern soll. Er spricht über deinen eigenen Anteil.
>
> Wie das konkret aussieht, kannst du hier nachlesen: traum-theater.de/beispiel-deutung

### /beispiel  (175)

> Damit du vorher weißt, was du bekommst: Ich habe eine vollständige Deutung veröffentlicht, meinen eigenen Traum, im selben Format wie deine.
>
> traum-theater.de/beispiel-deutung

---

### /intake1 and /intake2 — the Stage-4 template

**The full template is 1,991 characters and does not fit in one quick reply.**
Send both, in order, only after Stage-3 permission. Personalise the opening
two lines of part 1; everything else is verbatim.

#### /intake1  (921)

> Liebe/Lieber [NAME],
>
> [1-2 persönliche Zeilen zu ihrer Situation.]
>
> Du erhältst eine persönliche, schriftliche Traumdeutung nach der Aisling-Methode, in der Regel fünf bis zehn Seiten. Einführungspreis: 29 €.
>
> Zur Erstellung arbeite ich mit dem KI-Werkzeug Claude (Anthropic, USA), für Übersetzung, Strukturierung und Ausformulierung. Deinen Namen und identifizierende Angaben entferne ich vorher aus dem Traumtext. Die Aisling-Lesart und das letzte Wort bleiben bei mir. Deine Angaben werden verschlüsselt bei Proton (Schweiz) gespeichert.
>
> Wichtiger Hinweis: Meine Traumdeutung ist eine reflektierende Dienstleistung nach der Aisling-Methode. Sie ist keine medizinische, psychotherapeutische oder psychologische Beratung. Bei gesundheitlichen oder krisenhaften Anliegen wende dich bitte an fachlich qualifizierte Hilfe (Hausarzt, Psychotherapeut, Notruf 112, Telefonseelsorge 0800 111 0 111, kostenlos rund um die Uhr).

#### /intake2  (1017)

> Dein Trauminhalt kann besonders schützenswerte Informationen enthalten (z. B. zu Gesundheit, Glauben, Beziehungen). Deshalb brauche ich kurz deine Zustimmung.
>
> Bitte antworte mir mit "JA" auf diese zwei Punkte:
>
> 1. Ich bin einverstanden, dass mein Trauminhalt zu diesem Zweck verarbeitet wird (Art. 9 Abs. 2 lit. a DSGVO) und wir per WhatsApp kommunizieren.
>
> 2. Ich verlange und stimme ausdrücklich zu, dass Sie vor Ende der Widerrufsfrist mit der in Auftrag gegebenen Dienstleistung (persönliche schriftliche Traumdeutung) beginnen. Mir ist bekannt, dass mein Widerrufsrecht bei vollständiger Erfüllung des Vertrags erlischt.
>
> Zahlung sicher über Mollie:
> https://payment-links.mollie.com/payment/Y5A8qebc8fWVrWDhnjNyv
>
> Sobald ich dein JA und die Zahlung habe, schick mir deinen Traum, gerne mit Titel und so viel Kontext, wie du magst.
>
> Wenn der Preis gerade nicht passt, sag einfach Bescheid.
>
> AGB: traum-theater.de/agb
> Widerruf: traum-theater.de/widerruf
> Datenschutz: traum-theater.de/datenschutz
>
> Liebe Grüße
> Mark

**Do not change the "Sie" in point 2.** It is the verbatim eRecht24-audited
wording. Legal precision beats grammatical consistency in that one line.

---

### Branch replies, from the playbook table

**/halt** (135) — client sent the dream before consent and payment. Do not
quote any of the dream content back.

> Vielen Dank, ich lese noch nichts.
>
> Ich brauche noch dein JA auf die zwei Punkte und die Zahlung, dann schaue ich mir alles in Ruhe an.

**/ja-ohne-zahlung** (67)

> Danke für dein JA. Sobald die Zahlung eingegangen ist, geht es los.

**/komplett** (156) — JA, payment and dream all received

> Vielen Dank für dein JA, die Zahlung und den Traum.
>
> Ich lese jetzt in Ruhe und melde mich innerhalb der nächsten zwei bis drei Werktage mit deiner Deutung.

**/pwyc** (97) — cannot afford it

> Sag mir einfach, was für dich möglich ist. Wir finden eine Lösung, ohne Erklärung, ohne Umstände.

Then create a one-off Mollie link for the agreed amount.

**/bedenkzeit** (53) — not ready. Do not chase afterwards.

> Klar, lass dir Zeit. Melde dich, wenn du soweit bist.

**/schluss** (87) — after two or three warm exchanges with no booking. Send
once, then stop replying.

> Wenn du dich entscheidest, deinen Traum deuten zu lassen, melde dich gerne. Ich bin da.

**/rueckfrage** (117) — complaint or refund request. Do not promise a refund.

> Rückfragen zu deiner Deutung sind normal. Schreib mir, was dich nicht getroffen hat, und wir schauen gemeinsam drauf.

---

## 6. Optional

- **Catalog:** the 29 € offer can be added as a catalog item. A catalog is
  passive, so it does not break the no-price-in-first-contact rule, and it
  saves retyping the offer.
- **Labels:** useful ones would be Neu, Warten auf JA, Warten auf Zahlung,
  In Bearbeitung, Geliefert, Nachfassen. They mirror the playbook stages.
- **QR code:** points at wa.me/4915150317725. Worth printing with the website
  underneath, so a poster reader who does not want to message yet still has
  somewhere to go.

## 7. Rules worth remembering

- Never "wir". There is no company layer, this is Mark personally
- Never "Hey" or "Yo". Irish, not American. "Hi" for du, "Hallo" for Sie
- No em dashes
- No price, process or service list in a first message
- Mirror the client's address form and their spiritual register
- Interpretation is offered, never declared: "was dir dein Traum zeigen könnte"
- Never take a booking when crisis signals appear
