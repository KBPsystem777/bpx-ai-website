# Tasks: Refocus to Global-Grade "BPxAI Labs"

## 1. Content Baseline (app/data/content.ts)

- [x] Update `siteName` to "BPxAI Labs"
- [x] Update `meta.description` to remove "PH SMEs" and add "Global Standards" and "Business Operating Systems" focus.
- [x] Hide "SME Hub" and "Academy" from `navigation.links`.
- [x] Update `navigation.ctaButton` from "Free SME Audit" to "Let's Talk Systems".
- [x] Rewrite `hero` headline and subheadline based on the new philosophy.
- [x] Remove `hero.metrics`.
- [x] Update `hero.primaryCta` and `hero.secondaryCta` labels.
- [x] Update `about`, `services`, `projectHighlights`, and `cta` sections to use "Business Operating Systems" / "Business OS" terminology and global tone.

## 2. Header Component (components/header.tsx)

- [x] Adjust CSS/Tailwind classes to center the navigation links on desktop.

## 3. Hero Section Component (components/hero-section.tsx)

- [x] Remove metrics grid rendering logic.
- [x] Change layout from `flex-col lg:flex-row` to a single centered column.
- [x] Center-align text within the motion container.
- [x] Remove any specific PH-centered imagery or floating elements if they no longer fit the global tone.

## 4. Branding (config/config.ts or public/metadata.ts if applicable)

- [x] Audit-check other configuration files for "BPxAI" strings and update to "BPxAI Labs".

## 5. Metadata (app/metadata/metadata.ts)

- [x] Update metadata strings to reflect the labs branding.

## Validation

- [x] Verify that the header navigation is centered.
- [x] Verify that the hero banner is centered and metrics are gone.
- [x] Verify that "SME Hub" and "Academy" are no longer visible in the UI.
- [x] Verify that "BPxAI Labs" branding is consistent across the landing page.
