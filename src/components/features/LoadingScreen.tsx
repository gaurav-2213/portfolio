"use client";

import { personalInfo } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useEffect } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const letters = personalInfo.name.split("");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--background)]"
    >
      <div className="flex gap-1 sm:gap-2">
        {letters.map((letter, i) => (
          <motion.span
            key={`${letter}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="text-3xl font-bold text-[var(--text-primary)] sm:text-5xl"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
        className="mt-6 h-1 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-4 text-sm text-[var(--text-muted)]"
      >
        Loading portfolio...
      </motion.p>
    </motion.div>
  );
}
