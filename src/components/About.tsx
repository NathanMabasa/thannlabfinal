"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
});

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-36" style={{ background: "#000" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Label */}
        <motion.div
          {...fadeUp(0)}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          className="mb-14"
        >
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-display font-medium border"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            <span style={{ color: "#a3e635" }}>✦</span>
            About Thannlab
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — text */}
          <div>
            <motion.h2
              className="font-display text-4xl md:text-5xl font-bold leading-[1.05] mb-7"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            >
              <span style={{ color: "#fff" }}>Building Stronger</span>
              <br />
              <span style={{ color: "rgba(255,255,255,0.3)" }}>Brands.</span>
              <span style={{ color: "#a3e635" }}> Creating</span>
              <br />
              <span style={{ color: "rgba(255,255,255,0.3)" }}>Real Impact.</span>
            </motion.h2>

            <motion.p
              className="text-base leading-relaxed mb-5"
              style={{ color: "rgba(255,255,255,0.45)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              Thannlab is a full-service digital agency based in Johannesburg, South Africa.
              We specialize in crafting stunning websites, powerful brand identities, and
              digital solutions that drive measurable business results.
            </motion.p>

            <motion.p
              className="text-base leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.45)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.28 }}
            >
              From startups finding their voice to established businesses scaling their
              reach, we partner with ambitious teams to transform vision into exceptional
              digital experiences.
            </motion.p>

            {/* Bullet points */}
            <motion.div
              className="space-y-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.34 }}
            >
              {[
                "From concept to launch in record time",
                "Pixel-perfect design with blazing-fast performance",
                "Ongoing support & growth strategy",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span
                    className="mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(163,230,53,0.12)" }}
                  >
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#a3e635"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {point}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-display font-semibold rounded-xl text-black transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
              style={{
                background: "#a3e635",
                boxShadow: "0 4px 20px rgba(163,230,53,0.28)",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.42 }}
            >
              Work With Us
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
            </motion.a>
          </div>

          {/* Right — stats + testimonial */}
          <div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="p-6 rounded-2xl border transition-all duration-300 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    borderColor: "rgba(255,255,255,0.07)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  whileHover={{
                    borderColor: "rgba(163,230,53,0.3)",
                    background: "rgba(163,230,53,0.04)",
                    y: -3,
                  }}
                >
                  <div
                    className="font-display text-3xl md:text-4xl font-bold mb-1.5"
                    style={{ color: "#a3e635" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <motion.div
              className="p-6 rounded-2xl border"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.06)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#a3e635">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p
                className="text-sm leading-relaxed mb-4 italic"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                "Thannlab completely transformed our online presence. The quality of work and
                attention to detail is truly world-class. Our conversions doubled."
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold font-display"
                  style={{ background: "rgba(163,230,53,0.12)", color: "#a3e635" }}
                >
                  M
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Maxwell K.</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                    Maxwell Stay
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
