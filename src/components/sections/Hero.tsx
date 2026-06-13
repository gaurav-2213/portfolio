"use client";

import { AnimatedCounter } from "@/components/features/AnimatedCounter";
import { TypingEffect } from "@/components/features/TypingEffect";
import { Button } from "@/components/ui/Button";
import { heroRoles, personalInfo, stats } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Download, Mail, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-4 pt-24 pb-16 sm:px-6"
    >
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
            </span>
            Available for opportunities
          </motion.span>

          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <p className="mt-4 flex items-center justify-center gap-2 text-[var(--text-secondary)]">
            <MapPin size={16} className="text-violet-400" />
            {personalInfo.location}
          </p>

          <div className="mt-6 text-xl text-[var(--text-secondary)] sm:text-2xl">
            I&apos;m a{" "}
            <TypingEffect
              words={heroRoles}
              className="font-semibold text-violet-400"
            />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-[var(--text-muted)]">
            Software Engineering student passionate about building real-time
            applications, AI systems, and elegant web experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/Gaurav_Sharma_ATS_Resume.docx"
              download="Gaurav_Sharma_ATS_Resume.docx"
            >
              <Button variant="primary" size="lg">
                <Download size={18} />
                Download Resume
              </Button>
            </a>


            <a href="#contact">
              <Button variant="secondary" size="lg">
                <Mail size={18} />
                Contact Me
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="glass rounded-2xl border border-[var(--border)] p-4 sm:p-6"
            >
              <p className="text-2xl font-bold text-violet-400 sm:text-3xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.label === "CGPA" ? 2 : 0}
                />
              </p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
