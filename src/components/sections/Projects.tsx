"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, type ProjectCategory } from "@/data/projects";

type Filter = "all" | ProjectCategory;

const filters: Array<{ label: string; value: Filter }> = [
  { label: "All", value: "all" },
  { label: "MERN", value: "mern" },
  { label: "Frontend", value: "frontend" },
  { label: "AI", value: "ai" },
  { label: "Mobile", value: "mobile" },
  { label: "DevOps", value: "devops" },
];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const items = useMemo(
    () => (filter === "all" ? projects : projects.filter((project) => project.category.includes(filter))),
    [filter],
  );

  return (
    <section id="projects" className="mx-auto w-full max-w-content px-5 py-24 md:px-8">
      <SectionHeading eyebrow="Projects" title="Selected Builds Across Web, AI, Mobile, and Infra." subtitle="A portfolio of production-oriented systems designed for speed, reliability, and measurable outcomes." />

      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => setFilter(item.value)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              filter === item.value
                ? "bg-accent-cyan text-bg-primary"
                : "border border-border text-text-muted hover:border-accent-cyan hover:text-text-primary"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
