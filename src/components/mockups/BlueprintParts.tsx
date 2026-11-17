import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EntityCardProps = {
  name: string;
  kind?: string;
  fields: string[];
  relation?: string;
  accent?: boolean;
  className?: string;
};

export function EntityCard({
  name,
  kind,
  fields,
  relation,
  accent,
  className,
}: EntityCardProps) {
  return (
    <div
      className={cn(
        "min-w-0 rounded-[9px] border bg-[#0b0b0f]/95 px-2.5 py-2",
        accent ? "border-accent/30" : "border-line",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="truncate font-mono text-[9.5px] text-foreground">
          {name}
        </span>
        {kind ? (
          <span className="shrink-0 font-mono text-[7px] tracking-[0.12em] text-muted uppercase">
            {kind}
          </span>
        ) : null}
      </div>
      <ul className="mt-1.5 space-y-0.5">
        {fields.slice(0, 4).map((field) => (
          <li
            key={field}
            className="truncate font-mono text-[7.5px] leading-relaxed text-secondary"
            title={field}
          >
            {field}
          </li>
        ))}
      </ul>
      {relation ? (
        <p className="mt-1.5 truncate font-mono text-[7px] tracking-[0.06em] text-accent/80">
          {relation}
        </p>
      ) : null}
    </div>
  );
}

export function Connector({ label }: { label: string }) {
  return (
    <div className="flex h-4 items-center gap-2 pl-5">
      <span aria-hidden="true" className="h-full border-l border-dashed border-white/20" />
      <span className="font-mono text-[7px] tracking-[0.12em] text-muted uppercase">
        {label}
      </span>
    </div>
  );
}

export function CodePanel({
  title,
  language,
  body,
}: {
  title: string;
  language: string;
  body: string;
}) {
  return (
    <div className="overflow-hidden rounded-[9px] border border-line bg-black/50">
      <div className="flex items-center justify-between gap-2 border-b border-line px-2.5 py-1.5">
        <span className="truncate font-mono text-[7.5px] tracking-[0.08em] text-secondary">
          {title}
        </span>
        <span className="shrink-0 font-mono text-[7px] tracking-[0.12em] text-muted uppercase">
          {language}
        </span>
      </div>
      <pre className="overflow-hidden px-2.5 py-2 font-mono text-[7.5px] leading-[1.7] whitespace-pre-wrap text-secondary">
        <code>{body}</code>
      </pre>
    </div>
  );
}

export function BlueprintNoteList({ notes }: { notes: string[] }) {
  return (
    <ul className="space-y-1.5">
      {notes.map((note) => (
        <li key={note} className="flex gap-2 font-mono text-[7.5px] leading-relaxed text-muted">
          <span aria-hidden="true" className="mt-1 size-1 shrink-0 rounded-full bg-accent/70" />
          <span>{note}</span>
        </li>
      ))}
    </ul>
  );
}

export function BlueprintShell({
  diagram,
  aside,
  mobileNote,
}: {
  diagram: ReactNode;
  aside: ReactNode;
  mobileNote?: string;
}) {
  return (
    <div className="flex h-full w-full flex-col gap-2 md:grid md:grid-cols-5 md:gap-4">
      <div className="flex min-h-0 flex-1 flex-col justify-center gap-1 md:col-span-3">
        {diagram}
      </div>
      <aside className="hidden min-h-0 flex-col justify-center gap-2.5 md:col-span-2 md:flex">
        {aside}
      </aside>
      {mobileNote ? (
        <p className="font-mono text-[7.5px] leading-relaxed text-muted md:hidden">
          {mobileNote}
        </p>
      ) : null}
    </div>
  );
}
