const capabilitiesTranslations = {
  en: {
    eyebrow: '02 / WHAT WE DO',
    title: 'Capability meets precision.',
    cards: [
      { title: 'Precision Components', description: 'Reliable components engineered to meet demanding specifications.' },
      { title: 'Advanced Manufacturing', description: 'Scalable production supported by process control and expertise.' },
      { title: 'Custom Engineering', description: 'Practical solutions developed around your application.' },
    ],
  },
  'zh-cn': {
    eyebrow: '02 / 我们的业务',
    title: '以精密制造成就卓越。',
    cards: [
      { title: '精密零部件', description: '以可靠的零部件满足严苛的技术规格与应用要求。' },
      { title: '先进制造', description: '依托成熟的工艺控制与专业经验，实现稳定、可扩展的生产。' },
      { title: '定制工程', description: '围绕具体应用需求，开发切实可行的工程解决方案。' },
    ],
  },
  es: {
    eyebrow: '02 / QUÉ HACEMOS',
    title: 'Capacidad con precisión.',
    cards: [
      { title: 'Componentes de precisión', description: 'Componentes fiables diseñados para cumplir especificaciones exigentes.' },
      { title: 'Fabricación avanzada', description: 'Producción escalable respaldada por control de procesos y experiencia.' },
      { title: 'Ingeniería a medida', description: 'Soluciones prácticas desarrolladas para cada aplicación.' },
    ],
  },
  de: {
    eyebrow: '02 / UNSERE LEISTUNGEN',
    title: 'Leistungsfähigkeit trifft Präzision.',
    cards: [
      { title: 'Präzisionskomponenten', description: 'Zuverlässige Komponenten für anspruchsvolle technische Anforderungen.' },
      { title: 'Moderne Fertigung', description: 'Skalierbare Produktion mit kontrollierten Prozessen und fundiertem Fachwissen.' },
      { title: 'Individuelle Entwicklung', description: 'Praxisnahe Lösungen, abgestimmt auf Ihre Anwendung.' },
    ],
  },
  fr: {
    eyebrow: '02 / NOS ACTIVITÉS',
    title: 'La performance au service de la précision.',
    cards: [
      { title: 'Composants de précision', description: 'Des composants fiables conçus pour répondre aux spécifications les plus exigeantes.' },
      { title: 'Fabrication avancée', description: 'Une production évolutive soutenue par la maîtrise des procédés et l’expertise.' },
      { title: 'Ingénierie sur mesure', description: 'Des solutions concrètes développées selon les besoins de votre application.' },
    ],
  },
  ja: {
    eyebrow: '02 / 事業内容',
    title: '技術力と精密さの融合。',
    cards: [
      { title: '精密部品', description: '厳しい仕様や要求に応える、信頼性の高い部品を設計・製造します。' },
      { title: '先進製造', description: '工程管理と専門技術に支えられた、拡張性の高い生産体制を提供します。' },
      { title: 'カスタムエンジニアリング', description: '用途や課題に合わせた、実用的なエンジニアリングソリューションを開発します。' },
    ],
  },
} as const;

export function getCapabilitiesTranslations(locale: string) {
  const key = locale.toLowerCase() as keyof typeof capabilitiesTranslations;
  return capabilitiesTranslations[key] ?? capabilitiesTranslations.en;
}
