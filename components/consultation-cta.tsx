"use client";

import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function ConsultationCTA() {
  const { t } = useLanguage();
  const ctaData = t("cta");

  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Dramatic background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[180px] animate-glow-pulse" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[180px] animate-glow-pulse [animation-delay:1.5s]" />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass border border-purple-500/20 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-purple-300 font-semibold tracking-widest uppercase text-[11px]">
              Systems First
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text-elite">{ctaData.title}</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {ctaData.description}
          </p>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              <a
                href={ctaData.buttonHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-3 w-5 h-5" />
                {ctaData.buttonText}
                <ArrowRight className="ml-3 w-5 h-5" />
              </a>
            </Button>
          </motion.div>

          <p className="text-slate-600 mt-8 text-xs tracking-wide">
            30-minute strategy session &middot; Guaranteed ROI Insights &middot; Tagalog support available
          </p>
        </motion.div>
      </div>
    </section>
  );
}
