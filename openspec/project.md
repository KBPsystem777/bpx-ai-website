# Project Context

## Purpose

BPxAI Labs is a productized technology studio and business systems builder. It focuses on implementing **Business Operating Systems (Business OS)** for SMEs and emerging enterprises that need clarity, control, and execution. The company operates as an operator-led automation and systems partner, delivering reliable, custom-built platforms that replace fragmented tools with lightweight, purpose-built systems.

## Leadership

- **Koleen Paunon**: Founder & CTO, AI architecture expert.
- **Neri Suba**: Business Development & HR Lead.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, `lucide-react` (Icons), `tailwindcss-animate`
- **UI Components**: Radix UI (via shadcn/ui components in `components/ui/`)
- **Animations**: Framer Motion
- **Forms & Validation**: React Hook Form, Zod
- **Data Visualization**: Recharts
- **Analytics & Performance**: Vercel (Analytics, Web Vitals, Speed Insights)

## Project Conventions

### Code Style

- **Functional Components**: React functional components with explicit TypeScript interfaces for props.
- **Styling**: Strictly use Tailwind CSS utility classes. Avoid external CSS except for `app/globals.css`.
- **Icons**: Standardize on `lucide-react`.
- **Content Management**: All static content should be centralized in `app/data/content.ts` or `config/config.ts` to facilitate future CMS integration and easy updates.
- **File Naming**: Use kebab-case for component files (e.g., `hero-section.tsx`) and PascalCase for component names.

### Architecture Patterns

- **Next.js App Router**: Prefer Server Components for SEO and performance; use `'use client'` strictly for client-side interactivity.
- **Atomic Design-ish**: Base components in `components/ui/`, section-level components in `components/`.
- **Spec-Driven Development**: Adhere to the **OpenSpec** workflow defined in `openspec/AGENTS.md` for planning and implementing major changes.

### Testing Strategy

- Currently focused on manual validation and performance monitoring via Vercel Speed Insights.

### Git Workflow

- **OpenSpec Workflow**: Use `openspec/changes/` for all feature proposals, architectural shifts, and task tracking.
- **Branching**: Verb-led change IDs for branches and proposals (e.g., `add-service-section`).

## Domain Context

- **Global-Grade Execution**: High focus on reliable, boringly effective business systems for global operators and public sector institutions.
- **Core Initiatives**:
  - **SnackPax**: Food business operations platform (attendance, sales, expenses).
  - **LGU Digitization**: Custom systems for local government units (e.g., real property tax).
  - **MedixAI**: AI-assisted medical triage and referral platform.
  - **SmartMaterials**: AI-assisted construction material estimation.
  - **ManageLife**: Fractional housing ownership platform (Web3 pragmatism).
- **Utility Automation**: Strong background in automated billing and systems for large utilities (Exelon, BGE, etc.).

## Important Constraints

- **SEO & Performance**: Optimized for fast loading and search engine visibility.
- **Mobile-First**: Design and functionality must be responsive and mobile-friendly.

## External Dependencies

- **Vercel**: Deployment, Analytics, and Speed Insights infrastructure.
- **Calendly**: Integrated for booking meetings (`https://calendly.com/bpxailabs/30min`).
- **Blockchain**: Selective use for auditability and transparency (Base, Viction).
