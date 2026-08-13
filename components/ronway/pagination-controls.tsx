"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { buildPageWindow } from "@/lib/ronway/scan-utils";
import { cn } from "@/lib/utils";
import type { PageResult } from "@/types/ronway";

interface PaginationControlsProps {
  page: PageResult<unknown>;
  onPageChange: (page: number) => void;
  /** Plural noun for the count summary, e.g. "domains". */
  itemLabel: string;
}

const BUTTON_BASE =
  "inline-flex items-center justify-center h-9 min-w-9 px-2 rounded-sm border text-sm font-mono tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

/**
 * Accessible pager: a count summary plus previous/next controls and a windowed
 * list of page numbers with ellipsis gaps. Renders nothing when there is only
 * one page of results.
 */
export function PaginationControls({
  page,
  onPageChange,
  itemLabel,
}: PaginationControlsProps) {
  const { page: current, totalPages, total, startIndex, endIndex } = page;
  if (totalPages <= 1) return null;

  const window = buildPageWindow(current, totalPages);

  return (
    <nav
      className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
      aria-label="Directory pagination"
    >
      <p className="text-xs font-mono tracking-wider text-muted-foreground">
        Showing {startIndex}–{endIndex} of {total} {itemLabel}
      </p>

      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
          aria-label="Previous page"
          className={cn(
            BUTTON_BASE,
            "border-gray-200 text-muted-foreground hover:border-accent hover:text-accent disabled:opacity-40 disabled:pointer-events-none",
          )}
        >
          <ChevronLeft className="w-4 h-4" aria-hidden />
        </button>

        {window.map((entry, i) =>
          entry === "ellipsis" ? (
            <span
              key={`ellipsis-${i}`}
              className="inline-flex items-center justify-center h-9 min-w-9 text-sm font-mono text-muted-foreground"
              aria-hidden
            >
              …
            </span>
          ) : (
            <button
              key={entry}
              type="button"
              onClick={() => onPageChange(entry)}
              aria-label={`Page ${entry}`}
              aria-current={entry === current ? "page" : undefined}
              className={cn(
                BUTTON_BASE,
                entry === current
                  ? "border-accent bg-accent text-accent-foreground font-medium"
                  : "border-gray-200 text-foreground hover:border-accent hover:text-accent",
              )}
            >
              {entry}
            </button>
          ),
        )}

        <button
          type="button"
          onClick={() => onPageChange(current + 1)}
          disabled={current === totalPages}
          aria-label="Next page"
          className={cn(
            BUTTON_BASE,
            "border-gray-200 text-muted-foreground hover:border-accent hover:text-accent disabled:opacity-40 disabled:pointer-events-none",
          )}
        >
          <ChevronRight className="w-4 h-4" aria-hidden />
        </button>
      </div>
    </nav>
  );
}
