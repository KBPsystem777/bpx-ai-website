"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { siteConfig } from "@/config/config";
import { useLanguage } from "@/components/language-provider";

const editorialEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface LogoItem {
  name: string;
  logo: string;
  website?: string;
}

function LogoTile({ name, logo, website }: LogoItem) {
  const tile = (
    <div className="group flex items-center justify-center bg-surface border border-border/60 rounded-sm h-20 px-6 transition-all hover:border-border hover:scale-[1.02]">
      <Image
        src={logo}
        alt={name}
        width={160}
        height={56}
        className="max-h-10 w-auto object-contain"
      />
    </div>
  );

  if (!website) return tile;

  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      aria-label={`${name} (opens in new tab)`}
    >
      {tile}
    </a>
  );
}

export function PartnersSection() {
  const { t } = useLanguage();
  const clients = t("clients");

  return (
    <section className="relative py-24 lg:py-32 bg-background border-t border-border/60">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: editorialEase }}
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-[11px] tracking-widest uppercase text-muted-foreground font-mono">
            Trusted by institutions. Built on open infrastructure.
          </p>
        </motion.div>

        {/* Clients */}
        {Array.isArray(clients?.logos) && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: editorialEase }}
            viewport={{ once: true, margin: "-40px" }}
            className="mb-10"
          >
            <p className="text-[11px] tracking-widest uppercase text-accent font-mono text-center mb-6">
              Engagements
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {clients.logos.map((client: LogoItem, i: number) => (
                <LogoTile key={i} {...client} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: editorialEase, delay: 0.1 }}
          viewport={{ once: true, margin: "-40px" }}
        >
          <p className="text-[11px] tracking-widest uppercase text-accent font-mono text-center mb-6">
            Tooling
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {siteConfig.partners.items.map((partner, i) => (
              <LogoTile
                key={i}
                name={partner.name}
                logo={partner.logo}
                website={partner.website}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
