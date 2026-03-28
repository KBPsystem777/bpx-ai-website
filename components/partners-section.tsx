"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/config";

export function PartnersSection() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm text-black tracking-wide uppercase">
            Technology Partners
          </span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {siteConfig.partners.items.map((partner, index) => (
            <motion.a
              key={index}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center justify-center p-5 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200"
              aria-label={`Visit ${partner.name} website`}
            >
              <div className="w-full h-10 mb-2 flex items-center justify-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={200}
                  height={80}
                  className="max-w-full max-h-full object-contain  group-hover:opacity-70 transition-all duration-200"
                />
              </div>
              <span className="text-xs text-black group-hover:text-black transition-colors">
                {partner.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
