"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

type Category = "web" | "ai" | "cyber" | "retainer";

const categories: { id: Category; label: string }[] = [
  { id: "web", label: "Web & Brand" },
  { id: "ai", label: "AI Solutions" },
  { id: "cyber", label: "Cybersecurity" },
  { id: "retainer", label: "Monthly Retainer" },
];

const plans: Record<Category, {
  name: string;
  price: string;
  period?: string;
  tag?: string;
  highlight?: boolean;
  description: string;
  features: string[];
  cta: string;
}[]> = {
  web: [
    {
      name: "Starter",
      price: "R 8,500",
      description: "A sharp, high-converting landing page for new businesses.",
      features: [
        "Single-page website",
        "Mobile responsive",
        "Basic SEO setup",
        "Contact form",
        "Google Analytics",
        "7-day delivery",
      ],
      cta: "Get Started",
    },
    {
      name: "Business",
      price: "R 18,500",
      tag: "Most Popular",
      highlight: true,
      description: "A full business website that builds trust and drives leads.",
      features: [
        "Up to 6 pages",
        "Custom design system",
        "CMS integration",
        "SEO optimised",
        "Performance optimised",
        "14-day delivery",
      ],
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: "R 35,000",
      description: "Premium build for established businesses that want to stand out.",
      features: [
        "Up to 12 pages",
        "Advanced animations",
        "Blog / news section",
        "Full brand integration",
        "Priority support",
        "21-day delivery",
      ],
      cta: "Get Started",
    },
    {
      name: "E-Commerce",
      price: "From R 28,000",
      description: "Online store built to convert browsers into buyers.",
      features: [
        "Unlimited products",
        "Payment gateway setup",
        "Inventory management",
        "Mobile checkout",
        "Order management",
        "Timeline: agreed upfront",
      ],
      cta: "Discuss Project",
    },
  ],
  ai: [
    {
      name: "AI Starter",
      price: "R 12,000",
      description: "A smart chatbot that handles FAQs and captures leads 24/7.",
      features: [
        "Custom-trained chatbot",
        "Website integration",
        "FAQ automation",
        "Lead capture",
        "WhatsApp-ready",
        "7-day delivery",
      ],
      cta: "Get Started",
    },
    {
      name: "AI Business",
      price: "R 28,000",
      tag: "Most Popular",
      highlight: true,
      description: "Full AI assistant with CRM integration and advanced workflows.",
      features: [
        "Advanced chatbot",
        "CRM integration",
        "Lead qualification",
        "Appointment booking",
        "Analytics dashboard",
        "14-day delivery",
      ],
      cta: "Get Started",
    },
    {
      name: "AI Enterprise",
      price: "From R 55,000",
      description: "Bespoke AI systems — automation, ML, and custom integrations.",
      features: [
        "Custom AI system",
        "Workflow automation",
        "ML model training",
        "Full stack integration",
        "Dedicated support",
        "Timeline: agreed upfront",
      ],
      cta: "Discuss Project",
    },
  ],
  cyber: [
    {
      name: "Security Audit",
      price: "R 6,500",
      description: "A full vulnerability scan and security report for your website.",
      features: [
        "OWASP vulnerability scan",
        "Security headers audit",
        "SSL/TLS review",
        "Detailed report",
        "Fix recommendations",
        "5-day turnaround",
      ],
      cta: "Book Audit",
    },
    {
      name: "Security Pro",
      price: "R 18,000",
      tag: "Recommended",
      highlight: true,
      description: "Full penetration test plus POPIA compliance review.",
      features: [
        "Full penetration test",
        "POPIA compliance audit",
        "Vulnerability remediation",
        "Security policy setup",
        "Staff awareness training",
        "10-day turnaround",
      ],
      cta: "Book Now",
    },
    {
      name: "Security Monitor",
      price: "R 3,500",
      period: "/month",
      description: "Ongoing protection — monitoring, alerts and incident response.",
      features: [
        "24/7 threat monitoring",
        "Monthly security report",
        "Uptime monitoring",
        "Incident response",
        "Patch notifications",
        "Rolling monthly contract",
      ],
      cta: "Start Monitoring",
    },
  ],
  retainer: [
    {
      name: "SEO Starter",
      price: "R 4,500",
      period: "/month",
      description: "Get found on Google. Consistent organic growth, month by month.",
      features: [
        "Keyword tracking",
        "On-page optimisation",
        "Monthly SEO report",
        "Google Search Console",
        "Technical fixes",
        "3-month minimum",
      ],
      cta: "Get Started",
    },
    {
      name: "Growth",
      price: "R 8,500",
      period: "/month",
      tag: "Best Value",
      highlight: true,
      description: "SEO, content creation, and analytics — all managed for you.",
      features: [
        "Everything in SEO Starter",
        "4 blog posts/month",
        "Social media content",
        "Competitor analysis",
        "CRO recommendations",
        "3-month minimum",
      ],
      cta: "Get Started",
    },
    {
      name: "Digital Partner",
      price: "R 15,000",
      period: "/month",
      description: "Your outsourced digital team — strategy, execution and reporting.",
      features: [
        "Full digital strategy",
        "SEO + paid ads",
        "Content creation",
        "Monthly strategy call",
        "Priority support",
        "3-month minimum",
      ],
      cta: "Let's Talk",
    },
  ],
};

export function PricingSection() {
  const [active, setActive] = useState<Category>("web");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-24" style={{ background: "#000" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Disclaimer banner */}
        <motion.div
          className="flex items-start gap-3 p-4 rounded-2xl border mb-14"
          style={{
            background: "rgba(163,230,53,0.04)",
            borderColor: "rgba(163,230,53,0.15)",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="mt-0.5 shrink-0 text-base" style={{ color: "#a3e635" }}>ⓘ</span>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            <span className="font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>
              These are estimates only.
            </span>{" "}
            Every project is unique — final pricing depends on your specific requirements,
            complexity, and timeline. All prices are in South African Rand (ZAR) and exclude VAT.
            Contact us for a free, no-obligation quote tailored to your needs.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className="px-5 py-2.5 text-sm font-display font-medium rounded-xl border transition-all duration-200"
              style={
                active === cat.id
                  ? { background: "#a3e635", borderColor: "#a3e635", color: "#000" }
                  : {
                      background: "rgba(255,255,255,0.03)",
                      borderColor: "rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.5)",
                    }
              }
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {plans[active].map((plan, i) => (
            <motion.div
              key={plan.name}
              className="relative flex flex-col p-6 rounded-2xl border"
              style={
                plan.highlight
                  ? {
                      background: "rgba(163,230,53,0.06)",
                      borderColor: "rgba(163,230,53,0.25)",
                    }
                  : {
                      background: "rgba(255,255,255,0.025)",
                      borderColor: "rgba(255,255,255,0.07)",
                    }
              }
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 + i * 0.07 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {/* Popular tag */}
              {plan.tag && (
                <span
                  className="absolute -top-3 left-5 px-3 py-1 text-xs font-display font-semibold rounded-full"
                  style={{ background: "#a3e635", color: "#000" }}
                >
                  {plan.tag}
                </span>
              )}

              <div className="mb-6">
                <h3 className="font-display text-base font-semibold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span
                    className="font-display text-2xl font-bold"
                    style={{ color: plan.highlight ? "#a3e635" : "#fff" }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(163,230,53,0.12)" }}
                    >
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none"
                        stroke="#a3e635" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-display font-semibold rounded-xl transition-all duration-200 hover:opacity-90"
                style={
                  plan.highlight
                    ? { background: "#a3e635", color: "#000" }
                    : {
                        background: "rgba(255,255,255,0.06)",
                        color: "rgba(255,255,255,0.7)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }
                }
              >
                {plan.cta}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom project note */}
        <motion.div
          className="mt-10 p-6 rounded-2xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{
            background: "rgba(255,255,255,0.02)",
            borderColor: "rgba(255,255,255,0.07)",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div>
            <h3 className="font-display text-base font-semibold text-white mb-1">
              Have something bigger in mind?
            </h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              Complex projects get custom quotes. Tell us what you're building and we'll
              scope it properly — no guessing, no surprises.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-display font-semibold rounded-xl text-black transition-all duration-200 hover:opacity-90"
            style={{ background: "#a3e635", boxShadow: "0 4px 20px rgba(163,230,53,0.25)" }}
          >
            Get a Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
