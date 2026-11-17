import type { Project, ProjectSlug, ProjectStatus } from "@/types/portfolio";

export const statusMeta: Record<
  ProjectStatus,
  { label: string; tone: "wip" | "live" | "concept" }
> = {
  "in-development": { label: "In active development", tone: "wip" },
  built: { label: "Repository available", tone: "live" },
  concept: { label: "Concept", tone: "concept" },
};

export const projects: Project[] = [
  {
    slug: "nourish360",
    index: "01",
    name: "Nourish360",
    subtitle: "Cross-platform nutrition & wellness companion",
    category: "Mobile & backend-as-a-service",
    status: "in-development",
    statusNote: "Updated November 2026 · no public release yet",
    summary:
      "A cross-platform wellness application focused on hydration, calorie tracking, nutritional awareness, and personalised health habits, with Supabase-backed data services.",
    technologies: ["Flutter", "Dart", "Riverpod", "Supabase", "PostgreSQL", "RLS"],
    githubUrl: "https://github.com/Daehy-peels/nourish360",
    stage: "nourish360",
    blueprintLabel: "Verified schema snapshot",
    blueprintNote:
      "Tables and policies mirror the reference schema in the repository. No production usage or store release is claimed.",
    previewDescription:
      "A Flutter mobile screen with a hydration ring, calorie summary, macro bars, meal log, and tab navigation.",
    blueprintDescription:
      "An entity diagram connecting Supabase auth users to profile, meal and water tables, with a row-level security policy excerpt.",
    architecture: {
      label: "Supabase · PostgreSQL · Row Level Security",
      entities: [
        {
          name: "auth.users",
          kind: "auth",
          fields: ["id uuid · primary key", "email", "created_at"],
          note: "Managed by Supabase Auth",
        },
        {
          name: "users_profile",
          kind: "table",
          fields: [
            "id uuid · fk → auth.users",
            "height · weight · age",
            "daily_water_goal_ml",
            "daily_calorie_goal",
          ],
        },
        {
          name: "meal_logs",
          kind: "table",
          fields: [
            "id uuid · pk",
            "user_id uuid · fk → auth.users",
            "meal_type · description",
            "calories · protein_g · carbs_g · fat_g",
          ],
        },
        {
          name: "water_logs",
          kind: "table",
          fields: [
            "id uuid · pk",
            "user_id uuid · fk → auth.users",
            "amount_ml",
            "logged_at",
          ],
        },
      ],
      notes: [
        "Row Level Security is enabled on every table; policies are scoped to auth.uid().",
        "Reads filter by user and order by time, backed by composite indexes.",
        "Macro columns are nullable so an unknown value is not recorded as zero.",
      ],
      code: {
        title: "Policy excerpt · supabase/schema.sql",
        language: "sql",
        body: `create policy "users_profile_select_own"
  on public.users_profile
  for select to authenticated
  using (auth.uid() = id);`,
      },
    },
    caseStudy: {
      overview: [
        "Nourish360 is a cross-platform wellness application built with Flutter and Supabase. It tracks daily hydration, calories, and macronutrients, and keeps a personalised profile with daily goals.",
        "The app is organised feature-first — auth, onboarding, hydration, nutrition, profile, and shell — with Riverpod providers connecting repositories to UI state. Data lives in Postgres behind Supabase Auth.",
        "The repository includes a Myanmar food catalog, weekly hydration and calorie views, a password-reset flow, and a reference schema that can rebuild the database.",
      ],
      problem: [
        "Most nutrition trackers assume a Western food database, which makes logging local meals guesswork. I wanted one daily surface for water and food that reflected what I actually eat.",
        "Building it myself also meant owning the schema and the security model: how records are stored, how state reaches the device, and how one user is kept out of another user's data.",
      ],
      objectives: [
        "Onboard a user with height, weight, activity level, and daily goals.",
        "Log water and meals quickly, including macro data when it is known.",
        "Turn raw logs into daily and weekly progress views.",
        "Keep every record private to its owner through Postgres Row Level Security.",
      ],
      decisions: [
        {
          title: "Flutter for one codebase",
          body: "A single Dart codebase runs the app across platforms, so the focus could stay on product behaviour instead of duplicating screens per platform.",
        },
        {
          title: "Riverpod for explicit state",
          body: "Providers make dependencies visible and keep repositories separate from widgets, which makes the data flow easier to reason about as features grow.",
        },
        {
          title: "Supabase instead of a custom server",
          body: "Auth, Postgres, and RLS cover the backend needs without running infrastructure. The free tier matches the project's constraints.",
        },
        {
          title: "Feature-first folder structure",
          body: "Each feature keeps its data, domain, and presentation layers together, which keeps related code close and boundaries obvious.",
        },
      ],
      features: [
        "Onboarding and profile-based calorie and hydration goals.",
        "Hydration logging with custom amounts, a daily ring, and a weekly chart.",
        "Meal logging with meal types, servings, and optional protein, carb, and fat values.",
        "A searchable Myanmar food catalog with a detail sheet.",
        "Weekly calorie and hydration summaries built with fl_chart.",
        "Supabase Auth with an emailed password-reset flow.",
      ],
      challenges: [
        {
          title: "Null is not zero",
          body: "A hand-typed meal often has no macro data. Treating missing macros as 0 g would quietly corrupt daily totals, so the columns are nullable and the interface distinguishes unknown values from real zeros.",
        },
        {
          title: "The anon key is public",
          body: "The Supabase anon key ships inside the app. Security therefore depends on RLS being enabled and correct on every table, with each policy tied to auth.uid() rather than to client-side filtering.",
        },
        {
          title: "Schema drift during development",
          body: "Tables changed shape while the app was already in use. Capturing a reference schema file made it possible to rebuild a fresh project and compare the live database against the code.",
        },
      ],
      learnings: [
        "Constraints belong in the database — checks on ranges and allowed values caught bad data before it reached the UI.",
        "Designing for a public client key changes how you think about authorization.",
        "Separating repositories from widgets makes change less risky.",
      ],
      scope: [
        "In active development; there is no store release or public web deployment.",
        "The food catalog is a bundled dataset, not a live nutrition API.",
        "No social, clinical, or wearable integrations are implemented.",
      ],
    },
  },
  {
    slug: "aura-clinic",
    index: "02",
    name: "Aura Aesthetic Clinic",
    subtitle: "Clinical operations & patient management portal",
    category: "Healthcare web application",
    status: "built",
    statusNote: "Application built · no public deployment",
    summary:
      "A clinic management application covering patient records, treatment histories, appointment coordination, and an authenticated staff dashboard.",
    technologies: ["Next.js App Router", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/Daehy-peels/aura-clinic-management",
    stage: "aura-clinic",
    blueprintLabel: "Verified relational model",
    blueprintNote:
      "Entities follow the app's TypeScript domain model. Role-based administration and audit logging are not implemented and are not claimed.",
    previewDescription:
      "A clinical dashboard with navigation, statistics, an appointment timeline, status indicators, and a staff session panel.",
    blueprintDescription:
      "A relational diagram of patients, appointments, and treatment logs, connected to Supabase Auth with an edge-level redirect guard.",
    architecture: {
      label: "Next.js App Router · Supabase Auth · PostgreSQL",
      entities: [
        {
          name: "auth.users",
          kind: "auth",
          fields: ["Supabase session", "email"],
          note: "Cookie-based SSR session",
        },
        {
          name: "patients",
          kind: "table",
          fields: [
            "id · pk",
            "first_name · last_name",
            "email · phone",
            "date_of_birth",
            "medical_history",
          ],
        },
        {
          name: "appointments",
          kind: "table",
          fields: [
            "id · pk",
            "patient_id · fk → patients",
            "scheduled_at",
            "treatment_type",
            "status · scheduled | confirmed | completed | cancelled",
          ],
        },
        {
          name: "treatment_logs",
          kind: "table",
          fields: [
            "id · pk",
            "patient_id · fk → patients",
            "appointment_id · fk → appointments",
            "procedure_name · practitioner_name",
            "date_performed · observations",
          ],
        },
      ],
      notes: [
        "Unauthenticated requests to /dashboard are redirected to /login in the edge proxy.",
        "SSR sessions are handled with @supabase/ssr on the server and in the browser.",
        "Appointment status is a closed set of four values, modelled in TypeScript.",
      ],
      code: {
        title: "Illustrative relational read",
        language: "sql",
        body: `select a.scheduled_at, a.treatment_type, a.status,
       p.first_name, p.last_name
from appointments a
join patients p on p.id = a.patient_id
order by a.scheduled_at asc;`,
      },
    },
    caseStudy: {
      overview: [
        "Aura is a clinic operations portal built with Next.js App Router, TypeScript, Supabase, and Tailwind CSS. Staff can review patients, schedule appointments, record treatment logs, and see daily totals.",
        "A public booking page captures a visitor's contact details and requested treatment. The dashboard sits behind Supabase Auth, with sessions refreshed through SSR cookies.",
      ],
      problem: [
        "Small clinics often coordinate appointments and patient history across paper notes and spreadsheets. I built this project to practise a realistic relational workflow — records that reference each other, forms for creating and editing them, and an authenticated surface.",
        "It is deliberately a management exercise, not a claim of clinical readiness.",
      ],
      objectives: [
        "Manage patient records with create, edit, and detail views.",
        "Schedule appointments and move them through a defined status set.",
        "Keep treatment history attached to both the patient and the appointment.",
        "Offer a public booking path while keeping the dashboard private.",
      ],
      decisions: [
        {
          title: "App Router with server-side data",
          body: "Server components handle reads and keep Supabase credentials out of the client bundle where possible, while interactive forms stay client-side.",
        },
        {
          title: "SSR cookie sessions",
          body: "@supabase/ssr keeps the auth session in cookies so the server and client see the same user, and the edge proxy can refresh it on navigation.",
        },
        {
          title: "Typed domain model",
          body: "Patient, Appointment, and TreatmentLog interfaces keep the UI honest about the shape of each record and make relation changes visible at compile time.",
        },
        {
          title: "Route-level protection",
          body: "The proxy redirects unauthenticated dashboard requests to /login before a protected page renders.",
        },
      ],
      features: [
        "Dashboard with counts for patients, appointments, and treatment logs.",
        "Patient list, creation, editing, and detail pages.",
        "Appointment list, creation, and editing with four status values.",
        "Treatment logs linking a procedure to a patient and an appointment.",
        "Public booking form collecting email, treatment type, and a scheduled date.",
        "Login and signup with a Supabase auth callback route.",
      ],
      challenges: [
        {
          title: "Session handling across the network boundary",
          body: "Supabase sessions have to be refreshed in middleware and available to both server and client components. Getting the cookie flow right was the difference between a working dashboard and random sign-outs.",
        },
        {
          title: "Relational reads and joins",
          body: "Appointments are only useful with the patient attached, and treatment logs reference both. Composing those reads required thinking in joins rather than in separate lists.",
        },
        {
          title: "Consistent create and edit forms",
          body: "The same fields appear in new and edit flows. Keeping validation and date handling consistent avoided drift between the two paths.",
        },
      ],
      learnings: [
        "Authentication is a routing concern as much as a UI concern.",
        "Relational data shapes the interface — the schema decides what a screen can show.",
        "Small typed models save time when a project has several forms.",
      ],
      scope: [
        "No verified role-based access control, audit logging, or billing features.",
        "No production deployment is confirmed for this repository.",
        "Preview data is synthetic; the app is not designed to hold real patient records.",
        "Not a medical device or a compliance-certified records system.",
      ],
    },
  },
  {
    slug: "thread-and-form",
    index: "03",
    name: "Thread & Form",
    subtitle: "Minimalist full-stack apparel storefront",
    category: "E-commerce",
    status: "built",
    statusNote: "Repository available · no payment provider",
    summary:
      "An editorial e-commerce application exploring modern storefront design, structured product data, and a streamlined shopping flow backed by Supabase.",
    technologies: ["Next.js App Router", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/Daehy-peels/thread-and-form",
    stage: "thread-and-form",
    blueprintLabel: "Verified storefront schema",
    blueprintNote:
      "Tables and relations match the repository's database types. Payment is tracked as a status only; no provider is integrated.",
    previewDescription:
      "An editorial storefront with a catalogue of garments, stock badges, price details, and an open cart drawer.",
    blueprintDescription:
      "A commerce entity diagram from profiles through products and cart items to orders and order items, plus an illustrative SQL read.",
    architecture: {
      label: "Next.js 16 · Supabase · order RPC",
      entities: [
        {
          name: "profiles",
          kind: "table",
          fields: ["id · fk → auth.users", "full_name · email", "shipping_address", "role · customer | admin"],
        },
        {
          name: "products",
          kind: "table",
          fields: [
            "id · pk",
            "category_id · fk → categories",
            "name · slug · price",
            "stock_quantity · is_featured",
          ],
        },
        {
          name: "cart_items",
          kind: "table",
          fields: ["id · pk", "user_id", "product_id · fk → products", "quantity"],
        },
        {
          name: "orders",
          kind: "table",
          fields: [
            "id · pk",
            "user_id · fk → profiles",
            "status · pending → delivered",
            "payment_status · unpaid | paid | refunded",
            "total_amount · shipping_address",
          ],
        },
        {
          name: "order_items",
          kind: "table",
          fields: ["order_id · fk → orders", "product_id · fk → products", "quantity · unit_price"],
        },
      ],
      notes: [
        "Orders are written through the place_order database function rather than by inserting rows from the client.",
        "is_admin gates the admin dashboard; order status changes are manual.",
        "No product variants exist in the schema — stock is tracked per product.",
      ],
      code: {
        title: "Verified database types",
        language: "typescript",
        body: `orders: {
  status: OrderStatus;
  payment_status: PaymentStatus;
  total_amount: number;
  shipping_address: string;
};`,
      },
    },
    caseStudy: {
      overview: [
        "Thread & Form is an apparel storefront built on Next.js 16 App Router with Supabase Postgres. Customers browse a curated catalogue, manage a cart, and place orders through a database function; an admin dashboard manages order status.",
        "The project uses Tailwind CSS v4 for the interface and @supabase/ssr for server-side session handling.",
      ],
      problem: [
        "I wanted to build the complete shape of a commerce flow — catalogue, cart, checkout, and order administration — without paying for a payment provider or a hosted backend.",
        "The interesting problems were not visual: keeping stock consistent, creating an order atomically, and separating customer access from admin access.",
      ],
      objectives: [
        "Present a small catalogue with category filtering and featured products.",
        "Maintain a cart with clear shipping rules.",
        "Create orders atomically with server-side validation of stock and totals.",
        "Give an administrator a usable order queue.",
      ],
      decisions: [
        {
          title: "A database function for order placement",
          body: "place_order creates the order and its items together. Keeping that invariant in Postgres is safer than relying on a sequence of client inserts.",
        },
        {
          title: "Server and browser Supabase clients",
          body: "Server components and route handlers use a cookie-aware server client, while interactive cart actions use a browser client. Each environment gets the client it needs.",
        },
        {
          title: "is_admin as the admin boundary",
          body: "Admin access is decided in the database through a security-definer check rather than by hiding a link in the UI.",
        },
        {
          title: "Tailwind v4 with a restrained palette",
          body: "The storefront's editorial layout and muted surfaces are built with utility classes and a small set of tokens, not a component library.",
        },
      ],
      features: [
        "Catalogue with category filters and featured products.",
        "Persistent cart with quantity updates and a $50 free-shipping threshold.",
        "Checkout that validates shipping details and delegates order creation to the database.",
        "Admin dashboard listing orders, payment status, and customer details.",
        "Order status updates for pending, processing, shipped, delivered, and cancelled.",
        "Profile and authentication flows through Supabase Auth.",
      ],
      challenges: [
        {
          title: "Stock consistency at checkout",
          body: "A product can sell out between browsing and checkout. Order creation re-checks stock inside the database function so a cart cannot silently oversell.",
        },
        {
          title: "Totals must be trusted",
          body: "Client-side subtotal math is a convenience, not a source of truth. The function recalculates the order total from stored prices.",
        },
        {
          title: "Keeping admin logic out of the UI",
          body: "Hiding dashboard links is not access control. The admin check lives in the database layer so a crafted request fails on its own.",
        },
      ],
      learnings: [
        "Postgres functions are a practical place for commerce invariants.",
        "Cart state needs a clear boundary between optimistic UI and stored truth.",
        "Honest scope matters: tracking payment status is not the same as accepting payments.",
      ],
      scope: [
        "No payment provider is integrated; nothing is charged and no order is fulfilled.",
        "No product variants (sizes or colours) and no inventory reservation.",
        "No transactional email or shipping integration.",
        "The storefront is not publicly deployed.",
      ],
    },
  },
  {
    slug: "agile-learning-platform",
    index: "04",
    name: "Agile Learning Platform",
    subtitle: "Scrum curriculum, progress tracking & graded assessments",
    category: "Learning platform",
    status: "built",
    statusNote: "Run locally · Supabase pauses when idle",
    summary:
      "A full-stack Scrum learning application with a three-level curriculum, markdown lessons, persistent progress, graded assessments, and a learner dashboard, built on Next.js and Supabase.",
    technologies: [
      "Next.js 16 App Router",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Daehy-peels/agile-learning-platform",
    stage: "agile-learning-platform",
    blueprintLabel: "Client-verified data surface",
    blueprintNote:
      "Table, view, and RPC names are taken from the application's queries. The SQL definitions and RLS policies live in Supabase and are not part of the repository, so none are claimed here.",
    previewDescription:
      "A dark learning dashboard with a curriculum progress ring, completion stats, a next-module card, an assessment snapshot, and recent modules.",
    blueprintDescription:
      "An entity diagram linking Supabase Auth to profiles, progress and quiz attempts, public question views, and the RPCs that grade an assessment.",
    architecture: {
      label: "Next.js App Router · Supabase Auth · PostgreSQL",
      entities: [
        {
          name: "auth.users",
          kind: "auth",
          fields: ["id uuid · primary key", "email", "created_at"],
          note: "Managed by Supabase Auth",
        },
        {
          name: "profiles",
          kind: "table",
          fields: ["id · fk → auth.users", "full_name", "experience_level", "created_at"],
        },
        {
          name: "modules",
          kind: "table",
          fields: ["id · pk", "slug · title", "skill_level", "content · order_index"],
        },
        {
          name: "user_progress",
          kind: "table",
          fields: ["user_id · fk → auth.users", "module_id · fk → modules", "is_completed", "updated_at"],
          note: "Unique on (user_id, module_id)",
        },
        {
          name: "quiz_attempts",
          kind: "table",
          fields: ["id · pk", "user_id · module_id", "percentage · grade", "passed · completed_at"],
          note: "One row per submitted attempt",
        },
        {
          name: "quiz_questions_public",
          kind: "view",
          fields: ["id · module_id", "question · hint", "question_order", "explanation"],
          note: "Public read surface for the quiz",
        },
        {
          name: "quiz_options_public",
          kind: "view",
          fields: ["id · question_id", "option_value A–D", "option_text"],
          note: "Options only; the correct option is not requested before submission",
        },
        {
          name: "grading RPCs",
          kind: "rpc",
          fields: [
            "start_quiz(p_module_id)",
            "submit_quiz(p_attempt_id, p_answers)",
            "get_quiz_review(p_attempt_id)",
          ],
          note: "Postgres functions called from the quiz page",
        },
        {
          name: "resources",
          kind: "table",
          fields: ["id · pk", "title · category", "file_url", "description"],
        },
      ],
      notes: [
        "The quiz reads questions and options from the *_public views; correct answers are requested only through get_quiz_review after submission.",
        "submit_quiz returns the score, grade, and pass/fail, so grading is not computed in the browser.",
        "Marking a module complete upserts on (user_id, module_id), keeping one progress row per learner and module.",
        "Dashboard and lesson access is guarded by client-side redirects; no server middleware is present in the repository.",
      ],
      code: {
        title: "Verified client calls · quiz page",
        language: "typescript",
        body: `const { data: questions } = await supabase
  .from("quiz_questions_public")
  .select("id, question, question_order")
  .eq("module_id", module.id)
  .eq("is_active", true);

const { data: result } = await supabase.rpc("submit_quiz", {
  p_attempt_id: attemptId,
  p_answers: formatAnswers(answers),
});`,
      },
    },
    caseStudy: {
      overview: [
        "Agile Learning Platform (branded AgileMastery in the interface) is a full-stack Scrum study application built with Next.js App Router, TypeScript, Tailwind CSS, and Supabase. Learners browse a curriculum, read markdown lessons, mark progress, and take graded assessments.",
        "Content, progress, and assessment history live in Postgres. The dashboard summarises completion, the next module, and assessment scores, while the resource vault links to templates and cheat sheets stored as rows in the database.",
        "The assessment flow is the part I spent the most time on: attempts are created through a database function, scored on submission, and reviewed afterwards without sending the correct answers to the browser beforehand.",
      ],
      problem: [
        "Scrum study material is usually a static PDF or a paid course, disconnected from practice and progress. I wanted one self-paced product that tied reading, completion, and assessment together.",
        "It also became an exercise in treating quiz answers as sensitive data, and in building a real multi-page product on a zero-budget stack.",
      ],
      objectives: [
        "Structure the curriculum into Beginner, Intermediate, and Professional tracks.",
        "Persist module completion and assessment history per account.",
        "Grade assessments outside the browser and reveal answers only after submission.",
        "Give learners a dashboard with progress, next actions, and score history.",
        "Keep the product running on free-tier infrastructure.",
      ],
      decisions: [
        {
          title: "Supabase for auth, data, and grading",
          body: "One service covers accounts, content tables, progress, and the functions that grade attempts. It matches the project's free-tier constraints, though it couples the app to Supabase.",
        },
        {
          title: "Public views for quiz content",
          body: "Questions and options are read from *_public views, so the client can render a quiz without selecting the answer key.",
        },
        {
          title: "RPCs for the attempt lifecycle",
          body: "start_quiz, submit_quiz, and get_quiz_review keep attempt state and scoring in Postgres. The quiz page only sends selected options and renders the result.",
        },
        {
          title: "Markdown kept as data",
          body: "Lessons are stored as markdown and rendered with react-markdown and remark-gfm. Headings are extracted to build the table of contents and scroll targets.",
        },
        {
          title: "Client components with direct Supabase calls",
          body: "The simplest path without an extra API layer; the trade-off is that route protection is a client-side redirect rather than a server check.",
        },
      ],
      features: [
        "Email and password accounts that capture a display name and experience level.",
        "Curriculum filtered by skill level, with per-level counts and completion states.",
        "Markdown lessons with a generated table of contents, reading progress, and previous/next navigation.",
        "Module completion stored once per learner and module, restored on reload.",
        "Assessments with hints, a question navigator, and A–D / arrow-key shortcuts.",
        "Database-graded scoring with a 70% pass mark and A–F grades.",
        "Post-submission review of selected answers with explanations.",
        "Dashboard with completion percentage, next milestone, best and average scores.",
      ],
      challenges: [
        {
          title: "Answers must not ship with the questions",
          body: "A quiz that receives correct_option in the browser is trivial to inspect. The client reads question text and options from public views, then requests review data only after submitting. I verified this contract from the client; the SQL behind it is not in the repository.",
        },
        {
          title: "Progress has to survive reloads",
          body: "Completion is optimistically toggled, then upserted on (user_id, module_id). If the write fails, the UI reverts instead of showing a false completed state.",
        },
        {
          title: "Long lesson content",
          body: "Lesson bodies arrive as markdown with escaped newlines. Normalising the text, extracting unique heading slugs, and accounting for sticky headers took more work than the prose styling.",
        },
        {
          title: "Free-tier limits are part of the architecture",
          body: "The Supabase free tier pauses idle projects, so the app cannot load data until the project is resumed. That constraint shapes how the demo can be shared.",
        },
      ],
      learnings: [
        "Grading and answer keys belong behind a database boundary, not in component state.",
        "An assessment is a lifecycle — attempt, answers, submission, review — and each step needs its own state.",
        "Reading progress, completion, and scores answer different questions; mixing them makes the UI dishonest.",
      ],
      scope: [
        "The source is public on GitHub, but the app is not publicly deployed.",
        "The Supabase free-tier project pauses when idle, so a live demo is not guaranteed.",
        "Page protection is client-side redirects; the repository has no server middleware, and RLS policies are not included.",
        "Grading lives in Supabase functions whose SQL is not part of the repository; only the client contract is verified.",
        "Questions and resources are seeded directly in the database; there is no authoring interface.",
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProject(slug: ProjectSlug): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
