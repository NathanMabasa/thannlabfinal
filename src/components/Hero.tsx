"use client";

import { motion } from "framer-motion";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Figma",
  "Tailwind CSS",
  "Shopify",
  "WordPress",
  "Framer",
  "PostgreSQL",
  "Vercel",
  "AWS",
  "GraphQL",
  "Prisma",
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* Radial lime glow behind headline */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(163,230,53,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 100%)",
        }}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16 pt-28 pb-12">
        {/* Badge */}
        <motion.div
          className="inline-flex self-start mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs font-display font-medium border"
            style={{
              background: "rgba(163,230,53,0.07)",
              borderColor: "rgba(163,230,53,0.2)",
              color: "#a3e635",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "#a3e635",
                boxShadow: "0 0 8px #a3e635",
              }}
            />
            South Africa's No.1 Digital Agency
          </div>
        </motion.div>

        {/* Headline */}
        <div className="mb-8">
          <motion.h1
            className="font-display text-[clamp(2.8rem,8vw,6.5rem)] font-bold leading-[0.9] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <span
              className="block"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.5) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Premium
            </span>
            <span
              className="block"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.5) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Digital Agency
            </span>
            <span
              className="block"
              style={{
                backgroundImage: "linear-gradient(90deg, #a3e635 0%, rgba(163,230,53,0.4) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              for Startups.
            </span>
          </motion.h1>
        </div>

        {/* Body */}
        <motion.p
          className="text-base md:text-lg max-w-md mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          We design and develop high-performance digital experiences that help
          ambitious businesses grow, stand out, and dominate their industries.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-display font-semibold rounded-xl text-black transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
            style={{
              background: "#a3e635",
              boxShadow: "0 8px 32px rgba(163,230,53,0.32)",
            }}
          >
            Start a Project
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-display font-medium rounded-xl text-white transition-all duration-200 border hover:bg-white/5"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderColor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
            }}
          >
            View Our Work
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          className="flex items-center flex-wrap gap-x-5 gap-y-2 mb-20 md:mb-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.58 }}
        >
          <div>
            <span className="font-display text-sm font-bold text-white">50+</span>
            <span className="text-xs ml-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>Projects</span>
          </div>
          <div className="w-px h-4 hidden sm:block" style={{ background: "rgba(255,255,255,0.1)" }} />
          <div>
            <span className="font-display text-sm font-bold text-white">30+</span>
            <span className="text-xs ml-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>Clients</span>
          </div>
          <div className="w-px h-4 hidden sm:block" style={{ background: "rgba(255,255,255,0.1)" }} />
          <div>
            <span className="font-display text-sm font-bold text-white">21 days</span>
            <span className="text-xs ml-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>Avg. delivery</span>
          </div>
          <div className="w-px h-4 hidden sm:block" style={{ background: "rgba(255,255,255,0.1)" }} />
          <div>
            <span className="font-display text-sm font-bold text-white">100%</span>
            <span className="text-xs ml-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>Satisfaction</span>
          </div>
        </motion.div>
      </div>

      {/* Tech ticker */}
      <motion.div
        className="w-full border-t py-5 overflow-hidden relative"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        {/* Fade left */}
        <div
          className="absolute inset-y-0 left-0 z-10 w-24 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #000, transparent)",
          }}
        />
        {/* Fade right */}
        <div
          className="absolute inset-y-0 right-0 z-10 w-24 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #000, transparent)",
          }}
        />

        <div className="ticker-track">
          {[...techStack, ...techStack].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-5 px-5 whitespace-nowrap select-none"
            >
              <span
                className="text-sm font-display"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                {item}
              </span>
              <span style={{ color: "rgba(163,230,53,0.35)", fontSize: "9px" }}>
                ✦
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
