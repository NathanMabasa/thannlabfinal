import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { AIServicesSection } from "@/components/AIServicesSection";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "AI Solutions | Chatbots, Automation & Machine Learning — Thannlab",
  description:
    "Thannlab builds practical AI solutions for South African businesses — custom chatbots, workflow automation, AI integrations, and machine learning. Get your AI project started today.",
  alternates: {
    canonical: "https://thannlab.com/ai-solutions",
  },
  openGraph: {
    title: "AI Solutions | Chatbots, Automation & ML — Thannlab",
    description:
      "Custom AI chatbots, workflow automation & machine learning for South African businesses. Built and deployed by Thannlab.",
    url: "https://thannlab.com/ai-solutions",
  },
};

export default function AISolutionsPage() {
  return (
    <>
      <Navbar />
      <main role="main">
        <section className="pt-36 pb-10 px-6 md:px-10 lg:px-16 relative overflow-hidden" style={{ background: "#000" }}>
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(163,230,53,0.08) 0%, transparent 70%)" }} />
          <div className="max-w-7xl mx-auto relative z-10">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-display font-medium border mb-6"
              style={{ background: "rgba(163,230,53,0.07)", borderColor: "rgba(163,230,53,0.2)", color: "#a3e635" }}
            >
              ✦ AI Solutions
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
              AI That Works
              <br />
              <span style={{
                backgroundImage: "linear-gradient(90deg, #a3e635 0%, rgba(163,230,53,0.5) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                For Your Business
              </span>
            </h1>
            <p className="text-base md:text-lg max-w-xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)" }}>
              Practical, production-ready AI systems — not demos. We design, build and
              deploy AI that cuts costs, saves time, and drives real revenue.
            </p>
          </div>
        </section>
        <AIServicesSection />
        <Contact />
      </main>
    </>
  );
}
