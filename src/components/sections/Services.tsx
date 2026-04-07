'use client'

import Link from 'next/link'
import { Layers, Code2, Brain } from 'lucide-react'
import AnimatedSection from '@/components/common/AnimatedSection'
import SectionLabel from '@/components/common/SectionLabel'

const services = [
  {
    icon: Layers,
    title: 'Design That Commands Attention',
    description:
      'Awwwards-calibre interfaces built on data, not decoration. Every layout earns its place.',
    link: '/services/web-design',
    label: 'Explore Web Design',
  },
  {
    icon: Code2,
    title: 'Code Built for Speed & Scale',
    description:
      'Next.js, TypeScript, edge-deployed. Sub-2s load times as a baseline, not a goal.',
    link: '/services/web-development',
    label: 'Explore Development',
  },
  {
    icon: Brain,
    title: 'AI That Works While You Sleep',
    description:
      'Custom LLM integrations, automation pipelines, and AI-powered products that create unfair advantages.',
    link: '/services/ai-solutions',
    label: 'Explore AI Solutions',
  },
]

export default function ServicesSection() {
  return (
    <section className="section-spacing bg-black">
      <div className="container-main">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <AnimatedSection>
            <SectionLabel text="WHAT WE DO" className="mb-6" />
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <h2 className="text-display-h2 text-white font-syne font-bold">
              Every Pixel. Every Line of Code. Engineered to Convert.
            </h2>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <AnimatedSection
                key={idx}
                delay={0.16 + idx * 0.08}
                className="group"
              >
                <Link href={service.link}>
                  <div className="p-8 bg-mid border border-border-subtle rounded-sharp hover:border-accent transition-all duration-300 h-full flex flex-col hover:translate-y-[-4px]">
                    {/* Icon */}
                    <div className="mb-6 inline-flex">
                      <Icon size={32} className="text-accent" />
                    </div>

                    {/* Title */}
                    <h3 className="text-display-h3 text-white font-syne font-bold mb-4 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-body text-muted mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Link */}
                    <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                      {service.label}
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
