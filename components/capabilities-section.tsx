"use client";

import { motion } from "framer-motion";
import { Atom, Brain, Link2, ShieldCheck } from "lucide-react";

import { useLanguage } from "@/components/language-provider";

const pillarIcons: Record<string, any> = {
  pqc: Atom,
  ai: Brain,
  web3: Link2,
  risk: ShieldCheck,
  systems: Link2,
};

const editorialEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function CapabilitiesSection() {
  const { t } = useLanguage();
  const capabilities = t("capabilities");

  return (
    <section
      id="capabilities"
      className="relative min-h-screen flex items-center py-32 lg:py-40 bg-background border-t border-border/60"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: editorialEase }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-4xl mb-20 lg:mb-28 text-center mx-auto"
        >
          <h2 className="font-display text-foreground text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.02] tracking-tighter mb-6">
            {capabilities.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            {capabilities.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
          {Array.isArray(capabilities.pillars) &&
            capabilities.pillars.map((pillar: any, index: number) => {
              const Icon = pillarIcons[pillar.id] || ShieldCheck;

              return (
                <motion.article
                  key={pillar.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: editorialEase,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true, margin: "-60px" }}
                  className="group relative bg-surface p-10 lg:p-12 flex flex-col"
                >
                  <Icon className="w-6 h-6 text-accent mb-10" aria-hidden />

                  <h3 className="font-display text-foreground text-3xl lg:text-4xl leading-tight tracking-tight font-light mb-5">
                    {pillar.title}
                  </h3>

                  <p className="text-base text-muted-foreground leading-relaxed mb-10">
                    {pillar.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-border/60">
                    <span className="text-[11px] tracking-widest uppercase text-accent font-mono">
                      {pillar.metric}
                    </span>
                  </div>
                </motion.article>
              );
            })}
        </div>
      </div>
    </section>
  );
}
