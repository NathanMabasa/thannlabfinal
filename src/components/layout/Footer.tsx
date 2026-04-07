'use client'

import Link from 'next/link'
import { Linkedin, Twitter, Github } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-border-subtle section-spacing">
      <div className="container-main">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16 pb-16 border-b border-border-subtle">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-syne text-white mb-4">THANNLAB</h3>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              A premium digital agency specializing in web design, web development, and AI-powered solutions.
            </p>
            <div className="flex gap-6 mt-8">
              <a
                href="https://linkedin.com/company/thannlab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/thannlab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com/thannlab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-label text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/web-design" className="text-sm text-muted hover:text-accent transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-sm text-muted hover:text-accent transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/ai-solutions" className="text-sm text-muted hover:text-accent transition-colors">
                  AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-label text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-sm text-muted hover:text-accent transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-label text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted hover:text-accent transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {currentYear} Thannlab. All rights reserved.</p>
          <p>Built with Next.js &amp; ☕</p>
        </div>
      </div>
    </footer>
  )
}
