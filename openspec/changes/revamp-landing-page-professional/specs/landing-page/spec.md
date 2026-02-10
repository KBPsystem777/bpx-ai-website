# Specification: Professional Landing Page

## Purpose

The primary entry point for BPxAI, designed to build immediate trust with PH SMEs and LGUs through professional aesthetics and outcome-focused content.

## ADDED Requirements

### Requirement: High-Authority Hero Section

The hero section SHALL convey the "Accenture for PH SMEs" positioning with a global-standard tagline and clear CTA.

- It SHALL display a high-impact headline "Elevate Your PH SME to Global Standards".
- It SHALL feature a rotating carousel or grid of success metrics (e.g., "Abra Real Property Tax: 20-30% boost").
- The primary CTA SHALL be "Start Free SME Readiness Audit".

#### Scenario: Landing on the page

- **Given** I am a first-time visitor from the Philippines
- **When** the page loads
- **Then** I see the global-standard tagline and immediate evidence of impact (metrics)
- **And** the primary CTA is clearly visible.

### Requirement: Transparent Pricing Tiers

The page SHALL display service levels clearly to build trust and qualify leads.

- It SHALL provide a 3-tier grid: Free Pilots, Replicable Systems ($5K), and Enterprise Migration ($20K+).

#### Scenario: Reviewing services

- **Given** I am an SME owner looking for costs
- **When** I scroll to the pricing section
- **Then** I see clear tiers and starting prices, mimicking enterprise transparency.

### Requirement: Localization & Accessibility

The site SHALL be accessible to rural users and those preferring Tagalog.

- It SHALL provide a language toggle between English and Tagalog.
- It SHALL support a "Low Data Mode" toggle or auto-optimization for slow connections.

#### Scenario: Switching language

- **Given** I prefer reading in Tagalog
- **When** I click the "Tagalog" toggle
- **Then** the main headlines and CTA buttons update to Tagalog equivalents.

## MODIFIED Requirements

### Requirement: Enhanced Footer

The footer SHALL be updated to improve navigation.

- **Action**: Add links to the new SME Hub and Academy.

#### Scenario: Navigating from footer

- **Given** I am at the bottom of the home page
- **When** I check the footer
- **Then** I see links to the SME Hub and PH SME Academy.

### Requirement: Success Vault Projects

The projects section SHALL transition to an outcome-focused display.

- **Action**: Shift from project thumbnails to detailed "Success Vault" cards.

#### Scenario: Viewing projects

- **Given** I am in the projects section
- **When** I view an item
- **Then** I see a "Success Vault" card with metrics and industry context.
