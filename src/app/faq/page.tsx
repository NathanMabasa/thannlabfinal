import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FAQSection } from "@/components/FAQSection";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions — Thannlab Digital Agency",
  description:
    "Answers to common questions about working with Thannlab — pricing, timelines, process, web development, AI solutions, cybersecurity, and POPIA compliance.",
  alternates: {
    canonical: "https://thannlab.com/faq",
  },
  openGraph: {
    title: "FAQ — Thannlab Digital Agency",
    description:
      "Everything you need to know about working with Thannlab — pricing, timelines, process and more.",
    url: "https://thannlab.com/faq",
  },
};

export default function FAQPage() {
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
              ✦ FAQ
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
              Got Questions?
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
                We've Got Answers.
              </span>
            </h1>
          </div>
        </section>
        <FAQSection />
        <Contact />
      </main>
    </>
  );
}
