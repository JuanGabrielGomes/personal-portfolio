export const i18n = {
  pt: {
    nav: {
      work: 'Projetos',
      journey: 'Trajetória',
      contact: 'Contato',
    },
    hero: {
      role: 'Desenvolvedor Fullstack',
      tagline: 'Construo produtos do banco de dados ao deploy.',
      sub: 'Fundador da glim. — agência boutique de engenharia e design digital.',
      cta: 'Ver projetos',
    },
    work: {
      eyebrow: 'Trabalho selecionado',
      heading: 'Projetos.',
    },
    stack: {
      eyebrow: 'Tecnologias',
      heading: 'O que uso.',
    },
    journey: {
      eyebrow: 'Trajetória',
      heading: 'Como cheguei aqui.',
    },
    hobbies: {
      eyebrow: 'Além do código',
      heading: 'O que me move.',
    },
    glim: {
      eyebrow: 'A agência',
      heading: 'glim.',
      what: { label: 'O que fazemos', body: 'Engenharia web e design digital de ponta a ponta — da identidade visual ao código em produção. Sites institucionais, e-commerces e produtos digitais com foco em performance, experiência e resultado.' },
      who: { label: 'Quem atendemos', body: 'Negócios e profissionais que valorizam qualidade e querem uma presença digital que realmente converte. Do autônomo ao pequeno negócio em crescimento.' },
      principles: [
        { title: 'Clareza antes de tudo', body: 'Cada decisão tem um propósito. Sem excessos, sem ruído.' },
        { title: 'Qualidade como padrão', body: 'Não entregamos menos do que o melhor que conseguimos fazer.' },
        { title: 'Parceria real', body: 'Tratamos cada projeto como se fosse nosso. Porque enquanto estamos nele, é.' },
      ],
      cta: 'Conheça a glim.',
    },
    contact: {
      eyebrow: 'Contato',
      heading: 'Vamos conversar.',
      body: 'Aberto a oportunidades em empresas de produto e novos projetos pela glim.',
      email: 'juangabrielgomes.dev@gmail.com',
    },
  },
  en: {
    nav: {
      work: 'Work',
      journey: 'Journey',
      contact: 'Contact',
    },
    hero: {
      role: 'Fullstack Developer',
      tagline: 'I build products end-to-end — from database to deployment.',
      sub: 'Founder of glim. — a boutique web engineering and digital design studio.',
      cta: 'See my work',
    },
    work: {
      eyebrow: 'Selected work',
      heading: 'Projects.',
    },
    stack: {
      eyebrow: 'Technologies',
      heading: 'What I use.',
    },
    journey: {
      eyebrow: 'Journey',
      heading: 'How I got here.',
    },
    hobbies: {
      eyebrow: 'Beyond code',
      heading: 'What drives me.',
    },
    glim: {
      eyebrow: 'The studio',
      heading: 'glim.',
      what: { label: 'What we do', body: 'End-to-end web engineering and digital design — from visual identity to production-ready code. Institutional sites, e-commerce, and digital products built for performance, experience, and results.' },
      who: { label: 'Who we serve', body: 'Businesses and professionals who value quality and want a digital presence that actually converts. From solo practitioners to growing small businesses.' },
      principles: [
        { title: 'Clarity first', body: 'Every decision has a purpose. No excess, no noise.' },
        { title: 'Quality as standard', body: 'We never deliver less than the best we can do.' },
        { title: 'Real partnership', body: 'We treat every project as if it were ours. Because while we\'re in it, it is.' },
      ],
      cta: 'Visit glim.',
    },
    contact: {
      eyebrow: 'Contact',
      heading: "Let's talk.",
      body: 'Open to opportunities at product companies and new projects through glim.',
      email: 'juangabrielgomes.dev@gmail.com',
    },
  },
} as const

export type Locale = 'pt' | 'en'
