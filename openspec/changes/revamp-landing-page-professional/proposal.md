# Proposal: Revamp Landing Page for Professional & Elegant SME Positioning

## Summary

Revamp the BPxAI landing page to position the company as the "Accenture for PH SMEs." This involves a structural overhaul, new high-value sections (SME Hub, Academy), and trust-building content tailored to the Philippine market.

## Problem Statement

The current landing page is functional but lacks the "enterprise-grade" elegance and authority required to build top-tier trust with SMEs. It focuses more on tech demos than on business transformation outcomes.

## Proposed Solution

- **Visual Revamp**: Transition to a more sophisticated, "Accenture-style" aesthetic.
- **Outcome-Driven Content**: Shift focus from "what we do" to "how we transform PH SMEs" using metrics and case studies.
- **New Hubs**: Introduce an SME Hub (Growth Roadmaps) and PH SME Academy (Education).
- **Interactive Trust**: ROI calculators and SME Readiness Audits.
- **Localization**: Tagalog toggle and mobile-first optimization for rural/provincial access.

## Scope

- Refactoring `app/page.tsx` and existing components.
- Adding new pages/routes for SME Hub and Academy.
- Implementing a site-wide language toggle.
- Integration of new data structures in `config/config.ts` or `app/data/content.ts`.

## Alternatives Considered

- **Minor CSS tweaks**: Rejected as it wouldn't solve the structural and positioning issues.
- **Third-party CMS**: Deferred to maintain performance and control for now, using existing `content.ts` pattern.

## Risks & Mitigations

- **Complexity**: The scope is large. Mitigation: Incremental implementation through tasks.
- **Performance**: High-quality visuals might slow down the site. Mitigation: Use Next.js Image optimization and Vercel Speed Insights.
