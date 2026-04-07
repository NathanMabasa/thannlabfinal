'use client'

import AnimatedSection from '@/components/common/AnimatedSection'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Thannlab transformed our digital presence. The design is stunning, but what impressed us most was their focus on conversion optimization. Our traffic tripled within 6 months.',
    author: 'Sarah Chen',
    company: 'TechVenture Co',
    rating: 5,
  },
  {
    quote: 'Working with Thannlab was like having a strategic partner, not just a vendor. They asked the right questions, pushed back on bad ideas, and delivered beyond expectations.',
    author: 'Marcus Williams',
    company: 'Growth Capital',
    rating: 5,
  },
  {
    quote: 'The AI solutions they built for us cut our manual processing time by 70%. ROI was clear within the first month. Highly recommend.',
    author: 'Elena Rossi',
    company: 'DataFlow Systems',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000) // Auto-rotate every 8 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-spacing bg-black">
      <div className="container-main">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-display-h2 text-white font-syne font-bold">
            Don't Take Our Word For It.
          </h2>
        </AnimatedSection>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <AnimatedSection delay={0.16}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-12 bg-mid border border-border-subtle rounded-sharp text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-2 mb-8">
                {Array(testimonials[currentIndex].rating)
                  .fill(null)
                  .map((_, i) => (
                    <span key={i} className="text-accent text-xl">
                      ★
                    </span>
                  ))}
              </div>

              {/* Quote */}
              <p className="text-body text-white mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Author */}
              <div>
                <p className="text-display-h3 text-white font-syne font-bold">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-muted">{testimonials[currentIndex].company}</p>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'bg-accent w-8'
                    : 'bg-border-subtle w-2 hover:bg-muted'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
