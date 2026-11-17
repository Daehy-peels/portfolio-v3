# Myat Bhone Kyaw — Developer Portfolio

A personal portfolio for Myat Bhone Kyaw, a junior full-stack developer in Yangon, Myanmar. Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Motion.

The design direction is **Obsidian Glass & Precision Motion**: a near-black surface, an emerald accent, restrained glass panels, isometric system diagrams, and motion that honours `prefers-reduced-motion`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint     # ESLint
npx tsc --noEmit # type check
npm run build    # production build
npm start        # serve the production build
```

## Before publishing

Contact details are not invented; only what is published here appears on the site.

1. **Email** — set via `profile.email` in [`src/data/portfolio.ts`](src/data/portfolio.ts). The copy button and contact form build a `mailto:` message; nothing is stored on the site.
2. **LinkedIn** — set `profile.links.linkedin`, or leave it empty to keep LinkedIn hidden.

Set the public URL so canonical links, sitemap entries, robots, and social cards resolve correctly:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

## Content

| Path | Purpose |
| --- | --- |
| `src/data/portfolio.ts` | Profile, availability, navigation, contact fields |
| `src/data/projects.ts` | Case studies, architecture notes, honest scope and status |
| `src/data/skills.ts` | Stack groups and context notes |
| `src/data/credentials.ts` | NCC Education Level 4 and Level 5 records with module marks |

Project statuses are deliberate: Nourish360 is in active development, while Aura, Thread & Form, and Agile Learning Platform have public repositories and no confirmed deployment. Keep those labels accurate if the projects change.

Social cards are generated at `opengraph-image` / `twitter-image` for the homepage and each case study, and the favicon is `src/app/icon.svg`.

## Structure

- `src/app` — App Router pages, case-study routes, metadata, sitemap, robots
- `src/components/layout` — atmosphere, floating dock, footer, clock
- `src/components/sections` — hero, bento overview, work, stack, philosophy, credentials, contact
- `src/components/mockups` — bespoke previews and blueprints for every project (no screenshots)
- `src/components/ui` — motion and interface primitives
- `src/lib` — motion tokens, utilities, OG artwork
- `src/types` — shared portfolio types
