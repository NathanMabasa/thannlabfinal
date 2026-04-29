"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "◈",
    title: "Website Security Audits",
    description:
      "Comprehensive audits of your website and web applications — identifying vulnerabilities, misconfigurations, and exposure risks before attackers do.",
    tags: ["OWASP Top 10", "Headers", "Code Review"],
  },
  {
    icon: "◉",
    title: "Penetration Testing",
    description:
      "Simulated attacks on your digital infrastructure to expose real weaknesses. We think like hackers so your business stays one step ahead.",
    tags: ["Black Box", "Grey Box", "Reporting"],
  },
  {
    icon: "◎",
    title: "SSL & Security Hardening",
    description:
      "Full HTTPS implementation, security headers, CSP policies, and server hardening — locking down your web presence against common attacks.",
    tags: ["SSL/TLS", "CSP", "HSTS", "Headers"],
  },
  {
    icon: "⬡",
    title: "POPIA Compliance",
    description:
      "Ensure your website and data practices comply with South Africa's Protection of Personal Information Act. We audit, advise, and implement the required controls.",
    tags: ["POPIA", "Privacy Policy", "Data", "ZA Law"],
  },
  {
    icon: "⬟",
    title: "Ongoing Security Monitoring",
    description:
      "Continuous monitoring of your digital assets for threats, suspicious activity, uptime, and vulnerability disclosures — with rapid incident response.",
    tags: ["24/7", "Alerts", "Uptime", "Response"],
  },
  {
    icon: "◆",
    title: "Security Training & Awareness",
    description:
      "Equip your team with the knowledge to recognise phishing, social engineering, and cyber threats — your people are your first line of defence.",
    tags: ["Phishing", "Training", "Policy", "Team"],
  },
];

const threats = [
  { stat: "43%", label: "of cyber attacks target small businesses" },
  { stat: "R 4.5M", label: "average cost of a data breach in SA" },
  { stat: "94%", label: "of malware delivered via email" },
  { stat: "287", label: "days avg. to identify a breach" },
];

export function CyberSection() {
  const ref = useRef(null);
  const threatRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const threatInView = useInView(threatRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Threat stats */}
      <section ref={threatRef} className="py-16 md:py-24" style={{ background: "#000" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ color: "#fff" }}>
                Cyber threats are{" "}
                <span style={{ color: "#a3e635" }}>real, rising, and costly.</span>
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
                South African businesses are increasingly targeted by cybercriminals. A
                single breach can mean financial loss, reputational damage, regulatory
                fines, and loss of customer trust.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
                Thannlab's cybersecurity services protect your digital assets, ensure
                compliance, and give you peace of mind — whether you're a startup or
                an established business.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-display font-semibold rounded-xl text-black transition-all duration-200 hover:opacity-90"
                style={{ background: "#a3e635", boxShadow: "0 4px 20px rgba(163,230,53,0.28)" }}
              >
                Get a Security Audit
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              {threats.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="p-6 rounded-2xl border"
                  style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.07)" }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={threatInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ borderColor: "rgba(163,230,53,0.3)", background: "rgba(163,230,53,0.04)", y: -3 }}
                >
                  <div className="font-display text-2xl md:text-3xl font-bold mb-1.5" style={{ color: "#a3e635" }}>
                    {item.stat}
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section ref={ref} className="py-16 md:py-24" style={{ background: "#000" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Our Security Services</h2>
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

      {/* Why it matters */}
      <section className="py-16 md:py-24 border-t" style={{ background: "#000", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-white mb-6">
              Security is not optional —{" "}
              <span style={{ color: "#a3e635" }}>it's a business requirement.</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
              Under POPIA, South African businesses that fail to protect customer data
              face fines of up to R10 million or 10 years imprisonment. Beyond compliance,
              a breach destroys the customer trust you've worked years to build.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
              We make enterprise-grade security accessible to businesses of all sizes —
              practical, affordable, and built around how you actually operate.
            </p>
            <a href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-display font-semibold rounded-xl text-black transition-all duration-200 hover:opacity-90"
              style={{ background: "#a3e635", boxShadow: "0 4px 20px rgba(163,230,53,0.28)" }}>
              Protect Your Business
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
