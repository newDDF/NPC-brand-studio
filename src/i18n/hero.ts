const heroTranslations = {
  en: {
    description: 'We turn complex engineering challenges into dependable, high-performance manufacturing solutions.',
    primaryButton: 'Explore our capabilities',
    secondaryButton: 'Discover our approach',
    visualCaption: 'PRECISION IN EVERY DETAIL',
    metaLeft: 'BUILT ON PRECISION',
    metaCenter: "DESIGNED FOR WHAT'S NEXT",
  },
  'zh-cn': {
    description: '将复杂的工程挑战转化为可靠、高性能的制造解决方案。',
    primaryButton: '探索我们的能力',
    secondaryButton: '了解我们的理念',
    visualCaption: '精于每一个细节',
    metaLeft: '以精密为本',
    metaCenter: '为未来而设计',
  },
  es: {
    description: 'Convertimos retos complejos de ingeniería en soluciones de fabricación fiables y de alto rendimiento.',
    primaryButton: 'Descubra nuestras capacidades',
    secondaryButton: 'Conozca nuestro enfoque',
    visualCaption: 'PRECISIÓN EN CADA DETALLE',
    metaLeft: 'CONSTRUIDO CON PRECISIÓN',
    metaCenter: 'DISEÑADO PARA EL FUTURO',
  },
  de: {
    description: 'Wir verwandeln komplexe technische Herausforderungen in zuverlässige, leistungsstarke Fertigungslösungen.',
    primaryButton: 'Unsere Kompetenzen',
    secondaryButton: 'Unseren Ansatz entdecken',
    visualCaption: 'PRÄZISION BIS INS DETAIL',
    metaLeft: 'PRÄZISION ALS GRUNDLAGE',
    metaCenter: 'FÜR DIE ZUKUNFT ENTWICKELT',
  },
  fr: {
    description: 'Nous transformons les défis techniques complexes en solutions de fabrication fiables et performantes.',
    primaryButton: 'Découvrir nos compétences',
    secondaryButton: 'Notre approche',
    visualCaption: 'LA PRÉCISION DANS CHAQUE DÉTAIL',
    metaLeft: 'LA PRÉCISION AVANT TOUT',
    metaCenter: 'CONÇU POUR L’AVENIR',
  },
  ja: {
    description: '複雑なエンジニアリング課題を、信頼性の高い高性能な製造ソリューションへと変えます。',
    primaryButton: '技術・対応力を見る',
    secondaryButton: '私たちの取り組み',
    visualCaption: '細部に宿る精密さ',
    metaLeft: '精密さを追求',
    metaCenter: '未来を見据えた設計',
  },
} as const;

export function getHeroTranslations(locale: string) {
  const key = locale.toLowerCase() as keyof typeof heroTranslations;
  return heroTranslations[key] ?? heroTranslations.en;
}
