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

export const trustBar = [
  'Scope Lock statt Blackbox',
  'Reporting alle 2 Wochen',
  'Bauleitung vor Ort',
  'VR vor Baubeginn',
] as const;
