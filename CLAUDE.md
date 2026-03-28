# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
pnpm dev        # Local dev server (localhost:3000)
pnpm build      # Production build
pnpm start      # Production server
pnpm lint       # ESLint via Next.js
```

Package manager is **pnpm**. Add shadcn/ui components with `npx shadcn-ui@latest add [component]`.

## Architecture

**Next.js 16 App Router** landing site for BPxAI Labs — a productized technology studio building Business Operating Systems (Business OS) for SMEs, enterprises, and public sector. The company positions itself at the forefront of AI, Web3, blockchain, and risk intelligence, delivering intelligent B2B/B2C/enterprise solutions.

### Content Layer
- **`app/data/content.ts`** — All visible text, i18n-ready (en/tl). Edit here for copy changes.
- **`config/config.ts`** — Site metadata, team bios, project details, partner links.
- **`app/metadata/metadata.ts`** — SEO: title, description, keywords, Open Graph, Twitter cards.

### Component Organization
- **`components/ui/`** — shadcn/ui primitives (Radix-based). ~50 components. Do not hand-edit; use the CLI.
- **`app/components/`** — Page-level section components (hero, services, projects, partners, research, contact, footer, header).
- Section rendering order controlled in **`app/page.tsx`**.

### Routes
| Route | Purpose |
|-------|---------|
| `/` | Main landing page |
| `/academy` | Educational content & courses |
| `/sme-hub` | SME resources, roadmaps, playbooks |

### Key Patterns
- **Server Components by default**; `'use client'` only for interactivity (animations, forms, state).
- **Tailwind CSS only** — no external CSS except `app/globals.css`.
- **Icons**: `lucide-react` exclusively.
- **Animations**: Framer Motion for complex effects, Tailwind for utilities.
- **Forms**: React Hook Form + Zod validation.
- **Theme**: next-themes (class-based dark mode), HSL CSS variables in globals.css.
- **i18n**: Custom LanguageProvider context (en/tl toggle).
- **Path alias**: `@/*` maps to project root.

### Integrations
- **Vercel**: Deployment, Analytics, Speed Insights (configured in root layout).
- **Calendly**: Meeting booking at `https://calendly.com/bpxailabs/30min`.
- **Blockchain**: Selective use for auditability (Base, Viction chains).

## Conventions

- File naming: kebab-case for files (`hero-section.tsx`), PascalCase for components.
- Functional components with explicit TypeScript interfaces for props.
- Content changes go in `app/data/content.ts` or `config/config.ts`, never hardcoded in components.
- Mobile-first responsive design.
- ESLint and TypeScript errors are ignored during builds (development-stage config).

## OpenSpec Workflow

Major feature changes use spec-driven development via `openspec/`. See `openspec/AGENTS.md` for full workflow. Key commands:

```bash
openspec list              # Active changes
openspec list --specs      # Existing capabilities
openspec show [item]       # View details
openspec validate [id] --strict  # Validate a change
```

Change proposals go in `openspec/changes/<verb-led-change-id>/` with `proposal.md`, `tasks.md`, optional `design.md`, and spec deltas. Skip proposals for bug fixes, typos, deps, and config changes.
