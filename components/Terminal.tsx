"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "@/lib/data";

/**
 * A faux IDE/terminal card for the hero that "boots up"; rows reveal one at a
 * time with a blinking caret riding the latest line, like a live shell session.
 * Falls back to showing everything at once under prefers-reduced-motion.
 */
export function Terminal() {
  const stack = skills[0]?.items.slice(0, 4) ?? [];

  const rows: React.ReactNode[] = [
    <>
      <span className="text-emerald-400">➜</span>{" "}
      <span className="text-sky-400">~/cv</span> cat vishal.ts
    </>,
    <span className="h-2 block" />,
    <>
      <span className="text-purple-400">const</span>{" "}
      <span className="text-pink-400">vishal</span> = {"{"}
    </>,
    <>
      {"  "}
      <span className="text-sky-400">focus</span>:{" "}
      <span className="text-emerald-400">&quot;Agentforce &amp; applied AI&quot;</span>,
    </>,
    <>
      {"  "}
      <span className="text-sky-400">team</span>:{" "}
      <span className="text-emerald-400">&quot;QBranch&quot;</span>,{" "}
      <span className="text-zinc-400">{"// Salesforce's demo & prototype team"}</span>
    </>,
    <>
      {"  "}
      <span className="text-sky-400">path</span>: [
      <span className="text-emerald-400">&quot;support&quot;</span>,{" "}
      <span className="text-emerald-400">&quot;success&quot;</span>,{" "}
      <span className="text-emerald-400">&quot;senior dev&quot;</span>,{" "}
      <span className="text-emerald-400">&quot;lead&quot;</span>],
    </>,
    <>
      {"  "}
      <span className="text-sky-400">stack</span>: [
      {stack.map((s, i) => (
        <span key={s}>
          <span className="text-emerald-400">&quot;{s}&quot;</span>
          {i < stack.length - 1 ? ", " : ""}
        </span>
      ))}
      ],
    </>,
    <span>{"}"};</span>,
    <>
      <span className="text-emerald-400">➜</span>{" "}
      <span className="text-sky-400">~/cv</span>{" "}
    </>,
  ];

  const [shown, setShown] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(rows.length);
      return;
    }
    rows.forEach((_, i) => {
      timers.current.push(setTimeout(() => setShown(i + 1), 260 * (i + 1)));
    });
    return () => timers.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-[#0d0d12] font-mono text-[12.5px] leading-relaxed shadow-2xl shadow-black/40 dark:bg-[#0b0b0f]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 truncate text-[11px] text-zinc-400">
          vishal@salesforce:~/cv
        </span>
      </div>

      <div className="min-h-[300px] space-y-0.5 p-4 text-zinc-300 sm:p-5">
        {rows.slice(0, shown).map((row, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {row}
            {i === shown - 1 && (
              <span className="animate-blink text-emerald-400">▋</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
