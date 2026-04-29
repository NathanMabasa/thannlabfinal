"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    category: "Working With Us",
    items: [
      {
        q: "How do I get started?",
        a: "Simply reach out via our contact page or email nathan@thannlab.com. We'll schedule a free discovery call to understand your goals, then provide a tailored proposal — usually within 48 hours.",
      },
      {
        q: "Do you work with businesses outside Johannesburg?",
        a: "Absolutely. We work with clients across South Africa and internationally. Our process is fully remote-friendly — video calls, shared workspaces, and clear communication keep everything on track regardless of location.",
      },
      {
        q: "How long does a project take?",
        a: "A landing page can be live in 7 days. A full business website typically takes 14–21 days. Larger custom projects are scoped individually. We always agree on a timeline upfront and stick to it.",
      },
      {
        q: "What information do you need to start?",
        a: "At minimum: your business goals, target audience, brand assets (logo, colours), and any existing website or references you like. The more context you give us, the better the result. We'll guide you through the rest.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    items: [
      {
        q: "Are the prices on your website fixed?",
        a: "The prices listed are estimates to help you budget. Every project is unique — final pricing depends on complexity, number of pages, features required, and timeline. We'll give you an exact quote after a brief discovery call.",
      },
      {
        q: "Do your prices include VAT?",
        a: "No, all listed prices exclude VAT. VAT will be added to your invoice where applicable.",
      },
      {
        q: "What are your payment terms?",
        a: "We typically require a 50% deposit to begin, with the balance due on delivery. For monthly retainers, billing is monthly in advance. We accept EFT and all major payment methods.",
      },
      {
        q: "Do you offer payment plans?",
        a: "For larger projects we can discuss phased payment structures. Reach out and we'll find something that works for your business.",
      },
    ],
  },
  {
    category: "Web Design & Development",
    items: [
      {
        q: "Will my website be mobile-friendly?",
        a: "Every website we build is fully responsive and tested across all devices — mobile, tablet, and desktop. Mobile performance is a core part of our build process, not an afterthought.",
      },
      {
        q: "Can I update the website myself after launch?",
        a: "Yes. We build websites with user-friendly CMS integrations (like Sanity or WordPress) so you can update content without any coding knowledge. We also provide a handover session and documentation.",
      },
      {
        q: "Do you provide hosting?",
        a: "We recommend and set up hosting on platforms like Vercel or Netlify, which offer blazing-fast performance globally. We guide you through the setup and ensure everything is properly configured.",
      },
      {
        q: "What happens if I need changes after launch?",
        a: "Minor revisions within scope are included for 14 days post-launch. For ongoing changes, we offer maintenance retainers or quote additional work separately — whatever suits you best.",
      },
    ],
  },
  {
    category: "AI & Cybersecurity",
    items: [
      {
        q: "Do I need technical knowledge to use your AI solutions?",
        a: "No. We build everything to be intuitive and manageable by non-technical teams. You'll receive training, documentation, and ongoing support to ensure you're confident using your new AI tools.",
      },
      {
        q: "How long does a security audit take?",
        a: "A standard website security audit takes 3–5 business days. You'll receive a detailed written report with findings prioritised by severity and clear steps to remediate each issue.",
      },
      {
        q: "Is my business required to comply with POPIA?",
        a: "Yes. Any South African business that processes personal information of South African residents is subject to POPIA. Non-compliance can result in fines of up to R10 million. We help you understand and meet your obligations.",
      },
      {
        q: "Can you integrate AI into my existing systems?",
        a: "Yes — we specialise in integrating AI into existing websites, CRMs, and business tools. Whether it's Salesforce, HubSpot, a custom database, or a WhatsApp business account, we'll build the connectors needed.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b cursor-pointer"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-4 py-5">
        <span className="text-sm md:text-base font-display font-medium text-white leading-snug pr-4">
          {q}
        </span>
        <span
          className="shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200"
          style={{
            borderColor: open ? "#a3e635" : "rgba(255,255,255,0.15)",
            color: open ? "#a3e635" : "rgba(255,255,255,0.4)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="text-sm leading-relaxed pb-5 pr-10"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-24" style={{ background: "#000" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sticky left heading */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-display font-medium mb-4" style={{ color: "#a3e635" }}>
                ✦ FAQ
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight text-white mb-5">
                Questions,{" "}
                <span style={{ color: "#a3e635" }}>answered.</span>
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
                Still have something on your mind? We're happy to chat.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-display font-semibold rounded-xl text-black transition-all duration-200 hover:opacity-90"
                style={{ background: "#a3e635", boxShadow: "0 4px 20px rgba(163,230,53,0.25)" }}
              >
                Ask Us Anything
              </a>
            </div>
          </motion.div>

          {/* FAQ accordion */}
          <motion.div
            className="lg:col-span-8 space-y-10"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {faqs.map((group) => (
              <div key={group.category}>
                <h3
                  className="text-xs font-display font-semibold uppercase tracking-widest mb-1 pb-4 border-b"
                  style={{
                    color: "#a3e635",
                    borderColor: "rgba(163,230,53,0.15)",
                    letterSpacing: "0.12em",
                  }}
                >
                  {group.category}
                </h3>
                {group.items.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
