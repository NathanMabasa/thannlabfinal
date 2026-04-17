import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Thannlab | Premium Digital Agency — Johannesburg, South Africa",
  description:
    "Thannlab is South Africa's No.1 digital agency. We build high-performance websites, brand identities & digital strategies for startups and businesses in Johannesburg and across South Africa.",
  alternates: {
    canonical: "https://thannlab.com",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main role="main">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
