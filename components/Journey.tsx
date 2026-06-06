import AnimatedSection from './AnimatedSection'
import { i18n, type Locale } from '@/lib/i18n'
import { timeline } from '@/lib/data'

interface Props {
  locale: Locale
}

export default function Journey({ locale }: Props) {
  const t = i18n[locale].journey

  return (
    <section id="journey" className="py-24 md:py-36">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)] font-body font-medium mb-4">
            {t.eyebrow}
          </p>
          <h2 className="font-display font-bold text-5xl md:text-7xl text-[var(--color-text)] mb-16">
            {t.heading}
          </h2>
        </AnimatedSection>

        <div className="relative pl-8 border-l border-[var(--color-border)]">
          {timeline.map((entry, i) => (
            <AnimatedSection key={i} delay={i * 0.15} className="mb-12 last:mb-0 relative">
              <div className="absolute -left-[2.35rem] top-1 w-3 h-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)]" />
              <p className="text-xs font-body font-medium text-[var(--color-muted)] uppercase tracking-widest mb-1">
                {locale === 'pt' ? entry.year : entry.yearEn}
              </p>
              <h3 className="font-display font-bold text-xl text-[var(--color-text)] mb-0.5">
                {locale === 'pt' ? entry.titlePt : entry.titleEn}
              </h3>
              <p className="font-body text-sm text-[var(--color-muted)] mb-2">
                {locale === 'pt' ? entry.placePt : entry.placeEn}
              </p>
              <p className="font-body text-base text-[var(--color-muted)] leading-relaxed max-w-2xl">
                {locale === 'pt' ? entry.descriptionPt : entry.descriptionEn}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
