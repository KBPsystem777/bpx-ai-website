"use client";

import { ArrowRight, Sparkles, Calendar } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/config";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-purple-500/10 via-transparent to-blue-500/10 rounded-full animate-spin-slow" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-purple-400 mr-3" />
            <span className="text-purple-400 font-semibold tracking-wide uppercase text-sm">
              {siteConfig.company.name}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
            {siteConfig.hero.title}
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {siteConfig.hero.highlight}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              {siteConfig.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <a
                href={siteConfig.consultation.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book Consultation
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
