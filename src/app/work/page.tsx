import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Our Work | Portfolio of Digital Projects — Thannlab",
  description:
    "Browse Thannlab's portfolio of websites, brands and digital experiences. Projects include Maxwell Stay, Comtech Solutions, The Media Krate, Raise The Bar, and more.",
  alternates: {
    canonical: "https://thannlab.com/work",
  },
  openGraph: {
    title: "Our Work | Portfolio — Thannlab Digital Agency",
    description:
      "See the websites, brands and digital experiences we've built for clients across South Africa.",
    url: "https://thannlab.com/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main role="main">
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
              ✦ Portfolio
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
              Selected Work
            </h1>
          </div>
        </section>
        <Projects />
        <Contact />
      </main>
    </>
  );
}
