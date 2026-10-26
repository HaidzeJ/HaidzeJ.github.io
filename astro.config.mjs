// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://haidzej.github.io',
  // Generates sitemap-index.xml + sitemap-0.xml at build time, listing every
  // page so search engines can find them. It uses `site` above for full URLs.
  integrations: [sitemap()],
});
