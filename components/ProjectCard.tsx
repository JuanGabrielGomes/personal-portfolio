'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { type Locale } from '@/lib/i18n'
import { type projects } from '@/lib/data'

interface Props {
  project: (typeof projects)[number]
  locale: Locale
}

export default function ProjectCard({ project, locale }: Props) {
  const description = locale === 'pt' ? project.descriptionPt : project.descriptionEn

  return (
    <div className="py-12 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
      <div className="flex flex-col gap-4">
        <h3 className="font-display font-bold text-3xl md:text-4xl text-[var(--color-text)]">
          {project.name}
        </h3>
        <p className="font-body text-base text-[var(--color-muted)] leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-body font-medium uppercase tracking-widest text-[var(--color-muted)] border border-[var(--color-border)] px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-2">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-body font-medium text-[var(--color-text)] underline underline-offset-4 hover:text-[var(--color-muted)] transition-colors"
            >
              {locale === 'pt' ? 'Ver site' : 'Visit site'} ↗
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-body font-medium text-[var(--color-muted)] underline underline-offset-4 hover:text-[var(--color-text)] transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
        className="relative aspect-video rounded-lg overflow-hidden bg-[var(--color-border)]"
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <span className="text-xs uppercase tracking-[0.3em] font-body font-medium text-[var(--color-muted)]">
              Hardware project
            </span>
          </div>
        )}
      </motion.div>
    </div>
  )
}
