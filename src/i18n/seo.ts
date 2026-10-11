const seoTranslations = {
  en: {
    title: 'NPC Precision',
    description: 'Precision manufacturing and engineered solutions for demanding industries.',
  },
  'zh-cn': {
    title: 'NPC Precision｜精密制造与工程解决方案',
    description: '为严苛的工业应用提供精密制造、工程设计与可靠的定制化解决方案。',
  },
  es: {
    title: 'NPC Precision | Fabricación de precisión',
    description: 'Fabricación de precisión y soluciones de ingeniería para industrias exigentes.',
  },
  de: {
    title: 'NPC Precision | Präzisionsfertigung',
    description: 'Präzisionsfertigung und technische Lösungen für anspruchsvolle Industrien.',
  },
  fr: {
    title: 'NPC Precision | Fabrication de précision',
    description: 'Fabrication de précision et solutions d’ingénierie pour les secteurs exigeants.',
  },
  ja: {
    title: 'NPC Precision｜精密製造とエンジニアリング',
    description: '高度な産業ニーズに応える精密製造とエンジニアリングソリューションを提供します。',
  },
} as const;

export function getSeoTranslations(locale: string) {
  const key = locale.toLowerCase() as keyof typeof seoTranslations;
  return seoTranslations[key] ?? seoTranslations.en;
}
