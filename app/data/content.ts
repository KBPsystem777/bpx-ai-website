// This file centralizes all content for easy CMS integration in the future

const currentYear = new Date().getFullYear();

export const siteContent: Record<string, any> = {
  en: {
    meta: {
      siteName: "BPxAI Labs",
      description:
        "Building reliable Business Operating Systems for clarity, control, and execution.",
    },

    navigation: {
      links: [
        { label: "Services", href: "/#services" },
        { label: "Projects", href: "/#projects" },
        { label: "Research", href: "/#research" },
        { label: "Contact", href: "/#contact" },
      ],
      ctaButton: {
        label: "Let's Talk Systems",
        href: "/#contact",
      },
    },

    hero: {
      headline: "Build a better operating system",
      subheadline:
        "Operator-led automation and custom systems for companies that need clarity, control, and execution — not buzzwords.",
      metrics: [],
      primaryCta: {
        label: "Let's Talk Systems",
        href: "/#contact",
      },
      secondaryCta: {
        label: "See how it works",
        href: "/#projects",
      },
    },

    about: {
      title: "Productized Technology Studio",
      mainHeadline: "Boringly reliable systems for real businesses",
      description:
        "BPxAI Labs designs and implements Business Operating Systems (Business OS) — lightweight, purpose-built platforms that replace spreadsheets and fragmented tools with clear, usable systems for both private companies and the public sector.",
      features: [
        "Designed for real-world operations",
        "Reliable and scalable execution",
        "Clarity across sales, tracking, and workflows",
        "Auditable systems for regulated environments",
      ],
      conclusion:
        "We deliver enterprise-level thinking with founder-level execution.",
    },

    services: {
      title: "What we build",
      subtitle: "Systems that work for your daily operations",
      items: [
        {
          title: "Business OS",
          description:
            "Custom-fit, modular platforms that replace spreadsheets and fragmented tracking for businesses and government offices.",
          iconName: "Search",
          pricing: "Modular",
        },
        {
          title: "Visibility & Control",
          description:
            "Internal dashboards for sales, expenses, and operations that answer: 'What is happening today?'",
          iconName: "Copy",
          pricing: "Precision",
        },
        {
          title: "Operational Automation",
          description:
            "Selective AI and automation logic that handles the boring parts of your business, quietly and reliably.",
          iconName: "Rocket",
          pricing: "Execution",
        },
      ],
    },

    pricing: {
      title: "Service Tiers",
      subtitle: "Enterprise-grade expertise for modern operators",
      tiers: [
        {
          name: "Blueprint",
          price: "Custom",
          description: "For defining your business architecture",
          features: [
            "Operational / LGU Audit",
            "System Architecture Design",
            "Tech Stack Selection",
          ],
          cta: "Join Blueprint",
          highlight: false,
        },
        {
          name: "Studio",
          price: "Retainer",
          description: "Continuous development and implementation",
          features: [
            "Custom Business OS Build",
            "Ongoing Automation Support",
            "Dedicated Systems Partner",
          ],
          cta: "Apply for Studio",
          highlight: true,
        },
        {
          name: "Foundry",
          price: "Project",
          description: "Discrete, specialized system builds",
          features: [
            "Fixed-scope Implementation",
            "Internal Tool Benchmarking",
            "Post-launch Training",
          ],
          cta: "Talk to Founders",
          highlight: false,
        },
      ],
    },

    projectHighlights: {
      title: "Proof of Execution",
      subtitle: "Real systems validated through daily usage",
      items: [
        {
          title: "SnackPax (Food Ops)",
          description:
            "A production system tracking attendance, sales, and expenses for a multi-employee operation.",
          impact: "Live Daily Usage",
          industry: "Food & Retail",
        },
        {
          title: "LGU Real Property Tax System",
          description:
            "Digitized real property records, increasing collection transparency and efficiency.",
          impact: "30% Revenue Boost",
          industry: "Government",
        },
        {
          title: "Utility Billing Logic",
          description:
            "Reliable billing automation and system logic for high-scale, regulated utility environments.",
          impact: "70% Error Reduction",
          industry: "Utilities",
        },
      ],
    },

    research: {
      title: "Research & Frameworks",
      subtitle:
        "Conceptual frameworks and strategic insights driving our approach to technology and operations",
      documents: [
        {
          title: "AI Defense Intelligence Framework for the Philippines",
          description:
            "A comprehensive framework exploring the integration of AI technologies in defense and intelligence operations within the Philippine context.",
          category: "Defense & Intelligence",
          date: "February 2026",
          fileSize: "PDF • ~2.5 MB",
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
      title: "Turn operations into clarity.",
      description:
        "If you're drowning in spreadsheets or fragmented tools, let's build the system your business actually needs.",
      buttonText: "Let's Talk Systems",
      buttonHref: "https://calendly.com/bpxailabs/30min",
    },

    footer: {
      companyDescription:
        "The trusted execution partner for companies that value clarity and control.",
      contactInfo: {
        email: "bpxailabs@gmail.com",
        phone: "+63 917 713 8316",
        address: "Global / Cross-border Execution",
      },
      quickLinks: [
        { label: "Services", href: "/#services" },
        { label: "Projects", href: "/#projects" },
        { label: "Contact", href: "/#contact" },
      ],
      copyright: `© ${currentYear} BPxAI Labs. All rights reserved.`,
    },
  },
  tl: {
    meta: {
      siteName: "BPxAI Labs",
      description:
        "Pagbuo ng maaasahang Business Operating Systems para sa linaw, kontrol, at execution.",
    },

    navigation: {
      links: [
        { label: "Serbisyo", href: "/#services" },
        { label: "Proyekto", href: "/#projects" },
        { label: "Research", href: "/#research" },
        { label: "Kontak", href: "/#contact" },
      ],
      ctaButton: {
        label: "Usapang Systems",
        href: "/#contact",
      },
    },

    hero: {
      headline: "Bumuo ng mas magandang operating system",
      subheadline:
        "Operator-led automation at custom systems para sa mga kumpanyang nangangailangan ng linaw at kontrol — hindi lang buzzwords.",
      metrics: [],
      primaryCta: {
        label: "Usapang Systems",
        href: "/#contact",
      },
      secondaryCta: {
        label: "Tingnan kung paano",
        href: "/#projects",
      },
    },

    about: {
      title: "Productized Technology Studio",
      mainHeadline: "Reliable na systems para sa totoong negosyo",
      description:
        "Ang BPxAI Labs ay nagdidisenyo at nagpapatupad ng Business Operating Systems (Business OS) — purpose-built platforms na pumapalit sa spreadsheets para sa mas malinaw na sistema sa mga kumpanya at sa gobyerno.",
      features: [
        "Disenyong pang-totoong operasyon",
        "Reliable at scalable execution",
        "Linaw sa sales, tracking, at workflows",
        "Auditable systems para sa regulated environments",
      ],
      conclusion: "Enterprise-level thinking na may founder-level execution.",
    },

    services: {
      title: "Ang Aming Binubuo",
      subtitle: "Systems na swak sa iyong daily operations",
      items: [
        {
          title: "Business OS",
          description:
            "Custom-fit na platforms na pumapalit sa magulong tracking para sa mga negosyo at opisina ng gobyerno.",
          iconName: "Search",
          pricing: "Modular",
        },
        {
          title: "Visibility & Kontrol",
          description:
            "Internal dashboards para sa sales at operations na sumasagot sa: 'Ano ang nangyayari ngayon?'",
          iconName: "Copy",
          pricing: "Precision",
        },
        {
          title: "Operational Automation",
          description:
            "Selective AI at automation na humahawak sa mga boring na parte ng iyong negosyo.",
          iconName: "Rocket",
          pricing: "Execution",
        },
      ],
    },

    pricing: {
      title: "Service Tiers",
      subtitle: "Enterprise-grade expertise para sa modernong operators",
      tiers: [
        {
          name: "Blueprint",
          price: "Custom",
          description: "Para sa pag-define ng iyong business architecture",
          features: [
            "Operational / LGU Audit",
            "System Architecture Design",
            "Tech Stack Selection",
          ],
          cta: "Sumali sa Blueprint",
          highlight: false,
        },
        {
          name: "Studio",
          price: "Retainer",
          description: "Tuloy-tuloy na development at implementation",
          features: [
            "Custom Business OS Build",
            "Ongoing Automation Support",
            "Dedicated Systems Partner",
          ],
          cta: "Mag-apply sa Studio",
          highlight: true,
        },
        {
          name: "Foundry",
          price: "Project",
          description: "Specialized system builds para sa iyong negosyo",
          features: [
            "Fixed-scope Implementation",
            "Internal Tool Benchmarking",
            "Post-launch Training",
          ],
          cta: "Usapang Founders",
          highlight: false,
        },
      ],
    },

    projectHighlights: {
      title: "Patunay ng Execution",
      subtitle: "Mga sistemang ginagamit araw-araw",
      items: [
        {
          title: "SnackPax (Food Ops)",
          description:
            "Sistemang nagta-track ng attendance, sales, at expenses para sa multi-employee operation.",
          impact: "Live Daily Usage",
          industry: "Food & Retail",
        },
        {
          title: "LGU Real Property Tax System",
          description:
            "Pag-digitalize ng property records para sa mas mabilis at transparent na koleksyon ng tax.",
          impact: "30% Revenue Boost",
          industry: "Gobyerno",
        },
        {
          title: "Utility Billing Logic",
          description:
            "Maasahang billing automation para sa high-scale utility environments.",
          impact: "70% Error Reduction",
          industry: "Utilities",
        },
      ],
    },

    research: {
      title: "Research & Frameworks",
      subtitle:
        "Mga conceptual frameworks at strategic insights na gumagabay sa aming approach sa technology at operations",
      documents: [
        {
          title: "AI Defense Intelligence Framework para sa Pilipinas",
          description:
            "Isang komprehensibong framework na tumatalakay sa integration ng AI technologies sa defense at intelligence operations sa konteksto ng Pilipinas.",
          category: "Defense & Intelligence",
          date: "Pebrero 2026",
          fileSize: "PDF • ~2.5 MB",
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
      title: "Gawing linaw ang iyong operasyon.",
      description:
        "Kung nalulunod ka na sa spreadsheets, bumuo tayo ng sistemang kailangan talaga ng iyong negosyo.",
      buttonText: "Usapang Systems",
      buttonHref: "https://calendly.com/bpxailabs/30min",
    },

    footer: {
      companyDescription:
        "Ang Execution Partner para sa mga kumpanyang nagpapahalaga sa linaw at kontrol.",
      contactInfo: {
        email: "bpxailabs@gmail.com",
        phone: "+63 917 713 8316",
        address: "Global / Cross-border Execution",
      },
      quickLinks: [
        { label: "Serbisyo", href: "/#services" },
        { label: "Proyekto", href: "/#projects" },
        { label: "Kontak", href: "/#contact" },
      ],
      copyright: `© ${currentYear} BPxAI Labs. All rights reserved.`,
    },
  },
};
