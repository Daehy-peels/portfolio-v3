import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Github } from "@/components/ui/icons";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { MagneticLink } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { StackDiagram } from "@/components/ui/StackDiagram";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { YangonClock } from "@/components/layout/YangonClock";
import { profile } from "@/data/portfolio";
import { isValidEmail } from "@/lib/utils";

const legend = [
  { label: "Interface", value: "React · Next.js · Flutter", dot: "bg-accent" },
  { label: "Application", value: "Supabase · Auth · APIs", dot: "bg-white/45" },
  { label: "Data", value: "PostgreSQL · RLS", dot: "bg-white/45" },
];

const metadata = [
  { label: "Based in", value: "Yangon, Myanmar" },
  { label: "Work preference", value: "On-site · Hybrid · Remote" },
  { label: "Core stack", value: "React / Next.js · Supabase · Flutter" },
  { label: "Focus", value: "First professional full-stack role" },
];

export function Hero() {
  const emailConfigured = isValidEmail(profile.email);

  return (
    <section id="overview" className="relative pt-28 sm:pt-32 lg:pt-36">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                <span className="grid size-9 place-items-center rounded-[10px] border border-white/10 bg-white/[0.03] font-display text-[12px] font-semibold tracking-tight text-foreground">
                  MBK
                </span>
                <span className="mono-label text-muted">
                  Myat Bhone Kyaw / Developer Portfolio
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="mt-9">
              <StatusIndicator
                variant="pill"
                tone="wip"
                label="Open to junior full-stack roles"
              />
            </Reveal>

            <AnimatedText
              className="text-hero mt-6 max-w-[660px]"
              delay={0.2}
              lines={[
                { text: "Myat Bhone Kyaw" },
                {
                  text: "Full Stack &",
                  className:
                    "mt-5 text-[0.44em] leading-[1.16] tracking-[-0.025em] font-medium text-secondary",
                },
                {
                  text: "Cross-Platform Developer.",
                  className:
                    "text-[0.44em] leading-[1.16] tracking-[-0.025em] font-medium text-secondary",
                },
              ]}
            />

            <Reveal delay={0.38} className="mt-8 max-w-xl">
              <p className="text-lead text-secondary">{profile.summary}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {profile.technicalSummary}
              </p>
            </Reveal>

            <Reveal
              delay={0.46}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <MagneticLink href="#work" className="h-12 px-6">
                Explore selected work
                <ArrowDownRight className="size-4" aria-hidden="true" />
              </MagneticLink>

              {emailConfigured ? (
                <CopyEmail email={profile.email} className="h-12 px-6" />
              ) : (
                <MagneticLink
                  href={profile.links.github}
                  variant="secondary"
                  external
                  className="h-12 px-6"
                >
                  <Github className="size-4" aria-hidden="true" />
                  GitHub profile
                </MagneticLink>
              )}

              {emailConfigured ? (
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-btn px-2 py-2 text-sm text-secondary transition-colors hover:text-foreground"
                >
                  GitHub
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              ) : null}

              {emailConfigured ? (
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-btn px-2 py-2 text-sm text-secondary transition-colors hover:text-foreground"
                >
                  LinkedIn
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </Reveal>
          </div>

          <Reveal delay={0.3} className="lg:col-span-5">
            <div className="mx-auto w-full max-w-[430px]">
              <div className="relative overflow-hidden rounded-showcase border border-line bg-[#0a0a0e]/70 p-4 shadow-card backdrop-blur-sm sm:p-5">
                <div
                  aria-hidden="true"
                  className="absolute -top-16 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
                />

                <div className="relative flex items-center justify-between">
                  <span className="mono-label text-[9px] text-muted">
                    System specimen
                  </span>
                  <span className="mono-label text-[9px] text-muted/80">
                    Layer map / 001
                  </span>
                </div>

                <div className="relative mt-2 overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="animate-scan-line pointer-events-none absolute inset-x-6 top-0 z-10 h-[22%] bg-gradient-to-b from-transparent via-accent/[0.06] to-transparent will-change-transform"
                  />
                  <StackDiagram />
                </div>

                <ul className="relative mt-2 space-y-2.5 border-t border-line pt-4">
                  {legend.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between gap-4 font-mono text-[9.5px] tracking-[0.04em]"
                    >
                      <span className="flex items-center gap-2 text-secondary">
                        <span
                          aria-hidden="true"
                          className={`size-1 rounded-full ${item.dot}`}
                        />
                        {item.label}
                      </span>
                      <span className="text-right text-muted">{item.value}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/projects/nourish360"
                  className="relative mt-4 flex items-center justify-between gap-4 rounded-[10px] border border-line bg-white/[0.02] px-3 py-2.5 transition-colors hover:border-line-strong hover:bg-white/[0.04]"
                >
                  <span className="font-mono text-[9px] tracking-[0.14em] text-muted uppercase">
                    Active build / Nourish360
                  </span>
                  <ArrowUpRight
                    className="size-3.5 text-secondary"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <div className="mt-3 flex items-center justify-between px-1 font-mono text-[9px] tracking-[0.12em] text-muted uppercase">
                <span>Fig. 01 — Stack cross-section</span>
                <span className="flex items-center gap-1.5">
                  YGN <YangonClock timeZone={profile.timeZone} />
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.55} className="mt-16 border-t border-line pt-7 lg:mt-20">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
            {metadata.map((item) => (
              <div key={item.label}>
                <dt className="mono-label text-[9px] text-muted">
                  {item.label}
                </dt>
                <dd className="mt-2 text-[13px] leading-snug text-foreground">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
