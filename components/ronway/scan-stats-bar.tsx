import { isIncomplete } from "@/lib/ronway/scan-utils";
import { cn } from "@/lib/utils";
import type { DomainGroup } from "@/types/ronway";

interface ScanStatsBarProps {
  groups: DomainGroup[];
}

interface Stat {
  label: string;
  value: string;
  sub: string;
  cls: string;
}

function medianLatestScore(groups: DomainGroup[]): number {
  const scores = groups
    .map((g) => g.latest)
    .filter((s) => !isIncomplete(s) && s.risk_score > 0)
    .map((s) => s.risk_score)
    .sort((a, b) => a - b);
  if (scores.length === 0) return 0;
  return scores[Math.floor(scores.length / 2)];
}

function buildStats(groups: DomainGroup[]): Stat[] {
  const critical = groups.filter((g) => g.latest.risk_level === "Critical").length;
  const high = groups.filter((g) => g.latest.risk_level === "High").length;
  const pqcReady = groups.filter((g) => g.latest.quantum_ready).length;
  const totalScans = groups.reduce((sum, g) => sum + g.scanCount, 0);
  const median = medianLatestScore(groups);

  return [
    {
      label: "Domains",
      value: groups.length.toString(),
      sub: `${totalScans} scans`,
      cls: "text-foreground",
    },
    {
      label: "Critical Risk",
      value: critical.toString(),
      sub: "domains",
      cls: critical > 0 ? "text-red-700" : "text-foreground",
    },
    {
      label: "High Risk",
      value: high.toString(),
      sub: "domains",
      cls: high > 0 ? "text-orange-700" : "text-foreground",
    },
    {
      label: "PQC-Ready",
      value: pqcReady.toString(),
      sub: "quantum-safe",
      cls: pqcReady > 0 ? "text-emerald-700" : "text-foreground",
    },
    {
      label: "Median Score",
      value: median > 0 ? `${median}` : "—",
      sub: "out of 100",
      cls: "text-foreground",
    },
  ];
}

/** Directory summary tiles, computed over the grouped (deduped) domains. */
export function ScanStatsBar({ groups }: ScanStatsBarProps) {
  const stats = buildStats(groups);
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-gray-200 border border-gray-200 rounded-sm overflow-hidden"
      role="region"
      aria-label="Scan statistics"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white px-5 py-5">
          <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">
            {stat.label}
          </p>
          <p className={cn("font-display text-3xl tracking-tight", stat.cls)}>
            {stat.value}
          </p>
          <p className="text-xs text-muted-foreground mt-1 font-mono">{stat.sub}</p>
        </div>
      ))}
    </div>
  );
}
