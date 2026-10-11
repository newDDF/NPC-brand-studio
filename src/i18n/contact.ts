const contactTranslations = {
  en: {
    eyebrow: '04 / GET IN TOUCH',
    titleLine1: "Let's build something",
    titleLine2: 'that works better.',
    buttonLabel: 'Start a conversation',
  },
  'zh-cn': {
    eyebrow: '04 / 联系我们',
    titleLine1: '让我们携手打造',
    titleLine2: '更好的解决方案。',
    buttonLabel: '开始沟通',
  },
  es: {
    eyebrow: '04 / CONTACTO',
    titleLine1: 'Construyamos algo',
    titleLine2: 'que funcione mejor.',
    buttonLabel: 'Iniciar una conversación',
  },
  de: {
    eyebrow: '04 / KONTAKT',
    titleLine1: 'Lassen Sie uns etwas',
    titleLine2: 'Besseres entwickeln.',
    buttonLabel: 'Gespräch beginnen',
  },
  fr: {
    eyebrow: '04 / CONTACT',
    titleLine1: 'Ensemble, créons',
    titleLine2: 'de meilleures solutions.',
    buttonLabel: 'Entrer en contact',
  },
  ja: {
    eyebrow: '04 / お問い合わせ',
    titleLine1: 'より良いものを',
    titleLine2: '一緒につくりましょう。',
    buttonLabel: 'お問い合わせ',
  },
} as const;

export function getContactTranslations(locale: string) {
  const key = locale.toLowerCase() as keyof typeof contactTranslations;
  return contactTranslations[key] ?? contactTranslations.en;
}
