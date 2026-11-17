import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechStackMatrix } from "@/components/ui/TechStackMatrix";

export function TechStack() {
  return (
    <section id="stack" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow="Technical stack / Working knowledge"
          title="The technology behind the work."
          description="Organised by where each tool fits in an application — not as a wall of logos. The notes show the context where I have used or studied each one."
        />
        <TechStackMatrix />
      </div>
    </section>
  );
}
