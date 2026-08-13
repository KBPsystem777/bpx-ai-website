"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, RadioTower } from "lucide-react";

import { Footer } from "@/components/footer";
import { DomainSummary } from "@/components/ronway/domain-summary";
import { ScanCta } from "@/components/ronway/scan-cta";
import { ScanHistoryTable } from "@/components/ronway/scan-history-table";
import { ScanErrorState, ScanLoadingState } from "@/components/ronway/scan-states";
import { useRonwayScans } from "@/hooks/use-ronway-scans";
import { groupByDomain } from "@/lib/ronway/scan-utils";
import type { DomainGroup } from "@/types/ronway";

const EDITORIAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface DomainDetailPageProps {
  params: Promise<{ domain: string }>;
}

function decodeDomainParam(raw: string): string {
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

/**
 * Per-domain detail page. Reuses the shared scan log, collapses the domain's
 * scans into a single group, and renders its complete history. Reachable at
 * `/ronway/scans/<domain>` from any directory row.
 */
export default function DomainDetailPage({ params }: DomainDetailPageProps) {
  const { domain: rawDomain } = React.use(params);
  const domain = decodeDomainParam(rawDomain);
  const { scans, loading, error } = useRonwayScans();

  const group = React.useMemo<DomainGroup | null>(() => {
    const matches = scans.filter((scan) => scan.target_domain === domain);
    return matches.length > 0 ? groupByDomain(matches)[0] : null;
  }, [scans, domain]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative pt-32 lg:pt-40 pb-14 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" aria-hidden />
        <div
          className="absolute inset-x-0 top-0 h-[400px] radial-glow pointer-events-none"
          aria-hidden
        />

        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: EDITORIAL_EASE }}
            className="mb-10"
          >
            <Link
              href="/ronway/scans"
              className="inline-flex items-center gap-2 text-sm font-mono tracking-wider text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to directory
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EDITORIAL_EASE }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-accent font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden />
              Ronway Intelligence
            </span>
            <span className="hidden sm:inline-block text-xs tracking-widest uppercase text-muted-foreground font-mono">
              / {group ? group.category : "Domain history"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EDITORIAL_EASE, delay: 0.08 }}
            className="font-display text-foreground text-[clamp(2rem,6vw,4.75rem)] font-light leading-[1.02] tracking-tighter mb-6 max-w-4xl break-words"
          >
            {domain}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EDITORIAL_EASE, delay: 0.16 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
          >
            Complete Ronway scan history for this domain — every graded scan on
            record, against NIST FIPS 203/204/205.
          </motion.p>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 border-t border-border/60">
        <div className="container mx-auto pt-10 lg:pt-14">
          {loading && <ScanLoadingState />}
          {error && <ScanErrorState message={error} />}
          {!loading && !error && !group && <DomainNotFound domain={domain} />}

          {!loading && !error && group && (
            <div className="space-y-10">
              <DomainSummary group={group} />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
                    Scan history · {group.scanCount} record
                    {group.scanCount !== 1 ? "s" : ""}
                  </p>
                  <span className="text-xs font-mono tracking-widest uppercase text-accent">
                    Newest first
                  </span>
                </div>
                <ScanHistoryTable scans={group.scans} />
              </div>

              <p className="text-xs font-mono tracking-wider text-muted-foreground leading-relaxed">
                Public surface only · Graded by the Ronway Rust engine. The
                algorithm-level cipher, certificate, and key-exchange breakdown
                is delivered in the full Ronway report.
              </p>
            </div>
          )}
        </div>
      </section>

      <ScanCta
        heading="Go deeper on this domain."
        description="Run a fresh scan for the live grade, or book a consultation for the complete cryptographic exposure map and remediation brief."
      />

      <Footer />
    </main>
  );
}

interface DomainNotFoundProps {
  domain: string;
}

function DomainNotFound({ domain }: DomainNotFoundProps) {
  return (
    <div className="flex items-start gap-4 border border-border/60 bg-muted/20 rounded-sm px-5 py-5">
      <RadioTower className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" aria-hidden />
      <div>
        <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-1">
          No scans on record
        </p>
        <p className="text-sm text-foreground leading-relaxed">
          Ronway has no scan history for{" "}
          <span className="font-mono">{domain}</span>.{" "}
          <Link href="/ronway" className="text-accent hover:underline">
            Run a free scan
          </Link>{" "}
          to grade it, or{" "}
          <Link href="/ronway/scans" className="text-accent hover:underline">
            browse the directory
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
