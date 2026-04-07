'use client'

import { useEffect, useRef } from 'react'

export default function MarqueeTicker() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  const services = [
    'WEB DESIGN',
    'WEB DEVELOPMENT',
    'AI SOLUTIONS',
    'BRAND STRATEGY',
    'CONVERSION OPTIMIZATION',
    'UI/UX DESIGN',
    'NEXT.JS',
    'FRAMER',
  ]

  // Duplicate array for seamless loop
  const displayItems = [...services, ...services]

  return (
    <div className="bg-black py-8 overflow-hidden border-y border-border-subtle">
      <div
        ref={marqueeRef}
        className="flex gap-8 animate-marquee"
        onMouseEnter={(e) => {
          const element = e.currentTarget
          element.style.animationPlayState = 'paused'
        }}
        onMouseLeave={(e) => {
          const element = e.currentTarget
          element.style.animationPlayState = 'running'
        }}
      >
        {displayItems.map((service, idx) => (
          <div key={idx} className="flex items-center gap-8 whitespace-nowrap">
            <span className="text-label text-white font-syne">{service}</span>
            <span className="text-white">•</span>
          </div>
        ))}
      </div>
    </div>
  )
}
