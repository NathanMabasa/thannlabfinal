import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Web Development | Services | Thannlab',
  description: 'Next.js development with TypeScript, edge-deployment, and sub-2s load times as standard.',
  openGraph: {
    title: 'Web Development | Services | Thannlab',
    description: 'Next.js development with TypeScript, edge-deployment, and sub-2s load times as standard.',
    url: 'https://thannlab.com/services/web-development',
  },
}

export default function WebDevelopment() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen">
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
                  name: 'Web Development',
                  item: 'https://thannlab.com/services/web-development',
                },
              ],
            }),
          }}
        />

        <div className="container-main section-spacing">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-display-h2 text-white font-syne font-bold mb-6">
              Web Development
            </h1>
            <p className="text-body text-muted mb-12">
              Code built for speed & scale. Next.js, TypeScript, edge-deployed. Sub-2s load times as a baseline, not a goal.
            </p>

            <h2 className="text-display-h3 text-white font-syne font-bold mb-4">
              Our Stack
            </h2>
            <p className="text-body text-muted mb-12">
              We specialize in modern, performant web development using Next.js 14, TypeScript, Tailwind CSS, and edge-deployed architectures for optimal global delivery.
            </p>

            <h2 className="text-display-h3 text-white font-syne font-bold mb-4">
              What You Get
            </h2>
            <ul className="text-body text-muted space-y-3 mb-12">
              <li>• Next.js with App Router (latest)</li>
              <li>• TypeScript strict mode</li>
              <li>• Zero layout shift (CLS = 0)</li>
              <li>• Lighthouse 95+ across all metrics</li>
              <li>• SEO-optimized architecture</li>
              <li>• Ongoing performance monitoring</li>
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
