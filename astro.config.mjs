import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://www.susannaq.fi",
  server: {
    host: true
  },
  output: "server",
  adapter: netlify(),
  compressHTML: true,
  build: {
    inlineStylesheets: `always`,
  }
});
