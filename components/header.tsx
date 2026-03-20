"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { Globe, Menu, X, ArrowRight } from "lucide-react";
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-slate-950/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <div className="flex-1">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-bold gradient-text-elite tracking-tight">
              {siteName}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-8">
          {Array.isArray(navLinks) &&
            navLinks.map((link: any, index: number) => (
              <Link
                key={index}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium whitespace-nowrap relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
        </nav>

        <div className="flex-1 flex justify-end items-center">
          <div className="hidden md:flex items-center space-x-3 border-l border-slate-800/50 pl-8">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-500 hover:text-white flex items-center space-x-1.5 h-8 px-3"
              onClick={() => setLanguage(language === "en" ? "tl" : "en")}
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold">{language === "en" ? "EN" : "TL"}</span>
            </Button>

            <Button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-full text-sm h-9 px-5 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300 group"
              asChild
            >
              <Link href={cta.href}>
                {cta.label}
                <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-500 hover:text-white flex items-center space-x-1.5 h-8 px-2"
              onClick={() => setLanguage(language === "en" ? "tl" : "en")}
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold">{language === "en" ? "EN" : "TL"}</span>
            </Button>
            <button
              className="text-slate-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 overflow-hidden"
          >
            <div className="py-6 px-4 space-y-4">
              {Array.isArray(navLinks) &&
                navLinks.map((link: any, index: number) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block text-slate-300 hover:text-white transition-colors text-base font-medium py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              <div className="pt-2">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full h-11" asChild>
                  <Link href={cta.href} onClick={() => setIsMenuOpen(false)}>
                    {cta.label}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
