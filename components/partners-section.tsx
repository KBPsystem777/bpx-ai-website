"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { siteConfig } from "@/config/config";

const editorialEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function PartnersSection() {
  return (
    <section className="relative py-20 lg:py-24 bg-background border-t border-border/60">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: editorialEase }}
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-12 items-start mb-12 lg:mb-16"
        >
          <div>
            <div className="eyebrow mb-4">Tooling & Alliances</div>
            <h2 className="font-display text-foreground text-2xl lg:text-3xl leading-tight tracking-tight font-light">
              The standards and platforms our practice runs on.
            </h2>
          </div>
          <p className="text-sm lg:text-base text-muted-foreground leading-relaxed max-w-2xl">
            We partner where the protocol matters — public-chain settlement
            layers, agentic runtimes, model providers, and the open-source
            cryptographic libraries our migrations rely on.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: editorialEase }}
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden"
        >
          {siteConfig.partners.items.map((partner, index) => (
            <a
              key={index}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-3 bg-surface px-6 py-8 hover:bg-muted/30 transition-colors duration-300"
              aria-label={`${partner.name} (opens in new tab)`}
            >
              <div className="w-full h-9 flex items-center justify-center bg-ivory/95 rounded-sm px-3 py-1.5">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={140}
                  height={36}
                  className="max-h-7 w-auto object-contain"
                />
              </div>
              <span className="text-[11px] tracking-wider uppercase text-muted-foreground group-hover:text-foreground transition-colors font-mono">
                {partner.name}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
