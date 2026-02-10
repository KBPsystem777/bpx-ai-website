"use client";

import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function ConsultationCTA() {
  const { t } = useLanguage();
  const ctaData = t("cta");

  return (
    <section className="py-24 bg-gradient-to-br from-purple-900/20 via-slate-900 to-blue-900/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-purple-400 mr-3" />
            <span className="text-purple-400 font-semibold tracking-wide uppercase text-sm">
              Systems First
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
            {ctaData.title}
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {ctaData.description}
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-6 text-xl font-semibold rounded-full transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
            >
              <a
                href={ctaData.buttonHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-3 w-6 h-6" />
                {ctaData.buttonText}
                <ArrowRight className="ml-3 w-6 h-6" />
              </a>
            </Button>
          </motion.div>

          <p className="text-gray-400 mt-6 text-sm">
            30-minute strategy session • Guaranteed ROI Insights • Tagalog
            support available
          </p>
        </motion.div>
      </div>
    </section>
  );
}
