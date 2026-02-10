"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { Globe, Menu, X } from "lucide-react";

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = t("navigation.links");
  const cta = t("navigation.ctaButton");
  const siteName = t("meta.siteName");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <div className="flex-1">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
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
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
        </nav>

        <div className="flex-1 flex justify-end items-center">
          <div className="hidden md:flex items-center space-x-4 border-l border-slate-700 pl-8">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white flex items-center space-x-2"
              onClick={() => setLanguage(language === "en" ? "tl" : "en")}
            >
              <Globe className="w-4 h-4" />
              <span>{language === "en" ? "EN" : "TL"}</span>
            </Button>

            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full">
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white flex items-center space-x-2"
              onClick={() => setLanguage(language === "en" ? "tl" : "en")}
            >
              <Globe className="w-4 h-4" />
              <span>{language === "en" ? "EN" : "TL"}</span>
            </Button>
            <button
              className="text-gray-300 pointer-events-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 py-4 px-4 space-y-4">
          {Array.isArray(navLinks) &&
            navLinks.map((link: any, index: number) => (
              <Link
                key={index}
                href={link.href}
                className="block text-gray-300 hover:text-white transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full">
            <Link href={cta.href} onClick={() => setIsMenuOpen(false)}>
              {cta.label}
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
