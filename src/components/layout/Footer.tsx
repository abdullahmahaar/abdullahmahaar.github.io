"use client";

import { Code2, Github, Linkedin, Mail, TerminalSquare, Twitter, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { owner } from "@/data/owner";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="border-t border-border bg-bg-secondary/70 px-5 pb-8 pt-14 md:px-8">
      <div className="mx-auto grid w-full max-w-content gap-8 md:grid-cols-3 md:items-start">
        <div>
          <Link href="#home" className="inline-flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center border-2 border-accent-cyan font-mono text-sm font-semibold text-accent-cyan">
              {owner.initials}
            </span>
            <span className="text-sm text-text-muted">{owner.tagline}</span>
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 md:justify-center">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-text-muted transition hover:text-text-primary">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 md:justify-end">
          <Link href={owner.socials.github} target="_blank" aria-label="GitHub" className="text-text-muted hover:text-accent-cyan">
            <Github className="h-5 w-5" />
          </Link>
          <Link href={owner.socials.linkedin} target="_blank" aria-label="LinkedIn" className="text-text-muted hover:text-accent-cyan">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href={owner.socials.twitter} target="_blank" aria-label="Twitter" className="text-text-muted hover:text-accent-cyan">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href={`mailto:${owner.email}`} aria-label="Email" className="text-text-muted hover:text-accent-cyan">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-content items-center justify-between border-t border-border pt-5 text-xs text-text-muted">
        <p>{`© 2025 ${owner.name} · Built with Next.js · Deployed on GitHub Pages`}</p>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 hover:border-accent-cyan hover:text-accent-cyan"
          onClick={() => setOpen(true)}
          aria-label="Open terminal easter egg"
        >
          <Code2 className="h-4 w-4" />
          {"</>"}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-lg rounded-2xl border border-border bg-bg-primary p-4 shadow-cyan">
            <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
              <div className="inline-flex items-center gap-2 text-sm text-text-primary">
                <TerminalSquare className="h-4 w-4 text-accent-cyan" /> neofetch
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close terminal" className="text-text-muted hover:text-text-primary">
                <X className="h-4 w-4" />
              </button>
            </div>
            <pre className="overflow-x-auto font-mono text-xs leading-6 text-text-muted">
{`${owner.name}@portfolio
-------------------------
Role: ${owner.tagline}
Stack: MERN | Next.js | Agentic AI | React Native | DevOps
Status: ${owner.availableForWork ? "Open to work" : "Fully booked"}
Location: ${owner.location}
Timezone: ${owner.timezone}`}
            </pre>
          </div>
        </div>
      ) : null}
    </footer>
  );
}
