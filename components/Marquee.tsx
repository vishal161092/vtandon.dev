"use client";

import { skills } from "@/lib/data";

/** Infinite horizontal band of tech keywords. Content is duplicated so the
 *  -50% translate loops seamlessly. */
export function Marquee() {
  const items = skills.flatMap((g) => g.items);
  const row = [...items, ...items];

  return (
    <div className="mask-fade-x group relative overflow-hidden py-2">
      <ul className="flex w-max animate-marquee items-center gap-3 group-hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-muted"
          >
            <span>{item}</span>
            <span className="text-accent/50">◆</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
