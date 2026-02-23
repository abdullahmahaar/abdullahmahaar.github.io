"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillPill } from "@/components/ui/SkillPill";
import { skillGroups, type SkillCategory } from "@/data/skills";

export function Skills() {
  const [active, setActive] = useState<SkillCategory>("mern");
  const current = useMemo(() => skillGroups.find((group) => group.id === active) ?? skillGroups[0], [active]);

  return (
    <section id="skills" className="mx-auto w-full max-w-content px-5 py-24 md:px-8">
      <SectionHeading eyebrow="Skills" title="Deep Expertise Across Five Core Tracks." subtitle="From backend architecture to agentic AI orchestration and mobile delivery, each stack is battle-tested." />

      <div className="rounded-3xl border border-border bg-bg-card p-6 md:p-8">
        <div className="mb-8 flex flex-wrap gap-3">
          {skillGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setActive(group.id)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                active === group.id
                  ? "bg-accent-cyan text-bg-primary"
                  : "border border-border text-text-muted hover:border-accent-cyan hover:text-text-primary"
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {current.skills.map((skill) => (
            <SkillPill key={skill.name} label={skill.name} expert={skill.expert} />
          ))}
        </div>

        <div className="mt-10 space-y-3">
          {skillGroups.map((group) => (
            <div key={group.id} className="grid items-center gap-2 sm:grid-cols-[180px_1fr_40px]">
              <p className="text-sm text-text-muted">{group.label}</p>
              <div className="h-2 rounded-full bg-bg-secondary">
                <div className="h-2 rounded-full bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-amber" style={{ width: `${group.depth}%` }} />
              </div>
              <p className="text-right font-mono text-xs text-text-muted">{group.depth}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
