import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { personalInfo } from "@/data/portfolio";
import { Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-[var(--text-muted)]">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--text-muted)] transition-colors hover:text-violet-400"
          >
            <GitHubIcon width={18} height={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--text-muted)] transition-colors hover:text-violet-400"
          >
            <LinkedInIcon width={18} height={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="text-[var(--text-muted)] transition-colors hover:text-violet-400"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
