import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { credentials } from "@/data/credentials";
import { cn } from "@/lib/utils";

const gradeColor = {
  Distinction: "text-accent",
  Merit: "text-[#7dd3fc]",
  Pass: "text-muted",
} as const;

export function Credentials() {
  return (
    <section id="credentials" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <SectionHeading
          index="06"
          eyebrow="Credentials / Academic record"
          title="A record that can be checked."
          description="Two NCC Education diplomas in computing, both awarded with Merit. Module results below reflect the awarded transcripts."
        />

        <div className="mt-10 space-y-3.5">
          {credentials.map((credential, credentialIndex) => (
            <div key={credential.qualificationNumber} className="grid gap-3.5 lg:grid-cols-12">
              <Reveal
                delay={credentialIndex * 0.04}
                className="min-w-0 lg:col-span-7"
              >
                <SpotlightCard className="relative h-full overflow-hidden p-6 sm:p-8">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 260 260"
                    className="pointer-events-none absolute -top-16 -right-16 size-[280px] opacity-[0.07]"
                  >
                    {[42, 56, 70, 84, 98, 112].map((radius) => (
                      <circle
                        key={radius}
                        cx="130"
                        cy="130"
                        r={radius}
                        fill="none"
                        stroke="white"
                        strokeWidth="0.6"
                        strokeDasharray={radius % 28 === 0 ? "1 4" : undefined}
                      />
                    ))}
                    <path
                      d="M18 130 H 242 M130 18 V 242"
                      stroke="white"
                      strokeWidth="0.35"
                      strokeDasharray="2 6"
                    />
                    <circle
                      cx="130"
                      cy="130"
                      r="16"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.6"
                    />
                  </svg>

                  <div className="relative flex flex-wrap items-center justify-between gap-3">
                    <span className="mono-label text-[9px] text-muted">
                      NCC Education / Qualification record
                    </span>
                    <StatusIndicator label="Verified" tone="live" />
                  </div>

                  <h3 className="relative mt-6 max-w-md font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.12] font-semibold tracking-[-0.03em]">
                    {credential.title}
                  </h3>

                  <dl className="relative mt-7 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                    <div>
                      <dt className="mono-label text-[9px] text-muted">
                        Awarding body
                      </dt>
                      <dd className="mt-2 text-[13px] leading-snug text-foreground">
                        {credential.awardingBody}
                      </dd>
                    </div>
                    <div>
                      <dt className="mono-label text-[9px] text-muted">Centre</dt>
                      <dd className="mt-2 text-[13px] leading-snug text-foreground">
                        {credential.centre}
                      </dd>
                    </div>
                    <div>
                      <dt className="mono-label text-[9px] text-muted">
                        Qualification number
                      </dt>
                      <dd className="mt-2 font-mono text-[13px] text-foreground">
                        {credential.qualificationNumber}
                      </dd>
                    </div>
                    <div>
                      <dt className="mono-label text-[9px] text-muted">Awarded</dt>
                      <dd className="mt-2 text-[13px] leading-snug text-foreground">
                        {credential.awardedOn}
                      </dd>
                    </div>
                  </dl>

                  <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                    <div>
                      <p className="mono-label text-[9px] text-muted">
                        Overall grade
                      </p>
                      <p className="mt-1 font-display text-[28px] leading-none font-semibold tracking-[-0.03em] text-accent">
                        {credential.overallGrade}
                      </p>
                    </div>
                    <span className="rounded-full border border-accent/25 bg-accent/[0.06] px-3 py-1.5 font-mono text-[9px] tracking-[0.12em] text-accent uppercase">
                      Level {credential.level} diploma
                    </span>
                  </div>

                  <p className="relative mt-5 font-mono text-[9px] leading-relaxed text-muted">
                    {credential.levelStatement} No degree equivalency is claimed.
                  </p>
                </SpotlightCard>
              </Reveal>

              <Reveal
                delay={credentialIndex * 0.04 + 0.08}
                className="min-w-0 lg:col-span-5"
              >
                <SpotlightCard className="h-full p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="mono-label text-[9px] text-muted">
                      Transcript / Module results
                    </span>
                    <span className="font-mono text-[9px] text-muted">
                      {String(credential.modules.length).padStart(2, "0")} modules
                    </span>
                  </div>

                  <ul className="mt-5">
                    {credential.modules.map((module, index) => (
                      <li
                        key={module.name}
                        className="flex items-start gap-3 border-b border-line py-3 last:border-b-0 last:pb-0"
                      >
                        <span className="mt-0.5 w-5 shrink-0 font-mono text-[8px] text-muted">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[12px] leading-snug text-secondary">
                            {module.name}
                          </p>
                          <div className="mt-1.5 flex items-center gap-2">
                            <span className="h-[2px] w-14 overflow-hidden rounded-full bg-white/8">
                              <span
                                className={cn(
                                  "block h-full rounded-full",
                                  module.grade === "Distinction"
                                    ? "bg-accent/80"
                                    : module.grade === "Merit"
                                      ? "bg-[#7dd3fc]/70"
                                      : "bg-white/30",
                                )}
                                style={{ width: `${module.score}%` }}
                              />
                            </span>
                            <span className="font-mono text-[8px] text-muted">
                              {module.score}%
                            </span>
                          </div>
                        </div>
                        <span
                          className={cn(
                            "shrink-0 font-mono text-[8.5px] tracking-[0.04em] uppercase",
                            gradeColor[module.grade],
                          )}
                        >
                          {module.grade}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 border-t border-line pt-4 font-mono text-[8.5px] leading-relaxed text-muted">
                    Module marks shown exactly as recorded on the awarded
                    transcript.
                  </p>

                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-foreground transition-colors hover:text-accent"
                  >
                    Ask about the record
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </SpotlightCard>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
