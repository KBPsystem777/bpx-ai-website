"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  TerminalSquare,
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

const threatStats = [
  { value: "Aug 2024", label: "NIST FIPS 203 / 204 / 205 finalized" },
  { value: "5–7 yrs", label: "Migration window" },
  { value: "Today", label: "Harvest-now-decrypt-later" },
];

const methodology = [
  { number: "01", title: "Discovery", description: "Cryptographic inventory and surface mapping." },
  { number: "02", title: "Exposure", description: "Algorithm-by-algorithm risk scoring." },
  { number: "03", title: "Architecture", description: "Hybrid PQC design and sequencing." },
  { number: "04", title: "Engineering", description: "Implementation, validation, cutover oversight." },
];

const standards = [
  { fips: "FIPS 203", algorithm: "ML-KEM", type: "Key Encapsulation", status: "Finalized" },
  { fips: "FIPS 204", algorithm: "ML-DSA", type: "Digital Signature", status: "Finalized" },
  { fips: "FIPS 205", algorithm: "SLH-DSA", type: "Hash-based Signature", status: "Finalized" },
  { fips: "FIPS 206", algorithm: "FN-DSA", type: "Digital Signature", status: "Draft" },
];

export default function QuantumPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-[700px] radial-glow pointer-events-none" aria-hidden />

        <div className="container mx-auto relative">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: editorialEase }}
              className="flex items-center justify-center gap-2 mb-10"
            >
              <span className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-accent font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden />
                Quantum Practice
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: editorialEase, delay: 0.08 }}
              className="font-display text-foreground text-[clamp(3rem,8vw,7rem)] font-light leading-[0.98] tracking-tighter mb-10"
            >
              The cryptographic transition of the decade.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: editorialEase, delay: 0.18 }}
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-14 max-w-2xl mx-auto"
            >
              Discovery, architecture, and engineering for institutional PQC migration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: editorialEase, delay: 0.28 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-12 px-8 text-[13px] font-medium tracking-tight"
              >
                <Link href="/#contact">
                  Brief our partners
                  <ArrowUpRight className="w-4 h-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border border-border bg-transparent text-foreground hover:bg-muted/40 rounded-sm h-12 px-8 text-[13px] font-medium tracking-tight"
              >
                <Link href="/ronway">
                  <TerminalSquare className="w-4 h-4" aria-hidden />
                  Scan with Ronway
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="relative min-h-[80vh] flex items-center py-32 lg:py-40 bg-surface border-t border-border/60">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="font-display text-foreground text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.02] tracking-tighter mb-6">
              Pre-2030 cryptography is end-of-life.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Migration windows run five to seven years. Recorded traffic is already exposed.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden max-w-5xl mx-auto"
          >
            {threatStats.map((stat, i) => (
              <div key={i} className="bg-background p-10 lg:p-12 text-center">
                <p className="font-display text-3xl lg:text-4xl text-accent tracking-tight mb-4">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="relative py-32 lg:py-40 bg-background border-t border-border/60">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center mb-20 lg:mb-24">
            <h2 className="font-display text-foreground text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.02] tracking-tighter mb-6">
              Four phases.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discovery before prescription.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
            {methodology.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: editorialEase, delay: i * 0.06 }}
                viewport={{ once: true, margin: "-40px" }}
                className="bg-surface p-10 lg:p-12 flex flex-col min-h-[280px]"
              >
                <span className="text-[11px] tracking-widest uppercase text-accent font-mono mb-10">
                  {phase.number}
                </span>
                <h3 className="font-display text-foreground text-2xl lg:text-3xl tracking-tight font-light mb-4">
                  {phase.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="relative py-32 lg:py-40 bg-surface border-t border-border/60">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="font-display text-foreground text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.02] tracking-tighter mb-6">
              The standards.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              NIST FIPS 203 / 204 / 205 — finalized August 2024.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: editorialEase }}
            viewport={{ once: true, margin: "-40px" }}
            className="max-w-5xl mx-auto border border-border/60 rounded-sm overflow-hidden bg-background"
          >
            <div className="hidden md:grid grid-cols-[140px_140px_1fr_140px] gap-6 px-8 py-5 border-b border-border/60 text-[11px] tracking-widest uppercase text-muted-foreground font-mono">
              <span>Standard</span>
              <span>Algorithm</span>
              <span>Type</span>
              <span>Status</span>
            </div>

            {standards.map((row, i) => (
              <div
                key={i}
                className={`md:grid md:grid-cols-[140px_140px_1fr_140px] gap-6 px-8 py-6 items-center border-b border-border/60 last:border-b-0 ${
                  row.status === "Draft" ? "opacity-60" : ""
                }`}
              >
                <span className="block md:inline font-mono text-sm text-foreground font-medium">
                  {row.fips}
                </span>
                <span className="block md:inline font-mono text-sm text-accent">
                  {row.algorithm}
                </span>
                <span className="block md:inline text-sm text-muted-foreground">
                  {row.type}
                </span>
                <span className="block md:inline">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider uppercase px-2 py-1 border ${
                      row.status === "Finalized"
                        ? "text-accent border-accent/40"
                        : "text-muted-foreground border-border"
                    }`}
                  >
                    {row.status}
                  </span>
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="relative py-32 lg:py-40 bg-background border-t border-border/60">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="font-display text-foreground text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.02] tracking-tighter mb-6">
              Research.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Doctrine for the post-quantum decade.
            </p>
          </motion.div>

          <motion.article
            {...fadeUp}
            className="max-w-4xl mx-auto bg-surface border border-border/60 rounded-sm overflow-hidden"
          >
            <div className="p-10 lg:p-14">
              <div className="flex items-center gap-4 mb-8 text-[11px] font-mono tracking-widest uppercase">
                <span className="text-accent">Defense</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">Feb 2026</span>
              </div>
              <h3 className="font-display text-foreground text-3xl lg:text-4xl leading-tight tracking-tight font-light mb-6 max-w-2xl">
                AI Defense Intelligence Framework
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-xl">
                Strategic doctrine on AI in Philippine defense and intelligence.
              </p>
              <a
                href="/resources/AI_Defense_Intelligence_Framework_Philippines_Report.pdf"
                download
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors border border-border hover:border-accent rounded-sm px-5 py-3"
              >
                <Download className="w-4 h-4" aria-hidden />
                Download PDF
                <ArrowUpRight className="w-4 h-4" aria-hidden />
              </a>
            </div>
          </motion.article>
        </div>
      </section>

      {/* FINAL CTA */}
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
              Before the agenda is finalized.
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-14 max-w-xl mx-auto">
              A thirty-minute partner briefing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-12 px-8 text-[13px] font-medium tracking-tight"
              >
                <Link href="/#contact">
                  Brief our partners
                  <ArrowUpRight className="w-4 h-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border border-border bg-transparent text-foreground hover:bg-muted/40 rounded-sm h-12 px-8 text-[13px] font-medium tracking-tight"
              >
                <Link href="/ronway">
                  <TerminalSquare className="w-4 h-4" aria-hidden />
                  Begin with Ronway
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
