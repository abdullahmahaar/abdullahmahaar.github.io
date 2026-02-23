import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

type SkillPillProps = {
  label: string;
  expert?: boolean;
};

export function SkillPill({ label, expert = false }: SkillPillProps) {
  return (
    <div
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-300",
        expert
          ? "border-accent-cyan/70 bg-accent-cyan/5 text-accent-cyan shadow-cyan"
          : "border-border bg-bg-secondary/60 text-text-muted hover:border-accent-cyan hover:text-text-primary hover:shadow-cyan",
      )}
    >
      <Sparkles className={cn("h-3.5 w-3.5", expert ? "text-accent-cyan" : "text-text-muted group-hover:text-accent-cyan")} />
      <span>{label}</span>
    </div>
  );
}
