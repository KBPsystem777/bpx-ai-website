"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { siteConfig } from "@/config/config";

export function TeamSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {siteConfig.team.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {siteConfig.team.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {siteConfig.team.members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="relative mb-8">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-blue-500 p-1 bg-gradient-to-r from-purple-500 to-blue-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {member.name}
              </h3>

              <p className="text-purple-400 font-semibold mb-4 text-lg">
                {member.role}
              </p>

              <p className="text-gray-400 leading-relaxed max-w-sm mx-auto">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
