"use client";

import { useRef } from "react";

/**
 * A looping, muted demo clip that plays while hovered (or always, on touch).
 * Shows `poster` as the still frame until play. Drop an MP4/WebM URL in and it
 * just works, used for project/demo cards.
 */
export function HoverVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  const play = () => {
    const v = ref.current;
    if (v) v.play().catch(() => {});
  };
  const stop = () => {
    const v = ref.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      onMouseEnter={play}
      onMouseLeave={stop}
      className={className}
    />
  );
}
