import type { ArchitectureEntity, Project } from "@/types/portfolio";
import {
  BlueprintNoteList,
  BlueprintShell,
  CodePanel,
  Connector,
  EntityCard,
} from "@/components/mockups/BlueprintParts";

type Props = { architecture: Project["architecture"] };

export function AuraBlueprint({ architecture }: Props) {
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
          <EntityCard
            name={entity("auth.users").name}
            kind="auth"
            fields={entity("auth.users").fields}
            accent
          />
          <Connector label="session · SSR cookie" />
          <div className="grid grid-cols-2 gap-2">
            <EntityCard
              name={entity("patients").name}
              kind="table"
              fields={entity("patients").fields}
            />
            <EntityCard
              name={entity("appointments").name}
              kind="table"
              fields={entity("appointments").fields}
              relation="patient_id → patients.id"
            />
          </div>
          <Connector label="1 : n · patient & appointment" />
          <EntityCard
            name={entity("treatment_logs").name}
            kind="table"
            fields={entity("treatment_logs").fields}
            relation="patient_id · appointment_id"
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
          <BlueprintNoteList notes={notes} />

          <div className="rounded-[9px] border border-dashed border-line px-2.5 py-2">
            <p className="font-mono text-[6.5px] tracking-[0.12em] text-muted uppercase">
              Not implemented
            </p>
            <p className="mt-1 font-mono text-[7.5px] leading-relaxed text-secondary">
              Staff roles, audit events, and patient-portal permissions are not
              part of the current build.
            </p>
          </div>
        </>
      }
    />
  );
}
