"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Link2,
  ShieldAlert,
  Layers,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const pillarIcons: Record<string, any> = {
  ai: Brain,
  web3: Link2,
  risk: ShieldAlert,
  systems: Layers,
};

export function CapabilitiesSection() {
  const { t } = useLanguage();
  const capabilities = t("capabilities");

  return (
    <section
      id="capabilities"
      className="py-24 md:py-32 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm text-brand font-medium mb-4 block">
            {capabilities.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand mb-4 max-w-3xl leading-tight tracking-tight">
            {capabilities.title}
          </h2>
          <p className="text-lg text-black max-w-2xl leading-relaxed">
            {capabilities.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Array.isArray(capabilities.pillars) &&
            capabilities.pillars.map((pillar: any, index: number) => {
              const Icon = pillarIcons[pillar.id] || Layers;

              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group p-8 md:p-10 rounded-2xl border border-gray-200 bg-white hover:shadow-lg hover:shadow-gray-100 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-brand flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-gray-400 font-medium">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-3 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-black leading-relaxed mb-6 text-[15px]">
                    {pillar.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {pillar.capabilities.map((cap: string, ci: number) => (
                      <span
                        key={ci}
                        className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  <div className="pt-5 border-t border-gray-100">
                    <span className="text-sm font-semibold text-black">
                      {pillar.metric}
                    </span>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
