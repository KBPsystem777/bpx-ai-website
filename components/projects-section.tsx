"use client";

import { ArrowUpRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function ProjectsSection() {
  const { t } = useLanguage();
  const projects = t("projectHighlights");

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-gray-50"
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
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4 max-w-2xl tracking-tight">
            {projects.title}
          </h2>
          <p className="text-lg text-black max-w-2xl">
            {projects.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.isArray(projects.items) &&
            projects.items.map((project: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-xs font-medium text-brand bg-brand-50 px-2.5 py-1 rounded-md">
                      {project.industry}
                    </span>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-xs font-semibold text-emerald-600">
                        {project.metric}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-black mb-2.5 tracking-tight group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-black leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags?.map((tag: string, ti: number) => (
                      <span
                        key={ti}
                        className="text-[11px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-gray-400 tracking-wide uppercase block mb-0.5">
                        Impact
                      </span>
                      <span className="text-sm font-semibold text-black">
                        {project.impact}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-brand transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
