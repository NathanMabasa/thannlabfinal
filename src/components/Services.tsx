"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "◈",
    title: "Web Design & Development",
    description:
      "Pixel-perfect, blazing-fast websites built with the latest technologies. From landing pages to complex web applications.",
    tags: ["Next.js", "React", "Tailwind"],
  },
  {
    icon: "◉",
    title: "Brand Identity",
    description:
      "Comprehensive branding solutions — logo design, style guides, and visual identity systems that resonate and stick.",
    tags: ["Logo", "Style Guide", "Identity"],
  },
  {
    icon: "◎",
    title: "Digital Strategy",
    description:
      "Data-driven strategies to grow your digital presence, improve conversions, and maximize ROI across all channels.",
    tags: ["SEO", "Analytics", "CRO"],
  },
  {
    icon: "⬡",
    title: "E-Commerce Solutions",
    description:
      "Powerful online stores that convert browsers into buyers. Custom Shopify, WooCommerce, and headless solutions.",
    tags: ["Shopify", "WooCommerce", "Headless"],
  },
  {
    icon: "⬟",
    title: "UI/UX Design",
    description:
      "User-centric design balancing aesthetics and function. Creating interfaces people genuinely love to use.",
    tags: ["Figma", "Prototyping", "Research"],
  },
  {
    icon: "◆",
    title: "Content & SEO",
    description:
      "Strategic content creation and search optimization to drive organic growth and establish topical authority.",
    tags: ["Content", "SEO", "Copywriting"],
  },
];

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="py-24 md:py-36" style={{ background: "#000" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-display font-medium border mb-6"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              <span style={{ color: "#a3e635" }}>✦</span>
              What We Do
            </span>
            <h2
              className="font-display text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: "#fff" }}
            >
              Services Built for
              <br />
              <span style={{ color: "#a3e635" }}>Modern Businesses</span>
            </h2>
          </motion.div>
          <motion.p
            className="text-sm max-w-xs leading-relaxed hidden md:block"
            style={{ color: "rgba(255,255,255,0.35)" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            End-to-end digital solutions designed to elevate your brand and accelerate growth.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group p-6 rounded-2xl border cursor-default"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.06)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.07 }}
              whileHover={{
                background: "rgba(163,230,53,0.04)",
                borderColor: "rgba(163,230,53,0.18)",
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 flex items-center justify-center rounded-xl text-lg mb-5"
                style={{
                  background: "rgba(163,230,53,0.08)",
                  color: "#a3e635",
                }}
              >
                {service.icon}
              </div>

              <h3
                className="font-display text-base font-semibold text-white mb-2.5 leading-snug"
              >
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.38)" }}>
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-lg border"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.35)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
