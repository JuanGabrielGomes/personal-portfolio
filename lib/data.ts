export const projects = [
  {
    slug: 'mocellin-joias',
    name: 'Mocellin Joias',
    descriptionPt: 'E-commerce de joias com catálogo, carrinho, simulação de frete via Superfrete e checkout pelo WhatsApp.',
    descriptionEn: 'Jewelry e-commerce with product catalog, cart, shipping quotes via Superfrete, and WhatsApp checkout.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Zustand', 'Tailwind'],
    url: 'https://mocellinjoias.com.br',
    github: 'https://github.com/JuanGabrielGomes/mocellin-ecommerce',
    image: '/images/mocellin.png',
  },
  {
    slug: 'ottea-studio',
    name: 'Ottea Studio',
    descriptionPt: 'Site institucional bilíngue com formulário de captação de leads que encaminha para webhook, email SMTP e ClickUp em paralelo.',
    descriptionEn: 'Bilingual institutional website with a lead capture form that forwards submissions in parallel via webhook, SMTP email, and ClickUp.',
    tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Nodemailer'],
    url: 'https://otteastudio.com',
    github: 'https://github.com/JuanGabrielGomes/Tea-Strategy-Studio',
    image: '/images/ottea.png',
  },
  {
    slug: 'kedra-pet',
    name: 'Kedra Pet',
    descriptionPt: 'Dispenser de ração automatizado controlado pela web. Firmware ESP32 (C++) comunica com servidor Node.js via WebSocket para acionar alimentação e ler o peso do prato.',
    descriptionEn: 'IoT-controlled pet feeder. ESP32 firmware (C++) communicates with a Node.js server over WebSocket to trigger feeding and read scale weight.',
    tags: ['ESP32', 'C++', 'Node.js', 'WebSocket', 'Firebase'],
    url: null,
    github: 'https://github.com/JuanGabrielGomes/TCC',
    image: null,
  },
]

export const stack = [
  { category: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Supabase', 'PostgreSQL'] },
  { category: 'Linguagens', items: ['TypeScript', 'JavaScript', 'C++', 'Java'] },
  { category: 'Deploy', items: ['Vercel', 'Git'] },
  { category: 'Design', items: ['Figma'] },
]

export const timeline = [
  {
    year: 'fev 2022 – dez 2024',
    yearEn: 'Feb 2022 – Dec 2024',
    titlePt: 'Técnico em Informática',
    titleEn: 'Technical Degree in Computer Science',
    placePt: 'Universidade Federal do Rio Grande do Norte — UFRN',
    placeEn: 'Universidade Federal do Rio Grande do Norte — UFRN',
    descriptionPt: 'Formação técnica concluída com TCC Kedra Pet — sistema IoT de alimentação animal com ESP32, Node.js, Firebase e comunicação em tempo real.',
    descriptionEn: 'Technical degree completed with TCC Kedra Pet — an IoT animal feeding system using ESP32, Node.js, Firebase, and real-time communication.',
  },
  {
    year: 'dez 2025 – hoje',
    yearEn: 'Dec 2025 – present',
    titlePt: 'Produção de Conteúdo e Mídia',
    titleEn: 'Content & Media Producer',
    placePt: 'Lagoinha Carlos Barbosa (voluntário)',
    placeEn: 'Lagoinha Carlos Barbosa (volunteer)',
    descriptionPt: 'Roteirização e direção criativa de formatos recorrentes de vídeo, incluindo programa mensal de notícias. Responsável por estrutura narrativa, tom de voz e planejamento de produção.',
    descriptionEn: 'Script writing and creative direction for recurring video formats, including a monthly news show. Responsible for narrative structure, tone of voice, and production planning.',
  },
  {
    year: 'fev 2025 – hoje',
    yearEn: 'Feb 2025 – present',
    titlePt: 'Bacharelado em Engenharia de Software',
    titleEn: 'B.Sc. Software Engineering',
    placePt: 'UNINTER — Centro Universitário Internacional',
    placeEn: 'UNINTER — Centro Universitário Internacional',
    descriptionPt: 'Aprofundamento em fundamentos de sistemas, algoritmos, arquitetura de software e engenharia de requisitos. Previsão de conclusão: fev 2029.',
    descriptionEn: 'Deepening systems fundamentals, algorithms, software architecture, and requirements engineering. Expected graduation: Feb 2029.',
  },
  {
    year: 'fev 2026 – hoje',
    yearEn: 'Feb 2026 – present',
    titlePt: 'Fundador & Desenvolvedor Fullstack',
    titleEn: 'Founder & Fullstack Developer',
    placePt: 'glim. — Agência boutique de engenharia web e design digital',
    placeEn: 'glim. — Boutique web engineering and digital design studio',
    descriptionPt: 'Desenvolvimento de produtos completos do zero ao deploy: e-commerce Mocellin Joias (Next.js, Supabase, WhatsApp checkout), site institucional Ottea Studio (captação de leads com 3 canais em paralelo). Gestão do ciclo completo: prospecção, proposta técnica, desenvolvimento e suporte pós-lançamento.',
    descriptionEn: 'Building complete products end-to-end: Mocellin Joias e-commerce (Next.js, Supabase, WhatsApp checkout), Ottea Studio institutional site (parallel 3-channel lead capture). Full client delivery cycle: acquisition, technical proposals, development, and post-launch support.',
  },
]

export const hobbies = [
  {
    emoji: '🎮',
    titlePt: 'Jogos online',
    titleEn: 'Online gaming',
    descriptionPt: 'Estratégia e narrativa. O mesmo instinto que uso na arquitetura de sistemas.',
    descriptionEn: 'Strategy and narrative. The same instinct I apply to system design.',
  },
  {
    emoji: '📚',
    titlePt: 'Leitura',
    titleEn: 'Reading',
    descriptionPt: 'Mistério e suspense. Tramas bem construídas ensinam mais sobre estrutura do que qualquer tutorial.',
    descriptionEn: 'Mystery and thriller. Well-crafted plots teach more about structure than any tutorial.',
  },
  {
    emoji: '✏️',
    titlePt: 'Design',
    titleEn: 'Design',
    descriptionPt: 'Tipografia, composição e sistemas visuais — o lado do trabalho que nunca para de me interessar.',
    descriptionEn: 'Typography, composition, and visual systems — the side of the work that never stops interesting me.',
  },
  {
    emoji: '🎬',
    titlePt: 'Edição de vídeo',
    titleEn: 'Video editing',
    descriptionPt: 'Ritmo, corte e narrativa visual. Uma linguagem paralela ao código.',
    descriptionEn: 'Rhythm, cuts, and visual storytelling. A language parallel to code.',
  },
]
