"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} style={{ background: "#000" }}>
      {/* CTA block */}
      <div className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div
            className="relative rounded-3xl p-10 md:p-16 lg:p-20 overflow-hidden border"
            style={{
              background:
                "linear-gradient(135deg, rgba(163,230,53,0.055) 0%, rgba(0,0,0,0) 55%)",
              borderColor: "rgba(163,230,53,0.1)",
            }}
          >
            {/* Glow blobs */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 55% 70% at 8% 50%, rgba(163,230,53,0.06) 0%, transparent 65%)",
              }}
            />
            <div
              className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(163,230,53,0.06) 0%, transparent 65%)",
              }}
            />

            <div className="relative z-10 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <span
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-display font-medium border mb-8"
                  style={{
                    background: "rgba(163,230,53,0.07)",
                    borderColor: "rgba(163,230,53,0.18)",
                    color: "#a3e635",
                  }}
                >
                  ✦ Let's Build Together
                </span>
              </motion.div>

              <motion.h2
                className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
              >
                <span style={{ color: "#fff" }}>Ready to Start</span>
                <br />
                <span style={{ color: "#a3e635" }}>Your Project?</span>
              </motion.h2>

              <motion.p
                className="text-base md:text-lg mb-10 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.45)" }}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 }}
              >
                Have a project in mind? We'd love to hear about it. Drop us a message
                and we'll get back to you within 24 hours.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-3"
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.3 }}
              >
                <a
                  href="mailto:hello@thannlab.co.za"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-display font-semibold rounded-xl text-black transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
                  style={{
                    background: "#a3e635",
                    boxShadow: "0 8px 32px rgba(163,230,53,0.32)",
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  hello@thannlab.co.za
                </a>
                <a
                  href="https://wa.me/27000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-display font-medium rounded-xl border transition-all duration-200 hover:bg-white/5 hover:border-white/20"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 10 19.79 19.79 0 0 1 1.85 1.4 2 2 0 0 1 3.84.02h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.91 6.91l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  WhatsApp Us
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="border-t py-8"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            {/* Logo */}
            <a href="/" className="flex items-center gap-0.5">
              <span className="font-display font-bold text-base text-white tracking-tight">
                thannlab
              </span>
              <span style={{ color: "#a3e635", fontSize: "1.25rem" }}>.</span>
            </a>

            {/* Links */}
            <div className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs transition-colors duration-200 hover:text-white"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.22)" }}>
              © 2025 Thannlab · Johannesburg, SA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
