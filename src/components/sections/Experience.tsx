import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-content px-5 py-24 md:px-8">
      <SectionHeading eyebrow="Experience" title="Career Timeline" subtitle="Hands-on work delivering full-stack, AI-enabled, and mobile products in remote-first teams." />

      <div className="relative mt-10 space-y-8 md:space-y-0">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:block" />
        {experience.map((item, idx) => (
          <div key={item.id} className="relative grid gap-6 md:grid-cols-2 md:items-start md:gap-10">
            <div className={idx % 2 === 0 ? "md:pr-10" : "md:order-2 md:pl-10"}>
              <article className="rounded-2xl border border-border bg-bg-card p-6">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-text-muted">{item.period}</span>
                  {item.current ? <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">Current</span> : null}
                </div>
                <h3 className="text-xl font-semibold text-text-primary">{item.role}</h3>
                <p className="mt-1 text-sm text-text-muted">{item.company}</p>
                <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-text-muted">
                  {item.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-border px-2 py-1 text-xs text-text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </div>
            <div className={idx % 2 === 0 ? "hidden md:block" : "hidden md:block md:order-1"} />
          </div>
        ))}
      </div>
    </section>
  );
}
