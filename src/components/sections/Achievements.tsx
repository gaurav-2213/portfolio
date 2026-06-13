"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements, codingProfiles } from "@/data/portfolio";
import { BookOpen, Code, ExternalLink, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

const profileIcons: Record<string, LucideIcon> = {
  Code,
  Trophy,
  BookOpen,
};

export function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Achievements"
          subtitle="Competitive programming and hackathon highlights"
        />

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard
                hover
                className={
                  item.featured
                    ? "relative overflow-hidden border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-indigo-500/5"
                    : ""
                }
              >
                {item.featured && (
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl" />
                )}
                <div className="relative">
                  <span className="text-4xl">{item.badge}</span>
                  {item.featured && (
                    <span className="ml-3 inline-flex rounded-full bg-violet-500/20 px-2.5 py-0.5 text-xs font-medium text-violet-300">
                      Winner
                    </span>
                  )}
                  <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <h3 className="mb-6 text-center text-xl font-semibold text-[var(--text-primary)]">
          Coding Profiles
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {codingProfiles.map((profile, i) => {
            const Icon = profileIcons[profile.icon] ?? Code;
            return (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <GlassCard
                  hover
                  className={`flex items-center gap-4 bg-gradient-to-br ${profile.color}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--background)]/50 text-violet-400">
                    <Icon size={22} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-[var(--text-primary)]">
                      {profile.name}
                    </p>
                    <p className="text-sm text-[var(--text-muted)]">
                      View Profile
                    </p>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-[var(--text-muted)]"
                  />
                </GlassCard>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
