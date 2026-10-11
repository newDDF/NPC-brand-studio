const aboutTranslations = {
  en: {
    eyebrow: '01 / WHO WE ARE',
    title: 'Engineering that moves industry forward.',
    description: 'From material selection to final production, we combine engineering discipline, modern manufacturing, and a commitment to consistent quality.',
    linkLabel: 'Learn about our approach',
  },
  'zh-cn': {
    eyebrow: '01 / 关于我们',
    title: '以工程创新推动产业进步。',
    description: '从材料选择到最终生产，我们融合严谨的工程技术、现代化制造工艺，以及对稳定品质的持续追求。',
    linkLabel: '了解我们的理念',
  },
  es: {
    eyebrow: '01 / QUIÉNES SOMOS',
    title: 'Ingeniería que impulsa la industria.',
    description: 'Desde la selección de materiales hasta la producción final, combinamos rigor técnico, fabricación moderna y un compromiso con la calidad constante.',
    linkLabel: 'Conozca nuestro enfoque',
  },
  de: {
    eyebrow: '01 / ÜBER UNS',
    title: 'Engineering, das die Industrie voranbringt.',
    description: 'Von der Materialauswahl bis zur Fertigung verbinden wir technische Präzision, moderne Produktionsverfahren und konsequente Qualitätsorientierung.',
    linkLabel: 'Unseren Ansatz kennenlernen',
  },
  fr: {
    eyebrow: '01 / QUI SOMMES-NOUS',
    title: 'L’ingénierie au service du progrès industriel.',
    description: 'Du choix des matériaux à la production finale, nous associons rigueur technique, fabrication moderne et engagement durable envers la qualité.',
    linkLabel: 'Découvrir notre approche',
  },
  ja: {
    eyebrow: '01 / 私たちについて',
    title: 'エンジニアリングで産業の未来を切り拓く。',
    description: '材料選定から最終製造まで、確かな技術力、先進的な製造プロセス、そして一貫した品質へのこだわりを融合します。',
    linkLabel: '私たちの取り組み',
  },
} as const;

export function getAboutTranslations(locale: string) {
  const key = locale.toLowerCase() as keyof typeof aboutTranslations;
  return aboutTranslations[key] ?? aboutTranslations.en;
}
