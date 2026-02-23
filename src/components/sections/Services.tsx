import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

const colorMap = {
  cyan: "text-accent-cyan",
  amber: "text-accent-amber",
  violet: "text-accent-violet",
};

export function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-content px-5 py-24 md:px-8">
      <SectionHeading eyebrow="Services" title="How I Can Help" subtitle="Focused offerings for teams building products, automations, and scalable platforms." />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="group rounded-2xl border border-border bg-bg-card p-6 transition hover:-translate-y-1 hover:shadow-cyan">
            <p className={`text-4xl ${colorMap[service.color]}`}>{service.icon}</p>
            <h3 className="mt-4 text-xl font-semibold text-text-primary">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">{service.description}</p>
            <ul className="mt-5 space-y-2 text-sm text-text-muted">
              {service.deliverables.map((item) => (
                <li key={item} className="rounded-lg border border-border px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
            <button type="button" className="mt-5 text-sm text-accent-cyan transition hover:text-text-primary">
              Let&apos;s discuss →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
