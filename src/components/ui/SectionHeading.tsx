import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto mb-12 max-w-3xl text-left md:text-center", className)}>
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent-cyan">&lt;&lt; {eyebrow} &gt;&gt;</p>
      <h2 className="mt-4 font-display text-4xl italic leading-tight text-text-primary md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-sm leading-relaxed text-text-muted md:text-base">{subtitle}</p> : null}
    </div>
  );
}
