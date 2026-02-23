"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { TerminalTyping } from "@/components/ui/TerminalTyping";
import { GlowButton } from "@/components/ui/GlowButton";
import { owner } from "@/data/owner";

const lines = ["Building Digital", "Experiences That", "Matter."];

const roleStrings = [
  "MERN Stack Engineer",
  "Next.js Developer",
  "Agentic AI Builder",
  "Mobile App Developer",
  "DevOps Engineer",
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-14 pt-28 md:px-8 lg:pt-32">
      <div className="absolute inset-0 -z-10 hidden bg-[radial-gradient(circle_at_12%_25%,rgba(0,245,212,0.14),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(157,78,221,0.16),transparent_28%)] sm:block" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(0,245,212,0.17),transparent_38%),radial-gradient(circle_at_80%_5%,rgba(157,78,221,0.16),transparent_34%),linear-gradient(135deg,#080C10,#0D1117,#161B22)] sm:hidden" />

      <div className="mx-auto grid w-full max-w-content gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-bg-secondary/80 px-4 py-2 text-xs text-text-muted">
            <span className="h-2 w-2 animate-pulseDot rounded-full bg-emerald-400" />
            ⚡ Available for Freelance & Full-time Roles
          </div>

          <div className="space-y-1">
            {lines.map((line, index) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="overflow-hidden"
              >
                <h1 className="font-display text-5xl italic leading-[0.98] tracking-tight text-text-primary sm:text-6xl md:text-7xl">{line}</h1>
              </motion.div>
            ))}
          </div>

          <TerminalTyping strings={roleStrings} />

          <p className="max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            I architect full-stack systems, train LLM-powered agents, and ship pixel-perfect interfaces - from MVP to production.
          </p>

          <div className="flex flex-wrap gap-4">
            <GlowButton variant="primary" href="#projects">
              View My Work ↓
            </GlowButton>
            <GlowButton variant="ghost" href="#contact">
              Let&apos;s Talk
            </GlowButton>
          </div>

          <div className="flex items-center gap-4">
            <Link href={owner.socials.github} target="_blank" className="rounded-full border border-border p-2 text-text-muted transition hover:-translate-y-1 hover:border-accent-cyan hover:text-accent-cyan" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
            <Link href={owner.socials.linkedin} target="_blank" className="rounded-full border border-border p-2 text-text-muted transition hover:-translate-y-1 hover:border-accent-cyan hover:text-accent-cyan" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href={owner.socials.twitter} target="_blank" className="rounded-full border border-border p-2 text-text-muted transition hover:-translate-y-1 hover:border-accent-cyan hover:text-accent-cyan" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href={`mailto:${owner.email}`} className="rounded-full border border-border p-2 text-text-muted transition hover:-translate-y-1 hover:border-accent-cyan hover:text-accent-cyan" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative hidden h-[520px] rounded-3xl border border-border bg-bg-card/50 lg:block"
        >
          <ParticleCanvas />
        </motion.div>
      </div>
    </section>
  );
}
