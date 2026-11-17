import type { ArchitectureEntity, Project } from "@/types/portfolio";
import {
  BlueprintNoteList,
  BlueprintShell,
  CodePanel,
  Connector,
  EntityCard,
} from "@/components/mockups/BlueprintParts";

type Props = { architecture: Project["architecture"] };

export function Nourish360Blueprint({ architecture }: Props) {
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
          <Connector label="1 : 1 · uid" />
          <EntityCard
            name={entity("users_profile").name}
            kind="table"
            fields={entity("users_profile").fields}
            relation="owner — id = auth.uid()"
          />
          <Connector label="1 : n" />
          <div className="grid grid-cols-2 gap-2">
            <EntityCard
              name={entity("meal_logs").name}
              kind="table"
              fields={entity("meal_logs").fields}
              relation="user_id → auth.uid()"
            />
            <EntityCard
              name={entity("water_logs").name}
              kind="table"
              fields={entity("water_logs").fields}
              relation="user_id → auth.uid()"
            />
          </div>
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
        </>
      }
    />
  );
}
