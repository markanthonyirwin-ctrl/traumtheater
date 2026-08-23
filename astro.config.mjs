// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output. Every page must ship complete HTML in the raw response —
// that is the entire reason this site moved off client-side React.
export default defineConfig({
  site: 'https://traum-theater.de',
  output: 'static',
  // 'always' matches what Netlify actually serves with format: 'directory'.
  // Under 'ignore', canonical and hreflang were emitted without the slash while
  // the server 301'd to the slash form, so every canonical pointed at a
  // redirect. See the withSlash helper in Base.astro.
  trailingSlash: 'always',
  build: {
    // /impressum/index.html rather than /impressum.html, so URLs stay clean
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
