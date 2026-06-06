'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { i18n, type Locale } from '@/lib/i18n'

interface Props {
  locale: Locale
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export default function Hero({ locale }: Props) {
  const t = i18n[locale].hero
  const reduced = useReducedMotion()

  return (
    <section id="hero" className="min-h-svh flex items-center py-24 md:py-36">
      <div className="max-w-5xl mx-auto px-6 md:px-10 w-full">
        <motion.div
          variants={reduced ? undefined : stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.p
            variants={reduced ? undefined : item}
            className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)] font-body font-medium"
          >
            {t.role}
          </motion.p>

          <div className="leading-none">
            <motion.h1
              variants={reduced ? undefined : item}
              className="font-display italic font-black text-[clamp(4rem,12vw,10rem)] text-[var(--color-text)]"
            >
              Juan Gabriel
            </motion.h1>
            <motion.h1
              variants={reduced ? undefined : item}
              className="font-display italic font-light text-[clamp(4rem,12vw,10rem)] text-[var(--color-text)]"
            >
              Gomes
            </motion.h1>
          </div>

          <motion.p
            variants={reduced ? undefined : item}
            className="text-xl font-body font-light text-[var(--color-text)] max-w-xl"
          >
            {t.tagline}
          </motion.p>

          <motion.p
            variants={reduced ? undefined : item}
            className="text-sm font-body text-[var(--color-muted)] max-w-md"
          >
            {t.sub}
          </motion.p>

          <motion.div variants={reduced ? undefined : item}>
            <hr className="border-[var(--color-border)] mb-6 max-w-sm" />
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-sm font-body font-medium text-[var(--color-text)] hover:gap-4 transition-all duration-300"
            >
              {t.cta} →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
