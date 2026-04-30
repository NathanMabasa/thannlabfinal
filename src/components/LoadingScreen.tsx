"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [target, setTarget] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    // Nav logo center sits roughly 120px from left, 36px from top
    setTarget({ x: 120 - w / 2, y: 36 - h / 2 });
    const t = setTimeout(() => setVisible(false), 2400);
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
            transition={{ duration: 0.55, delay: 0.3 }}
          />

          {/* Progress bar — fades out immediately on exit */}
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
            transition={{ duration: 0.2 }}
          >
            <motion.div
              style={{
                height: "100%",
                background: "#a3e635",
                borderRadius: "999px",
              }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.1, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Logo — shrinks & flies to nav position */}
          <motion.div
            key="loader-logo"
            className="fixed inset-0 flex items-center justify-center pointer-events-none"
            style={{ zIndex: 200 }}
            exit={{ x: target.x, y: target.y, scale: 0.2 }}
            transition={{ duration: 0.52, ease: "easeIn" }}
          >
            {/* Ambient glow */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(163,230,53,0.07) 0%, transparent 70%)",
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
              <motion.span
                style={{
                  color: "#a3e635",
                  fontSize: "clamp(4.5rem, 9.5vw, 8rem)",
                  lineHeight: 0.78,
                  marginLeft: "5px",
                  display: "inline-block",
                  textShadow: "0 0 70px rgba(163,230,53,0.5)",
                }}
                animate={{ rotate: [0, 45, -8, 45, 0] }}
                transition={{ duration: 1.7, delay: 0.55, ease: "easeInOut" }}
              >
                .
              </motion.span>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
