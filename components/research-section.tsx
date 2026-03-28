"use client";

import { Download, FileText, Calendar } from "lucide-react";
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
    <section
      id="research"
      className="py-24 md:py-32 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm text-brand font-medium mb-4 block">
            Resources
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 max-w-2xl tracking-tight">
            {research.title}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            {research.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl">
          {Array.isArray(research.documents) &&
            research.documents.map((doc: ResearchDocument, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-brand flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-brand bg-brand-50 px-2.5 py-1 rounded-md">
                      {doc.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2.5 tracking-tight">
                    {doc.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    {doc.description}
                  </p>

                  <div className="flex items-center space-x-4 text-xs text-gray-400 mb-5">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{doc.date}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Download className="w-3.5 h-3.5" />
                      <span>{doc.fileSize}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {doc.tags.map((tag: string, tagIndex: number) => (
                      <span
                        key={tagIndex}
                        className="text-[11px] text-gray-400 bg-white border border-gray-200 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleDownload(doc.downloadUrl, doc.title)}
                    className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </motion.div>
            ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 text-xs text-gray-400 max-w-2xl"
        >
          Disclaimer: These documents are conceptual frameworks and project
          overviews for informational purposes.
        </motion.p>
      </div>
    </section>
  );
}
