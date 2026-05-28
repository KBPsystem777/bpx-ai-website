"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/language-provider";

const editorialEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ProjectsSection() {
  const { t } = useLanguage();
  const projects = t("projectHighlights");

  return (
    <section
      id="projects"
      className="relative py-32 lg:py-40 bg-surface border-t border-border/60"
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
            {projects.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
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
                className="group relative bg-background p-10 lg:p-12 flex flex-col min-h-[280px]"
              >
                <span className="text-[11px] tracking-widest uppercase text-accent font-mono mb-10">
                  {project.industry}
                </span>

                <h3 className="font-display text-foreground text-2xl lg:text-3xl leading-tight tracking-tight font-light mb-auto">
                  {project.title}
                </h3>

                <div className="mt-10 pt-6 border-t border-border/60">
                  <span className="text-sm text-foreground font-medium">
                    {project.impact}
                  </span>
                </div>
              </motion.article>
            ))}
        </div>
      </div>
    </section>
  );
}
