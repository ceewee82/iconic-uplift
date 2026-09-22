// About-Us-Seite — ENTWURF.
//
// ACHTUNG: Anders als der übrige Content stammt dieser Text NICHT aus
// docs/website-copy-de.md, sondern ist ein Vorschlag zur Abstimmung.
// Vor dem Livegang braucht er Freigabe von Christian und Herbert, danach
// gehört er ins Copy-Dokument. Alle Zahlen sind unbestätigt (siehe
// `kennzahlen`) — Trust-Aussagen auf einer Investorenseite müssen belegbar
// sein, sonst kehrt sich die Wirkung um.

export const about = {
  seo: {
    title: 'Über uns — Bauträger-Track-Record aus Europa | IconicUplift',
    description:
      'Herbert Riegler entwickelt seit Jahren Wohnimmobilien in Österreich. IconicUplift überträgt diese Disziplin auf Dubais Bestandsvillen.',
  },

  hero: {
    eyebrow: 'DAS FUNDAMENT',
    h1: 'Wer in Dubai baut, sollte es in Europa bewiesen haben.',
    sub: 'IconicUplift ist keine Gründung auf der grünen Wiese. Hinter dem Modell steht ein Bauträger, der in Österreich über Jahre Wohnprojekte entwickelt, gebaut und verkauft hat — durch zwei Zinszyklen, nicht durch einen Boom.',
    portraitCaption: 'Herbert Riegler, MBA · CEO & Founder',
  },

  vision: {
    eyebrow: 'VISION & MODELL',
    h2: 'Dieselbe Methode. Ein anderer Markt.',
    body: 'Bauträger-Disziplin ist ortsunabhängig: Ein Objekt prüfen, bevor man es kauft. Den Umfang fixieren, bevor man baut. Abnehmen, bevor man übergibt. Was den Unterschied macht, ist nicht der Standort — sondern ob jemand diese Reihenfolge einhält, auch wenn es unbequem wird.',
    punkte: [
      {
        title: 'Das Modell',
        text: 'Bestandsvillen in Dubais reifen Communities ankaufen, nach festem Prozess sanieren, sell-ready übergeben. Kein Neubau, keine Spekulation auf den Markt.',
      },
      {
        title: 'Warum jetzt',
        text: 'Dubais erste Premium-Generation ist rund 20 Jahre alt. Die Lagen sind vergeben, neuer Boden entsteht dort nicht mehr. Zwischen abgewohntem Original und Neubau-Preisniveau liegt ein Fenster.',
      },
      {
        title: 'Warum wir',
        text: 'Ein Bauträger mit europäischem Track Record, ein technischer Partner mit Bauleitung vor Ort, ein Markenteam für den Exit. Drei Rollen, keine Personalunion.',
      },
    ],
  },

  warum: {
    eyebrow: 'WARUM HERBERT RIEGLER',
    h2: 'Was in Österreich funktioniert hat, trägt in Dubai — aus demselben Grund.',
    body: 'Refurbishment scheitert selten am Handwerk. Es scheitert an Steuerung: an Änderungen ohne Freigabe, an Zeitplänen ohne Verbindlichkeit, an Qualität ohne Abnahme. Genau das ist die Disziplin, die ein Bauträger über Jahre lernt — und die sich übertragen lässt.',
    punkte: [
      {
        no: '01',
        title: 'Er hat selbst gebaut, nicht nur vermittelt',
        text: 'Ankauf, Planung, Baustelle, Abnahme, Verkauf — jede Stufe schon einmal verantwortet. Das verändert, wie ein Deal geprüft wird.',
      },
      {
        no: '02',
        title: 'Er kennt die teuren Fehler',
        text: 'Scope Creep, Timeline-Drift, Qualitätsstreuung. Die vier Mechanismen im Modell sind keine Theorie, sondern Reaktionen auf konkrete Erfahrungen.',
      },
      {
        no: '03',
        title: 'Er verdient nach Ihnen',
        text: 'Kapitalrückführung, Vorzugsrendite, dann erst Gewinn-Split. Wer diese Reihenfolge anbietet, hat kein Interesse an einem schnellen Abschluss.',
      },
      {
        no: '04',
        title: 'Er bringt das Netzwerk für den Exit mit',
        text: 'Ein saniertes Objekt ist erst dann ein Ergebnis, wenn es verkauft ist. Der Track Record endet nicht bei der Übergabe.',
      },
    ],
  },

  // TODO: ALLE ZAHLEN UNBESTÄTIGT — Christian hat im Briefing einmal
  // "100 Wohnträume" und einmal "<300 Wohnträume" genannt. Vor dem Livegang
  // von Herbert bestätigen lassen und belegen können.
  kennzahlen: {
    eyebrow: 'TRACK RECORD',
    h2: 'Nachweisbar, nicht behauptet.',
    hinweis: 'Zahlen beziehen sich auf abgeschlossene Projekte der Riegler & Partner Investment Group in Österreich.',
    items: [
      { wert: 300, suffix: ' Mio €', label: 'Projektvolumen abgewickelt' },
      { wert: 15, suffix: '', label: 'Jahre am Markt' },
      { wert: 300, suffix: '', label: 'Wohnträume geschaffen' },
      { wert: 13, suffix: '', label: 'Projekte realisiert' },
    ],
  },

  projekte: {
    eyebrow: 'DIE PROJEKTE',
    h2: 'Gebaut, übergeben, verkauft.',
    body: 'Eine Auswahl abgeschlossener und laufender Projekte der Riegler & Partner Investment Group. Jedes führt auf die Projektseite.',
  },

  zitat: {
    // TODO: Platzhalter — Originalzitat von Herbert einholen.
    text: 'Ein Projekt ist nicht fertig, wenn der letzte Handwerker geht. Es ist fertig, wenn der Käufer unterschrieben hat.',
    autor: 'Herbert Riegler, MBA',
    rolle: 'CEO & Founder',
  },
} as const;
