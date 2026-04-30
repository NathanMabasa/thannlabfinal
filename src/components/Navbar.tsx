"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviceLinks = [
  { label: "All Services", href: "/services", desc: "Full overview" },
  { label: "AI Solutions", href: "/ai-solutions", desc: "Chatbots & automation" },
  { label: "Cybersecurity", href: "/cybersecurity", desc: "Audits & protection" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          background: scrolled
            ? "rgba(0,0,0,0.88)"
            : "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center group">
              <span
                className="font-display font-bold text-white"
                style={{ fontSize: "1.45rem", letterSpacing: "-0.02em" }}
              >
                thannlab
              </span>
              <span
                className="inline-block leading-none transition-transform duration-300 group-hover:rotate-45"
                style={{
                  color: "#a3e635",
                  fontSize: "3.2rem",
                  lineHeight: 0.78,
                  marginLeft: "2px",
                  display: "inline-block",
                }}
              >.</span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              <a href="/" className="px-4 py-2 text-sm rounded-lg transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(255,255,255,0.5)" }}>
                Home
              </a>
              <a href="/about" className="px-4 py-2 text-sm rounded-lg transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(255,255,255,0.5)" }}>
                About
              </a>

              {/* Services dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  className="flex items-center gap-1 px-4 py-2 text-sm rounded-lg transition-colors duration-200 hover:text-white"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  Services
                  <svg
                    width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    className="transition-transform duration-200"
                    style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-56 rounded-2xl border overflow-hidden"
                      style={{
                        background: "rgba(10,10,10,0.97)",
                        borderColor: "rgba(255,255,255,0.08)",
                        backdropFilter: "blur(20px)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                      }}
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <div className="p-2">
                        {serviceLinks.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            className="flex flex-col px-3 py-3 rounded-xl transition-all duration-150 group"
                            style={{ color: "rgba(255,255,255,0.7)" }}
                            onMouseEnter={e => (e.currentTarget.style.background = "rgba(163,230,53,0.07)")}
                            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                            onClick={() => setServicesOpen(false)}
                          >
                            <span className="text-sm font-display font-medium group-hover:text-white transition-colors">
                              {link.label}
                            </span>
                            <span className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                              {link.desc}
                            </span>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="/work" className="px-4 py-2 text-sm rounded-lg transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(255,255,255,0.5)" }}>
                Work
              </a>
              <a href="/pricing" className="px-4 py-2 text-sm rounded-lg transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(255,255,255,0.5)" }}>
                Pricing
              </a>
              <a href="/contact" className="px-4 py-2 text-sm rounded-lg transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(255,255,255,0.5)" }}>
                Contact
              </a>
            </div>

            {/* CTA */}
            <a
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-display font-semibold rounded-xl text-black transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
              style={{ background: "#a3e635", boxShadow: "0 4px 20px rgba(163,230,53,0.28)" }}
            >
              Start a Project
            </a>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 rounded-lg"
              style={{ color: "rgba(255,255,255,0.7)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round">
                {mobileOpen ? (
                  <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                ) : (
                  <><line x1="3" y1="8" x2="21" y2="8" /><line x1="3" y1="16" x2="21" y2="16" /></>
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col pt-20 px-6 pb-10 overflow-y-auto"
            style={{ background: "rgba(0,0,0,0.97)", backdropFilter: "blur(20px)" }}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
          >
            {[{ label: "Home", href: "/" }, { label: "About", href: "/about" }].map((link, i) => (
              <motion.a key={link.label} href={link.href}
                className="py-4 text-2xl font-display font-semibold text-white border-b"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}

            {/* Mobile Services accordion */}
            <motion.div className="border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <button
                className="w-full flex items-center justify-between py-4 text-2xl font-display font-semibold text-white"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  className="transition-transform duration-200"
                  style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div className="pb-4 space-y-1"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}>
                    {serviceLinks.map((link) => (
                      <a key={link.href} href={link.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                        onClick={() => setMobileOpen(false)}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#a3e635" }} />
                        {link.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {[{ label: "Work", href: "/work" }, { label: "Pricing", href: "/pricing" }, { label: "Contact", href: "/contact" }].map((link, i) => (
              <motion.a key={link.label} href={link.href}
                className="py-4 text-2xl font-display font-semibold text-white border-b"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.05 }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}

            <div className="mt-8">
              <a href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-display font-semibold rounded-xl text-black"
                style={{ background: "#a3e635" }}
                onClick={() => setMobileOpen(false)}>
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
