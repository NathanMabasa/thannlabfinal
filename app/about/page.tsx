import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'

export const metadata: Metadata = {
  title: 'About | Thannlab',
  description: 'Learn about Thannlab, a premium digital agency specializing in web design, web development, and AI solutions.',
  openGraph: {
    title: 'About | Thannlab',
    description: 'Learn about Thannlab, a premium digital agency specializing in web design, web development, and AI solutions.',
    url: 'https://thannlab.com/about',
  },
}

export default function About() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen">
        {/* Breadcrumb structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://thannlab.com',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'About',
                  item: 'https://thannlab.com/about',
                },
              ],
            }),
          }}
        />

        <div className="container-main section-spacing">
          <AnimatedSection>
            <h1 className="text-display-h2 text-white font-syne font-bold mb-12">
              About Thannlab
            </h1>
            <div className="prose prose-invert max-w-3xl">
              <p className="text-body text-muted mb-6">
                Thannlab is a premium digital agency built for ambitious brands. We specialize in designing and developing high-performance websites, building AI-powered products, and optimizing digital experiences for conversion.
              </p>
              <p className="text-body text-muted mb-6">
                Our team combines strategic thinking, surgical design, and deep technical expertise to deliver digital solutions that move the needle.
              </p>
              <p className="text-body text-muted">
                Every project is approached with a simple philosophy: results over promises. We measure success by your growth, not by our portfolios.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  )
}
