"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { owner } from "@/data/owner";

const bringItems = [
  "⚡ End-to-end product thinking",
  "🤖 AI-first engineering mindset",
  "📱 Cross-platform delivery",
  "🔒 Security & performance by default",
];

function useCountUp(targetLabel: string, trigger: boolean) {
  const numeric = Number(targetLabel.replace(/\D/g, "")) || 0;
  const suffix = targetLabel.replace(/[\d\s]/g, "");
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) {
      return;
    }
    let frame = 0;
    const total = 40;
    const timer = window.setInterval(() => {
      frame += 1;
      setValue(Math.round((numeric * frame) / total));
      if (frame >= total) {
        window.clearInterval(timer);
      }
    }, 24);

    return () => window.clearInterval(timer);
  }, [numeric, trigger]);

  return `${value}${suffix}`;
}

function StatCard({ label, value, active }: { label: string; value: string; active: boolean }) {
  const display = useCountUp(value, active);
  return (
    <div className="rounded-2xl border border-border bg-bg-card p-4">
      <p className="font-mono text-xs uppercase tracking-widest text-text-muted">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-accent-cyan">{display}</p>
    </div>
  );
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="mx-auto w-full max-w-content px-5 py-24 md:px-8">
      <SectionHeading eyebrow="About" title="Engineering with Product Intent." subtitle="I design and build systems that are fast to ship, easy to scale, and built to last." />

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <ScrollReveal direction="left">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-bg-card to-bg-secondary p-8">
            <div className="mx-auto flex aspect-square max-w-[320px] items-center justify-center rounded-2xl border border-border bg-white/5 text-6xl backdrop-blur">
              👨‍💻
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="space-y-6">
          <p className="text-text-muted">{owner.bio.p1}</p>
          <p className="text-text-muted">{owner.bio.p2}</p>
          <p className="text-text-muted">{owner.bio.p3}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <StatCard label="Years Experience" value={owner.stats.yearsExperience} active={active} />
            <StatCard label="Projects Shipped" value={owner.stats.projectsShipped} active={active} />
            <StatCard label="Happy Clients" value={owner.stats.happyClients} active={active} />
            <StatCard label="GitHub Stars" value={owner.stats.githubStars} active={active} />
          </div>

          <ul className="grid gap-3 text-sm text-text-primary sm:grid-cols-2">
            {bringItems.map((item) => (
              <li key={item} className="rounded-xl border border-border bg-bg-secondary/60 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
