import AnimatedSection from './AnimatedSection'
import { i18n, type Locale } from '@/lib/i18n'
import { hobbies } from '@/lib/data'

interface Props {
  locale: Locale
}

export default function Hobbies({ locale }: Props) {
  const t = i18n[locale].hobbies

  return (
    <section id="hobbies" className="py-24 md:py-36 bg-[var(--color-surface)]">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)] font-body font-medium mb-4">
            {t.eyebrow}
          </p>
          <h2 className="font-display font-bold text-5xl md:text-7xl text-[var(--color-text)] mb-16">
            {t.heading}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {hobbies.map((hobby, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <span className="text-4xl block mb-3">{hobby.emoji}</span>
              <h3 className="font-display font-bold text-xl text-[var(--color-text)] mb-1">
                {locale === 'pt' ? hobby.titlePt : hobby.titleEn}
              </h3>
              <p className="font-body text-base text-[var(--color-muted)] leading-relaxed">
                {locale === 'pt' ? hobby.descriptionPt : hobby.descriptionEn}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
