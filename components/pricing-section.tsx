"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function PricingSection() {
  const { t } = useLanguage();
  const pricing = t("pricing");

  return (
    <section id="pricing" className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {pricing.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {pricing.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Array.isArray(pricing.tiers) &&
            pricing.tiers.map((tier: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-3xl border ${
                  tier.highlight
                    ? "bg-gradient-to-b from-slate-800 to-slate-900 border-purple-500 shadow-2xl shadow-purple-500/10 scale-105 z-10"
                    : "bg-slate-800/20 border-slate-700"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-white">
                      {tier.price}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature: string, fIndex: number) => (
                    <li
                      key={fIndex}
                      className="flex items-start space-x-3 text-sm text-gray-300"
                    >
                      <Check className="w-5 h-5 text-purple-400 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full h-12 rounded-xl font-semibold transition-all ${
                    tier.highlight
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      : "bg-slate-700 hover:bg-slate-600 text-white"
                  }`}
                >
                  {tier.cta}
                </Button>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
