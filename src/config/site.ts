export const siteConfig = {
  // Brand identity
  name: 'NPC Precision',
  legalName: 'NPC Precision',
  logo: '/images/brand/logo.svg',
  tagline: 'Precision engineered. Purpose built.',
  description:
    'Precision manufacturing and engineered solutions for demanding industries.',
  url: 'https://npc-brand-studio.pages.dev',

  // Localization
  defaultLocale: 'en',
  locales: ['en', 'zh-cn', 'es', 'de', 'fr', 'ja'],

  // Visual identity
  theme: {
    preset: 'industrial',
    mode: 'light',
    accent: '#2457C5',
    fontFamily: 'system',
  },

  // Navigation
  navigation: [
    { label: 'About', href: '#about', feature: 'about' },
    { label: 'Products', href: '#products', feature: 'products' },
    { label: 'Projects', href: '#projects', feature: 'projects' },
    { label: 'News', href: '#news', feature: 'news' },
  ],

  // Contact information
  contact: {
    email: 'newnpcx2@proton.me',
  },

  // Optional sections
  features: {
    about: true,
    products: true,
    capabilities: true,
    projects: true,
    news: true,
    contact: true,
    search: false,
  },
} as const;

export type SiteConfig = typeof siteConfig;
