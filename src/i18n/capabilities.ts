const capabilitiesTranslations = {
  en: {
    eyebrow: '02 / ENGINEERED FOR PERFORMANCE',
    title: 'Wheel engineering without compromise.',
    cards: [
      {
        title: 'Forged Wheel Design',
        description:
          'Purposeful spoke geometry and refined proportions, designed to balance visual character with performance requirements.',
      },
      {
        title: 'Advanced Materials',
        description:
          'Material-conscious engineering and precision manufacturing concepts developed for demanding road and track applications.',
      },
      {
        title: 'Precision Quality',
        description:
          'A detail-driven approach to dimensional accuracy, surface finish, and consistent production standards.',
      },
    ],
  },
  'zh-cn': {
    eyebrow: '02 / 性能工程',
    title: '以精密工程，释放轮毂潜能。',
    cards: [
      {
        title: '锻造轮毂设计',
        description:
          '通过精心推敲的辐条结构与整体比例，在视觉张力和性能需求之间寻求平衡。',
      },
      {
        title: '先进材料与工艺',
        description:
          '围绕严苛的道路与赛道应用，探索材料特性与精密制造工艺的结合。',
      },
      {
        title: '精密品质控制',
        description:
          '关注尺寸精度、表面处理与生产一致性，让每一处细节都有据可循。',
      },
    ],
  },
  es: {
    eyebrow: '02 / INGENIERÍA DE RENDIMIENTO',
    title: 'Ingeniería de llantas sin concesiones.',
    cards: [
      {
        title: 'Diseño de llantas forjadas',
        description:
          'Geometrías de radios y proporciones cuidadosamente estudiadas para equilibrar carácter visual y requisitos de rendimiento.',
      },
      {
        title: 'Materiales avanzados',
        description:
          'Conceptos de ingeniería y fabricación de precisión pensados para las exigencias de la carretera y el circuito.',
      },
      {
        title: 'Calidad de precisión',
        description:
          'Atención al detalle en la precisión dimensional, el acabado superficial y la consistencia de producción.',
      },
    ],
  },
  de: {
    eyebrow: '02 / ENTWICKELT FÜR PERFORMANCE',
    title: 'Felgenentwicklung ohne Kompromisse.',
    cards: [
      {
        title: 'Design geschmiedeter Felgen',
        description:
          'Durchdachte Speichengeometrien und Proportionen verbinden eigenständiges Design mit funktionalen Anforderungen.',
      },
      {
        title: 'Moderne Werkstoffe',
        description:
          'Werkstoffbewusste Entwicklung und präzise Fertigungskonzepte für anspruchsvolle Straßen- und Rennstreckeneinsätze.',
      },
      {
        title: 'Präzise Qualität',
        description:
          'Konsequenter Fokus auf Maßhaltigkeit, Oberflächenqualität und gleichbleibende Fertigungsstandards.',
      },
    ],
  },
  fr: {
    eyebrow: '02 / CONÇU POUR LA PERFORMANCE',
    title: 'L’ingénierie de jantes sans compromis.',
    cards: [
      {
        title: 'Design de jantes forgées',
        description:
          'Des géométries de branches et des proportions étudiées pour concilier identité visuelle et exigences de performance.',
      },
      {
        title: 'Matériaux avancés',
        description:
          'Des approches d’ingénierie et de fabrication de précision adaptées aux exigences de la route et du circuit.',
      },
      {
        title: 'Qualité de précision',
        description:
          'Une attention constante à la précision dimensionnelle, à la finition de surface et à la régularité de production.',
      },
    ],
  },
  ja: {
    eyebrow: '02 / パフォーマンスエンジニアリング',
    title: '妥協のないホイールエンジニアリング。',
    cards: [
      {
        title: '鍛造ホイール設計',
        description:
          'スポーク形状と全体のプロポーションを丁寧に設計し、デザイン性と性能要件の両立を目指します。',
      },
      {
        title: '先進材料と製造技術',
        description:
          '公道やサーキットの厳しい要求を見据え、材料特性と精密製造技術の可能性を追求します。',
      },
      {
        title: '精密な品質管理',
        description:
          '寸法精度、表面仕上げ、安定した生産品質まで、細部にこだわります。',
      },
    ],
  },
} as const;

export function getCapabilitiesTranslations(locale: string) {
  const key = locale.toLowerCase() as keyof typeof capabilitiesTranslations;
  return capabilitiesTranslations[key] ?? capabilitiesTranslations.en;
}
