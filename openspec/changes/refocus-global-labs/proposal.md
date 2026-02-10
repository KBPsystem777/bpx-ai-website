# Proposal: Refocus to Global-Grade "BPxAI Labs"

## Problem

The current landing page is heavily focused on the Philippines ("The Accenture for PH SMEs") and emphasizes ROI metrics that might feel too localized or "small business" for the new direction of the company. The company is rebranding to **BPxAI Labs**, shifting towards a "Productized technology studio" that builds "Business Operating Systems" with a global-grade execution standard, while still maintaining its operator-led roots.

## Proposed Changes

1. **Rebrand to BPxAI Labs**: Update all occurrences of "BPxAI" to "BPxAI Labs".
2. **Hide SME Hub & Academy**: Temporarily remove these from navigation and secondary CTAs to simplify the focus.
3. **Center Layout**: Center the header items and the hero banner content to create a more premium, confident feel.
4. **Shift Messaging**:
   - Move away from "PH-first" specific headlines.
   - Remove "proven ROI" metrics in the hero.
   - Emphasize "Business Operating Systems", "Clarity", "Control", and "Execution".
   - Use the tone: Calm, Precise, Confident, Founder-to-founder.
5. **Content Update**: Revise `siteContent` in `app/data/content.ts` to reflect the new philosophy (e.g., replacing "Accenture for PH SMEs" with "Productized technology studio").

## Impact

- **Brand Perception**: Shifts the brand from a localized consultancy to a global technology studio.
- **Conversion focus**: Moves from "Free Audit" (consultancy lead-gen) to "Let's talk systems" (partnership/studio lead-gen).
- **Simplicity**: Hiding early-stage hubs focuses the visitor on the core value proposition.

## Risks

- **SEO**: Changing global keywords might affect ranking if it was already indexed for "PH SMEs".
- **Internal links**: Removing "SME Hub" might break links if they were hardcoded elsewhere (will check).
