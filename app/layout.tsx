import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css"

export const metadata: Metadata = {
  title: "BPxAI - Transforming Business with AI-Powered Agents",
  description:
    "BPxAI revolutionizes businesses with AI-driven solutions. Save time, cut costs, and enhance operations efficiency with advanced AI agents. Discover the future today!",
  keywords: [
    "AI business automation",
    "AI for financial services",
    "AI for car rentals",
    "AI for dealerships",
    "BPO automation",
    "sales automation",
    "AI agents",
    "business process automation",
    "intelligent agents",
    "AI for business",
    "cost-effective AI solutions",
    "AI transformation",
    "BPxAI solutions",
    "AI-powered sales agents",
    "automated customer service",
    "AI for industries",
    "financial industry automation",
    "car rental automation",
    "BPO efficiency",
    "sales growth AI",
    "process optimization AI",
  ],
  openGraph: {
    title: "BPxAI - Transforming Business with AI-Powered Agents",
    description:
      "BPxAI revolutionizes businesses with AI-driven solutions. Save time, cut costs, and enhance operations efficiency with advanced AI agents. Discover the future today!",
    url: "https://www.bpxai.com",
    siteName: "BPxAI",
    images: [
      {
        url: "https://www.bpxai.com/bpxai-logos/bpxai_1.png",
        width: 1200,
        height: 630,
        alt: "BPxAI Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BPxAI - Transforming Business with AI-Powered Agents",
    description:
      "BPxAI revolutionizes businesses with AI-driven solutions. Save time, cut costs, and enhance operations efficiency with advanced AI agents. Discover the future today!",
    images: ["https://www.bpxai.com/bpxai-logos/bpxai_1.png"], // Update with your image URL
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
