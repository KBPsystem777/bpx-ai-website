"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  FileKey,
  Fingerprint,
  Lock,
  RadioTower,
  ShieldAlert,
  ShieldCheck,
  TerminalSquare,
  Unlock,
  AlertTriangle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

const editorialEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: editorialEase },
  viewport: { once: true, margin: "-80px" },
};

const scanSteps = [
  "Resolving DNS",
  "TLS handshake",
  "Cipher suite enumeration",
  "Certificate chain analysis",
  "Signing algorithm detection",
  "Key-exchange protocol assessment",
];

const howItWorks = [
  { number: "01", title: "Scan", description: "Paste a URL. Sixty seconds." },
  { number: "02", title: "Review", description: "Score, grade, three findings." },
  { number: "03", title: "Book", description: "Full exposure map. Written brief in seven days." },
];

const whatWeCheck = [
  { icon: RadioTower, title: "TLS Configuration" },
  { icon: FileKey, title: "Certificate Chain" },
  { icon: Fingerprint, title: "Signing Algorithms" },
  { icon: ShieldCheck, title: "Key Exchange" },
  { icon: Lock, title: "Security Headers" },
  { icon: ShieldAlert, title: "PQC Readiness" },
];

type ScanStatus = "idle" | "scanning" | "complete" | "error";

type FindingStatusKind = "safe" | "warning" | "critical";

// Mirrors the Rust `RiskLevel` enum (serialized as bare strings). `Unknown`
// is what the engine reports when nothing answered and it could not grade
// the endpoint.
type RiskLevel = "Critical" | "High" | "Medium" | "Low" | "Pass" | "Unknown";

type Finding = {
  status: FindingStatusKind;
  code: string;
  component: string;
  label: string;
  detail: string;
};

// The public, free-tier projection returned by `POST /api/scan`
// (`PublicScanReport` in ronway-scanner). Only the fields the page reads are
// typed here — extra JSON keys (upgrade, cvss, etc.) are ignored at parse time.
type ScanReport = {
  target: {
    domain: string;
    ip_address: string | null;
    port: number;
    scanned_at: string;
    scan_duration_ms: number;
  };
  risk_score: {
    value: number;
    level: RiskLevel;
    summary: string;
    harvest_risk: boolean;
  };
  quantum_ready: boolean;
  summary: string;
  tls: {
    protocol_version: string;
    protocol_vulnerable: boolean;
    cipher_suite: string;
    cipher_vulnerable: boolean;
    key_exchange: string;
    key_exchange_vulnerable: boolean;
  } | null;
  certificate: {
    subject: string;
    issuer: string;
    key_algorithm: string;
    key_algorithm_vulnerable: boolean;
    signature_algorithm: string;
    signature_algorithm_vulnerable: boolean;
    days_remaining: number;
    is_expired: boolean;
    is_self_signed: boolean;
  } | null;
  http: {
    hsts_enabled: boolean;
    csp_present: boolean;
    server_header: string | null;
  } | null;
  vulnerabilities: Array<{
    id: string;
    title: string;
    description: string;
    severity: RiskLevel;
  }>;
  // Free-tier remediation preview + count of the steps held back for the
  // paid engagement.
  recommended_actions: string[];
  additional_recommendations: number;
};

type ScanView = {
  findings: Finding[];
  lockedTitles: string[];
  lockedExtraCount: number;
};

const API_URL = "https://ronway-api.bpxai.com";

const STEP_INTERVAL_MS = 380;

export default function RonwayPage() {
  const [url, setUrl] = React.useState("");
  const [status, setStatus] = React.useState<ScanStatus>("idle");
  const [stepIndex, setStepIndex] = React.useState(0);
  const [displayScore, setDisplayScore] = React.useState(0);
  const [report, setReport] = React.useState<ScanReport | null>(null);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const unreachable = report ? isUnreachable(report) : false;
  // Resilience is the inverse of the engine's risk value. An unreachable
  // scan has no gradeable posture, so it stays at zero and the UI shows "—".
  const targetScore = report && !unreachable ? 100 - report.risk_score.value : 0;

  // Step animation while scanning — visual only. Holds at the last step
  // until the real fetch resolves so the user never sees the bar finish
  // before results land.
  React.useEffect(() => {
    if (status !== "scanning") return;
    const id = window.setInterval(() => {
      setStepIndex((i) => Math.min(i + 1, scanSteps.length - 1));
    }, STEP_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [status]);

  // Score count-up on completion.
  React.useEffect(() => {
    if (status !== "complete") return;
    let raf = 0;
    const start = performance.now();
    const duration = 900;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplayScore(Math.round(targetScore * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [status, targetScore]);

  async function handleScan(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = url.trim();
    if (!trimmed) return;

    setStatus("scanning");
    setStepIndex(0);
    setDisplayScore(0);
    setReport(null);
    setErrorMessage(null);

    try {
      const data = await runScan(trimmed);
      // Snap the progress bar to 100% the moment data arrives.
      setStepIndex(scanSteps.length);
      setReport(data);
      setStatus("complete");
    } catch (e) {
      setErrorMessage(humanError(e));
      setStatus("error");
    }
  }

  function handleReset() {
    setStatus("idle");
    setStepIndex(0);
    setDisplayScore(0);
    setReport(null);
    setErrorMessage(null);
  }

  const grade = unreachable ? "—" : scoreToGrade(displayScore);
  const view: ScanView = report
    ? deriveScanView(report)
    : { findings: [], lockedTitles: [], lockedExtraCount: 0 };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ───────────── HERO ───────────── */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 top-0 h-[600px] radial-glow pointer-events-none"
          aria-hidden
        />

        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: editorialEase }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-accent font-mono">
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent"
                aria-hidden
              />
              Ronway Scanner
            </span>
            <span className="hidden sm:inline-block text-[11px] tracking-widest uppercase text-muted-foreground font-mono">
              / Public PQC surface assessment
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: editorialEase, delay: 0.08 }}
            className="font-display text-foreground text-[clamp(2.5rem,7vw,6rem)] font-light leading-[1.0] tracking-tighter mb-8 max-w-4xl"
          >
            Know your quantum risk.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: editorialEase, delay: 0.18 }}
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12"
          >
            The first Philippine-developed PQC scanner. Free at point of use.
          </motion.p>

          {/* ─────────── SCANNER ─────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: editorialEase, delay: 0.28 }}
            className="dark border border-border/80 rounded-sm bg-surface overflow-hidden shadow-[0_24px_70px_-24px_rgba(11,15,26,0.45)]"
          >
            {/* Terminal header bar */}
            <div className="flex items-center justify-between px-4 lg:px-5 py-3 border-b border-border/70 bg-background/60">
              <div className="flex items-center gap-2.5">
                <TerminalSquare
                  className="w-3.5 h-3.5 text-accent"
                  aria-hidden
                />
                <span className="text-[11px] font-mono tracking-wider text-muted-foreground">
                  ronway · scan
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-mono text-muted-foreground tracking-wider">
                  v0.1.0-beta
                </span>
                {(status === "complete" || status === "error") && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-[11px] font-mono tracking-wider text-accent hover:text-accent/80 transition-colors"
                  >
                    new scan ↻
                  </button>
                )}
              </div>
            </div>

            {/* Scanner body */}
            <div className="p-6 lg:p-8">
              {status === "idle" && (
                <ScannerIdle url={url} setUrl={setUrl} onSubmit={handleScan} />
              )}
              {status === "scanning" && <ScannerProgress step={stepIndex} />}
              {status === "complete" && report && (
                <ScannerResult
                  report={report}
                  displayScore={displayScore}
                  grade={grade}
                  view={view}
                  unreachable={unreachable}
                />
              )}
              {status === "error" && (
                <ScannerError
                  message={errorMessage ?? "Unknown error"}
                  onRetry={handleReset}
                />
              )}
            </div>
          </motion.div>

          <p className="mt-5 text-[11px] font-mono tracking-wider text-muted-foreground">
            Public surface only · No signup · Free at point of use ·
            Limited-release beta
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-32 lg:py-40 bg-surface border-t border-border/60">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="font-display text-foreground text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.02] tracking-tighter mb-6">
              Three steps.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Scan. Review. Book.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
            {howItWorks.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: editorialEase, delay: i * 0.08 }}
                viewport={{ once: true, margin: "-40px" }}
                className="bg-background p-10 lg:p-12 flex flex-col min-h-[260px]"
              >
                <span className="font-mono text-[11px] tracking-widest uppercase text-accent mb-10">
                  {step.number}
                </span>
                <h3 className="font-display text-foreground text-3xl tracking-tight font-light mb-4">
                  {step.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE CHECK */}
      <section className="relative py-32 lg:py-40 bg-background border-t border-border/60">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="font-display text-foreground text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.02] tracking-tighter mb-6">
              Scan coverage.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The public cryptographic surface.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden max-w-5xl mx-auto">
            {whatWeCheck.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: editorialEase, delay: (i % 3) * 0.06 }}
                  viewport={{ once: true, margin: "-40px" }}
                  className="bg-surface p-8 lg:p-10 flex flex-col items-center text-center min-h-[180px] justify-center"
                >
                  <Icon className="w-6 h-6 text-accent mb-6" aria-hidden />
                  <h3 className="font-display text-foreground text-lg lg:text-xl tracking-tight font-light">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-[80vh] flex items-center py-32 lg:py-40 bg-background border-t border-border/60 overflow-hidden">
        <div
          className="absolute inset-x-0 bottom-0 h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 100%, hsl(var(--accent) / 0.10) 0%, transparent 60%)",
          }}
          aria-hidden
        />

        <div className="container mx-auto relative">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-foreground text-[clamp(2.5rem,7vw,6rem)] font-light leading-[1.0] tracking-tighter mb-8">
              Beyond the free scan.
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-14 max-w-xl mx-auto">
              The full exposure map. Written brief in seven days.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-12 px-8 text-[13px] font-medium tracking-tight"
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
                className="border border-border bg-transparent text-foreground hover:bg-muted/40 rounded-sm h-12 px-8 text-[13px] font-medium tracking-tight"
              >
                <Link href="/quantum">
                  Quantum Practice
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ─────────────────────────────────────────────────────────────
 *  API + derivation helpers
 * ────────────────────────────────────────────────────────── */

async function runScan(rawTarget: string): Promise<ScanReport> {
  const controller = new AbortController();
  // Soft client-side timeout — server already enforces 30s.
  const timer = window.setTimeout(() => controller.abort(), 35_000);
  try {
    const resp = await fetch(`${API_URL}/api/scan`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target: rawTarget }),
      signal: controller.signal,
    });
    if (!resp.ok) {
      const body = await resp
        .json()
        .catch(() => null as { message?: string; error?: string } | null);
      const detail = body?.message || body?.error || `HTTP ${resp.status}`;
      throw new ScanError(resp.status, detail);
    }
    return (await resp.json()) as ScanReport;
  } finally {
    window.clearTimeout(timer);
  }
}

class ScanError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

function humanError(err: unknown): string {
  if (err instanceof ScanError) {
    if (err.status === 400) return err.message;
    if (err.status === 429)
      return "Rate limit reached — try again in a minute.";
    if (err.status === 504)
      return "The scan took too long. The target may be unresponsive.";
    if (err.status >= 500) return "Scanner is unavailable. Please try again.";
    return err.message;
  }
  if (err instanceof DOMException && err.name === "AbortError")
    return "The scan timed out. Try again or pick a different target.";
  if (err instanceof TypeError)
    return "Could not reach the scanner. Check your connection and retry.";
  return err instanceof Error ? err.message : "Unknown error.";
}

function scoreToGrade(score: number): "A" | "B" | "C" | "D" | "F" {
  if (score >= 80) return "A";
  if (score >= 65) return "B";
  if (score >= 50) return "C";
  if (score >= 35) return "D";
  return "F";
}

function severityToStatus(sev: RiskLevel): FindingStatusKind {
  if (sev === "Critical" || sev === "High") return "critical";
  if (sev === "Medium" || sev === "Low" || sev === "Unknown") return "warning";
  return "safe";
}

function severityRank(sev: RiskLevel): number {
  switch (sev) {
    case "Critical":
      return 4;
    case "High":
      return 3;
    case "Medium":
      return 2;
    case "Low":
      return 1;
    default:
      return 0;
  }
}

// Map a vulnerability id (e.g. "TLS_LEGACY_VERSION", "RSA_CERTIFICATE",
// "SHA1_IN_CHAIN", "NO_HSTS") to the public-surface component it concerns.
function componentForVuln(id: string): string {
  const u = id.toUpperCase();
  if (u.includes("SIGNATURE") || u.includes("SHA1")) return "Signature";
  if (u.startsWith("CERT") || u.includes("CERTIFICATE")) return "Certificate";
  if (u.startsWith("TLS")) return "TLS";
  if (
    u.includes("HSTS") ||
    u.includes("CSP") ||
    u.includes("HEADER") ||
    u.includes("SERVER")
  )
    return "Headers";
  if (
    u.includes("KEY") ||
    u.includes("EXCHANGE") ||
    u.includes("DH") ||
    u.includes("KX")
  )
    return "Key exchange";
  return "Crypto";
}

// A fully unreachable scan can't be graded — the engine reports
// `risk_score.level === "Unknown"` with a zero value and no probe data. Never
// render that as a perfect score.
function isUnreachable(report: ScanReport): boolean {
  return (
    report.risk_score.level === "Unknown" ||
    (!report.tls && !report.certificate && !report.http)
  );
}

/**
 * Build the free-tier view. Surfaces up to three findings — a positive
 * opener when there's something genuinely good (TLS 1.3), then the
 * highest-severity vulnerabilities. Everything past that, plus the
 * remediation roadmap, is held behind the consultation paywall.
 */
function deriveScanView(report: ScanReport): ScanView {
  const findings: Finding[] = [];

  // Positive opener — only when we actually have something to celebrate.
  if (
    report.tls &&
    !report.tls.protocol_vulnerable &&
    report.tls.protocol_version.startsWith("TLSv1.3")
  ) {
    findings.push({
      status: "safe",
      code: "TLS_1_3",
      component: "TLS",
      label: `${report.tls.protocol_version} negotiated`,
      detail: "Server supports the modern transport handshake.",
    });
  }

  // Sort vulns: Critical > High > Medium > Low.
  const ranked = [...report.vulnerabilities].sort(
    (a, b) => severityRank(b.severity) - severityRank(a.severity),
  );

  let shownVulns = 0;
  for (const v of ranked) {
    if (findings.length >= 3) break;
    findings.push({
      status: severityToStatus(v.severity),
      code: v.id,
      component: componentForVuln(v.id),
      label: v.title,
      detail: v.description,
    });
    shownVulns += 1;
  }

  // Locked teaser = the real vulnerabilities we didn't surface, then the
  // remediation action headlines the engine previews for the free tier.
  const lockedTitles = [
    ...ranked.slice(shownVulns).map((v) => v.title),
    ...report.recommended_actions,
  ];

  return {
    findings,
    lockedTitles,
    lockedExtraCount: report.additional_recommendations,
  };
}

/* ─────────────────────────────────────────────────────────────
 *  Scanner sub-components
 * ────────────────────────────────────────────────────────── */

function ScannerIdle({
  url,
  setUrl,
  onSubmit,
}: {
  url: string;
  setUrl: (s: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="ronway-url"
          className="block text-[11px] font-mono tracking-widest uppercase text-muted-foreground mb-3"
        >
          Target URL
        </label>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1 flex items-center gap-3 border border-border focus-within:border-accent transition-colors bg-background rounded-sm px-4 h-12">
            <span className="font-mono text-sm text-accent shrink-0">
              {">"}
            </span>
            <input
              id="ronway-url"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.gov.ph"
              className="flex-1 bg-transparent text-sm font-mono text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={!url.trim()}
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-12 px-7 text-[13px] font-medium tracking-tight disabled:opacity-40 sm:min-w-[140px]"
          >
            Scan
            <ChevronRight className="w-4 h-4" aria-hidden />
          </Button>
        </div>
      </div>

      <div className="pt-4 border-t border-border/60 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono tracking-wider text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full bg-accent"
            aria-hidden
          />
          ENGINE: Rust 1.78 · stable
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full bg-muted-foreground/80"
            aria-hidden
          />
          AGAINST: NIST FIPS 203 / 204 / 205
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full bg-muted-foreground/80"
            aria-hidden
          />
          AVG SCAN: 38s
        </span>
      </div>
    </form>
  );
}

function ScannerProgress({ step }: { step: number }) {
  const totalSteps = scanSteps.length;
  const completed = Math.min(step, totalSteps);
  const percent = Math.round((completed / totalSteps) * 100);

  return (
    <div className="font-mono text-sm">
      <div className="space-y-1.5 mb-6">
        {scanSteps.map((label, i) => {
          const done = i < completed;
          const active = i === completed;
          const pending = i > completed;
          return (
            <div
              key={i}
              className={`flex items-center justify-between gap-4 ${
                pending ? "text-muted-foreground/60" : "text-foreground/90"
              }`}
            >
              <span className="flex items-center gap-3 min-w-0">
                <span
                  className={`text-[11px] tracking-widest ${
                    done ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <span className="text-sm truncate">{label}</span>
                <span
                  className="hidden sm:inline-block flex-1 border-b border-dotted border-border/70 mx-1"
                  aria-hidden
                />
              </span>
              <span
                className={`text-[11px] tracking-widest uppercase shrink-0 ${
                  done
                    ? "text-accent"
                    : active
                      ? "text-foreground"
                      : "text-muted-foreground/60"
                }`}
              >
                {done ? "ok" : active ? "…" : "—"}
              </span>
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="border-t border-border/60 pt-5">
        <div className="flex items-center justify-between mb-2 text-[11px] tracking-widest uppercase text-muted-foreground">
          <span>Progress</span>
          <span className="text-accent">{percent}%</span>
        </div>
        <div className="h-1 bg-border/60 rounded-sm overflow-hidden">
          <div
            className="h-full bg-accent transition-[width] duration-300 ease-linear"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function ScannerResult({
  report,
  displayScore,
  grade,
  view,
  unreachable,
}: {
  report: ScanReport;
  displayScore: number;
  grade: string;
  view: ScanView;
  unreachable: boolean;
}) {
  const target = report.target.domain;
  const dateLabel = report.target.scanned_at.slice(0, 10);

  // Nothing answered on the public surface — show an honest "incomplete"
  // result rather than a misleading perfect score.
  if (unreachable) {
    return (
      <UnreachableResult report={report} target={target} dateLabel={dateLabel} />
    );
  }

  const { findings, lockedTitles, lockedExtraCount } = view;
  const lockedCount = lockedTitles.length + lockedExtraCount;
  const totalFindings = findings.length + lockedCount;

  return (
    <div className="space-y-8">
      {/* Score band */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
        <div className="bg-background p-6">
          <p className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground mb-3">
            Resilience Score
          </p>
          <div className="flex items-baseline gap-3 mb-4">
            <span className="font-display text-6xl lg:text-7xl tracking-tighter text-foreground tabular-nums">
              {displayScore}
            </span>
            <span className="font-mono text-sm text-muted-foreground">
              / 100
            </span>
          </div>
          <div
            className="h-1.5 bg-border/60 rounded-sm overflow-hidden"
            aria-hidden
          >
            <div
              className="h-full bg-accent transition-[width] duration-700 ease-out"
              style={{ width: `${displayScore}%` }}
            />
          </div>
          {report.risk_score.harvest_risk && (
            <p className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-destructive uppercase">
              <AlertTriangle className="w-3 h-3" aria-hidden />
              Harvest-now-decrypt-later risk
            </p>
          )}
        </div>
        <div className="bg-background p-6">
          <p className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground mb-3">
            Grade
          </p>
          <span
            className={`font-display text-6xl tracking-tighter ${
              grade === "A"
                ? "text-accent"
                : grade === "F"
                  ? "text-destructive"
                  : "text-foreground"
            }`}
          >
            {grade}
          </span>
        </div>
        <div className="bg-background p-6 flex flex-col">
          <p className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground mb-3">
            Target
          </p>
          <span className="font-mono text-sm text-foreground break-all">
            {target || "unspecified"}
          </span>
          <span className="font-mono text-[11px] text-muted-foreground tracking-wider mt-auto pt-3">
            {dateLabel} · public surface
          </span>
        </div>
      </div>

      {/* Summary line straight from the engine */}
      {report.risk_score.summary && (
        <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-accent/50 pl-4">
          {report.risk_score.summary}
        </p>
      )}

      {/* Findings */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground">
            Findings · {findings.length} of {totalFindings} visible
          </p>
          <span className="text-[11px] font-mono tracking-widest uppercase text-accent">
            Public-surface only
          </span>
        </div>

        <ul className="border border-border/60 rounded-sm divide-y divide-border/60 overflow-hidden bg-background">
          {findings.length === 0 && (
            <li className="px-5 py-6 text-sm text-muted-foreground">
              No public-surface findings — the endpoint meets current
              post-quantum readiness guidance.
            </li>
          )}
          {findings.map((f, i) => (
            <li
              key={i}
              className="grid grid-cols-[20px_minmax(96px,128px)_1fr_100px] gap-4 items-start px-5 py-4"
            >
              <FindingIcon status={f.status} />
              <div className="min-w-0 pt-0.5">
                <p className="font-mono text-[11px] tracking-widest uppercase text-foreground/80 truncate">
                  {f.component}
                </p>
                <p className="font-mono text-[10px] tracking-wider text-muted-foreground truncate mt-0.5">
                  {f.code}
                </p>
              </div>
              <div>
                <p className="text-sm text-foreground font-medium leading-snug">
                  {f.label}
                </p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {f.detail}
                </p>
              </div>
              <FindingStatusBadge status={f.status} />
            </li>
          ))}

          {/* Locked findings — real remaining vulns + remediation roadmap */}
          {lockedCount > 0 && (
            <li className="relative px-5 py-5 bg-background">
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden
                style={{
                  background:
                    "linear-gradient(180deg, hsl(var(--background) / 0) 0%, hsl(var(--background) / 0.85) 60%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Lock
                    className="w-3.5 h-3.5 text-muted-foreground"
                    aria-hidden
                  />
                  <span className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground">
                    {lockedCount} more findings &amp; remediation steps — locked
                  </span>
                </div>
                <ul className="space-y-1.5 select-none">
                  {lockedTitles.map((label, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-muted-foreground/70 blur-[3px] hover:blur-[2px] transition-all"
                    >
                      <span className="font-mono text-[11px] tracking-widest uppercase shrink-0">
                        [{String(i + findings.length + 1).padStart(2, "0")}]
                      </span>
                      <span className="truncate">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )}
        </ul>
      </div>

      {/* Unlock CTA */}
      <div className="border border-accent/40 bg-accent/5 rounded-sm px-6 py-6 lg:px-8 lg:py-7 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        <div>
          <p className="text-[11px] font-mono tracking-widest uppercase text-accent mb-2">
            Unlock the full report
          </p>
          <p className="text-sm lg:text-base text-foreground font-medium leading-snug max-w-xl">
            The algorithm-mapped exposure detail, internal-surface
            walkthrough, and written remediation brief are delivered in the
            Ronway consultation.
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-11 px-6 text-[13px] font-medium tracking-tight shrink-0"
        >
          <a
            href="https://calendly.com/bpxailabs/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Unlock className="w-4 h-4" aria-hidden />
            Book consultation
            <ArrowUpRight className="w-4 h-4" aria-hidden />
          </a>
        </Button>
      </div>

      <p className="text-[11px] font-mono tracking-wider text-muted-foreground leading-relaxed">
        Live result · Ronway is in limited-release beta · Score derived from
        the Rust engine against the target endpoint · scan completed in{" "}
        {report.target.scan_duration_ms} ms
      </p>
    </div>
  );
}

function UnreachableResult({
  report,
  target,
  dateLabel,
}: {
  report: ScanReport;
  target: string;
  dateLabel: string;
}) {
  const reason = report.risk_score.summary || report.summary;

  return (
    <div className="space-y-8">
      {/* Score band — deliberately N/A so a dead host never reads as a pass */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
        <div className="bg-background p-6">
          <p className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground mb-3">
            Resilience Score
          </p>
          <div className="flex items-baseline gap-3 mb-4">
            <span className="font-display text-6xl lg:text-7xl tracking-tighter text-muted-foreground tabular-nums">
              —
            </span>
            <span className="font-mono text-sm text-muted-foreground">
              / 100
            </span>
          </div>
          <p className="text-[11px] font-mono tracking-wider text-muted-foreground uppercase">
            Not assessed
          </p>
        </div>
        <div className="bg-background p-6">
          <p className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground mb-3">
            Grade
          </p>
          <span className="font-display text-6xl tracking-tighter text-muted-foreground">
            N/A
          </span>
        </div>
        <div className="bg-background p-6 flex flex-col">
          <p className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground mb-3">
            Target
          </p>
          <span className="font-mono text-sm text-foreground break-all">
            {target || "unspecified"}
          </span>
          <span className="font-mono text-[11px] text-muted-foreground tracking-wider mt-auto pt-3">
            {dateLabel} · unreachable
          </span>
        </div>
      </div>

      <div className="flex items-start gap-3 border border-border/60 bg-muted/20 rounded-sm px-5 py-4">
        <RadioTower
          className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5"
          aria-hidden
        />
        <div>
          <p className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground mb-1">
            Assessment incomplete
          </p>
          <p className="text-sm text-foreground leading-snug">{reason}</p>
        </div>
      </div>

      <p className="text-[11px] font-mono tracking-wider text-muted-foreground leading-relaxed">
        Nothing answered on the public TLS surface, so no post-quantum posture
        could be graded. Confirm the host is reachable on port{" "}
        {report.target.port} and try again.
      </p>
    </div>
  );
}

function ScannerError({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <div className="space-y-5 font-mono text-sm">
      <div className="flex items-start gap-3 border border-destructive/40 bg-destructive/5 rounded-sm px-5 py-4">
        <AlertTriangle
          className="w-5 h-5 text-destructive shrink-0 mt-0.5"
          aria-hidden
        />
        <div>
          <p className="text-[11px] tracking-widest uppercase text-destructive mb-1">
            Scan failed
          </p>
          <p className="text-sm text-foreground leading-snug">{message}</p>
        </div>
      </div>
      <Button
        type="button"
        onClick={onRetry}
        className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-11 px-6 text-[13px] font-medium tracking-tight"
      >
        Try again
        <ChevronRight className="w-4 h-4" aria-hidden />
      </Button>
    </div>
  );
}

function FindingIcon({ status }: { status: FindingStatusKind }) {
  if (status === "safe")
    return (
      <CheckCircle2
        className="w-4 h-4 mt-0.5 text-accent"
        aria-hidden
      />
    );
  if (status === "warning")
    return (
      <ShieldAlert
        className="w-4 h-4 mt-0.5 text-foreground/80"
        aria-hidden
      />
    );
  return (
    <ShieldAlert
      className="w-4 h-4 mt-0.5 text-destructive"
      aria-hidden
    />
  );
}

function FindingStatusBadge({ status }: { status: FindingStatusKind }) {
  const map: Record<FindingStatusKind, { label: string; cls: string }> = {
    safe: { label: "Safe", cls: "text-accent border-accent/40" },
    warning: { label: "Warning", cls: "text-foreground border-border" },
    critical: {
      label: "Critical",
      cls: "text-destructive border-destructive/40",
    },
  };
  const m = map[status];
  return (
    <span
      className={`inline-flex items-center justify-center text-[11px] font-mono tracking-widest uppercase px-2 py-1 border ${m.cls} self-start`}
    >
      {m.label}
    </span>
  );
}
