"use client";

import { GitHubIcon } from "@/components/icons/SocialIcons";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectFilters, projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ExternalLink, Folder } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Things I've built with passion and precision"
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "rounded-xl px-5 py-2 text-sm font-medium transition-all",
                filter === f.id
                  ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                  : "glass border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard hover className="group h-full flex flex-col">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 text-violet-400 transition-transform group-hover:scale-110">
                    <Folder size={24} />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub repository"
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--text-muted)] transition-colors hover:bg-violet-500/10 hover:text-violet-400"
                    >
                      <GitHubIcon width={18} height={18} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--text-muted)] transition-colors hover:bg-violet-500/10 hover:text-violet-400"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-semibold text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {project.description}
                </p>

                <ul className="mb-4 space-y-1">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-xs text-[var(--text-muted)]"
                    >
                      <span className="h-1 w-1 rounded-full bg-violet-400" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-[var(--border)] bg-[var(--tag-bg)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
