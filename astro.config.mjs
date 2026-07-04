import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bojanmilinic.com',
  integrations: [
    tailwind(),
    sitemap({
      // /sitemap is an internal dev page, /booking-confirmed is only reachable
      // after form submit, /globe is a redirect stub to /globe-v2
      filter: (page) =>
        !page.includes('/sitemap/') &&
        !page.includes('/booking-confirmed/') &&
        !page.endsWith('/globe/'),
    }),
  ],
  output: 'static',
});
