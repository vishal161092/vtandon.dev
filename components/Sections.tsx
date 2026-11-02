"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  Quote,
  Star,
  Sparkles,
  PlayCircle,
  ChevronDown,
  GraduationCap,
} from "lucide-react";
import {
  experience,
  projects,
  certifications,
  courses,
  recommendations,
  featured,
  about,
} from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { AgentDemo } from "@/components/AgentDemo";
import { HoverVideo } from "@/components/HoverVideo";

/* --------------------------------- Experience --------------------------------- */

export function ExperienceSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {experience.map((job, j) => (
        <Reveal key={job.company} delay={j * 0.05}>
          <div className="h-full rounded-3xl border border-line bg-surface/75 p-5 backdrop-blur-sm">
            {/* company header */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-ink">{job.company}</h3>
              {job.tenure && (
                <span className="rounded-full border border-line bg-canvas px-2.5 py-0.5 text-[11px] font-semibold text-muted">
                  {job.tenure}
                </span>
              )}
            </div>

            {/* compact role ladder, one line each, no prose */}
            <ol className="relative mt-4 space-y-2.5 border-l border-line pl-4">
              {job.roles.map((role, i) => {
                const current = j === 0 && i === 0;
                return (
                  <li key={role.title} className="relative">
                    <span
                      className={`absolute left-[-20.5px] top-1.5 h-2 w-2 rounded-full ${
                        current
                          ? "bg-accent shadow-[0_0_0_3px_rgb(var(--accent)/0.15)]"
                          : "bg-faint"
                      }`}
                    />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                      <span className="flex items-center gap-1.5 text-[13.5px] font-medium text-ink">
                        {role.title}
                        {current && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-1.5 py-px text-[10px] font-bold uppercase tracking-wider text-emerald-500">
                            <span className="h-1 w-1 rounded-full bg-emerald-500" />
                            Now
                          </span>
                        )}
                      </span>
                      <span className="text-[11px] tabular-nums text-faint">
                        {role.period}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>

            {/* stack chips */}
            {job.stack && (
              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-line pt-4">
                {job.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* --------------------------------- Bento (highlights + voice + photo) --------------------------------- */

function TagChip({ tag }: { tag?: string }) {
  if (!tag) return null;
  const isAI = tag.toLowerCase() === "ai";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ${
        isAI
          ? "bg-accent/15 text-accent"
          : "bg-surface-hover text-faint"
      }`}
    >
      {isAI && <Sparkles className="h-3 w-3" />}
      {tag}
    </span>
  );
}

function LinkArrow() {
  return (
    <span className="absolute right-5 top-5 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full border border-line bg-surface/80 text-muted opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <ArrowUpRight className="h-4 w-4" />
    </span>
  );
}

export function BentoSection() {
  const topQuote = recommendations[0];
  return (
    <div className="grid auto-rows-[160px] grid-cols-2 gap-4 md:grid-cols-4">
      {/* Big highlight */}
      {featured[0] && (
        <Reveal className="col-span-2 row-span-2">
          <SpotlightCard
            href={featured[0].link || undefined}
            tilt
            className="flex h-full flex-col justify-between rounded-3xl border border-line bg-gradient-to-br from-accent/20 via-fuchsia-500/10 to-transparent p-6"
          >
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgb(var(--accent))_1px,transparent_1px)] [background-size:18px_18px]" />
            {featured[0].link && <LinkArrow />}
            <div className="relative flex items-center gap-3">
              <TagChip tag={featured[0].tag} />
            </div>
            <div className="relative">
              <h3 className="text-xl font-bold leading-snug text-ink">
                {featured[0].title}
              </h3>
              {featured[0].note && (
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {featured[0].note}
                </p>
              )}
            </div>
          </SpotlightCard>
        </Reveal>
      )}

      {/* Pull quote */}
      {topQuote && (
        <Reveal className="col-span-2 row-span-2" delay={0.05}>
          <SpotlightCard tilt className="flex h-full flex-col justify-between rounded-3xl border border-line bg-surface p-6">
            <div>
              <div className="mb-2 flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                ))}
              </div>
              <blockquote className="relative text-[15px] font-medium leading-relaxed text-ink">
                “{shorten(topQuote.text, 180)}”
              </blockquote>
            </div>
            <figcaption className="relative mt-4 text-sm text-faint">
              <span className="font-semibold text-muted">{topQuote.name}</span>{" "}
              · {recommendations.length} recommendations
            </figcaption>
          </SpotlightCard>
        </Reveal>
      )}

      {/* Two medium highlights */}
      {featured.slice(1, 3).map((f, i) => (
        <Reveal key={f.title} className="col-span-1 row-span-2" delay={0.1 + i * 0.05}>
          <SpotlightCard
            href={f.link || undefined}
            tilt
            className="flex h-full flex-col justify-between rounded-3xl border border-line bg-surface p-5"
          >
            {f.link && <LinkArrow />}
            <div className="relative flex items-center gap-2">
              <Star className="h-5 w-5 text-accent" />
              <TagChip tag={f.tag} />
            </div>
            <h3 className="relative text-[15px] font-semibold leading-snug text-ink">
              {f.title}
            </h3>
          </SpotlightCard>
        </Reveal>
      ))}

      {/* Live Agentforce demo (animated mock) */}
      <Reveal className="col-span-2 row-span-2" delay={0.15}>
        <AgentDemo />
      </Reveal>

      {/* Last highlight wide */}
      {featured[3] && (
        <Reveal className="col-span-2 row-span-2" delay={0.2}>
          <SpotlightCard
            href={featured[3].link || undefined}
            tilt
            className="flex h-full flex-col justify-between rounded-3xl border border-line bg-gradient-to-br from-sky-500/15 via-transparent to-fuchsia-500/10 p-6"
          >
            {featured[3].link && <LinkArrow />}
            <div className="relative flex items-center gap-2">
              <Star className="h-6 w-6 text-sky-400" />
              <TagChip tag={featured[3].tag} />
            </div>
            <div className="relative">
              <h3 className="text-lg font-bold leading-snug text-ink">
                {featured[3].title}
              </h3>
              {featured[3].note && (
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {featured[3].note}
                </p>
              )}
            </div>
          </SpotlightCard>
        </Reveal>
      )}
    </div>
  );
}

/* --------------------------------- Work --------------------------------- */

export function WorkSection() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {projects.map((p, i) => (
        <Reveal key={p.title} delay={i * 0.07}>
          <SpotlightCard
            href={p.link || undefined}
            tilt
            className="block rounded-3xl border border-line"
          >
            <div className="relative h-56 overflow-hidden rounded-3xl md:h-72">
              {p.video ? (
                <HoverVideo
                  src={p.video}
                  poster={p.image}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              ) : p.image ? (
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              ) : (
                <div className={`h-full w-full bg-gradient-to-br ${p.gradient}`} />
              )}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-50 mix-blend-multiply`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10" />

              {p.video && (
                <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur">
                  <PlayCircle className="h-3.5 w-3.5" /> hover to play
                </span>
              )}
              {p.link && (
                <span className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:bg-white/30">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              )}

              <div className="absolute inset-x-0 bottom-0 z-20 p-5">
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/90">
                  {p.blurb}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-black/45 px-2.5 py-0.5 text-[11px] font-medium text-white ring-1 ring-white/20 backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>
      ))}
    </div>
  );
}

/* --------------------------------- Certifications --------------------------------- */

export function CertificationsSection() {
  const groups: { issuer: string; items: typeof certifications }[] = [];
  for (const c of certifications) {
    let g = groups.find((x) => x.issuer === c.issuer);
    if (!g) {
      g = { issuer: c.issuer, items: [] };
      groups.push(g);
    }
    g.items.push(c);
  }

  return (
    <div className="space-y-8">
      {groups.map((group, gi) => (
        <Reveal key={group.issuer} delay={gi * 0.05}>
          <div className="mb-3 flex items-baseline gap-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-faint">
              {group.issuer}
            </h3>
            <span className="text-xs text-faint">· {group.items.length}</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {group.items.map((c) => (
              <span
                key={c.name}
                className="glow-on-hover inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1.5 pl-2.5 pr-3.5 text-[13px] text-muted transition hover:-translate-y-0.5 hover:text-ink"
                title={c.year ? `Issued ${c.year}` : undefined}
              >
                <BadgeCheck className="h-4 w-4 shrink-0 text-accent" />
                {c.name}
              </span>
            ))}
          </div>
        </Reveal>
      ))}

      {courses.length > 0 && (
        <Reveal delay={groups.length * 0.05}>
          <div className="mb-3 flex items-baseline gap-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-faint">
              Programs & courses
            </h3>
            <span className="text-xs text-faint">· {courses.length}</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {courses.map((c) => (
              <span
                key={c.name}
                className="glow-on-hover inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1.5 pl-2.5 pr-3.5 text-[13px] text-muted transition hover:-translate-y-0.5 hover:text-ink"
                title={[c.issuer, c.year].filter(Boolean).join(" · ")}
              >
                {c.tag === "AI" ? (
                  <Sparkles className="h-4 w-4 shrink-0 text-accent" />
                ) : (
                  <GraduationCap className="h-4 w-4 shrink-0 text-accent" />
                )}
                {c.name}
                <span className="text-[11px] text-faint">{c.issuer}</span>
              </span>
            ))}
          </div>
        </Reveal>
      )}
    </div>
  );
}

/* --------------------------------- Recommendations --------------------------------- */

const avatarGradients = [
  "from-indigo-500 to-fuchsia-500",
  "from-sky-500 to-cyan-500",
  "from-fuchsia-500 to-rose-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-violet-500 to-purple-500",
];

function recInitials(name: string) {
  return name.split(" ").map((p) => p[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}

function gradientFor(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return avatarGradients[h % avatarGradients.length];
}

type Rec = (typeof recommendations)[number];

function RecCard({ r, featured = false }: { r: Rec; featured?: boolean }) {
  return (
    <figure
      className={`glow-on-hover flex break-inside-avoid flex-col rounded-2xl border bg-surface p-5 transition hover:-translate-y-0.5 ${
        featured ? "border-accent/30" : "border-line"
      }`}
    >
      <div className="flex items-center justify-between">
        <Quote className="h-5 w-5 text-accent/70" />
        <span className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          ))}
        </span>
      </div>
      {featured && r.pull ? (
        <blockquote className="mt-3 flex-1 text-lg font-semibold leading-snug text-ink">
          &ldquo;{r.pull}&rdquo;
        </blockquote>
      ) : (
        <blockquote className="mt-3 text-[14px] leading-relaxed text-muted">
          {r.text}
        </blockquote>
      )}
      <figcaption className="mt-4 flex items-center gap-3 border-t border-line pt-4">
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${gradientFor(
            r.name,
          )} text-xs font-semibold text-white`}
        >
          {recInitials(r.name)}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-ink">{r.name}</span>
          <span className="block truncate text-xs text-faint">{r.title}</span>
          <span className="mt-0.5 block text-[11px] text-faint">{r.relationship}</span>
        </span>
      </figcaption>
    </figure>
  );
}

/** Three featured pull-quotes up front; the full set sits behind "Show all". */
export function RecommendationsSection() {
  const [open, setOpen] = useState(false);
  const top = recommendations.filter((r) => r.pull);
  const rest = recommendations.filter((r) => !r.pull);

  return (
    <div>
      <div className="grid gap-5 md:grid-cols-3">
        {top.map((r) => (
          <RecCard key={r.name} r={r} featured />
        ))}
      </div>

      {open && (
        <div className="mt-5 columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5">
          {[...top, ...rest].map((r) => (
            <RecCard key={r.name} r={r} />
          ))}
        </div>
      )}

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink transition hover:bg-surface-hover"
        >
          {open ? "Show less" : `Read all ${recommendations.length} in full`}
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
    </div>
  );
}

/* --------------------------------- About --------------------------------- */

export function AboutSection() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <Reveal className="space-y-4 lg:col-span-2">
        {about.paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-muted">
            {p}
          </p>
        ))}
      </Reveal>
      <Reveal delay={0.1} className="space-y-6">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-faint">
            Education
          </h3>
          <ul className="mt-3 space-y-3">
            {about.education.map((e) => (
              <li key={e.school}>
                <p className="text-[15px] font-medium text-ink">{e.degree}</p>
                <p className="text-sm text-muted">{e.school}</p>
                <p className="text-xs text-faint">{e.period}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-faint">
            Interests
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {about.interests.map((i) => (
              <Tag key={i} interactive>
                {i}
              </Tag>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

/* --------------------------------- shared --------------------------------- */

function shorten(s: string, n: number) {
  if (s.length <= n) return s;
  return s.slice(0, s.lastIndexOf(" ", n)).trimEnd() + "…";
}

function Tag({
  children,
  interactive = false,
}: {
  children: React.ReactNode;
  interactive?: boolean;
}) {
  return (
    <span
      className={`rounded-full border border-line bg-canvas px-2.5 py-1 text-xs font-medium text-muted ${
        interactive
          ? "cursor-default transition-colors hover:border-accent/50 hover:bg-accent/10 hover:text-ink"
          : ""
      }`}
    >
      {children}
    </span>
  );
}
