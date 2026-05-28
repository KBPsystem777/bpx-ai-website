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
    <section className="relative min-h-[80vh] flex items-center py-32 lg:py-40 bg-background border-t border-border/60 overflow-hidden">
      <div
        className="absolute inset-x-0 bottom-0 h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 100%, hsl(var(--accent) / 0.10) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: editorialEase }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-foreground text-[clamp(2.5rem,7vw,6rem)] font-light leading-[1.0] tracking-tighter mb-8">
            {ctaData.title}
          </h2>

          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-14 max-w-xl mx-auto">
            {ctaData.description}
          </p>

          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-12 px-8 text-[13px] font-medium tracking-tight"
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
      </div>
    </section>
  );
}
