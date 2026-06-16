"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { documents } from "@/data/documents";
import type { DocumentItem } from "@/data/documents";
import { ExternalLink, FileText, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

function getIconKind(filename: string) {
  const lower = filename.toLowerCase();
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg") || lower.endsWith(".png") || lower.endsWith(".webp") || lower.endsWith(".gif")) {
    return "image";
  }
  return "file";
}

export function Documents() {
  return (
    <section id="documents" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Documents"
          subtitle="Certificates and resume files"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
{documents.map((doc, i: number) => {
            const kind = getIconKind(doc.filename);
            const Icon = kind === "image" ? ImageIcon : FileText;

            return (
              <motion.div
                key={doc.filename}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${doc.filename}`}
                >
                  <GlassCard
                    hover
                    className="flex items-start justify-between gap-4 h-full"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium leading-relaxed text-[var(--text-primary)]">
                          {doc.title}
                        </p>
                        <p className="mt-1 text-xs text-[var(--text-muted)]">
                          {doc.filename}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="mt-1 text-[var(--text-muted)]" size={16} />
                  </GlassCard>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

