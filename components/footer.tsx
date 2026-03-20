"use client";

import { useLanguage } from "@/components/language-provider";
import Link from "next/link";

export function Footer() {
  const { t } = useLanguage();
  const footerData = t("footer");

  return (
    <footer className="relative bg-slate-950">
      <div className="section-divider" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text-elite mb-6 inline-block">
              {t("meta.siteName")}
            </h3>
            <p className="text-slate-500 mb-6 max-w-sm leading-relaxed text-sm">
              {footerData.companyDescription}
            </p>
            <div className="space-y-3">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] mb-1">Email</span>
                <a
                  href={`mailto:${footerData.contactInfo.email}`}
                  className="text-sm text-slate-400 hover:text-purple-400 transition-colors"
                >
                  {footerData.contactInfo.email}
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] mb-1">Phone</span>
                <a
                  href={`tel:${footerData.contactInfo.phone.replace(/\s/g, "")}`}
                  className="text-sm text-slate-400 hover:text-purple-400 transition-colors"
                >
                  {footerData.contactInfo.phone}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link: any, i: number) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">{footerData.copyright}</p>
          <p className="text-xs text-slate-700">Crafted with precision by BPxAI Labs</p>
        </div>
      </div>
    </footer>
  );
}
