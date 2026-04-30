import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Services | Web Design, Branding & Digital Strategy — Thannlab",
  description:
    "Thannlab offers web design, web development, brand identity, SEO, e-commerce, and UI/UX design services in Johannesburg. End-to-end digital solutions for modern South African businesses.",
  alternates: {
    canonical: "https://thannlab.com/services",
  },
  openGraph: {
    title: "Services | Web Design, Branding & Strategy — Thannlab",
    description:
      "Web design, development, branding, SEO, e-commerce & UI/UX design. Full-service digital agency in Johannesburg.",
    url: "https://thannlab.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main role="main">
        <BreadcrumbJsonLd crumbs={[{ name: "Services", item: "https://thannlab.com/services" }]} />
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
              ✦ What We Offer
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
              Our Services
            </h1>
          </div>
        </section>
        <Services />
        <Contact />
      </main>
    </>
  );
}
