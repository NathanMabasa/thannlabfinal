import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Solutions | Services | Thannlab',
  description: 'Custom LLM integrations, automation pipelines, and AI-powered products that create competitive advantages.',
  openGraph: {
    title: 'AI Solutions | Services | Thannlab',
    description: 'Custom LLM integrations, automation pipelines, and AI-powered products that create competitive advantages.',
    url: 'https://thannlab.com/services/ai-solutions',
  },
}

export default function AISolutions() {
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
                  name: 'AI Solutions',
                  item: 'https://thannlab.com/services/ai-solutions',
                },
              ],
            }),
          }}
        />

        <div className="container-main section-spacing">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-display-h2 text-white font-syne font-bold mb-6">
              AI Solutions
            </h1>
            <p className="text-body text-muted mb-12">
              AI that works while you sleep. Custom LLM integrations, automation pipelines, and AI-powered products that create unfair competitive advantages.
            </p>

            <h2 className="text-display-h3 text-white font-syne font-bold mb-4">
              Use Cases
            </h2>
            <p className="text-body text-muted mb-12">
              From customer service automation to predictive analytics, intelligent content generation to personalized recommendations—we build AI systems tailored to your unique business needs.
            </p>

            <h2 className="text-display-h3 text-white font-syne font-bold mb-4">
              What You Get
            </h2>
            <ul className="text-body text-muted space-y-3 mb-12">
              <li>• Custom LLM fine-tuning & integration</li>
              <li>• RAG (Retrieval Augmented Generation) pipelines</li>
              <li>• Automation workflows & agents</li>
              <li>• Data analysis & insights generation</li>
              <li>• Scalable, secure architecture</li>
              <li>• Ongoing optimization & monitoring</li>
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
