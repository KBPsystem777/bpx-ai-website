# Design: Professional Revamp Architecture

## Overview

This document outlines the technical approach for the BPxAI professional revamp, focusing on state management for localization and modular section architecture.

## Architecture Decisions

### 1. Localization Strategy

- **Mechanism**: Use a lightweight context provider (`LanguageProvider`) to manage `en` vs `tl` (Tagalog) state.
- **Content Storage**: Expand `app/data/content.ts` to support nested objects for different languages.
- **Toggle**: A floating or header-integrated switch to persist language choice in `localStorage`.

### 2. Multi-Product Hub Structure

- **Routes**:
  - `/sme-hub`: Growth roadmaps and toolkit access.
  - `/academy`: Video/text modules (Education).
  - `/success-vault`: Case studies repository.
- **Shared Components**: High-authority landing components (Hero, CTA, Testimonial cards) will be moved to `components/shared/` if reused across hubs.

### 3. Interactive Tools

- **ROI Simulator**: A client-side component using standard React state to calculate potential savings based on user input for SME metrics.
- **SME Readiness Audit**: A multi-step form built with `react-hook-form` and `zod`, potentially integrating with a simple backend tool or just generating a PDF/report.

### 4. Visual Identity

- **Typography**: Refined pairing (leaning towards professional sans-serifs, consistent with Accenture's clean look).
- **Color Palette**: Maintain the blue/purple professional tech vibe but with more whitespace and subtle gradients.

## Data Schema Changes

We will modify `siteContent` in `app/data/content.ts` to a dictionary-style structure:

```typescript
export const siteContent = {
  en: { ... },
  tl: { ... }
}
```

## UI Component Updates

- **Hero**: Support for background video/high-res Pinoy entrepreneur images.
- **Pricing**: Add a transparent tier-based grid.
- **Mobile-First**: Ensure the "PH Optimization" (low data mode) is handled via CSS media queries and optimized image loading.
