'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const posX = useRef(0)
  const posY = useRef(0)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    // Update position with GSAP lerp
    const updatePosition = () => {
      gsap.to(follower, {
        x: posX.current,
        y: posY.current,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      posX.current = e.clientX
      posY.current = e.clientY

      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
        overwrite: 'auto',
      })

      updatePosition()
    }

    // Magnetic effect on interactive elements
    const handleMouseOverInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"]')) {
        gsap.to(follower, {
          width: 60,
          height: 60,
          borderWidth: 2,
          duration: 0.3,
        })
      }
    }

    const handleMouseLeaveInteractive = () => {
      gsap.to(follower, {
        width: 12,
        height: 12,
        borderWidth: 1,
        duration: 0.3,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOverInteractive)
    document.addEventListener('mouseout', handleMouseLeaveInteractive)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOverInteractive)
      document.removeEventListener('mouseout', handleMouseLeaveInteractive)
    }
  }, [])

  return (
    <>
      {/* Cursor dot (follows instantly) */}
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-mode-lighten"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      {/* Cursor follower (lags behind) */}
      <div
        ref={followerRef}
        className="fixed w-3 h-3 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  )
}
