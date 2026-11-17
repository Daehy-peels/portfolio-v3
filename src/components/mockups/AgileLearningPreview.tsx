import { ArrowRight, BookOpen, Check, Target, Trophy } from "lucide-react";

const ringRadius = 23;
const ringCircumference = 2 * Math.PI * ringRadius;
const progress = 42;

const stats = [
  { label: "Completed", value: "05" },
  { label: "Remaining", value: "07" },
  { label: "Passed tests", value: "03" },
  { label: "Avg. score", value: "82%" },
];

const recent = [
  { title: "Scrum Fundamentals", state: "Completed" },
  { title: "Scrum Roles & Accountabilities", state: "Next up" },
];

export function AgileLearningPreview() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[12px] border border-white/10 bg-[#070a10] text-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.95)]">
      <div className="flex items-center gap-2 border-b border-white/[0.07] px-3 py-2">
        <span aria-hidden="true" className="flex gap-1">
          {[0, 1, 2].map((dot) => (
            <span key={dot} className="size-1.5 rounded-full bg-blue-400/40" />
          ))}
        </span>

        <span className="ml-1 flex items-center gap-1.5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="size-3 text-blue-400"
            aria-hidden="true"
          >
            <path d="M12 3v18M5 8l7-5 7 5M5 16l7 5 7-5" />
            <circle cx="12" cy="3" r="1.5" />
            <circle cx="5" cy="8" r="1.5" />
            <circle cx="19" cy="8" r="1.5" />
            <circle cx="5" cy="16" r="1.5" />
            <circle cx="19" cy="16" r="1.5" />
            <circle cx="12" cy="21" r="1.5" />
          </svg>
          <span className="font-display text-[9px] font-semibold tracking-tight">
            AgileMastery
          </span>
        </span>

        <nav
          aria-label="Preview navigation"
          className="ml-3 hidden items-center gap-2.5 font-mono text-[6px] tracking-[0.12em] text-slate-500 uppercase sm:flex"
        >
          <span className="text-blue-300">Dashboard</span>
          <span>Curriculum</span>
          <span>Resources</span>
        </nav>

        <span className="ml-auto rounded-full border border-blue-400/20 bg-blue-400/10 px-1.5 py-0.5 font-mono text-[5.5px] tracking-[0.1em] text-blue-300 uppercase">
          Example data
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-2 p-2.5 sm:p-3">
        <section className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-[#0b1018]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(59,130,246,0.14),transparent_42%)]"
          />

          <div className="relative flex items-center gap-4 p-3">
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-1 font-mono text-[5.5px] font-semibold tracking-[0.18em] text-blue-400 uppercase">
                <span className="size-1 rounded-full bg-blue-400" />
                Scrum Master Academy
              </p>

              <h4 className="mt-1.5 font-display text-[15px] leading-tight font-semibold tracking-tight sm:text-[17px]">
                Welcome back,{" "}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
                  Myat.
                </span>
              </h4>

              <p className="mt-1 max-w-[220px] text-[7px] leading-relaxed text-slate-400">
                You&apos;re on the Beginner track. 5 of 12 modules complete.
              </p>

              <span className="mt-2 inline-flex items-center gap-1 rounded-md bg-blue-500 px-2 py-1 font-mono text-[6px] font-semibold text-white">
                Continue learning
                <ArrowRight className="size-2" aria-hidden="true" />
              </span>
            </div>

            <div className="relative hidden size-16 shrink-0 place-items-center sm:grid">
              <svg
                viewBox="0 0 64 64"
                className="absolute inset-0 size-full -rotate-90"
                aria-hidden="true"
              >
                <circle
                  cx="32"
                  cy="32"
                  r={ringRadius}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="text-white/[0.06]"
                />
                <circle
                  cx="32"
                  cy="32"
                  r={ringRadius}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={ringCircumference}
                  strokeDashoffset={ringCircumference * (1 - progress / 100)}
                  className="text-blue-500"
                />
              </svg>

              <span className="text-center">
                <span className="block font-display text-[14px] leading-none font-semibold">
                  {progress}
                  <span className="text-[7px] text-blue-400">%</span>
                </span>
                <span className="mt-0.5 block font-mono text-[4.5px] tracking-[0.12em] text-slate-500 uppercase">
                  complete
                </span>
              </span>
            </div>
          </div>

          <div className="relative grid grid-cols-4 divide-x divide-white/[0.06] border-t border-white/[0.06]">
            {stats.map((stat) => (
              <div key={stat.label} className="px-2 py-1.5">
                <p className="font-display text-[10px] font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-0.5 truncate font-mono text-[4.5px] tracking-[0.08em] text-slate-500 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-2 sm:grid-cols-[1.35fr_1fr]">
          <div className="relative overflow-hidden rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.10] via-indigo-500/[0.05] to-transparent p-2.5">
            <div className="flex items-center justify-between gap-2">
              <p className="font-mono text-[5.5px] font-semibold tracking-[0.16em] text-blue-300 uppercase">
                Next milestone
              </p>
              <Target className="size-2.5 text-blue-400" aria-hidden="true" />
            </div>

            <h5 className="mt-1.5 truncate font-display text-[10px] font-semibold">
              Scrum Roles &amp; Accountabilities
            </h5>
            <p className="mt-0.5 line-clamp-2 text-[6.5px] leading-relaxed text-slate-400">
              The accountabilities of the Product Owner, Scrum Master, and
              Developers.
            </p>

            <div className="mt-2 flex items-center justify-between">
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-1.5 py-0.5 font-mono text-[5px] text-emerald-300 uppercase">
                Beginner
              </span>
              <span className="inline-flex items-center gap-0.5 font-mono text-[5.5px] text-blue-300">
                Open module
                <ArrowRight className="size-2" aria-hidden="true" />
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.07] bg-[#0c1119] p-2.5">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[5.5px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
                Assessment
              </p>
              <Trophy className="size-2.5 text-violet-400" aria-hidden="true" />
            </div>

            <div className="mt-1.5 flex items-end justify-between gap-2">
              <span className="font-display text-[16px] leading-none font-semibold">
                86%
              </span>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-1.5 py-0.5 font-mono text-[5px] text-emerald-300 uppercase">
                Passed
              </span>
            </div>

            <p className="mt-1 font-mono text-[5.5px] text-slate-500">
              Grade B · 43 of 50 correct
            </p>

            <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-400 to-blue-400"
                style={{ width: "86%" }}
              />
            </div>
          </div>
        </div>

        <div className="min-h-0 flex-1 rounded-xl border border-white/[0.06] bg-white/[0.015]">
          <div className="flex items-center justify-between px-2.5 py-1.5">
            <p className="font-mono text-[5.5px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
              Recent curriculum
            </p>
            <BookOpen className="size-2.5 text-slate-600" aria-hidden="true" />
          </div>

          <ul className="divide-y divide-white/[0.05]">
            {recent.map((item, index) => (
              <li key={item.title} className="flex items-center gap-2 px-2.5 py-1.5">
                <span
                  className={`grid size-4 shrink-0 place-items-center rounded border ${
                    index === 0
                      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
                      : "border-blue-400/20 bg-blue-400/10 text-blue-300"
                  }`}
                >
                  {index === 0 ? (
                    <Check className="size-2" aria-hidden="true" />
                  ) : (
                    <span className="font-mono text-[5px]">02</span>
                  )}
                </span>

                <span className="min-w-0 flex-1 truncate text-[7px] font-medium text-slate-200">
                  {item.title}
                </span>

                <span
                  className={`shrink-0 font-mono text-[5px] tracking-[0.08em] uppercase ${
                    index === 0 ? "text-emerald-400" : "text-blue-300"
                  }`}
                >
                  {item.state}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
