"use client";

import { Search, Copy, Rocket, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

const iconMap = {
  Search,
  Copy,
  Rocket,
};

export function ServicesSection() {
  const { t } = useLanguage();
  const services = t("services");

  return (
    <section
      id="services"
      className="py-24 bg-slate-900 border-t border-slate-800"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {services.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.isArray(services.items) &&
            services.items.map((service: any, index: number) => {
              const IconComponent =
                iconMap[service.iconName as keyof typeof iconMap] || Rocket;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-8 bg-slate-800/30 rounded-3xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="w-7 h-7 text-purple-400" />
                    </div>

                    <div className="mb-4">
                      <span className="text-sm font-bold text-purple-400 uppercase tracking-widest">
                        {service.pricing}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-1">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-3 text-sm text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                        <span>
                          {index === 0
                            ? "Qualified Lead Generation"
                            : index === 1
                              ? "Rapid Implementation"
                              : "Dedicated Architecture Team"}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
