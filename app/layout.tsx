import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { metadata as siteData } from "./metadata/metadata";
import { LanguageProvider } from "@/components/language-provider";
import { Header } from "@/components/header";
import { siteContent } from "./data/content";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
