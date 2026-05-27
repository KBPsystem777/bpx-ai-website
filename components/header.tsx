"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const navLinks = t("navigation.links");
  const cta = t("navigation.ctaButton");
  const siteName = t("meta.siteName");

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto h-16 lg:h-[72px] flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group shrink-0"
          aria-label="BPxAI home"
        >
          <Image
            src="/bpxai.png"
            alt=""
            width={28}
            height={28}
            className="rounded-sm"
            priority
          />
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            {siteName}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Primary"
        >
          {Array.isArray(navLinks) &&
            navLinks.map((link: any, index: number) => (
              <Link
                key={index}
                href={link.href}
                className="relative text-[13px] text-muted-foreground hover:text-foreground transition-colors px-3.5 py-2"
              >
                {link.label}
              </Link>
            ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Language toggle */}
          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "tl" : "en")}
            className="hidden lg:inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors px-2.5 py-1.5"
            aria-label={`Switch language to ${
              language === "en" ? "Filipino" : "English"
            }`}
          >
            <Globe className="w-3.5 h-3.5" aria-hidden />
            {language === "en" ? "EN" : "FIL"}
          </button>

          {/* CTA */}
          <Button
            asChild
            size="sm"
            className="hidden lg:inline-flex bg-foreground text-background hover:bg-foreground/90 rounded-sm h-9 px-4 text-[13px] font-medium tracking-tight"
          >
            <Link href={cta.href}>
              {cta.label}
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
            </Link>
          </Button>

          {/* Mobile toggles */}
          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "tl" : "en")}
            className="lg:hidden text-[11px] font-medium tracking-wider uppercase text-muted-foreground px-2 py-1"
            aria-label={`Switch language to ${
              language === "en" ? "Filipino" : "English"
            }`}
          >
            {language === "en" ? "EN" : "FIL"}
          </button>
          <button
            type="button"
            className="lg:hidden text-foreground p-2 -mr-2"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" aria-hidden />
            ) : (
              <Menu className="w-5 h-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <nav
              className="container mx-auto py-5 space-y-1"
              aria-label="Mobile navigation"
            >
              {Array.isArray(navLinks) &&
                navLinks.map((link: any, index: number) => (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between text-sm text-foreground/90 hover:text-foreground transition-colors py-3 border-b border-border/40 last:border-0"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      className="w-4 h-4 text-muted-foreground"
                      aria-hidden
                    />
                  </Link>
                ))}
              <div className="pt-4">
                <Button
                  asChild
                  className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-sm h-11 text-sm font-medium tracking-tight"
                >
                  <Link
                    href={cta.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {cta.label}
                    <ArrowUpRight className="w-4 h-4" aria-hidden />
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
