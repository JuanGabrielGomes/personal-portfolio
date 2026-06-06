# juangabrielgomes.dev

Personal portfolio of Juan Gabriel Gomes — fullstack developer and founder of [glim.](https://glimweb.com), a boutique web engineering and digital design studio.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + inline styles
- **Fonts:** Syne · Inter · Instrument Serif (Google Fonts)
- **Deploy:** Vercel

## Features

- Typewriter preloader with cinematic lift transition
- Scroll-driven dark sticky section with animated CountUp stats
- Accordion project gallery with 4 projects (hover-to-expand)
- Continuous marquee watermark
- Journey timeline over full-bleed cinematic photo background
- glim. studio section with principles and site link
- PT / EN internationalization
- Mobile-first responsive layout
- JSON-LD Person schema for SEO

## Projects showcased

| Project | Type | Stack |
|---|---|---|
| [Mocellin Joias](https://mocellinjoias.com.br) | E-commerce | Next.js · Supabase · Zustand |
| [Ottea Studio](https://otteastudio.com) | Institutional | Next.js · Framer Motion · Nodemailer |
| [Sabores em Foco](https://saboresemfoco.com) | Marketing portfolio | HTML · CSS · JavaScript |
| Kedra Pet | IoT / Hardware | ESP32 · C++ · Node.js · WebSocket |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx        # fonts, metadata, JSON-LD
  page.tsx          # PT route
  en/page.tsx       # EN route
  globals.css       # @theme tokens, keyframes, responsive rules
components/
  PortfolioPage.tsx # single client component — all sections
lib/
  data.ts           # projects, stack, timeline
  i18n.ts           # PT/EN strings
public/
  images/           # project screenshots, journey background
```

## License

MIT
