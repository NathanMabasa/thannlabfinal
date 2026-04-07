import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Blog | Thannlab',
  description: 'Insights, case studies, and articles about web design, development, and AI.',
  openGraph: {
    title: 'Blog | Thannlab',
    description: 'Insights, case studies, and articles about web design, development, and AI.',
    url: 'https://thannlab.com/blog',
  },
}

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen">
        <div className="container-main section-spacing">
          <h1 className="text-display-h2 text-white font-syne font-bold mb-6">
            Blog
          </h1>
          <p className="text-body text-muted">
            Blog content coming soon. Stay tuned for insights, case studies, and articles about web design, development, and AI.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
