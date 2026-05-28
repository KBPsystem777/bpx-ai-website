// This file centralizes all content for easy CMS integration in the future.
// Copy intentionally minimal — Tesla-style: one statement, one supporting line.

const currentYear = new Date().getFullYear();

export const siteContent: Record<string, any> = {
  en: {
    meta: {
      siteName: "BPxAI",
      description:
        "Post-quantum cryptography, applied AI, and verifiable systems.",
    },

    navigation: {
      links: [
        { label: "Practices", href: "/#capabilities" },
        { label: "Quantum", href: "/quantum" },
        { label: "Ronway", href: "/ronway" },
        { label: "Contact", href: "/#contact" },
      ],
      ctaButton: {
        label: "Brief our partners",
        href: "/#contact",
      },
    },

    hero: {
      tagline: "Post-Quantum · AI · Verifiable Systems",
      headline: "Engineered for the post-quantum decade.",
      subheadline:
        "The Philippine practice for cryptographic resilience.",
      primaryCta: {
        label: "Brief our partners",
        href: "/#contact",
      },
      secondaryCta: {
        label: "Scan with Ronway",
        href: "/ronway",
      },
    },

    capabilities: {
      sectionLabel: "Practices",
      title: "Three disciplines. One posture.",
      subtitle: "Where cryptography, intelligence, and verifiability converge.",
      pillars: [
        {
          id: "pqc",
          title: "Post-Quantum Cryptography",
          shortTitle: "Quantum",
          description:
            "NIST-aligned migration. Mapped, sequenced, engineered.",
          metric: "FIPS 203 / 204 / 205",
        },
        {
          id: "ai",
          title: "Applied AI",
          shortTitle: "AI",
          description:
            "Decision-grade systems for high-consequence operations.",
          metric: "Doctrine published. Deployments running.",
        },
        {
          id: "web3",
          title: "Verifiable Systems",
          shortTitle: "Trust",
          description:
            "Blockchain where verifiability is the requirement.",
          metric: "Live across U.S. residential markets.",
        },
      ],
    },

    projectHighlights: {
      title: "Selected engagements.",
      subtitle: "Work we can speak to publicly.",
      items: [
        {
          title: "AI Defense Intelligence Framework",
          impact: "Doctrine, published",
          industry: "Defense",
        },
        {
          title: "Sovereign Revenue Infrastructure",
          impact: "+30% revenue collection",
          industry: "Public Sector",
        },
        {
          title: "Fortune 500 Utilities",
          impact: "−70% billing error rate",
          industry: "Energy",
        },
        {
          title: "MedixAI — Clinical Triage",
          impact: "Live, Philippine market",
          industry: "Healthcare",
        },
        {
          title: "ManageLife — Verified Housing",
          impact: "Live, U.S. markets",
          industry: "Financial Services",
        },
        {
          title: "Operational Intelligence Platform",
          impact: "Production",
          industry: "Enterprise",
        },
      ],
    },

    clients: {
      title: "Institutional engagements",
      logos: [
        { name: "Exelon", logo: "/clients/exelon.png" },
        { name: "BGE", logo: "/clients/bge.jpg" },
        { name: "Entergy", logo: "/clients/entergy.webp" },
        { name: "Xcel Energy", logo: "/clients/xcel.png" },
        { name: "DILG", logo: "/clients/dilg.png" },
      ],
    },

    research: {
      title: "Research.",
      subtitle: "Published positions on the post-quantum decade.",
      documents: [
        {
          title: "AI Defense Intelligence Framework",
          description:
            "Strategic doctrine on AI in Philippine defense and intelligence.",
          category: "Defense",
          date: "Feb 2026",
          fileSize: "PDF",
          downloadUrl:
            "/resources/AI_Defense_Intelligence_Framework_Philippines_Report.pdf",
          tags: ["AI Doctrine", "Defense", "Philippines"],
        },
      ],
    },

    cta: {
      title: "Begin the conversation.",
      description: "A thirty-minute partner briefing.",
      buttonText: "Brief our partners",
      buttonHref: "https://calendly.com/bpxailabs/30min",
    },

    footer: {
      companyDescription: "Engineered for the post-quantum decade.",
      contactInfo: {
        email: "bpxailabs@gmail.com",
        phone: "+63 917 713 8316",
        address: "Manila · Philippines",
      },
      quickLinks: [
        { label: "Practices", href: "/#capabilities" },
        { label: "Quantum", href: "/quantum" },
        { label: "Ronway", href: "/ronway" },
        { label: "Contact", href: "/#contact" },
      ],
      solutions: [
        { label: "Post-Quantum", href: "/quantum" },
        { label: "Applied AI", href: "/#capabilities" },
        { label: "Verifiable Systems", href: "/#capabilities" },
        { label: "Ronway", href: "/ronway" },
      ],
      copyright: `© ${currentYear} BPxAI.`,
    },
  },

  tl: {
    meta: {
      siteName: "BPxAI",
      description:
        "Post-quantum cryptography, inilapat na AI, at mga sistemang may katibayan.",
    },

    navigation: {
      links: [
        { label: "Mga Praktis", href: "/#capabilities" },
        { label: "Quantum", href: "/quantum" },
        { label: "Ronway", href: "/ronway" },
        { label: "Makipag-ugnayan", href: "/#contact" },
      ],
      ctaButton: {
        label: "Makipag-ugnayan",
        href: "/#contact",
      },
    },

    hero: {
      tagline: "Post-Quantum · AI · Katibayang Digital",
      headline: "Itinatayo para sa dekada ng post-quantum.",
      subheadline: "Ang Filipinong praktis para sa katibayang kriptograpiko.",
      primaryCta: {
        label: "Makipag-ugnayan",
        href: "/#contact",
      },
      secondaryCta: {
        label: "I-scan sa Ronway",
        href: "/ronway",
      },
    },

    capabilities: {
      sectionLabel: "Mga Praktis",
      title: "Tatlong disiplina. Isang panindigan.",
      subtitle: "Kung saan nagtatagpo ang kriptograpiya, AI, at katibayan.",
      pillars: [
        {
          id: "pqc",
          title: "Post-Quantum Cryptography",
          shortTitle: "Quantum",
          description: "Paglipat na nakaayon sa NIST. Tinatakda, isinasagawa.",
          metric: "FIPS 203 / 204 / 205",
        },
        {
          id: "ai",
          title: "Inilapat na AI",
          shortTitle: "AI",
          description: "Mga sistemang pang-pasiya para sa mahahalagang operasyon.",
          metric: "May doktrina. May deployment.",
        },
        {
          id: "web3",
          title: "Mga Sistemang May Katibayan",
          shortTitle: "Katibayan",
          description: "Blockchain kung saan ang katibayan ang pangangailangan.",
          metric: "Live sa U.S. residential markets.",
        },
      ],
    },

    projectHighlights: {
      title: "Mga piling engagement.",
      subtitle: "Mga gawaing maipapahayag namin sa publiko.",
      items: [
        {
          title: "AI Defense Intelligence Framework",
          impact: "Naipalathalang doktrina",
          industry: "Tanggulan",
        },
        {
          title: "Sovereign Revenue Infrastructure",
          impact: "+30% koleksyon",
          industry: "Pampublikong Sektor",
        },
        {
          title: "Fortune 500 Utilities",
          impact: "−70% pagkakamali sa pagsingil",
          industry: "Enerhiya",
        },
        {
          title: "MedixAI — Klinikal na Triage",
          impact: "Live, Pilipinas",
          industry: "Pangkalusugan",
        },
        {
          title: "ManageLife — Pabahay na May Katibayan",
          impact: "Live, U.S. markets",
          industry: "Pinansiyal",
        },
        {
          title: "Operasyonal na Plataporma",
          impact: "Sa produksyon",
          industry: "Negosyo",
        },
      ],
    },

    clients: {
      title: "Mga institusyonal na engagement",
      logos: [
        { name: "Exelon", logo: "/clients/exelon.png" },
        { name: "BGE", logo: "/clients/bge.jpg" },
        { name: "Entergy", logo: "/clients/entergy.webp" },
        { name: "Xcel Energy", logo: "/clients/xcel.png" },
        { name: "DILG", logo: "/clients/dilg.png" },
      ],
    },

    research: {
      title: "Pananaliksik.",
      subtitle: "Mga naipalathalang panindigan sa dekada ng post-quantum.",
      documents: [
        {
          title: "AI Defense Intelligence Framework",
          description: "Doktrina sa AI para sa Philippine defense at intelligence.",
          category: "Tanggulan",
          date: "Peb 2026",
          fileSize: "PDF",
          downloadUrl:
            "/resources/AI_Defense_Intelligence_Framework_Philippines_Report.pdf",
          tags: ["AI Doctrine", "Defense", "Pilipinas"],
        },
      ],
    },

    cta: {
      title: "Simulan ang pag-uusap.",
      description: "Isang tatlumpung-minutong partner briefing.",
      buttonText: "Makipag-ugnayan",
      buttonHref: "https://calendly.com/bpxailabs/30min",
    },

    footer: {
      companyDescription: "Itinatayo para sa dekada ng post-quantum.",
      contactInfo: {
        email: "bpxailabs@gmail.com",
        phone: "+63 917 713 8316",
        address: "Maynila · Pilipinas",
      },
      quickLinks: [
        { label: "Mga Praktis", href: "/#capabilities" },
        { label: "Quantum", href: "/quantum" },
        { label: "Ronway", href: "/ronway" },
        { label: "Makipag-ugnayan", href: "/#contact" },
      ],
      solutions: [
        { label: "Post-Quantum", href: "/quantum" },
        { label: "Inilapat na AI", href: "/#capabilities" },
        { label: "Mga Sistemang May Katibayan", href: "/#capabilities" },
        { label: "Ronway", href: "/ronway" },
      ],
      copyright: `© ${currentYear} BPxAI.`,
    },
  },
};
