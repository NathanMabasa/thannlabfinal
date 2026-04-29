"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    duration: "Day 1",
    description:
      "We start with a free 30-minute call to understand your business, goals, audience, and budget. No pressure, no sales pitch — just a genuine conversation to see if we're the right fit.",
    deliverables: ["Project brief", "Scope document", "Timeline estimate"],
    icon: "◎",
  },
  {
    number: "02",
    title: "Strategy & Proposal",
    duration: "Days 2–3",
    description:
      "We analyse your competitors, audience, and goals, then put together a detailed proposal outlining exactly what we'll build, how long it'll take, and what it'll cost. Total transparency.",
    deliverables: ["Detailed proposal", "Fixed quote", "Project timeline"],
    icon: "◈",
  },
  {
    number: "03",
    title: "Design",
    duration: "Days 4–10",
    description:
      "We create high-fidelity mockups of your project in Figma. You'll see exactly what it looks like before a single line of code is written. We refine until you're 100% happy.",
    deliverables: ["Figma mockups", "Design system", "2 revision rounds"],
    icon: "⬟",
  },
  {
    number: "04",
    title: "Development",
    duration: "Days 10–18",
    description:
      "We build your approved designs using modern, performance-first technology. You get access to a live staging environment so you can track progress in real time.",
    deliverables: ["Live staging link", "Weekly updates", "QA testing"],
    icon: "◉",
  },
  {
    number: "05",
    title: "Review & Refinement",
    duration: "Days 18–20",
    description:
      "You test everything thoroughly. We address your feedback quickly and precisely. This is where the details that matter to you get perfected.",
    deliverables: ["Feedback round", "Cross-browser testing", "Mobile testing"],
    icon: "◆",
  },
  {
    number: "06",
    title: "Launch",
    duration: "Day 21",
    description:
      "We deploy to your live domain, configure DNS, set up analytics, submit your sitemap to Google, and do a final performance check. Your project goes live on time.",
    deliverables: ["Live deployment", "DNS configuration", "Google Search Console"],
    icon: "⬡",
  },
  {
    number: "07",
    title: "Post-Launch Support",
    duration: "Days 21–35",
    description:
      "We don't disappear after launch. You get 14 days of included support to catch anything that needs tweaking. After that, we offer ongoing retainers to keep everything running smoothly.",
    deliverables: ["14-day support", "Performance monitoring", "Handover session"],
    icon: "◈",
  },
];

const values = [
  { title: "Clear communication", desc: "You always know where your project stands. No chasing, no confusion." },
  { title: "Fixed timelines", desc: "We agree on a deadline and we meet it. Every time." },
  { title: "Fixed pricing", desc: "Your quote is your price. No surprise invoices." },
  { title: "You own everything", desc: "Source code, designs, accounts — it all belongs to you." },
];

export function ProcessSection() {
  const ref = useRef(null);
  const valRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const valInView = useInView(valRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Steps */}
      <section ref={ref} className="py-16 md:py-24" style={{ background: "#000" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="relative">
            {/* Vertical line on desktop */}
            <div
              className="absolute left-[1.85rem] top-0 bottom-0 w-px hidden md:block"
              style={{ background: "linear-gradient(to bottom, rgba(163,230,53,0.3), rgba(163,230,53,0))" }}
            />

            <div className="space-y-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="relative flex gap-6 md:gap-10"
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.07 }}
                >
                  {/* Number circle */}
                  <div className="shrink-0 z-10">
                    <div
                      className="w-[3.7rem] h-[3.7rem] rounded-full border flex items-center justify-center font-display font-bold text-sm"
                      style={{
                        background: "#000",
                        borderColor: "rgba(163,230,53,0.25)",
                        color: "#a3e635",
                      }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 p-6 rounded-2xl border mb-0"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      borderColor: "rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <h3 className="font-display text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                      <span
                        className="px-2.5 py-1 text-xs rounded-lg border font-display"
                        style={{
                          background: "rgba(163,230,53,0.07)",
                          borderColor: "rgba(163,230,53,0.18)",
                          color: "#a3e635",
                        }}
                      >
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((d) => (
                        <span
                          key={d}
                          className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg border"
                          style={{
                            background: "rgba(255,255,255,0.03)",
                            borderColor: "rgba(255,255,255,0.07)",
                            color: "rgba(255,255,255,0.4)",
                          }}
                        >
                          <span className="w-1 h-1 rounded-full" style={{ background: "#a3e635" }} />
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our commitments */}
      <section ref={valRef} className="py-16 md:py-24 border-t" style={{ background: "#000", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.h2
            className="font-display text-3xl md:text-4xl font-bold text-white mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={valInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our commitments to <span style={{ color: "#a3e635" }}>every client</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                className="p-6 rounded-2xl border"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.06)",
                }}
                initial={{ opacity: 0, y: 24 }}
                animate={valInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.07 }}
                whileHover={{ borderColor: "rgba(163,230,53,0.25)", background: "rgba(163,230,53,0.03)", y: -3 }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(163,230,53,0.1)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display text-sm font-semibold text-white mb-2">{val.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
