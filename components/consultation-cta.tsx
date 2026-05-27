"use client";

import { ArrowUpRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

const editorialEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ConsultationCTA() {
  const { t } = useLanguage();
  const ctaData = t("cta");

  return (
    <section className="relative py-24 lg:py-36 bg-background border-t border-border/60 overflow-hidden">
      {/* Subtle directional glow */}
      <div
        className="absolute inset-x-0 bottom-0 h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 70% at 50% 100%, hsl(var(--accent) / 0.08) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: editorialEase }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-4xl"
        >
          <div className="eyebrow mb-6">Engagement</div>

          <h2 className="font-display text-foreground text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] tracking-tighter mb-8 max-w-3xl">
            {ctaData.title}
          </h2>

          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12">
            {ctaData.description}
          </p>

          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-12 px-6 text-[13px] font-medium tracking-tight"
          >
            <a
              href={ctaData.buttonHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="w-4 h-4" aria-hidden />
              {ctaData.buttonText}
              <ArrowUpRight className="w-4 h-4" aria-hidden />
            </a>
          </Button>
        </motion.div>

        {/* Stats rail */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: editorialEase, delay: 0.2 }}
          viewport={{ once: true, margin: "-40px" }}
          className="mt-16 lg:mt-24 pt-8 border-t border-border/60 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl"
        >
          {ctaData.stats?.map((stat: any, i: number) => (
            <div key={i} className="flex flex-col">
              <span className="text-[11px] tracking-widest uppercase text-muted-foreground font-mono mb-2">
                {stat.label}
              </span>
              <span className="font-display text-2xl text-foreground tracking-tight">
                {stat.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
