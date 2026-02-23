"use client";

import { useEffect, useMemo, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset = 120) {
  const ids = useMemo(() => sectionIds.filter(Boolean), [sectionIds]);
  const [activeId, setActiveId] = useState(ids[0] ?? "home");

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + offset;
      let current = ids[0] ?? "home";

      for (const id of ids) {
        const section = document.getElementById(id);
        if (!section) {
          continue;
        }
        if (scrollY >= section.offsetTop) {
          current = id;
        }
      }

      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);

  return activeId;
}
