// TraumtheaterPage — React component rendering the full page inside a scoped container.
// Density/spacing is controlled via [data-variant] on the root; all rules live in traumtheater.css.
// All user-requested fixes applied:
//   • logo bare on parchment (no frame), next to wordmark
//   • "Persönliche Traumdeutung" eyebrow → black
//   • Email button → cream bg + ink text (legible)
//   • CTA sub-line → black
//   • Portrait used in About
//   • Symbol book: 500 → 3,000 entries
//   • Removed "Keine KI · Kein Algorithmus" badge
//   • Offer price: €69 struck through, €29 Einführungsangebot; pay-what-you-can note
//   • Process step 1 expanded with title/text/context instruction
//   • Testimonials section added (Monika, Ciara)

const { useMemo } = React;

// Shows the submission address as selectable text with a one-tap copy button.
// Fallback for mobile, where a mailto: link may not open a configured mail app.
function EmailCopy({ address, tone = 'light' }) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 2000); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(address).then(done).catch(() => {});
    } else {
      done();
    }
  };
  return (
    <div className={"tt-email-copy tt-email-copy--" + tone}>
      <span className="tt-email-copy-label">oder E-Mail an</span>
      <a className="tt-email-copy-addr" href={"mailto:" + address}>{address}</a>
      <button type="button" className="tt-email-copy-btn" onClick={copy}
        aria-label="E-Mail-Adresse kopieren">
        {copied ? '✓ Kopiert' : 'Kopieren'}
      </button>
    </div>
  );
}

function TraumtheaterPage({ variant = 'balanced' }) {
  const V = variant;
  const [navOpen, setNavOpen] = React.useState(false);

  return (
    <div className="tt-root" data-variant={V}>
      {/* ══════════ NAV ══════════ */}
      <nav className="tt-nav" data-open={navOpen ? 'true' : 'false'}>
        <a href="#" className="tt-nav-brand">Traumtheater</a>
        <button className="tt-nav-toggle" aria-label="Menü" onClick={() => setNavOpen(o => !o)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {navOpen
              ? <><path d="M6 6l12 12"/><path d="M18 6L6 18"/></>
              : <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>}
          </svg>
        </button>
        <div className="tt-nav-links" onClick={() => setNavOpen(false)}>
          <a href="#methode">Die Methode</a>
          <a href="#symbole">Symbole</a>
          <a href="#angebot">Angebot</a>
          <a href="#stimmen">Stimmen</a>
          <a href="#about">Über mich</a>
          <a href="#kontakt" className="tt-nav-cta">Kontakt ✦</a>
        </div>
      </nav>

      {/* ══════════ HERO ══════════ */}
      <header className="tt-hero">
        <div className="tt-hero-logo-wrap">
          <img src="assets/logo.png" alt="Traumtheater — Keltischer Steinkreis" />
        </div>
        <div className="tt-hero-text">
          <div className="tt-eyebrow">Persönliche Traumdeutung</div>
          <h1 className="tt-site-title">Traum<span className="tt-accent">theater</span></h1>
          <p className="tt-tagline">Endlich verstehen, was deine Träume dir sagen</p>
          <p className="tt-hero-body">
            Dein Traum ist keine Zufälligkeit. Er ist eine persönliche Botschaft —
            präzise, tiefgründig, vollständig auf dich abgestimmt. Melde dich —
            ich deute deinen Traum schriftlich, nach der Aisling-Methode, in drei Jahrzehnten gewachsen.
          </p>
          <div className="tt-dual-cta">
            <a href="https://wa.me/4915150317725" className="tt-btn-wa">💬 Via WhatsApp</a>
            <a href="mailto:mark@traum-theater.de" className="tt-btn-email">✉ Via E-Mail</a>
          </div>
          <EmailCopy address="mark@traum-theater.de" tone="light" />
          <p className="tt-cta-subline">Vertraulich · Persönlich · Schriftlich</p>
          <a className="tt-verified tt-verified--light" href="https://www.provenexpert.com/mark-anthony-irwin/" target="_blank" rel="noopener noreferrer">
            <img className="tt-verified-seal" src="assets/ProvenExpert-Bewertungssiegel.png" alt="ProvenExpert Kundenbewertungen — SEHR GUT, 100% Empfehlungen" />
            <span className="tt-verified-note">Unabhängig geprüft auf ProvenExpert — zum Profil ↗</span>
          </a>
        </div>
      </header>

      <div className="tt-rune-divider"><span className="tt-runes">᚛ ✦ ᚜</span></div>

      {/* ══════════ OPENING ══════════ */}
      <div className="tt-content-block tt-narrow">
        <p className="tt-opening-text">
          <span className="tt-drop-cap">J</span>ede Nacht verlässt deine Seele deinen
          Körper. Sie trifft sich mit deinen Führern auf der astralen Ebene und
          bespricht, wo du in deiner Entwicklung stehst — und was du als Nächstes
          brauchst. Dann kehrt sie zurück und hinterlässt dir eine Botschaft in der
          einzigen Sprache, die dein höheres Selbst spricht: die Sprache der Träume.
          Die Frage ist nicht, <em>ob</em> deine Träume dir etwas sagen wollen. Die
          Frage ist, ob du sie lesen kannst.
        </p>
      </div>

      {/* ══════════ ARCHETYPES ══════════ */}
      <section className="tt-panel-aged">
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <p className="tt-sec-label">Erkennst du dich?</p>
          <h2 className="tt-sec-heading">Drei Träumer — ein Bedürfnis</h2>
          <p className="tt-sec-sub">Die meisten meiner Klienten kommen mit einem dieser Gefühle</p>
          <div className="tt-grid-3">
            <div className="tt-card">
              <span className="tt-card-symbol">🌒</span>
              <h3>Der Wiederkehrende Traum</h3>
              <p>Derselbe Traum seit Jahren, manchmal Jahrzehnten. Du weißt, dass er etwas bedeutet. Du hast nur noch nie Antworten bekommen, die sich wirklich richtig anfühlten.</p>
            </div>
            <div className="tt-card">
              <span className="tt-card-symbol">🔮</span>
              <h3>Der Intensive Traum</h3>
              <p>Du bist aufgewacht mit dem Gefühl: das war kein gewöhnlicher Traum. Die Bilder lassen dich nicht los. Irgendetwas Wichtiges war darin — aber was?</p>
            </div>
            <div className="tt-card">
              <span className="tt-card-symbol">🌿</span>
              <h3>Die Suchende</h3>
              <p>Du glaubst, dass deine Träume mehr wissen als du. Du möchtest die Sprache lernen — nicht für einen einzigen Traum, sondern als Schlüssel zu deinem Leben.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PROMISE (DARK) ══════════ */}
      <section className="tt-panel-dark">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p className="tt-sec-label">Mein Versprechen</p>
          <h2 className="tt-sec-heading">Was eine Deutung leistet</h2>
          <p className="tt-sec-sub">Drei Dinge, die ich dir zusichern kann</p>
          <div className="tt-promise-grid">
            <div className="tt-promise-item">
              <span className="tt-promise-numeral">I</span>
              <h3>Die Botschaft ist echt</h3>
              <p>Keine allgemeinen Symboltabellen. Eine Deutung, die deine Geschichte kennt und dir persönlich antwortet.</p>
            </div>
            <div className="tt-promise-item">
              <span className="tt-promise-numeral">II</span>
              <h3>Das System ist bewährt</h3>
              <p>Drei Jahrzehnte gelebter Praxis innerhalb der Aisling-Schule. Hunderte zertifizierter Praktiker weltweit haben damit gearbeitet.</p>
            </div>
            <div className="tt-promise-item">
              <span className="tt-promise-numeral">III</span>
              <h3>Die Wahrheit gehört dir</h3>
              <p>Du erkennst deine Deutung — oder du erkennst sie nicht. Das ist das einzige Maß, das zählt. Nie Überredung, nur Erkenntnis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ BENEFITS ══════════ */}
      <section className="tt-panel-aged" id="methode">
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <p className="tt-sec-label">Was Träume aufdecken</p>
          <h2 className="tt-sec-heading">Sechs Bereiche, die dein Traum kommentiert</h2>
          <p className="tt-sec-sub">Deine Träume sind präziser als du denkst</p>
          <div className="tt-grid-2x3">
            {[
              ['♥','Gesundheit','Träume zeigen den Zustand deines Körpers oft Jahre vor dem Auftreten von Symptomen. Frühwarnsystem und Heilungshinweis in einem.'],
              ['◈','Richtung','Wo stehst du in deiner Entwicklung? Welcher nächste Schritt wäre jetzt richtig für dich? Dein Traum weiß es bereits.'],
              ['⟳','Muster','Wiederkehrende Träume zeigen wiederkehrende Blockaden. Was sich wiederholt, sucht Auflösung.'],
              ['✦','Beziehungen','Jede Person in deinem Traum ist ein Aspekt von dir. Was dir an ihnen auffällt, sagt mehr über dich als über sie.'],
              ['◉','Verborgene Gaben','Träume kennen deine Stärken besser als du. Sie zeigen Fähigkeiten und Potenziale, die du noch nicht nutzt.'],
              ['☽','Vorbereitung','Manchmal bereiten Träume dich auf kommende Ereignisse vor — als Einladung, dich rechtzeitig zu öffnen oder zu schützen.'],
            ].map(([icon, title, body]) => (
              <div key={title} className="tt-benefit">
                <span className="tt-benefit-icon">{icon}</span>
                <div><h4>{title}</h4><p>{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="tt-rune-divider"><span className="tt-runes">᚛ ◆ ᚜</span></div>

      {/* ══════════ SYMBOL DICTIONARY ══════════ */}
      <div className="tt-content-block" id="symbole">
        <p className="tt-sec-label">Aus dem Symbolbuch</p>
        <h2 className="tt-sec-heading" style={{ textAlign: 'center' }}>Was Symbole bedeuten</h2>
        <p className="tt-sec-sub">Acht Symbole — was das Aisling-System darin sieht</p>
        <div className="tt-dict-grid">
          {[
            ['Wasser','Dein geistiges Leben. Klares Wasser: Verbindung. Trübes Wasser: Unterbrechung. Die Tiefe zeigt die Tiefe deiner Seele.'],
            ['Feuer','Deine Emotionen und dein Herzkreislaufsystem. Unkontrolliertes Feuer: Erschöpfung. Ruhiges Feuer: Leidenschaft in Balance.'],
            ['Haus','Dein Körper. Jeder Raum entspricht einem Bereich: Keller = Unterbewusstes, Dach = Geist, Küche = Verdauung.'],
            ['Fliegen','Geistige Erhebung über Probleme. Du steigst über eine Situation hinaus — oder möchtest es tun. Ein sehr gutes Zeichen.'],
            ['Lehrer','Du bist spirituelle Lehrerin. Ein Lehrer im Traum zeigt deine Berufung, andere auf ihrem Weg zu führen.'],
            ['Schlange','Heilung oder Verführung — der Kontext entscheidet. Im Garten: alte Muster. Als Helfer: Heilkraft.'],
            ['Brücke','Übergang zwischen zwei Phasen. Du stehst vor oder mitten in einer wichtigen Veränderung deines Lebens.'],
            ['Garten','Öffentlicher Ausdruck deiner Gaben. Was blüht: Talente zum Teilen. Was verborgen liegt: wartet auf Pflege.'],
          ].map(([w, m]) => (
            <div key={w} className="tt-dict-card">
              <div className="tt-dict-word">{w}</div>
              <div className="tt-dict-meaning">{m}</div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink-mid)' }}>
          Das Aisling-Symbolbuch enthält über 3.000 Einträge — entwickelt aus drei Jahrzehnten gelebter Praxis.
        </p>
      </div>

      {/* ══════════ PROCESS — Step 1 expanded ══════════ */}
      <section className="tt-panel-aged">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p className="tt-sec-label">So läuft es ab</p>
          <h2 className="tt-sec-heading">Vier Schritte</h2>
          <p className="tt-sec-sub">Klar, persönlich, diskret</p>
          <div className="tt-process-row">
            <div className="tt-process-step">
              <div className="tt-step-ring">i</div>
              <h4>Kontakt aufnehmen</h4>
              <p>Melde dich per WhatsApp oder E-Mail. Erzähl mir kurz, worum es geht — noch nicht den ganzen Traum.</p>
              <p className="tt-step-detail">Ganz unverbindlich, ganz wie du magst.</p>
            </div>
            <div className="tt-process-step">
              <div className="tt-step-ring">ii</div>
              <h4>Ablauf &amp; Zahlung</h4>
              <p>Ich erkläre dir den Ablauf. Du bestätigst kurz die Einwilligung und zahlst den Einführungspreis sicher über einen Zahlungslink.</p>
            </div>
            <div className="tt-process-step">
              <div className="tt-step-ring">iii</div>
              <h4>Traum senden</h4>
              <p>Jetzt schickst du mir deinen Traum — mit Titel und so viel Kontext wie möglich zu deiner aktuellen Lebenssituation.</p>
            </div>
            <div className="tt-process-step">
              <div className="tt-step-ring">iv</div>
              <h4>Deutung erhalten</h4>
              <p>Du erhältst deine Deutung schriftlich. Durchdacht, klar, mit konkretem Bezug zu deinem Leben — du liest und erkennst selbst, ob es stimmt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ WHAT YOU RECEIVE ══════════ */}
      <section>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 1.5rem' }}>
          <p className="tt-sec-label">Das Dokument</p>
          <h2 className="tt-sec-heading">Was du erhältst</h2>
          <p className="tt-sec-sub">Drei bis fünf Seiten, sorgfältig strukturiert</p>
          <p className="tt-receive-body">
            Deine Deutung ist ein schriftliches Dokument, das ich für
            deinen Traum verfasse — drei bis fünf Seiten, in deutscher
            Sprache, nach der Aisling-Methode aufgebaut. Kein Chat-Output,
            keine generische Symboltabelle. Ein Dokument, das du behältst
            und auf das du immer wieder zurückkommen kannst.
          </p>
          <p className="tt-receive-body tt-receive-body-lead">
            <strong>Im Dokument findest du:</strong>
          </p>
          <ol className="tt-receive-list">
            <li><strong>Dein Traum mit Kontext.</strong> Der Wortlaut deines Traums und die Lebenssituation, aus der er entstanden ist.</li>
            <li><strong>Eine kurze Einführung in die Methode.</strong> Das Subject Matter deines Traums und die I AM / I NEED Formel, damit du verstehst, wie ich lese.</li>
            <li><strong>Eine Deutung Zeile für Zeile.</strong> Was dein Traum dir konkret sagt — persönlich, erkundend, ohne Fachjargon.</li>
            <li><strong>Symbole, Farben, Orte und Zahlen.</strong> Was die Aisling-Tradition in den Bildern deines Traums sieht.</li>
            <li><strong>Eine abschließende Reflexion.</strong> Der Kern deines Traums in einem Bild. Bei dunklen Träumen behutsam eingeordnet — mit Fokus auf die Botschaft, nicht die Angst.</li>
            <li><strong>Konkrete Handlungsvorschläge.</strong> Was dein Traum dich einlädt zu tun, und nächste Schritte.</li>
            <li><strong>Verbindung zu früheren Träumen.</strong> Wenn du schon einmal eingesandt hast, beziehe ich mich auf das, was deine Traumlinie zeigt.</li>
          </ol>
        </div>
      </section>

      {/* ══════════ TRUST STRIP (no "Keine KI") ══════════ */}
      <div className="tt-trust">
        <div className="tt-trust-inner">
          <span>✦ Zertifizierter Aisling-Praktiker</span>
          <span>✦ Ausgebildet bei Michael Sheridan</span>
          <span>✦ Persönlich geschrieben</span>
          <span>✦ Vertraulich</span>
        </div>
      </div>

      {/* ══════════ OFFER — €69 → €29 Einführungsangebot ══════════ */}
      <div className="tt-content-block" id="angebot">
        <div className="tt-rune-divider" style={{ maxWidth: '100%', margin: '0 0 2.5rem', padding: 0 }}>
          <span className="tt-runes">᚛ ✦ ᚜</span>
        </div>
        <div className="tt-offer-wrap">
          <div className="tt-offer-box">
            <p className="tt-offer-title">Persönliche Traumdeutung</p>
            <p className="tt-offer-limited">✦ Einführungsangebot ✦</p>
            <div className="tt-price-row">
              <span className="tt-price-was">€69</span>
              <span className="tt-price-now">€29</span>
            </div>
            <p className="tt-price-note">Normalpreis €69 · Einführungspreis für kurze Zeit</p>
            <p className="tt-offer-desc">
              Ein Traum. Vollständig gedeutet. Schriftlich zugestellt.<br/>
              Persönlich verfasst — nach der Aisling-Methode.
            </p>
            <ul className="tt-offer-features">
              <li>Vollständige Analyse aller Symbole und ihrer Verbindungen</li>
              <li>Klare Aussage über das Kernthema deines Traumes</li>
              <li>Hinweise auf Handlungsschritte oder Aufmerksamkeitsbereiche</li>
              <li>Schriftliche Lieferung — zum Aufbewahren und Nachdenken</li>
              <li>Vertraulich behandelt — dein Traum bleibt dein Traum</li>
            </ul>
            <div className="tt-pwyc">
              <h4 className="tt-pwyc-title">Wenn der Preis gerade nicht passt</h4>
              <p>Diese Arbeit soll an niemandem am Geld scheitern. Wenn dir eine
                 Deutung wichtig ist, der Preis aber im Moment nicht möglich ist,
                 schreib mir einfach. Wir finden eine Lösung, die für dich stimmt —
                 ohne Erklärung, ohne Umstände.</p>
            </div>
            <div className="tt-dual-cta" style={{ justifyContent: 'center' }}>
              <a href="https://wa.me/4915150317725" className="tt-btn-wa">💬 Via WhatsApp</a>
              <a href="mailto:mark@traum-theater.de" className="tt-btn-email">✉ Via E-Mail</a>
            </div>
            <EmailCopy address="mark@traum-theater.de" tone="light" />
            <p className="tt-cta-subline" style={{ textAlign: 'center', marginTop: '1rem' }}>
              Sichere Zahlung · Vertraulich · In wenigen Schritten
            </p>
            <p className="tt-price-vat">Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.</p>
          </div>
        </div>
      </div>

      {/* ══════════ TESTIMONIALS (NEW) ══════════ */}
      <section className="tt-testimonials" id="stimmen">
        <p className="tt-sec-label">Was Klienten schreiben</p>
        <h2 className="tt-sec-heading">Stimmen</h2>
        <p className="tt-sec-sub">Echte Worte. Echte Träume. Echte Deutungen.</p>
        <a className="tt-verified tt-verified--dark" href="https://www.provenexpert.com/mark-anthony-irwin/" target="_blank" rel="noopener noreferrer">
          <img className="tt-verified-seal" src="assets/ProvenExpert-Bewertungssiegel.png" alt="ProvenExpert Kundenbewertungen — SEHR GUT, 100% Empfehlungen" />
          <span className="tt-verified-note">Unabhängig geprüft auf ProvenExpert — zum Profil ↗</span>
        </a>
        <div className="tt-testi-grid">
          <div className="tt-testi">
            <p className="tt-testi-body">
              „Hallo Mark. Ich habe deine E-Mail drei Mal gelesen und ins Polnische
              übersetzt — wow! Meine Güte. Vielen, vielen Dank!!!!!!! Es ist eine
              unglaubliche Deutung.“
            </p>
            <div className="tt-testi-attr">
              <span className="tt-testi-mark"></span>
              <span className="tt-testi-name">Monika Dziatkiewicz</span>
            </div>
          </div>
          <div className="tt-testi">
            <p className="tt-testi-body">
              „Mark hat die Träume entschlüsselt, die in einer sehr stressigen Zeit
              zu mir kamen. Seine einfühlsamen und gekonnten Interpretationen gaben
              mir die Klarheit, Orientierung, das Verständnis und die Erleichterung,
              auf die mich meine Träume hinweisen wollten. Ich würde jedem, der die
              Botschaften in seinen eigenen Träumen verstehen möchte, Marks sehr
              hilfreiche Dienste wärmstens empfehlen.“
            </p>
            <div className="tt-testi-attr">
              <span className="tt-testi-mark"></span>
              <span className="tt-testi-name">Ciara Clarke</span>
            </div>
          </div>
          <div className="tt-testi">
            <p className="tt-testi-body">
              „Marks Deutungen für mich und meinen 10-jährigen Sohn waren einfühlsam,
              präzise und stimmten vollkommen mit realen Lebenserfahrungen überein.
              Ich bin dankbar für sein Wissen, seine ausführlichen Antworten und die
              Sorgfalt, mit der er mit Menschen über ihre Träume spricht. Diese
              Einsicht und Unterstützung zu haben, ist außerordentlich hilfreich.“
            </p>
            <div className="tt-testi-attr">
              <span className="tt-testi-mark"></span>
              <span className="tt-testi-name">Nicky E.</span>
            </div>
          </div>
          <div className="tt-testi">
            <p className="tt-testi-body">
              „Mark hat mir bereits mehrere meiner Träume interpretiert. Meist fand
              ich sie beim Aufwachen selbst nur verwirrend, zum Teil beängstigend.
              Durch Marks Übersetzungen wurden dann aber die Botschaften klar. Sie
              waren wunderschön. Deutlich. Liebevoll.
              <br/><br/>
              Jetzt bin ich neugieriger auf meine Träume. Möchte ihre Sprache
              verstehen und verinnerlichen, was sie mir sagen wollen.“
            </p>
            <div className="tt-testi-attr">
              <span className="tt-testi-mark"></span>
              <span className="tt-testi-name">Lisa M.</span>
            </div>
          </div>
          <div className="tt-testi tt-testi--featured">
            <p className="tt-testi-body">
              „Die Traumdeutung von Mark hat mich unerwartet sehr berührt. Ich
              hatte nicht erwartet, dass in den für uns oft so unsinnigen Träumen
              doch soviel Weisheit und Wahrheit steckt und sie mir soviel geben
              können. Vielen Dank, lieber Mark, für deine wertvolle Arbeit.“
            </p>
            <div className="tt-testi-attr">
              <span className="tt-testi-mark"></span>
              <span className="tt-testi-name">Sonja</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ KONTAKT ══════════ */}
      <section className="tt-panel-dark" id="kontakt">
        <div className="tt-retention-wrap">
          <p className="tt-sec-label">So beginnst du</p>
          <h2 className="tt-sec-heading">Wie es weitergeht</h2>
          <p className="tt-sec-sub">Einfach. Persönlich. Kontakt ohne Verpflichtung.</p>
          <div className="tt-retention-steps">
            <div className="tt-ret-step">
              <span className="tt-ret-glyph">✦</span>
              <h4>Du nimmst Kontakt auf</h4>
              <p>Per WhatsApp oder E-Mail — wie es dir lieber ist. Erzähl mir kurz, worum es geht, noch nicht den ganzen Traum.</p>
            </div>
            <div className="tt-ret-step">
              <span className="tt-ret-glyph">᚜</span>
              <h4>Wir klären Ablauf &amp; Zahlung</h4>
              <p>Kurze Einwilligung, Einführungspreis von 29 € sicher über einen Zahlungslink. Danach sendest du mir deinen Traum.</p>
            </div>
            <div className="tt-ret-step">
              <span className="tt-ret-glyph">◈</span>
              <h4>Du erhältst deine Deutung</h4>
              <p>Schriftlich, persönlich, mit konkretem Bezug zu deinem Leben. Danach frage ich einmal nach, ob sie dich berührt hat.</p>
            </div>
          </div>
          <div className="tt-dual-cta" style={{ justifyContent: 'center', marginTop: '2.5rem' }}>
            <a href="https://wa.me/4915150317725" className="tt-btn-wa">💬 Via WhatsApp</a>
            <a href="mailto:mark@traum-theater.de" className="tt-btn-email">✉ Via E-Mail</a>
          </div>
          <EmailCopy address="mark@traum-theater.de" tone="dark" />
          <p className="tt-privacy-note">
            Deine Angaben werden <span>ausschließlich für deine Deutung</span> verwendet · Keine Weitergabe · Kein Newsletter ohne dein Einverständnis
          </p>
        </div>
      </section>

      {/* ══════════ TIMELINE ══════════ */}
      <section className="tt-panel-aged">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p className="tt-sec-label">Das Fundament</p>
          <h2 className="tt-sec-heading">Drei Jahrzehnte Methodik</h2>
          <p className="tt-sec-sub">Das Aisling-System im zeitlichen Kontext</p>
          <div className="tt-timeline">
            {[
              ['1990er','George Rhatigan entwickelt das Grundgerüst des Aisling-Systems in Irland. Die erste systematische Sammlung von Traumsymbolen entsteht aus gelebter Beratungspraxis.'],
              ['1997','Michael Sheridan veröffentlicht How to Interpret Your Dreams and Discover Your Life Purpose — das erste dokumentierte Werk des Systems.'],
              ['2000er','Sheridan wird regelmäßiger Gast bei Ireland AM, BBC, und Seattle Radio KKNW. Das System verbreitet sich international in mehrere Sprachen.'],
              ['2015','Michael kündigt seine Stelle als Softwareentwickler und widmet sich fortan ganz der Aisling School of Dream Interpretation, die er ins Internet bringt. Die Radiosendung startet, und Sandy hilft im Hintergrund beim Wachstum der Schule.'],
              ['2016','Der Dream Interpretation Podcast mit Michael Sheridan ist eine wöchentliche halbstündige Sendung darüber, wie deine nächtlichen Träume dich für die wichtigen Themen in deinem Leben wachrütteln. Träume geben fundierte Hinweise zu allen Lebensbereichen — Beziehungen, Beruf, Lebensaufgabe, Gesundheit, besondere Fähigkeiten und mehr. Michael sagt dir genau, was deine Träume bedeuten. Bis heute wurden 365 Folgen aufgenommen.'],
              ['Heute','Hunderte zertifizierter Praktiker weltweit. Ein Symbolbuch mit über 3.000 verifizierten Einträgen. Klienten, die sich selbst erkennen. Die Aisling School bietet auch weiterhin die genaueste, fundierteste und lebensverändernde Traumdeutungsausbildung der Welt.'],
            ].map(([y, t]) => (
              <div key={y} className="tt-tl-entry">
                <span className="tt-tl-year">{y}</span>
                <span className="tt-tl-text">{t}</span>
              </div>
            ))}
          </div>

          <div className="tt-tl-media-row">
            <a className="tt-tl-media" href="https://healingthroughdreams.com/about-aisling-dream-interpretation/" target="_blank" rel="noopener noreferrer">
              <div className="tt-tl-media-frame">
                <img src="assets/Aisling-Dream-Interpretation-Logo-White-r35kx2zul84synncf5sakhwinm2y7ifo8j6lahyx6s.png" alt="Aisling Dream Interpretation" />
              </div>
              <span className="tt-tl-media-caption">Aisling Dream Interpretation</span>
            </a>
            <a className="tt-tl-media" href="https://podcasts.apple.com/gb/podcast/the-dream-interpretation-podcast/id1145722433" target="_blank" rel="noopener noreferrer">
              <div className="tt-tl-media-frame">
                <img src="assets/DI%20Podcast%20image.png" alt="The Dream Interpretation Podcast" />
              </div>
              <span className="tt-tl-media-caption">Dream Interpretation Podcast</span>
            </a>
            <a className="tt-tl-media" href="https://www.amazon.de/-/en/How-Interpret-Your-Dreams-discover/dp/0955729505/" target="_blank" rel="noopener noreferrer">
              <div className="tt-tl-media-frame">
                <img src="assets/HTID%20Book%20cover.png" alt="How to Interpret Your Dreams and Discover Your Life Purpose" />
              </div>
              <span className="tt-tl-media-caption">How to Interpret Your Dreams</span>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ ABOUT (with portrait) ══════════ */}
      <section className="tt-panel-dark" id="about">
        <div className="tt-about-inner">
          <img className="tt-about-portrait" src="assets/mark-portrait.png" alt="Mark Irwin" />
          <p className="tt-sec-label">Persönlich</p>
          <h2 className="tt-sec-heading">Über mich und die Deutungen</h2>
          <p className="tt-about-body">
            Mein Name ist Mark Irwin. Ich bin 46 Jahre alt, gebürtig aus
            Cork in Irland, und lebe seit 2015 in Kempen. Mit der Traumarbeit
            begann ich 2014, als mir Michael Sheridans Buch in die Hände fiel
            und ich anfing, meinen eigenen Träumen nachzugehen. Was zunächst
            persönliche Neugier war, wurde über die Jahre zu einer tieferen
            Praxis — und 2023 begann ich, die Aisling-Methode und das
            Channeln formal bei Michael selbst zu lernen.
          </p>
          <p className="tt-about-body">
            <strong className="tt-about-lead">Ein System, keine Esoterik.</strong>
            {' '}Ich arbeite nach dem Aisling-System — einem der wenigen
            Traumdeutungsrahmen, der in geübter Praxis über Jahrzehnte
            hinweg angewandt und verfeinert wurde. Keine generischen
            Symbollisten. Keine spirituellen Projektionen. Sondern eine
            Methode, die ernst nimmt, was deine Seele sagt.
          </p>
          <p className="tt-about-body">
            Deshalb mache ich diese Arbeit: Weil Träume, wenn man ihnen
            wirklich zuhört, uns die Wahrheit über uns selbst erzählen — und
            diese Wahrheit ist fast immer großzügiger, als wir erwarten.
          </p>

          <p className="tt-sec-label" style={{ marginTop: '2.5rem' }}>Zertifikate</p>
          <div className="tt-cert-row">
            <a className="tt-cert" href="assets/Scan%20Channeling%20cert.jpg" target="_blank" rel="noopener noreferrer">
              <span className="tt-cert-caption">Aisling School Channel · 2024</span>
              <img src="assets/Scan%20Channeling%20cert.jpg" alt="Aisling School Channel — Zertifikat, Dezember 2024" />
            </a>
            <a className="tt-cert" href="assets/Scan%20Dream%20Interpretation%20cert.jpg" target="_blank" rel="noopener noreferrer">
              <span className="tt-cert-caption">Aisling Dream Interpreter · 2026</span>
              <img src="assets/Scan%20Dream%20Interpretation%20cert.jpg" alt="Aisling Dream Interpreter — Zertifikat, April 2026" />
            </a>
          </div>

          <div className="tt-badge-row">
            <span className="tt-badge">Aisling-System</span>
            <span className="tt-badge">Studium bei Michael Sheridan</span>
            <span className="tt-badge">Schriftliche Deutung</span>
            <span className="tt-badge">3.000+ Symbole</span>
            <span className="tt-badge">Vertraulich</span>
            <span className="tt-badge">Deutsch · Niederländisch · Englisch</span>
          </div>
          <div className="tt-dual-cta" style={{ justifyContent: 'center' }}>
            <a href="https://wa.me/4915150317725" className="tt-btn-wa">💬 Via WhatsApp</a>
            <a href="mailto:mark@traum-theater.de" className="tt-btn-email">✉ Via E-Mail</a>
          </div>
          <EmailCopy address="mark@traum-theater.de" tone="dark" />
        </div>
      </section>

      {/* ══════════ IMPRESSUM ══════════ */}
      <section className="tt-legal" id="impressum">
        <div className="tt-legal-inner">
          <h2 className="tt-legal-heading">Impressum</h2>
          <p className="tt-legal-block">
            Mark Anthony Irwin<br/>
            Parkstraße 15<br/>
            47906 Kempen
          </p>
          <h3 className="tt-legal-subhead">Kontakt</h3>
          <p className="tt-legal-block">
            Telefon: +49 151 50317725<br/>
            E-Mail: mark@traum-theater.de
          </p>
          <h3 className="tt-legal-subhead">Redaktionell verantwortlich</h3>
          <p className="tt-legal-block">
            Mark Anthony Irwin<br/>
            Anschrift wie oben<br/>
            (gem. § 18 Abs. 2 MStV)
          </p>
        </div>
      </section>

      {/* ══════════ DATENSCHUTZ ══════════ */}
      <section className="tt-legal" id="datenschutz">
        <div
          className="tt-legal-inner tt-legal-doc"
          dangerouslySetInnerHTML={{ __html: (window.TT_LEGAL && window.TT_LEGAL.datenschutz) || '' }}
        />
      </section>

      {/* ══════════ AGB ══════════ */}
      <section className="tt-legal" id="agb">
        <div
          className="tt-legal-inner tt-legal-doc"
          dangerouslySetInnerHTML={{ __html: (window.TT_LEGAL && window.TT_LEGAL.agb) || '' }}
        />
      </section>

      {/* ══════════ WIDERRUFSBELEHRUNG ══════════ */}
      <section className="tt-legal" id="widerruf">
        <div
          className="tt-legal-inner tt-legal-doc"
          dangerouslySetInnerHTML={{ __html: (window.TT_LEGAL && window.TT_LEGAL.widerruf) || '' }}
        />
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="tt-footer">
        <nav className="tt-footer-links">
          <a href="#impressum">Impressum</a>
          <a href="#datenschutz">Datenschutz</a>
          <a href="#agb">AGB</a>
          <a href="#widerruf">Widerruf</a>
        </nav>
        <p>© Traumtheater &nbsp;·&nbsp; Persönliche Traumdeutung nach dem Aisling-System &nbsp;·&nbsp; Alle Inhalte vertraulich</p>
      </footer>
    </div>
  );
}

Object.assign(window, { TraumtheaterPage });
