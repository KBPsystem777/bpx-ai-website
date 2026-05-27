"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { t } = useLanguage();
  const footerData = t("footer");
  const siteName = t("meta.siteName");

  return (
    <footer className="relative bg-background border-t border-border/60">
      <div className="container mx-auto py-16 lg:py-20">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Brand + description */}
          <div className="col-span-2 md:col-span-12 lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 mb-5 group"
              aria-label="BPxAI home"
            >
              <Image
                src="/bpxai.png"
                alt=""
                width={26}
                height={26}
                className="rounded-sm"
              />
              <span className="text-[15px] font-semibold tracking-tight text-foreground">
                {siteName}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {footerData.companyDescription}
            </p>

            <div className="mt-8 pt-6 border-t border-border/60">
              <p className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground mb-2">
                Tagline
              </p>
              <p className="font-display text-foreground text-lg leading-snug tracking-tight">
                Engineered for the post-quantum decade.
              </p>
            </div>
          </div>

          {/* Practices */}
          <nav
            aria-label="Practices"
            className="col-span-1 md:col-span-4 lg:col-span-3"
          >
            <h4 className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground mb-5">
              Practices
            </h4>
            <ul className="space-y-3">
              {footerData.solutions?.map((link: any, i: number) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-foreground/85 hover:text-foreground transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight
                      className="w-3.5 h-3.5 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Navigation */}
          <nav
            aria-label="Site navigation"
            className="col-span-1 md:col-span-4 lg:col-span-2"
          >
            <h4 className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerData.quickLinks?.map((link: any, i: number) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-foreground/85 hover:text-foreground transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight
                      className="w-3.5 h-3.5 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <h4 className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${footerData.contactInfo?.email}`}
                  className="text-sm text-foreground/85 hover:text-foreground transition-colors"
                >
                  {footerData.contactInfo?.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footerData.contactInfo?.phone?.replace(
                    /\s/g,
                    "",
                  )}`}
                  className="text-sm text-foreground/85 hover:text-foreground transition-colors"
                >
                  {footerData.contactInfo?.phone}
                </a>
              </li>
              <li className="text-sm text-muted-foreground leading-relaxed">
                {footerData.contactInfo?.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom band */}
        <div className="pt-8 border-t border-border/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono tracking-wider">
            {footerData.copyright}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono tracking-wider"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono tracking-wider"
            >
              Terms
            </Link>
            <span className="text-xs text-muted-foreground font-mono tracking-wider">
              EN · FIL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
