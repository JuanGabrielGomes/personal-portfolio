import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://juangabrielgomes.dev'),
  title: { default: 'Juan Gabriel Gomes', template: '%s · Juan Gabriel Gomes' },
  description: 'Fullstack developer and founder of glim. — building products end-to-end.',
  openGraph: {
    siteName: 'Juan Gabriel Gomes',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${syne.variable} ${inter.variable}`}>
      <body style={{ overflowX: 'clip', margin: 0 }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Juan Gabriel Gomes',
              url: 'https://juangabrielgomes.dev',
              jobTitle: 'Fullstack Developer',
              worksFor: { '@type': 'Organization', name: 'glim.' },
              sameAs: [
                'https://github.com/JuanGabrielGomes',
                'https://linkedin.com/in/juan-gabriel-gomes-274474282',
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
