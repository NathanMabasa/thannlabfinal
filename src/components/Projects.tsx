"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    domain: "maxwellstay.co.za",
    title: "Maxwell Stay",
    category: "Hospitality",
    year: "2024",
    description: "Luxury accommodation booking platform",
  },
  {
    domain: "comtechsolutions.co.za",
    title: "Comtech Solutions",
    category: "Technology",
    year: "2024",
    description: "Enterprise IT solutions & managed services",
  },
  {
    domain: "themediakrate.co.za",
    title: "The Media Krate",
    category: "Media",
    year: "2024",
    description: "Full-service media & production agency",
  },
  {
    domain: "raisethebaree.co.za",
    title: "Raise The Bar",
    category: "Food & Beverage",
    year: "2024",
    description: "Premium restaurant & events venue",
  },
  {
    domain: "nathanmabasa.com",
    title: "Nathan Mabasa",
    category: "Personal Brand",
    year: "2025",
    description: "Portfolio & personal brand website",
  },
  {
    domain: "ten4teen.com",
    title: "Ten4Teen",
    category: "Fashion",
    year: "2025",
    description: "Youth fashion brand & online store",
  },
  {
    domain: "3js.co.za",
    title: "3J",
    category: "Business",
    year: "2025",
    description: "Professional business solutions & services",
  },
];

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" ref={ref} className="py-24 md:py-36" style={{ background: "#000" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div>
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-display font-medium border mb-6"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              <span style={{ color: "#a3e635" }}>✦</span>
              Selected Work
            </span>
            <h2
              className="font-display text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: "#fff" }}
            >
              Projects That
              <br />
              <span style={{ color: "#a3e635" }}>Speak Volumes</span>
            </h2>
          </div>
          <span className="text-sm font-display" style={{ color: "rgba(255,255,255,0.25)" }}>
            2024 — 2025
          </span>
        </motion.div>

        {/* Project list */}
        <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          {projects.map((project, index) => (
            <motion.a
              key={project.domain}
              href={`https://${project.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-5 md:py-6 border-b gap-4"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 + index * 0.06 }}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              {/* Left info */}
              <div className="flex items-center gap-6 md:gap-10 min-w-0">
                <span
                  className="text-xs font-mono shrink-0 hidden md:block"
                  style={{ color: "rgba(255,255,255,0.18)" }}
                >
                  0{index + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-0.5 transition-colors duration-200 group-hover:text-[#a3e635]"
                    style={{ color: "#fff" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm truncate hidden md:block" style={{ color: "rgba(255,255,255,0.28)" }}>
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Right meta */}
              <div className="flex items-center gap-4 md:gap-6 shrink-0">
                <span
                  className="text-xs px-3 py-1.5 rounded-lg border hidden md:inline-block"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {project.category}
                </span>
                <span
                  className="text-xs font-mono"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  {project.year}
                </span>
                <div
                  className="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 group-hover:border-[#a3e635] group-hover:text-[#a3e635]"
                  style={{
                    borderColor: "rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.25)",
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-display font-medium rounded-xl border transition-all duration-200 hover:border-[#a3e635]/30 hover:text-[#a3e635]"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.45)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            Start Your Project
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
