import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BentoTechnologyMatrix } from "@/components/ui/BentoTechnologyMatrix";
import { RelationshipDiagram } from "@/components/ui/RelationshipDiagram";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { credentials } from "@/data/credentials";

const selectedModules = ["Database Design and Development", "Dynamic Websites", "Computing Project"];

export function BentoOverview() {
  const credential = credentials[0];
  const modules = credential.modules.filter((module) =>
    selectedModules.includes(module.name),
  );

  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-5 border-t border-line pt-8 md:flex-row md:items-end md:justify-between">
            <div className="flex items-center gap-3">
              <span className="mono-label text-accent">02</span>
              <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
              <span className="mono-label text-muted">Profile / Snapshot</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-secondary md:text-right">
              A working snapshot — philosophy, tools in rotation, the current
              build, and a verified academic record.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3.5 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <SpotlightCard className="h-full p-6 sm:p-7">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span className="mono-label text-[9px] text-muted">
                    01 / Philosophy
                  </span>
                  <span className="mono-label text-[9px] text-accent/80">
                    Schema → interface
                  </span>
                </div>

                <h3 className="text-h3 mt-6 max-w-sm">
                  Database-first, design-obsessed.
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-secondary">
                  I enjoy understanding how an application works beneath its
                  interface — from relational data models and authentication
                  boundaries to the small details that make an interface feel
                  effortless.
                </p>

                <RelationshipDiagram />

                <div className="mt-4 flex items-center justify-between gap-4 font-mono text-[8.5px] tracking-[0.12em] text-muted uppercase">
                  <span>Fig. 02 — Ownership model</span>
                  <span className="hidden sm:inline">
                    Auth → profile → logs
                  </span>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.06} className="md:col-span-5">
            <SpotlightCard className="h-full p-6 sm:p-7">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span className="mono-label text-[9px] text-muted">
                    02 / Technology matrix
                  </span>
                  <span className="mono-label text-[9px] text-accent/80">
                    Four groups
                  </span>
                </div>

                <h3 className="text-h3 mt-6">The tools in rotation.</h3>
                <BentoTechnologyMatrix />
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.04} className="md:col-span-4">
            <SpotlightCard className="h-full p-6 sm:p-7">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span className="mono-label text-[9px] text-muted">
                    03 / Currently building
                  </span>
                </div>

                <h3 className="mt-6 font-display text-[30px] leading-none font-semibold tracking-[-0.03em]">
                  Nourish360
                </h3>
                <p className="mt-2 font-mono text-[10px] tracking-[0.12em] text-accent uppercase">
                  Flutter + Supabase
                </p>
                <p className="mt-4 text-sm leading-relaxed text-secondary">
                  Developing a cross-platform wellness application with
                  cloud-backed user data and personalised tracking features.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-5 items-end gap-[3px]"
                  >
                    {[0, 1, 2].map((bar) => (
                      <span
                        key={bar}
                        className="animate-signal-bar w-[3px] rounded-full bg-accent/80"
                        style={{
                          height: `${9 + bar * 4}px`,
                          animationDelay: `${bar * 0.18}s`,
                        }}
                      />
                    ))}
                  </span>
                  <span className="mono-label text-[9px] text-accent">
                    Development in progress
                  </span>
                </div>

                <div className="mt-auto pt-8">
                  <div className="border-t border-line pt-4">
                    <p className="text-[12.5px] leading-relaxed text-secondary">
                      Seeking a first professional Junior Full-Stack Developer
                      opportunity.
                    </p>
                    <Link
                      href="/projects/nourish360"
                      className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium text-foreground transition-colors hover:text-accent"
                    >
                      View case study
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-8">
            <SpotlightCard className="h-full p-6 sm:p-7">
              <div className="grid h-full gap-8 sm:grid-cols-2">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span className="mono-label text-[9px] text-muted">
                      04 / Education
                    </span>
                    <StatusIndicator
                      label="Verified record"
                      tone="live"
                      className="scale-90"
                    />
                  </div>

                  <h3 className="mt-6 font-display text-[25px] leading-[1.12] font-semibold tracking-[-0.03em]">
                    {credential.title}
                  </h3>

                  <dl className="mt-5 space-y-2 font-mono text-[10.5px]">
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted">Centre</dt>
                      <dd className="text-right text-secondary">
                        {credential.centre}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted">Awarded</dt>
                      <dd className="text-right text-secondary">
                        {credential.awardedOn}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted">Qualification</dt>
                      <dd className="text-right text-secondary">
                        {credential.qualificationNumber}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-5 flex items-center gap-2">
                    <span className="rounded-full border border-accent/25 bg-accent/[0.07] px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] text-accent uppercase">
                      Overall grade — {credential.overallGrade}
                    </span>
                  </div>

                  <p className="mt-3 font-mono text-[9px] leading-relaxed text-muted">
                    Also awarded — Level 4 Diploma in Computing, Merit, 2023
                  </p>
                </div>

                <div className="flex flex-col">
                  <span className="mono-label text-[9px] text-muted">
                    Selected modules
                  </span>
                  <ul className="mt-4 space-y-3">
                    {modules.map((module) => (
                      <li
                        key={module.name}
                        className="flex items-start justify-between gap-4 border-b border-line pb-3 last:border-b-0 last:pb-0"
                      >
                        <span className="text-[12.5px] leading-snug text-secondary">
                          {module.name}
                        </span>
                        <span className="shrink-0 font-mono text-[10px] whitespace-nowrap text-foreground">
                          {module.grade}
                          <span className="ml-1.5 text-muted">
                            {module.score}%
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <a
                      href="#credentials"
                      className="inline-flex items-center gap-1.5 text-[12px] font-medium text-foreground transition-colors hover:text-accent"
                    >
                      View full transcript
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
