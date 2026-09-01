# IconicUplift Website — Dev-Spezifikation v1.0 (01.09.2026)

Grundlage für die Umsetzung mit Claude Code. Design-Referenz: Claude-Design-Canvas „IconicUplift Website" (Seite „Design v1 · Home": Desktop-Artboard 1440 px + Mobile-Artboard 390 px). Copy: `website-copy-de.md` (verbindlich, 1:1).

## 1 · Tech-Stack (Empfehlung)
- **Framework: Astro** (statischer Output, Content-Collections, Insel-Architektur — ideal für eine Marketing-Site auf Hostinger). Alternative, falls später App-Features geplant: Next.js mit `output: 'export'`.
- **Styling:** Tailwind CSS v4 mit den Design-Tokens aus CLAUDE.md als CSS-Variablen; komponentenweise BEM-freie Utility-Klassen.
- **Animation:** GSAP + ScrollTrigger (Sektions-Reveals, Zahlen, Progress) + **Lenis** (Smooth Scroll, Apple-Feel). Hero-Slider als eigene leichte Komponente (Pointer Events, kein Library-Overhead).
- **i18n:** Astro-i18n-Routing, `de` als Default, `en` vorbereitet (Strings ausgelagert).
- **Forms:** POST an `/api/`-Endpoint ist statisch nicht möglich → PHP-Mailer auf Hostinger (`/forms/submit.php`) oder Formspark/Basin; Spam-Schutz: Honeypot + Zeit-Check, kein Captcha in v1.
- **Hosting:** Hostinger Dev-Server (statisches Deploy). CI: GitHub Action → Build → Deploy via SFTP/rsync auf Dev; später Prod-Workflow mit Tag-Release.

## 2 · Repo-Struktur (Soll)
```
/docs                  ← CLAUDE.md-Quellen: DEV_SPEC.md, website-copy-de.md, ASSETS.md
/public/assets/img     ← optimierte Bilder (AVIF/WebP + Fallback)
/public/assets/video   ← timelapse.mp4 (+ .webm), Poster-Frames
/src/components        ← Section-Komponenten (ein File je Home-Sektion)
/src/content           ← Copy als strukturierte Daten (de/, en/)
/src/layouts           ← Base-Layout (Head, Nav, Footer, SEO)
/src/pages             ← index, investors, owners, process, tiers, visualisation, team, contact, impressum, datenschutz
```

## 3 · Seiten (Sitemap)
`/` Home · `/investors` · `/owners` · `/process` · `/tiers` · `/visualisation` · `/team` · `/contact` · `/impressum` · `/datenschutz` (+ `/en/...` vorbereitet). Gates: Investor-Pack-Formular als Sektion auf Home/Investors + eigenes Modal; Deal-einreichen als Formular-Seite oder Modal.

## 4 · Home — Sektions-Spec (Reihenfolge fix)
| # | Sektion | Kern-Verhalten |
|---|---|---|
| 1 | Nav | transparent über Hero, nach 80 px Scroll: bg #0B0B0C/90 + blur, Hairline unten. Burger-Overlay fullscreen. |
| 2 | Hero Before/After | Vollbild-Slider: 2 Bilder, Trennlinie gold, Griff ⇄ per Drag/Touch (Desktop: horizontal @50 % Start; Mobile: vertikaler Split ⇅). Headline zentriert, Auto-Demo: Linie fährt beim Load einmal sanft 45→55 %. |
| 3 | Trust Bar | statisch, Marcellus-Endorsement. |
| 4 | Problem | 2-col (42/58), 4 Karten staggered Reveal (y+24px, opacity, 0.1s Stagger). |
| 5 | PrimeRefine | Desktop: 5 Steps horizontal, Verbindungslinie zeichnet sich per ScrollTrigger (scaleX). Mobile: vertikale Timeline. Step 5 goldgefüllt. |
| 6 | Dual Track | 2 Karten (Mobile gestapelt), Hover: Radial-Glow verstärkt sich, Pfeil-Link schiebt 4 px. |
| 7 | Tiers | Desktop: 3 Karten, Signature mit Gold-Border. Mobile: horizontaler Snap-Scroll (scroll-snap-x) mit Indikator. |
| 8 | Showcase/VR | Golden-Hour-Gradient-Bühne, Video-Placeholder mit Play (öffnet Modal/Lightbox, Inhalt folgt), Track-Record-Zeile. |
| 8b | **Timelapse** | `<video>` 25-Sek-MP4: autoplay muted loop playsinline, Lazy-Load erst im Viewport (IntersectionObserver, `preload="none"`, Poster = letztes Frame). Overlay: Label oben, 6 Phasen-Labels + echter Fortschrittsbalken gekoppelt an `timeupdate`. Phasen-Icon-Leiste darunter (6 SVGs aus Design übernehmen), aktive Phase highlighted nach currentTime (0/5/10/15/20 s). |
| 9 | Economics | Wasserfall: 3 Zeilen sliden nacheinander rein, Zeile 3 mit Gold-Border zuletzt. |
| 10 | Zielgebiete | SVG-Karte: Pfade zeichnen sich (stroke-dashoffset), Punkte poppen, Karten rechts. |
| 11 | Team | 3 Portraits (Platzhalter bis Fotos da), Powered-by-Zeile. |
| 12 | Final CTA | Radial-Glow pulst subtil (8 s Loop), Formular inline. |
| 13 | Footer | statisch. |

## 5 · Animations-Grundgesetz
- Einstieg-Reveals: `opacity 0→1, y 24→0, 0.6 s, ease power2.out`, einmalig (`once: true`).
- Stagger max. 0.12 s; nichts bewegt sich > 32 px.
- Lenis smooth scroll: `lerp 0.1`; Anker-Navigation damit kompatibel halten.
- Alles unter `@media (prefers-reduced-motion: reduce)` deaktivieren (Video bleibt, Autoplay ohne Bewegungseffekte).

## 6 · SEO & Meta
- Title/Description je Seite aus `website-copy-de.md` übernehmen.
- OG-Image: Hero-After-Motiv 1200×630 (aus Asset-PNG bauen).
- `hreflang` de/en vorbereitet, Sitemap.xml + robots.txt generieren.
- Schema.org: `Organization` + `WebSite`; keine Finanz-Claims in strukturierten Daten.

## 7 · Definition of Done (je Sektion)
1. Pixel-Abgleich gegen Canvas (Desktop 1440 / Mobile 390) — Abweichungen nur mit Begründung.
2. Lighthouse mobil ≥ 95 Performance.
3. Keyboard-navigierbar, sichtbarer Fokus, Alt-Texte.
4. Reduced-Motion geprüft.
5. Copy 1:1 aus dem Copy-Dokument (Diff-Check).

## 8 · Offene Punkte (vor/bei Dev-Start klären)
- Finale Domain + E-Mail (Platzhalter office@iconicuplift.com)
- Logo als Vektor (SVG/AI) von der Grafikerin — PNGs liegen vor, Vektor für Web nötig
- Team-Fotos + finale Bios, Track-Record-Bilder von Riegler & Partner
- VR-Demo-Inhalt für Showcase-Modal
- Formular-Backend-Entscheidung (PHP-Mail vs. Form-Service) + DSGVO-Texte vom Anwalt
- EN-Übersetzungsrunde nach DE-Freigabe
