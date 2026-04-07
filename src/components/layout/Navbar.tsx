'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? 'border-b border-border-subtle' : ''
      }`}
    >
      <nav className="container-main flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/thannlab 1.png"
            alt="Thannlab"
            width={120}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <Link href="/about" className="text-white hover:text-accent transition-colors text-sm">
            About
          </Link>
          <Link href="/services" className="text-white hover:text-accent transition-colors text-sm">
            Services
          </Link>
          <Link href="/work" className="text-white hover:text-accent transition-colors text-sm">
            Work
          </Link>
          <Link href="/contact" className="text-white hover:text-accent transition-colors text-sm">
            Contact
          </Link>
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-6 py-3 bg-accent text-black font-semibold font-syne text-sm hover:opacity-90 transition-opacity rounded-sharp"
          >
            Start a Project →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border-subtle bg-black">
          <div className="container-main flex flex-col gap-6 py-6">
            <Link
              href="/about"
              className="text-white hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/work"
              className="text-white hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="w-full px-6 py-3 bg-accent text-black font-semibold font-syne text-sm hover:opacity-90 transition-opacity rounded-sharp text-center"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
