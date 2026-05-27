"use client";

import Link from "next/link";
import { ArrowUpRight, Calendar, Download, FileText } from "lucide-react";
import { motion } from "framer-motion";

import { useLanguage } from "@/components/language-provider";

interface ResearchDocument {
  title: string;
  description: string;
  category: string;
  date: string;
  fileSize: string;
  downloadUrl: string;
  tags: string[];
}

const editorialEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

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

export function ResearchSection() {
  const { t } = useLanguage();
  const research = t("research");

  return (
    <section
      id="research"
      className="relative py-24 lg:py-32 bg-surface border-t border-border/60"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: editorialEase }}
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-start mb-12 lg:mb-16"
        >
          <div>
            <div className="eyebrow mb-5">Research & Doctrine</div>
            <h2 className="font-display text-foreground text-[clamp(1.875rem,4vw,3rem)] font-light leading-[1.08] tracking-tighter">
              {research.title}
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-6">
              {research.subtitle}
            </p>
            <Link
              href="/quantum"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors font-medium"
            >
              View all research
              <ArrowUpRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        </motion.div>

        {/* Featured POV — full-width editorial card */}
        {Array.isArray(research.documents) &&
          research.documents.map((doc: ResearchDocument, index: number) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: editorialEase, delay: 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-background border border-border/60 rounded-sm overflow-hidden mb-px"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_auto] gap-8 p-8 lg:p-10 items-start">
                {/* Left rail — meta */}
                <div className="flex flex-col gap-4 lg:border-r lg:border-border/60 lg:pr-8">
                  <div
                    className="w-11 h-11 border border-border flex items-center justify-center"
                    aria-hidden
                  >
                    <FileText className="w-[18px] h-[18px] text-accent" />
                  </div>
                  <div className="flex flex-col gap-2 text-[11px] font-mono tracking-widest uppercase text-muted-foreground">
                    <span className="text-accent">{doc.category}</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" aria-hidden />
                      {doc.date}
                    </span>
                  </div>
                </div>

                {/* Middle — content */}
                <div>
                  <h3 className="font-display text-foreground text-2xl lg:text-[28px] leading-tight tracking-tight font-normal mb-4">
                    {doc.title}
                  </h3>
                  <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    {doc.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {doc.tags?.map((tag: string, ti: number) => (
                      <span
                        key={ti}
                        className="text-[11px] text-muted-foreground/90 border border-border px-2 py-1 leading-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — action */}
                <div className="flex lg:flex-col items-start gap-3 lg:pl-2">
                  <a
                    href={doc.downloadUrl}
                    download
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors border border-border hover:border-accent rounded-sm px-4 py-2.5"
                  >
                    <Download className="w-4 h-4" aria-hidden />
                    Download {doc.fileSize}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}

        {/* Upcoming POVs — pipeline preview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: editorialEase, delay: 0.2 }}
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

        <p className="mt-10 text-xs text-muted-foreground max-w-2xl leading-relaxed">
          Disclosure: published documents are conceptual frameworks and
          strategic doctrine. Sovereign and defense engagement detail is
          referenced only at the level our principals are authorized to
          discuss.
        </p>
      </div>
    </section>
  );
}
