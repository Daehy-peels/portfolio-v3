import { Droplet, Home, Settings2, Utensils, User } from "lucide-react";

const ringRadius = 22;
const circumference = 2 * Math.PI * ringRadius;

export function Nourish360Preview() {
  return (
    <div className="relative mx-auto flex h-full max-h-[560px] w-[258px] shrink-0 flex-col rounded-[36px] border border-white/12 bg-[#0a0f0d] p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.95)] sm:w-[282px]">
      <div
        aria-hidden="true"
        className="absolute inset-x-10 top-0 h-24 rounded-full bg-accent/12 blur-2xl"
      />
      <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-[29px] bg-[#070b09]">
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 z-20 h-[18px] w-[92px] -translate-x-1/2 rounded-b-2xl bg-black"
        />

        <div className="flex items-center justify-between px-4 pt-2 font-mono text-[8px] text-secondary">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span aria-hidden="true" className="flex items-end gap-[1px]">
              {[3, 5, 7, 9].map((height) => (
                <span
                  key={height}
                  className="w-[1.5px] rounded-sm bg-secondary"
                  style={{ height: `${height}px` }}
                />
              ))}
            </span>
            5G
          </span>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-2 px-3 pt-5 pb-2">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-mono text-[7px] tracking-[0.16em] text-accent uppercase">
                Mon · 17 Nov
              </p>
              <p className="mt-1 font-display text-[15px] font-semibold tracking-tight text-foreground">
                Good morning.
              </p>
            </div>
            <span className="grid size-7 place-items-center rounded-full border border-accent/25 bg-accent/10 font-mono text-[8px] text-accent">
              MK
            </span>
          </div>

          <div className="rounded-2xl border border-white/8 bg-white/[0.035] p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[7px] tracking-[0.14em] text-secondary uppercase">
                  Hydration
                </p>
                <p className="mt-1 font-display text-[20px] leading-none font-semibold tracking-tight">
                  1.7<span className="ml-1 text-[10px] font-normal text-muted">/ 2.5 L</span>
                </p>
                <p className="mt-1.5 font-mono text-[7px] text-muted">
                  68% of today&apos;s goal
                </p>
              </div>
              <svg viewBox="0 0 56 56" className="size-14" role="img" aria-label="68 percent of hydration goal">
                <circle cx="28" cy="28" r={ringRadius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
                <circle
                  cx="28"
                  cy="28"
                  r={ringRadius}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference * 0.32}
                  transform="rotate(-90 28 28)"
                />
                <text
                  x="28"
                  y="31"
                  textAnchor="middle"
                  className="fill-foreground font-mono"
                  fontSize="9"
                >
                  68%
                </text>
              </svg>
            </div>
          </div>

          <div className="rounded-2xl border border-white/8 bg-white/[0.035] p-3">
            <div className="flex items-baseline justify-between">
              <p className="font-mono text-[7px] tracking-[0.14em] text-secondary uppercase">
                Calories
              </p>
              <p className="font-mono text-[7px] text-muted">2,000 goal</p>
            </div>
            <p className="mt-1 font-display text-[18px] leading-none font-semibold tracking-tight">
              1,240 <span className="font-mono text-[7px] font-normal text-muted">kcal</span>
            </p>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/8">
              <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-accent to-cyan/80" />
            </div>
            <div className="mt-2.5 grid grid-cols-3 gap-1.5">
              {[
                { label: "Protein", value: "72g" },
                { label: "Carbs", value: "148g" },
                { label: "Fat", value: "41g" },
              ].map((macro) => (
                <div key={macro.label} className="rounded-lg bg-white/[0.035] px-1.5 py-1">
                  <p className="font-mono text-[6.5px] tracking-[0.1em] text-muted uppercase">
                    {macro.label}
                  </p>
                  <p className="font-mono text-[9px] text-foreground">{macro.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/8 bg-white/[0.035] p-3">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[7px] tracking-[0.14em] text-secondary uppercase">
                Today&apos;s meals
              </p>
              <p className="font-mono text-[7px] text-accent">2 logged</p>
            </div>
            <ul className="mt-2 space-y-1.5">
              {[
                { name: "Mohinga", meta: "Breakfast · 420 kcal" },
                { name: "Chicken rice", meta: "Lunch · 610 kcal" },
              ].map((meal) => (
                <li key={meal.name} className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5">
                    <span aria-hidden="true" className="grid size-4 place-items-center rounded-md bg-accent/12">
                      <Utensils className="size-2 text-accent" aria-hidden="true" />
                    </span>
                    <span className="text-[8px] text-foreground">{meal.name}</span>
                  </span>
                  <span className="font-mono text-[6.5px] text-muted">{meal.meta}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex items-center justify-around rounded-2xl border border-white/8 bg-white/[0.03] px-1 py-2">
            {[
              { icon: Home, active: false },
              { icon: Utensils, active: false },
              { icon: Droplet, active: true },
              { icon: User, active: false },
              { icon: Settings2, active: false },
            ].map((item, index) => (
              <item.icon
                key={index}
                className={
                  item.active
                    ? "size-3.5 text-accent"
                    : "size-3.5 text-muted/70"
                }
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
