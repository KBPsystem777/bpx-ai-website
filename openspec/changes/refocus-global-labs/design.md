# Design: Global-Grade Pivot and Visual Centering

## Architectural Goals

- **Simplicity**: reduce cognitive load by removing niche initiatives (SME Hub, Academy) from primary visibility.
- **Symmetry**: move to a centered layout for the primary hero to signal authority and premium quality.
- **Content Abstraction**: maintain the use of `app/data/content.ts` for all strings to ensure easy updates as the brand evolves.

## Detailed Changes

### 1. Logo and Branding

- Update `siteName` in `siteContent` to "BPxAI Labs".
- Ensure the header logo link points to `/`.

### 2. Navigation

- Remove "SME Hub" and "Academy" from `navigation.links`.
- Update the navigation CTA from "Free SME Audit" to something more aligned with the new direction, e.g., "Build your Business OS".

### 3. Hero Section

- **Layout**: Change from `flex-col lg:flex-row` with `text-left` to a fully centered layout.
- **Content**:
  - Remove `metrics` grid.
  - Update headline and subheadline to focus on "Business Operating Systems" and "Clarity".
  - Center the CTA buttons.
- **Visuals**: Ensure background gradients/blobs remain balanced for a centered text block.

### 4. Header Centering

- Current header is a flexbox with `justify-between` (Logo | Nav | Action).
- To "center the header", we could either:
  - Center the navigation links specifically while keeping logo left and CTA right.
  - Or shift items to be more balanced.
- Based on the request "make em centered", I will move the navigation links to be centered in the desktop header if possible, or center the logo and nav group. Actually, a common premium look is Logo on the left, centered nav, and CTA on the right. User said "fix the header and hero banner. make em centered". I'll interpret "header centered" as the navigation items being centered.

### 5. Content Updates (app/data/content.ts)

- Update `about`, `services`, and `projectHighlights` to use the new vocabulary: "Business Operating Systems", "Clarity", "Execution".
- Remove references to "PH SMEs" in favor of "Companies" or "SMEs" with global standards.

## Validation

- Ensure no broken links to SME Hub/Academy if users happen to type the URL manually (we won't delete the pages, just hide them from nav).
- Check mobile responsiveness of the centered hero.
