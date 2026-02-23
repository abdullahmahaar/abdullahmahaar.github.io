"use client";

import { useTypewriter } from "@/hooks/useTypewriter";

type TerminalTypingProps = {
  strings: string[];
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
};

export function TerminalTyping({ strings, speed, deleteSpeed, pause }: TerminalTypingProps) {
  const text = useTypewriter({ strings, speed, deleteSpeed, pause });

  return (
    <p className="inline-flex items-center gap-1 font-mono text-base text-accent-cyan md:text-lg">
      <span>{text}</span>
      <span className="inline-block h-5 w-[2px] animate-pulse bg-accent-cyan" aria-hidden="true" />
    </p>
  );
}
