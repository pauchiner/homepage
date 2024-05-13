import {defineConfig} from 'astro/config';

import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://pauchiner.es',
  integrations: [preact(), sitemap()],
  output: 'static',
});
