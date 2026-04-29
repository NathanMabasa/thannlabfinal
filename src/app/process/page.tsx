import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ProcessSection } from "@/components/ProcessSection";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "How We Work | Our Process — Thannlab Digital Agency",
  description:
    "From discovery call to launch in 21 days. See exactly how Thannlab delivers web design, AI solutions, and cybersecurity projects — on time, on budget, no surprises.",
  alternates: {
    canonical: "https://thannlab.com/process",
  },
  openGraph: {
    title: "How We Work — Thannlab Digital Agency",
    description:
      "Our transparent 7-step process: Discovery → Strategy → Design → Development → Review → Launch → Support. Projects delivered in 21 days.",
    url: "https://thannlab.com/process",
  },
};

export default function ProcessPage() {
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
              ✦ How We Work
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
              From Idea to
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
                Live in 21 Days.
              </span>
            </h1>
            <p
              className="text-base md:text-lg max-w-xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              A clear, repeatable process with no guesswork. You know exactly what
              happens, when it happens, and what you get at every stage.
            </p>
          </div>
        </section>
        <ProcessSection />
        <Contact />
      </main>
    </>
  );
}
