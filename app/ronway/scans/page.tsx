"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Lock,
  ShieldAlert,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

const editorialEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

type RiskLevel =
  | "Critical"
  | "High"
  | "Medium"
  | "Low"
  | "Pass"
  | "Incomplete";

type ScanEntry = {
  id: number;
  scanned_at: string;
  target_domain: string;
  target_port: number;
  risk_score: number;
  risk_level: RiskLevel;
  harvest_risk: boolean;
  quantum_ready: boolean;
  vulnerability_count: number;
  created_at: string;
};

/* ─── Category matching ──────────────────────────────────────── */
// Order matters: more specific patterns must come before broad ones.

const CATEGORY_MATCHERS: Array<[string, RegExp]> = [
  ["Government & Public Sector", /\.gov\.ph/],
  [
    "Banking & Financial Services",
    /bdo\.com|bpi\.com|metrobank|unionbankph|maya\.ph|bsp\.gov/,
  ],
  [
    "Fintech & Digital Payments",
    /gcash|paymongo|dragonpay|coins\.ph|pdax|uniondigital/,
  ],
  [
    "Telecommunications",
    /globe\.com\.ph|smart\.com\.ph|pldt|dito\.ph|converge/,
  ],
  ["Education", /\.edu\.ph|\.edu$/],
  [
    "Food & Restaurants",
    /jollibee|chowking|greenwich|manginasal|redribbon|maxschicken|shakey|potatocorner|frankies/,
  ],
  ["E-Commerce & Retail", /shopee|lazada|carousell/],
  ["Airlines & Travel", /airasia|philippineairlines|cebuair/],
  ["Energy & Utilities", /meralco|petron|phoenixfuels|seaoil/],
  ["Consumer Goods & FMCG", /coca-cola|nestle|unilever/],
  [
    "Conglomerates & Holdings",
    /ayala\.com|sminvestments|jgsummit|sanmiguel|aboitiz|megaworld|filinvest|robinsonsland|century-properties|dmciholdings|vistaresidences|kmc\.solutions/,
  ],
  ["Tech & IT Services",
    /arcanys|pointwest|stratpoint|xurpas|voyager|orangeandbronze|sprout\.ph|yondu|exist\.com/,
  ],
  ["Mobility & Delivery", /grab\.com|foodpanda/],
  ["Media & Entertainment", /kumu/],
  ["Recruitment & HR", /kalibrr/],
  ["Global Tech & Research", /facebook|google|amazon|microsoft|cambridge\.org|example\.com/],
];

function getCategory(domain: string): string {
  const d = domain.toLowerCase();
  for (const [cat, regex] of CATEGORY_MATCHERS) {
    if (regex.test(d)) return cat;
  }
  return "Other";
}

/* ─── Risk styling ───────────────────────────────────────────── */

type RiskStyle = {
  badge: string;
  text: string;
  dot: string;
  bar: string;
  rowHover: string;
};

const RISK_STYLES: Record<string, RiskStyle> = {
  Critical: {
    badge: "border-red-200 bg-red-50 text-red-700",
    text: "text-red-700",
    dot: "bg-red-500",
    bar: "bg-red-500",
    rowHover: "hover:bg-red-50/40",
  },
  High: {
    badge: "border-orange-200 bg-orange-50 text-orange-700",
    text: "text-orange-700",
    dot: "bg-orange-500",
    bar: "bg-orange-500",
    rowHover: "hover:bg-orange-50/40",
  },
  Medium: {
    badge: "border-amber-200 bg-amber-50 text-amber-700",
    text: "text-amber-700",
    dot: "bg-amber-400",
    bar: "bg-amber-400",
    rowHover: "hover:bg-amber-50/30",
  },
  Low: {
    badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
    bar: "bg-emerald-500",
    rowHover: "hover:bg-emerald-50/30",
  },
  Pass: {
    badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
    bar: "bg-emerald-500",
    rowHover: "hover:bg-emerald-50/30",
  },
  Incomplete: {
    badge: "border-gray-200 bg-gray-50 text-gray-500",
    text: "text-gray-400",
    dot: "bg-gray-300",
    bar: "bg-gray-300",
    rowHover: "hover:bg-gray-50/60",
  },
};

function getRiskStyle(level: string): RiskStyle {
  return RISK_STYLES[level] ?? RISK_STYLES.Incomplete;
}

const RISK_ORDER: Record<string, number> = {
  Critical: 0,
  High: 1,
  Medium: 2,
  Low: 3,
  Pass: 4,
  Incomplete: 5,
};

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-PH", {
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso.slice(0, 10);
  }
}

/* ─── Detail modal ───────────────────────────────────────────── */

function ScanDetailModal({
  scan,
  onClose,
}: {
  scan: ScanEntry;
  onClose: () => void;
}) {
  const style = getRiskStyle(scan.risk_level);
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    // Move focus into modal
    modalRef.current?.focus();
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    // Backdrop: overflow-y-auto so the modal scrolls into view at any zoom level
    // instead of being clipped. min-h-full + items-center keeps it centered when
    // it fits, and top-aligned + scrollable when it overflows.
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/30 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="flex min-h-full items-center justify-center p-4 py-8">
        <motion.div
          ref={modalRef}
          tabIndex={-1}
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 16 }}
          transition={{ duration: 0.22, ease: editorialEase }}
          className="relative w-full max-w-lg bg-white border border-gray-200 rounded-[10px] shadow-[0_24px_80px_rgba(0,0,0,0.20)] flex flex-col outline-none"
          onClick={(e) => e.stopPropagation()}
        >
          {/* macOS title bar — shrink-0 so it's always pinned and never clipped */}
          <div className="relative flex items-center h-11 px-4 border-b border-gray-200 bg-[#f3f3f3] rounded-t-[10px] shrink-0">
            <div className="flex items-center gap-2 z-10">
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] ring-1 ring-black/10 hover:opacity-80 transition-opacity focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-accent"
              />
              <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] ring-1 ring-black/10" aria-hidden />
              <span className="w-3.5 h-3.5 rounded-full bg-[#28c840] ring-1 ring-black/10" aria-hidden />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-xs font-medium text-gray-400 select-none font-mono tracking-wide">
                ronway · scan/{scan.id}
              </span>
            </div>
            {/* Explicit × close button — always reachable, complements the traffic light */}
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="ml-auto z-10 w-7 h-7 rounded-md flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Scrollable body — grows up to viewport minus title bar, then scrolls */}
          <div className="p-6 space-y-5 overflow-y-auto"
            style={{ maxHeight: "calc(100dvh - 10rem)" }}
          >
          {/* Domain header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">
                Target Domain
              </p>
              <h2
                id="modal-title"
                className="font-display text-2xl font-light tracking-tight text-foreground leading-tight"
              >
                {scan.target_domain}
              </h2>
              <p className="text-sm text-muted-foreground mt-2 font-mono tracking-wide">
                Port {scan.target_port} · Scanned {formatDate(scan.scanned_at)}
                {scan.harvest_risk && (
                  <span className="ml-2 text-red-600 font-medium">
                    · Harvest risk detected
                  </span>
                )}
              </p>
            </div>
            <span
              className={`inline-flex items-center px-2.5 py-1 text-xs font-mono tracking-widest uppercase border font-medium ${style.badge} self-start shrink-0 mt-1`}
            >
              {scan.risk_level}
            </span>
          </div>

          {/* Blurred data preview */}
          <div
            className="relative border border-gray-200 rounded-sm overflow-hidden"
            aria-hidden="true"
          >
            <div
              className="p-5 space-y-4 select-none pointer-events-none"
              style={{ filter: "blur(5px)" }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Risk Score
                </span>
                <span className={`font-display text-5xl tracking-tighter tabular-nums ${style.text}`}>
                  {scan.risk_score}
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-sm overflow-hidden">
                <div
                  className={`h-full ${style.bar}`}
                  style={{ width: `${scan.risk_score}%` }}
                />
              </div>
              <div className="grid grid-cols-3 gap-2 pt-1">
                {[
                  { label: "Vulnerabilities", value: scan.vulnerability_count },
                  { label: "Harvest Risk", value: scan.harvest_risk ? "Yes" : "No" },
                  { label: "PQC Ready", value: scan.quantum_ready ? "Yes" : "No" },
                ].map((item) => (
                  <div key={item.label} className="border border-gray-100 rounded-sm p-3">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1.5">
                      {item.label}
                    </p>
                    <p className="font-display text-xl tracking-tight text-foreground">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-1.5 pt-1">
                <p className="text-xs font-mono text-muted-foreground">
                  TLS cipher suite: ████████████████ · Key exchange: ██████
                </p>
                <p className="text-xs font-mono text-muted-foreground">
                  Certificate issuer: ████████████████████ · Remaining: ████ days
                </p>
                <p className="text-xs font-mono text-muted-foreground">
                  Signing algorithm: ██████████ · Key size: ████ bits
                </p>
              </div>
            </div>

            {/* Lock overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-white/65 backdrop-blur-[3px]">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 shadow-sm flex items-center justify-center">
                  <Lock className="w-5 h-5 text-foreground" />
                </div>
                <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground font-medium">
                  Full report locked
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-accent/40 bg-accent/5 rounded-sm px-5 py-5">
            <p className="text-xs font-mono tracking-widest uppercase text-accent mb-2">
              Unlock detailed intelligence
            </p>
            <p className="text-sm text-foreground leading-relaxed mb-4">
              The complete vulnerability breakdown, algorithm-mapped exposure
              map, and written remediation brief are delivered in the Ronway
              consultation.
            </p>
            <ul className="space-y-2 mb-5" aria-label="What you get">
              {[
                "Complete TLS vulnerability breakdown",
                "Algorithm-mapped cryptographic exposure",
                "Harvest-now-decrypt-later risk analysis",
                "Written remediation brief delivered in 7 days",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-11 px-5 text-sm font-medium tracking-tight w-full"
            >
              <a
                href="https://calendly.com/bpxailabs/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="w-4 h-4" aria-hidden />
                Book a consultation
                <ArrowUpRight className="w-4 h-4" aria-hidden />
              </a>
            </Button>
          </div>
          </div>{/* end scrollable body */}
        </motion.div>
      </div>{/* end centering wrapper */}
    </motion.div>
  );
}

/* ─── Scan row ───────────────────────────────────────────────── */

function ScanRow({
  scan,
  onClick,
  index,
}: {
  scan: ScanEntry;
  onClick: (s: ScanEntry) => void;
  index: number;
}) {
  const style = getRiskStyle(scan.risk_level);
  const isIncomplete = scan.risk_level === "Incomplete";

  return (
    <tr
      className={`border-b border-gray-100 last:border-0 ${style.rowHover} cursor-pointer group transition-colors focus-within:bg-gray-50`}
      onClick={() => onClick(scan)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(scan);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View scan details for ${scan.target_domain}: ${scan.risk_level} risk${isIncomplete ? "" : `, score ${scan.risk_score} out of 100`}, ${scan.vulnerability_count} vulnerabilities`}
    >
      {/* Risk dot */}
      <td className="pl-4 pr-2 py-3 w-6">
        <span
          className={`inline-block w-2.5 h-2.5 rounded-full shrink-0 ${style.dot}`}
          aria-hidden
        />
      </td>

      {/* Domain */}
      <td className="px-2 py-3 min-w-0">
        <span className="font-mono text-sm text-foreground group-hover:text-accent transition-colors truncate block max-w-[180px] sm:max-w-none">
          {scan.target_domain}
        </span>
      </td>

      {/* Risk badge */}
      <td className="hidden sm:table-cell px-2 py-3">
        <span
          className={`inline-flex items-center px-2 py-0.5 text-xs font-mono tracking-wider uppercase border font-medium ${style.badge}`}
        >
          {scan.risk_level}
        </span>
      </td>

      {/* Score */}
      <td className="px-2 py-3 text-right">
        <span className={`font-mono text-sm tabular-nums font-semibold ${style.text}`}>
          {isIncomplete ? "—" : scan.risk_score}
        </span>
      </td>

      {/* Vuln count */}
      <td className="hidden md:table-cell px-2 py-3 text-center">
        <span className="inline-flex items-center gap-1.5 text-sm font-mono text-muted-foreground">
          <ShieldAlert className="w-3.5 h-3.5 shrink-0" aria-hidden />
          {scan.vulnerability_count}
        </span>
      </td>

      {/* PQC indicator */}
      <td className="hidden lg:table-cell px-2 py-3 text-center">
        <span
          className={`text-xs font-mono tracking-wider font-medium ${
            scan.quantum_ready ? "text-emerald-700" : "text-gray-400"
          }`}
        >
          {scan.quantum_ready ? "PQC ✓" : "PQC ✗"}
        </span>
      </td>

      {/* Date */}
      <td className="hidden xl:table-cell px-2 py-3 text-right">
        <span className="text-xs font-mono text-muted-foreground">
          {formatDate(scan.scanned_at)}
        </span>
      </td>

      {/* Arrow */}
      <td className="pr-4 pl-2 py-3 w-7">
        <ChevronRight
          className="w-4 h-4 text-gray-300 group-hover:text-accent transition-colors"
          aria-hidden
        />
      </td>
    </tr>
  );
}

/* ─── Category group ─────────────────────────────────────────── */

function CategoryGroup({
  name,
  scans,
  onScanClick,
  groupIndex,
}: {
  name: string;
  scans: ScanEntry[];
  onScanClick: (s: ScanEntry) => void;
  groupIndex: number;
}) {
  const criticalCount = scans.filter((s) => s.risk_level === "Critical").length;
  const highCount = scans.filter((s) => s.risk_level === "High").length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: editorialEase, delay: groupIndex * 0.04 }}
      className="border border-gray-200 rounded-sm overflow-hidden shadow-sm"
    >
      {/* Group header */}
      <div className="flex items-center justify-between px-4 py-3.5 bg-[#f7f7f7] border-b border-gray-200">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-foreground tracking-tight">
            {name}
          </span>
          <span className="text-xs font-mono text-muted-foreground">
            {scans.length} domain{scans.length !== 1 ? "s" : ""}
          </span>
        </div>
        <div className="flex items-center gap-2" aria-label="Risk summary">
          {criticalCount > 0 && (
            <span
              className="inline-flex items-center text-xs font-mono tracking-wider uppercase text-red-700 border border-red-200 bg-red-50 px-2 py-0.5 font-medium"
              aria-label={`${criticalCount} critical`}
            >
              {criticalCount} critical
            </span>
          )}
          {highCount > 0 && (
            <span
              className="inline-flex items-center text-xs font-mono tracking-wider uppercase text-orange-700 border border-orange-200 bg-orange-50 px-2 py-0.5 font-medium"
              aria-label={`${highCount} high risk`}
            >
              {highCount} high
            </span>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white">
        <table className="w-full min-w-[480px]" role="table">
          <thead>
            <tr className="border-b border-gray-100">
              <th scope="col" className="pl-4 pr-2 py-2 w-6" aria-hidden />
              <th
                scope="col"
                className="px-2 py-2 text-left text-xs font-mono uppercase tracking-widest text-muted-foreground font-normal"
              >
                Domain
              </th>
              <th
                scope="col"
                className="hidden sm:table-cell px-2 py-2 text-left text-xs font-mono uppercase tracking-widest text-muted-foreground font-normal"
              >
                Risk level
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-right text-xs font-mono uppercase tracking-widest text-muted-foreground font-normal"
              >
                Score
              </th>
              <th
                scope="col"
                className="hidden md:table-cell px-2 py-2 text-center text-xs font-mono uppercase tracking-widest text-muted-foreground font-normal"
              >
                Vulns
              </th>
              <th
                scope="col"
                className="hidden lg:table-cell px-2 py-2 text-center text-xs font-mono uppercase tracking-widest text-muted-foreground font-normal"
              >
                PQC
              </th>
              <th
                scope="col"
                className="hidden xl:table-cell px-2 py-2 text-right text-xs font-mono uppercase tracking-widest text-muted-foreground font-normal"
              >
                Scanned
              </th>
              <th scope="col" className="pr-4 pl-2 py-2 w-7" aria-hidden />
            </tr>
          </thead>
          <tbody>
            {scans.map((scan, i) => (
              <ScanRow
                key={scan.id}
                scan={scan}
                onClick={onScanClick}
                index={i}
              />
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

/* ─── Stats bar ──────────────────────────────────────────────── */

function StatsBar({ scans }: { scans: ScanEntry[] }) {
  const critical = scans.filter((s) => s.risk_level === "Critical").length;
  const high = scans.filter((s) => s.risk_level === "High").length;
  const pqcReady = scans.filter((s) => s.quantum_ready).length;
  const gradeable = scans.filter(
    (s) => s.risk_level !== "Incomplete" && s.risk_score > 0,
  );
  const medianScore =
    gradeable.length > 0
      ? [...gradeable].sort((a, b) => a.risk_score - b.risk_score)[
          Math.floor(gradeable.length / 2)
        ].risk_score
      : 0;

  const stats: Array<{
    label: string;
    value: string;
    sub?: string;
    cls: string;
  }> = [
    {
      label: "Total Domains",
      value: scans.length.toString(),
      sub: "assessed",
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
      value: medianScore > 0 ? `${medianScore}` : "—",
      sub: "out of 100",
      cls: "text-foreground",
    },
  ];

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
          <p className={`font-display text-3xl tracking-tight ${stat.cls}`}>
            {stat.value}
          </p>
          {stat.sub && (
            <p className="text-xs text-muted-foreground mt-1 font-mono">
              {stat.sub}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Loading skeleton ───────────────────────────────────────── */

function LoadingState() {
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
              style={{ width: `${35 + (i * 23) % 45}%` }}
            />
            <span className="ml-auto w-20 h-4 bg-gray-100 rounded" />
            <span className="w-8 h-4 bg-gray-100 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Error state ────────────────────────────────────────────── */

function ErrorState({ message }: { message: string }) {
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

/* ─── Page ───────────────────────────────────────────────────── */

export default function RonwayScansPage() {
  const [scans, setScans] = React.useState<ScanEntry[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [selectedScan, setSelectedScan] = React.useState<ScanEntry | null>(null);

  React.useEffect(() => {
    fetch("/api/ronway-scans")
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data: ScanEntry[]) => {
        setScans(data);
        setLoading(false);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Failed to load scans");
        setLoading(false);
      });
  }, []);

  const grouped = React.useMemo(() => {
    const map = new Map<string, ScanEntry[]>();
    for (const scan of scans) {
      const cat = getCategory(scan.target_domain);
      const existing = map.get(cat) ?? [];
      existing.push(scan);
      map.set(cat, existing);
    }
    // Sort within each category: Critical → High → Medium → Low → Pass → Incomplete
    for (const list of map.values()) {
      list.sort(
        (a, b) =>
          (RISK_ORDER[a.risk_level] ?? 99) - (RISK_ORDER[b.risk_level] ?? 99),
      );
    }
    // Sort groups: most critical+high first, Other last
    return [...map.entries()].sort(([catA, scansA], [catB, scansB]) => {
      if (catA === "Other") return 1;
      if (catB === "Other") return -1;
      const urgentA = scansA.filter(
        (s) => s.risk_level === "Critical" || s.risk_level === "High",
      ).length;
      const urgentB = scansB.filter(
        (s) => s.risk_level === "Critical" || s.risk_level === "High",
      ).length;
      if (urgentB !== urgentA) return urgentB - urgentA;
      return scansB.length - scansA.length;
    });
  }, [scans]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ── Hero ── */}
      <section className="relative pt-32 lg:pt-40 pb-14 overflow-hidden">
        <div
          className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 top-0 h-[400px] radial-glow pointer-events-none"
          aria-hidden
        />

        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: editorialEase }}
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
            transition={{ duration: 0.5, ease: editorialEase }}
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
            transition={{ duration: 0.7, ease: editorialEase, delay: 0.08 }}
            className="font-display text-foreground text-[clamp(2.5rem,7vw,6rem)] font-light leading-[1.0] tracking-tighter mb-6 max-w-4xl"
          >
            TLS scan intelligence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: editorialEase, delay: 0.16 }}
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            Every domain scanned and graded by Ronway — BPxAI&apos;s
            post-quantum cryptography risk engine. Government, banking,
            education, and private sector all covered.
          </motion.p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="pb-20 lg:pb-28 border-t border-border/60">
        <div className="container mx-auto pt-10 lg:pt-14">
          {loading && <LoadingState />}
          {error && <ErrorState message={error} />}

          {!loading && !error && (
            <>
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: editorialEase }}
                className="mb-10"
              >
                <StatsBar scans={scans} />
              </motion.div>

              {/* Legend */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 px-1">
                <p className="text-xs font-mono tracking-wider text-muted-foreground">
                  Risk levels:
                </p>
                {(
                  [
                    ["Critical", "bg-red-500"],
                    ["High", "bg-orange-500"],
                    ["Medium", "bg-amber-400"],
                    ["Low", "bg-emerald-500"],
                    ["Incomplete", "bg-gray-300"],
                  ] as const
                ).map(([label, dot]) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground"
                  >
                    <span className={`w-2 h-2 rounded-full ${dot}`} aria-hidden />
                    {label}
                  </span>
                ))}
                <p className="text-xs font-mono text-muted-foreground ml-auto">
                  Click any row to see details
                </p>
              </div>

              {/* Category groups */}
              <div className="space-y-4">
                {grouped.map(([category, categorizedScans], i) => (
                  <CategoryGroup
                    key={category}
                    name={category}
                    scans={categorizedScans}
                    onScanClick={setSelectedScan}
                    groupIndex={i}
                  />
                ))}
              </div>

              <p className="mt-8 text-xs font-mono tracking-wider text-muted-foreground leading-relaxed">
                Public surface only · Graded by the Ronway Rust engine against
                NIST FIPS 203/204/205 · {scans.length} domains in database
              </p>
            </>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 lg:py-32 bg-surface border-t border-border/60 overflow-hidden">
        <div
          className="absolute inset-x-0 bottom-0 h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 100%, hsl(var(--accent) / 0.08) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: editorialEase }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-xs font-mono tracking-widest uppercase text-accent mb-6 font-medium">
              BPxAI · Ronway
            </p>
            <h2 className="font-display text-foreground text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.02] tracking-tighter mb-6">
              Is your domain on the list?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
              Run a free scan to see where you stand, or book a consultation
              for the complete cryptographic exposure map and remediation brief.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-12 px-8 text-sm font-medium tracking-tight"
              >
                <a
                  href="https://calendly.com/bpxailabs/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-4 h-4" aria-hidden />
                  Book consultation
                  <ArrowUpRight className="w-4 h-4" aria-hidden />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border border-border bg-transparent text-foreground hover:bg-muted/40 rounded-sm h-12 px-8 text-sm font-medium tracking-tight"
              >
                <Link href="/ronway">Free scanner</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Detail modal */}
      <AnimatePresence>
        {selectedScan && (
          <ScanDetailModal
            scan={selectedScan}
            onClose={() => setSelectedScan(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
