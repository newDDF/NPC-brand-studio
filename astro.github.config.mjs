// @ts-check
import { defineConfig } from 'astro/config';
import { siteConfig } from './src/config/site';

export default defineConfig({
  site: 'https://newddf.github.io',
  base: '/NPC-brand-studio/',
  i18n: {
    defaultLocale: siteConfig.defaultLocale,
    locales: [...siteConfig.locales],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
