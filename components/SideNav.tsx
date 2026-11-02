"use client";

import { useEffect, useState } from "react";
import { projects } from "@/lib/data";

const sections = [
  { id: "experience", label: "Experience" },
  { id: "highlights", label: "Highlights" },
  { id: "work", label: "Work" },
  { id: "certifications", label: "Certifications" },
  { id: "voices", label: "Voices" },
  { id: "about", label: "About" },
].filter((s) => s.id !== "work" || projects.length > 0);

/** Fixed dots down the right edge that highlight the section in view and
 *  scroll to it on click. Hidden on small screens. */
export function SideNav() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
    >
      {sections.map((s) => {
        const on = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center justify-end gap-2"
            aria-current={on ? "true" : undefined}
          >
            <span
              className={`whitespace-nowrap text-[11px] font-medium opacity-0 transition-all group-hover:opacity-100 ${
                on ? "text-ink" : "text-faint"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`h-2.5 w-2.5 rounded-full border transition-all ${
                on
                  ? "scale-125 border-accent bg-accent"
                  : "border-faint bg-transparent group-hover:border-accent"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
