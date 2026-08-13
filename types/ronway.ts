/**
 * Shared domain types for the Ronway TLS/PQC scan intelligence surface.
 *
 * These describe the public-surface projection returned by
 * `GET /api/ronway-scans` and the derived, grouped shapes rendered by the
 * `/ronway/scans` directory and per-domain detail pages.
 */

/**
 * Risk grade reported by the Ronway Rust engine. `Incomplete` is what the
 * engine records when nothing answered on the public surface and the endpoint
 * could not be graded.
 */
export type RiskLevel =
  | "Critical"
  | "High"
  | "Medium"
  | "Low"
  | "Pass"
  | "Incomplete";

/**
 * A single stored scan record for one domain, as returned by the scans API.
 * This is the complete persisted shape — the directory shows a summary of it,
 * the detail page shows every field.
 */
export interface ScanEntry {
  id: number;
  scanned_at: string;
  target_domain: string;
  target_port: number;
  risk_score: number;
  risk_level: RiskLevel;
  harvest_risk: boolean;
  quantum_ready: boolean;
  vulnerability_count: number;
  created_at: string;
}

/**
 * All scans for a single domain, collapsed into one directory entry. A domain
 * scanned three times appears once here, with its full history in `scans`.
 */
export interface DomainGroup {
  /** The `target_domain` shared by every scan in the group. */
  domain: string;
  /** Human-readable sector derived from the domain (e.g. "Education"). */
  category: string;
  /** Every scan for this domain, sorted newest-first. */
  scans: ScanEntry[];
  /** The most recent scan — drives the domain's current standing. */
  latest: ScanEntry;
  /** Number of times this domain has been scanned. */
  scanCount: number;
  /** Highest-severity grade observed across the whole history. */
  worstLevel: RiskLevel;
  /** True when any scan in the history flagged harvest-now-decrypt-later. */
  everHarvestRisk: boolean;
}

/** Tailwind class bundle for rendering a given risk level consistently. */
export interface RiskStyle {
  badge: string;
  text: string;
  dot: string;
  bar: string;
  rowHover: string;
}

/** A single page-worth of items plus the metadata a pager UI needs. */
export interface PageResult<T> {
  items: T[];
  /** 1-indexed current page, clamped to the valid range. */
  page: number;
  totalPages: number;
  total: number;
  /** 1-indexed index of the first item on this page (0 when empty). */
  startIndex: number;
  /** 1-indexed index of the last item on this page (0 when empty). */
  endIndex: number;
}
