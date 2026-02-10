"use client";

import { ExternalLink, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function ProjectsSection() {
  const { t } = useLanguage();
  const projects = t("projectHighlights");

  return (
    <section id="projects" className="py-24 bg-slate-900 overflow-hidden border-t border-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {projects.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {projects.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.isArray(projects.items) && projects.items.map((project: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-slate-800/40 rounded-3xl border border-slate-700/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-purple-500/10 p-3 rounded-2xl">
                    <BarChart3 className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest bg-slate-700/50 px-3 py-1 rounded-full">
                    {project.industry}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="pt-6 border-t border-slate-700/50">
                  <p className="text-sm font-bold text-purple-400 mb-1 uppercase tracking-tighter">Impact Outcome</p>
                  <p className="text-xl font-bold text-white uppercase">{project.impact}</p>
                </div>
              </div>
              
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
