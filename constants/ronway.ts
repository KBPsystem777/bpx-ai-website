/**
 * Static configuration for the Ronway scan directory: sector matchers, risk
 * styling, sort ordering, and pagination size. Kept out of components so both
 * the directory and detail pages import a single source of truth.
 */

import type { RiskLevel, RiskStyle } from "@/types/ronway";

/**
 * Domain → sector matchers. Order matters: more specific patterns must precede
 * broader ones so, e.g., a bank domain isn't swallowed by a generic rule.
 */
export const CATEGORY_MATCHERS: ReadonlyArray<readonly [string, RegExp]> = [
  ["Government & Public Sector", /\.gov\.ph/],
  [
    "Banking & Financial Services",
    /bdo\.com|bpi\.com|metrobank|unionbankph|maya\.ph|bsp\.gov/,
  ],
  [
    "Fintech & Digital Payments",
    /gcash|paymongo|dragonpay|coins\.ph|pdax|uniondigital/,
  ],
  ["Telecommunications", /globe\.com\.ph|smart\.com\.ph|pldt|dito\.ph|converge/],
  ["Education", /\.edu\.ph|\.edu$/],
  [
    "Food & Restaurants",
    /jollibee|chowking|greenwich|manginasal|redribbon|maxschicken|shakey|potatocorner|frankies/,
  ],
  ["E-Commerce & Retail", /shopee|lazada|carousell/],
  ["Airlines & Travel", /airasia|philippineairlines|cebuair/],
  ["Energy & Utilities", /meralco|petron|phoenixfuels|seaoil/],
  ["Consumer Goods & FMCG", /coca-cola|nestle|unilever/],
  [
    "Conglomerates & Holdings",
    /ayala\.com|sminvestments|jgsummit|sanmiguel|aboitiz|megaworld|filinvest|robinsonsland|century-properties|dmciholdings|vistaresidences|kmc\.solutions/,
  ],
  [
    "Tech & IT Services",
    /arcanys|pointwest|stratpoint|xurpas|voyager|orangeandbronze|sprout\.ph|yondu|exist\.com/,
  ],
  ["Mobility & Delivery", /grab\.com|foodpanda/],
  ["Media & Entertainment", /kumu/],
  ["Recruitment & HR", /kalibrr/],
  [
    "Global Tech & Research",
    /facebook|google|amazon|microsoft|cambridge\.org|example\.com/,
  ],
];

/** Fallback sector when no matcher applies. */
export const DEFAULT_CATEGORY = "Other";

/** Per-level Tailwind class bundles for badges, dots, bars, and row hovers. */
export const RISK_STYLES: Record<RiskLevel, RiskStyle> = {
  Critical: {
    badge: "border-red-200 bg-red-50 text-red-700",
    text: "text-red-700",
    dot: "bg-red-500",
    bar: "bg-red-500",
    rowHover: "hover:bg-red-50/40",
  },
  High: {
    badge: "border-orange-200 bg-orange-50 text-orange-700",
    text: "text-orange-700",
    dot: "bg-orange-500",
    bar: "bg-orange-500",
    rowHover: "hover:bg-orange-50/40",
  },
  Medium: {
    badge: "border-amber-200 bg-amber-50 text-amber-700",
    text: "text-amber-700",
    dot: "bg-amber-400",
    bar: "bg-amber-400",
    rowHover: "hover:bg-amber-50/30",
  },
  Low: {
    badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
    bar: "bg-emerald-500",
    rowHover: "hover:bg-emerald-50/30",
  },
  Pass: {
    badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
    bar: "bg-emerald-500",
    rowHover: "hover:bg-emerald-50/30",
  },
  Incomplete: {
    badge: "border-gray-200 bg-gray-50 text-gray-500",
    text: "text-gray-400",
    dot: "bg-gray-300",
    bar: "bg-gray-300",
    rowHover: "hover:bg-gray-50/60",
  },
};

/** Fallback style for any unexpected/unknown level string. */
export const INCOMPLETE_STYLE: RiskStyle = RISK_STYLES.Incomplete;

/** Severity ranking — lower is worse. Drives sorting and "worst level" logic. */
export const RISK_ORDER: Record<RiskLevel, number> = {
  Critical: 0,
  High: 1,
  Medium: 2,
  Low: 3,
  Pass: 4,
  Incomplete: 5,
};

/** Risk levels shown in the directory legend, in display order. */
export const RISK_LEGEND: ReadonlyArray<readonly [RiskLevel, string]> = [
  ["Critical", "bg-red-500"],
  ["High", "bg-orange-500"],
  ["Medium", "bg-amber-400"],
  ["Low", "bg-emerald-500"],
  ["Incomplete", "bg-gray-300"],
];

/** Domains shown per page in the directory. */
export const DOMAINS_PER_PAGE = 20;
