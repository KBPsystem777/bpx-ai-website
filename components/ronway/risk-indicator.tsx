import { getRiskStyle } from "@/lib/ronway/scan-utils";
import { cn } from "@/lib/utils";
import type { RiskLevel } from "@/types/ronway";

interface RiskBadgeProps {
  level: RiskLevel;
  className?: string;
}

/**
 * Uppercase risk-level pill, colored by severity. Reused across the directory
 * rows and the detail-page history table.
 */
export function RiskBadge({ level, className }: RiskBadgeProps) {
  const style = getRiskStyle(level);
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-xs font-mono tracking-wider uppercase border font-medium",
        style.badge,
        className,
      )}
    >
      {level}
    </span>
  );
}

interface RiskDotProps {
  level: RiskLevel;
  className?: string;
}

/** Small severity-colored dot used as a leading row indicator. */
export function RiskDot({ level, className }: RiskDotProps) {
  const style = getRiskStyle(level);
  return (
    <span
      className={cn("inline-block w-2.5 h-2.5 rounded-full shrink-0", style.dot, className)}
      aria-hidden
    />
  );
}
