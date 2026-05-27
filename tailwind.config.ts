import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sora)", "system-ui", "sans-serif"],
        display: [
          "var(--font-display)",
          "Iowan Old Style",
          "Apple Garamond",
          "Baskerville",
          "Times New Roman",
          "serif",
        ],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Named brand tokens — used directly for gold/teal/ivory accents
        ink: "hsl(var(--ink))",
        ivory: "hsl(var(--ivory))",
        gold: {
          50: "#FAF6EA",
          100: "#F4ECCF",
          200: "#E6D597",
          300: "#D9BE6B",
          400: "#D1B25C",
          500: "#C9A84C",
          DEFAULT: "#C9A84C",
          600: "#A88A35",
          700: "#7E6624",
          800: "#574518",
        },
        teal: {
          400: "#226666",
          500: "#1A4D4D",
          DEFAULT: "#1A4D4D",
          600: "#143A3A",
          700: "#0F2D2D",
        },
        // Brand navy retained for continuity with existing imagery / email template
        brand: {
          DEFAULT: "#0F2044",
          50: "#EFF4FF",
          100: "#D6E2FF",
          600: "#1A3568",
          700: "#0F2044",
          900: "#08111F",
        },
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "var(--radius)",
        md: "calc(var(--radius) + 2px)",
        lg: "calc(var(--radius) + 4px)",
        xl: "calc(var(--radius) + 8px)",
        "2xl": "calc(var(--radius) + 12px)",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
        editorial: "-0.02em",
        wide: "0.04em",
        wider: "0.08em",
        widest: "0.18em",
      },
      fontSize: {
        "display-xs": ["2.25rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-sm": ["3rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-md": ["3.75rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-lg": ["4.5rem", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-xl": ["5.5rem", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.6s ease-out both",
        "shimmer": "shimmer 8s linear infinite",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
