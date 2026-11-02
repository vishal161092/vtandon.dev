"use client";

import { useRef } from "react";

/**
 * A card that tracks the cursor and paints a soft accent "spotlight" that
 * follows the pointer (revealed on hover). Optionally tilts in 3D toward the
 * pointer. Renders as an anchor when `href` is set so tiles can link out.
 * Tilt + lift are disabled under prefers-reduced-motion.
 */
export function SpotlightCard({
  children,
  className = "",
  href,
  tilt = false,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  tilt?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  const reduce = () =>
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    if (tilt && !reduce()) {
      const rx = (0.5 - y / r.height) * 7;
      const ry = (x / r.width - 0.5) * 7;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    }
  };

  const onLeave = () => {
    const el = ref.current;
    if (el && tilt) el.style.transform = "";
  };

  const base = `group glow-on-hover relative overflow-hidden transition-[transform,box-shadow] duration-300 ${
    tilt ? "will-change-transform" : "hover:-translate-y-1"
  } ${className}`;

  const spotlight = (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), rgb(var(--accent) / 0.18), transparent 70%)",
        }}
      />
      {children}
    </>
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={base}
      >
        {spotlight}
      </a>
    );
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={base}
    >
      {spotlight}
    </div>
  );
}
