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

const visibleFindings = [
  {
    status: "safe",
    code: "TLS_1_3",
    label: "TLS 1.3 negotiated",
    detail: "Server supports modern transport handshake.",
  },
  {
    status: "warning",
    code: "ECDHE_RSA",
    label: "ECDHE-RSA key exchange active",
    detail:
      "Pre-quantum elliptic-curve exchange — Shor-vulnerable on a CRQC.",
  },
  {
    status: "critical",
    code: "RSA_2048_SIG",
    label: "RSA-2048 signing in certificate chain",
    detail:
      "Quantum-vulnerable. NIST recommends migration to ML-DSA or SLH-DSA.",
  },
];

const lockedFindings = [
  "Cipher-suite ordering anomalies",
  "OCSP stapling configuration",
  "Certificate-chain depth & CA trust path",
  "HSTS, CSP, and transport-binding headers",
  "Static-key DH risk indicators",
  "Hybrid PQC negotiation readiness",
  "Recommended algorithm-by-algorithm remediation sequence",
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

type ScanStatus = "idle" | "scanning" | "complete";

const TARGET_SCORE = 42;

export default function RonwayPage() {
  const [url, setUrl] = React.useState("");
  const [status, setStatus] = React.useState<ScanStatus>("idle");
  const [stepIndex, setStepIndex] = React.useState(0);
  const [displayScore, setDisplayScore] = React.useState(0);

  // Step animation while scanning
  React.useEffect(() => {
    if (status !== "scanning") return;
    if (stepIndex >= scanSteps.length) {
      const t = setTimeout(() => setStatus("complete"), 350);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStepIndex((i) => i + 1), 380);
    return () => clearTimeout(t);
  }, [status, stepIndex]);

  // Score count-up on completion
  React.useEffect(() => {
    if (status !== "complete") return;
    let raf: number;
    const start = performance.now();
    const duration = 900;
    const animate = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplayScore(Math.round(TARGET_SCORE * eased));
      if (t < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [status]);

  function handleScan(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;
    setStatus("scanning");
    setStepIndex(0);
    setDisplayScore(0);
  }

  function handleReset() {
    setStatus("idle");
    setStepIndex(0);
    setDisplayScore(0);
  }

  const scoreGrade =
    displayScore >= 80
      ? "A"
      : displayScore >= 65
        ? "B"
        : displayScore >= 50
          ? "C"
          : displayScore >= 35
            ? "D"
            : "F";

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
            className="border border-border/80 rounded-sm bg-surface overflow-hidden shadow-[0_0_0_1px_hsl(var(--border)/0.3)]"
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
                  v0.4.2-beta
                </span>
                {status === "complete" && (
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
              {status === "complete" && (
                <ScannerResult
                  url={url}
                  displayScore={displayScore}
                  grade={scoreGrade}
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
  url,
  displayScore,
  grade,
}: {
  url: string;
  displayScore: number;
  grade: string;
}) {
  const target = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
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
            {new Date().toISOString().slice(0, 10)} · public surface
          </span>
        </div>
      </div>

      {/* Findings */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground">
            Findings · 3 of 10 visible
          </p>
          <span className="text-[11px] font-mono tracking-widest uppercase text-accent">
            Public-surface only
          </span>
        </div>

        <ul className="border border-border/60 rounded-sm divide-y divide-border/60 overflow-hidden bg-background">
          {visibleFindings.map((f, i) => (
            <li
              key={i}
              className="grid grid-cols-[20px_120px_1fr_100px] gap-4 items-start px-5 py-4"
            >
              <FindingIcon status={f.status} />
              <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase pt-0.5">
                {f.code}
              </span>
              <div>
                <p className="text-sm text-foreground font-medium leading-snug">
                  {f.label}
                </p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {f.detail}
                </p>
              </div>
              <FindingStatus status={f.status} />
            </li>
          ))}

          {/* Locked findings */}
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
                  7 additional findings — locked
                </span>
              </div>
              <ul className="space-y-1.5 select-none">
                {lockedFindings.map((label, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-muted-foreground/70 blur-[3px] hover:blur-[2px] transition-all"
                  >
                    <span className="font-mono text-[11px] tracking-widest uppercase">
                      [{String(i + 4).padStart(2, "0")}]
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
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
        Demonstration result · Ronway is in limited-release beta. Scan
        backend is mock. Production scoring derives from the live Rust engine
        against the target endpoint.
      </p>
    </div>
  );
}

function FindingIcon({ status }: { status: string }) {
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

function FindingStatus({ status }: { status: string }) {
  const map: Record<string, { label: string; cls: string }> = {
    safe: {
      label: "Safe",
      cls: "text-accent border-accent/40",
    },
    warning: {
      label: "Warning",
      cls: "text-foreground border-border",
    },
    critical: {
      label: "Critical",
      cls: "text-destructive border-destructive/40",
    },
  };
  const m = map[status] || map.warning;
  return (
    <span
      className={`inline-flex items-center justify-center text-[11px] font-mono tracking-widest uppercase px-2 py-1 border ${m.cls} self-start`}
    >
      {m.label}
    </span>
  );
}
