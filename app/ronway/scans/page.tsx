"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { Footer } from "@/components/footer";
import { DomainDirectory } from "@/components/ronway/domain-directory";
import { ScanCta } from "@/components/ronway/scan-cta";
import { ScanStatsBar } from "@/components/ronway/scan-stats-bar";
import { ScanErrorState, ScanLoadingState } from "@/components/ronway/scan-states";
import { RISK_LEGEND } from "@/constants/ronway";
import { useRonwayScans } from "@/hooks/use-ronway-scans";
import { groupByDomain, sortDomainGroups } from "@/lib/ronway/scan-utils";

const EDITORIAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Ronway scan directory. Collapses the raw scan log into one row per unique
 * domain, sorts by current standing, and paginates. Each row links to the
 * domain's full scan history.
 */
export default function RonwayScansPage() {
  const { scans, loading, error } = useRonwayScans();

  const groups = React.useMemo(
    () => sortDomainGroups(groupByDomain(scans)),
    [scans],
  );

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
              href="/ronway"
              className="inline-flex items-center gap-2 text-sm font-mono tracking-wider text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to scanner
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EDITORIAL_EASE }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-accent font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden />
              Ronway Intelligence
            </span>
            <span className="hidden sm:inline-block text-xs tracking-widest uppercase text-muted-foreground font-mono">
              / TLS Scan Log
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EDITORIAL_EASE, delay: 0.08 }}
            className="font-display text-foreground text-[clamp(2.5rem,7vw,6rem)] font-light leading-[1.0] tracking-tighter mb-6 max-w-4xl"
          >
            TLS scan intelligence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EDITORIAL_EASE, delay: 0.16 }}
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            Every domain scanned and graded by Ronway — BPxAI&apos;s
            post-quantum cryptography risk engine. Government, banking,
            education, and private sector all covered.
          </motion.p>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 border-t border-border/60">
        <div className="container mx-auto pt-10 lg:pt-14">
          {loading && <ScanLoadingState />}
          {error && <ScanErrorState message={error} />}

          {!loading && !error && (
            <>
              <div className="mb-10">
                <ScanStatsBar groups={groups} />
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 px-1">
                <p className="text-xs font-mono tracking-wider text-muted-foreground">
                  Risk levels:
                </p>
                {RISK_LEGEND.map(([label, dot]) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground"
                  >
                    <span className={`w-2 h-2 rounded-full ${dot}`} aria-hidden />
                    {label}
                  </span>
                ))}
                <p className="text-xs font-mono text-muted-foreground ml-auto">
                  Click any domain for its full scan history
                </p>
              </div>

              <DomainDirectory groups={groups} />
            </>
          )}
        </div>
      </section>

      <ScanCta
        heading="Is your domain on the list?"
        description="Run a free scan to see where you stand, or book a consultation for the complete cryptographic exposure map and remediation brief."
      />

      <Footer />
    </main>
  );
}
