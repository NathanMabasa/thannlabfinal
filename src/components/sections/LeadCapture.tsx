'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/common/AnimatedSection'

export default function LeadCaptureSection() {
  return (
    <section className="section-spacing bg-accent text-black">
      <div className="container-main text-center">
        <AnimatedSection className="max-w-2xl mx-auto">
          <h2 className="text-display-h2 font-syne font-bold mb-6">
            Your Competitors Aren't Waiting.
          </h2>
          <p className="text-body mb-12">
            Every week without a high-performance website is revenue left on the table. Let's fix that.
          </p>

          {/* Email Capture Form */}
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 bg-black text-white placeholder-muted rounded-sharp focus:outline-none focus:ring-2 focus:ring-black/50"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-black text-accent font-semibold font-syne whitespace-nowrap hover:opacity-90 transition-opacity rounded-sharp"
            >
              Get Free Audit →
            </button>
          </form>

          {/* Microcopy */}
          <p className="text-label text-black/70">
            Free 30-min strategy call. No pitch. No BS.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
