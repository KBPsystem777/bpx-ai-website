"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { useLanguage } from "@/components/language-provider";

const editorialEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ProjectsSection() {
  const { t } = useLanguage();
  const projects = t("projectHighlights");

  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32 bg-surface border-t border-border/60"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: editorialEase }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-4xl mb-16 lg:mb-20"
        >
          <div className="eyebrow mb-5">Selected Engagements</div>
          <h2 className="font-display text-foreground text-[clamp(1.875rem,4vw,3.25rem)] font-light leading-[1.08] tracking-tighter mb-6">
            {projects.title}
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {projects.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
          {Array.isArray(projects.items) &&
            projects.items.map((project: any, index: number) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: editorialEase,
                  delay: (index % 3) * 0.06,
                }}
                viewport={{ once: true, margin: "-40px" }}
                className="group relative bg-background p-8 lg:p-9 flex flex-col"
              >
                {/* Sector label */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[11px] tracking-widest uppercase text-accent font-mono">
                    {project.industry}
                  </span>
                  <ArrowUpRight
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    aria-hidden
                  />
                </div>

                {/* Title */}
                <h3 className="font-display text-foreground text-xl lg:text-2xl leading-[1.15] tracking-tight font-normal mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tags?.map((tag: string, ti: number) => (
                    <span
                      key={ti}
                      className="text-[11px] text-muted-foreground/90 border border-border px-2 py-1 leading-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Impact rail */}
                <div className="mt-auto pt-6 border-t border-border/60 flex items-end justify-between gap-4">
                  <div>
                    <span className="text-[11px] tracking-widest uppercase text-muted-foreground font-mono block mb-1.5">
                      Impact
                    </span>
                    <span className="text-sm text-foreground font-medium leading-snug">
                      {project.impact}
                    </span>
                  </div>
                  {project.metric && (
                    <span className="text-xs font-mono text-accent shrink-0">
                      {project.metric}
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
        </div>
      </div>
    </section>
  );
}
