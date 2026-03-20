"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export function HeroSection() {
  const { t } = useLanguage();
  const hero = t("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[5%] left-[15%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[150px] animate-glow-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-600/12 rounded-full blur-[150px] animate-glow-pulse [animation-delay:1.5s]" />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-violet-500/8 rounded-full blur-[120px] animate-float" />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.5)_70%,rgba(2,6,23,0.9)_100%)]" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass border border-purple-500/20 mb-8">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-purple-300 font-semibold tracking-widest uppercase text-[11px]">
                {t("meta.siteName")}
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] tracking-tight"
          >
            <span className="gradient-text-elite">
              {hero.headline}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 h-14 text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-[1.03] shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40"
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
              className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800/50 hover:border-slate-600 h-14 px-8 text-base font-semibold rounded-full transition-all duration-300"
            >
              <a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
            </Button>
          </motion.div>

          {/* Floating stats bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {[
              { value: "70%", label: "Error Reduction" },
              { value: "30%", label: "Revenue Boost" },
              { value: "24/7", label: "System Uptime" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent animate-bounce" />
      </motion.div>
    </section>
  );
}
