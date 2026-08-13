import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { RiskBadge, RiskDot } from "@/components/ronway/risk-indicator";
import { formatDate, getRiskStyle, isIncomplete } from "@/lib/ronway/scan-utils";
import { cn } from "@/lib/utils";
import type { DomainGroup } from "@/types/ronway";

interface DomainRowProps {
  group: DomainGroup;
}

/**
 * One directory entry: a full-row link to the domain's detail page, showing its
 * current standing and how many times it has been scanned. Multiple scans of
 * the same domain collapse into this single row.
 *
 * Uses flexbox so responsively-hidden cells drop out cleanly without breaking
 * column alignment.
 */
export function DomainRow({ group }: DomainRowProps) {
  const { domain, category, latest, scanCount, everHarvestRisk } = group;
  const style = getRiskStyle(latest.risk_level);
  const href = `/ronway/scans/${encodeURIComponent(domain)}`;
  const scoreLabel = isIncomplete(latest) ? "—" : latest.risk_score.toString();
  const scanCountLabel = `${scanCount} scan${scanCount !== 1 ? "s" : ""}`;

  return (
    <Link
      href={href}
      aria-label={`View scan history for ${domain}: ${scanCountLabel}, latest ${latest.risk_level} risk`}
      className={cn(
        "flex items-center gap-3 sm:gap-4 px-4 py-3.5 border-b border-gray-100 last:border-0 transition-colors group focus-visible:outline-none focus-visible:bg-gray-50",
        style.rowHover,
      )}
    >
      <RiskDot level={latest.risk_level} />

      <div className="min-w-0 flex-1">
        <span className="font-mono text-sm text-foreground group-hover:text-accent transition-colors truncate block">
          {domain}
        </span>
        <span className="text-xs text-muted-foreground truncate block">
          {category}
          {everHarvestRisk && (
            <span className="text-red-600 font-medium"> · Harvest risk</span>
          )}
        </span>
      </div>

      <div className="hidden sm:block shrink-0">
        <RiskBadge level={latest.risk_level} />
      </div>

      <span
        className={cn(
          "text-sm font-mono tabular-nums font-semibold text-right w-8 shrink-0",
          style.text,
        )}
      >
        {scoreLabel}
      </span>

      <span className="hidden lg:block text-xs font-mono text-muted-foreground text-right w-32 shrink-0">
        {scanCountLabel} · {formatDate(latest.scanned_at)}
      </span>

      <span className="hidden sm:block lg:hidden text-xs font-mono text-muted-foreground text-right w-12 shrink-0">
        {scanCount}×
      </span>

      <ChevronRight
        className="w-4 h-4 text-gray-300 group-hover:text-accent transition-colors shrink-0"
        aria-hidden
      />
    </Link>
  );
}
