import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type StageFrameProps = {
  label: string;
  caption?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function StageFrame({
  label,
  caption,
  children,
  className,
  contentClassName,
}: StageFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[14px] border border-line bg-[#07070a]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="dot-grid-fine absolute inset-0 opacity-35 [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_80%)]"
      />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 px-4 pt-3 pb-2">
        <span className="mono-label min-w-0 truncate text-[9px] text-muted">{label}</span>
        {caption ? (
          <span className="mono-label hidden shrink-0 text-[9px] text-muted/80 sm:inline">{caption}</span>
        ) : null}
      </div>
      <div
        className={cn(
          "relative flex h-full items-center justify-center p-4 pt-10 sm:p-6 sm:pt-12",
          contentClassName,
        )}
      >
        {children}
      </div>
      <span
        aria-hidden="true"
        className="absolute top-2 left-2 size-2.5 border-t border-l border-white/20"
      />
      <span
        aria-hidden="true"
        className="absolute top-2 right-2 size-2.5 border-t border-r border-white/20"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-2 left-2 size-2.5 border-b border-l border-white/20"
      />
      <span
        aria-hidden="true"
        className="absolute right-2 bottom-2 size-2.5 border-r border-b border-white/20"
      />
    </div>
  );
}
