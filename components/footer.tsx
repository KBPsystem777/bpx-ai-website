"use client";

import Link from "next/link";
import Image from "next/image";

import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { t } = useLanguage();
  const footerData = t("footer");
  const siteName = t("meta.siteName");

  return (
    <footer className="relative bg-background border-t border-border/60">
      <div className="container mx-auto py-14 lg:py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 group"
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

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-8 gap-y-3"
          >
            {footerData.quickLinks?.map((link: any, i: number) => (
              <Link
                key={i}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-xs text-muted-foreground font-mono tracking-wider">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
