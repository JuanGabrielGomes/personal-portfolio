'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { i18n, type Locale } from '@/lib/i18n'
import { projects, timeline } from '@/lib/data'

const DARK = '#12213B'
const BG = '#F9F7F4'
const FULL_TEXT = 'Juan Gabriel.'
const CHAR_INTERVAL = 70
const TYPE_START = 350
const LIFT_AT = TYPE_START + FULL_TEXT.length * CHAR_INTERVAL + 450

const syne = 'var(--font-syne), sans-serif'
const inter = 'var(--font-inter), sans-serif'

function useCountUp(end: number, suffix: string, duration = 2000) {
  const [display, setDisplay] = useState('0' + suffix)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - t, 3)
            setDisplay(Math.round(eased * end) + suffix)
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, suffix, duration])

  return { display, ref }
}

function StatItem({ num, suffix, label }: { num: number; suffix: string; label: string }) {
  const { display, ref } = useCountUp(num, suffix)
  return (
    <div ref={ref}>
      <div style={{ fontFamily: inter, fontWeight: 300, color: 'white', fontSize: 'clamp(36px, 4.5vw, 72px)', lineHeight: 1.1 }}>
        {display}
      </div>
      <div style={{ fontFamily: inter, fontWeight: 400, color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(12px, 1.1vw, 16px)', marginTop: 'clamp(4px, 0.5vw, 8px)', letterSpacing: '0.01em' }}>
        {label}
      </div>
    </div>
  )
}

function ProjectTile({ project, locale }: { project: typeof projects[0]; locale: Locale }) {
  const [hovered, setHovered] = useState(false)
  const description = locale === 'pt' ? project.descriptionPt : project.descriptionEn

  return (
    <div
      className="gallery-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: hovered ? 4 : 1,
        height: '100%',
        borderRadius: 12,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        background: '#1a2a44',
      }}
    >
      {project.image && (
        <Image
          src={project.image}
          alt={project.name}
          fill
          style={{ objectFit: 'cover', opacity: hovered ? 0.5 : 0.65, transition: 'opacity 0.4s' }}
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      )}
      {!project.image && (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a2a44 0%, #243558 100%)',
        }}>
          <span style={{ fontFamily: syne, fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
            Hardware
          </span>
        </div>
      )}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(10,20,40,0.92) 0%, rgba(10,20,40,0.3) 50%, transparent 100%)',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(16px, 2vw, 28px)',
        transition: 'opacity 0.3s',
      }}>
        <h3 style={{ fontFamily: syne, fontWeight: 700, fontSize: 'clamp(14px, 1.2vw, 20px)', color: 'white', margin: '0 0 8px' }}>
          {project.name}
        </h3>
        <div style={{ overflow: 'hidden', maxHeight: hovered ? 200 : 0, transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)' }}>
          <p style={{ fontFamily: inter, fontSize: 'clamp(11px, 0.8vw, 13px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.55, margin: '0 0 12px' }}>
            {description}
          </p>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{ fontFamily: inter, fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 100, padding: '3px 10px' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        {!hovered && (
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {project.tags.slice(0, 2).map(tag => (
              <span key={tag} style={{ fontFamily: inter, fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 100, padding: '3px 8px' }}>
                {tag}
              </span>
            ))}
          </div>
        )}
        {project.url && hovered && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
            style={{ fontFamily: inter, fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'underline', textUnderlineOffset: 4, marginTop: 12, display: 'inline-block' }}>
            {locale === 'pt' ? 'Ver site ↗' : 'Visit site ↗'}
          </a>
        )}
      </div>
    </div>
  )
}

export default function PortfolioPage({ locale }: { locale: Locale }) {
  const [visibleChars, setVisibleChars] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [lifting, setLifting] = useState(false)
  const [liftDone, setLiftDone] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [navColor, setNavColor] = useState(DARK)
  const [navHover, setNavHover] = useState(false)

  const darkRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  const t = i18n[locale]

  // Preloader sequence
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    FULL_TEXT.split('').forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleChars(i + 1), TYPE_START + i * CHAR_INTERVAL))
    })
    timers.push(setTimeout(() => setShowCursor(false), LIFT_AT - 150))
    timers.push(setTimeout(() => setLifting(true), LIFT_AT))
    timers.push(setTimeout(() => setHeroVisible(true), LIFT_AT + 900))
    timers.push(setTimeout(() => setLiftDone(true), LIFT_AT + 1600))
    return () => timers.forEach(clearTimeout)
  }, [])

  // Nav color on scroll
  const checkNav = useCallback(() => {
    const refs = [darkRef.current, galleryRef.current]
    let onDark = false
    for (const el of refs) {
      if (!el) continue
      const r = el.getBoundingClientRect()
      if (r.top <= 60 && r.bottom > 60) { onDark = true; break }
    }
    setNavColor(onDark ? '#ffffff' : DARK)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', checkNav, { passive: true })
    return () => window.removeEventListener('scroll', checkNav)
  }, [checkNav])

  const navLinks = [t.nav.work, t.nav.journey, 'glim.', t.nav.contact]
  const navHrefs = ['#work', '#journey', 'https://glim.com.br', '#contact']

  const stats = [
    { num: 3, suffix: '+', labelPt: 'Projetos entregues', labelEn: 'Projects delivered' },
    { num: 2, suffix: '', labelPt: 'Anos de experiência', labelEn: 'Years experience' },
    { num: 100, suffix: '%', labelPt: 'Satisfação dos clientes', labelEn: 'Client satisfaction' },
  ]

  return (
    <>
      {/* Preloader */}
      {!liftDone && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 100, background: DARK,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transform: lifting ? 'translateY(-100%)' : 'translateY(0)',
          transition: lifting ? 'transform 1.4s cubic-bezier(0.45, 0, 0.15, 1)' : 'none',
        }}>
          <div style={{ fontFamily: syne, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'white', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center' }}>
            {FULL_TEXT.split('').map((char, i) => (
              <span key={i} style={{ opacity: i < visibleChars ? 1 : 0, fontWeight: char === '.' ? 800 : 700, transition: 'opacity 0.05s' }}>
                {char}
              </span>
            ))}
            <span style={{
              display: 'inline-block', width: 3, height: '1.1em', background: 'white',
              borderRadius: 2, marginLeft: 3,
              opacity: showCursor ? 1 : 0,
              animation: showCursor ? 'blink 0.7s step-end infinite' : 'none',
            }} />
          </div>
        </div>
      )}

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: 'clamp(16px, 2vw, 20px) clamp(24px, 4vw, 64px)',
      }}>
        <a href="#hero" style={{ fontFamily: syne, fontSize: '1.05rem', color: navColor, transition: 'color 0.35s ease', textDecoration: 'none' }}>
          <span style={{ fontWeight: 700 }}>Juan Gabriel</span>
          <span style={{ fontWeight: 800 }}>.</span>
        </a>

        <button
          onClick={() => setMenuOpen(o => !o)}
          onMouseEnter={() => setNavHover(true)}
          onMouseLeave={() => setNavHover(false)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: navColor, transition: 'color 0.35s ease', display: 'flex', alignItems: 'center', padding: 4 }}
          aria-label="Menu"
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ width: navHover ? 20 : 28, height: 1, background: 'currentColor', transition: 'width 0.2s ease' }} />
              <div style={{ width: 28, height: 1, background: 'currentColor' }} />
            </div>
          )}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 40, background: BG,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: 'clamp(20px, 4vw, 36px)',
        opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'all' : 'none',
        transition: 'opacity 0.3s ease',
      }}>
        {navLinks.map((label, i) => (
          <a key={label} href={navHrefs[i]}
            onClick={() => setMenuOpen(false)}
            style={{ fontFamily: syne, fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0D0D0D', textDecoration: 'none' }}>
            {label}
          </a>
        ))}
        <Link href={locale === 'pt' ? '/en' : '/'} onClick={() => setMenuOpen(false)}
          style={{ fontFamily: inter, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B6B6B', textDecoration: 'none', marginTop: 8 }}>
          {locale === 'pt' ? 'EN →' : 'PT →'}
        </Link>
      </div>

      {/* Hero */}
      <section id="hero" style={{ position: 'relative', minHeight: '100vh', overflow: 'visible', display: 'flex', alignItems: 'flex-end' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse 80% 60% at 60% 40%, #dce8f5 0%, ${BG} 65%)`,
        }} />

        <div
          className="hero-text-block"
          style={{
            position: 'relative', zIndex: 10, width: '100%',
            paddingBottom: '10vh',
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateY(0)' : 'translateY(-28px)',
            transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s',
          }}
        >
          <div
            className="hero-top-row"
            style={{ padding: '0 clamp(24px, 4vw, 64px)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '-0.04em' }}
          >
            <span
              className="hero-line1"
              style={{ fontFamily: syne, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 1, color: '#0D0D0D' }}
            >
              {locale === 'pt' ? 'DO CONCEITO' : 'FROM CONCEPT'}
            </span>
            <p
              className="hero-subtitle-desktop"
              style={{ fontFamily: syne, fontWeight: 700, fontSize: 'clamp(10px, 0.95vw, 14px)', maxWidth: 280, opacity: 0.65, lineHeight: 1.6, marginBottom: '0.2em', letterSpacing: '0.02em', textAlign: 'right' }}
            >
              {locale === 'pt'
                ? 'Produtos construídos do banco\nde dados ao deploy — com propósito.'
                : 'Products built end-to-end,\nfrom database to deployment.'}
            </p>
          </div>

          <div style={{ overflow: 'hidden', padding: '0 clamp(24px, 4vw, 64px)' }}>
            <h1
              className="hero-line2"
              style={{ fontFamily: syne, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.03em', color: '#0D0D0D', margin: 0 }}
            >
              {locale === 'pt' ? 'AO CÓDIGO.' : 'TO CODE.'}
            </h1>
          </div>

          <p
            className="hero-subtitle-mobile"
            style={{ display: 'none', fontFamily: syne, fontWeight: 600, fontSize: 'clamp(12px, 3vw, 15px)', opacity: 0.65, marginTop: '0.9em', padding: '0 24px' }}
          >
            {locale === 'pt'
              ? 'Desenvolvedor Fullstack & Fundador da glim.'
              : 'Fullstack Developer & Founder of glim.'}
          </p>
        </div>
      </section>

      {/* Dark statement — sticky */}
      <div style={{ position: 'relative', height: '200vh', zIndex: 20 }}>
        <div style={{ height: '4vh', background: DARK }} />
        <div
          ref={darkRef}
          style={{ position: 'sticky', top: 0, height: '100vh', background: DARK, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
        >
          <div
            className="s2-content"
            style={{ padding: 'clamp(30px, 4vw, 60px) clamp(24px, 4vw, 64px) clamp(60px, 8vw, 120px)' }}
          >
            <div className="s2-statement-wrap" style={{ maxWidth: 1200, paddingLeft: '25%' }}>
              <p style={{ fontFamily: inter, fontWeight: 300, color: '#e8e4df', letterSpacing: '-0.02em', lineHeight: 1.4, fontSize: 'clamp(18px, 2.4vw, 38px)', margin: 0 }}>
                {locale === 'pt' ? (
                  <>
                    Cada produto que construo é pensado<br />
                    com clareza, propósito e atenção<br />
                    aos detalhes. Qualidade não é<br />
                    um extra. É o padrão.
                  </>
                ) : (
                  <>
                    Every product I build is thought<br />
                    through with clarity, purpose<br />
                    and attention to detail. Quality<br />
                    is not a bonus. It is the standard.
                  </>
                )}
              </p>
            </div>

            <div className="s2-stats-wrap" style={{ maxWidth: 1200, paddingLeft: '25%', marginTop: 'clamp(48px, 6vw, 80px)' }}>
              <div style={{ display: 'flex', gap: 0 }}>
                {stats.map((s, i) => (
                  <div key={i} style={{ flex: 1, borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.15)' : 'none', paddingLeft: i > 0 ? 'clamp(20px, 2.5vw, 40px)' : 0 }}>
                    <StatItem num={s.num} suffix={s.suffix} label={locale === 'pt' ? s.labelPt : s.labelEn} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects gallery — slides over dark section */}
      <div
        id="work"
        ref={galleryRef}
        className="gallery-section"
        style={{ position: 'relative', zIndex: 25, marginTop: '-100vh', background: DARK, height: '100vh', overflow: 'hidden' }}
      >
        {/* Background ticker */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
          overflow: 'hidden', zIndex: 0, pointerEvents: 'none', opacity: 0.04,
        }}>
          <span style={{ fontFamily: syne, fontWeight: 800, fontSize: 'clamp(100px, 14vw, 220px)', color: 'white', whiteSpace: 'nowrap', letterSpacing: '-0.02em', userSelect: 'none' }}>
            {'Juan Gabriel.   Juan Gabriel.   Juan Gabriel.   Juan Gabriel.'}
          </span>
        </div>

        <div style={{
          position: 'relative', zIndex: 1, height: '100%',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: 'clamp(24px, 4vw, 60px)',
        }}>
          <p style={{ fontFamily: syne, fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: '0 0 20px' }}>
            {t.work.eyebrow}
          </p>

          <div className="gallery-row" style={{ display: 'flex', gap: 6, height: '75%', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
            {projects.map((p) => (
              <ProjectTile key={p.slug} project={p} locale={locale} />
            ))}
          </div>
        </div>
      </div>

      {/* Journey (light section) */}
      <section id="journey" style={{ background: BG, padding: 'clamp(60px, 10vw, 140px) clamp(24px, 4vw, 64px)' }}>
        <p style={{ fontFamily: syne, fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#6B6B6B', margin: '0 0 20px' }}>
          {t.journey.eyebrow}
        </p>
        <h2 style={{ fontFamily: syne, fontWeight: 800, fontSize: 'clamp(36px, 5vw, 80px)', letterSpacing: '-0.03em', lineHeight: 0.9, color: '#0D0D0D', margin: '0 0 clamp(48px, 6vw, 80px)' }}>
          {t.journey.heading}
        </h2>

        <div style={{ position: 'relative', paddingLeft: 'clamp(20px, 3vw, 40px)', borderLeft: '1px solid #E2DED9', maxWidth: 800 }}>
          {timeline.map((entry, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: i < timeline.length - 1 ? 'clamp(36px, 5vw, 56px)' : 0 }}>
              <div style={{ position: 'absolute', left: 'clamp(-26px, -2.2vw, -21px)', top: 4, width: 10, height: 10, borderRadius: '50%', border: `2px solid ${DARK}`, background: BG }} />
              <p style={{ fontFamily: inter, fontSize: '0.7rem', fontWeight: 500, color: '#6B6B6B', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 4px' }}>
                {locale === 'pt' ? entry.year : entry.yearEn}
              </p>
              <h3 style={{ fontFamily: syne, fontWeight: 700, fontSize: 'clamp(16px, 1.4vw, 22px)', color: '#0D0D0D', margin: '0 0 3px' }}>
                {locale === 'pt' ? entry.titlePt : entry.titleEn}
              </h3>
              <p style={{ fontFamily: inter, fontSize: '0.8rem', color: '#6B6B6B', margin: '0 0 8px' }}>
                {locale === 'pt' ? entry.placePt : entry.placeEn}
              </p>
              <p style={{ fontFamily: inter, fontSize: 'clamp(13px, 1vw, 15px)', color: '#6B6B6B', lineHeight: 1.6, margin: 0, maxWidth: 600 }}>
                {locale === 'pt' ? entry.descriptionPt : entry.descriptionEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ background: DARK, padding: 'clamp(60px, 10vw, 140px) clamp(24px, 4vw, 64px)' }}>
        <p style={{ fontFamily: syne, fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: '0 0 24px' }}>
          {t.contact.eyebrow}
        </p>
        <h2 style={{ fontFamily: syne, fontWeight: 800, fontSize: 'clamp(40px, 6vw, 100px)', letterSpacing: '-0.03em', lineHeight: 0.88, color: 'white', margin: '0 0 clamp(32px, 4vw, 48px)' }}>
          {t.contact.heading}
        </h2>
        <p style={{ fontFamily: inter, fontWeight: 300, color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(14px, 1.2vw, 18px)', maxWidth: 480, lineHeight: 1.6, margin: '0 0 clamp(32px, 4vw, 48px)' }}>
          {t.contact.body}
        </p>
        <a href={`mailto:${t.contact.email}`}
          style={{ fontFamily: syne, fontWeight: 700, fontSize: 'clamp(14px, 1.8vw, 26px)', color: 'white', textDecoration: 'underline', textUnderlineOffset: 8, textDecorationColor: 'rgba(255,255,255,0.3)', display: 'inline-block' }}>
          {t.contact.email}
        </a>

        <div style={{ marginTop: 'clamp(60px, 8vw, 100px)', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 32, display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 'clamp(16px, 3vw, 40px)' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/JuanGabrielGomes' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/juan-gabriel-gomes-274474282' },
              { label: 'Instagram', href: 'https://instagram.com/juangabriielgomes' },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: inter, fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
                {label}
              </a>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <Link href={locale === 'pt' ? '/en' : '/'}
              style={{ fontFamily: inter, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>
              {locale === 'pt' ? 'EN' : 'PT'}
            </Link>
            <p style={{ fontFamily: inter, fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
              © {new Date().getFullYear()} Juan Gabriel Gomes
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
