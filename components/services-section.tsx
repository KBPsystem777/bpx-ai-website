"use client";

import { Search, Copy, Rocket, CheckCircle2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

const iconMap = {
  Search,
  Copy,
  Rocket,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const features = [
  ["Custom LLM & Agent Development", "Workflow Automation Pipelines", "Predictive Analytics & ML Models"],
  ["Smart Contract Engineering", "Tokenized Asset Platforms", "Cross-chain Integrations"],
  ["Enterprise Web & Mobile Apps", "API-first Architecture", "Cloud-native Deployments"],
];

export function ServicesSection() {
  const { t } = useLanguage();
  const services = t("services");

  return (
    <section id="services" className="relative py-28 bg-slate-950 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 font-semibold tracking-widest uppercase text-xs mb-4 block">
            Our Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text-elite">
            {services.title}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {Array.isArray(services.items) &&
            services.items.map((service: any, index: number) => {
              const IconComponent =
                iconMap[service.iconName as keyof typeof iconMap] || Rocket;

              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="glass-card rounded-2xl p-8 h-full hover-glow transition-all duration-500 relative overflow-hidden">
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] to-blue-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                    <div className="relative z-10">
                      {/* Icon + Pricing tag */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/10 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/40 transition-all duration-500">
                          <IconComponent className="w-6 h-6 text-purple-400" />
                        </div>
                        <span className="text-[10px] font-bold text-purple-400/80 uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5">
                          {service.pricing}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                        {service.description}
                      </p>

                      {/* Feature list */}
                      <div className="space-y-3 pt-6 border-t border-slate-700/30">
                        {features[index]?.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center space-x-3 text-sm text-slate-400">
                            <CheckCircle2 className="w-4 h-4 text-purple-500/70 shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Arrow indicator */}
                      <div className="mt-8 flex items-center text-purple-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <span>Learn more</span>
                        <ArrowUpRight className="w-4 h-4 ml-1" />
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
