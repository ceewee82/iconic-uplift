# IconicUplift Website

Marketing-Website für IconicUplift — Bestandsvillen-Refurbishment in Dubai.
A Riegler & Partner Company.

## Schnellstart

```bash
npm install
npm run dev
```

Dev-Server: http://localhost:4321

## Dokumentation

Verbindliche Quellen liegen unter `docs/`:

| Datei | Inhalt |
|---|---|
| [`CLAUDE.md`](CLAUDE.md) | Projektregeln, Design-System, Arbeitsweise |
| [`docs/DEV_SPEC.md`](docs/DEV_SPEC.md) | Tech-Stack, Sektions-Specs, Definition of Done |
| [`docs/website-copy-de.md`](docs/website-copy-de.md) | Copy (verbindlich, 1:1 übernehmen) |
| [`docs/ASSETS.md`](docs/ASSETS.md) | Bild-, Video- und Logo-Quellen |

## Rohmaterial

Die Quell-Assets (Hero, Timelapse, Keyframes) sind bewusst **nicht** im Git.
Sie liegen lokal unter `docs/assets-src/` und gesichert in Dropbox unter
`/claude/iconic-uplift/`. Ins Repo kommen nur die Bilder, die Astro im Build
verarbeitet (`src/assets/img/`).
