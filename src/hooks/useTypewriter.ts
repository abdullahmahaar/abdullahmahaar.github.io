import { useEffect, useMemo, useState } from "react";

type TypewriterOptions = {
  strings: string[];
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
};

export function useTypewriter({ strings, speed = 70, deleteSpeed = 40, pause = 1200 }: TypewriterOptions) {
  const values = useMemo(() => strings.filter(Boolean), [strings]);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!values.length) {
      return;
    }

    const current = values[index % values.length];
    const timer = window.setTimeout(
      () => {
        if (isDeleting) {
          const next = current.slice(0, Math.max(text.length - 1, 0));
          setText(next);

          if (next.length === 0) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % values.length);
          }
          return;
        }

        const next = current.slice(0, Math.min(text.length + 1, current.length));
        setText(next);

        if (next.length === current.length) {
          setIsDeleting(true);
        }
      },
      isDeleting ? deleteSpeed : text.length === current.length ? pause : speed,
    );

    return () => window.clearTimeout(timer);
  }, [deleteSpeed, index, isDeleting, pause, speed, text, values]);

  return text;
}
