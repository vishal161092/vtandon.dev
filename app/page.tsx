import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ScrollProgress } from "@/components/ScrollProgress";
import { StarField } from "@/components/StarField";
import { SideNav } from "@/components/SideNav";
import { ScrollTop } from "@/components/ScrollTop";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import {
  ExperienceSection,
  BentoSection,
  WorkSection,
  CertificationsSection,
  RecommendationsSection,
  AboutSection,
} from "@/components/Sections";
import { profile, certifications, recommendations, projects } from "@/lib/data";

const stats = [
  { value: "10+", label: "Years at Salesforce" },
  { value: String(certifications.length), label: "Salesforce Certifications" },
  { value: String(recommendations.length), label: "Recommendations" },
];

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-10 sm:py-12">
      <Reveal>
        <div className="mb-8 flex items-end gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-1 text-sm text-muted">{subtitle}</p>
            )}
          </div>
          <span className="mb-2 h-px flex-1 bg-gradient-to-r from-line to-transparent" />
        </div>
      </Reveal>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <StarField />
      <SideNav />
      <ScrollTop />
      <main className="relative mx-auto min-h-screen w-full max-w-6xl px-5 pb-24 sm:px-8">
        {/* Top bar */}
        <div className="flex justify-end py-5">
          <ThemeToggle />
        </div>

        <Hero />

        {/* Stat band */}
        <div className="mt-14 rounded-3xl border border-line bg-surface/75 backdrop-blur-sm">
          <dl className="grid grid-cols-3 divide-x divide-line">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-7 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <CountUp
                    value={s.value}
                    className="block text-3xl font-black tracking-tight text-ink sm:text-5xl"
                  />
                  <span className="mt-1 block text-[10px] font-medium uppercase tracking-widest text-faint sm:text-xs">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Tech marquee */}
        <div className="mt-8 border-y border-line py-3">
          <Marquee />
        </div>

        <Section id="experience" title="Experience" subtitle="The path so far, a quick snapshot. The real story is in the skills & work below.">
          <ExperienceSection />
        </Section>

        <Section id="highlights" title="Highlights" subtitle="Recognition, programs & what people say.">
          <BentoSection />
        </Section>

        {projects.length > 0 && (
          <Section id="work" title="Selected Work" subtitle="Things I've built and shipped.">
            <WorkSection />
          </Section>
        )}

        <Section id="certifications" title="Certifications" subtitle={`${certifications.length} Salesforce credentials, including Application and Data Architect, plus AI and leadership programs.`}>
          <CertificationsSection />
        </Section>

        <Section id="voices" title="Voices" subtitle={`What managers, clients and teammates say. ${recommendations.length} LinkedIn recommendations.`}>
          <RecommendationsSection />
        </Section>

        <Section id="about" title="About" subtitle="The short version.">
          <AboutSection />
        </Section>

        {/* Contact CTA */}
        <Reveal>
          <section className="mt-6 overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-accent/15 via-fuchsia-500/10 to-transparent p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Let&apos;s build something.
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted">
              Open to connect on Salesforce engineering, demos, and team
              leadership.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {profile.socials.linkedin && (
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-ink px-5 py-2.5 text-sm font-semibold text-canvas transition hover:opacity-90"
                >
                  Connect on LinkedIn
                </a>
              )}
              {profile.socials.email && (
                <a
                  href={`mailto:${profile.socials.email}`}
                  className="rounded-xl border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-surface-hover"
                >
                  {profile.socials.email}
                </a>
              )}
            </div>
          </section>
        </Reveal>

        <footer className="mt-16 border-t border-line pt-6 text-center text-xs text-faint">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind.
        </footer>
      </main>
    </>
  );
}
