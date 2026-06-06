import type { Metadata } from 'next'
import PortfolioPage from '@/components/PortfolioPage'

export const metadata: Metadata = {
  description: 'Fullstack developer and founder of glim. — building products end-to-end.',
  openGraph: { locale: 'en_US' },
}

export default function HomeEN() {
  return <PortfolioPage locale="en" />
}
