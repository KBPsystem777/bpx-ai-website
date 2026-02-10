"use client";

import { ArrowRight, Sparkles, Calendar, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function HeroSection() {
  const { t } = useLanguage();
  const hero = t("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-6 mx-auto">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 font-semibold tracking-wide uppercase text-xs">
                {t("meta.siteName")}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent leading-tight tracking-tight">
              {hero.headline}
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              {hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 h-14 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/20"
                asChild
              >
                <a href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-700 text-gray-700 hover:bg-white h-14 px-8 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-50">
        <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-transparent rounded-full animate-bounce" />
      </div>
    </section>
  );
}
