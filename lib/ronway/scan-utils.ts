/**
 * Pure, side-effect-free helpers for the Ronway scan directory: sector
 * categorization, risk styling, date formatting, domain grouping, and
 * pagination. No React, no I/O — every function is input → output so it is
 * trivially unit-testable.
 */

import {
  CATEGORY_MATCHERS,
  DEFAULT_CATEGORY,
  INCOMPLETE_STYLE,
  RISK_ORDER,
  RISK_STYLES,
} from "@/constants/ronway";
import type {
  DomainGroup,
  PageResult,
  RiskLevel,
  RiskStyle,
  ScanEntry,
} from "@/types/ronway";

/**
 * Maps a domain to its sector using {@link CATEGORY_MATCHERS}. Falls back to
 * {@link DEFAULT_CATEGORY} when nothing matches.
 *
 * @param domain - The raw `target_domain` (case-insensitive).
 * @returns The sector label, e.g. "Education".
 */
export function getCategory(domain: string): string {
  const normalized = domain.toLowerCase();
  for (const [category, pattern] of CATEGORY_MATCHERS) {
    if (pattern.test(normalized)) return category;
  }
  return DEFAULT_CATEGORY;
}

/**
 * Resolves the Tailwind style bundle for a risk level, defaulting to the
 * "Incomplete" styling for any unexpected value.
 *
 * @param level - The risk level string from a scan.
 * @returns The matching {@link RiskStyle}.
 */
export function getRiskStyle(level: string): RiskStyle {
  return RISK_STYLES[level as RiskLevel] ?? INCOMPLETE_STYLE;
}

/**
 * Formats an ISO timestamp as a short PH-locale date (e.g. "May 28"), falling
 * back to the leading date substring if parsing fails.
 */
export function formatDate(iso: string): string {
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.getTime())) return iso.slice(0, 10);
  return parsed.toLocaleDateString("en-PH", { month: "short", day: "numeric" });
}

/**
 * Formats an ISO timestamp as a full PH-locale date and time for the detail
 * page history, falling back to the raw string on parse failure.
 */
export function formatDateTime(iso: string): string {
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.getTime())) return iso;
  return parsed.toLocaleString("en-PH", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/** True when a scan could not be graded on the public surface. */
export function isIncomplete(scan: ScanEntry): boolean {
  return scan.risk_level === "Incomplete";
}

function severityRank(level: RiskLevel): number {
  return RISK_ORDER[level] ?? RISK_ORDER.Incomplete;
}

function newestFirst(a: ScanEntry, b: ScanEntry): number {
  const at = new Date(a.scanned_at).getTime();
  const bt = new Date(b.scanned_at).getTime();
  // Fall back to id ordering when timestamps are equal or unparseable.
  if (Number.isNaN(at) || Number.isNaN(bt) || at === bt) return b.id - a.id;
  return bt - at;
}

/**
 * Collapses a flat scan list into one {@link DomainGroup} per unique domain.
 * A domain scanned multiple times becomes a single entry whose `scans` holds
 * the full history (newest-first), with derived latest/worst/harvest fields.
 *
 * @param scans - All scan records, in any order.
 * @returns One group per distinct `target_domain`.
 */
export function groupByDomain(scans: ScanEntry[]): DomainGroup[] {
  const byDomain = new Map<string, ScanEntry[]>();
  for (const scan of scans) {
    const existing = byDomain.get(scan.target_domain);
    if (existing) existing.push(scan);
    else byDomain.set(scan.target_domain, [scan]);
  }

  const groups: DomainGroup[] = [];
  for (const [domain, entries] of byDomain) {
    const history = [...entries].sort(newestFirst);
    const worstLevel = history.reduce<RiskLevel>(
      (worst, scan) =>
        severityRank(scan.risk_level) < severityRank(worst)
          ? scan.risk_level
          : worst,
      "Incomplete",
    );
    groups.push({
      domain,
      category: getCategory(domain),
      scans: history,
      latest: history[0],
      scanCount: history.length,
      worstLevel,
      everHarvestRisk: history.some((scan) => scan.harvest_risk),
    });
  }
  return groups;
}

/**
 * Sorts domain groups for the directory: most-severe current standing first,
 * then most-scanned, then alphabetical. Deterministic and stable enough for a
 * paginated view.
 *
 * @param groups - Groups to sort (not mutated).
 * @returns A new, sorted array.
 */
export function sortDomainGroups(groups: DomainGroup[]): DomainGroup[] {
  return [...groups].sort((a, b) => {
    const bySeverity =
      severityRank(a.latest.risk_level) - severityRank(b.latest.risk_level);
    if (bySeverity !== 0) return bySeverity;
    if (b.scanCount !== a.scanCount) return b.scanCount - a.scanCount;
    return a.domain.localeCompare(b.domain);
  });
}

/** Clamps a requested page into the valid 1..totalPages range. */
function clampPage(page: number, totalPages: number): number {
  if (!Number.isFinite(page)) return 1;
  return Math.min(Math.max(1, Math.trunc(page)), Math.max(1, totalPages));
}

/**
 * Slices an array into a single page plus the metadata a pager UI needs.
 * Out-of-range pages are clamped; an empty input yields a valid empty page.
 *
 * @param items - The full, already-sorted collection.
 * @param page - Requested 1-indexed page.
 * @param perPage - Items per page (must be >= 1).
 * @returns The page slice and its {@link PageResult} metadata.
 */
export function paginate<T>(
  items: T[],
  page: number,
  perPage: number,
): PageResult<T> {
  const size = Math.max(1, Math.trunc(perPage));
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / size));
  const current = clampPage(page, totalPages);
  const offset = (current - 1) * size;
  const slice = items.slice(offset, offset + size);
  return {
    items: slice,
    page: current,
    totalPages,
    total,
    startIndex: total === 0 ? 0 : offset + 1,
    endIndex: offset + slice.length,
  };
}

/**
 * Builds the compact page-number sequence for a pager, inserting `"ellipsis"`
 * sentinels where pages are skipped. Always includes the first and last page
 * and a window around the current page.
 *
 * @param current - Active 1-indexed page.
 * @param totalPages - Total number of pages (>= 1).
 * @returns Ordered page numbers interleaved with `"ellipsis"` markers.
 */
export function buildPageWindow(
  current: number,
  totalPages: number,
): Array<number | "ellipsis"> {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const pages = new Set<number>([1, totalPages, current]);
  for (let offset = 1; offset <= 1; offset += 1) {
    if (current - offset > 1) pages.add(current - offset);
    if (current + offset < totalPages) pages.add(current + offset);
  }
  const ordered = [...pages].sort((a, b) => a - b);

  const result: Array<number | "ellipsis"> = [];
  let previous = 0;
  for (const page of ordered) {
    if (page - previous > 1) result.push("ellipsis");
    result.push(page);
    previous = page;
  }
  return result;
}
