"use client";

import { ExternalLink, BarChart3, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

const impactIcons = [Zap, TrendingUp, BarChart3];

export function ProjectsSection() {
  const { t } = useLanguage();
  const projects = t("projectHighlights");

  return (
    <section id="projects" className="relative py-28 bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 font-semibold tracking-widest uppercase text-xs mb-4 block">
            Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text-elite">
            {projects.title}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {projects.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {Array.isArray(projects.items) && projects.items.map((project: any, index: number) => {
            const ImpactIcon = impactIcons[index] || BarChart3;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-500 h-full flex flex-col">
                  {/* Top accent line */}
                  <div className="h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/10 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <ImpactIcon className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] px-3 py-1 rounded-full border border-slate-700/50 bg-slate-800/50">
                        {project.industry}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 leading-relaxed text-sm mb-8 flex-1">
                      {project.description}
                    </p>

                    {/* Impact metric - prominent */}
                    <div className="pt-6 border-t border-slate-700/30">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">
                        Impact Outcome
                      </p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
