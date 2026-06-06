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
    contact: {
      eyebrow: 'Contact',
      heading: "Let's talk.",
      body: 'Open to opportunities at product companies and new projects through glim.',
      email: 'juangabrielgomes.dev@gmail.com',
    },
  },
} as const

export type Locale = 'pt' | 'en'
