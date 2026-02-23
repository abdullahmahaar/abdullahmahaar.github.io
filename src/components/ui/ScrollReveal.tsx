"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
  className?: string;
};

const variants = {
  up: { y: 30, x: 0, opacity: 0 },
  left: { y: 0, x: -30, opacity: 0 },
  right: { y: 0, x: 30, opacity: 0 },
  fade: { y: 0, x: 0, opacity: 0 },
};

export function ScrollReveal({ children, delay = 0, direction = "up", className }: ScrollRevealProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={variants[direction]}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
