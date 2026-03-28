"use client";

import { useLanguage } from "@/components/language-provider";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const footerData = t("footer");

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2.5 mb-5">
              <Image
                src="/bpxai.png"
                alt="BPxAI Labs"
                width={24}
                height={24}
                className="rounded"
              />
              <span className="text-base font-bold tracking-tight text-black">
                {t("meta.siteName")}
              </span>
            </div>
            <p className="text-sm text-black leading-relaxed max-w-xs">
              {footerData.companyDescription}
            </p>
          </div>

          <nav aria-label="Quick links">
            <h4 className="text-xs text-black tracking-wide uppercase mb-4 font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerData.quickLinks?.map((link: any, i: number) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-black hover:text-black transition-colors text-sm flex items-center group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Solutions">
            <h4 className="text-xs text-black tracking-wide uppercase mb-4 font-medium">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {footerData.solutions?.map((link: any, i: number) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-black hover:text-black transition-colors text-sm flex items-center group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="text-xs text-black tracking-wide uppercase mb-4 font-medium">
              Contact
            </h4>
            <div className="space-y-2.5">
              <a
                href={`mailto:${footerData.contactInfo?.email}`}
                className="text-black hover:text-black transition-colors text-sm block"
              >
                {footerData.contactInfo?.email}
              </a>
              <a
                href={`tel:${footerData.contactInfo?.phone?.replace(/\s/g, "")}`}
                className="text-black hover:text-black transition-colors text-sm block"
              >
                {footerData.contactInfo?.phone}
              </a>
              <p className="text-black text-sm">
                {footerData.contactInfo?.address}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-black">
            {footerData.copyright}
          </p>
          <div className="flex items-center space-x-5">
            <Link
              href="#"
              className="text-xs text-black hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-black hover:text-black transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
