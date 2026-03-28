"use client";

import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function ConsultationCTA() {
  const { t } = useLanguage();
  const ctaData = t("cta");

  return (
    <section className="py-24 md:py-32 bg-brand">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              {ctaData.title}
            </h2>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              {ctaData.description}
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 h-12 text-sm font-semibold rounded-lg transition-all"
            >
              <a
                href={ctaData.buttonHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 w-4 h-4" />
                {ctaData.buttonText}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>

            <div className="mt-10 flex items-center justify-center gap-8 md:gap-12">
              {ctaData.stats?.map((stat: any, i: number) => (
                <div key={i} className="text-center">
                  <div className="text-base font-semibold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
