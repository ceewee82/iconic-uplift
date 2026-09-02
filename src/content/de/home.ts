// Home-Copy — Quelle: docs/website-copy-de.md §1. Texte 1:1 übernommen.
// Weitere Sektionen werden hier ergänzt, sobald sie gebaut werden.

export const seo = {
  title:
    'IconicUplift — Villen-Refurbishment in Dubai | A Riegler & Partner Company',
  description:
    'Investorentaugliches Refurbishment von Bestandsvillen in Dubais reifen Premium-Communities. Scope Lock, Reporting alle 2 Wochen, sell-ready übergeben.',
} as const;

export const hero = {
  labelBefore: 'BESTAND · MEADOWS 2004',
  labelAfter: 'SELL-READY · TIER SIGNATURE',
  h1: 'Unterschätzte Villen. Präzise verwandelt.',
  sub: 'Investorentaugliches Refurbishment von Bestandsvillen in Dubais reifen Premium-Communities — transparent, kontrolliert, verkaufsbereit.',
  scroll: 'SCROLL',
  // Alt-Texte (CLAUDE.md Regel 6), nicht Teil des Copy-Dokuments
  altBefore:
    'Bestandsvilla in Dubai vor der Sanierung: verwitterte Fassade, leerer Pool, vertrocknete Gartenanlage.',
  altAfter:
    'Dieselbe Villa nach dem Refurbishment in der Dämmerung: saniertes Gebäude mit warmem Licht, gefüllter Pool, angelegter Garten.',
  a11ySlider:
    'Vergleichsregler: Bestand und sanierter Zustand gegenüberstellen',
} as const;

export const problem = {
  eyebrow: 'DAS PROBLEM',
  // Im Copy-Dokument ist der zweite Satz kursiv ausgezeichnet — hier als
  // eigenes Feld, damit die Betonung gestaltet werden kann ohne den Text
  // anzufassen.
  h2: 'Renovierung ist eine Blackbox.',
  h2Emphasis: 'Wir haben sie geöffnet.',
  body: 'Dubais reife Villen-Communities sind voller unterschätzter Substanz. Doch wer saniert, kämpft mit explodierenden Budgets, wandernden Zeitplänen und Qualität nach Tageslaune. Genau dafür haben wir ein System gebaut.',
  cards: [
    {
      title: 'Scope Creep',
      text: 'Unkontrollierte Änderungen sprengen Budget und Zeitplan — der häufigste Wertvernichter.',
    },
    {
      title: 'Timeline-Drift',
      text: 'Jede Woche Verzug frisst Rendite und verschiebt das Exit-Fenster.',
    },
    {
      title: 'Qualitätsstreuung',
      text: 'Die Finish-Qualität entscheidet über den Preis — und schwankt im Markt extrem.',
    },
    {
      title: 'Exit-Risiko',
      text: 'Gute Bauarbeit ohne das richtige Käuferprofil bleibt unter Wert.',
    },
  ],
} as const;

export const primeRefine = {
  eyebrow: 'DIE METHODE',
  h2: 'PrimeRefine — fünf Schritte, ein System.',
  steps: [
    {
      title: 'SCREEN',
      text: 'Deal-Scoring, Risiko-Scan und Budget-Band — Entscheidung in 48 Stunden.',
    },
    {
      title: 'REFINE',
      text: 'Konzeptvarianten, Tier-Wahl und Scope Lock — der Umfang steht, bevor gebaut wird.',
    },
    {
      title: 'EXECUTE',
      text: 'Bauleitung vor Ort, Milestones und QC — keine Änderung ohne Freigabe.',
    },
    {
      title: 'VERIFY',
      text: 'Abnahmen, Punch List und As-built-Dokumentation — Qualität ist ein Prozess.',
    },
    {
      title: 'SELL-READY',
      text: 'VR, Renders, Video und Broker-Pack — das Asset ist ab Tag eins vermarktbar.',
    },
  ],
  footer: [
    'Reporting-Kadenz: alle 2 Wochen in der Bauphase',
    'Milestone-Abnahmen',
    'gemeinsamer Datenraum',
  ],
} as const;

export const dualTrack = [
  {
    eyebrow: 'FÜR INVESTOREN',
    title: 'Sie verdienen zuerst.',
    text: 'Vorzugsrendite vor jedem Gewinn-Split, konservative Szenarien statt Versprechen, Reporting im Investorentakt. Refurbishment, geführt wie ein Investment.',
    linkLabel: 'MEHR FÜR INVESTOREN',
    href: '/investors',
  },
  {
    eyebrow: 'FÜR EIGENTÜMER',
    title: 'Bleiben Sie im Boot.',
    text: 'Sie müssen nicht verkaufen, um zu profitieren: Als Partner im Joint Venture partizipieren Sie an der Wertsteigerung Ihrer eigenen Villa — mit voller Transparenz vor dem ersten Bautag.',
    linkLabel: 'MEHR FÜR EIGENTÜMER',
    href: '/owners',
  },
] as const;

export const tiers = {
  eyebrow: 'DAS ANGEBOT',
  h2: 'Drei Stufen. Ein Ergebnisstandard.',
  items: [
    {
      name: 'PRIME',
      lead: 'ROI-fokussiertes Upgrade.',
      text: 'Market-ready Finish, der schnellste Weg zur Verkäuflichkeit — für wiederholbare Deals in Emirates Living und Jumeirah Islands.',
      featured: false,
    },
    {
      name: 'SIGNATURE',
      lead: 'Bespoke Premium.',
      text: 'Höhere Material- und Detailtiefe für Standout-Exits — die Stufe, auf der Lake- und Corner-Lagen ihr Maximum erreichen.',
      featured: true,
    },
    {
      name: 'ICONIC',
      lead: 'Statement-Transformation auf Showcase-Level.',
      text: 'Für die Palm Jumeirah und Flagship-Projekte mit maximalem Premium-Multiple.',
      featured: false,
    },
  ],
} as const;

export const showcase = {
  eyebrow: 'SEHEN, BEVOR GEBAUT WIRD',
  h2: 'Ihre Villa. Fertig gedacht, bevor der erste Handgriff passiert.',
  videoLabel: 'VR-WALKTHROUGH · MUSTERPROJEKT (KONZEPT)',
  trackRecordLabel: 'TRACK RECORD · RIEGLER & PARTNER',
  projects: ['Lend Living', 'Sundown Living', 'Villenblick 6', 'Riegler Downtown'],
  allProjects: 'alle Projekte',
  // TODO: VR-Demo-Inhalt fehlt noch (DEV_SPEC §8)
  modalPending: 'Der VR-Walkthrough wird derzeit produziert.',
} as const;

export const timelapse = {
  eyebrow: 'VOM BESTAND ZUM STATEMENT',
  h2: '25 Sekunden. Ein kompletter Umbau.',
  claim:
    'RÜCKBAU AUF DEN KERN — NICHT ABRISS. DIE SUBSTANZ BLEIBT, DER WERT ENTSTEHT NEU.',
  phases: [
    { no: '01', title: 'Bestand', sub: 'Unterschätzte Substanz' },
    { no: '02', title: 'Rückbau', sub: 'Der Kern bleibt stehen' },
    { no: '03', title: 'Rohbau', sub: 'Neue Struktur, alter Kern' },
    { no: '04', title: 'Fassade & Glas', sub: 'Glasfronten & Finish' },
    { no: '05', title: 'Außenanlagen', sub: 'Garten, Pool, Terrasse' },
    { no: '06', title: 'Golden Hour', sub: 'Sell-ready übergeben' },
  ],
  videoAlt:
    'Zeitraffer einer Villensanierung in Dubai: vom Bestand über Rückbau, Rohbau und Fassade bis zur fertigen Villa in der Dämmerung.',
} as const;

export const trustBar = [
  'Scope Lock statt Blackbox',
  'Reporting alle 2 Wochen',
  'Bauleitung vor Ort',
  'VR vor Baubeginn',
] as const;
