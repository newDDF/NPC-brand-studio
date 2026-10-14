const projectsTranslations = {
  en: {
    eyebrow: '03 / THE WHEEL COLLECTION',
    titleLine1: 'Designed with intent.',
    titleLine2: 'Made to make a difference.',
    buttonLabel: 'Explore a project',
  },
  'zh-cn': {
    eyebrow: '03 / 轮毂设计系列',
    titleLine1: '设计，源于明确的追求。',
    titleLine2: '性能，体现在每处细节。',
    buttonLabel: '探讨合作项目',
  },
  es: {
    eyebrow: '03 / COLECCIÓN DE LLANTAS',
    titleLine1: 'Diseñado con intención.',
    titleLine2: 'Creado para marcar la diferencia.',
    buttonLabel: 'Explorar un proyecto',
  },
  de: {
    eyebrow: '03 / DIE FELGENKOLLEKTION',
    titleLine1: 'Mit klarer Absicht gestaltet.',
    titleLine2: 'Für spürbare Unterschiede entwickelt.',
    buttonLabel: 'Projekt entdecken',
  },
  fr: {
    eyebrow: '03 / COLLECTION DE JANTES',
    titleLine1: 'Un design pensé avec intention.',
    titleLine2: 'Pour faire la différence.',
    buttonLabel: 'Découvrir un projet',
  },
  ja: {
    eyebrow: '03 / ホイールコレクション',
    titleLine1: '明確な意図から生まれるデザイン。',
    titleLine2: '細部から違いを生み出す。',
    buttonLabel: 'プロジェクトを見る',
  },
} as const;

export function getProjectsTranslations(locale: string) {
  const key = locale.toLowerCase() as keyof typeof projectsTranslations;
  return projectsTranslations[key] ?? projectsTranslations.en;
}
