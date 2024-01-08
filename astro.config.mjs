import { defineConfig } from 'astro/config';

// Plugins
import vercel from "@astrojs/vercel/serverless";
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  output: "server",
  adapter: vercel({
    analysis: true,
    speedInsights: {
      enabled: true
    },
    webAnalytics: {
      enabled: true
    }
  })
});
