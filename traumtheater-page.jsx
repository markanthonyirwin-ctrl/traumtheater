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
//   • Offer price: €69 struck through, "Kostenlos" now, limited-time
//   • Process step 1 expanded with title/text/context instruction
//   • Testimonials section added (Monika, Ciara)

const { useMemo } = React;

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
          <a href="#einsenden" className="tt-nav-cta">Traum einsenden ✦</a>
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
            präzise, tiefgründig, vollständig auf dich abgestimmt. Schick mir deinen
            Traum — ich deute ihn schriftlich, nach 40 Jahren erprobter Methodik.
          </p>
          <div className="tt-dual-cta">
            <a href="https://wa.me/4915788426547" className="tt-btn-wa">💬 Via WhatsApp</a>
            <a href="mailto:TraumtheaterDE@pm.me" className="tt-btn-email">✉ Via E-Mail</a>
          </div>
          <p className="tt-cta-subline">Kostenlos · Vertraulich · Persönlich</p>
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
              <p>Über 40 Jahre klinische Anwendung. Nicht Theorie — erprobte Praxis aus tausenden Deutungen in mehreren Ländern.</p>
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
              <h4>Traum einsenden</h4>
              <p>Gib deinem Traum einen Titel. Schreib den Traumtext auf. Füge so viel Kontext hinzu wie möglich — zu deinem Traum und deiner aktuellen Lebenssituation.</p>
              <p className="tt-step-detail">Per WhatsApp oder E-Mail — ganz wie du magst.</p>
            </div>
            <div className="tt-process-step">
              <div className="tt-step-ring">ii</div>
              <h4>Kontext klären</h4>
              <p>Manchmal stelle ich eine kurze Rückfrage. Nur wenn nötig — und nur das Wesentliche.</p>
            </div>
            <div className="tt-process-step">
              <div className="tt-step-ring">iii</div>
              <h4>Deutung erhalten</h4>
              <p>Du erhältst deine Deutung schriftlich. Durchdacht, klar, mit konkretem Bezug zu deinem Leben.</p>
            </div>
            <div className="tt-process-step">
              <div className="tt-step-ring">iv</div>
              <h4>Selbst erkennen</h4>
              <p>Du liest. Du erkennst. Du weißt selbst, ob es stimmt — das ist die einzige Bestätigung, die zählt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TRUST STRIP (no "Keine KI") ══════════ */}
      <div className="tt-trust">
        <div className="tt-trust-inner">
          <span>✦ Zertifizierter Aisling-Praktiker</span>
          <span>✦ 15 Jahre Erfahrung</span>
          <span>✦ Persönlich geschrieben</span>
          <span>✦ Vertraulich</span>
        </div>
      </div>

      {/* ══════════ OFFER — €69 → kostenlos ══════════ */}
      <div className="tt-content-block" id="angebot">
        <div className="tt-rune-divider" style={{ maxWidth: '100%', margin: '0 0 2.5rem', padding: 0 }}>
          <span className="tt-runes">᚛ ✦ ᚜</span>
        </div>
        <div className="tt-offer-wrap">
          <div className="tt-offer-box">
            <p className="tt-offer-title">Persönliche Traumdeutung</p>
            <p className="tt-offer-limited">✦ Für kurze Zeit kostenlos ✦</p>
            <div className="tt-price-row">
              <span className="tt-price-was">€69</span>
              <span className="tt-price-now">Kostenlos</span>
            </div>
            <p className="tt-price-note">Normalpreis €69 · Jetzt zeitlich begrenzt geschenkt</p>
            <p className="tt-offer-desc">
              Ein Traum. Vollständig gedeutet. Schriftlich zugestellt.<br/>
              Persönlich — nicht automatisiert, nicht generisch.
            </p>
            <ul className="tt-offer-features">
              <li>Vollständige Analyse aller Symbole und ihrer Verbindungen</li>
              <li>Klare Aussage über das Kernthema deines Traumes</li>
              <li>Hinweise auf Handlungsschritte oder Aufmerksamkeitsbereiche</li>
              <li>Schriftliche Lieferung — zum Aufbewahren und Nachdenken</li>
              <li>Vertraulich behandelt — dein Traum bleibt dein Traum</li>
            </ul>
            <div className="tt-dual-cta" style={{ justifyContent: 'center' }}>
              <a href="https://wa.me/4915788426547" className="tt-btn-wa">💬 Via WhatsApp</a>
              <a href="mailto:TraumtheaterDE@pm.me" className="tt-btn-email">✉ Via E-Mail</a>
            </div>
            <p className="tt-cta-subline" style={{ textAlign: 'center', marginTop: '1rem' }}>
              Keine Anmeldung · Kein Konto · Nur dein Traum
            </p>
          </div>
        </div>
      </div>

      {/* ══════════ TESTIMONIALS (NEW) ══════════ */}
      <section className="tt-testimonials" id="stimmen">
        <p className="tt-sec-label">Was Klienten schreiben</p>
        <h2 className="tt-sec-heading">Stimmen</h2>
        <p className="tt-sec-sub">Echte Worte. Echte Träume. Echte Deutungen.</p>
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
        </div>
      </section>

      {/* ══════════ RETENTION / EINSENDEN ══════════ */}
      <section className="tt-panel-dark" id="einsenden">
        <div className="tt-retention-wrap">
          <p className="tt-sec-label">Was danach passiert</p>
          <h2 className="tt-sec-heading">Wie es weitergeht</h2>
          <p className="tt-sec-sub">Einfach. Persönlich. Ohne Verpflichtung.</p>
          <div className="tt-retention-steps">
            <div className="tt-ret-step">
              <span className="tt-ret-glyph">✦</span>
              <h4>Du sendest deinen Traum</h4>
              <p>Per WhatsApp oder E-Mail — wie es dir lieber ist. Mit Titel, Traumtext und so viel Kontext wie du teilen magst.</p>
            </div>
            <div className="tt-ret-step">
              <span className="tt-ret-glyph">᚜</span>
              <h4>Du erhältst deine Deutung</h4>
              <p>Ich antworte schriftlich, persönlich, auf demselben Kanal. Durchdacht, klar, mit konkretem Bezug zu deinem Leben.</p>
            </div>
            <div className="tt-ret-step">
              <span className="tt-ret-glyph">◈</span>
              <h4>Ich melde mich kurz nach</h4>
              <p>Hat die Deutung dich berührt? Ich frage einmal nach — und du bist herzlich eingeladen, jederzeit einen weiteren Traum einzusenden.</p>
            </div>
          </div>
          <div className="tt-dual-cta" style={{ justifyContent: 'center', marginTop: '2.5rem' }}>
            <a href="https://wa.me/4915788426547" className="tt-btn-wa">💬 Traum per WhatsApp senden</a>
            <a href="mailto:TraumtheaterDE@pm.me" className="tt-btn-email">✉ Traum per E-Mail senden</a>
          </div>
          <p className="tt-privacy-note">
            Deine Angaben werden <span>ausschließlich für deine Deutung</span> verwendet · Keine Weitergabe · Kein Newsletter ohne dein Einverständnis
          </p>
        </div>
      </section>

      {/* ══════════ TIMELINE ══════════ */}
      <section className="tt-panel-aged">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p className="tt-sec-label">Das Fundament</p>
          <h2 className="tt-sec-heading">Vier Jahrzehnte Methodik</h2>
          <p className="tt-sec-sub">Das Aisling-System im zeitlichen Kontext</p>
          <div className="tt-timeline">
            {[
              ['1990er','George Rhatigan entwickelt das Grundgerüst des Aisling-Systems in Irland. Die erste systematische Sammlung von Traumsymbolen entsteht aus gelebter Beratungspraxis.'],
              ['1997','Michael Sheridan veröffentlicht How to Interpret Your Dreams and Discover Your Life Purpose — das erste dokumentierte Werk des Systems.'],
              ['2000er','Sheridan wird regelmäßiger Gast bei Ireland AM, BBC, und Seattle Radio KKNW. Das System verbreitet sich international in mehrere Sprachen.'],
              ['Heute','Hunderte zertifizierter Praktiker weltweit. Ein Symbolbuch mit über 3.000 verifizierten Einträgen. Klienten, die sich selbst erkennen.'],
            ].map(([y, t]) => (
              <div key={y} className="tt-tl-entry">
                <span className="tt-tl-year">{y}</span>
                <span className="tt-tl-text">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ABOUT (with portrait) ══════════ */}
      <section className="tt-panel-dark" id="about">
        <div className="tt-about-inner">
          <img className="tt-about-portrait" src="assets/mark-portrait.png" alt="Mark Irwin" />
          <p className="tt-sec-label">Über mich</p>
          <h2 className="tt-sec-heading">Mark Irwin</h2>
          <p className="tt-about-body">
            Geboren in Cork, Irland. 46 Jahre. Seit 2015 lebe ich in Kempen
            am Niederrhein. 2011 fiel mir Michael Sheridans Buch in die
            Hände — seitdem deute ich meine eigenen Träume. 2023 habe ich
            begonnen, die Aisling-Methode der Traumdeutung und des
            Channelings formell bei Michael Sheridan zu studieren.
          </p>

          <p className="tt-sec-label" style={{ marginTop: '2.5rem' }}>Zertifikate</p>
          <div className="tt-cert-row">
            <a className="tt-cert" href="assets/Scan%20Channeling%20cert.jpg" target="_blank" rel="noopener noreferrer">
              <img src="assets/Scan%20Channeling%20cert.jpg" alt="Aisling School Channel — Zertifikat, Dezember 2024" />
              <span className="tt-cert-caption">Aisling School Channel · 2024</span>
            </a>
            <a className="tt-cert" href="assets/Scan%20Dream%20Interpretation%20cert.jpg" target="_blank" rel="noopener noreferrer">
              <img src="assets/Scan%20Dream%20Interpretation%20cert.jpg" alt="Aisling Dream Interpreter — Zertifikat, April 2026" />
              <span className="tt-cert-caption">Aisling Dream Interpreter · 2026</span>
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
            <a href="https://wa.me/4915788426547" className="tt-btn-wa">💬 Via WhatsApp</a>
            <a href="mailto:TraumtheaterDE@pm.me" className="tt-btn-email">✉ Via E-Mail</a>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="tt-footer">
        <p>© Traumtheater &nbsp;·&nbsp; Persönliche Traumdeutung nach dem Aisling-System &nbsp;·&nbsp; Alle Inhalte vertraulich</p>
      </footer>
    </div>
  );
}

Object.assign(window, { TraumtheaterPage });
