'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { i18n, type Locale } from '@/lib/i18n'

interface Props {
  locale: Locale
}

export default function Contact({ locale }: Props) {
  const t = i18n[locale].contact
  const year = new Date().getFullYear()

  return (
    <section id="contact" className="py-24 md:py-36">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)] font-body font-medium mb-4">
            {t.eyebrow}
          </p>
          <h2 className="font-display font-bold text-5xl md:text-7xl text-[var(--color-text)] mb-6">
            {t.heading}
          </h2>
          <p className="font-body text-base text-[var(--color-muted)] mb-10 max-w-lg">
            {t.body}
          </p>

          <motion.a
            href={`mailto:${t.email}`}
            className="font-display font-bold text-2xl md:text-4xl text-[var(--color-text)] underline underline-offset-8 decoration-[var(--color-border)] hover:decoration-[var(--color-text)] transition-all duration-300 inline-block mb-16"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            {t.email}
          </motion.a>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <hr className="border-[var(--color-border)] mb-8" />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/JuanGabrielGomes"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/juan-gabriel-gomes-274474282"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/juangabriielgomes"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                Instagram
              </a>
            </div>
            <p className="font-body text-xs text-[var(--color-muted)]">
              © {year} Juan Gabriel Gomes
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
