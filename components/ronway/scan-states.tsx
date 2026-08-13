import { AlertTriangle } from "lucide-react";

/** Skeleton shown while the scan log is loading. */
export function ScanLoadingState() {
  return (
    <div className="border border-gray-200 rounded-sm bg-white overflow-hidden shadow-sm">
      <div className="relative flex items-center h-10 px-4 border-b border-gray-200 bg-[#f3f3f3]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57] ring-1 ring-black/10" aria-hidden />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] ring-1 ring-black/10" aria-hidden />
          <span className="w-3 h-3 rounded-full bg-[#28c840] ring-1 ring-black/10" aria-hidden />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-xs font-medium text-gray-400 select-none font-mono tracking-wide">
            ronway · loading scan intelligence
          </span>
        </div>
      </div>
      <div className="p-6 space-y-4" role="status" aria-label="Loading scans">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3 animate-pulse">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-200 shrink-0" />
            <span
              className="h-4 bg-gray-100 rounded"
              style={{ width: `${35 + ((i * 23) % 45)}%` }}
            />
            <span className="ml-auto w-20 h-4 bg-gray-100 rounded" />
            <span className="w-8 h-4 bg-gray-100 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

interface ScanErrorStateProps {
  message: string;
}

/** Inline error panel for a failed scan-log load. */
export function ScanErrorState({ message }: ScanErrorStateProps) {
  return (
    <div
      className="flex items-start gap-4 border border-red-200 bg-red-50 rounded-sm px-5 py-5"
      role="alert"
    >
      <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" aria-hidden />
      <div>
        <p className="text-xs tracking-widest uppercase font-mono text-red-700 font-medium mb-1">
          Failed to load scans
        </p>
        <p className="text-sm text-foreground leading-relaxed">{message}</p>
      </div>
    </div>
  );
}
