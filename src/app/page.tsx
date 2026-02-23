"use client";

import { useEffect } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get("p");
    const redirectQuery = params.get("q");

    if (!redirectPath) {
      return;
    }

    const normalizedPath = redirectPath.replace(/~and~/g, "&");
    const normalizedQuery = redirectQuery ? `?${redirectQuery.replace(/~and~/g, "&")}` : "";
    const target = `${normalizedPath}${normalizedQuery}${window.location.hash}`;

    window.history.replaceState(null, "", target);
  }, []);

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <div className="section-divider" aria-hidden="true" />
        <About />
        <div className="section-divider" aria-hidden="true" />
        <Skills />
        <div className="section-divider" aria-hidden="true" />
        <Projects />
        <div className="section-divider" aria-hidden="true" />
        <Experience />
        <div className="section-divider" aria-hidden="true" />
        <Services />
        <div className="section-divider" aria-hidden="true" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
