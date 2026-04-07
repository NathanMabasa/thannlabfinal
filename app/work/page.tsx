import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Work | Portfolio | Thannlab',
  description: 'Thannlab case studies and portfolio projects showcasing web design, development, and AI solutions.',
  openGraph: {
    title: 'Work | Portfolio | Thannlab',
    description: 'Thannlab case studies and portfolio projects showcasing web design, development, and AI solutions.',
    url: 'https://thannlab.com/work',
  },
}

const projects = [
  {
    title: 'E-Commerce Platform Redesign',
    description: 'Increased conversions by 47% through strategic UX audit and design implementation.',
    tags: ['Web Design', 'Web Development', 'UX Strategy'],
    slug: 'ecommerce-redesign',
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time data visualization with predictive AI insights for enterprise clients.',
    tags: ['Web Development', 'AI Solutions'],
    slug: 'ai-analytics-dashboard',
  },
  {
    title: 'Brand Identity & Website Launch',
    description: 'Complete rebrand and digital presence for SaaS startup achieving 300% YoY growth.',
    tags: ['Web Design', 'Brand Strategy'],
    slug: 'saas-brand-launch',
  },
]

export default function Work() {
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
                  name: 'Work',
                  item: 'https://thannlab.com/work',
                },
              ],
            }),
          }}
        />

        <div className="container-main section-spacing">
          <AnimatedSection className="mb-16">
            <h1 className="text-display-h2 text-white font-syne font-bold mb-6">
              Our Work
            </h1>
            <p className="text-body text-muted max-w-2xl">
              Case studies and projects that showcase our expertise in web design, development, and AI solutions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <AnimatedSection
                key={idx}
                delay={0.08 + idx * 0.08}
                className="group"
              >
                <Link href={`/work/${project.slug}`}>
                  <div className="p-8 bg-mid border border-border-subtle rounded-sharp hover:border-accent transition-all hover:translate-y-[-4px]">
                    <h2 className="text-display-h3 text-white font-syne font-bold mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-body text-muted mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-label text-muted bg-black px-3 py-1 rounded-sharp"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
