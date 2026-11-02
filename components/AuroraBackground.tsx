/**
 * Ambient, theme-aware backdrop: a fine grid that fades to the edges plus
 * three softly drifting colour orbs. Purely decorative. Fixed behind all
 * content and non-interactive.
 */
export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Grid texture, masked to a soft radial so it fades near the edges */}
      <div
        className="absolute inset-0 bg-grid opacity-[0.5] dark:opacity-[0.35]"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 55% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 55% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />

      {/* Drifting colour orbs */}
      <div className="absolute -left-24 -top-24 h-[32rem] w-[32rem] animate-aurora-a rounded-full bg-indigo-500/25 blur-[90px] dark:bg-indigo-500/20" />
      <div className="absolute -right-32 top-10 h-[28rem] w-[28rem] animate-aurora-b rounded-full bg-fuchsia-500/20 blur-[90px] dark:bg-fuchsia-500/15" />
      <div className="absolute left-1/3 top-40 h-[26rem] w-[26rem] animate-aurora-a rounded-full bg-sky-400/20 blur-[100px] [animation-delay:-8s] dark:bg-sky-400/10" />
    </div>
  );
}
