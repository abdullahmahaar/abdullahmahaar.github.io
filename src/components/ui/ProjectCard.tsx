"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [loading, setLoading] = useState(true);
  const tech = project.techStack.slice(0, 5);
  const remaining = project.techStack.length - tech.length;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-bg-card">
      {project.featured ? (
        <span className="absolute left-0 top-0 z-20 rounded-br-xl bg-accent-amber px-3 py-1 text-xs font-semibold text-bg-primary">
          Featured
        </span>
      ) : null}
      <span className="absolute right-3 top-3 z-20 rounded-full bg-bg-primary/80 px-3 py-1 text-[10px] uppercase tracking-widest text-text-muted">
        {project.category[0]}
      </span>

      <div className="relative aspect-[16/9] overflow-hidden">
        {loading ? <div className="absolute inset-0 animate-pulse bg-bg-secondary" aria-hidden="true" /> : null}
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onLoad={() => setLoading(false)}
        />
        <motion.div
          initial={{ y: "100%" }}
          whileHover={{ y: 0 }}
          className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-bg-primary via-bg-primary/92 to-transparent p-5"
        >
          <p className="text-sm text-text-muted">{project.description}</p>
        </motion.div>
      </div>

      <div className="space-y-4 p-5">
        <h3 className="text-xl font-semibold text-text-primary">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span key={item} className="rounded-full border border-border px-2 py-1 text-xs text-text-muted">
              {item}
            </span>
          ))}
          {remaining > 0 ? <span className="rounded-full border border-border px-2 py-1 text-xs text-text-muted">+{remaining} more</span> : null}
        </div>
        <div className="flex gap-4 text-sm">
          <Link className="inline-flex items-center gap-2 text-accent-cyan hover:text-text-primary" href={project.github} target="_blank">
            <Github className="h-4 w-4" /> GitHub
          </Link>
          {project.demo ? (
            <Link className="inline-flex items-center gap-2 text-accent-cyan hover:text-text-primary" href={project.demo} target="_blank">
              <ExternalLink className="h-4 w-4" /> Live Demo
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
