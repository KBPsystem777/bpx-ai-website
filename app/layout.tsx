import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

import { JetBrains_Mono, Sora } from "next/font/google";

import { metadata as siteData } from "./metadata/metadata";
import { LanguageProvider } from "@/components/language-provider";
import { Header } from "@/components/header";
import { siteContent } from "./data/content";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
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
      <body className={`${sora.variable} ${jetbrains.variable} font-sans`}>
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
