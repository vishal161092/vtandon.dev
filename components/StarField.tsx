"use client";

import { useEffect, useRef } from "react";

type Star = {
  hx: number; // home position
  hy: number;
  x: number; // current position
  y: number;
  r: number; // radius
  base: number; // base brightness
  tw: number; // twinkle phase
  tws: number; // twinkle speed
};

/**
 * A full-screen starfield behind the page. Stars gently twinkle in place. The
 * cursor acts like a force field: stars within `RADIUS` are pushed outward,
 * clearing a circular void around the pointer (so nothing shows behind the
 * cursor); they ease back home once it moves on. Fixed, pointer-transparent,
 * respects prefers-reduced-motion and pauses on hidden tabs.
 */
export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let stars: Star[] = [];

    const RADIUS = 80; // size of the void around the cursor
    const mouse = { x: -9999, y: -9999 };

    const accentRGB = () => {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim()
        .replace(/\s+/g, ",");
      return v || "129,140,248";
    };
    let col = accentRGB();

    const build = () => {
      const count = Math.min(480, Math.round((w * h) / 4200));
      stars = Array.from({ length: count }, () => {
        const hx = Math.random() * w;
        const hy = Math.random() * h;
        return {
          hx,
          hy,
          x: hx,
          y: hy,
          r: Math.random() * 1.4 + 0.4,
          base: Math.random() * 0.5 + 0.3,
          tw: Math.random() * Math.PI * 2,
          tws: Math.random() * 0.03 + 0.008,
        };
      });
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      col = accentRGB();
      build();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        // push away from cursor, ease back home otherwise
        const dx = s.x - mouse.x;
        const dy = s.y - mouse.y;
        const dist = Math.hypot(dx, dy) || 0.0001;

        let tx = s.hx;
        let ty = s.hy;
        if (dist < RADIUS) {
          // target just outside the void, along the cursor→star direction
          const push = (RADIUS - dist) / RADIUS; // 1 at center → 0 at edge
          const force = push * RADIUS;
          tx = s.x + (dx / dist) * force;
          ty = s.y + (dy / dist) * force;
        }
        s.x += (tx - s.x) * 0.12;
        s.y += (ty - s.y) * 0.12;

        // twinkle
        let bright = s.base;
        if (!reduce) {
          s.tw += s.tws;
          bright = s.base + Math.sin(s.tw) * 0.25;
        }
        // fade out as it enters the void so the clearing looks clean
        const voidFade = dist < RADIUS ? Math.max(0, dist / RADIUS) : 1;
        const alpha = Math.max(0, Math.min(1, bright)) * voidFade;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col},${alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onVis = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
