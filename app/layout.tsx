import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import { site } from '@/content/data'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'EventPlanner'],
      name: site.fullName,
      description: site.description,
      url: site.url,
      telephone: site.phone,
      email: site.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.structuredDataAddress.locality,
        addressRegion: site.structuredDataAddress.region,
        addressCountry: site.structuredDataAddress.country,
      },
      sameAs: [site.instagramUrl],
      priceRange: '€€€',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        ratingCount: '3',
        bestRating: '5',
        worstRating: '1',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ScrollToTop />
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
