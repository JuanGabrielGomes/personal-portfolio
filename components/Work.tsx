import AnimatedSection from './AnimatedSection'
import ProjectCard from './ProjectCard'
import { i18n, type Locale } from '@/lib/i18n'
import { projects } from '@/lib/data'

interface Props {
  locale: Locale
}

export default function Work({ locale }: Props) {
  const t = i18n[locale].work

  return (
    <section id="work" className="py-24 md:py-36">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)] font-body font-medium mb-4">
            {t.eyebrow}
          </p>
          <h2 className="font-display font-bold text-5xl md:text-7xl text-[var(--color-text)] mb-12">
            {t.heading}
          </h2>
        </AnimatedSection>

        {projects.map((project, i) => (
          <AnimatedSection key={project.slug} delay={i * 0.1}>
            {i > 0 && <hr className="border-[var(--color-border)]" />}
            <ProjectCard project={project} locale={locale} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
