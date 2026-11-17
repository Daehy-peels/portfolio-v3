export type ProjectStatus = "in-development" | "built" | "concept";

export type ProjectSlug =
  | "nourish360"
  | "aura-clinic"
  | "thread-and-form"
  | "agile-learning-platform";

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type NavigationItem = {
  id: string;
  label: string;
};

export type Profile = {
  name: string;
  displayName: string;
  role: string;
  location: string;
  country: string;
  availability: string;
  workPreference: string;
  summary: string;
  technicalSummary: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
  };
  timeZone: string;
};

export type TechnologyGroupId = "frontend" | "mobile" | "backend" | "systems";

export type Technology = {
  name: string;
  note: string;
};

export type TechnologyGroup = {
  id: TechnologyGroupId;
  label: string;
  blurb: string;
  items: Technology[];
};

export type StackGroupId = "frontend" | "backend" | "database" | "mobile" | "tools";

export type StackGroup = {
  id: StackGroupId;
  index: string;
  label: string;
  summary: string;
  items: Technology[];
};

export type CredentialModule = {
  name: string;
  grade: "Distinction" | "Merit" | "Pass";
  score: number;
};

export type Credential = {
  level: 4 | 5;
  title: string;
  qualificationNumber: string;
  awardingBody: string;
  centre: string;
  awardedOn: string;
  awardedOnISO: string;
  overallGrade: string;
  levelStatement: string;
  modules: CredentialModule[];
};

export type ArchitectureEntity = {
  name: string;
  kind: "auth" | "table" | "view" | "rpc" | "concept";
  fields: string[];
  note?: string;
};

export type Project = {
  slug: ProjectSlug;
  index: string;
  name: string;
  subtitle: string;
  category: string;
  status: ProjectStatus;
  statusNote: string;
  summary: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  liveNote?: string;
  stage: ProjectSlug;
  blueprintLabel: string;
  blueprintNote: string;
  previewDescription: string;
  blueprintDescription: string;
  architecture: {
    label: string;
    entities: ArchitectureEntity[];
    notes: string[];
    code?: { title: string; language: string; body: string };
  };
  caseStudy: {
    overview: string[];
    problem: string[];
    objectives: string[];
    decisions: { title: string; body: string }[];
    features: string[];
    challenges: { title: string; body: string }[];
    learnings: string[];
    scope: string[];
  };
};
