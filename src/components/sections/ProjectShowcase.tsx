"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/ui/icons";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ProjectBlueprint,
  ProjectPreview,
  stageHeights,
} from "@/components/mockups/ProjectVisual";
import { MagneticLink } from "@/components/ui/MagneticButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  SegmentedControl,
  type SegmentedOption,
} from "@/components/ui/SegmentedControl";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { StageFrame } from "@/components/ui/StageFrame";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { projects, statusMeta } from "@/data/projects";
import { EASE } from "@/lib/motion";
import type { Project } from "@/types/portfolio";
import { cn } from "@/lib/utils";

type Mode = "preview" | "blueprint";

const modeOptions: ReadonlyArray<SegmentedOption<Mode>> = [
  { value: "preview", label: "UI preview" },
  { value: "blueprint", label: "System blueprint" },
];

type ProjectBlockProps = {
  project: Project;
  layout: "left" | "right" | "wide";
};

function ProjectBlock({ project, layout }: ProjectBlockProps) {
  const [mode, setMode] = useState<Mode>("preview");
  const reduced = useReducedMotion();
  const meta = statusMeta[project.status];

  const stage = (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <SegmentedControl
          options={modeOptions}
          value={mode}
          onChange={setMode}
          layoutId={`stage-${project.slug}`}
          label={`${project.name} visualisation mode`}
        />
        <span className="mono-label text-[9px] text-muted">
          {mode === "preview" ? "Interface view" : project.blueprintLabel}
        </span>
      </div>

      <StageFrame
        label={`${project.index} / ${mode === "preview" ? "UI preview" : "System blueprint"}`}
        caption={project.name.toUpperCase()}
        className={stageHeights[project.stage]}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={mode}
            className="flex h-full w-full items-center justify-center"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: reduced ? 0 : 0.26, ease: EASE }}
          >
            {mode === "preview" ? (
              <ProjectPreview project={project} />
            ) : (
              <ProjectBlueprint project={project} />
            )}
          </motion.div>
        </AnimatePresence>
      </StageFrame>

      <p
        aria-live="polite"
        className="mt-3 flex items-start gap-2 text-[11px] leading-relaxed text-muted"
      >
        <span
          aria-hidden="true"
          className="mt-1.5 size-1 shrink-0 rounded-full bg-accent/60"
        />
        {mode === "preview" ? project.previewDescription : project.blueprintNote}
      </p>
    </div>
  );

  const details = (
    <div
      className={cn(
        "flex flex-col",
        layout === "right" && "lg:order-2",
      )}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="mono-label text-accent">{project.index}</span>
        <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
        <span className="mono-label text-muted">{project.category}</span>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2.5">
        <StatusIndicator
          label={meta.label}
          tone={meta.tone}
          variant="pill"
        />
        <span className="font-mono text-[9.5px] text-muted">
          {project.statusNote}
        </span>
      </div>

      <h3 className="text-h2 mt-5">
        <Link
          href={`/projects/${project.slug}`}
          className="transition-colors duration-200 hover:text-accent"
        >
          {project.name}
        </Link>
      </h3>
      <p className="mt-2 text-[14.5px] text-secondary">{project.subtitle}</p>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-secondary">
        {project.summary}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full border border-line bg-white/[0.02] px-2.5 py-1 font-mono text-[9px] tracking-[0.04em] text-secondary"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          Read case study
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-foreground"
            aria-label={`${project.name} repository on GitHub (opens in a new tab)`}
          >
            <Github className="size-3.5" aria-hidden="true" />
            Source
          </a>
        ) : (
          <span className="font-mono text-[10px] text-muted">
            No public repository
          </span>
        )}
      </div>
    </div>
  );

  if (layout === "wide") {
    return (
      <SpotlightCard className="rounded-showcase p-5 sm:p-7 lg:p-8">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="mono-label text-accent">{project.index}</span>
              <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
              <span className="mono-label text-muted">{project.category}</span>
            </div>
            <h3 className="text-h2 mt-4">
              <Link
                href={`/projects/${project.slug}`}
                className="transition-colors duration-200 hover:text-accent"
              >
                {project.name}
              </Link>
            </h3>
            <p className="mt-2 text-[14.5px] text-secondary">{project.subtitle}</p>
          </div>

          <div className="md:max-w-sm">
            <div className="flex flex-wrap items-center gap-2.5">
              <StatusIndicator label={meta.label} tone={meta.tone} variant="pill" />
              <span className="font-mono text-[9.5px] text-muted">
                {project.statusNote}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-secondary">
              {project.summary}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
          <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-line bg-white/[0.02] px-2.5 py-1 font-mono text-[9px] tracking-[0.04em] text-secondary"
              >
                {technology}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Read case study
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-foreground"
                aria-label={`${project.name} repository on GitHub (opens in a new tab)`}
              >
                <Github className="size-3.5" aria-hidden="true" />
                Source
              </a>
            ) : (
              <span className="font-mono text-[10px] text-muted">
                No public repository
              </span>
            )}
          </div>
        </div>

        <div className="mt-7">{stage}</div>
      </SpotlightCard>
    );
  }

  return (
    <SpotlightCard className="rounded-showcase p-5 sm:p-7 lg:p-8">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div
          className={cn(
            "lg:col-span-5",
            layout === "right" && "lg:order-2",
          )}
        >
          {details}
        </div>
        <div
          className={cn(
            "min-w-0 lg:col-span-7",
            layout === "right" && "lg:order-1",
          )}
        >
          {stage}
        </div>
      </div>
    </SpotlightCard>
  );
}

export function ProjectShowcase() {
  return (
    <section id="work" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Selected engineering work / 04 projects"
          title="Applications built with purpose."
          description="Four builds across mobile, clinic operations, commerce, and Scrum learning. Each case study separates what is implemented from what is still planned — no invented metrics, no imaginary production users."
          action={
            <MagneticLink
              href="/projects/nourish360"
              variant="secondary"
              className="h-10 px-4 text-[13px]"
            >
              Start with Nourish360
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </MagneticLink>
          }
        />

        <div className="mt-10 space-y-4 sm:mt-12">
          {projects.map((project) => (
            <ProjectBlock
              key={project.slug}
              project={project}
              layout={
                project.slug === "nourish360"
                  ? "left"
                  : project.slug === "aura-clinic"
                    ? "right"
                    : project.slug === "thread-and-form"
                      ? "wide"
                      : "left"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
