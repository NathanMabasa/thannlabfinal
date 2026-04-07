import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | Thannlab',
  description: 'Thannlab services: Web Design, Web Development, and AI Solutions for ambitious brands.',
  openGraph: {
    title: 'Services | Thannlab',
    description: 'Thannlab services: Web Design, Web Development, and AI Solutions for ambitious brands.',
    url: 'https://thannlab.com/services',
  },
}

const servicePages = [
  {
    title: 'Web Design',
    description: 'Awwwards-calibre interfaces built on data, not decoration.',
    href: '/services/web-design',
  },
  {
    title: 'Web Development',
    description: 'Next.js, TypeScript, edge-deployed. Sub-2s load times as standard.',
    href: '/services/web-development',
  },
  {
    title: 'AI Solutions',
    description: 'Custom LLM integrations and automation pipelines.',
    href: '/services/ai-solutions',
  },
]

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen">
        {/* Breadcrumb */}
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
              ],
            }),
          }}
        />

        <div className="container-main section-spacing">
          <AnimatedSection className="mb-16">
            <h1 className="text-display-h2 text-white font-syne font-bold mb-6">
              Our Services
            </h1>
            <p className="text-body text-muted max-w-2xl">
              We partner with ambitious brands to design, build, and scale high-performance digital solutions.
            </p>
          </AnimatedSection>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {servicePages.map((service, idx) => (
              <AnimatedSection key={idx} delay={0.08 + idx * 0.08}>
                <Link href={service.href}>
                  <div className="p-8 bg-mid border border-border-subtle rounded-sharp hover:border-accent transition-all hover:translate-y-[-4px]">
                    <h2 className="text-display-h3 text-white font-syne font-bold mb-4 group-hover:text-accent">
                      {service.title}
                    </h2>
                    <p className="text-body text-muted">{service.description}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
