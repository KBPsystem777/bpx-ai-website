"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

function ClientLogoBanner() {
  const { t } = useLanguage();
  const clients = t("clients");

  return (
    <div className="border-t border-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <span className="text-gray-400 text-xs tracking-wide uppercase shrink-0">
            Trusted by
          </span>
          <div className="flex items-center gap-10 md:gap-14 overflow-hidden">
            {Array.isArray(clients?.logos) &&
              clients.logos.map((client: any, i: number) => (
                <div key={i} className="shrink-0 opacity-30 hover:opacity-50 transition-opacity grayscale">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={80}
                    height={32}
                    className="h-5 w-auto object-contain"
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
    <section className="relative pt-32 pb-0 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center text-sm text-brand font-medium bg-brand-50 px-3 py-1 rounded-full">
              {hero.tagline}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-brand leading-[1.1] tracking-tight"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-black mb-10 max-w-2xl leading-relaxed"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-3 mb-20"
          >
            <Button
              size="lg"
              className="bg-brand hover:bg-brand-600 text-white font-medium px-6 h-12 text-sm rounded-lg"
              asChild
            >
              <a href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-200 text-black hover:text-black hover:bg-gray-50 h-12 px-6 text-sm rounded-lg bg-white"
            >
              <a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {Array.isArray(hero.metrics) &&
              hero.metrics.map((metric: any, i: number) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-bold text-black mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-black font-medium">
                    {metric.label}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    {metric.sublabel}
                  </div>
                </div>
              ))}
          </motion.div>
        </div>
      </div>

      <ClientLogoBanner />
    </section>
  );
}
