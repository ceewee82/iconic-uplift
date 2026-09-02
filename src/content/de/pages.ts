// Copy der Unterseiten — Quelle: docs/website-copy-de.md §2 bis §9.
// Texte 1:1 übernommen, nicht umformuliert (CLAUDE.md).

export const investors = {
  seo: {
    title: 'Für Investoren — Refurbishment, geführt wie ein Investment | IconicUplift',
    description:
      'Vorzugsrendite vor Gewinn-Split, Scope Lock, Reporting alle 2 Wochen. So investieren Sie mit IconicUplift in Dubais Bestandsvillen.',
  },
  hero: {
    eyebrow: 'FÜR INVESTOREN',
    h1: 'Refurbishment, gerechnet wie ein Investment.',
    sub: 'Sie investieren nicht in ein Bauprojekt, sondern in einen kontrollierten Prozess: klarer Scope, klare Reihenfolge der Auszahlung, klare Berichtspflicht — von Ankauf bis Exit.',
  },
  market: {
    h2: 'Der reife Bestand ist die Lücke im Markt.',
    body: 'Dubais Premium-Communities der ersten Generation sind 20 Jahre alt. Die Lagen sind erstklassig, die Substanz solide, die Ausstattung veraltet — und neuer Boden in diesen Communities entsteht nicht mehr. Zwischen abgewohntem Original und Neubau-Preisniveau liegt ein Fenster, das systematisches Refurbishment öffnet.',
    points: [
      { title: 'Limitiertes Angebot', text: 'Gewachsene Communities, kein Neubauland' },
      {
        title: 'Nachfrage nach Fertigem',
        text: 'Käufer zahlen Premium für bezugsfertig & modern',
      },
      {
        title: 'Substanz statt Spekulation',
        text: 'Wertschöpfung durch Umbau, nicht durch Markt-Timing',
      },
    ],
  },
  safety: {
    h2: 'Vier Mechanismen, die Ihr Kapital schützen.',
    items: [
      {
        title: 'Auszahlungs-Reihenfolge',
        text: 'Kapitalrückführung → Vorzugsrendite → erst dann Gewinn-Split. Wir verdienen nach Ihnen.',
      },
      {
        title: 'Scope Lock',
        text: 'Der Bauumfang wird vor Baustart fixiert. Änderungen nur mit dokumentierter Freigabe.',
      },
      {
        title: 'Stage-Gates',
        text: 'Kapital fließt in Tranchen gegen erreichte Milestones, nicht als Vorschuss.',
      },
      {
        title: 'Reporting-Pflicht',
        text: 'Alle 2 Wochen Baufortschritt, Budget-Status und Fotos/Video im Datenraum.',
      },
    ],
  },
  journey: {
    h2: 'Vom Erstgespräch zum Exit.',
    steps: [
      'Investor Pack & Erstgespräch — Mechanik, Szenarien, offene Fragen.',
      'Deal-Angebot — konkretes Objekt mit Budget-Band, Tier und Zeitplan.',
      'Beteiligung & Closing — Struktur, Verträge, Treuhand-Logik.',
      'Bauphase — Reporting alle 2 Wochen, Milestone-Abnahmen.',
      'Exit — Sell-ready-Vermarktung über das Riegler-&-Partner-Netzwerk und lokale Broker.',
    ],
  },
  faq: {
    h2: 'Häufige Fragen',
    items: [
      {
        q: 'Ab welcher Größenordnung kann ich einsteigen?',
        a: 'Die Einstiegsgrößen besprechen wir persönlich — sie hängen von Projekt und Struktur ab. Das Investor Pack nennt die typischen Bänder.',
      },
      {
        q: 'Welche Rendite kann ich erwarten?',
        a: 'Konkrete Szenarien und Sensitivitäten zeigen wir ausschließlich im persönlichen Gespräch und im Investor Pack — bewusst konservativ gerechnet, ohne öffentliche Versprechen.',
      },
      {
        q: 'Wie werde ich informiert?',
        a: 'Alle 2 Wochen per Reporting im gemeinsamen Datenraum, zusätzlich bei jedem Milestone.',
      },
      {
        q: 'Was passiert bei Budgetabweichungen?',
        a: 'Der Scope ist vor Baustart fixiert; Reserven sind eingeplant. Abweichungen werden transparent gemeldet und nur mit Freigabe umgesetzt.',
      },
      {
        q: 'Wer verantwortet die Baustelle?',
        a: 'Ein eigener technischer Partner mit Bauleitung vor Ort (MPBM) — nicht ein anonymer Generalunternehmer.',
      },
    ],
  },
} as const;

export const owners = {
  seo: {
    title: 'Für Eigentümer — Die zweite Blüte Ihrer Villa | IconicUplift',
    description:
      'Verkaufen, aufwerten oder als Partner beteiligt bleiben: drei Wege, wie Eigentümer in Dubai vom Wert ihrer Bestandsvilla profitieren.',
  },
  hero: {
    eyebrow: 'FÜR EIGENTÜMER',
    h1: 'Ihre Villa kann mehr.',
    sub: 'Sie besitzen Substanz in einer der besten Communities Dubais. Wir zeigen Ihnen, was in ihr steckt — und Sie entscheiden, wie Sie davon profitieren.',
  },
  paths: {
    h2: 'Drei Wege',
    items: [
      {
        title: 'Verkaufen',
        text: 'Sie verkaufen an uns: fairer, schneller Prozess mit klarer Bewertung — ohne monatelange Vermarktung im unrenovierten Zustand.',
      },
      {
        title: 'Aufwerten lassen',
        text: 'Wir transformieren Ihre Villa für Sie: fixierter Scope, fixe Qualität, Sie bleiben Eigentümer.',
      },
      {
        title: 'Partner bleiben (JV)',
        text: 'Sie bringen die Villa ein, wir Kapital und Umsetzung — am Wertzuwachs partizipieren Sie anteilig. Volle Transparenz vor dem ersten Bautag.',
      },
    ],
  },
  why: {
    h2: 'Warum mit uns',
    items: [
      'VR-Walkthrough Ihrer Villa vor Baubeginn — Sie sehen das Ergebnis, bevor Sie unterschreiben.',
      'Bauleitung vor Ort, Reporting alle 2 Wochen — auch wenn Sie nicht in Dubai sind.',
      'Ein Ansprechpartner von Konzept bis Übergabe.',
    ],
  },
  journey: {
    h2: 'Ablauf',
    steps: [
      'Erstgespräch & Unterlagen — 30 Minuten, unverbindlich.',
      'Assessment vor Ort — Substanz-Check, Potenzialanalyse, Tier-Empfehlung.',
      'Angebot mit VR-Konzept — Sie sehen Varianten und Zahlen.',
      'Entscheidung — verkaufen, beauftragen oder JV.',
    ],
  },
  form: {
    h2: 'Lassen Sie Ihre Villa bewerten.',
    communities: ['Emirates Living', 'Jumeirah Islands', 'Palm Jumeirah', 'andere'],
    submit: 'Assessment anfragen',
  },
} as const;

export const process = {
  seo: {
    title: 'PrimeRefine — die Methode hinter IconicUplift',
    description:
      'Fünf Schritte von der Objektprüfung bis zur sell-ready Übergabe: Screen, Refine, Execute, Verify, Sell-Ready — mit Scope Lock und Stage-Gates.',
  },
  hero: {
    eyebrow: 'DIE METHODE',
    h1: 'PrimeRefine. Fünf Schritte, ein System.',
    sub: 'Refurbishment scheitert selten am Handwerk — sondern an Steuerung. PrimeRefine macht aus einem Bauprojekt einen kontrollierten, dokumentierten Prozess.',
  },
  phases: [
    {
      name: 'SCREEN',
      claim: 'Prüfen statt hoffen.',
      what: 'Deal-Scoring nach festem Kriterienkatalog: Lage, Substanz, Grundriss-Potenzial, Budget-Band, Exit-Profil.',
      get: 'Go/No-Go mit Begründung in 48 Stunden.',
    },
    {
      name: 'REFINE',
      claim: 'Planen, bis es steht.',
      what: 'Konzeptvarianten, Tier-Entscheidung, Material-Spezifikation, Behörden-Vorklärung (NOCs), finaler Scope Lock.',
      get: 'Fixierten Bauumfang, Budget und Zeitplan — vor dem ersten Bautag.',
    },
    {
      name: 'EXECUTE',
      claim: 'Bauen mit Takt.',
      what: 'Rückbau auf den Kern, Umbau nach Plan: eigene Bauleitung vor Ort, wöchentliche Baustellenrunden, Milestone-Logik, QC-Checklisten.',
      get: 'Reporting alle 2 Wochen mit Fortschritt, Budget und Bildmaterial.',
    },
    {
      name: 'VERIFY',
      claim: 'Abnehmen, nicht abnicken.',
      what: 'Gewerke-Abnahmen, Punch List, Mängelverfolgung, As-built-Dokumentation, Garantien-Handover.',
      get: 'Dokumentierte Qualität statt Bauchgefühl.',
    },
    {
      name: 'SELL-READY',
      claim: 'Übergeben, wenn es verkauft.',
      what: 'Staging-Empfehlung, Foto/Video/Drohne, VR-Tour, Broker-Pack, Listing-Support.',
      get: 'Ein Asset, das ab Tag eins vermarktbar ist.',
    },
  ],
  principles: [
    'Scope Lock',
    'Stage-Gates',
    'Reporting alle 2 Wochen',
    'Gemeinsamer Datenraum',
    'Keine Änderung ohne Freigabe',
  ],
} as const;

export const tiersPage = {
  seo: {
    title: 'Prime, Signature, Iconic — drei Ausbaustufen | IconicUplift',
    // Im Copy-Dokument ist für diese Seite keine Description hinterlegt.
    description:
      'Drei Ausbaustufen für Bestandsvillen in Dubai: Prime, Signature und Iconic — dieselbe Prozessdisziplin, unterschiedliches Finish.',
  },
  hero: {
    eyebrow: 'DAS ANGEBOT',
    h1: 'Drei Stufen. Ein Ergebnisstandard.',
    sub: 'Jede Villa bekommt dieselbe Prozessdisziplin — aber nicht jede Lage verlangt dasselbe Finish. Die Tier-Wahl ist eine Investmententscheidung, keine Geschmacksfrage.',
  },
  details: [
    {
      name: 'PRIME',
      claim: 'Der wiederholbare Value-Uplift.',
      location: 'Für solide Lagen in Emirates Living & Jumeirah Islands.',
      scope:
        'Komplettes Interieur-Upgrade, Küche/Bäder neu, Böden, Beleuchtung, Fassaden-Refresh, Landscaping-Basics.',
      buyer: 'Familien & Endnutzer, die bezugsfertig kaufen.',
      featured: false,
    },
    {
      name: 'SIGNATURE',
      claim: 'Der Standout-Exit.',
      location: 'Für Lake-, Park- und Corner-Lagen.',
      scope:
        'Zusätzlich: Grundriss-Eingriffe, Glasfronten, Outdoor-Living mit Pool-Neubau/Umbau, Smart-Home, hochwertige Marken-Ausstattung.',
      buyer: 'Designaffine Käufer & Rückkehrer aus dem Neubau-Markt.',
      featured: true,
    },
    {
      name: 'ICONIC',
      claim: 'Das Showcase.',
      location: 'Palm Jumeirah & Flagship-Objekte.',
      scope:
        'Architektur-Statement bis zur Substanzgrenze, individuelle Planung, Premium-Marken durchgängig, volle Medienproduktion.',
      buyer: 'Internationales HNWI-Segment.',
      featured: false,
    },
  ],
  comparison: {
    h2: 'Im Vergleich',
    rows: [
      { label: 'Grundriss-Eingriffe', prime: 'punktuell', signature: 'strukturell', iconic: 'vollständig' },
      { label: 'Glas/Fassade', prime: 'Refresh', signature: 'Glasfronten', iconic: 'Architektur-Statement' },
      { label: 'Outdoor & Pool', prime: 'Refresh', signature: 'Neu-Design', iconic: 'Landmark-Design' },
      { label: 'Medienpaket', prime: 'Foto + Video', signature: '+ VR-Tour', iconic: '+ Kampagne' },
      { label: 'Reporting', prime: '2-Wochen-Takt', signature: '2-Wochen-Takt', iconic: '2-Wochen-Takt' },
    ],
  },
  cta: 'Welcher Tier passt zu Ihrem Objekt?',
} as const;

export const visualisation = {
  seo: {
    title: 'VR & Visualisierung — sehen, bevor gebaut wird | IconicUplift',
    description:
      'VR-Walkthrough, fotorealistische Renderings, Construction Timelapse und Before/After-Dokumentation — jedes Projekt entsteht zweimal.',
  },
  hero: {
    eyebrow: 'VISUALISIERUNG',
    h1: 'Sehen, bevor gebaut wird.',
    sub: 'Jedes Projekt entsteht zweimal: zuerst fotorealistisch begehbar, dann auf der Baustelle. Das nimmt Entscheidungen das Risiko — und dem Verkauf die Wartezeit.',
  },
  blocks: [
    {
      title: 'VR-Walkthrough',
      text: 'Begehen Sie Ihre Villa vor dem Umbau: jede Material-Entscheidung fällt im fertigen Raum, nicht auf dem Papier.',
      note: 'Panoroom-Kompetenz',
    },
    {
      title: 'Fotorealistische Renderings',
      text: 'Verkaufsfähige Bilder ab Scope Lock — Vermarktung startet, während gebaut wird.',
      note: '',
    },
    {
      title: 'Construction Timelapse & Film',
      text: 'Der Umbau als Story: Material für Investoren-Updates, Social und Listing.',
      note: '',
    },
    {
      title: 'Before/After-Dokumentation',
      text: 'Jedes Projekt wird systematisch dokumentiert — Ihr Beleg, unser Track Record.',
      note: '',
    },
  ],
} as const;

export const teamPage = {
  seo: {
    title: 'Team — Bauträger-DNA trifft Baustellen-Disziplin | IconicUplift',
    description:
      'IconicUplift bündelt drei eingespielte Kompetenzen: Bauträger-DNA, Baustellen-Disziplin und Marken-Handwerk.',
  },
  hero: {
    eyebrow: 'DIE KÖPFE DAHINTER',
    h1: 'Bauträger-DNA. Baustellen-Disziplin. Marken-Handwerk.',
    sub: 'IconicUplift ist keine Idee auf einem Pitchdeck — es ist die Bündelung von drei eingespielten Kompetenzen unter einer Marke.',
  },
  // Bios stehen laut Copy-Dokument noch aus ("Bios folgen von den Partnern").
  // Bis dahin bleibt das Feld leer statt mit Platzhaltertext gefüllt.
  bios: {
    'Herbert Riegler': '',
    'Markus Pein': '',
    'Christian Wolf': '',
  } as Record<string, string>,
  poweredByLine:
    'Vier Firmen, ein Standard: österreichische Verlässlichkeit, umgesetzt in Dubai.',
  poweredByRoles: {
    'RIEGLER & PARTNER': 'Bauträger, AT',
    MPBM: 'Baumanagement',
    'JACK COLEMAN': 'Brand & Marketing',
    PANOROOM: 'VR & Visualisierung',
  } as Record<string, string>,
} as const;

export const contact = {
  seo: {
    title: 'Kontakt | IconicUplift',
    description:
      'Sprechen Sie mit uns über Ihr Projekt — als Investor, Eigentümer oder Broker. Standorte Dubai und Graz.',
  },
  hero: { eyebrow: 'KONTAKT', h1: 'Sprechen wir über Ihr Projekt.' },
  ways: [
    { title: 'Investor werden', text: 'Investor Pack anfordern und Mechanik besprechen.', href: '/#investor-pack' },
    { title: 'Villa einbringen', text: 'Assessment für Ihre Bestandsvilla anfragen.', href: '/owners/' },
  ],
  // TODO: finale Adresse klären (DEV_SPEC §8) — office@ ist laut Copy Platzhalter
  email: 'office@iconicuplift.com',
  locations: [
    { city: 'Dubai', role: 'operativ' },
    { city: 'Graz', role: 'Investor Relations DACH' },
  ],
  form: {
    roles: ['Investor', 'Eigentümer', 'Broker', 'Sonstiges'],
    submit: 'Senden',
  },
} as const;

export const legalPages = {
  impressum: {
    seo: { title: 'Impressum | IconicUplift', description: 'Impressum und Anbieterkennzeichnung.' },
    h1: 'Impressum',
    // Firmendaten stehen laut Copy-Dokument §9 noch aus (Legal-Setup Herbert).
    pending:
      'Die Firmendaten werden ergänzt, sobald das Legal-Setup abgeschlossen ist.',
  },
  datenschutz: {
    seo: { title: 'Datenschutz | IconicUplift', description: 'Informationen zur Verarbeitung personenbezogener Daten.' },
    h1: 'Datenschutz',
    pending:
      'Die Datenschutzerklärung wird derzeit juristisch finalisiert und in Kürze veröffentlicht.',
  },
} as const;
