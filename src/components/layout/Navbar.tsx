"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { owner } from "@/data/owner";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#about", id: "about", label: "About" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export function Navbar() {
  const activeId = useScrollSpy(navLinks.map((l) => l.id));
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-bg-secondary/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex w-full max-w-content items-center justify-between px-5 py-4 md:px-8">
        <Link href="#home" className="flex items-center gap-3" aria-label="Back to top">
          <span className="inline-flex h-10 w-10 items-center justify-center border-2 border-accent-cyan font-mono text-sm font-semibold text-accent-cyan">
            {owner.initials}
          </span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={cn(
                  "relative py-1 text-sm text-text-muted transition-colors hover:text-text-primary",
                  activeId === link.id ? "text-text-primary" : "",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[2px] bg-accent-cyan transition-all duration-300",
                    activeId === link.id ? "w-full" : "w-0",
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href={owner.resumeUrl}
            className="rounded-full border border-accent-cyan px-5 py-2 text-sm font-medium text-accent-cyan transition-colors hover:bg-accent-cyan/10"
          >
            Download CV
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md border border-border p-2 text-text-primary md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-bg-primary/95 backdrop-blur"
        >
          {navLinks.map((link, idx) => (
            <motion.div key={link.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.07 }}>
              <Link
                href={link.href}
                className="text-2xl font-medium text-text-primary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <Link
            href={owner.resumeUrl}
            className="rounded-full border border-accent-cyan px-6 py-3 text-accent-cyan"
            onClick={() => setOpen(false)}
          >
            Download CV
          </Link>
        </motion.div>
      ) : null}
    </header>
  );
}
