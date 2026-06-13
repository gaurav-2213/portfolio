"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { careerGoals, personalInfo, summary } from "@/data/portfolio";
import { motion } from "framer-motion";
import { GraduationCap, Target } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about code, creativity, and continuous learning"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard hover>
              <h3 className="mb-4 text-xl font-semibold text-[var(--text-primary)]">
                My Story
              </h3>
              <p className="leading-relaxed text-[var(--text-secondary)]">
                {summary}
              </p>
              <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
                Currently pursuing my degree at {personalInfo.college}, I
                combine academic rigor with hands-on project experience — from
                real-time chat systems to AI-powered computer vision solutions.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <GlassCard hover>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  Education
                </h3>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-[var(--text-primary)]">
                  {personalInfo.degree}
                </p>
                <p className="text-[var(--text-secondary)]">
                  {personalInfo.college}
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  {personalInfo.duration} · CGPA: {personalInfo.cgpa}
                </p>
              </div>
            </GlassCard>

            <GlassCard hover>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                  <Target size={20} />
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  Career Goals
                </h3>
              </div>
              <ul className="space-y-3">
                {careerGoals.map((goal, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[var(--text-secondary)]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    {goal}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
