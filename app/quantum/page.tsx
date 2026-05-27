"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Atom,
  Binary,
  Calendar,
  CheckCircle2,
  Download,
  FileText,
  Radar,
  ShieldCheck,
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
  {
    value: "Aug 2024",
    label: "NIST finalized FIPS 203 / 204 / 205",
    note: "Replacement standards published",
  },
  {
    value: "5–7 yrs",
    label: "Institutional migration window",
    note: "Industry consensus for full cryptographic replacement",
  },
  {
    value: "Today",
    label: "Harvest-now-decrypt-later",
    note: "Recorded encrypted traffic is already exposed",
  },
];

const methodology = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Cryptographic inventory and surface mapping across the institutional perimeter. Ronway-grade public scan paired with internal-surface walkthrough.",
    deliverables: [
      "Full cryptographic inventory",
      "Public + internal surface map",
      "Vendor & library register",
    ],
  },
  {
    number: "02",
    title: "Exposure Mapping",
    description:
      "Algorithm-by-algorithm risk scoring against NIST timelines and post-quantum cryptanalysis. Regulator-aligned, sector-specific.",
    deliverables: [
      "Risk-scored algorithm matrix",
      "Regulatory alignment memo",
      "Priority sequence draft",
    ],
  },
  {
    number: "03",
    title: "Migration Architecture",
    description:
      "Hybrid PQC design — classical alongside post-quantum, side by side. System sequencing, certificate-chain replacement, vendor and library assessment.",
    deliverables: [
      "Hybrid PQC architecture",
      "Migration sequencing timeline",
      "Certificate-chain replacement plan",
    ],
  },
  {
    number: "04",
    title: "Engineering & Oversight",
    description:
      "Implementation alongside in-house engineering, post-migration validation, and oversight through the cutover and the regulator audit.",
    deliverables: [
      "Production engineering",
      "Post-migration validation",
      "Audit-ready documentation",
    ],
  },
];

const services = [
  {
    icon: Radar,
    title: "PQC Readiness Assessment",
    pricing: "Entry engagement",
    description:
      "Ronway-powered cryptographic surface assessment paired with a partner-led working session. The public scan tells you that exposure exists; the consultation tells you what, where, and in what sequence.",
    bullets: [
      "Public surface Ronway scan",
      "Partner working session (60–90 min)",
      "Written remediation brief in 7 days",
    ],
    timeline: "1 week",
  },
  {
    icon: Binary,
    title: "Cryptographic Migration Planning",
    pricing: "Discovery engagement",
    description:
      "Formal cryptographic inventory and exposure assessment of the full institutional environment. Algorithm-mapped, NIST-timeline-aligned, regulator-ready.",
    bullets: [
      "Full cryptographic inventory",
      "NIST-aligned exposure scoring",
      "Board-readable executive summary",
    ],
    timeline: "2–4 weeks",
  },
  {
    icon: Atom,
    title: "Implementation & Integration",
    pricing: "Full engagement",
    description:
      "Hybrid PQC deployment engineering. Certificate-chain replacement, vendor and library substitution, and the engineering oversight to deliver under production conditions.",
    bullets: [
      "Hybrid PQC architecture",
      "Certificate chain replacement",
      "Engineering oversight through cutover",
    ],
    timeline: "8–16 weeks",
  },
  {
    icon: ShieldCheck,
    title: "Monitoring & Compliance",
    pricing: "Continuous",
    description:
      "Post-migration validation, ongoing cryptographic surveillance against new NIST guidance, and regulator-facing documentation kept current as standards evolve.",
    bullets: [
      "Continuous cryptographic posture monitoring",
      "Standards-update advisory",
      "Regulator documentation upkeep",
    ],
    timeline: "Ongoing",
  },
];

const standards = [
  {
    fips: "FIPS 203",
    algorithm: "ML-KEM",
    legacy: "CRYSTALS-Kyber",
    type: "Key Encapsulation",
    status: "Finalized",
    date: "Aug 2024",
  },
  {
    fips: "FIPS 204",
    algorithm: "ML-DSA",
    legacy: "CRYSTALS-Dilithium",
    type: "Digital Signature",
    status: "Finalized",
    date: "Aug 2024",
  },
  {
    fips: "FIPS 205",
    algorithm: "SLH-DSA",
    legacy: "SPHINCS+",
    type: "Hash-based Signature",
    status: "Finalized",
    date: "Aug 2024",
  },
  {
    fips: "FIPS 206 (draft)",
    algorithm: "FN-DSA",
    legacy: "FALCON",
    type: "Digital Signature",
    status: "Draft",
    date: "Pending",
  },
];

const engagementEntry = [
  {
    label: "Ronway Consultation",
    description:
      "Scan + partner working session + written brief (7 days). The fastest way to put an evidence-based number on your exposure.",
    timeline: "1 week",
    href: "/ronway",
    ctaLabel: "Begin a Ronway scan",
  },
  {
    label: "Cryptographic Discovery",
    description:
      "Two-to-four-week formal inventory and exposure assessment. Concludes in a board-readable executive summary.",
    timeline: "2–4 weeks",
    href: "/#contact",
    ctaLabel: "Brief our partners",
  },
  {
    label: "Migration Architecture",
    description:
      "Discovery plus a full migration roadmap and engineering plan. The work your team can execute and your regulator can audit.",
    timeline: "8–16 weeks",
    href: "/#contact",
    ctaLabel: "Open a discovery file",
  },
];

const upcomingPOVs = [
  {
    label: "In publication",
    title: "The Philippine Post-Quantum Migration Window",
    audience: "BSP-supervised institutions",
  },
  {
    label: "In publication",
    title: "Sovereign Cryptographic Capability",
    audience: "Public sector & national security",
  },
  {
    label: "In publication",
    title: "Hybrid PQC in TLS-Heavy Environments",
    audience: "Engineering reference",
  },
];

export default function QuantumPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ───────────── HERO ───────────── */}
      <section className="relative pt-32 lg:pt-40 pb-24 lg:pb-32 overflow-hidden">
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
              <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden />
              BPxAI Quantum Practice
            </span>
            <span className="hidden sm:inline-block text-[11px] tracking-widest uppercase text-muted-foreground font-mono">
              / Post-Quantum Cryptography
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: editorialEase, delay: 0.08 }}
            className="font-display text-foreground text-[clamp(2.5rem,6vw,5.25rem)] font-light leading-[1.02] tracking-tighter mb-8 max-w-5xl"
          >
            The Philippine practice for the cryptographic transition of the
            next decade.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: editorialEase, delay: 0.18 }}
            className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12"
          >
            BPxAI&apos;s Quantum Practice advises institutions whose cryptographic
            infrastructure is now subject to the most consequential standards
            migration in fifty years. We run discovery, design migration
            architecture, and engineer hybrid post-quantum deployments — for
            financial services, the sovereign, energy, defense, and the
            institutions of Philippine national interest.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: editorialEase, delay: 0.28 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-12 px-6 text-[13px] font-medium tracking-tight"
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
              className="border border-border bg-transparent text-foreground hover:bg-muted/40 rounded-sm h-12 px-6 text-[13px] font-medium tracking-tight"
            >
              <Link href="/ronway">
                <TerminalSquare className="w-4 h-4" aria-hidden />
                Scan with Ronway
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ───────────── THE QUANTUM THREAT ───────────── */}
      <section className="relative py-24 lg:py-32 bg-surface border-t border-border/60">
        <div className="container mx-auto">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start"
          >
            <div>
              <div className="eyebrow mb-5">The Problem We Work On</div>
              <h2 className="font-display text-foreground text-[clamp(1.875rem,4vw,3.25rem)] font-light leading-[1.08] tracking-tighter mb-8">
                Cryptography built before 2030 is end-of-life by quantum
                standards.
              </h2>
              <div className="space-y-5 text-base lg:text-[17px] text-muted-foreground leading-relaxed max-w-xl">
                <p>
                  NIST finalized the replacement standards — FIPS 203, 204, and
                  205 — in August 2024. Migration windows for institutional
                  cryptography run five to seven years.
                </p>
                <p>
                  The institutional cost of beginning that migration in 2028
                  instead of 2026 is measured in regulatory exposure, sovereign
                  liability, and recorded data already compromised by
                  harvest-now-decrypt-later.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
              {threatStats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-background p-8 lg:p-10 grid grid-cols-[140px_1fr] gap-6 items-baseline"
                >
                  <span className="font-display text-2xl lg:text-3xl text-accent tracking-tight">
                    {stat.value}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1.5 leading-snug">
                      {stat.label}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {stat.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────────── METHODOLOGY ───────────── */}
      <section className="relative py-24 lg:py-32 bg-background border-t border-border/60">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="max-w-4xl mb-16 lg:mb-20">
            <div className="eyebrow mb-5">Methodology</div>
            <h2 className="font-display text-foreground text-[clamp(1.875rem,4vw,3.25rem)] font-light leading-[1.08] tracking-tighter mb-6">
              Four phases. One engagement model.
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Every BPxAI Quantum engagement runs through the same sequence —
              calibrated to scope, but never abbreviated. Discovery before
              prescription. Mapping before architecture. Architecture before
              code.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
            {methodology.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: editorialEase,
                  delay: i * 0.06,
                }}
                viewport={{ once: true, margin: "-40px" }}
                className="bg-surface p-8 lg:p-9 flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[11px] tracking-widest uppercase text-muted-foreground font-mono">
                    Phase {phase.number}
                  </span>
                  <span className="text-[11px] tracking-widest uppercase text-accent font-mono">
                    {phase.number} / 04
                  </span>
                </div>
                <h3 className="font-display text-foreground text-xl lg:text-2xl tracking-tight font-normal mb-4">
                  {phase.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {phase.description}
                </p>
                <ul className="mt-auto space-y-2 pt-6 border-t border-border/60">
                  {phase.deliverables.map((d, di) => (
                    <li
                      key={di}
                      className="flex items-start gap-3 text-[13px] text-foreground/85"
                    >
                      <span
                        className="mt-[7px] w-1 h-1 rounded-full bg-accent shrink-0"
                        aria-hidden
                      />
                      <span className="leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── SERVICES ───────────── */}
      <section className="relative py-24 lg:py-32 bg-surface border-t border-border/60">
        <div className="container mx-auto">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-start mb-16 lg:mb-20"
          >
            <div>
              <div className="eyebrow mb-5">Services</div>
              <h2 className="font-display text-foreground text-[clamp(1.875rem,4vw,3rem)] font-light leading-[1.08] tracking-tighter">
                Four engagements, by scope and consequence.
              </h2>
            </div>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl lg:pt-3">
              Each engagement type is calibrated to a different question —
              from &quot;what is my exposure&quot; to &quot;how do we live in
              the post-quantum standards environment over time.&quot;
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: editorialEase,
                    delay: (i % 2) * 0.08,
                  }}
                  viewport={{ once: true, margin: "-40px" }}
                  className="bg-background p-8 lg:p-10 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div
                      className="w-10 h-10 border border-border flex items-center justify-center"
                      aria-hidden
                    >
                      <Icon className="w-[18px] h-[18px] text-accent" />
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] tracking-widest uppercase text-accent font-mono">
                        {service.pricing}
                      </p>
                      <p className="text-[11px] tracking-widest uppercase text-muted-foreground font-mono mt-1">
                        {service.timeline}
                      </p>
                    </div>
                  </div>
                  <h3 className="font-display text-foreground text-xl lg:text-2xl tracking-tight font-normal mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="mt-auto space-y-2.5 pt-6 border-t border-border/60">
                    {service.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="flex items-start gap-3 text-sm text-foreground/85"
                      >
                        <CheckCircle2
                          className="w-3.5 h-3.5 mt-[3px] text-accent shrink-0"
                          aria-hidden
                        />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────── STANDARDS ───────────── */}
      <section className="relative py-24 lg:py-32 bg-background border-t border-border/60">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="max-w-4xl mb-12 lg:mb-16">
            <div className="eyebrow mb-5">Standards & Frameworks</div>
            <h2 className="font-display text-foreground text-[clamp(1.875rem,4vw,3rem)] font-light leading-[1.08] tracking-tighter mb-6">
              The replacement standards, named.
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              NIST finalized three post-quantum cryptography standards in
              August 2024. A fourth signature standard is in draft. Every
              BPxAI migration engineering plan is written against these.
            </p>
          </motion.div>

          {/* Editorial data table */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: editorialEase }}
            viewport={{ once: true, margin: "-40px" }}
            className="border border-border/60 rounded-sm overflow-hidden bg-surface"
          >
            {/* Header row */}
            <div className="hidden md:grid grid-cols-[140px_140px_1fr_180px_120px_120px] gap-6 px-6 lg:px-8 py-4 bg-background border-b border-border/60 text-[11px] tracking-widest uppercase text-muted-foreground font-mono">
              <span>Standard</span>
              <span>Algorithm</span>
              <span>Legacy Name</span>
              <span>Type</span>
              <span>Status</span>
              <span>Date</span>
            </div>

            {/* Rows */}
            {standards.map((row, i) => (
              <div
                key={i}
                className={`md:grid md:grid-cols-[140px_140px_1fr_180px_120px_120px] gap-6 px-6 lg:px-8 py-5 items-center border-b border-border/60 last:border-b-0 ${
                  row.status === "Draft" ? "opacity-70" : ""
                }`}
              >
                <span className="block md:inline font-mono text-sm text-foreground font-medium">
                  {row.fips}
                </span>
                <span className="block md:inline font-mono text-sm text-accent">
                  {row.algorithm}
                </span>
                <span className="block md:inline text-sm text-foreground/85">
                  {row.legacy}
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
                    <span
                      className={`w-1 h-1 rounded-full ${
                        row.status === "Finalized" ? "bg-accent" : "bg-muted-foreground"
                      }`}
                      aria-hidden
                    />
                    {row.status}
                  </span>
                </span>
                <span className="block md:inline font-mono text-xs text-muted-foreground tracking-wider">
                  {row.date}
                </span>
              </div>
            ))}
          </motion.div>

          <p className="mt-8 text-xs text-muted-foreground max-w-3xl leading-relaxed font-mono tracking-wide">
            Source: NIST Post-Quantum Cryptography Standardization Project,
            FIPS Publications 203, 204, 205 (August 2024); FIPS 206 (Draft).
          </p>
        </div>
      </section>

      {/* ───────────── RESEARCH ───────────── */}
      <section className="relative py-24 lg:py-32 bg-surface border-t border-border/60">
        <div className="container mx-auto">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-start mb-12 lg:mb-16"
          >
            <div>
              <div className="eyebrow mb-5">Research & Doctrine</div>
              <h2 className="font-display text-foreground text-[clamp(1.875rem,4vw,3rem)] font-light leading-[1.08] tracking-tighter">
                Published positions on the post-quantum decade.
              </h2>
            </div>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl lg:pt-2">
              POVs and doctrine on the standards migrations, regulatory
              transitions, and institutional questions that will shape the
              cryptographic environment our clients operate in.
            </p>
          </motion.div>

          {/* Featured POV — full editorial card */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: editorialEase }}
            viewport={{ once: true, margin: "-40px" }}
            className="bg-background border border-border/60 rounded-sm overflow-hidden mb-px"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_auto] gap-8 p-8 lg:p-10 items-start">
              <div className="flex flex-col gap-4 lg:border-r lg:border-border/60 lg:pr-8">
                <div
                  className="w-11 h-11 border border-border flex items-center justify-center"
                  aria-hidden
                >
                  <FileText className="w-[18px] h-[18px] text-accent" />
                </div>
                <div className="flex flex-col gap-2 text-[11px] font-mono tracking-widest uppercase text-muted-foreground">
                  <span className="text-accent">Defense & National Security</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" aria-hidden />
                    February 2026
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-display text-foreground text-2xl lg:text-[28px] leading-tight tracking-tight font-normal mb-4">
                  AI Defense Intelligence Framework for the Philippines
                </h3>
                <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                  Strategic doctrine on the application of artificial
                  intelligence to Philippine defense and intelligence
                  operations. Published as part of BPxAI&apos;s first-mover
                  position in the national-security technology conversation.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["AI Doctrine", "Defense", "National Security", "Philippines"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-muted-foreground/90 border border-border px-2 py-1 leading-none"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <div className="flex lg:flex-col items-start gap-3 lg:pl-2">
                <a
                  href="/resources/AI_Defense_Intelligence_Framework_Philippines_Report.pdf"
                  download
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors border border-border hover:border-accent rounded-sm px-4 py-2.5"
                >
                  <Download className="w-4 h-4" aria-hidden />
                  Download PDF
                </a>
              </div>
            </div>
          </motion.article>

          {/* Pipeline POVs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: editorialEase, delay: 0.15 }}
            viewport={{ once: true, margin: "-40px" }}
            className="mt-px grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 border border-border/60 border-t-0 rounded-sm overflow-hidden"
          >
            {upcomingPOVs.map((pov, i) => (
              <div
                key={i}
                className="bg-background/60 px-6 py-7 flex flex-col gap-3"
              >
                <span className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground">
                  {pov.label}
                </span>
                <p className="font-display text-foreground/80 text-lg leading-snug tracking-tight">
                  {pov.title}
                </p>
                <span className="text-xs text-muted-foreground mt-auto">
                  {pov.audience}
                </span>
              </div>
            ))}
          </motion.div>

          <p className="mt-8 text-xs text-muted-foreground max-w-3xl leading-relaxed">
            Disclosure: published documents are conceptual frameworks and
            strategic doctrine. Sovereign and defense engagement detail is
            referenced only at the level our principals are authorized to
            discuss.
          </p>
        </div>
      </section>

      {/* ───────────── ENGAGEMENT MODEL ───────────── */}
      <section className="relative py-24 lg:py-32 bg-background border-t border-border/60">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="max-w-4xl mb-16 lg:mb-20">
            <div className="eyebrow mb-5">Engagement Model</div>
            <h2 className="font-display text-foreground text-[clamp(1.875rem,4vw,3rem)] font-light leading-[1.08] tracking-tighter mb-6">
              Three ways a relationship begins.
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Most engagements begin with one of three entry points. Each
              produces a defined artifact and clarifies whether the larger
              engagement is the right next step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
            {engagementEntry.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: editorialEase,
                  delay: i * 0.08,
                }}
                viewport={{ once: true, margin: "-40px" }}
                className="group bg-surface p-8 lg:p-10 flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[11px] tracking-widest uppercase text-muted-foreground font-mono">
                    Entry 0{i + 1}
                  </span>
                  <span className="text-[11px] tracking-widest uppercase text-accent font-mono">
                    {entry.timeline}
                  </span>
                </div>
                <h3 className="font-display text-foreground text-xl lg:text-2xl tracking-tight font-normal mb-4">
                  {entry.label}
                </h3>
                <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed mb-8">
                  {entry.description}
                </p>
                <Link
                  href={entry.href}
                  className="mt-auto pt-6 border-t border-border/60 inline-flex items-center justify-between text-sm font-medium text-foreground group-hover:text-accent transition-colors"
                >
                  <span>{entry.ctaLabel}</span>
                  <ArrowUpRight
                    className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    aria-hidden
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── FINAL CTA ───────────── */}
      <section className="relative py-24 lg:py-36 bg-background border-t border-border/60 overflow-hidden">
        <div
          className="absolute inset-x-0 bottom-0 h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 70% at 50% 100%, hsl(var(--accent) / 0.10) 0%, transparent 60%)",
          }}
          aria-hidden
        />

        <div className="container mx-auto relative">
          <motion.div {...fadeUp} className="max-w-4xl">
            <div className="eyebrow mb-6">Brief Our Leadership</div>
            <h2 className="font-display text-foreground text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] tracking-tighter mb-8 max-w-3xl">
              If post-quantum cryptography sits on your institutional agenda
              for the next twelve months — we should speak before that agenda
              is finalized.
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12">
              A thirty-minute partner briefing is the standard entry point.
              Sovereign and defense-adjacent engagements proceed through a
              separate protocol on request.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-12 px-6 text-[13px] font-medium tracking-tight"
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
                className="border border-border bg-transparent text-foreground hover:bg-muted/40 rounded-sm h-12 px-6 text-[13px] font-medium tracking-tight"
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
