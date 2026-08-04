// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output. Every page must ship complete HTML in the raw response —
// that is the entire reason this site moved off client-side React.
export default defineConfig({
  site: 'https://traum-theater.de',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    // /impressum/index.html rather than /impressum.html, so URLs stay clean
    format: 'directory',
  },
  integrations: [
    sitemap({
      // /beispiel-deutung is a placeholder until Mark supplies the real
      // anonymised example. Keep it out of the sitemap while it is noindex.
      filter: (page) => !page.includes('/404') && !page.includes('/beispiel-deutung'),
    }),
  ],
});
