// Smooth scroll provider - Lenis + GSAP ScrollTrigger
// This file should be moved to src/providers/SmoothScrollProvider.tsx after directory creation

'use client'

import { useEffect } from 'react'

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Lenis will be initialized here when ready
    // For now, this is a placeholder
  }, [])

  return <>{children}</>
}
