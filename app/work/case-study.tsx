import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import Link from 'next/link'

// Mock case studies data
const caseStudies: Record<string, any> = {
  'ecommerce-redesign': {
    title: 'E-Commerce Platform Redesign',
    description: 'A complete redesign of a 10-year-old e-commerce platform that increased conversions by 47%.',
    challenge:
      'The client had an outdated, slow e-commerce platform with poor user experience, leading to high cart abandonment and low conversion rates.',
    solution:
      'We conducted a comprehensive UX audit, redesigned the entire user flow, optimized for mobile, and rebuilt the frontend with Next.js for lightning-fast performance.',
    results: [
      '+47% increase in conversion rate',
      '+120% increase in average order value',
      '-62% bounce rate reduction',
      'Lighthouse score: 98',
    ],
    tags: ['Web Design', 'Web Development', 'UX Strategy'],
  },
  'ai-analytics-dashboard': {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Custom AI analytics platform with real-time data visualization and predictive insights.',
    challenge:
      'Enterprise client needed real-time visibility into complex data patterns with AI-powered predictive analytics.',
    solution:
      'We built a custom dashboard with WebSocket-powered real-time updates, integrated multiple data sources, and added ML-powered anomaly detection and forecasting.',
    results: [
      'Processing 1M+ data points/day',
      'Real-time insights reducing response time by 60%',
      'Predictive accuracy: 94%',
      'Adoption: 500+ daily active users',
    ],
    tags: ['Web Development', 'AI Solutions', 'Data Visualization'],
  },
  'saas-brand-launch': {
    title: 'Brand Identity & Website Launch',
    description: 'Full brand strategy, visual identity, and website launch for a Series A SaaS startup.',
    challenge:
      'A pre-launch SaaS company needed a complete brand identity, positioning, and marketing website to support their Series A fundraising and market entry.',
    solution:
      'We developed a comprehensive brand strategy, created a distinctive visual identity, and built a conversion-optimized website that told their story compellingly.',
    results: [
      'Closed $5M Series A within 3 months',
      '300% YoY growth in year 1',
      '85% conversion rate from site visit to demo request',
      'Featured in 15+ publications',
    ],
    tags: ['Brand Strategy', 'Web Design', 'Web Development'],
  },
}

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const study = caseStudies[params.slug]
  return {
    title: `${study?.title || 'Project'} | Case Study | Thannlab`,
    description: study?.description || 'Thannlab case study',
    openGraph: {
      title: `${study?.title || 'Project'} | Case Study | Thannlab`,
      description: study?.description || 'Thannlab case study',
      url: `https://thannlab.com/work/${params.slug}`,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }))
}

export default function CaseStudy({ params }: CaseStudyPageProps) {
  const study = caseStudies[params.slug]

  if (!study) {
    return (
      <>
        <Navbar />
        <main className="bg-black min-h-screen">
          <div className="container-main section-spacing">
            <h1 className="text-display-h2 text-white font-syne font-bold">
              Project Not Found
            </h1>
          </div>
        </main>
        <Footer />
      </>
    )
  }

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
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: study.title,
                  item: `https://thannlab.com/work/${params.slug}`,
                },
              ],
            }),
          }}
        />

        <div className="container-main section-spacing">
          <AnimatedSection className="max-w-3xl">
            <Link href="/work" className="text-accent hover:underline text-sm font-semibold mb-6 inline-block">
              ← Back to Work
            </Link>
            <h1 className="text-display-h2 text-white font-syne font-bold mb-6">
              {study.title}
            </h1>
            <p className="text-body text-muted mb-12">{study.description}</p>

            <div className="flex flex-wrap gap-2 mb-12">
              {study.tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className="text-label text-muted bg-mid px-3 py-1 rounded-sharp"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Challenge */}
          <AnimatedSection delay={0.08} className="max-w-3xl mb-16">
            <h2 className="text-display-h3 text-white font-syne font-bold mb-4">
              Challenge
            </h2>
            <p className="text-body text-muted">{study.challenge}</p>
          </AnimatedSection>

          {/* Solution */}
          <AnimatedSection delay={0.16} className="max-w-3xl mb-16">
            <h2 className="text-display-h3 text-white font-syne font-bold mb-4">
              Solution
            </h2>
            <p className="text-body text-muted">{study.solution}</p>
          </AnimatedSection>

          {/* Results */}
          <AnimatedSection delay={0.24} className="max-w-3xl mb-16">
            <h2 className="text-display-h3 text-white font-syne font-bold mb-6">
              Results
            </h2>
            <ul className="text-body text-muted space-y-3">
              {study.results.map((result: string, i: number) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent font-bold min-w-[1rem]">✓</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={0.32}>
            <div className="py-12 border-t border-border-subtle">
              <h3 className="text-display-h3 text-white font-syne font-bold mb-4">
                Ready to Build Something Great?
              </h3>
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
