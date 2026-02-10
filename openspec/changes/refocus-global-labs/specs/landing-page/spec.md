# Spec: Global-Grade Landing Page Transformation

## MODIFIED Requirements

### Branding and Identity

- **Requirement:** Update all site branding to "BPxAI Labs".
  - #### Scenario: Name Change
    - **Given** the current site content uses "BPxAI"
    - **When** the page loads
    - **Then** the header, footer, and meta titles must display "BPxAI Labs"

### Header Navigation

- **Requirement:** Streamline navigation and hide secondary initiatives.
  - #### Scenario: Hidden Hubs
    - **Given** the navigation links in `siteContent`
    - **When** the navigation is rendered
    - **Then** "SME Hub" and "Academy" links should NOT be present.
- **Requirement:** Center navigation links in the desktop view.
  - #### Scenario: Centered Nav
    - **Given** a desktop viewport
    - **When** the header is rendered
    - **Then** the navigation items should be centrally aligned within the header container.

### Hero Section

- **Requirement:** Rewrite hero content for a global, operator-led tech studio persona.
  - #### Scenario: New Hero Messaging
    - **Given** the hero headline and subheadline
    - **When** the hero is displayed
    - **Then** it should mention "Business Operating Systems" or "Business OS" and emphasize "Clarity".
- **Requirement:** Remove ROI metrics and center hero layout.
  - #### Scenario: Centered Hero
    - **Given** the hero section
    - **When** rendered on any viewport
    - **Then** the text and CTAs should be center-aligned, and the metrics grid should be removed.

### Tone and Content

- **Requirement:** Sanitize content for cross-border appeal.
  - #### Scenario: Cross-border focus
    - **Given** phrases like "PH SMEs" or "Accenture for PH SMEs"
    - **When** the content is updated
    - **Then** they should be replaced with language that highlights "global-grade systems" and "operator-led execution".
