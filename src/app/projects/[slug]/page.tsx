import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { Github } from "@/components/ui/icons";
import { Atmosphere } from "@/components/layout/Atmosphere";
import { FloatingDock } from "@/components/layout/FloatingDock";
import { Footer } from "@/components/layout/Footer";
import { CaseStudyStage } from "@/components/sections/CaseStudyStage";
import { Reveal } from "@/components/ui/Reveal";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { getAdjacentProject, getProject, projects, statusMeta } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/portfolio";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Case study not found" };
  }

  return {
    title: `${project.name} — Case study`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} — Case study`,
      description: project.summary,
      type: "article",
      url: `/projects/${project.slug}`,
    },
    twitter: {
      title: `${project.name} — Case study`,
      description: project.summary,
    },
  };
}

function SectionBlock({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="border-t border-line pt-10 first:border-t-0 first:pt-0"
    >
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[10px] tracking-[0.16em] text-accent">
          {index}
        </span>
        <h2 id={`${id}-heading`} className="text-h3">
          {title}
        </h2>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-[15px] leading-relaxed text-secondary">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function ArchitectureBlock({ project }: { project: Project }) {
  const { architecture } = project;

  return (
    <div className="space-y-6">
      <p className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
        {architecture.label}
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {architecture.entities.map((entity) => (
          <div
            key={entity.name}
            className={cn(
              "rounded-[12px] border bg-white/[0.015] p-4",
              entity.kind === "auth" ? "border-accent/25" : "border-line",
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[11px] text-foreground">
                {entity.name}
              </span>
              <span
                className={cn(
                  "rounded-full border px-2 py-0.5 font-mono text-[8px] tracking-[0.1em] uppercase",
                  entity.kind === "auth"
                    ? "border-accent/30 text-accent"
                    : "border-line-strong text-muted",
                )}
              >
                {entity.kind}
              </span>
            </div>
            <ul className="mt-3 space-y-1">
              {entity.fields.map((field) => (
                <li
                  key={field}
                  className="font-mono text-[10px] leading-relaxed text-secondary"
                >
                  {field}
                </li>
              ))}
            </ul>
            {entity.note ? (
              <p className="mt-3 border-t border-line pt-2 font-mono text-[9px] leading-relaxed text-muted">
                {entity.note}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <ul className="space-y-2">
        {architecture.notes.map((note) => (
          <li key={note} className="flex gap-2.5 text-[13px] leading-relaxed text-secondary">
            <Check className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
            {note}
          </li>
        ))}
      </ul>

      {architecture.code ? (
        <div className="overflow-hidden rounded-[12px] border border-line bg-black/50">
          <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5">
            <span className="font-mono text-[10px] text-secondary">
              {architecture.code.title}
            </span>
            <span className="font-mono text-[9px] tracking-[0.12em] text-muted uppercase">
              {architecture.code.language}
            </span>
          </div>
          <pre className="overflow-x-auto px-4 py-4 font-mono text-[11px] leading-[1.8] text-secondary">
            <code>{architecture.code.body}</code>
          </pre>
        </div>
      ) : null}
    </div>
  );
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const meta = statusMeta[project.status];
  const next = getAdjacentProject(project.slug);

  return (
    <div id="top">
      <Atmosphere />
      <FloatingDock initialActive={null} />

      <main id="main">
        <article>
          <header className="px-5 pt-28 pb-10 sm:px-8 sm:pt-36">
            <div className="mx-auto w-full max-w-content">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-muted uppercase transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-3.5" aria-hidden="true" />
                All work
              </Link>

              <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="mono-label text-accent">{project.index}</span>
                    <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
                    <span className="mono-label text-muted">{project.category}</span>
                  </div>

                  <h1 className="text-hero mt-5 text-balance font-display font-semibold">
                    {project.name}
                  </h1>
                  <p className="mt-3 text-lead text-secondary">{project.subtitle}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <StatusIndicator label={meta.label} tone={meta.tone} variant="pill" />
                    <span className="font-mono text-[10px] text-muted">
                      {project.statusNote}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <p className="text-sm leading-relaxed text-secondary">
                    {project.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                      >
                        <Github className="size-4" aria-hidden="true" />
                        View repository
                        <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="font-mono text-[10px] tracking-[0.08em] text-muted uppercase">
                        {project.status === "concept"
                          ? "Concept · no repository"
                          : "No public repository"}
                      </span>
                    )}
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-foreground"
                    >
                      Discuss this build
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>

              <ul className="mt-8 flex flex-wrap gap-1.5" aria-label="Technologies used">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-line bg-white/[0.02] px-2.5 py-1 font-mono text-[9px] tracking-[0.04em] text-secondary"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </header>

          <div className="px-5 sm:px-8">
            <Reveal className="mx-auto w-full max-w-content">
              <CaseStudyStage project={project} />
            </Reveal>
          </div>

          <div className="px-5 py-16 sm:px-8 sm:py-20">
            <div className="mx-auto grid w-full max-w-content gap-12 lg:grid-cols-12">
              <aside className="min-w-0 lg:col-span-4">
                <div className="surface-panel rounded-card p-6 lg:sticky lg:top-8">
                  <span className="mono-label text-[9px] text-muted">Project record</span>

                  <dl className="mt-4 space-y-3.5">
                    {[
                      ["Status", meta.label],
                      ["Category", project.category],
                      ["Repository", project.githubUrl ? "Public on GitHub" : "None yet"],
                      [
                        "Implementation",
                        project.status === "concept"
                          ? "Design concept"
                          : "Built, not deployed",
                      ],
                    ].map(([term, value]) => (
                      <div
                        key={term}
                        className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-b-0 last:pb-0"
                      >
                        <dt className="font-mono text-[9px] tracking-[0.12em] text-muted uppercase">
                          {term}
                        </dt>
                        <dd className="text-right text-[12px] text-secondary">{value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6 rounded-[10px] border border-dashed border-line bg-white/[0.015] p-4">
                    <p className="font-mono text-[9px] tracking-[0.12em] text-muted uppercase">
                      Honest scope
                    </p>
                    <ul className="mt-3 space-y-2">
                      {project.caseStudy.scope.map((item) => (
                        <li
                          key={item}
                          className="text-[11.5px] leading-relaxed text-secondary"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>

              <div className="min-w-0 space-y-12 lg:col-span-8">
                <SectionBlock id="overview" index="01" title="Overview">
                  <Paragraphs paragraphs={project.caseStudy.overview} />
                </SectionBlock>

                <SectionBlock id="problem" index="02" title="The problem">
                  <Paragraphs paragraphs={project.caseStudy.problem} />
                </SectionBlock>

                <SectionBlock id="objectives" index="03" title="Objectives">
                  <ol className="space-y-3">
                    {project.caseStudy.objectives.map((objective, index) => (
                      <li key={objective} className="flex gap-4">
                        <span className="font-mono text-[10px] leading-6 text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[14.5px] leading-relaxed text-secondary">
                          {objective}
                        </span>
                      </li>
                    ))}
                  </ol>
                </SectionBlock>

                <SectionBlock id="architecture" index="04" title="Architecture">
                  <ArchitectureBlock project={project} />
                </SectionBlock>

                <SectionBlock id="decisions" index="05" title="Technology decisions">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.caseStudy.decisions.map((decision) => (
                      <div
                        key={decision.title}
                        className="rounded-[12px] border border-line bg-white/[0.015] p-5"
                      >
                        <h3 className="font-display text-[14px] font-semibold text-foreground">
                          {decision.title}
                        </h3>
                        <p className="mt-2 text-[13px] leading-relaxed text-secondary">
                          {decision.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </SectionBlock>

                <SectionBlock id="features" index="06" title="Key features">
                  <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {project.caseStudy.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
                        <span className="text-[13.5px] leading-relaxed text-secondary">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </SectionBlock>

                <SectionBlock id="challenges" index="07" title="Challenges">
                  <div className="space-y-5">
                    {project.caseStudy.challenges.map((challenge, index) => (
                      <div key={challenge.title} className="border-l border-line pl-5">
                        <span className="font-mono text-[9px] tracking-[0.14em] text-muted uppercase">
                          Challenge {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-1 font-display text-[14px] font-semibold text-foreground">
                          {challenge.title}
                        </h3>
                        <p className="mt-1.5 text-[13.5px] leading-relaxed text-secondary">
                          {challenge.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </SectionBlock>

                <SectionBlock id="learnings" index="08" title="What I learned">
                  <div className="rounded-[12px] border border-accent/20 bg-accent/[0.04] p-5">
                    <ul className="space-y-3">
                      {project.caseStudy.learnings.map((learning) => (
                        <li key={learning} className="flex gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                          />
                          <span className="text-[13.5px] leading-relaxed text-secondary">
                            {learning}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionBlock>
              </div>
            </div>
          </div>

          <div className="border-t border-line px-5 py-12 sm:px-8">
            <div className="mx-auto flex w-full max-w-content flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-muted uppercase transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-3.5" aria-hidden="true" />
                Back to all work
              </Link>

              <Link
                href={`/projects/${next.slug}`}
                className="group inline-flex items-center gap-4 rounded-[12px] border border-line bg-white/[0.015] px-5 py-4 transition-colors hover:border-line-strong hover:bg-white/[0.03]"
              >
                <span>
                  <span className="block font-mono text-[9px] tracking-[0.12em] text-muted uppercase">
                    Next case study
                  </span>
                  <span className="mt-1 block font-display text-base font-semibold text-foreground">
                    {next.name}
                  </span>
                </span>
                <ArrowRight className="size-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
