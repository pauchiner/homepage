import {defineConfig} from 'astro/config';

// Plugins
import vercel from '@astrojs/vercel/static';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});
