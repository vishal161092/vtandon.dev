"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 up to the numeric part of `value` when it first scrolls into
 * view, preserving any prefix/suffix (e.g. "10+" counts to 10 and keeps "+").
 */
export function CountUp({
  value,
  duration = 1200,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const match = value.match(/(\D*)(\d+)(\D*)/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseInt(match[2], 10) : 0;
  const suffix = match?.[3] ?? "";

  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setN(target);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
          setN(Math.round(eased * target));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}
