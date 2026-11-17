import { AgileLearningBlueprint } from "@/components/mockups/AgileLearningBlueprint";
import { AgileLearningPreview } from "@/components/mockups/AgileLearningPreview";
import { AuraBlueprint } from "@/components/mockups/AuraBlueprint";
import { AuraPreview } from "@/components/mockups/AuraPreview";
import { Nourish360Blueprint } from "@/components/mockups/Nourish360Blueprint";
import { Nourish360Preview } from "@/components/mockups/Nourish360Preview";
import { ThreadFormBlueprint } from "@/components/mockups/ThreadFormBlueprint";
import { ThreadFormPreview } from "@/components/mockups/ThreadFormPreview";
import type { Project } from "@/types/portfolio";

export const stageHeights: Record<Project["stage"], string> = {
  nourish360: "h-[560px] sm:h-[600px] lg:h-[640px]",
  "aura-clinic": "h-[480px] sm:h-[520px] lg:h-[560px]",
  "thread-and-form": "h-[480px] sm:h-[520px] lg:h-[560px]",
  "agile-learning-platform": "h-auto min-h-[480px] sm:h-[520px] lg:h-[560px]",
};

export function ProjectPreview({ project }: { project: Project }) {
  switch (project.stage) {
    case "nourish360":
      return <Nourish360Preview />;
    case "aura-clinic":
      return <AuraPreview />;
    case "thread-and-form":
      return <ThreadFormPreview />;
    case "agile-learning-platform":
      return <AgileLearningPreview />;
  }
}

export function ProjectBlueprint({ project }: { project: Project }) {
  switch (project.stage) {
    case "nourish360":
      return <Nourish360Blueprint architecture={project.architecture} />;
    case "aura-clinic":
      return <AuraBlueprint architecture={project.architecture} />;
    case "thread-and-form":
      return <ThreadFormBlueprint architecture={project.architecture} />;
    case "agile-learning-platform":
      return (
        <AgileLearningBlueprint architecture={project.architecture} />
      );
  }
}
