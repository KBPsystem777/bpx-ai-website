// This file centralizes all content for easy CMS integration in the future

const currentYear = new Date().getFullYear();

export const siteContent: Record<string, any> = {
  en: {
    meta: {
      siteName: "BPxAI Labs",
      description:
        "AI-powered solutions, distributed ledger technology, and custom application development for enterprises and SMBs.",
    },

    navigation: {
      links: [
        { label: "Solutions", href: "/#services" },
        { label: "Case Studies", href: "/#projects" },
        { label: "Research", href: "/#research" },
        { label: "Contact", href: "/#contact" },
      ],
      ctaButton: {
        label: "Book a Call",
        href: "/#contact",
      },
    },

    hero: {
      headline: "AI solutions that ship. Systems that scale.",
      subheadline:
        "From intelligent automation to blockchain infrastructure — we design, build, and deploy production-grade technology for enterprises and growing businesses.",
      metrics: [],
      primaryCta: {
        label: "Book a Strategy Call",
        href: "/#contact",
      },
      secondaryCta: {
        label: "View Case Studies",
        href: "/#projects",
      },
    },

    about: {
      title: "Full-Stack Technology Studio",
      mainHeadline: "Enterprise capability, startup speed",
      description:
        "BPxAI Labs is a technology studio delivering AI-powered platforms, decentralized applications, and custom business systems. We serve enterprises seeking innovation and SMBs ready to scale — from proof of concept to production.",
      features: [
        "AI agents and automation pipelines",
        "Blockchain and DLT infrastructure",
        "Custom web and mobile applications",
        "Enterprise system modernization",
      ],
      conclusion:
        "We bring enterprise-grade engineering with founder-level accountability.",
    },

    services: {
      title: "What we deliver",
      subtitle: "End-to-end technology solutions — from AI intelligence to decentralized infrastructure",
      items: [
        {
          title: "AI & Intelligent Automation",
          description:
            "Custom AI agents, LLM integrations, and automation pipelines that transform manual workflows into self-operating systems.",
          iconName: "Search",
          pricing: "AI Solutions",
        },
        {
          title: "Web3 & DLT Infrastructure",
          description:
            "Blockchain-native applications, smart contracts, and tokenized platforms built on Ethereum L2s and beyond.",
          iconName: "Copy",
          pricing: "Decentralized",
        },
        {
          title: "Custom App Development",
          description:
            "Production-grade web and mobile applications with modern stacks — from MVP sprints to enterprise-scale deployments.",
          iconName: "Rocket",
          pricing: "Full-Stack",
        },
      ],
    },

    pricing: {
      title: "Engagement Models",
      subtitle: "Flexible structures designed for your stage — whether you're validating an idea or scaling infrastructure",
      tiers: [
        {
          name: "Blueprint",
          price: "Discovery",
          description: "For scoping your technical architecture and AI strategy",
          features: [
            "Technical & AI Readiness Audit",
            "Solution Architecture Design",
            "Technology Stack Recommendation",
          ],
          cta: "Start Discovery",
          highlight: false,
        },
        {
          name: "Studio",
          price: "Retainer",
          description: "Continuous development, deployment, and iteration",
          features: [
            "Dedicated Engineering Team",
            "AI/DLT/App Development Sprints",
            "Priority Support & Maintenance",
          ],
          cta: "Apply for Studio",
          highlight: true,
        },
        {
          name: "Foundry",
          price: "Project",
          description: "Fixed-scope builds for defined deliverables",
          features: [
            "End-to-End Implementation",
            "Smart Contract Development",
            "Launch Support & Training",
          ],
          cta: "Talk to Founders",
          highlight: false,
        },
      ],
    },

    projectHighlights: {
      title: "Proof of Execution",
      subtitle: "Production systems delivering measurable outcomes across industries",
      items: [
        {
          title: "SnackPax (Food Ops)",
          description:
            "A production system tracking attendance, sales, and expenses for a multi-employee food operation — live and in daily use.",
          impact: "Live Daily Usage",
          industry: "Food & Retail",
        },
        {
          title: "LGU Real Property Tax System",
          description:
            "Digitized real property records for a local government unit, increasing collection transparency and boosting revenue.",
          impact: "30% Revenue Boost",
          industry: "Government",
        },
        {
          title: "Utility Billing Automation",
          description:
            "Reliable billing automation and system logic for high-scale, regulated utility environments in the US.",
          impact: "70% Error Reduction",
          industry: "Utilities",
        },
      ],
    },

    research: {
      title: "Research & Frameworks",
      subtitle:
        "Strategic research driving our approach to AI deployment, distributed systems, and digital transformation",
      documents: [
        {
          title: "AI Defense Intelligence Framework for the Philippines",
          description:
            "A comprehensive framework exploring the integration of AI technologies in defense and intelligence operations within the Philippine context.",
          category: "Defense & AI",
          date: "February 2026",
          fileSize: "PDF \u2022 ~2.5 MB",
          downloadUrl:
            "/resources/AI_Defense_Intelligence_Framework_Philippines_Report.pdf",
          tags: [
            "AI Systems",
            "Defense",
            "Philippines",
            "Intelligence",
            "Framework",
          ],
        },
      ],
    },

    cta: {
      title: "Ready to build what\u2019s next?",
      description:
        "Whether it\u2019s an AI agent, a blockchain platform, or a custom app \u2014 let\u2019s architect your solution and ship it.",
      buttonText: "Book a Strategy Call",
      buttonHref: "https://calendly.com/bpxailabs/30min",
    },

    footer: {
      companyDescription:
        "AI solutions, DLT infrastructure, and custom application development for enterprises and scaling businesses.",
      contactInfo: {
        email: "bpxailabs@gmail.com",
        phone: "+63 917 713 8316",
        address: "Global / Cross-border Execution",
      },
      quickLinks: [
        { label: "Solutions", href: "/#services" },
        { label: "Case Studies", href: "/#projects" },
        { label: "Contact", href: "/#contact" },
      ],
      copyright: `\u00A9 ${currentYear} BPxAI Labs. All rights reserved.`,
    },
  },
  tl: {
    meta: {
      siteName: "BPxAI Labs",
      description:
        "AI-powered solutions, distributed ledger technology, at custom application development para sa enterprises at SMBs.",
    },

    navigation: {
      links: [
        { label: "Solusyon", href: "/#services" },
        { label: "Case Studies", href: "/#projects" },
        { label: "Research", href: "/#research" },
        { label: "Kontak", href: "/#contact" },
      ],
      ctaButton: {
        label: "Mag-book ng Call",
        href: "/#contact",
      },
    },

    hero: {
      headline: "AI solutions na nagshi-ship. Systems na nagsu-scale.",
      subheadline:
        "Mula sa intelligent automation hanggang blockchain infrastructure \u2014 nagdidisenyo, nagbu-build, at nagde-deploy kami ng production-grade na teknolohiya para sa enterprises at lumalaking negosyo.",
      metrics: [],
      primaryCta: {
        label: "Mag-book ng Strategy Call",
        href: "/#contact",
      },
      secondaryCta: {
        label: "Tingnan ang Case Studies",
        href: "/#projects",
      },
    },

    about: {
      title: "Full-Stack Technology Studio",
      mainHeadline: "Enterprise capability, startup speed",
      description:
        "Ang BPxAI Labs ay isang technology studio na nagde-deliver ng AI-powered platforms, decentralized applications, at custom business systems. Sineserbisyuhan namin ang enterprises na naghahanap ng innovation at SMBs na handang mag-scale.",
      features: [
        "AI agents at automation pipelines",
        "Blockchain at DLT infrastructure",
        "Custom web at mobile applications",
        "Enterprise system modernization",
      ],
      conclusion: "Enterprise-grade engineering na may founder-level accountability.",
    },

    services: {
      title: "Ang aming dine-deliver",
      subtitle: "End-to-end technology solutions \u2014 mula AI intelligence hanggang decentralized infrastructure",
      items: [
        {
          title: "AI & Intelligent Automation",
          description:
            "Custom AI agents, LLM integrations, at automation pipelines na nagta-transform ng manual workflows sa self-operating systems.",
          iconName: "Search",
          pricing: "AI Solutions",
        },
        {
          title: "Web3 & DLT Infrastructure",
          description:
            "Blockchain-native applications, smart contracts, at tokenized platforms na built sa Ethereum L2s.",
          iconName: "Copy",
          pricing: "Decentralized",
        },
        {
          title: "Custom App Development",
          description:
            "Production-grade na web at mobile applications \u2014 mula MVP sprints hanggang enterprise-scale deployments.",
          iconName: "Rocket",
          pricing: "Full-Stack",
        },
      ],
    },

    pricing: {
      title: "Engagement Models",
      subtitle: "Flexible structures na dinisenyo para sa iyong stage \u2014 nagva-validate ka man ng idea o nagsu-scale ng infrastructure",
      tiers: [
        {
          name: "Blueprint",
          price: "Discovery",
          description: "Para sa pag-scope ng technical architecture at AI strategy",
          features: [
            "Technical & AI Readiness Audit",
            "Solution Architecture Design",
            "Technology Stack Recommendation",
          ],
          cta: "Simulan ang Discovery",
          highlight: false,
        },
        {
          name: "Studio",
          price: "Retainer",
          description: "Tuloy-tuloy na development, deployment, at iteration",
          features: [
            "Dedicated Engineering Team",
            "AI/DLT/App Development Sprints",
            "Priority Support & Maintenance",
          ],
          cta: "Mag-apply sa Studio",
          highlight: true,
        },
        {
          name: "Foundry",
          price: "Project",
          description: "Fixed-scope builds para sa defined deliverables",
          features: [
            "End-to-End Implementation",
            "Smart Contract Development",
            "Launch Support & Training",
          ],
          cta: "Usapang Founders",
          highlight: false,
        },
      ],
    },

    projectHighlights: {
      title: "Patunay ng Execution",
      subtitle: "Production systems na nagde-deliver ng measurable outcomes sa iba't ibang industry",
      items: [
        {
          title: "SnackPax (Food Ops)",
          description:
            "Production system na nagta-track ng attendance, sales, at expenses para sa multi-employee food operation \u2014 live at ginagamit araw-araw.",
          impact: "Live Daily Usage",
          industry: "Food & Retail",
        },
        {
          title: "LGU Real Property Tax System",
          description:
            "Dinigitalize ang real property records ng local government unit, pinapataas ang transparency at revenue ng collection.",
          impact: "30% Revenue Boost",
          industry: "Gobyerno",
        },
        {
          title: "Utility Billing Automation",
          description:
            "Maaasahang billing automation at system logic para sa high-scale, regulated na utility environments sa US.",
          impact: "70% Error Reduction",
          industry: "Utilities",
        },
      ],
    },

    research: {
      title: "Research & Frameworks",
      subtitle:
        "Strategic research na gumagabay sa aming approach sa AI deployment, distributed systems, at digital transformation",
      documents: [
        {
          title: "AI Defense Intelligence Framework para sa Pilipinas",
          description:
            "Isang komprehensibong framework na tumatalakay sa integration ng AI technologies sa defense at intelligence operations sa konteksto ng Pilipinas.",
          category: "Defense & AI",
          date: "Pebrero 2026",
          fileSize: "PDF \u2022 ~2.5 MB",
          downloadUrl:
            "/resources/AI_Defense_Intelligence_Framework_Philippines_Report.pdf",
          tags: [
            "AI Systems",
            "Defense",
            "Pilipinas",
            "Intelligence",
            "Framework",
          ],
        },
      ],
    },

    cta: {
      title: "Handa ka na bang i-build ang susunod?",
      description:
        "AI agent man, blockchain platform, o custom app \u2014 i-architect natin ang iyong solution at i-ship ito.",
      buttonText: "Mag-book ng Strategy Call",
      buttonHref: "https://calendly.com/bpxailabs/30min",
    },

    footer: {
      companyDescription:
        "AI solutions, DLT infrastructure, at custom application development para sa enterprises at lumalaking negosyo.",
      contactInfo: {
        email: "bpxailabs@gmail.com",
        phone: "+63 917 713 8316",
        address: "Global / Cross-border Execution",
      },
      quickLinks: [
        { label: "Solusyon", href: "/#services" },
        { label: "Case Studies", href: "/#projects" },
        { label: "Kontak", href: "/#contact" },
      ],
      copyright: `\u00A9 ${currentYear} BPxAI Labs. All rights reserved.`,
    },
  },
};
