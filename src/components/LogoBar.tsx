"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  "Maxwell Stay",
  "Comtech Solutions",
  "The Media Krate",
  "Raise The Bar",
  "Ten4Teen",
  "Nathan Mabasa",
  "3J",
];

export function LogoBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <section
      ref={ref}
      className="py-12 border-y"
      style={{ background: "#000", borderColor: "rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.p
          className="text-xs font-display uppercase text-center mb-8"
          style={{ color: "rgba(255,255,255,0.16)", letterSpacing: "0.15em" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Trusted by ambitious brands across South Africa
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {clients.map((name, i) => (
            <motion.span
              key={name}
              className="font-display font-semibold text-sm select-none cursor-default"
              style={{ color: "rgba(255,255,255,0.18)" }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.12 + i * 0.06 }}
              whileHover={{ color: "rgba(255,255,255,0.55)" }}
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
