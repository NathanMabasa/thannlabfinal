'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/common/AnimatedSection'
import SectionLabel from '@/components/common/SectionLabel'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
      {/* Animated background gradient mesh */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl animate-gradient-mesh"
          style={{ opacity: 0.1 }}
        />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl animate-gradient-mesh" />
      </div>

      <div className="container-main w-full">
        <div className="text-center max-w-3xl mx-auto">
          {/* Label */}
          <AnimatedSection delay={0}>
            <SectionLabel text="Digital Agency · Web Design · AI Solutions" className="mb-8 justify-center" />
          </AnimatedSection>

          {/* H1 */}
          <AnimatedSection delay={0.08}>
            <h1 className="text-hero-h1 text-white mb-6 font-syne font-bold">
              We Build Digital Experiences That Drive Revenue.
            </h1>
          </AnimatedSection>

          {/* Subheading */}
          <AnimatedSection delay={0.16}>
            <p className="text-body text-muted mb-12 leading-relaxed max-w-2xl mx-auto">
              Thannlab partners with ambitious brands to design, build, and scale high-performance websites and AI-powered products.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection delay={0.24} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/work"
              className="px-8 py-4 bg-accent text-black font-semibold font-syne text-base hover:opacity-90 transition-opacity rounded-sharp inline-flex items-center justify-center"
            >
              View Our Work →
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white text-white font-semibold font-syne text-base hover:border-accent hover:text-accent transition-all rounded-sharp inline-flex items-center justify-center"
            >
              Get a Free Strategy Call
            </Link>
          </AnimatedSection>

          {/* Social Proof Ticker */}
          <AnimatedSection delay={0.32}>
            <div className="text-label text-muted space-x-4 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <span>50+ Projects Delivered</span>
              <span className="hidden sm:inline">·</span>
              <span>98% Client Retention</span>
              <span className="hidden sm:inline">·</span>
              <span>4.9★ Average Rating</span>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
