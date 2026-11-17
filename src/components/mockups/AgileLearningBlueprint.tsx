import type { ArchitectureEntity, Project } from "@/types/portfolio";
import {
  BlueprintNoteList,
  BlueprintShell,
  CodePanel,
  Connector,
  EntityCard,
} from "@/components/mockups/BlueprintParts";

type Props = { architecture: Project["architecture"] };

export function AgileLearningBlueprint({ architecture }: Props) {
  const { entities, notes, code } = architecture;
  const entity = (name: string): ArchitectureEntity =>
    entities.find((item) => item.name === name) ?? {
      name,
      kind: "table",
      fields: [],
    };

  return (
    <BlueprintShell
      mobileNote={notes[0]}
      diagram={
        <>
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-dashed border-line px-2 py-0.5 font-mono text-[6.5px] tracking-[0.14em] text-muted uppercase">
              Client-verified surface
            </span>
            <span className="font-mono text-[6.5px] text-muted">
              Next.js · Supabase
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <EntityCard
              name={entity("auth.users").name}
              kind="auth"
              fields={entity("auth.users").fields}
              accent
            />
            <EntityCard
              name={entity("profiles").name}
              kind="table"
              fields={entity("profiles").fields}
              relation="id → auth.users"
            />
          </div>

          <Connector label="user_id · module_id" />

          <div className="grid grid-cols-2 gap-2">
            <EntityCard
              name={entity("user_progress").name}
              kind="table"
              fields={entity("user_progress").fields}
            />
            <EntityCard
              name={entity("quiz_attempts").name}
              kind="table"
              fields={entity("quiz_attempts").fields}
            />
          </div>

          <Connector label="public read · answer withheld" />

          <div className="grid grid-cols-2 gap-2">
            <EntityCard
              name={entity("quiz_questions_public").name}
              kind="view"
              fields={entity("quiz_questions_public").fields}
            />
            <EntityCard
              name={entity("quiz_options_public").name}
              kind="view"
              fields={entity("quiz_options_public").fields}
            />
          </div>

          <Connector label="grading + review" />

          <EntityCard
            name={entity("grading RPCs").name}
            kind="rpc"
            fields={entity("grading RPCs").fields}
            relation="start_quiz · submit_quiz · get_quiz_review"
          />
        </>
      }
      aside={
        <>
          {code ? (
            <CodePanel
              title={code.title}
              language={code.language}
              body={code.body}
            />
          ) : null}

          <BlueprintNoteList notes={notes.slice(0, 3)} />

          <div className="rounded-[9px] border border-dashed border-line px-2.5 py-2">
            <p className="font-mono text-[6.5px] tracking-[0.12em] text-muted uppercase">
              Not in the repository
            </p>
            <p className="mt-1 font-mono text-[7.5px] leading-relaxed text-secondary">
              Table definitions and RLS policies live in Supabase; only the
              client-side contract is shown.
            </p>
          </div>
        </>
      }
    />
  );
}
