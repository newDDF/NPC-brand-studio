export type PageSlug = 'about' | 'projects' | 'news' | 'contact';

type PageContent = {
  title: string;
  description: string;
  cards: readonly { title: string; description: string }[];
};

const pages = {
  en: {
    about: { title: 'Built on engineering discipline.', description: 'We bring material knowledge, thoughtful design, and controlled manufacturing together to create dependable wheel solutions.', cards: [
      { title: 'Engineering first', description: 'Design decisions are guided by fitment requirements, intended use, and practical manufacturability.' },
      { title: 'Controlled production', description: 'A process-led approach supports repeatability from material preparation through final inspection.' },
      { title: 'Quality by design', description: 'Clear specifications and inspection checkpoints help make product expectations measurable.' }] },
    projects: { title: 'Solutions for real-world driving.', description: 'Explore representative application concepts showing how wheel design can respond to different vehicle needs.', cards: [
      { title: 'Everyday mobility', description: 'Balanced wheel concepts for daily-use passenger vehicles, prioritizing fitment and dependable performance.' },
      { title: 'Performance focused', description: 'Sport-oriented styling concepts developed around visual presence and application requirements.' },
      { title: 'Custom fitment', description: 'Project-based specification planning for distinct vehicle platforms and customer briefs.' }] },
    news: { title: 'Updates from NPC Precision.', description: 'A sample editorial space for company announcements, product development notes, and manufacturing insights.', cards: [
      { title: 'Product development', description: 'An overview of how new wheel concepts move from early design direction toward specification review.' },
      { title: 'Manufacturing insight', description: 'Notes on the role of process control, material selection, and inspection in precision production.' },
      { title: 'Company announcements', description: 'A place for future exhibition notices, business updates, and important company milestones.' }] },
    contact: { title: 'Let’s discuss your next project.', description: 'Tell us about your application, target specifications, or partnership goals. Our team can use those details to understand your requirements.', cards: [
      { title: 'Product enquiries', description: 'Share the vehicle application, dimensions, quantity, and target timeline relevant to your request.' },
      { title: 'Business cooperation', description: 'For OEM, distribution, and project enquiries, include your company details and a short project brief.' },
      { title: 'Email', description: 'Contact us directly using the email address below.' }] },
  },
  'zh-cn': {
    about: { title: '以工程严谨性为基础。', description: '我们结合材料知识、审慎设计与可控制造流程，打造可靠的轮毂解决方案。', cards: [
      { title: '工程优先', description: '围绕安装适配、使用场景和实际制造条件进行设计决策。' },
      { title: '过程可控', description: '从材料准备到最终检验，以规范流程支持稳定、可重复的生产。' },
      { title: '以设计保障品质', description: '通过明确的规格要求与检验节点，让产品质量标准更清晰、可衡量。' }] },
    projects: { title: '面向真实驾驶需求。', description: '浏览不同应用概念，了解轮毂设计如何响应不同车型与使用需求。', cards: [
      { title: '日常出行', description: '面向家用乘用车的轮毂概念，兼顾安装适配与可靠使用。' },
      { title: '性能取向', description: '围绕运动化外观与应用要求开发的设计概念。' },
      { title: '定制适配', description: '针对特定车型平台与客户需求开展规格规划。' }] },
    news: { title: 'NPC Precision 动态。', description: '用于展示企业公告、产品开发进展与制造技术内容的示例栏目。', cards: [
      { title: '产品开发', description: '介绍轮毂概念从初期设计方向到规格评审的开发流程。' },
      { title: '制造洞察', description: '分享过程控制、材料选择与检验在精密生产中的作用。' },
      { title: '企业公告', description: '用于发布未来的展会信息、业务动态与重要里程碑。' }] },
    contact: { title: '聊聊您的下一个项目。', description: '欢迎提供应用场景、目标规格或合作需求，帮助我们更准确地了解您的项目。', cards: [
      { title: '产品咨询', description: '请提供车型应用、尺寸、数量和期望交付时间等信息。' },
      { title: '商务合作', description: 'OEM、经销及项目合作咨询，请附上公司信息与项目简介。' },
      { title: '电子邮件', description: '您可以通过下方邮箱直接联系我们。' }] },
  },
  es: {
    about: { title: 'La ingeniería como fundamento.', description: 'Combinamos conocimiento de materiales, diseño cuidadoso y procesos controlados para desarrollar soluciones de ruedas fiables.', cards: [
      { title: 'Ingeniería primero', description: 'El diseño considera la compatibilidad, el uso previsto y la viabilidad de fabricación.' },
      { title: 'Producción controlada', description: 'Los procesos definidos favorecen la consistencia desde la preparación hasta la inspección final.' },
      { title: 'Calidad desde el diseño', description: 'Las especificaciones y los controles ayudan a medir las expectativas del producto.' }] },
    projects: { title: 'Soluciones para la conducción real.', description: 'Explore conceptos de aplicación para distintas necesidades de vehículos.', cards: [
      { title: 'Movilidad diaria', description: 'Conceptos para vehículos de uso cotidiano centrados en compatibilidad y fiabilidad.' },
      { title: 'Orientación deportiva', description: 'Diseños de estilo deportivo que consideran la apariencia y los requisitos de aplicación.' },
      { title: 'Compatibilidad personalizada', description: 'Planificación de especificaciones para plataformas y necesidades concretas.' }] },
    news: { title: 'Novedades de NPC Precision.', description: 'Un espacio de muestra para anuncios, desarrollo de productos e ideas de fabricación.', cards: [
      { title: 'Desarrollo de productos', description: 'Del concepto inicial a la revisión de especificaciones.' },
      { title: 'Perspectivas de fabricación', description: 'El papel del control de procesos, los materiales y la inspección.' },
      { title: 'Anuncios corporativos', description: 'Próximas ferias, novedades empresariales e hitos importantes.' }] },
    contact: { title: 'Hablemos de su próximo proyecto.', description: 'Comparta su aplicación, especificaciones objetivo o propuesta de colaboración.', cards: [
      { title: 'Consultas de producto', description: 'Indique vehículo, dimensiones, cantidad y plazo previsto.' },
      { title: 'Colaboración empresarial', description: 'Para consultas OEM o distribución, incluya los datos de su empresa y el proyecto.' },
      { title: 'Correo electrónico', description: 'Puede contactar con nosotros mediante el correo indicado abajo.' }] },
  },
  de: {
    about: { title: 'Technische Disziplin als Grundlage.', description: 'Materialkenntnis, durchdachtes Design und kontrollierte Fertigung bilden die Basis zuverlässiger Radlösungen.', cards: [
      { title: 'Engineering zuerst', description: 'Die Entwicklung berücksichtigt Passform, Einsatzbereich und Herstellbarkeit.' },
      { title: 'Kontrollierte Fertigung', description: 'Definierte Prozesse unterstützen gleichbleibende Ergebnisse bis zur Endprüfung.' },
      { title: 'Qualität im Design', description: 'Klare Spezifikationen und Prüfpunkte machen Anforderungen messbar.' }] },
    projects: { title: 'Lösungen für den Alltag.', description: 'Entdecken Sie beispielhafte Anwendungskonzepte für unterschiedliche Fahrzeuge.', cards: [
      { title: 'Alltagsmobilität', description: 'Radkonzepte für Pkw mit Fokus auf Passform und zuverlässige Nutzung.' },
      { title: 'Performance-orientiert', description: 'Sportliche Designkonzepte unter Berücksichtigung von Optik und Anwendung.' },
      { title: 'Individuelle Passform', description: 'Spezifikationsplanung für bestimmte Fahrzeugplattformen und Anforderungen.' }] },
    news: { title: 'Neuigkeiten von NPC Precision.', description: 'Ein Musterbereich für Unternehmensmeldungen, Produktentwicklung und Fertigungswissen.', cards: [
      { title: 'Produktentwicklung', description: 'Vom ersten Konzept bis zur Prüfung der Spezifikationen.' },
      { title: 'Fertigungseinblicke', description: 'Prozesskontrolle, Materialauswahl und Prüfung in der Präzisionsfertigung.' },
      { title: 'Unternehmensmeldungen', description: 'Platz für Messehinweise, Neuigkeiten und wichtige Meilensteine.' }] },
    contact: { title: 'Sprechen wir über Ihr Projekt.', description: 'Teilen Sie uns Anwendung, Zielspezifikationen oder Kooperationswünsche mit.', cards: [
      { title: 'Produktanfragen', description: 'Nennen Sie Fahrzeug, Abmessungen, Menge und gewünschten Zeitrahmen.' },
      { title: 'Geschäftliche Zusammenarbeit', description: 'Für OEM- und Vertriebsanfragen senden Sie bitte Firmendaten und Projektbeschreibung.' },
      { title: 'E-Mail', description: 'Sie erreichen uns direkt über die unten angegebene E-Mail-Adresse.' }] },
  },
  fr: {
    about: { title: 'La rigueur technique comme fondement.', description: 'Nous associons connaissance des matériaux, conception réfléchie et fabrication maîtrisée pour créer des solutions de roues fiables.', cards: [
      { title: 'L’ingénierie avant tout', description: 'La conception tient compte de la compatibilité, de l’usage et de la faisabilité industrielle.' },
      { title: 'Production maîtrisée', description: 'Des processus définis favorisent la régularité jusqu’au contrôle final.' },
      { title: 'La qualité dès la conception', description: 'Des spécifications claires et des points de contrôle rendent les exigences mesurables.' }] },
    projects: { title: 'Des solutions pour la conduite réelle.', description: 'Découvrez des concepts d’application adaptés à différents besoins automobiles.', cards: [
      { title: 'Mobilité quotidienne', description: 'Des concepts pour véhicules de tous les jours privilégiant compatibilité et fiabilité.' },
      { title: 'Orientation performance', description: 'Des designs sportifs tenant compte de l’esthétique et des exigences d’application.' },
      { title: 'Montage personnalisé', description: 'Planification des spécifications pour des plateformes et besoins précis.' }] },
    news: { title: 'Actualités de NPC Precision.', description: 'Un espace de démonstration pour les annonces, le développement produit et les savoir-faire industriels.', cards: [
      { title: 'Développement produit', description: 'Du concept initial à l’examen des spécifications.' },
      { title: 'Regards sur la fabrication', description: 'Le rôle des procédés, des matériaux et du contrôle qualité.' },
      { title: 'Annonces de l’entreprise', description: 'Un espace pour les salons, actualités et étapes importantes.' }] },
    contact: { title: 'Parlons de votre prochain projet.', description: 'Présentez votre application, vos spécifications cibles ou votre proposition de partenariat.', cards: [
      { title: 'Demandes produit', description: 'Précisez le véhicule, les dimensions, la quantité et le calendrier souhaité.' },
      { title: 'Partenariats', description: 'Pour les demandes OEM ou de distribution, ajoutez les coordonnées de votre entreprise et le projet.' },
      { title: 'E-mail', description: 'Contactez-nous directement à l’adresse indiquée ci-dessous.' }] },
  },
  ja: {
    about: { title: 'エンジニアリングの規律を基盤に。', description: '材料の知識、丁寧な設計、管理された製造工程を組み合わせ、信頼できるホイールソリューションを目指します。', cards: [
      { title: 'エンジニアリングを最優先', description: '適合条件、使用目的、製造可能性を踏まえて設計します。' },
      { title: '管理された生産', description: '材料準備から最終検査まで、標準化された工程で安定性を追求します。' },
      { title: '設計段階から品質を考慮', description: '明確な仕様と検査項目により、製品要件を確認しやすくします。' }] },
    projects: { title: '実際の走行ニーズに応える。', description: 'さまざまな車両用途を想定したホイール設計コンセプトをご覧ください。', cards: [
      { title: '日常のモビリティ', description: '適合性と信頼性を重視した乗用車向けコンセプト。' },
      { title: 'パフォーマンス志向', description: '外観と用途要件を考慮したスポーティなデザイン案。' },
      { title: 'カスタム適合', description: '特定の車両プラットフォームや要望に応じた仕様計画。' }] },
    news: { title: 'NPC Precision の最新情報。', description: '企業のお知らせ、製品開発、製造技術に関する情報を掲載するサンプル欄です。', cards: [
      { title: '製品開発', description: '初期コンセプトから仕様確認までの流れを紹介します。' },
      { title: '製造の知見', description: '工程管理、材料選定、検査が精密製造で果たす役割。' },
      { title: '企業からのお知らせ', description: '展示会、事業ニュース、重要な節目を掲載する欄です。' }] },
    contact: { title: '次のプロジェクトについて相談しましょう。', description: '用途、希望仕様、協業の目的などをお知らせください。', cards: [
      { title: '製品に関するお問い合わせ', description: '車種、寸法、数量、希望納期をご記入ください。' },
      { title: 'ビジネス協業', description: 'OEMや販売に関するお問い合わせには、会社情報と案件概要を添えてください。' },
      { title: 'メール', description: '下記のメールアドレスから直接お問い合わせいただけます。' }] },
  },
} as const;

export function getPageContent(locale: string, page: PageSlug): PageContent {
  const language = pages[locale.toLowerCase() as keyof typeof pages] ?? pages.en;
  return language[page];
}

export const pageSlugs: PageSlug[] = ['about', 'projects', 'news', 'contact'];
