// Globale Copy (Nav, Buttons, Footer) — Quelle: docs/website-copy-de.md §0
// Texte 1:1 aus dem Copy-Dokument. Nicht umformulieren (CLAUDE.md Regel: Copy
// niemals "verbessern"; Änderungswünsche gehen an Christian).

export const brand = {
  wordmark: 'ICONIC UPLIFT',
  endorsement: 'A RIEGLER & PARTNER COMPANY',
} as const;

export const nav = {
  primary: [
    { label: 'Investors', href: '/investors' },
    { label: 'Owners', href: '/owners' },
    { label: 'Process', href: '/process' },
  ],
  overlay: {
    seiten: [
      { label: 'Investors', href: '/investors' },
      { label: 'Owners', href: '/owners' },
      { label: 'Process', href: '/process' },
      { label: 'Tiers', href: '/tiers' },
    ],
    mehr: [
      { label: 'Visualisation', href: '/visualisation' },
      { label: 'Team', href: '/team' },
      { label: 'Contact', href: '/contact' },
    ],
    social: [
      { label: 'LinkedIn', href: '#' },
      { label: 'Instagram', href: '#' },
    ],
  },
  langs: [
    { label: 'DE', href: '/', active: true },
    { label: 'EN', href: '/en/', active: false },
  ],
  // Labels für Screenreader / aria
  a11y: {
    open: 'Menü öffnen',
    close: 'Menü schließen',
    main: 'Hauptnavigation',
    lang: 'Sprache wählen',
  },
} as const;

export const cta = {
  primary: 'Investor Pack anfordern',
  primaryShort: 'Investor Pack',
  secondary: 'Deal einreichen',
  tertiary: 'Assessment Call buchen',
  formSubmit: 'Pack anfordern',
} as const;

export const microcopy = {
  formSuccess:
    'Danke — das Investor Pack ist unterwegs. Wir melden uns persönlich innerhalb von 48 Stunden.',
  fieldError: 'Bitte prüfen Sie dieses Feld.',
  loading: 'Wird gesendet …',
} as const;

export const legal = {
  // Disclaimer laut CLAUDE.md Regel 1 auf jeder investorennahen Seite + im Footer
  disclaimer:
    'Kein öffentliches Angebot, keine Anlageberatung. Alle Angaben dienen der unverbindlichen Erstinformation.',
  copyright: '© 2027 IconicUplift · Dubai / Graz',
} as const;
