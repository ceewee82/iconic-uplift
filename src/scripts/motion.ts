// Zentrale Bewegungslogik. Umsetzung des Animations-Grundgesetzes aus
// DEV_SPEC §5 — hier einmal definiert, damit jede Sektion nur noch
// data-Attribute setzen muss statt eigenes GSAP zu schreiben.
//
//   data-reveal          → Element fährt beim Eintritt ein
//   data-reveal-group    → Kinder fahren nacheinander ein (Stagger)
//   data-reveal-delay    → zusätzliche Verzögerung in Sekunden
//   data-draw            → Linie zeichnet sich am Scroll entlang
//                          (Desktop scaleX, Mobil scaleY)
//   data-draw-scope      → Element, dessen Scrollfortschritt die Linie steuert
//
// Ohne JavaScript bleibt alles sichtbar: Versteckt wird erst, wenn dieses
// Modul das Attribut data-motion="ready" gesetzt hat (siehe global.css).

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const DURATION = 0.6;
const DISTANCE = 24; // px — DEV_SPEC §5: nichts bewegt sich weiter als 32
const STAGGER = 0.1;
const EASE = 'power2.out';

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches;

/** Alles sichtbar schalten — für reduced motion und als Sicherheitsnetz. */
function revealAllInstantly() {
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
  document
    .querySelectorAll<HTMLElement>('[data-reveal-group] > *')
    .forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  // Linien vollständig gezeichnet statt animiert
  document.querySelectorAll<HTMLElement>('[data-draw]').forEach((el) => {
    el.style.transform = 'none';
  });
}

/**
 * Verbindungslinien, die sich am Scrollfortschritt entlang zeichnen
 * (DEV_SPEC §4, Sektion PrimeRefine). Waagerecht auf dem Desktop,
 * senkrecht auf Mobilgeräten — gsap.matchMedia räumt beim Wechsel
 * der Breakpoints selbst auf.
 */
function initDraw() {
  const mm = gsap.matchMedia();

  document.querySelectorAll<HTMLElement>('[data-draw]').forEach((line) => {
    const scope =
      (line.closest('[data-draw-scope]') as HTMLElement | null) ??
      line.parentElement;
    if (!scope) return;

    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const isDesktop = Boolean(context.conditions?.isDesktop);
        const property = isDesktop ? 'scaleX' : 'scaleY';

        gsap.set(line, {
          [property]: 0,
          transformOrigin: isDesktop ? 'left center' : 'center top',
        });

        gsap.to(line, {
          [property]: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: scope,
            start: 'top 70%',
            end: 'bottom 75%',
            scrub: 0.6, // folgt dem Scrollen mit leichter Verzögerung
          },
        });
      },
    );
  });
}

function initReveals() {
  gsap.registerPlugin(ScrollTrigger);

  // Bewusst gsap.set + gsap.to statt gsap.from: Das CSS versteckt die
  // Elemente bereits (gegen Flackern vor dem Skriptstart). gsap.from würde
  // diesen Nullwert als *Ziel* auslesen und von 0 nach 0 animieren — die
  // Inhalte blieben unsichtbar. Beide Zustände werden deshalb ausgeschrieben.
  const animate = (targets: Element | Element[], source: HTMLElement, stagger = 0) => {
    gsap.set(targets, { opacity: 0, y: DISTANCE });
    gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: DURATION,
      ease: EASE,
      stagger,
      delay: Number(source.dataset.revealDelay ?? 0),
      scrollTrigger: {
        trigger: source,
        start: 'top 85%',
        once: true, // DEV_SPEC §5: Einstiegs-Reveals laufen einmalig
      },
    });
  };

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    animate(el, el);
  });

  document
    .querySelectorAll<HTMLElement>('[data-reveal-group]')
    .forEach((group) => {
      const children = Array.from(group.children);
      if (children.length === 0) return;
      animate(children, group, STAGGER);
    });
}

function initSmoothScroll() {
  // Lenis mit lerp 0.1 laut DEV_SPEC §1 ("Apple-Feel").
  const lenis = new Lenis({ lerp: 0.1 });

  // Lenis und ScrollTrigger müssen sich denselben Takt teilen, sonst
  // feuern die Trigger an falschen Positionen.
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Anker-Navigation kompatibel halten (DEV_SPEC §1)
  document.addEventListener('click', (event) => {
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>(
      'a[href^="#"]',
    );
    if (!link) return;
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    lenis.scrollTo(target as HTMLElement);
  });
}

if (prefersReducedMotion) {
  // Kein Smooth Scroll, keine Reveals — Inhalte stehen sofort.
  revealAllInstantly();
} else {
  document.documentElement.dataset.motion = 'ready';
  try {
    initReveals();
    initDraw();
    initSmoothScroll();
  } catch (error) {
    // Sicherheitsnetz: Scheitert die Animation, darf der Inhalt nicht
    // unsichtbar zurückbleiben — lieber ohne Bewegung als ohne Seite.
    console.error('[motion] Initialisierung fehlgeschlagen:', error);
    revealAllInstantly();
  }
}
