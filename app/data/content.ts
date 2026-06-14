// This file centralizes all content for easy CMS integration in the future.
// Copy intentionally minimal — Tesla-style: one statement, one supporting line.

const currentYear = new Date().getFullYear();

export const siteContent: Record<string, any> = {
  en: {
    meta: {
      siteName: "BPxAI",
      description:
        "AI consulting and architecture, blockchain engineering, and post-quantum security.",
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
      tagline: "AI · Blockchain · Post-Quantum Security",
      headline: "We architect intelligent systems for the enterprise.",
      subheadline:
        "AI consulting and architecture, blockchain engineering, and post-quantum security — from strategy to production.",
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
      title: "Three practices. One partner.",
      subtitle: "AI, blockchain, and cryptography — architected end to end.",
      pillars: [
        {
          id: "ai",
          title: "AI Consulting & Architecture",
          shortTitle: "AI",
          description:
            "Strategy, architecture, and production AI systems for high-consequence operations.",
          metric: "Doctrine published. Deployments running.",
        },
        {
          id: "web3",
          title: "Blockchain Solutions",
          shortTitle: "Blockchain",
          description:
            "Verifiable systems and on-chain infrastructure where trust is the requirement.",
          metric: "Live across U.S. markets.",
        },
        {
          id: "pqc",
          title: "Post-Quantum Security",
          shortTitle: "Quantum",
          description:
            "NIST-aligned cryptographic migration. Mapped, sequenced, engineered.",
          metric: "FIPS 203 / 204 / 205",
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
          title: "MedixAI — Clinical Triage",
          impact: "Live, Philippine market",
          industry: "Healthcare",
        },
        {
          title: "Operational Intelligence Platform",
          impact: "Production",
          industry: "Enterprise",
        },
        {
          title: "ManageLife — Verified Housing",
          impact: "Live, U.S. markets",
          industry: "Financial Services",
        },
        {
          title: "Sovereign Revenue Infrastructure",
          impact: "+30% revenue collection",
          industry: "Public Sector",
        },
        {
          title: "Post-Quantum Migration Practice",
          impact: "NIST-aligned",
          industry: "Cryptography",
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
      subtitle: "Published positions on AI, blockchain, and post-quantum systems.",
      documents: [
        {
          title: "AI Defense Intelligence Framework",
          description:
            "Strategic doctrine on AI in Philippine defense and intelligence.",
          category: "AI",
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
      description:
        "A thirty-minute partner briefing on your AI, blockchain, or security roadmap.",
      buttonText: "Brief our partners",
      buttonHref: "https://calendly.com/bpxailabs/30min",
    },

    footer: {
      companyDescription: "We architect intelligent systems for the enterprise.",
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
        { label: "AI Consulting", href: "/#capabilities" },
        { label: "Blockchain Solutions", href: "/#capabilities" },
        { label: "Post-Quantum Security", href: "/quantum" },
        { label: "Ronway", href: "/ronway" },
      ],
      copyright: `© ${currentYear} BPxAI.`,
    },
  },

  tl: {
    meta: {
      siteName: "BPxAI",
      description:
        "AI consulting at arkitektura, blockchain engineering, at post-quantum security.",
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
      tagline: "AI · Blockchain · Post-Quantum Security",
      headline: "Itinatayo namin ang matatalinong sistema para sa negosyo.",
      subheadline:
        "AI consulting at arkitektura, blockchain engineering, at post-quantum security — mula estratehiya hanggang produksyon.",
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
      title: "Tatlong praktis. Isang kasosyo.",
      subtitle: "AI, blockchain, at kriptograpiya — inaarkitekto mula umpisa hanggang dulo.",
      pillars: [
        {
          id: "ai",
          title: "AI Consulting at Arkitektura",
          shortTitle: "AI",
          description:
            "Estratehiya, arkitektura, at production AI systems para sa mahahalagang operasyon.",
          metric: "May doktrina. May deployment.",
        },
        {
          id: "web3",
          title: "Mga Solusyong Blockchain",
          shortTitle: "Blockchain",
          description:
            "Mga sistemang may katibayan at on-chain infrastructure kung saan ang tiwala ang pangangailangan.",
          metric: "Live sa U.S. markets.",
        },
        {
          id: "pqc",
          title: "Post-Quantum Security",
          shortTitle: "Quantum",
          description:
            "Paglipat na nakaayon sa NIST. Tinatakda, isinasagawa.",
          metric: "FIPS 203 / 204 / 205",
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
          title: "MedixAI — Klinikal na Triage",
          impact: "Live, Pilipinas",
          industry: "Pangkalusugan",
        },
        {
          title: "Operasyonal na Plataporma",
          impact: "Sa produksyon",
          industry: "Negosyo",
        },
        {
          title: "ManageLife — Pabahay na May Katibayan",
          impact: "Live, U.S. markets",
          industry: "Pinansiyal",
        },
        {
          title: "Sovereign Revenue Infrastructure",
          impact: "+30% koleksyon",
          industry: "Pampublikong Sektor",
        },
        {
          title: "Post-Quantum Migration Practice",
          impact: "Nakaayon sa NIST",
          industry: "Kriptograpiya",
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
      subtitle: "Mga naipalathalang panindigan sa AI, blockchain, at post-quantum systems.",
      documents: [
        {
          title: "AI Defense Intelligence Framework",
          description: "Doktrina sa AI para sa Philippine defense at intelligence.",
          category: "AI",
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
      description:
        "Isang tatlumpung-minutong partner briefing sa iyong AI, blockchain, o security roadmap.",
      buttonText: "Makipag-ugnayan",
      buttonHref: "https://calendly.com/bpxailabs/30min",
    },

    footer: {
      companyDescription:
        "Itinatayo namin ang matatalinong sistema para sa negosyo.",
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
        { label: "AI Consulting", href: "/#capabilities" },
        { label: "Mga Solusyong Blockchain", href: "/#capabilities" },
        { label: "Post-Quantum Security", href: "/quantum" },
        { label: "Ronway", href: "/ronway" },
      ],
      copyright: `© ${currentYear} BPxAI.`,
    },
  },
};
