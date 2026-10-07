"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 1, y: reducedMotion ? 0 : 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reducedMotion ? 0 : 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
