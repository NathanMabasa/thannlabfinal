'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const loaderRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Animate logo scramble effect
    const scrambleText = (element: HTMLElement | null, text: string, duration: number) => {
      if (!element) return

      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
      const originalText = text
      let iteration = 0
      const maxIterations = 30

      const startTime = Date.now()
      const startInterval = setInterval(() => {
        iteration++
        let displayText = ''

        for (let i = 0; i < originalText.length; i++) {
          if (i < (iteration / maxIterations) * originalText.length) {
            displayText += originalText[i]
          } else {
            displayText += chars[Math.floor(Math.random() * chars.length)]
          }
        }

        element.textContent = displayText

        if (iteration >= maxIterations) {
          clearInterval(startInterval)
          element.textContent = originalText
        }
      }, duration / maxIterations)
    }

    // Start loading animation
    tl.to(logoRef.current, { opacity: 1, duration: 0.3 })
      .to(textRef.current, { opacity: 1, duration: 0.3 }, '-=0.2')
      .call(() => {
        scrambleText(textRef.current, 'THANNLAB', 800)
      })

    // Animate progress bar
    const progressTl = gsap.timeline()
    progressTl
      .to(progressRef.current, { width: '40%', duration: 0.8 })
      .to(progressRef.current, { width: '70%', duration: 1.2 })
      .to(progressRef.current, { width: '90%', duration: 0.6 })

    // Simulate loading completion
    setTimeout(() => {
      tl.to(loaderRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => {
          setIsLoading(false)
        },
      })
    }, 3000)

    return () => {
      tl.kill()
      progressTl.kill()
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-black z-[10000] flex flex-col items-center justify-center"
    >
      {/* Logo */}
      <div ref={logoRef} className="mb-8 opacity-0">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          className="w-20 h-20"
        >
          <circle cx="40" cy="40" r="38" fill="none" stroke="#C8FF00" strokeWidth="2" />
          <text
            x="40"
            y="50"
            textAnchor="middle"
            fill="#C8FF00"
            fontSize="48"
            fontWeight="800"
            fontFamily="Syne"
          >
            ●
          </text>
        </svg>
      </div>

      {/* Scrambling text */}
      <div
        ref={textRef}
        className="mb-12 text-4xl font-bold font-syne text-white opacity-0"
      >
        THANNLAB
      </div>

      {/* Progress bar */}
      <div className="w-32 h-1 bg-mid rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-accent rounded-full"
          style={{ width: '0%' }}
        />
      </div>

      {/* Microcopy */}
      <p className="mt-8 text-sm text-muted">Crafting your experience...</p>
    </div>
  )
}
