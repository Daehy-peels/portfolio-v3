import type { StackGroup, TechnologyGroup } from "@/types/portfolio";

export const technologyGroups: TechnologyGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    blurb: "Interface engineering for the web.",
    items: [
      { name: "React.js", note: "Component architecture" },
      { name: "Next.js App Router", note: "Thread & Form · Aura" },
      { name: "TypeScript", note: "Strictly typed app code" },
      { name: "Tailwind CSS", note: "v4 · design systems" },
      { name: "Motion", note: "Interface animation" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    blurb: "Cross-platform product work.",
    items: [
      { name: "Flutter", note: "Nourish360" },
      { name: "Dart", note: "Domain & presentation" },
      { name: "Riverpod", note: "State management" },
    ],
  },
  {
    id: "backend",
    label: "Backend & data",
    blurb: "Data models, auth, and services.",
    items: [
      { name: "Supabase", note: "Auth, Postgres, RLS" },
      { name: "PostgreSQL", note: "Relational schemas" },
      { name: "SQL", note: "Queries & constraints" },
      { name: "PHP", note: "Coursework & practice" },
      { name: "Laravel", note: "Practice project" },
      { name: "MySQL", note: "Coursework databases" },
      { name: "Node.js", note: "Tooling & scripts" },
      { name: "REST APIs", note: "JSON integration" },
    ],
  },
  {
    id: "systems",
    label: "Systems",
    blurb: "Everyday engineering environment.",
    items: [
      { name: "Git", note: "Version control" },
      { name: "GitHub", note: "@Daehy-peels" },
      { name: "Linux", note: "Shell basics" },
      { name: "Windows", note: "Daily environment" },
      { name: "VMware", note: "Virtual machines" },
    ],
  },
];

export const stackGroups: StackGroup[] = [
  {
    id: "frontend",
    index: "01",
    label: "Frontend",
    summary:
      "The layer I reach for first — typed React interfaces built on the App Router, styled with Tailwind and animated with restraint.",
    items: [
      { name: "React.js", note: "Component composition" },
      { name: "Next.js", note: "App Router · Thread & Form, Aura" },
      { name: "JavaScript", note: "Language fundamentals" },
      { name: "TypeScript", note: "Strict types across Next.js code" },
      { name: "HTML", note: "Semantic structure" },
      { name: "CSS", note: "Layout, material & detail" },
      { name: "Tailwind CSS", note: "v4 · token-driven styling" },
      { name: "Motion", note: "Interaction physics" },
    ],
  },
  {
    id: "backend",
    index: "02",
    label: "Backend",
    summary:
      "Server-side work focused on authentication boundaries, API shape, and the practical structure of a Laravel or Supabase backend.",
    items: [
      { name: "PHP", note: "Coursework & server-rendered practice" },
      { name: "Laravel", note: "Practice project · LMS" },
      { name: "Supabase", note: "Auth, Postgres & client SDKs" },
      { name: "REST API integration", note: "Consuming and shaping JSON" },
    ],
  },
  {
    id: "database",
    index: "03",
    label: "Database",
    summary:
      "I care about how data is modelled before the interface exists — constraints, ownership, and the policies that protect each row.",
    items: [
      { name: "PostgreSQL", note: "Schemas through Supabase" },
      { name: "MySQL", note: "Coursework & PHP databases" },
      { name: "SQL", note: "Joins, indexes, constraints" },
      { name: "Database relationships", note: "Normalised foreign keys" },
      { name: "Row Level Security", note: "Per-user policies in Nourish360" },
    ],
  },
  {
    id: "mobile",
    index: "04",
    label: "Mobile",
    summary:
      "One Flutter codebase, shared across platforms, with state kept explicit and data synchronised to Postgres.",
    items: [
      { name: "Flutter", note: "Nourish360" },
      { name: "Dart", note: "Domain, data & UI layers" },
      { name: "Riverpod", note: "Explicit dependency graphs" },
    ],
  },
  {
    id: "tools",
    index: "05",
    label: "Tools",
    summary:
      "The working environment — version control, editor, and the Laravel ecosystem I have studied alongside coursework.",
    items: [
      { name: "Git", note: "Branching & history" },
      { name: "GitHub", note: "Repositories & reviews" },
      { name: "VS Code", note: "Primary editor" },
      { name: "Filament", note: "Laravel admin tooling (studied)" },
      { name: "Livewire", note: "Laravel reactive UI (studied)" },
    ],
  },
];
