import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { CyberSection } from "@/components/CyberSection";
import { Contact } from "@/components/Contact";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Cybersecurity Services | Website Security & POPIA Compliance — Thannlab",
  description:
    "Thannlab provides cybersecurity services for South African businesses — security audits, penetration testing, SSL hardening, POPIA compliance, and ongoing monitoring. Protect your business today.",
  alternates: {
    canonical: "https://thannlab.com/cybersecurity",
  },
  openGraph: {
    title: "Cybersecurity Services | Security Audits & POPIA — Thannlab",
    description:
      "Security audits, pen testing, SSL hardening & POPIA compliance for South African businesses. Thannlab keeps you protected.",
    url: "https://thannlab.com/cybersecurity",
  },
};

export default function CybersecurityPage() {
  return (
    <>
      <Navbar />
      <main role="main">
        <BreadcrumbJsonLd crumbs={[{ name: "Cybersecurity", item: "https://thannlab.com/cybersecurity" }]} />
        <section className="pt-36 pb-10 px-6 md:px-10 lg:px-16 relative overflow-hidden" style={{ background: "#000" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(163,230,53,0.07) 0%, transparent 70%)" }} />
          <div className="max-w-7xl mx-auto relative z-10">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-display font-medium border mb-6"
              style={{ background: "rgba(163,230,53,0.07)", borderColor: "rgba(163,230,53,0.2)", color: "#a3e635" }}
            >
              ✦ Cybersecurity
            </span>
            <h1
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{
                backgroundImage: "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.45) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Protect What
              <br />
              <span style={{
                backgroundImage: "linear-gradient(90deg, #a3e635 0%, rgba(163,230,53,0.5) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                You've Built
              </span>
            </h1>
            <p className="text-base md:text-lg max-w-xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)" }}>
              Enterprise-grade cybersecurity for South African businesses. We find your
              vulnerabilities before attackers do — and we fix them.
            </p>
          </div>
        </section>
        <CyberSection />
        <Contact />
      </main>
    </>
  );
}
