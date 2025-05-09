import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static', // Changed from 'server' to 'static' for GitHub Pages
  site: 'https://agro-agents.github.io',
  base: '/agro-agents-landing',
  i18n: { 
    locales: ['en','es'], 
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false
    }
  },
  build: { 
    format: 'file' 
  },
});
