import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'

export const metadata: Metadata = {
  title: 'Contact | Thannlab',
  description: 'Get in touch with Thannlab. We'd love to discuss your next project and how we can help drive your growth.',
  openGraph: {
    title: 'Contact | Thannlab',
    description: 'Get in touch with Thannlab. We'd love to discuss your next project and how we can help drive your growth.',
    url: 'https://thannlab.com/contact',
  },
}

export default function Contact() {
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
                  name: 'Contact',
                  item: 'https://thannlab.com/contact',
                },
              ],
            }),
          }}
        />

        <div className="container-main section-spacing">
          <AnimatedSection className="max-w-2xl mx-auto">
            <h1 className="text-display-h2 text-white font-syne font-bold mb-6">
              Let's Talk
            </h1>
            <p className="text-body text-muted mb-12">
              Ready to discuss your next project? Fill out the form below, and we'll reach out within 24 hours.
            </p>

            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <label className="text-label text-white mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-6 py-4 bg-mid border border-border-subtle text-white placeholder-muted rounded-sharp focus:outline-none focus:border-accent transition-colors"
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div>
                <label className="text-label text-white mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-6 py-4 bg-mid border border-border-subtle text-white placeholder-muted rounded-sharp focus:outline-none focus:border-accent transition-colors"
                  placeholder="jane@company.com"
                  required
                />
              </div>

              <div>
                <label className="text-label text-white mb-2 block">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-6 py-4 bg-mid border border-border-subtle text-white placeholder-muted rounded-sharp focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="text-label text-white mb-2 block">
                  What's your project about?
                </label>
                <textarea
                  className="w-full px-6 py-4 bg-mid border border-border-subtle text-white placeholder-muted rounded-sharp focus:outline-none focus:border-accent transition-colors resize-none"
                  rows={5}
                  placeholder="Tell us about your vision..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent text-black font-semibold font-syne hover:opacity-90 transition-opacity rounded-sharp"
              >
                Send Message →
              </button>

              <p className="text-label text-muted text-center">
                We'll respond within 24 hours
              </p>
            </form>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  )
}
