# Tasks: Landing Page Revamp (Professional Positioning)

## Phase 1: Foundation & Localization

- [ ] Implement `LanguageProvider` for English/Tagalog state management.
- [ ] Refactor `app/data/content.ts` to support multi-language objects.
- [ ] Add Language Toggle component to the `Header`.

## Phase 2: Visual Overhaul (Hero & Home)

- [ ] Redesign `HeroSection` with "Global Standards" tagline and metrics carousel.
- [ ] Update `ServicesSection` to reflect the service-model hierarchy.
- [ ] Implement `PricingSection` with the 3rd-tier grid.
- [ ] Integrate PH-specific success metrics (Abra Real Property Tax, etc.) into `ProjectsSection`.

## Phase 3: SME Hub & Success Vault

- [ ] Scaffold `app/sme-hub/page.tsx`.
- [ ] Implement `GrowthRoadmap` component.
- [ ] Create `SuccessVault` component with gated download forms.
- [ ] Build `TechToolkit` component showing partner/tech logos.

## Phase 4: PH SME Academy

- [ ] Scaffold `app/academy/page.tsx` and `app/academy/[slug]/page.tsx`.
- [ ] Implement module listing with category filters.
- [ ] Add video embed support for educational content.

## Phase 5: Interactive Tools & Polish

- [ ] Create `ROISimulator` component for SME savings calculation.
- [ ] Implement `SMEAuditForm` multi-step survey.
- [ ] Finalize "Low Data Mode" optimizations and PWA configuration.
- [ ] Perform A/B test setup via Vercel for the new homepage.

## Validation

- [ ] Verify all Tagalog translations are accurate and accessible.
- [ ] Ensure Core Web Vitals (LCP, CLS) remain within target ranges on mobile.
- [ ] Test gated content flow (email signup -> access).
