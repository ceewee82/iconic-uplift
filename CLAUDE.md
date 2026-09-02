# CLAUDE.md — IconicUplift Website

Diese Datei steuert Claude Code in diesem Repo. Vor jeder Arbeit lesen.

## Projekt
Marketing-Website für **IconicUplift** — Bestandsvillen-Refurbishment-Company in Dubai (A Riegler & Partner Company). Zielgruppe: DACH-Investoren (primär) und Villa-Eigentümer in Dubai. Sprache: **DE-first**, EN-Switch vorbereitet (i18n-Routing `/` = DE, `/en/` = EN; EN-Texte kommen später).

## Verbindliche Quellen (in diesem Repo unter /docs)
- `docs/DEV_SPEC.md` — Tech-Stack, Sektions-Specs, Animations-Spec, Definition of Done
- `docs/website-copy-de.md` — die komplette Copy. **Copy niemals umformulieren oder "verbessern"** — 1:1 übernehmen; Änderungswünsche gehen an Christian.
- `docs/ASSETS.md` — Bild-/Video-/Logo-Quellen
- Design-Referenz: Claude-Design-Canvas „IconicUplift Website" (Desktop 1440 + Mobile 390, Seite „Design v1 · Home")

## Design-System (fix, nicht verhandelbar)
```css
--black: #0B0B0C;      /* Grundfläche */
--surface: #121210;    /* Karten */
--line: #1f1f1d;       /* Hairlines */
--gold: #B08D57;       /* Primär-Gold (CTAs, Akzente) */
--gold-light: #C6A15B; /* Hover/Highlights */
--gold-bright: #E0BC7A;/* Golden-Hour-Momente */
--text: #F5F4F0;       /* Headlines */
--text-soft: #9A9A94;  /* Body */
--text-dim: #6B6B66;   /* Labels/Meta */
```
Fonts (Google Fonts, self-hosted einbinden): **Space Grotesk** (Display/Headlines, 300–600), **Archivo** (Body, 300–500), **Marcellus** (nur Riegler-Endorsement-Zeilen).
Look: „Obsidian × Golden Hour" — dunkler Monolith, goldene Haarlinien, warme Licht-Momente nur an emotionalen Stellen (Hero rechts, Showcase, Final-CTA-Glow). Keine runden Ecken außer Kreisen, keine Schatten-Orgien, viel Weißraum (bzw. Schwarzraum).

## Regeln
1. **Compliance:** Keine Renditezahlen, Multiples oder Projektionen im Code/Content. Disclaimer „Kein öffentliches Angebot, keine Anlageberatung" auf jeder investorennahen Seite und im Footer.
2. **Logo:** Nur die finalen Logo-Dateien der Grafikerin verwenden (siehe ASSETS.md). Endorsement immer exakt: `A RIEGLER & PARTNER COMPANY` (Versalien, Marcellus).
3. **Performance-Budget:** Lighthouse ≥ 95 Performance/SEO/Best Practices, LCP < 2,0 s. Bilder als AVIF/WebP mit `srcset`, Video lazy per IntersectionObserver, Fonts `font-display: swap` + Preload.
4. **Animationen:** dezent und hochwertig (Spec in DEV_SPEC.md §5). Alles hinter `prefers-reduced-motion` absichern. Keine Animation über 0,8 s Dauer außer Hero-Reveal und Timelapse.
5. **Kein CMS in Phase 1.** Inhalte als strukturierte Daten (`src/content/` bzw. JSON/MD) — so bleibt die Copy diffbar.
6. **Barrierefreiheit:** Kontrast auf Dunkelgrund prüfen (Gold #B08D57 auf #0B0B0C nur für Großtext/Labels), Fokus-Stile, Alt-Texte, ein `<h1>` pro Seite.
7. **Formulare:** Investor-Pack- und Deal-Form zunächst an einen Mail-Endpoint (Hostinger PHP-Mail oder externer Form-Service) — Ziel-Adresse per ENV, Double-Opt-in-Hinweis in DSGVO-Text. Keine Daten in Git.
8. **Git:** Conventional Commits (`feat:`, `fix:`, `content:`), Branch je Feature, `main` = deploybar. Deploy auf Hostinger-Dev-Server per Git-Deploy oder FTP-Action (Zugang kommt von Christian, als GitHub Secrets ablegen).

## Befehle
```bash
npm run dev       # lokaler Dev-Server auf http://localhost:4321
npm run build     # Produktions-Build (statisch) nach dist/
npm run preview   # Build lokal prüfen
npm run check     # Astro-Typecheck
```

Node liegt auf diesem Mac unter `~/.local/node` (v24.20.0 LTS, kein systemweiter
Install). Der PATH wird über `~/.zshrc` gesetzt — in einem frischen Terminal ist
`node` also da. Prozesse ohne Login-Shell (z. B. der Preview-Launcher) brauchen
den absoluten Pfad, siehe `.claude/launch.json`.

## Stack (Stand Scaffold)
- **Astro 7** statisch, i18n-Routing aktiv (`/` = DE, `/en/` vorbereitet)
- **Tailwind CSS v4** über `@tailwindcss/vite`; die Design-Tokens stehen als
  `@theme` in `src/styles/global.css` und erzeugen Utilities (`text-gold`, …)
- **Fonts self-hosted** über `@fontsource` — keine Requests an Google
- **GSAP + Lenis** installiert, noch nicht verdrahtet (kommt mit Sektion 1)
- Bilder liegen in `src/assets/img/` und werden im Build von Astro/sharp
  automatisch nach AVIF/WebP in mehreren Breiten abgeleitet — keine Handexporte

## Arbeitsweise
- Sektionsweise bauen und jeweils gegen das Design-Canvas (Desktop + Mobile) abgleichen.
- Nach jeder Sektion: Screenshot-Vergleich Desktop 1440 / Mobile 390.
- Unklarheiten → Frage an Christian, nicht raten. Insbesondere: finale Domain, E-Mail-Adressen, Team-Fotos/Bios, Track-Record-Bilder.
