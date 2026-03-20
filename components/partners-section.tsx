"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/config";

export function PartnersSection() {
  const partners = siteConfig.partners.items;
  // Double the array for seamless infinite scroll
  const doubledPartners = [...partners, ...partners];

  return (
    <section className="relative py-28 bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-semibold tracking-widest uppercase text-xs mb-4 block">
            Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text-elite">
            {siteConfig.partners.title}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {siteConfig.partners.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Infinite scrolling marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />

        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {doubledPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] mx-4"
            >
              <div className="glass-card rounded-2xl p-6 text-center hover-glow transition-all duration-500 group h-full">
                <div className="w-full h-16 mb-5 flex items-center justify-center">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    width={160}
                    height={64}
                    className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
