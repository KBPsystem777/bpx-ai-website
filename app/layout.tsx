import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

import localFont from "next/font/local";

import { metadata as siteData } from "./metadata/metadata";
import { LanguageProvider } from "@/components/language-provider";
import { Header } from "@/components/header";
import { siteContent } from "./data/content";

import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "./fonts/inter-var.woff2",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

export const metadata: Metadata = {
  title: siteData.title,
  description: siteData.description,
  keywords: siteData.keywords,
  openGraph: siteData.openGraph,
  twitter: siteData.twitter,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider content={siteContent}>
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
        </LanguageProvider>
      </body>
    </html>
  );
}
