import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { metadata as siteData } from "./metadata/metadata";

import "./globals.css";

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
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
