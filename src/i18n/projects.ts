const projectsTranslations = {
  en: {
    eyebrow: '03 / SELECTED WORK',
    titleLine1: 'Built to perform.',
    titleLine2: 'Proven in practice.',
    buttonLabel: 'Discuss a project',
  },
  'zh-cn': {
    eyebrow: '03 / 精选项目',
    titleLine1: '为卓越性能而打造。',
    titleLine2: '以实践验证实力。',
    buttonLabel: '洽谈项目',
  },
  es: {
    eyebrow: '03 / PROYECTOS DESTACADOS',
    titleLine1: 'Diseñado para rendir.',
    titleLine2: 'Probado en la práctica.',
    buttonLabel: 'Hablemos de su proyecto',
  },
  de: {
    eyebrow: '03 / AUSGEWÄHLTE PROJEKTE',
    titleLine1: 'Für Leistung entwickelt.',
    titleLine2: 'In der Praxis bewährt.',
    buttonLabel: 'Projekt besprechen',
  },
  fr: {
    eyebrow: '03 / PROJETS SÉLECTIONNÉS',
    titleLine1: 'Conçu pour la performance.',
    titleLine2: 'Éprouvé sur le terrain.',
    buttonLabel: 'Parlons de votre projet',
  },
  ja: {
    eyebrow: '03 / 注目のプロジェクト',
    titleLine1: '性能を追求したものづくり。',
    titleLine2: '実践で証明された品質。',
    buttonLabel: 'プロジェクトを相談する',
  },
} as const;

export function getProjectsTranslations(locale: string) {
  const key = locale.toLowerCase() as keyof typeof projectsTranslations;
  return projectsTranslations[key] ?? projectsTranslations.en;
}
