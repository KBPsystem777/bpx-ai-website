import { describe, it, expect } from "vitest";

import {
  buildPageWindow,
  formatDate,
  formatDateTime,
  getCategory,
  getRiskStyle,
  groupByDomain,
  paginate,
  sortDomainGroups,
} from "@/lib/ronway/scan-utils";
import { RISK_STYLES } from "@/constants/ronway";
import type { RiskLevel, ScanEntry } from "@/types/ronway";

function makeScan(overrides: Partial<ScanEntry> = {}): ScanEntry {
  return {
    id: 1,
    scanned_at: "2026-05-28T10:00:00.000Z",
    target_domain: "example.com",
    target_port: 443,
    risk_score: 50,
    risk_level: "Medium" as RiskLevel,
    harvest_risk: false,
    quantum_ready: false,
    vulnerability_count: 2,
    created_at: "2026-05-28T10:00:00.000Z",
    ...overrides,
  };
}

describe("getCategory", () => {
  it("maps .gov.ph domains to the government sector", () => {
    expect(getCategory("dilg.gov.ph")).toBe("Government & Public Sector");
  });

  it("maps .edu.ph domains to education", () => {
    expect(getCategory("pup.edu.ph")).toBe("Education");
  });

  it("is case-insensitive", () => {
    expect(getCategory("PUP.EDU.PH")).toBe("Education");
  });

  it("falls back to Other for unmatched domains", () => {
    expect(getCategory("random-startup.io")).toBe("Other");
  });
});

describe("groupByDomain", () => {
  it("collapses repeat scans of one domain into a single group", () => {
    const scans = [
      makeScan({ id: 1, target_domain: "koleenbp.com" }),
      makeScan({ id: 2, target_domain: "koleenbp.com" }),
      makeScan({ id: 3, target_domain: "koleenbp.com" }),
    ];
    const groups = groupByDomain(scans);
    expect(groups).toHaveLength(1);
    expect(groups[0].scanCount).toBe(3);
    expect(groups[0].domain).toBe("koleenbp.com");
  });

  it("sorts each domain's history newest-first and exposes the latest", () => {
    const scans = [
      makeScan({ id: 1, scanned_at: "2026-05-01T00:00:00Z", risk_score: 40 }),
      makeScan({ id: 2, scanned_at: "2026-06-01T00:00:00Z", risk_score: 80 }),
      makeScan({ id: 3, scanned_at: "2026-04-01T00:00:00Z", risk_score: 20 }),
    ];
    const [group] = groupByDomain(scans);
    expect(group.scans.map((s) => s.id)).toEqual([2, 1, 3]);
    expect(group.latest.id).toBe(2);
  });

  it("derives the worst historical level and any harvest exposure", () => {
    const scans = [
      makeScan({ id: 1, risk_level: "Low", harvest_risk: false }),
      makeScan({ id: 2, risk_level: "Critical", harvest_risk: true }),
    ];
    const [group] = groupByDomain(scans);
    expect(group.worstLevel).toBe("Critical");
    expect(group.everHarvestRisk).toBe(true);
  });

  it("returns an empty array for no scans", () => {
    expect(groupByDomain([])).toEqual([]);
  });
});

describe("sortDomainGroups", () => {
  it("orders by current severity, then scan count, then domain name", () => {
    const groups = groupByDomain([
      makeScan({ id: 1, target_domain: "medium-a.com", risk_level: "Medium" }),
      makeScan({ id: 2, target_domain: "critical.com", risk_level: "Critical" }),
      makeScan({ id: 3, target_domain: "medium-b.com", risk_level: "Medium" }),
      makeScan({ id: 4, target_domain: "medium-b.com", risk_level: "Medium" }),
    ]);
    const sorted = sortDomainGroups(groups);
    expect(sorted.map((g) => g.domain)).toEqual([
      "critical.com", // most severe
      "medium-b.com", // same severity, more scans (2)
      "medium-a.com", // same severity, fewer scans, alpha
    ]);
  });

  it("does not mutate the input array", () => {
    const groups = groupByDomain([makeScan({ target_domain: "a.com" })]);
    const copy = [...groups];
    sortDomainGroups(groups);
    expect(groups).toEqual(copy);
  });
});

describe("paginate", () => {
  const items = Array.from({ length: 45 }, (_, i) => i + 1);

  it("returns the requested page slice with 1-indexed boundaries", () => {
    const result = paginate(items, 2, 20);
    expect(result.items).toEqual(Array.from({ length: 20 }, (_, i) => i + 21));
    expect(result.startIndex).toBe(21);
    expect(result.endIndex).toBe(40);
    expect(result.totalPages).toBe(3);
  });

  it("clamps an over-range page to the last page", () => {
    const result = paginate(items, 99, 20);
    expect(result.page).toBe(3);
    expect(result.items).toEqual([41, 42, 43, 44, 45]);
  });

  it("clamps a non-positive page to the first page", () => {
    expect(paginate(items, 0, 20).page).toBe(1);
    expect(paginate(items, -5, 20).page).toBe(1);
  });

  it("yields a valid empty page for no items", () => {
    const result = paginate([], 1, 20);
    expect(result.items).toEqual([]);
    expect(result.total).toBe(0);
    expect(result.totalPages).toBe(1);
    expect(result.startIndex).toBe(0);
    expect(result.endIndex).toBe(0);
  });
});

describe("buildPageWindow", () => {
  it("lists every page when there are seven or fewer", () => {
    expect(buildPageWindow(3, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("inserts ellipsis markers and always keeps first and last", () => {
    const window = buildPageWindow(6, 12);
    expect(window[0]).toBe(1);
    expect(window[window.length - 1]).toBe(12);
    expect(window).toContain("ellipsis");
    expect(window).toContain(6);
  });

  it("does not place ellipsis adjacent to the edge it borders", () => {
    const window = buildPageWindow(2, 12);
    // Near the start: pages 1,2,3 are contiguous, ellipsis only before last.
    expect(window.slice(0, 3)).toEqual([1, 2, 3]);
  });
});

describe("formatDate", () => {
  it("formats a valid ISO date to a short label", () => {
    expect(formatDate("2026-05-28T10:00:00Z")).toMatch(/May/);
  });

  it("falls back to the leading date substring on invalid input", () => {
    expect(formatDate("not-a-date")).toBe("not-a-date");
  });
});

describe("formatDateTime", () => {
  it("formats a valid ISO timestamp with the year", () => {
    expect(formatDateTime("2026-05-28T10:00:00Z")).toMatch(/2026/);
  });

  it("returns the raw string on invalid input", () => {
    expect(formatDateTime("nonsense")).toBe("nonsense");
  });
});

describe("getRiskStyle", () => {
  it("returns the matching style for a known level", () => {
    expect(getRiskStyle("Critical")).toBe(RISK_STYLES.Critical);
  });

  it("falls back to the Incomplete style for an unknown level", () => {
    expect(getRiskStyle("Bogus")).toBe(RISK_STYLES.Incomplete);
  });
});

describe("paginate — non-finite guard", () => {
  it("clamps a NaN page to the first page", () => {
    expect(paginate([1, 2, 3], Number.NaN, 2).page).toBe(1);
  });
});
