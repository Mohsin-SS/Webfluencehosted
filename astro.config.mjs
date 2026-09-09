// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import svelte from '@astrojs/svelte';

// Keystatic requires a server runtime, so it is only loaded for local editing
// (`npm run dev`). The GitHub Pages build is fully static.
const enableKeystatic =
  !process.env.SKIP_KEYSTATIC && process.env.NODE_ENV !== 'production';

// https://astro.build/config
export default defineConfig({
  // The `site` property specifies the base URL for your site.
  site: 'https://www.webfluence.tech',
  prefetch: true,
  trailingSlash: 'never',
  experimental: {
    clientPrerender: true,
  },
  integrations: [
    react(),
    markdoc(),
    ...(enableKeystatic ? [keystatic()] : []),
    svelte(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  build: {
    format: 'file',
  },
});
