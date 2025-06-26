"use client";

import { Brain, Lightbulb, Zap, Globe, Code, Building } from "lucide-react";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/config";

const iconMap = {
  Brain,
  Lightbulb,
  Zap,
  Globe,
  Code,
  Building,
};

export function ServicesSection() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {siteConfig.services.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {siteConfig.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.items.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
