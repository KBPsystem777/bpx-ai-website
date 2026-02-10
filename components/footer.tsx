"use client";

import { useLanguage } from "@/components/language-provider";
import Link from "next/link";

export function Footer() {
  const { t } = useLanguage();
  const footerData = t("footer");

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              {t("meta.siteName")}
            </h3>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              {footerData.companyDescription}
            </p>
            <div className="space-y-4">
              <p className="text-sm text-gray-500 flex flex-col">
                <span className="font-bold text-gray-400 mb-1">Email:</span>
                <a
                  href={`mailto:${footerData.contactInfo.email}`}
                  className="hover:text-purple-400 transition-colors"
                >
                  {footerData.contactInfo.email}
                </a>
              </p>
              <p className="text-sm text-gray-500 flex flex-col">
                <span className="font-bold text-gray-400 mb-1">Phone:</span>
                <a
                  href={`tel:${footerData.contactInfo.phone.replace(/\s/g, "")}`}
                  className="hover:text-purple-400 transition-colors"
                >
                  {footerData.contactInfo.phone}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {footerData.quickLinks.map((link: any, i: number) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-sm text-gray-500">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
