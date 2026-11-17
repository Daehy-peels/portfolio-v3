import type { Project } from "@/types/portfolio";

export function OgCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#060608",
        backgroundImage:
          "radial-gradient(900px 480px at 82% -10%, rgba(16,185,129,0.22), transparent 60%), radial-gradient(700px 420px at 4% 100%, rgba(6,182,212,0.14), transparent 62%)",
        padding: "68px 76px",
        color: "#f4f4f5",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 22,
          letterSpacing: 4,
          color: "#a1a1aa",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 10,
              height: 10,
              borderRadius: 999,
              backgroundColor: "#10b981",
            }}
          />
          <span>MYAT BHONE KYAW / DEVELOPER PORTFOLIO</span>
        </div>
        <span>YANGON · MM</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          Myat Bhone Kyaw
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 44,
            letterSpacing: -1,
            color: "#a1a1aa",
          }}
        >
          Junior Full-Stack Developer.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          fontSize: 22,
          color: "#71717a",
          fontFamily: "monospace",
          letterSpacing: 2,
        }}
      >
        <span>REACT · NEXT.JS · SUPABASE · FLUTTER</span>
        <span style={{ display: "flex", color: "#f4f4f5" }}>github.com/Daehy-peels</span>
      </div>
    </div>
  );
}

export function ProjectOgCard({ project }: { project: Project }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#060608",
        backgroundImage:
          "radial-gradient(900px 500px at 84% -12%, rgba(16,185,129,0.2), transparent 60%), radial-gradient(700px 420px at 2% 104%, rgba(6,182,212,0.12), transparent 62%)",
        padding: "64px 76px",
        color: "#f4f4f5",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 21,
          letterSpacing: 4,
          color: "#a1a1aa",
          fontFamily: "monospace",
        }}
      >
        <span>
          {`CASE STUDY / ${project.index} · ${project.category.toUpperCase()}`}
        </span>
        <span>MYAT BHONE KYAW</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: -3,
            lineHeight: 1.02,
          }}
        >
          {project.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            letterSpacing: -0.5,
            color: "#a1a1aa",
            maxWidth: 900,
          }}
        >
          {project.subtitle}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            fontSize: 20,
            letterSpacing: 2,
            color: project.status === "concept" ? "#a1a1aa" : "#6ee7b7",
            fontFamily: "monospace",
          }}
        >
          {project.status === "in-development"
            ? "IN ACTIVE DEVELOPMENT"
            : project.status === "built"
              ? "REPOSITORY AVAILABLE"
              : "DESIGN CONCEPT"}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          fontSize: 20,
          color: "#71717a",
          fontFamily: "monospace",
          letterSpacing: 2,
        }}
      >
        <span>{project.technologies.slice(0, 4).join(" · ").toUpperCase()}</span>
        <span style={{ display: "flex", color: "#f4f4f5" }}>
          github.com/Daehy-peels
        </span>
      </div>
    </div>
  );
}
