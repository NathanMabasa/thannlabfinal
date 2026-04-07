'use client'

import AnimatedSection from '@/components/common/AnimatedSection'

const differentiators = [
  'Strategy-first, always',
  'Conversion-engineered design',
  'AI-accelerated delivery',
  'You own everything, always',
]

export default function WhyThannlabSection() {
  return (
    <section className="section-spacing bg-white text-black">
      <div className="container-main">
        <h2 className="text-display-h2 font-syne font-bold mb-16">
          Most Agencies Deliver Files. We Deliver Growth.
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column - The Problem */}
          <AnimatedSection>
            <h3 className="text-display-h3 font-syne font-bold mb-6">
              The Problem
            </h3>
            <p className="text-body leading-relaxed">
              You've worked with agencies before. You got beautiful decks, missed deadlines, and a website that didn't move the needle. Your competitors weren't waiting. Every week without a high-performance digital presence is revenue left on the table.
            </p>
          </AnimatedSection>

          {/* Right Column - Solutions */}
          <div>
            <h3 className="text-display-h3 font-syne font-bold mb-8">
              Our Approach
            </h3>
            <div className="space-y-6">
              {differentiators.map((item, idx) => (
                <AnimatedSection key={idx} delay={0.08 + idx * 0.08}>
                  <div className="flex gap-6 items-start">
                    <span className="text-accent font-bold text-xl font-syne min-w-[3rem]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <p className="text-body">{item}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
