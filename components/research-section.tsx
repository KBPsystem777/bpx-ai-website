"use client";

import { Download, FileText, Calendar, ArrowDownToLine } from "lucide-react";
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

export function ResearchSection() {
  const { t } = useLanguage();
  const research = t("research");

  const handleDownload = (url: string, title: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="research" className="relative py-28 bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 font-semibold tracking-widest uppercase text-xs mb-4 block">
            Knowledge Base
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text-elite">
            {research.title}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {research.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {Array.isArray(research.documents) &&
            research.documents.map((doc: ResearchDocument, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-8 h-full hover-glow transition-all duration-500 flex flex-col">
                  {/* Icon + Category */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/10 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <FileText className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="text-[10px] font-bold text-purple-400/80 uppercase tracking-[0.15em] px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5">
                      {doc.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                    {doc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {doc.description}
                  </p>

                  {/* Meta info */}
                  <div className="space-y-2 mb-6 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{doc.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="h-3.5 w-3.5" />
                      <span>{doc.fileSize}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {doc.tags.map((tag: string, tagIndex: number) => (
                      <span
                        key={tagIndex}
                        className="text-[10px] px-2 py-0.5 rounded-full border border-slate-700/50 text-slate-500 bg-slate-800/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Download button */}
                  <button
                    onClick={() => handleDownload(doc.downloadUrl, doc.title)}
                    className="w-full h-11 rounded-xl font-semibold text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <ArrowDownToLine className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                    Download Framework
                  </button>
                </div>
              </motion.div>
            ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-xs text-slate-600"
        >
          <strong className="text-slate-500">Disclaimer:</strong> These documents are provided as
          conceptual frameworks and project overviews for informational purposes.
        </motion.p>
      </div>
    </section>
  );
}
