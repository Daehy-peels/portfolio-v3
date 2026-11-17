"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ProjectBlueprint,
  ProjectPreview,
  stageHeights,
} from "@/components/mockups/ProjectVisual";
import {
  SegmentedControl,
  type SegmentedOption,
} from "@/components/ui/SegmentedControl";
import { StageFrame } from "@/components/ui/StageFrame";
import { EASE } from "@/lib/motion";
import type { Project } from "@/types/portfolio";

type Mode = "preview" | "blueprint";

const modeOptions: ReadonlyArray<SegmentedOption<Mode>> = [
  { value: "preview", label: "UI preview" },
  { value: "blueprint", label: "System blueprint" },
];

export function CaseStudyStage({ project }: { project: Project }) {
  const [mode, setMode] = useState<Mode>("preview");
  const reduced = useReducedMotion();

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <SegmentedControl
          options={modeOptions}
          value={mode}
          onChange={setMode}
          layoutId={`case-${project.slug}`}
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
}
