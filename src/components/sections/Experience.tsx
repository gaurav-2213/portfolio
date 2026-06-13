"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/portfolio";
import { Briefcase, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Experience"
          subtitle="Professional journey and internships"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-indigo-500/30 to-transparent sm:left-1/2 sm:-translate-x-px" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative mb-12 pl-16 sm:pl-0"
            >
              <div className="absolute left-4 top-6 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-violet-500 bg-[var(--background)] sm:left-1/2 sm:-translate-x-1/2">
                <div className="h-2 w-2 rounded-full bg-violet-500" />
              </div>

              <div className="sm:w-[calc(50%-2rem)] sm:ml-auto">
                <GlassCard hover>
                  <div className="mb-3 flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)]">
                        {exp.title}
                      </h3>
                      <p className="text-violet-400">{exp.company}</p>
                    </div>
                  </div>
                  <div className="mb-4 flex flex-wrap gap-3 text-sm text-[var(--text-muted)]">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span>·</span>
                    <span>{exp.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
