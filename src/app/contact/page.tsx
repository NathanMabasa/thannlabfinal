import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Thannlab | Start Your Project Today",
  description:
    "Get in touch with Thannlab — South Africa's premier digital agency. Email nathan@thannlab.com or WhatsApp +27 69 167 8332. Based in Johannesburg, serving clients nationwide.",
  alternates: {
    canonical: "https://thannlab.com/contact",
  },
  openGraph: {
    title: "Contact Thannlab | Start Your Project",
    description:
      "Ready to start your project? Email nathan@thannlab.com or WhatsApp +27 69 167 8332. We respond within 24 hours.",
    url: "https://thannlab.com/contact",
  },
};

export default function ContactPage() {
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
              ✦ Get In Touch
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
              Let's Build Together
            </h1>
          </div>
        </section>
        <Contact />
      </main>
    </>
  );
}
