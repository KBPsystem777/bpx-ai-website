"use client";

import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

const editorialEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

function ClientLogoBand() {
  const { t } = useLanguage();
  const clients = t("clients");
  const trustedBy = t("hero.trustedBy");

  if (!Array.isArray(clients?.logos)) return null;

  return (
    <div className="border-t border-border/60">
      <div className="container mx-auto py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-12 items-center">
          <p className="text-[11px] tracking-widest uppercase text-muted-foreground font-mono leading-relaxed max-w-md">
            {trustedBy}
          </p>
          <div className="flex flex-wrap items-center gap-x-10 lg:gap-x-14 gap-y-6 lg:justify-end">
            {clients.logos.map((client: any, i: number) => (
              <div
                key={i}
                className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
                title={client.name}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={32}
                  className="h-6 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const { t } = useLanguage();
  const hero = t("hero");

  return (
    <section className="relative pt-28 lg:pt-36 pb-0 overflow-hidden bg-background">
      {/* Atmospheric background layers */}
      <div
        className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 top-0 h-[600px] radial-glow pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto relative">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: editorialEase }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-accent font-mono">
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent"
                aria-hidden
              />
              {hero.tagline}
            </span>
          </motion.div>

          {/* Editorial display headline */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: editorialEase, delay: 0.08 }}
            className="font-display text-foreground text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.02] tracking-tighter mb-8 max-w-4xl"
          >
            {hero.headline}
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: editorialEase, delay: 0.18 }}
            className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12"
          >
            {hero.subheadline}
          </motion.p>

          {/* Primary actions */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: editorialEase, delay: 0.28 }}
            className="flex flex-col sm:flex-row gap-3 mb-20 lg:mb-28"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-12 px-6 text-[13px] font-medium tracking-tight"
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
              className="border border-border bg-transparent text-foreground hover:bg-muted/40 hover:text-foreground rounded-sm h-12 px-6 text-[13px] font-medium tracking-tight"
            >
              <Link href={hero.secondaryCta.href}>
                <ShieldCheck className="w-4 h-4" aria-hidden />
                {hero.secondaryCta.label}
              </Link>
            </Button>
          </motion.div>

          {/* Metrics strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: editorialEase, delay: 0.4 }}
            className="border-t border-border/60 pt-8 pb-14 lg:pb-20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
              {Array.isArray(hero.metrics) &&
                hero.metrics.map((metric: any, i: number) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[11px] tracking-widest uppercase text-muted-foreground font-mono mb-3">
                      0{i + 1}
                    </span>
                    <span className="font-display text-2xl lg:text-[28px] leading-[1.1] tracking-tight text-foreground mb-2">
                      {metric.value}
                    </span>
                    <span className="text-sm text-foreground/90 font-medium leading-snug">
                      {metric.label}
                    </span>
                    <span className="text-xs text-muted-foreground mt-1 leading-snug">
                      {metric.sublabel}
                    </span>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>

      <ClientLogoBand />
    </section>
  );
}
