// Two-language UI strings. German is the primary language and the default;
// English exists for the expat market in DE/AT/CH.
//
// Everything that is *chrome* lives here: nav, footer, layout headings, button
// labels, aria-labels. Page *content* lives in the pages themselves, because it
// is prose rather than strings and translating it in a lookup table would be
// unreadable.
//
// Voice rules for the English side come from the tone-of-voice kit: Mark is
// Irish, so British spelling, never American. First person singular, never
// "we". No em dashes. No exclamation marks. "the Aisling Method" in English,
// "die Aisling-Methode" in German.

export const languages = { de: 'Deutsch', en: 'English' } as const;
export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'de';
export const site = 'https://traum-theater.de';

/** og:locale. en_GB rather than en_US: Mark is from Cork. */
export const ogLocale: Record<Lang, string> = { de: 'de_DE', en: 'en_GB' };

/** Passed to toLocaleDateString for blog post dates. */
export const dateLocale: Record<Lang, string> = { de: 'de-DE', en: 'en-GB' };

/** Where "home" is in each language. Used by the language switcher fallback. */
export const homePath: Record<Lang, string> = { de: '/', en: '/en/' };

/**
 * The German and English versions of one page. Passed to Base, which emits
 * reciprocal hreflang from it and points the language switcher at the
 * counterpart. Omit on pages that exist in one language only (the four legal
 * pages), and no hreflang is emitted for them.
 */
export interface Alternates {
  de: string;
  en: string;
}

/**
 * Every page that exists in both languages, in one table.
 *
 * Both sides import from here rather than each hard-coding the other's URL,
 * because hreflang only works if it is reciprocal: if /en/blog points at /blog
 * but /blog does not point back, Google discards the pair entirely. Keeping
 * one entry per page makes that impossible to get half-right.
 *
 * The four legal pages are deliberately absent. They exist in German only, so
 * they claim no alternates.
 *
 * Blog posts are not here either: their pairing is per-post and comes from the
 * `altSlug` field in the markdown front matter.
 */
export const pairs = {
  home: { de: '/', en: '/en/' },
  personal: {
    de: '/persoenliche-traumdeutung/',
    en: '/en/personal-dream-interpretation/',
  },
  written: {
    de: '/schriftliche-traumdeutung/',
    en: '/en/written-dream-interpretation/',
  },
  spiritual: {
    de: '/spirituelle-traumdeutung/',
    en: '/en/spiritual-dream-interpretation/',
  },
  example: { de: '/beispiel-deutung/', en: '/en/example-interpretation/' },
  blog: { de: '/blog/', en: '/en/blog/' },
} satisfies Record<string, Alternates>;

interface Strings {
  nav: { href: string; label: string }[];
  navCta: string;
  navCtaHref: string;
  navBrandHref: string;
  menuOpen: string;
  menuClose: string;
  /** Label on the language switcher: the language it switches *to*. */
  switchTo: string;
  switchToAria: string;
  footerService: { href: string; label: string }[];
  footerLegal: { href: string; label: string }[];
  footerLegalNote: string;
  footerTagline: string;
  // Service page chrome
  offerLabel: string;
  faqHeading: string;
  ctaHeading: string;
  ctaBody: string;
  ctaSubline: string;
  relatedLabel: string;
  relatedAria: string;
  exampleLink: string;
  exampleBlurb: string;
  backHome: string;
  services: { href: string; label: string; blurb: string }[];
  /** schema.org serviceType for the service pages. */
  serviceType: string;
  /** schema.org Offer description. The §19 UStG reference stays in both
   *  languages: it is German tax law and applies whoever is reading. */
  offerDescription: string;
  // Components
  waButton: string;
  emailButton: string;
  testiAria: string;
  testiDotsAria: string;
  /** Takes the client's name. */
  testiDotAria: (name: string) => string;
  // Blog
  blogEmpty: string;
  blogBack: string;
  postCtaHeading: string;
  postCtaBody: string;
}

export const ui: Record<Lang, Strings> = {
  de: {
    nav: [
      { href: '/#methode', label: 'Die Methode' },
      { href: '/#symbole', label: 'Symbole' },
      { href: '/beispiel-deutung/', label: 'Beispiel' },
      { href: '/#angebot', label: 'Angebot' },
      { href: '/#stimmen', label: 'Stimmen' },
      { href: '/blog/', label: 'Blog' },
      { href: '/#about', label: 'Über mich' },
    ],
    navCta: 'Kontakt ✦',
    navCtaHref: '/#kontakt',
    navBrandHref: '/',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    switchTo: 'English',
    switchToAria: 'Switch to English',
    footerService: [
      { href: '/persoenliche-traumdeutung/', label: 'Persönliche Traumdeutung' },
      { href: '/schriftliche-traumdeutung/', label: 'Schriftliche Traumdeutung' },
      { href: '/spirituelle-traumdeutung/', label: 'Spirituelle Traumdeutung' },
      { href: '/traeume-von-verstorbenen/', label: 'Träume von Verstorbenen' },
      { href: '/beispiel-deutung/', label: 'Beispiel' },
      { href: '/blog/', label: 'Blog' },
    ],
    footerLegal: [
      { href: '/impressum/', label: 'Impressum' },
      { href: '/datenschutz/', label: 'Datenschutz' },
      { href: '/agb/', label: 'AGB' },
      { href: '/widerruf/', label: 'Widerruf' },
    ],
    footerLegalNote: '',
    footerTagline:
      '© Traumtheater · Persönliche Traumdeutung nach der Aisling-Methode · Für Deutschland, Österreich und die Schweiz · Alle Inhalte vertraulich',
    offerLabel: 'Angebot',
    faqHeading: 'Häufige Fragen',
    ctaHeading: 'Schick mir deinen Traum',
    ctaBody:
      'Den Traum, so genau du ihn erinnerst, und ein paar Sätze zu deiner aktuellen Lebenssituation. Mehr brauche ich nicht. Einführungsangebot 29 € statt 69 €.',
    ctaSubline: 'Vertraulich · Persönlich · Schriftlich',
    relatedLabel: 'Auch interessant',
    relatedAria: 'Weitere Seiten',
    exampleLink: 'Eine Deutung im Original',
    exampleBlurb: 'Eine vollständige Deutung, von Anfang bis Ende.',
    backHome: '← Zurück zur Startseite',
    services: [
      {
        href: '/persoenliche-traumdeutung/',
        label: 'Persönliche Traumdeutung',
        blurb: 'Deine Deutung, auf deine Lebenssituation bezogen.',
      },
      {
        href: '/schriftliche-traumdeutung/',
        label: 'Schriftliche Traumdeutung',
        blurb: 'Warum ein Dokument mehr trägt als ein Gespräch.',
      },
      {
        href: '/spirituelle-traumdeutung/',
        label: 'Spirituelle Traumdeutung',
        blurb: 'Fundiert und spirituell, ohne esoterische Überfrachtung.',
      },
      // German only for now. The English mirror is not built yet, so there is
      // deliberately no counterpart in the `en` list below.
      {
        href: '/traeume-von-verstorbenen/',
        label: 'Im Traum mit Verstorbenen sprechen',
        blurb: 'Wenn ein Traum von einem verstorbenen Menschen dich nicht loslässt.',
      },
    ],
    serviceType: 'Traumdeutung',
    offerDescription:
      'Einführungsangebot, regulärer Preis 69 €. §19 UStG, keine Umsatzsteuer.',
    waButton: '💬 Via WhatsApp',
    emailButton: '✉ Via E-Mail',
    testiAria: 'Stimmen von Klientinnen und Klienten',
    testiDotsAria: 'Stimme auswählen',
    testiDotAria: (name: string) => `Stimme von ${name}`,
    blogEmpty: 'Noch keine Beiträge.',
    blogBack: '← Alle Beiträge',
    postCtaHeading: 'Möchtest du deinen Traum gedeutet haben?',
    postCtaBody:
      'Ich lese deinen Traum persönlich und schriftlich, nach der Aisling-Methode. Einführungsangebot 29 € statt 69 €.',
  },

  en: {
    nav: [
      { href: '/en/#method', label: 'The method' },
      { href: '/en/#symbols', label: 'Symbols' },
      { href: '/en/example-interpretation/', label: 'Example' },
      { href: '/en/#offer', label: 'Offer' },
      { href: '/en/#testimonials', label: 'Testimonials' },
      { href: '/en/blog/', label: 'Blog' },
      { href: '/en/#about', label: 'About me' },
    ],
    navCta: 'Contact ✦',
    navCtaHref: '/en/#contact',
    navBrandHref: '/en/',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    switchTo: 'Deutsch',
    switchToAria: 'Auf Deutsch wechseln',
    footerService: [
      { href: '/en/personal-dream-interpretation/', label: 'Personal dream interpretation' },
      { href: '/en/written-dream-interpretation/', label: 'Written dream interpretation' },
      { href: '/en/spiritual-dream-interpretation/', label: 'Spiritual dream interpretation' },
      { href: '/en/example-interpretation/', label: 'Example' },
      { href: '/en/blog/', label: 'Blog' },
    ],
    // These point at the German legal pages on purpose. The German text is the
    // binding version; a translation would be a second legal representation.
    footerLegal: [
      { href: '/impressum/', label: 'Impressum' },
      { href: '/datenschutz/', label: 'Privacy policy' },
      { href: '/agb/', label: 'Terms' },
      { href: '/widerruf/', label: 'Right of withdrawal' },
    ],
    footerLegalNote: 'The legal pages are in German, as required for a business based in Germany.',
    footerTagline:
      '© Traumtheater · Personal dream interpretation with the Aisling Method · For Germany, Austria and Switzerland · Everything you send stays confidential',
    offerLabel: 'Offer',
    faqHeading: 'Common questions',
    ctaHeading: 'Send me your dream',
    ctaBody:
      'The dream, as closely as you remember it, and a few sentences about where you are in your life right now. That is all I need. Introductory offer 29 € instead of 69 €.',
    ctaSubline: 'Confidential · Personal · In writing',
    relatedLabel: 'Also worth reading',
    relatedAria: 'More pages',
    exampleLink: 'A full interpretation',
    exampleBlurb: 'One complete interpretation, from beginning to end.',
    backHome: '← Back to the homepage',
    services: [
      {
        href: '/en/personal-dream-interpretation/',
        label: 'Personal dream interpretation',
        blurb: 'Your interpretation, tied to your own situation.',
      },
      {
        href: '/en/written-dream-interpretation/',
        label: 'Written dream interpretation',
        blurb: 'Why a document carries more than a conversation.',
      },
      {
        href: '/en/spiritual-dream-interpretation/',
        label: 'Spiritual dream interpretation',
        blurb: 'Spiritual work, kept grounded, without the mystical clutter.',
      },
    ],
    serviceType: 'Dream interpretation',
    offerDescription:
      'Introductory offer, regular price 69 €. Small business under §19 UStG, so no VAT is charged.',
    waButton: '💬 Via WhatsApp',
    emailButton: '✉ Via email',
    testiAria: 'What clients say',
    testiDotsAria: 'Choose a quote',
    testiDotAria: (name: string) => `Quote from ${name}`,
    blogEmpty: 'No posts yet.',
    blogBack: '← All posts',
    postCtaHeading: 'Would you like your dream interpreted?',
    postCtaBody:
      'I read your dream personally and write it up for you, using the Aisling Method. Introductory offer 29 € instead of 69 €.',
  },
};

/** Shorthand: `const t = useTranslations(lang)` then `t.faqHeading`. */
export function useTranslations(lang: Lang): Strings {
  return ui[lang];
}
