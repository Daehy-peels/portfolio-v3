import type { ArchitectureEntity, Project } from "@/types/portfolio";
import {
  BlueprintNoteList,
  BlueprintShell,
  CodePanel,
  Connector,
  EntityCard,
} from "@/components/mockups/BlueprintParts";

type Props = { architecture: Project["architecture"] };

export function ThreadFormBlueprint({ architecture }: Props) {
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
          <div className="grid grid-cols-2 gap-2">
            <EntityCard
              name={entity("profiles").name}
              kind="table"
              fields={entity("profiles").fields}
              accent
            />
            <EntityCard
              name={entity("products").name}
              kind="table"
              fields={entity("products").fields}
              relation="category_id → categories"
            />
          </div>
          <Connector label="cart & order ownership" />
          <div className="grid grid-cols-2 gap-2">
            <EntityCard
              name={entity("cart_items").name}
              kind="table"
              fields={entity("cart_items").fields}
              relation="product_id → products"
            />
            <EntityCard
              name={entity("orders").name}
              kind="table"
              fields={entity("orders").fields}
              relation="user_id → profiles"
            />
          </div>
          <Connector label="1 : n · order lines" />
          <EntityCard
            name={entity("order_items").name}
            kind="table"
            fields={entity("order_items").fields}
            relation="written by place_order()"
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
              Scope boundary
            </p>
            <p className="mt-1 font-mono text-[7.5px] leading-relaxed text-secondary">
              Payment status is recorded, but no provider is integrated and no
              order is fulfilled.
            </p>
          </div>
        </>
      }
    />
  );
}
