"use client";

import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personalInfo } from "@/data/portfolio";
import { Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const subject = data.get("subject") as string;
    const message = data.get("message") as string;

    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject || `Portfolio Contact from ${name}`)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
    setStatus("sent");
    form.reset();
    setTimeout(() => setStatus("idle"), 3000);
  };

  const socials = [
    { icon: GitHubIcon, href: personalInfo.github, label: "GitHub" },
    { icon: LinkedInIcon, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to connect? I'd love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <GlassCard className="h-full">
              <h3 className="mb-6 text-xl font-semibold text-[var(--text-primary)]">
                Contact Information
              </h3>
              <div className="space-y-5">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-[var(--text-secondary)] transition-colors hover:text-violet-400"
                >
                  <Mail size={18} className="text-violet-400" />
                  {personalInfo.email}
                </a>
                <p className="flex items-center gap-3 text-[var(--text-secondary)]">
                  <MapPin size={18} className="text-violet-400" />
                  {personalInfo.location}
                </p>
              </div>

              <div className="mt-8">
                <p className="mb-4 text-sm text-[var(--text-muted)]">
                  Find me on
                </p>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--tag-bg)] text-[var(--text-secondary)] transition-all hover:border-violet-500/30 hover:text-violet-400"
                    >
                      {label === "Email" ? (
                        <Mail size={18} />
                      ) : (
                        <Icon width={18} height={18} />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <GlassCard>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-[var(--text-secondary)]"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[var(--text-secondary)]"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="input-field"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-[var(--text-secondary)]"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project inquiry"
                    className="input-field"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[var(--text-secondary)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="input-field resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send size={18} />
                  {status === "sent" ? "Opening mail client..." : "Send Message"}
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
