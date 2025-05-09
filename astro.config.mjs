import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://agro-agents.github.io',
  base: '/landing', 
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
    }
  },
  build: {
    format: 'directory',
  },
});
