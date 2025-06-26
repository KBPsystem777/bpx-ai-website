import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { metadata as siteData } from "./metadata/metadata";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BPxAI - Transforming Business with AI-Powered Agents",
  description:
    "BPxAI revolutionizes businesses with AI-driven solutions. Save time, cut costs, and enhance operations efficiency with advanced AI agents. Discover the future today!",
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
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
