"use client";

import { ArrowUpRight, Download } from "lucide-react";
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

export function ResearchSection() {
  const { t } = useLanguage();
  const research = t("research");

  return (
    <section
      id="research"
      className="relative py-32 lg:py-40 bg-background border-t border-border/60"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: editorialEase }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-4xl mx-auto mb-20 lg:mb-24 text-center"
        >
          <h2 className="font-display text-foreground text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.02] tracking-tighter mb-6">
            {research.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {research.subtitle}
          </p>
        </motion.div>

        {Array.isArray(research.documents) &&
          research.documents.map((doc: ResearchDocument, index: number) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: editorialEase }}
              viewport={{ once: true, margin: "-60px" }}
              className="max-w-4xl mx-auto border border-border/60 rounded-sm overflow-hidden bg-surface"
            >
              <div className="p-10 lg:p-14">
                <div className="flex items-center gap-4 mb-8 text-[11px] font-mono tracking-widest uppercase">
                  <span className="text-accent">{doc.category}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{doc.date}</span>
                </div>

                <h3 className="font-display text-foreground text-3xl lg:text-4xl leading-tight tracking-tight font-light mb-6 max-w-2xl">
                  {doc.title}
                </h3>

                <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-xl">
                  {doc.description}
                </p>

                <a
                  href={doc.downloadUrl}
                  download
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors border border-border hover:border-accent rounded-sm px-5 py-3"
                >
                  <Download className="w-4 h-4" aria-hidden />
                  Download {doc.fileSize}
                  <ArrowUpRight className="w-4 h-4" aria-hidden />
                </a>
              </div>
            </motion.article>
          ))}
      </div>
    </section>
  );
}
