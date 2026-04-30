"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [target, setTarget] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    // Nav logo center: ~120px from left, ~40px from top (h-20 midpoint)
    setTarget({ x: 120 - w / 2, y: 40 - h / 2 });
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Black overlay — fades after logo departs */}
          <motion.div
            key="loader-bg"
            className="fixed inset-0"
            style={{ background: "#000", zIndex: 199 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          />

          {/* Progress bar */}
          <motion.div
            key="loader-bar"
            className="fixed bottom-12 left-1/2 -translate-x-1/2 overflow-hidden"
            style={{
              zIndex: 201,
              width: "5rem",
              height: "1px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "999px",
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              style={{
                height: "100%",
                background: "#a3e635",
                borderRadius: "999px",
              }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.9, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Logo — flies to nav then fades seamlessly */}
          <motion.div
            key="loader-logo"
            className="fixed inset-0 flex items-center justify-center pointer-events-none"
            style={{ zIndex: 200 }}
            exit={{ x: target.x, y: target.y, scale: 0.22, opacity: 0 }}
            transition={{
              duration: 0.65,
              ease: "easeIn",
              opacity: { duration: 0.25, delay: 0.4 },
            }}
          >
            {/* Ambient glow */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(163,230,53,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <motion.div
              className="flex items-center select-none"
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <span
                className="font-display font-bold text-white"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 5rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1,
                }}
              >
                thannlab
              </span>
              <motion.div
                style={{
                  width: "clamp(3rem, 6vw, 5rem)",
                  height: "clamp(3rem, 6vw, 5rem)",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 32% 32%, rgba(255,255,255,0.3) 0%, transparent 55%), #a3e635",
                  marginLeft: "12px",
                  flexShrink: 0,
                  boxShadow: "0 0 80px rgba(163,230,53,0.55), 0 0 160px rgba(163,230,53,0.2)",
                }}
                animate={{ rotate: [0, 45, -8, 45, 0] }}
                transition={{ duration: 1.7, delay: 0.55, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
