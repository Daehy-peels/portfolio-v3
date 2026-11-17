import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className="max-w-3xl">
        <Reveal>
          <div className="flex items-center gap-3">
            {index ? (
              <span className="mono-label text-accent">{index}</span>
            ) : null}
            <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
            <span className="mono-label text-muted">{eyebrow}</span>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-h2 mt-5 text-balance">{title}</h2>
        </Reveal>
        {description ? (
          <Reveal delay={0.12}>
            <p className="text-lead mt-5 max-w-2xl text-secondary">
              {description}
            </p>
          </Reveal>
        ) : null}
      </div>
      {action ? (
        <Reveal delay={0.15} className="shrink-0">
          {action}
        </Reveal>
      ) : null}
    </div>
  );
}
