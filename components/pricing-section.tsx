"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function PricingSection() {
  const { t } = useLanguage();
  const pricing = t("pricing");

  return (
    <section id="pricing" className="relative py-28 bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Background glow for highlighted card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 font-semibold tracking-widest uppercase text-xs mb-4 block">
            Engagement Models
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text-elite">
            {pricing.title}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {pricing.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {Array.isArray(pricing.tiers) &&
            pricing.tiers.map((tier: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                viewport={{ once: true }}
                className={`relative group ${tier.highlight ? "md:-mt-4 md:mb-4" : ""}`}
              >
                {/* Highlighted card glow ring */}
                {tier.highlight && (
                  <div className="absolute -inset-[1px] bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500/50 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />
                )}

                <div className={`relative glass-card rounded-2xl p-8 h-full hover-glow transition-all duration-500 ${
                  tier.highlight ? "bg-gradient-to-b from-slate-800/80 to-slate-900/90" : ""
                }`}>
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] shadow-lg shadow-purple-500/25">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8 pt-2">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                        {tier.price}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">{tier.description}</p>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {tier.features.map((feature: string, fIndex: number) => (
                      <li
                        key={fIndex}
                        className="flex items-start space-x-3 text-sm text-slate-300"
                      >
                        <div className="w-5 h-5 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-purple-400" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full h-12 rounded-xl font-semibold transition-all duration-300 group/btn ${
                      tier.highlight
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
                        : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600"
                    }`}
                    asChild
                  >
                    <a href="/#contact">
                      {tier.cta}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
