import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "About Thannlab | Digital Agency Story — Johannesburg, South Africa",
  description:
    "Learn about Thannlab — South Africa's premier digital agency. 50+ projects delivered, 30+ happy clients, and 3+ years building world-class digital experiences from Johannesburg.",
  alternates: {
    canonical: "https://thannlab.com/about",
  },
  openGraph: {
    title: "About Thannlab | Digital Agency — Johannesburg, SA",
    description:
      "50+ projects, 30+ clients, 3+ years. Meet the team behind South Africa's top digital agency.",
    url: "https://thannlab.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main role="main">
        {/* Page hero */}
        <section
          className="pt-36 pb-10 px-6 md:px-10 lg:px-16"
          style={{ background: "#000" }}
        >
          <div className="max-w-7xl mx-auto">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-display font-medium border mb-6"
              style={{
                background: "rgba(163,230,53,0.07)",
                borderColor: "rgba(163,230,53,0.2)",
                color: "#a3e635",
              }}
            >
              ✦ About Us
            </span>
            <h1
              className="font-display text-4xl md:text-6xl font-bold leading-tight"
              style={{
                backgroundImage: "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.4) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Who We Are
            </h1>
          </div>
        </section>
        <About />
        <Contact />
      </main>
    </>
  );
}
