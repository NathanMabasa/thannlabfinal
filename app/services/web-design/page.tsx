import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Web Design | Services | Thannlab',
  description: 'Awwwards-calibre web design that commands attention. Data-driven, conversion-focused design strategies.',
  openGraph: {
    title: 'Web Design | Services | Thannlab',
    description: 'Awwwards-calibre web design that commands attention. Data-driven, conversion-focused design strategies.',
    url: 'https://thannlab.com/services/web-design',
  },
}

export default function WebDesign() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen">
        {/* Breadcrumb + Service Schema */}
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
                  name: 'Services',
                  item: 'https://thannlab.com/services',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Web Design',
                  item: 'https://thannlab.com/services/web-design',
                },
              ],
            }),
          }}
        />

        <div className="container-main section-spacing">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-display-h2 text-white font-syne font-bold mb-6">
              Web Design
            </h1>
            <p className="text-body text-muted mb-12">
              Awwwards-calibre interfaces built on data, not decoration. Every layout earns its place on the page.
            </p>

            <h2 className="text-display-h3 text-white font-syne font-bold mb-4">
              Our Process
            </h2>
            <p className="text-body text-muted mb-12">
              We combine strategic research, user psychology, and cutting-edge design techniques to create interfaces that don't just look beautiful—they convert.
            </p>

            <h2 className="text-display-h3 text-white font-syne font-bold mb-4">
              What You Get
            </h2>
            <ul className="text-body text-muted space-y-3 mb-12">
              <li>• Strategy-first design approach</li>
              <li>• Mobile-first, responsive layouts</li>
              <li>• Accessibility audit (WCAG 2.1 AA)</li>
              <li>• Interactive prototypes</li>
              <li>• Design system documentation</li>
            </ul>

            <div className="mt-16">
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent text-black font-semibold font-syne hover:opacity-90 transition-opacity rounded-sharp inline-block"
              >
                Start Your Project →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  )
}
