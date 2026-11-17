import { cn } from "@/lib/utils";

export type StatusTone = "wip" | "live" | "concept" | "accent";

const tones: Record<
  StatusTone,
  { dot: string; text: string; ring: string }
> = {
  wip: {
    dot: "bg-accent",
    text: "text-accent",
    ring: "bg-accent/20",
  },
  live: {
    dot: "bg-cyan",
    text: "text-[#7dd3fc]",
    ring: "bg-cyan/20",
  },
  concept: {
    dot: "bg-muted",
    text: "text-secondary",
    ring: "bg-white/10",
  },
  accent: {
    dot: "bg-accent",
    text: "text-accent",
    ring: "bg-accent/20",
  },
};

type StatusIndicatorProps = {
  label: string;
  tone?: StatusTone;
  variant?: "bare" | "pill";
  className?: string;
};

export function StatusIndicator({
  label,
  tone = "accent",
  variant = "bare",
  className,
}: StatusIndicatorProps) {
  const palette = tones[tone];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5",
        variant === "pill" &&
          "rounded-full border border-white/8 bg-white/[0.025] px-3 py-1.5",
        className,
      )}
    >
      <span className="relative flex size-1.5 shrink-0" aria-hidden="true">
        <span
          className={cn(
            "absolute inset-0 rounded-full",
            palette.ring,
            tone === "wip" && "motion-safe:animate-ping",
          )}
        />
        <span className={cn("relative size-1.5 rounded-full", palette.dot)} />
      </span>
      <span
        className={cn(
          "font-mono text-[10px] leading-none tracking-[0.15em] uppercase",
          palette.text,
        )}
      >
        {label}
      </span>
    </span>
  );
}
