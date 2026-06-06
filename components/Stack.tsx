import AnimatedSection from './AnimatedSection'
import { i18n, type Locale } from '@/lib/i18n'
import { stack } from '@/lib/data'

interface Props {
  locale: Locale
}

export default function Stack({ locale }: Props) {
  const t = i18n[locale].stack

  return (
    <section id="stack" className="py-24 md:py-36 bg-[var(--color-surface)]">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)] font-body font-medium mb-4">
            {t.eyebrow}
          </p>
          <h2 className="font-display font-bold text-5xl md:text-7xl text-[var(--color-text)] mb-16">
            {t.heading}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stack.map((group) => (
              <div key={group.category}>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)] font-body font-medium mb-3">
                  {group.category}
                </p>
                <p className="font-body text-base text-[var(--color-text)]">
                  {group.items.join(' / ')}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
