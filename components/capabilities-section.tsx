"use client";

import { motion } from "framer-motion";
import { Atom, Brain, Link2, ShieldCheck } from "lucide-react";

import { useLanguage } from "@/components/language-provider";

const pillarIcons: Record<string, any> = {
  pqc: Atom,
  ai: Brain,
  web3: Link2,
  // Legacy ids — retained as fallbacks in case content reverts
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
      className="relative py-24 lg:py-32 bg-background border-t border-border/60"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: editorialEase }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-4xl mb-16 lg:mb-20"
        >
          <div className="eyebrow mb-5">{capabilities.sectionLabel}</div>
          <h2 className="font-display text-foreground text-[clamp(1.875rem,4vw,3.25rem)] font-light leading-[1.08] tracking-tighter mb-6">
            {capabilities.title}
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {capabilities.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
          {Array.isArray(capabilities.pillars) &&
            capabilities.pillars.map((pillar: any, index: number) => {
              const Icon = pillarIcons[pillar.id] || ShieldCheck;
              const indexLabel = `0${index + 1}`;

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
                  className="group relative bg-surface p-8 lg:p-10 flex flex-col"
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-10">
                    <div
                      className="w-10 h-10 border border-border flex items-center justify-center"
                      aria-hidden
                    >
                      <Icon className="w-[18px] h-[18px] text-accent" />
                    </div>
                    <span className="text-[11px] tracking-widest uppercase text-muted-foreground font-mono">
                      {indexLabel} / 03
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-foreground text-2xl lg:text-[28px] leading-tight tracking-tight font-normal mb-4">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed mb-8">
                    {pillar.description}
                  </p>

                  {/* Capabilities list — editorial */}
                  <ul className="space-y-2.5 mb-10">
                    {pillar.capabilities?.map((cap: string, ci: number) => (
                      <li
                        key={ci}
                        className="flex items-start gap-3 text-sm text-foreground/85"
                      >
                        <span
                          className="mt-[7px] w-1 h-1 rounded-full bg-accent shrink-0"
                          aria-hidden
                        />
                        <span className="leading-relaxed">{cap}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer metric */}
                  <div className="mt-auto pt-6 border-t border-border/60">
                    <span className="text-[11px] tracking-widest uppercase text-muted-foreground font-mono mb-1.5 block">
                      Posture
                    </span>
                    <span className="text-sm font-medium text-foreground leading-snug">
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
