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
  body: 'Dubais reife Villen-Communities - von PALM JUMEIRAH, JUMEIRAH ISLANDS bis hin zu EMIRATES LIVING sind voller unterschätzter Substanz. Doch wer saniert, kämpft mit explodierenden Budgets, wandernden Zeitplänen und Qualität nach Tageslaune. Genau um diese bekannten Problem zu lösen, haben wir ein System gebaut.',
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
      text: 'Deal-Scoring, Risiko-Scan und Budget-Band — Entscheidung in maximal 10 Tagen.',
    },
    {
      title: 'REFINE',
      text: 'Konzeptvarianten, Tier-Wahl und Scope Lock — der Umfang steht, bevor gebaut wird.',
    },
    {
      title: 'EXECUTE',
      text: 'Österreichische Bauleitung vor Ort, exakte Milestones und Qualitätskontrolle — keine Änderung ohne Freigabe.',
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
    href: '/investors/',
  },
  {
    eyebrow: 'FÜR EIGENTÜMER',
    title: 'Bleiben Sie im Boot.',
    text: 'Sie müssen nicht verkaufen, um zu profitieren: Als Partner im Joint Venture partizipieren Sie an der Wertsteigerung Ihrer eigenen Villa — mit voller Transparenz vor dem ersten Bautag.',
    linkLabel: 'MEHR FÜR EIGENTÜMER',
    href: '/owners/',
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
  // Laufende Projekte haben auf rieglerundpartner.at eigene Seiten,
  // abgeschlossene liegen als Abschnitte auf der Übersicht und sind nur
  // über Anker erreichbar — daher die zwei unterschiedlichen Linkformen.
  // `position` steuert den Bildausschnitt, wo die Mitte nicht das Motiv trifft.
  // Die zehn Projekte in Christians Reihenfolge.
  // TODO: Bilder kommen von Christian (er waehlt je Projekt das beste aus).
  // TODO: Projektnummer 9 im Screenshot abgeschnitten — vollstaendigen Namen
  //       nachtragen.
  // TODO: Einzel-Links fehlen fuer die meisten; bis dahin zeigen sie auf die
  //       Projektuebersicht. Lend Living und Riegler Downtown haben eigene Ziele.
  //
  // `featured` = die beiden grossen Kacheln. Derzeit stehen sie auf den zwei
  // Projekten, fuer die schon ein Bild vorliegt, damit der Preview beurteilbar
  // ist — welche zwei final gross laufen, entscheidet Christian.
  projects: [
    {
      name: 'Ölberg – Yacht',
      href: 'https://rieglerundpartner.at/fertiggestellte-projekte/',
      image: '',
      position: '',
      featured: false,
    },
    {
      name: 'Amalfi – St. Peter',
      href: 'https://rieglerundpartner.at/fertiggestellte-projekte/',
      image: '',
      position: '',
      featured: false,
    },
    {
      name: 'Geidorf-Living',
      href: 'https://rieglerundpartner.at/fertiggestellte-projekte/',
      image: 'geidorf-living.jpg',
      position: '',
      featured: true,
    },
    {
      name: 'Wine Yard Residences',
      href: 'https://rieglerundpartner.at/fertiggestellte-projekte/',
      image: '',
      position: '',
      featured: false,
    },
    {
      name: 'Riegler Downtown',
      href: 'https://rieglerundpartner.at/fertiggestellte-projekte/#407',
      image: 'riegler-downtown.jpg',
      position: '',
      featured: false,
    },
    {
      name: 'Brünnerstrasse',
      href: 'https://rieglerundpartner.at/fertiggestellte-projekte/',
      image: '',
      position: '',
      featured: false,
    },
    {
      name: 'Hannover – Close',
      href: 'https://rieglerundpartner.at/fertiggestellte-projekte/',
      image: '',
      position: '',
      featured: false,
    },
    {
      name: 'Ölberg Zwei',
      href: 'https://rieglerundpartner.at/fertiggestellte-projekte/',
      image: '',
      position: '',
      featured: false,
    },
    {
      name: 'Bürokomplex 209 – 211',
      href: 'https://rieglerundpartner.at/fertiggestellte-projekte/',
      image: '',
      position: '',
      featured: false,
    },
    {
      name: 'Lend Living',
      href: 'https://rieglerundpartner.at/aktuelle-projekte/lend-living/',
      image: 'lend-living.jpg',
      position: '',
      featured: true,
    },
  ],
  allProjects: 'alle Projekte',
  projectsUrl: 'https://rieglerundpartner.at/fertiggestellte-projekte/',
  // TODO: VR-Demo-Inhalt fehlt noch (DEV_SPEC §8)
  modalPending: 'Der VR-Walkthrough wird derzeit produziert.',
} as const;

export const timelapse = {
  eyebrow: 'VOM BESTAND ZUM STATEMENT',
  h2: 'Gute Substanz. Neuer Glanz.',
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

export const economics = {
  eyebrow: 'DAS MODELL',
  h2: 'Sie verdienen zuerst. Wir erst, wenn Sie zufrieden sind.',
  body: 'Unser Modell ist eine Reihenfolge, kein Kleingedrucktes: Zuerst fließt das Kapital zurück. Dann Ihre Vorzugsrendite. Dann wird der Gewinn geteilt.',
  // `featured` bestimmt, welche Zeile den Gold-Rahmen bekommt — vorher hing
  // das fest an der letzten Zeile.
  waterfall: [
    { no: '1', title: 'Kapitalrückführung', tag: 'AN DEN INVESTOR', featured: false },
    { no: '2', title: 'Vorzugsrendite', tag: 'INVESTOR ZUERST', featured: true },
    { no: '3', title: 'Gewinn-Split', tag: 'UNSERE BETEILIGUNG', featured: false },
  ],
  cta: 'Zahlen & Szenarien im Investor Pack',
  // Compliance-Hinweis, CLAUDE.md Regel 1
  note: 'Kein öffentliches Angebot. Konkrete Szenarien und Sensitivitäten erhalten Sie im persönlichen Investor Pack.',
} as const;

export const regions = {
  eyebrow: 'PHASE-1-FOKUS',
  h2: 'Reife Lagen. Knapper Bestand.',
  areas: [
    {
      name: 'Emirates Living',
      sub: 'Meadows, Lakes, Springs',
      text: 'Reifer Bestand seit 2004, das Kern-Terrain für wiederholbare Value-Uplifts.',
    },
    {
      name: 'Jumeirah Islands',
      sub: 'Familiengeprägt, limitiert, gefragt',
      text: 'Ideale Substanz für Signature-Transformationen.',
    },
    {
      name: 'Palm Jumeirah',
      sub: 'Die Bühne für Iconic-Projekte',
      text: 'Showcase-Transformationen mit eigener Deal-Logik.',
    },
  ],
} as const;

export const team = {
  eyebrow: 'DIE KÖPFE DAHINTER',
  h2: 'Bauträger-DNA. Baustellen-Disziplin. Marken-Handwerk.',
  // `photo` verweist auf den Dateinamen in src/assets/img/team/.
  // Leer = noch kein Foto vorhanden, dann greift der Platzhalter.
  // Der einheitliche Schwarz-Weiß-Look entsteht per CSS-Filter, nicht durch
  // vorbearbeitete Dateien — so bleibt das Original unangetastet.
  // Dreizeilig: Name mit Titel, Position, Aufgabenschwerpunkt.
  // `key` bleibt stabil und dient der Zuordnung von Bios — so bricht
  // nichts, wenn sich Titel oder Schreibweise des Namens ändern.
  members: [
    {
      key: 'herbert-riegler',
      name: 'Herbert Riegler, MBA',
      position: 'CEO & Founder',
      focus: 'Investor Relations, Deal-Flow & Acquisition',
      photo: 'herbert-riegler.jpg',
    },
    {
      key: 'markus-pein',
      name: 'BM DI(FH) Markus Pein, MSc.',
      position: 'CCO & Co-Founder',
      focus: 'Technische Planung & Bauleitung',
      photo: 'markus-pein.webp',
    },
    {
      key: 'christian-wolf',
      name: 'Christian Wolf, BA',
      position: 'CMO & Co-Founder',
      focus: 'Marketing & Communication Expert',
      photo: 'christian-wolf.jpg',
    },
  ],
  poweredByLabel: 'POWERED BY',
  // Domains geprüft: alle vier antworten und tragen die passende Firma.
  poweredBy: [
    { name: 'RIEGLER & PARTNER', href: 'https://rieglerundpartner.at' },
    { name: 'MPBM', href: 'https://www.mpbm.at' },
    { name: 'JACK COLEMAN', href: 'https://www.jack-coleman.com' },
    { name: 'PANOROOM', href: 'https://www.panoroom.at' },
  ],
} as const;

export const finalCta = {
  eyebrow: 'DER NÄCHSTE SCHRITT',
  h2: 'Das Investor Pack. Zahlen, Szenarien, Prozess.',
  body: 'Deal-Band, konservative Szenario-Rechnungen, Reporting-Beispiel und die PrimeRefine-Methodik — kuratiert als PDF, persönlich nachgefasst.',
  fields: { name: 'Name', email: 'E-Mail' },
  consent:
    'Kein öffentliches Angebot, keine Anlageberatung. Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß Datenschutzerklärung zu.',
} as const;

export const trustBar = [
  'Scope Lock statt Blackbox',
  'Reporting alle 2 Wochen',
  'Österreichische Bauleitung vor Ort',
  'VR vor Baubeginn',
] as const;
