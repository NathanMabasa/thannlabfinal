"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "◈",
    title: "AI Chatbots & Virtual Assistants",
    description:
      "Custom-trained chatbots that handle customer queries 24/7, qualify leads, and book appointments — fully integrated into your website or app.",
    tags: ["GPT-4", "Claude", "WhatsApp", "Web"],
  },
  {
    icon: "◉",
    title: "Workflow Automation",
    description:
      "Eliminate repetitive tasks with intelligent automation. From email processing to data entry, we connect your tools and let AI do the heavy lifting.",
    tags: ["n8n", "Make", "Zapier", "Custom"],
  },
  {
    icon: "◎",
    title: "AI Content Generation",
    description:
      "Scale your content output with AI-powered systems for blog posts, social media, product descriptions, and marketing copy — consistent with your brand voice.",
    tags: ["Copy", "SEO", "Social", "Brand"],
  },
  {
    icon: "⬡",
    title: "Custom AI Integrations",
    description:
      "Embed AI directly into your existing software stack. CRM enrichment, smart search, recommendation engines, and predictive analytics.",
    tags: ["API", "OpenAI", "Anthropic", "Custom"],
  },
  {
    icon: "⬟",
    title: "Machine Learning Solutions",
    description:
      "Bespoke ML models trained on your data for demand forecasting, churn prediction, anomaly detection, and business intelligence.",
    tags: ["Python", "TensorFlow", "Data", "ML"],
  },
  {
    icon: "◆",
    title: "AI Strategy Consulting",
    description:
      "Not sure where to start? We audit your business, identify the highest-ROI AI opportunities, and build a clear roadmap to implementation.",
    tags: ["Audit", "Roadmap", "ROI", "Strategy"],
  },
];

const stats = [
  { value: "10x", label: "Faster task completion" },
  { value: "60%", label: "Cost reduction on average" },
  { value: "24/7", label: "Automated availability" },
  { value: "3 wks", label: "Avg. deployment time" },
];

export function AIServicesSection() {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Intro */}
      <section className="py-16 md:py-24" style={{ background: "#000" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ color: "#fff" }}>
                Your business deserves to work{" "}
                <span style={{ color: "#a3e635" }}>smarter, not harder.</span>
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
                We build practical AI solutions for South African businesses — not
                theoretical demos, but production-ready tools that reduce costs, save
                time, and give you a competitive edge.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
                Whether you need a customer-facing chatbot, back-office automation, or a
                full AI strategy, Thannlab delivers it end-to-end.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-display font-semibold rounded-xl text-black transition-all duration-200 hover:opacity-90"
                style={{ background: "#a3e635", boxShadow: "0 4px 20px rgba(163,230,53,0.28)" }}
              >
                Discuss Your AI Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="p-6 rounded-2xl border"
                  style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.07)" }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ borderColor: "rgba(163,230,53,0.3)", background: "rgba(163,230,53,0.04)", y: -3 }}
                >
                  <div className="font-display text-3xl font-bold mb-1.5" style={{ color: "#a3e635" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section ref={ref} className="py-16 md:py-24" style={{ background: "#000" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#fff" }}>
              What We Build
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="p-6 rounded-2xl border cursor-default"
                style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.07 }}
                whileHover={{ background: "rgba(163,230,53,0.04)", borderColor: "rgba(163,230,53,0.18)", y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl text-lg mb-5"
                  style={{ background: "rgba(163,230,53,0.08)", color: "#a3e635" }}>
                  {service.icon}
                </div>
                <h3 className="font-display text-base font-semibold text-white mb-2.5 leading-snug">{service.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.38)" }}>{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-xs rounded-lg border"
                      style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.35)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 border-t" style={{ background: "#000", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="font-display text-3xl font-bold text-white mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "We map your workflows and identify where AI creates the most value." },
              { step: "02", title: "Design", desc: "We architect the solution — models, data flows, and integration points." },
              { step: "03", title: "Build", desc: "We develop, train, and test the AI system against real business scenarios." },
              { step: "04", title: "Deploy & Support", desc: "We launch, monitor performance, and iterate based on real usage." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="p-6 rounded-2xl border relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                <div className="font-display text-4xl font-bold mb-4 opacity-10" style={{ color: "#a3e635" }}>
                  {item.step}
                </div>
                <h3 className="font-display text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
