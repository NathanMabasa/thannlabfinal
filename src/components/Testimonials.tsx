"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Thannlab transformed our online presence completely. The attention to detail is world-class — our direct bookings doubled within 60 days of launching the new site.",
    name: "Maxwell K.",
    title: "Founder",
    company: "Maxwell Stay",
    initials: "MK",
  },
  {
    quote:
      "They built exactly what we asked for, delivered on time, and the quality exceeded our expectations. Our website now generates real, qualified leads every week.",
    name: "David P.",
    title: "CEO",
    company: "Comtech Solutions",
    initials: "DP",
  },
  {
    quote:
      "The whole process was seamless. Thannlab understood our brand immediately and built something that makes us look like a premium brand. Couldn't be happier.",
    name: "Sipho M.",
    title: "Owner",
    company: "Raise The Bar",
    initials: "SM",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-32" style={{ background: "#000" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
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
            Client Results
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold leading-tight text-white"
          >
            Don&apos;t Take Our
            <br />
            <span style={{ color: "#a3e635" }}>Word For It</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="flex flex-col p-7 rounded-2xl border"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.06)",
              }}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.1 }}
              whileHover={{
                borderColor: "rgba(163,230,53,0.2)",
                background: "rgba(163,230,53,0.02)",
                y: -4,
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="13" height="13" viewBox="0 0 24 24" fill="#a3e635">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p
                className="text-sm leading-relaxed mb-6 flex-1 italic"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div
                className="flex items-center gap-3 pt-5 border-t"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold font-display shrink-0"
                  style={{ background: "rgba(163,230,53,0.12)", color: "#a3e635" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">{t.name}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
                    {t.title}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
