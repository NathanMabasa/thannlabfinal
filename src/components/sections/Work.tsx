'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/common/AnimatedSection'
import SectionLabel from '@/components/common/SectionLabel'

const projects = [
  {
    title: 'E-Commerce Platform Redesign',
    description: 'Increased conversions by 47% through strategic UX audit and design implementation.',
    tags: ['Web Design', 'Web Development', 'UX Strategy'],
    slug: 'ecommerce-redesign',
    featured: true,
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time data visualization with predictive AI insights for enterprise clients.',
    tags: ['Web Development', 'AI Solutions'],
    slug: 'ai-analytics-dashboard',
    featured: true,
  },
  {
    title: 'Brand Identity & Website Launch',
    description: 'Complete rebrand and digital presence for SaaS startup achieving 300% YoY growth.',
    tags: ['Web Design', 'Brand Strategy'],
    slug: 'saas-brand-launch',
    featured: false,
  },
]

export default function WorkSection() {
  return (
    <section className="section-spacing bg-black">
      <div className="container-main">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <AnimatedSection>
            <SectionLabel text="SELECTED WORK" className="mb-6" />
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <h2 className="text-display-h2 text-white font-syne font-bold">
              Results, Not Promises.
            </h2>
          </AnimatedSection>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.slice(0, 2).map((project, idx) => (
            <AnimatedSection
              key={idx}
              delay={0.16 + idx * 0.08}
              className="group cursor-pointer"
            >
              <Link href={`/work/${project.slug}`}>
                <div className="relative overflow-hidden rounded-sharp bg-mid border border-border-subtle aspect-video flex items-center justify-center hover:border-accent transition-all duration-300">
                  {/* Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center group-hover:from-accent/30 transition-all">
                    <span className="text-white/50 text-center">
                      {project.title}
                    </span>
                  </div>

                  {/* Overlay CTA */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-accent font-semibold text-lg">
                      View Case Study →
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="mt-6">
                  <h3 className="text-display-h3 text-white font-syne font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-body text-muted mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-label text-muted bg-mid px-3 py-1 rounded-sharp"
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

        {/* Full Width Project */}
        <AnimatedSection delay={0.32} className="mb-12">
          <Link href={`/work/${projects[2].slug}`}>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sharp bg-mid border border-border-subtle aspect-video flex items-center justify-center hover:border-accent transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center group-hover:from-accent/30 transition-all">
                  <span className="text-white/50 text-center">{projects[2].title}</span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-accent font-semibold text-lg">
                    View Case Study →
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-display-h3 text-white font-syne font-bold mb-2 group-hover:text-accent transition-colors">
                  {projects[2].title}
                </h3>
                <p className="text-body text-muted mb-4">{projects[2].description}</p>
                <div className="flex flex-wrap gap-2">
                  {projects[2].tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-label text-muted bg-mid px-3 py-1 rounded-sharp"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="text-center">
          <Link
            href="/work"
            className="px-8 py-4 border border-white text-white font-semibold font-syne hover:border-accent hover:text-accent transition-all rounded-sharp inline-flex items-center"
          >
            See All Projects →
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
