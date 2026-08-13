"use client";

import * as React from "react";

import { DomainRow } from "@/components/ronway/domain-row";
import { PaginationControls } from "@/components/ronway/pagination-controls";
import { DOMAINS_PER_PAGE } from "@/constants/ronway";
import { paginate } from "@/lib/ronway/scan-utils";
import type { DomainGroup } from "@/types/ronway";

interface DomainDirectoryProps {
  /** Domain groups, already sorted for display. */
  groups: DomainGroup[];
}

/**
 * Paginated directory of unique domains. Owns only local page state; the
 * grouped, sorted data is supplied by the page. Changing pages scrolls the
 * list back into view so the user never lands mid-scroll.
 */
export function DomainDirectory({ groups }: DomainDirectoryProps) {
  const [page, setPage] = React.useState(1);
  const topRef = React.useRef<HTMLDivElement>(null);

  const pageResult = React.useMemo(
    () => paginate(groups, page, DOMAINS_PER_PAGE),
    [groups, page],
  );

  const handlePageChange = React.useCallback((next: number) => {
    setPage(next);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div>
      <div
        ref={topRef}
        className="scroll-mt-28 border border-gray-200 rounded-sm overflow-hidden shadow-sm bg-white"
      >
        {/* Column labels */}
        <div className="flex items-center gap-3 sm:gap-4 px-4 py-2.5 bg-[#f7f7f7] border-b border-gray-200">
          <span className="w-2.5 shrink-0" aria-hidden />
          <span className="flex-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Domain
          </span>
          <span className="hidden sm:block w-[4.5rem] text-xs font-mono uppercase tracking-widest text-muted-foreground shrink-0">
            Risk
          </span>
          <span className="w-8 text-right text-xs font-mono uppercase tracking-widest text-muted-foreground shrink-0">
            Score
          </span>
          <span className="hidden lg:block w-32 text-right text-xs font-mono uppercase tracking-widest text-muted-foreground shrink-0">
            History
          </span>
          <span className="hidden sm:block lg:hidden w-12 text-right text-xs font-mono uppercase tracking-widest text-muted-foreground shrink-0">
            Scans
          </span>
          <span className="w-4 shrink-0" aria-hidden />
        </div>

        {pageResult.items.map((group) => (
          <DomainRow key={group.domain} group={group} />
        ))}
      </div>

      <PaginationControls
        page={pageResult}
        onPageChange={handlePageChange}
        itemLabel="domains"
      />
    </div>
  );
}
