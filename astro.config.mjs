// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: finale Domain eintragen, sobald sie feststeht (DEV_SPEC §8).
  // Wird für Sitemap, hreflang und OG-URLs gebraucht.
  site: 'https://iconicuplift.com',

  // DE ist Default und liegt auf "/", EN wird unter "/en/" vorbereitet.
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
