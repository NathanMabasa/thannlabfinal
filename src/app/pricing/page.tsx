import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PricingSection } from "@/components/PricingSection";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Pricing | Web Design, AI & Cybersecurity Packages — Thannlab",
  description:
    "Transparent pricing estimates for Thannlab's services — web design, AI solutions, cybersecurity and monthly retainers. All prices in ZAR. Contact us for a custom quote.",
  alternates: {
    canonical: "https://thannlab.com/pricing",
  },
  openGraph: {
    title: "Pricing | Web, AI & Security Packages in ZAR — Thannlab",
    description:
      "Clear pricing estimates for digital agency services in South Africa. Web from R8,500 · AI from R12,000 · Security audits from R6,500.",
    url: "https://thannlab.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main role="main">
        <section
          className="pt-36 pb-10 px-6 md:px-10 lg:px-16 relative overflow-hidden"
          style={{ background: "#000" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(163,230,53,0.07) 0%, transparent 70%)",
            }}
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-display font-medium border mb-6"
              style={{
                background: "rgba(163,230,53,0.07)",
                borderColor: "rgba(163,230,53,0.2)",
                color: "#a3e635",
              }}
            >
              ✦ Pricing
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
              Transparent
              <br />
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #a3e635 0%, rgba(163,230,53,0.5) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Pricing in ZAR
              </span>
            </h1>
            <p
              className="text-base md:text-lg max-w-xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              No hidden fees. No surprises. Estimates to help you plan — with a free
              custom quote for every project.
            </p>
          </div>
        </section>
        <PricingSection />
        <Contact />
      </main>
    </>
  );
}
