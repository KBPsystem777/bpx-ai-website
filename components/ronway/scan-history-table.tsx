import { RiskBadge } from "@/components/ronway/risk-indicator";
import { formatDateTime, isIncomplete } from "@/lib/ronway/scan-utils";
import { cn } from "@/lib/utils";
import type { ScanEntry } from "@/types/ronway";

interface ScanHistoryTableProps {
  /** Every scan for the domain, newest-first. */
  scans: ScanEntry[];
}

const HEAD_CLASS =
  "px-3 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground font-normal";

/**
 * Full historical scan log for one domain — one row per scan, exposing every
 * stored field. This is the complete public-surface record; deeper
 * algorithm-level detail comes only from a fresh live scan.
 */
export function ScanHistoryTable({ scans }: ScanHistoryTableProps) {
  return (
    <div className="border border-gray-200 rounded-sm overflow-hidden shadow-sm bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px]">
          <thead>
            <tr className="border-b border-gray-200 bg-[#f7f7f7]">
              <th scope="col" className={cn(HEAD_CLASS, "text-left")}>
                Scanned
              </th>
              <th scope="col" className={cn(HEAD_CLASS, "text-left")}>
                Port
              </th>
              <th scope="col" className={cn(HEAD_CLASS, "text-left")}>
                Risk
              </th>
              <th scope="col" className={cn(HEAD_CLASS, "text-right")}>
                Score
              </th>
              <th scope="col" className={cn(HEAD_CLASS, "text-center")}>
                Vulns
              </th>
              <th scope="col" className={cn(HEAD_CLASS, "text-center")}>
                Harvest
              </th>
              <th scope="col" className={cn(HEAD_CLASS, "text-center")}>
                PQC
              </th>
              <th scope="col" className={cn(HEAD_CLASS, "text-right")}>
                Scan ID
              </th>
            </tr>
          </thead>
          <tbody>
            {scans.map((scan) => (
              <tr key={scan.id} className="border-b border-gray-100 last:border-0">
                <td className="px-3 py-3 font-mono text-sm text-foreground whitespace-nowrap">
                  {formatDateTime(scan.scanned_at)}
                </td>
                <td className="px-3 py-3 font-mono text-sm text-muted-foreground">
                  {scan.target_port}
                </td>
                <td className="px-3 py-3">
                  <RiskBadge level={scan.risk_level} />
                </td>
                <td className="px-3 py-3 text-right font-mono text-sm tabular-nums font-semibold text-foreground">
                  {isIncomplete(scan) ? "—" : scan.risk_score}
                </td>
                <td className="px-3 py-3 text-center font-mono text-sm text-muted-foreground">
                  {scan.vulnerability_count}
                </td>
                <td
                  className={cn(
                    "px-3 py-3 text-center font-mono text-xs tracking-wider font-medium",
                    scan.harvest_risk ? "text-red-600" : "text-muted-foreground",
                  )}
                >
                  {scan.harvest_risk ? "Yes" : "No"}
                </td>
                <td
                  className={cn(
                    "px-3 py-3 text-center font-mono text-xs tracking-wider font-medium",
                    scan.quantum_ready ? "text-emerald-700" : "text-gray-400",
                  )}
                >
                  {scan.quantum_ready ? "✓" : "✗"}
                </td>
                <td className="px-3 py-3 text-right font-mono text-xs text-muted-foreground">
                  #{scan.id}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
