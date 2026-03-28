"use client";

import { Search, Layers, Rocket, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

const iconMap: Record<string, any> = {
  Search,
  Copy: Layers,
  Rocket,
};

export function ServicesSection() {
  const { t } = useLanguage();
  const services = t("services");

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-white"
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
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4 max-w-2xl tracking-tight">
            {services.title}
          </h2>
          <p className="text-lg text-black max-w-2xl">
            {services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {Array.isArray(services.items) &&
            services.items.map((service: any, index: number) => {
              const IconComponent =
                iconMap[service.iconName as keyof typeof iconMap] || Rocket;
              const isHighlighted = index === 1;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isHighlighted
                      ? "border-gray-900 bg-gray-900 shadow-xl shadow-gray-900/5"
                      : "border-gray-200 bg-white hover:shadow-lg hover:shadow-gray-100"
                  }`}
                >
                  <div className="p-8 md:p-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        isHighlighted ? "bg-white/10" : "bg-gray-100"
                      }`}>
                        <IconComponent className={`w-5 h-5 ${isHighlighted ? "text-white" : "text-black"}`} />
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Clock className={`w-3.5 h-3.5 ${isHighlighted ? "text-white/70" : "text-black"}`} />
                        <span className={`text-xs ${isHighlighted ? "text-white/70" : "text-black"}`}>
                          {service.timeline}
                        </span>
                      </div>
                    </div>

                    <div className="mb-2">
                      <span className={`text-xs font-medium tracking-wide uppercase ${
                        isHighlighted ? "text-white/70" : "text-brand"
                      }`}>
                        {service.pricing}
                      </span>
                    </div>

                    <h3 className={`text-xl font-bold mb-4 tracking-tight ${
                      isHighlighted ? "text-white" : "text-black"
                    }`}>
                      {service.title}
                    </h3>

                    <p className={`leading-relaxed mb-8 text-[15px] ${
                      isHighlighted ? "text-white/80" : "text-black"
                    }`}>
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.deliverables?.map((item: string, di: number) => (
                        <div key={di} className="flex items-start space-x-3">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${
                            isHighlighted ? "text-white/70" : "text-black"
                          }`} />
                          <span className={`text-sm ${
                            isHighlighted ? "text-white/80" : "text-black"
                          }`}>{item}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="/#contact"
                      className={`inline-flex items-center text-sm font-medium transition-colors ${
                        isHighlighted
                          ? "text-white hover:text-white/80"
                          : "text-black hover:text-brand"
                      }`}
                    >
                      Get started
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
