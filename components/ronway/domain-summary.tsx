import { RiskBadge } from "@/components/ronway/risk-indicator";
import { formatDate, getRiskStyle, isIncomplete } from "@/lib/ronway/scan-utils";
import { cn } from "@/lib/utils";
import type { DomainGroup } from "@/types/ronway";

interface DomainSummaryProps {
  group: DomainGroup;
}

/**
 * Aggregate header for a single domain: its current grade plus history-wide
 * facts (scan count, first/last scan, harvest exposure, PQC readiness). Derived
 * entirely from the group's already-sorted scan history.
 */
export function DomainSummary({ group }: DomainSummaryProps) {
  const { scans, latest, scanCount, everHarvestRisk } = group;
  const oldest = scans[scans.length - 1];
  const style = getRiskStyle(latest.risk_level);
  const scoreLabel = isIncomplete(latest) ? "—" : latest.risk_score.toString();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-gray-200 border border-gray-200 rounded-sm overflow-hidden">
      <div className="bg-white px-5 py-5 col-span-2 sm:col-span-1">
        <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">
          Latest Grade
        </p>
        <div className="flex items-baseline gap-2">
          <span className={cn("font-display text-4xl tracking-tighter tabular-nums", style.text)}>
            {scoreLabel}
          </span>
          <RiskBadge level={latest.risk_level} />
        </div>
      </div>

      <SummaryTile label="Scans" value={scanCount.toString()} sub="on record" />
      <SummaryTile label="First Scan" value={formatDate(oldest.scanned_at)} sub="earliest" />
      <SummaryTile label="Latest Scan" value={formatDate(latest.scanned_at)} sub="most recent" />
      <SummaryTile
        label="Harvest Risk"
        value={everHarvestRisk ? "Yes" : "No"}
        sub="ever flagged"
        emphasize={everHarvestRisk}
      />
      <SummaryTile
        label="PQC Ready"
        value={latest.quantum_ready ? "Yes" : "No"}
        sub="latest scan"
        positive={latest.quantum_ready}
      />
    </div>
  );
}

interface SummaryTileProps {
  label: string;
  value: string;
  sub: string;
  emphasize?: boolean;
  positive?: boolean;
}

function SummaryTile({ label, value, sub, emphasize, positive }: SummaryTileProps) {
  return (
    <div className="bg-white px-5 py-5">
      <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">
        {label}
      </p>
      <p
        className={cn(
          "font-display text-3xl tracking-tight",
          emphasize ? "text-red-700" : positive ? "text-emerald-700" : "text-foreground",
        )}
      >
        {value}
      </p>
      <p className="text-xs text-muted-foreground mt-1 font-mono">{sub}</p>
    </div>
  );
}
