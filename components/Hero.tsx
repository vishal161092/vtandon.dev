"use client";

import {
  Github,
  Linkedin,
  Mail,
  Globe,
  GraduationCap,
  ArrowDown,
} from "lucide-react";
import { profile } from "@/lib/data";
import { Terminal } from "@/components/Terminal";

type SocialDef = { key: string; href: string; label: string; icon: React.ReactNode };

export function Hero() {
  const s = profile.socials;
  const socials: SocialDef[] = [
    s.github && { key: "github", href: s.github, label: "GitHub", icon: <Github className="h-5 w-5" /> },
    s.linkedin && { key: "linkedin", href: s.linkedin, label: "LinkedIn", icon: <Linkedin className="h-5 w-5" /> },
    s.email && { key: "email", href: `mailto:${s.email}`, label: "Email", icon: <Mail className="h-5 w-5" /> },
    s.trailhead && { key: "trailhead", href: s.trailhead, label: "Trailhead", icon: <GraduationCap className="h-5 w-5" /> },
    s.website && { key: "website", href: s.website, label: "Website", icon: <Globe className="h-5 w-5" /> },
  ].filter(Boolean) as SocialDef[];

  return (
    <section className="grid items-center gap-10 pt-6 sm:pt-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
      {/* Left: identity */}
      <div className="animate-fade-up">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 text-sm font-medium text-muted backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {profile.role}
        </p>

        <h1 className="text-gradient text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
          {profile.tagline}
        </p>

        {/* CTAs + socials */}
        <div className="mt-7 flex flex-wrap items-center gap-2.5">
          {s.linkedin && (
            <a
              href={s.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-ink px-5 py-2.5 text-sm font-semibold text-canvas transition hover:opacity-90"
            >
              Connect on LinkedIn
            </a>
          )}
          {socials.map((item) => (
            <a
              key={item.key}
              href={item.href}
              target={item.key === "email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={item.label}
              title={item.label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-muted transition-all hover:-translate-y-0.5 hover:bg-surface-hover hover:text-ink"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <a
          href="#experience"
          className="mt-10 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-faint transition hover:text-ink"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" /> Scroll to explore
        </a>
      </div>

      {/* Right: terminal */}
      <div className="animate-fade-up [animation-delay:0.15s]">
        <Terminal />
      </div>
    </section>
  );
}
