"use client";

import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

const editorialEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HeroSection() {
  const { t } = useLanguage();
  const hero = t("hero");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-32 pb-24">
      <div
        className="absolute inset-0 grid-pattern opacity-30 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 top-0 h-[700px] radial-glow pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto relative">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: editorialEase }}
            className="flex items-center justify-center gap-2 mb-10"
          >
            <span className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-accent font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden />
              {hero.tagline}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: editorialEase, delay: 0.08 }}
            className="font-display text-foreground text-[clamp(3rem,8vw,7rem)] font-light leading-[0.98] tracking-tighter mb-10"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: editorialEase, delay: 0.18 }}
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-14 max-w-2xl mx-auto"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: editorialEase, delay: 0.28 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-12 px-8 text-[13px] font-medium tracking-tight"
            >
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowUpRight className="w-4 h-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border border-border bg-transparent text-foreground hover:bg-muted/40 hover:text-foreground rounded-sm h-12 px-8 text-[13px] font-medium tracking-tight"
            >
              <Link href={hero.secondaryCta.href}>
                <ShieldCheck className="w-4 h-4" aria-hidden />
                {hero.secondaryCta.label}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
