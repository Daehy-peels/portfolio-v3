import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  {
    index: "01",
    tag: "Architecture",
    title: "Structure",
    body: "Build application architecture that another developer can follow — clear boundaries, organised code, and decisions that can be explained.",
  },
  {
    index: "02",
    tag: "Relational data",
    title: "Data",
    body: "Understand how data is modelled, stored, retrieved, and protected before designing the screen that edits it.",
  },
  {
    index: "03",
    tag: "Interface",
    title: "Experience",
    body: "Treat usability, accessibility, and interface quality as engineering concerns, not decoration applied at the end.",
  },
  {
    index: "04",
    tag: "Craft",
    title: "Refinement",
    body: "Test, debug, improve, and pay attention to the details that separate a working prototype from a dependable product.",
  },
];

export function EngineeringPhilosophy() {
  return (
    <section id="philosophy" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <SectionHeading
          index="05"
          eyebrow="Engineering principles / Four layers"
          title="Good software is thoughtful at every layer."
          description="These are the principles I use to judge my own work — from the first data model to the final focus state."
        />

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 hidden h-px bg-line lg:block"
          />
          <ol className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <Reveal key={principle.index} delay={index * 0.06}>
                <li className="group relative border-t border-line pt-6">
                  <span
                    aria-hidden="true"
                    className="absolute -top-[3px] left-0 size-1.5 rounded-full bg-accent/70 ring-4 ring-background"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -top-px left-0 h-px w-10 bg-accent/70 transition-all duration-500 ease-out-expo group-hover:w-full"
                  />

                  <div className="flex items-center justify-between gap-4">
                    <span className="mono-label text-[9px] text-accent">
                      {principle.index}
                    </span>
                    <span className="font-mono text-[8px] tracking-[0.14em] text-muted uppercase">
                      {principle.tag}
                    </span>
                  </div>

                  <h3 className="text-h3 mt-7">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary">
                    {principle.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
