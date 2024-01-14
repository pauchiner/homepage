import { defineConfig } from 'astro/config';

// Plugins
import vercel from '@astrojs/vercel/static';
import preact from '@astrojs/preact';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://pauchiner.es',
  integrations: [preact(), sitemap()],
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});
