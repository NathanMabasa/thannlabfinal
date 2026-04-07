import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://thannlab.com'),
  title: {
    default: 'Thannlab | Web Design, Development & AI Solutions',
    template: '%s | Thannlab',
  },
  description:
    'Thannlab is a premium digital agency specializing in web design, web development, and AI-powered digital solutions for ambitious brands.',
  keywords: [
    'web design',
    'web development',
    'AI solutions',
    'digital agency',
    'Next.js',
    'UI/UX design',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thannlab.com',
    siteName: 'Thannlab',
    title: 'Thannlab | Web Design, Development & AI Solutions',
    description:
      'Thannlab is a premium digital agency specializing in web design, web development, and AI-powered digital solutions for ambitious brands.',
    images: [
      {
        url: 'https://thannlab.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Thannlab - Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thannlab | Web Design, Development & AI Solutions',
    description:
      'Thannlab is a premium digital agency specializing in web design, web development, and AI-powered digital solutions.',
    images: ['https://thannlab.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [
    {
      name: 'Thannlab',
      url: 'https://thannlab.com',
    },
  ],
}

// Import providers and components
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { CustomCursor } from '@/components/common/CustomCursor'
import { LoadingScreen } from '@/components/common/LoadingScreen'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Thannlab',
              url: 'https://thannlab.com',
              logo: 'https://thannlab.com/thannlab 1.png',
              description:
                'A premium digital agency specializing in web design, web development, and AI-powered digital solutions.',
              sameAs: [
                'https://www.linkedin.com/company/thannlab',
                'https://twitter.com/thannlab',
                'https://github.com/thannlab',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: 'hello@thannlab.com',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: '',
                addressLocality: '',
                addressRegion: '',
                postalCode: '',
                addressCountry: 'ZA',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${syne.variable} ${inter.variable} bg-black text-white font-inter antialiased`}
      >
        <CustomCursor />
        <LoadingScreen />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}