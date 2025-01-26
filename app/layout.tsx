import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css"

export const metadata: Metadata = {
  title: "BPxAI - Transforming Business with AI-Powered Agents",
  description:
    "BPxAI revolutionizes businesses with AI-driven solutions. Save time, cut costs, and enhance operations efficiency with advanced AI agents. Discover the future today!",
  keywords: [
    "AI",
    "Machine Learning",
    "Business",
    "AI Agents",
    "BPxAI",
    "Recruitment",
    "HR",
    "AI Solutions",
    "AI recruitment",
    "AI hiring solutions",
    "recruitment automation",
    "AI-powered agents",
    "recruitment industry pain points",
    "cost-effective hiring",
    "BPxAI solutions",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />{" "}
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
