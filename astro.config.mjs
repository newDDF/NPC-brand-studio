// @ts-check
import { defineConfig } from 'astro/config';
import { siteConfig } from './src/config/site';

export default defineConfig({
  i18n: {
    defaultLocale: siteConfig.defaultLocale,
    locales: [...siteConfig.locales],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
