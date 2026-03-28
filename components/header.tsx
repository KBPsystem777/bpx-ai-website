"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const navLinks = t("navigation.links");
  const cta = t("navigation.ctaButton");
  const siteName = t("meta.siteName");

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <div className="flex-1">
          <Link href="/" className="flex items-center space-x-2.5 group">
            <Image
              src="/bpxai.png"
              alt="BPxAI Labs"
              width={28}
              height={28}
              className="rounded"
            />
            <span className="text-base font-bold tracking-tight text-gray-900">
              {siteName}
            </span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center justify-center space-x-1">
          {Array.isArray(navLinks) &&
            navLinks.map((link: any, index: number) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-500 hover:text-gray-900 transition-colors text-sm px-3.5 py-2"
              >
                {link.label}
              </Link>
            ))}
        </nav>

        <div className="flex-1 flex justify-end items-center">
          <div className="hidden lg:flex items-center space-x-3">
            <button
              className="text-gray-400 hover:text-gray-600 transition-colors text-xs tracking-wide px-2.5 py-1.5 rounded-md hover:bg-gray-100"
              onClick={() => setLanguage(language === "en" ? "tl" : "en")}
              aria-label={`Switch language to ${language === "en" ? "Tagalog" : "English"}`}
            >
              <Globe className="w-3.5 h-3.5 inline mr-1" />
              {language.toUpperCase()}
            </button>

            <Button
              asChild
              size="sm"
              className="bg-brand hover:bg-brand-600 text-white rounded-lg text-sm font-medium px-4 h-9"
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </div>

          <div className="lg:hidden flex items-center space-x-2">
            <button
              className="text-gray-400 hover:text-gray-600 transition-colors text-xs"
              onClick={() => setLanguage(language === "en" ? "tl" : "en")}
              aria-label={`Switch language to ${language === "en" ? "Tagalog" : "English"}`}
            >
              {language.toUpperCase()}
            </button>
            <button
              className="text-gray-600 hover:text-gray-900 transition-colors p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 space-y-1" aria-label="Mobile navigation">
              {Array.isArray(navLinks) &&
                navLinks.map((link: any, index: number) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block text-gray-600 hover:text-gray-900 transition-colors text-sm py-2.5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              <div className="pt-3">
                <Button
                  asChild
                  className="w-full bg-brand hover:bg-brand-600 text-white rounded-lg text-sm h-10"
                >
                  <Link href={cta.href} onClick={() => setIsMenuOpen(false)}>
                    {cta.label}
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
