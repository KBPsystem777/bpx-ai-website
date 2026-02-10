# Specification: PH SME Academy

## Purpose

Position BPxAI as an educator and mentor for Pinoy entrepreneurs through free and paid educational content.

## ADDED Requirements

### Requirement: Module Listing

The Academy SHALL provide a clean interface for educational modules.

- It SHALL support video embeds and text/markdown lessons.
- It SHALL include category filters (e.g., "AI Basics", "LGU Digitalization", "Blockchain").

#### Scenario: Browsing modules

- **Given** I am in the Academy
- **When** I filter for "AI Basics"
- **Then** I see modules like "Accessing Enterprise AI without breaking the bank".

### Requirement: Tagalog Instructions

The Academy SHALL ensure educational content is culturally and linguistically relevant.

- Navigation and core instructions SHALL support Tagalog.

#### Scenario: Viewing Tagalog content

- **Given** I am in the Academy with Tagalog enabled
- **When** I view a module description
- **Then** the instructions and metadata are in Tagalog.
