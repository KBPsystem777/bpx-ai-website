// This file centralizes all content for easy CMS integration in the future

const currentYear = new Date().getFullYear();

export const siteContent: Record<string, any> = {
  en: {
    meta: {
      siteName: "BPxAI Labs",
      description:
        "We build smart technology that helps businesses run better. AI, digital systems, and blockchain solutions for companies, government, and startups.",
    },

    navigation: {
      links: [
        { label: "What We Do", href: "/#capabilities" },
        { label: "Our Work", href: "/#projects" },
        { label: "Research", href: "/#research" },
        { label: "Contact", href: "/#contact" },
      ],
      ctaButton: {
        label: "Talk to Us",
        href: "/#contact",
      },
    },

    hero: {
      tagline: "Technology That Works For You",
      headline: "We build smarter systems so you can make better decisions",
      subheadline:
        "Your business deserves technology that actually solves problems — not just fancy dashboards. We create AI-powered tools, digital platforms, and secure systems that help you save time, cut costs, and grow faster.",
      metrics: [
        { value: "70%", label: "Fewer Errors", sublabel: "In billing systems" },
        { value: "30%", label: "More Revenue", sublabel: "For local governments" },
        { value: "9+", label: "Clients Served", sublabel: "US & Philippines" },
        { value: "24/7", label: "Always Running", sublabel: "Reliable systems" },
      ],
      primaryCta: {
        label: "Talk to Us",
        href: "/#contact",
      },
      secondaryCta: {
        label: "See Our Work",
        href: "/#projects",
      },
      trustedBy: "Trusted by Exelon, BGE, Entergy, Xcel Energy, and Philippine LGUs",
    },

    capabilities: {
      sectionLabel: "What We Do",
      title: "Four ways we help your business win.",
      subtitle: "We don't just build apps. We build the tools that give you a real advantage — so you can see what's happening, act faster, and stay ahead.",
      pillars: [
        {
          id: "ai",
          title: "Artificial Intelligence",
          shortTitle: "AI",
          description: "We build smart tools that can read data, spot patterns, and make recommendations — so your team can focus on what matters instead of manual work.",
          capabilities: ["Smart Assistants", "Automated Workflows", "Data Analysis", "Image Recognition"],
          metric: "10x faster decisions",
        },
        {
          id: "web3",
          title: "Blockchain & Digital Trust",
          shortTitle: "Blockchain",
          description: "We use blockchain to make records tamper-proof and transactions transparent. Perfect for property, finance, and any system where trust matters.",
          capabilities: ["Tamper-proof Records", "Transparent Transactions", "Digital Assets", "Secure Verification"],
          metric: "Records you can trust",
        },
        {
          id: "risk",
          title: "Risk & Compliance",
          shortTitle: "Risk",
          description: "We build monitoring systems that catch problems before they become expensive. Real-time alerts, compliance tracking, and risk scoring for peace of mind.",
          capabilities: ["Problem Detection", "Compliance Tracking", "Risk Scoring", "Automated Alerts"],
          metric: "No surprises",
        },
        {
          id: "systems",
          title: "Complete Business Systems",
          shortTitle: "Systems",
          description: "We build all-in-one platforms that replace scattered spreadsheets and disconnected tools with one unified system your whole team can use.",
          capabilities: ["Business Platforms", "Government Systems", "Process Automation", "Data Management"],
          metric: "Everything in one place",
        },
      ],
    },

    services: {
      title: "How we work with you",
      subtitle: "Choose the approach that fits your needs — from quick assessments to full system builds",
      items: [
        {
          title: "Blueprint",
          description:
            "We study your current operations, find where you're losing time or money, and design the right technology solution — before writing a single line of code.",
          iconName: "Search",
          pricing: "Assessment",
          deliverables: ["Full operations review", "Solution design", "Technology plan", "Cost & benefit analysis"],
          timeline: "2-4 weeks",
        },
        {
          title: "Studio",
          description:
            "A dedicated team works alongside you, building and improving your systems week by week. Like having your own tech team, without the overhead.",
          iconName: "Copy",
          pricing: "Monthly",
          deliverables: ["Dedicated tech team", "Weekly updates & releases", "AI & blockchain integration", "24/7 system monitoring"],
          timeline: "Ongoing",
        },
        {
          title: "Foundry",
          description:
            "A specific project with a clear goal, fixed timeline, and defined budget. We build it, test it, train your team, and support you after launch.",
          iconName: "Rocket",
          pricing: "Fixed Price",
          deliverables: ["Complete system build", "Performance testing", "Team training", "90-day support"],
          timeline: "6-12 weeks",
        },
      ],
    },

    projectHighlights: {
      title: "Our Work",
      subtitle: "Real systems solving real problems — running in production today.",
      items: [
        {
          title: "SnackPax Business OS",
          description:
            "Built an all-in-one platform for a food business to manage attendance, sales, inventory, and expenses. Replaced 7 separate spreadsheets with one simple system.",
          impact: "Used Every Day",
          metric: "7 tools → 1",
          industry: "Food & Retail",
          tags: ["Business Platform", "Automation", "Reports"],
        },
        {
          title: "LGU Real Property Tax System",
          description:
            "Digitized property tax records for local government units in the Philippines. Now tax computation, assessment, and collection are transparent and automated.",
          impact: "30% More Revenue",
          metric: "+30% collections",
          industry: "Government",
          tags: ["Government Tech", "Digital Records", "Tax"],
        },
        {
          title: "Utility Billing Automation",
          description:
            "Built billing automation for major US energy companies serving millions of customers. Reduced billing errors by 70% — saving time and preventing costly mistakes.",
          impact: "70% Fewer Errors",
          metric: "-70% errors",
          industry: "Energy & Utilities",
          tags: ["Enterprise", "Automation", "Billing"],
        },
        {
          title: "MedixAI Medical Triage",
          description:
            "An AI-powered health platform that helps patients get initial assessments and connects them with the right healthcare providers across the Philippines.",
          impact: "Beta Launch",
          metric: "AI health assistant",
          industry: "Healthcare AI",
          tags: ["AI", "Healthcare", "Platform"],
        },
        {
          title: "ManageLife Web3 Housing",
          description:
            "A platform that lets people invest in real estate through fractional ownership, with blockchain technology ensuring transparent and secure property management.",
          impact: "Live Platform",
          metric: "Digital ownership",
          industry: "Web3 & Real Estate",
          tags: ["Blockchain", "Property", "Investment"],
        },
        {
          title: "AI Defense Intelligence Framework",
          description:
            "A strategic research paper exploring how AI can strengthen defense and national security operations in the Philippines.",
          impact: "Published Research",
          metric: "Policy framework",
          industry: "Defense & Intelligence",
          tags: ["Research", "Defense", "AI Policy"],
        },
      ],
    },

    clients: {
      title: "Trusted by companies that demand results",
      logos: [
        { name: "Exelon", logo: "/clients/exelon.png" },
        { name: "BGE", logo: "/clients/bge.jpg" },
        { name: "Entergy", logo: "/clients/entergy.webp" },
        { name: "Xcel Energy", logo: "/clients/xcel.png" },
        { name: "DILG", logo: "/clients/dilg.png" },
      ],
    },

    research: {
      title: "Research & Resources",
      subtitle:
        "Our thinking on how emerging technology can solve real-world problems",
      documents: [
        {
          title: "AI Defense Intelligence Framework for the Philippines",
          description:
            "A research paper on how AI technologies can be used to strengthen defense and intelligence operations in the Philippines.",
          category: "Defense & AI",
          date: "February 2026",
          fileSize: "PDF",
          downloadUrl:
            "/resources/AI_Defense_Intelligence_Framework_Philippines_Report.pdf",
          tags: [
            "AI",
            "Defense",
            "Philippines",
            "Policy",
            "Research",
          ],
        },
      ],
    },

    cta: {
      title: "Ready to upgrade your operations?",
      description:
        "The best businesses don't wait. Let's talk about how the right technology can save you time, reduce your costs, and help you grow. Free 30-minute consultation.",
      buttonText: "Book a Free Consultation",
      buttonHref: "https://calendly.com/bpxailabs/30min",
      stats: [
        { label: "Free Consultation", value: "30 min" },
        { label: "Response Time", value: "<24h" },
        { label: "We Speak", value: "EN / TL" },
      ],
    },

    footer: {
      companyDescription:
        "We build smart technology for businesses, governments, and startups. AI-powered. Secure. Built to last.",
      contactInfo: {
        email: "bpxailabs@gmail.com",
        phone: "+63 917 713 8316",
        address: "Philippines & Global",
      },
      quickLinks: [
        { label: "What We Do", href: "/#capabilities" },
        { label: "Our Work", href: "/#projects" },
        { label: "Research", href: "/#research" },
        { label: "Contact", href: "/#contact" },
      ],
      solutions: [
        { label: "AI & Automation", href: "/#capabilities" },
        { label: "Blockchain Solutions", href: "/#capabilities" },
        { label: "Risk & Compliance", href: "/#capabilities" },
        { label: "Business Platforms", href: "/#capabilities" },
      ],
      copyright: `\u00A9 ${currentYear} BPxAI Labs. All rights reserved.`,
    },
  },
  tl: {
    meta: {
      siteName: "BPxAI Labs",
      description:
        "Gumagawa kami ng matalinong teknolohiya para sa mga negosyo, gobyerno, at startups sa Pilipinas at buong mundo.",
    },

    navigation: {
      links: [
        { label: "Ano ang Ginagawa Namin", href: "/#capabilities" },
        { label: "Mga Proyekto", href: "/#projects" },
        { label: "Research", href: "/#research" },
        { label: "Makipag-ugnayan", href: "/#contact" },
      ],
      ctaButton: {
        label: "Kausapin Kami",
        href: "/#contact",
      },
    },

    hero: {
      tagline: "Teknolohiyang Gumagana Para Sa Iyo",
      headline: "Gumagawa kami ng mas matalinong sistema para sa mas magandang desisyon",
      subheadline:
        "Ang negosyo mo ay deserve ng teknolohiyang talagang nakakatulong — hindi lang magandang tingnan. Gumagawa kami ng AI tools, digital platforms, at secure systems na makakatipid sa oras, bawas gastos, at tutulong sa growth mo.",
      metrics: [
        { value: "70%", label: "Mas Kaunting Errors", sublabel: "Sa billing systems" },
        { value: "30%", label: "Mas Maraming Kita", sublabel: "Para sa mga LGU" },
        { value: "9+", label: "Mga Kliyente", sublabel: "US at Pilipinas" },
        { value: "24/7", label: "Palaging Gumagana", sublabel: "Maaasahang sistema" },
      ],
      primaryCta: {
        label: "Kausapin Kami",
        href: "/#contact",
      },
      secondaryCta: {
        label: "Tingnan ang Mga Proyekto",
        href: "/#projects",
      },
      trustedBy: "Pinagkakatiwalaan ng Exelon, BGE, Entergy, Xcel Energy, at mga LGU sa Pilipinas",
    },

    capabilities: {
      sectionLabel: "Ano ang Ginagawa Namin",
      title: "Apat na paraan para manalo ang negosyo mo.",
      subtitle: "Hindi lang kami gumagawa ng apps. Gumagawa kami ng mga kasangkapan na magbibigay sa iyo ng tunay na bentahe — para makita mo ang nangyayari, kumilos nang mas mabilis, at manatiling nangunguna.",
      pillars: [
        {
          id: "ai",
          title: "Artificial Intelligence",
          shortTitle: "AI",
          description: "Gumagawa kami ng matalinong tools na kayang magbasa ng data, makahanap ng patterns, at mag-recommend — para ang team mo ay makapag-focus sa mahalaga imbes na mano-manong trabaho.",
          capabilities: ["Matalinong Assistants", "Automated Workflows", "Data Analysis", "Image Recognition"],
          metric: "10x mas mabilis na desisyon",
        },
        {
          id: "web3",
          title: "Blockchain at Digital Trust",
          shortTitle: "Blockchain",
          description: "Ginagamit namin ang blockchain para gawing tamper-proof ang mga records at transparent ang mga transaksyon. Perfect para sa property, finance, at kahit anong sistema kung saan mahalaga ang tiwala.",
          capabilities: ["Tamper-proof Records", "Transparent Transactions", "Digital Assets", "Secure Verification"],
          metric: "Records na mapagkakatiwalaan",
        },
        {
          id: "risk",
          title: "Risk at Compliance",
          shortTitle: "Risk",
          description: "Gumagawa kami ng monitoring systems na nakakahuli ng problema bago pa maging mahal. Real-time alerts, compliance tracking, at risk scoring para sa peace of mind.",
          capabilities: ["Pagtukoy ng Problema", "Compliance Tracking", "Risk Scoring", "Automated Alerts"],
          metric: "Walang sorpresa",
        },
        {
          id: "systems",
          title: "Buong Business Systems",
          shortTitle: "Systems",
          description: "Gumagawa kami ng all-in-one platforms na papalit sa kalat-kalat na spreadsheets at disconnected tools — isang unified system na magagamit ng buong team mo.",
          capabilities: ["Business Platforms", "Government Systems", "Process Automation", "Data Management"],
          metric: "Lahat sa isang lugar",
        },
      ],
    },

    services: {
      title: "Paano kami nakikipagtulungan sa iyo",
      subtitle: "Piliin ang approach na tamang-tama sa needs mo — mula sa mabilisang assessment hanggang sa full system build",
      items: [
        {
          title: "Blueprint",
          description:
            "Pag-aaralan namin ang operations mo, hahanapin kung saan ka nawawalan ng oras o pera, at ididisenyo ang tamang solusyon — bago pa magsulat ng kahit isang linya ng code.",
          iconName: "Search",
          pricing: "Assessment",
          deliverables: ["Buong operations review", "Disenyo ng solusyon", "Technology plan", "Cost at benefit analysis"],
          timeline: "2-4 na linggo",
        },
        {
          title: "Studio",
          description:
            "May dedicated team na kasama mo, nagbu-build at nagpapabuti ng sistema mo linggo-linggo. Parang sarili mong tech team, walang overhead.",
          iconName: "Copy",
          pricing: "Buwanang Bayad",
          deliverables: ["Dedicated tech team", "Weekly updates at releases", "AI at blockchain integration", "24/7 system monitoring"],
          timeline: "Tuloy-tuloy",
        },
        {
          title: "Foundry",
          description:
            "Isang specific na proyekto na may malinaw na goal, fixed timeline, at defined budget. I-build namin, i-test, i-train ang team mo, at susuportahan ka pagkatapos ng launch.",
          iconName: "Rocket",
          pricing: "Fixed Price",
          deliverables: ["Buong system build", "Performance testing", "Team training", "90-araw na suporta"],
          timeline: "6-12 na linggo",
        },
      ],
    },

    projectHighlights: {
      title: "Mga Proyekto Namin",
      subtitle: "Totoong sistema na nagso-solve ng totoong problema — tumatakbo sa production ngayon.",
      items: [
        {
          title: "SnackPax Business OS",
          description:
            "Gumawa ng all-in-one platform para sa food business para ma-manage ang attendance, benta, inventory, at gastos. Pinalitan ang 7 magkakaibang spreadsheets ng isang simpleng sistema.",
          impact: "Ginagamit Araw-araw",
          metric: "7 tools → 1",
          industry: "Food & Retail",
          tags: ["Business Platform", "Automation", "Reports"],
        },
        {
          title: "LGU Real Property Tax System",
          description:
            "Na-digitize ang property tax records para sa mga LGU sa Pilipinas. Ngayon automated at transparent na ang tax computation, assessment, at collection.",
          impact: "30% Mas Maraming Kita",
          metric: "+30% collections",
          industry: "Gobyerno",
          tags: ["Gov-Tech", "Digital Records", "Tax"],
        },
        {
          title: "Utility Billing Automation",
          description:
            "Gumawa ng billing automation para sa malalaking US energy companies na nagse-serve ng milyun-milyong customers. Na-reduce ang billing errors ng 70%.",
          impact: "70% Mas Kaunting Errors",
          metric: "-70% errors",
          industry: "Energy & Utilities",
          tags: ["Enterprise", "Automation", "Billing"],
        },
        {
          title: "MedixAI Medical Triage",
          description:
            "AI-powered health platform na tumutulong sa mga pasyente na makakuha ng initial assessment at ikokonekta sila sa tamang healthcare providers sa Pilipinas.",
          impact: "Beta Launch",
          metric: "AI health assistant",
          industry: "Healthcare AI",
          tags: ["AI", "Healthcare", "Platform"],
        },
        {
          title: "ManageLife Web3 Housing",
          description:
            "Platform kung saan pwedeng mag-invest sa real estate sa pamamagitan ng fractional ownership, gamit ang blockchain para sa transparent at secure na property management.",
          impact: "Live Platform",
          metric: "Digital ownership",
          industry: "Web3 & Real Estate",
          tags: ["Blockchain", "Property", "Investment"],
        },
        {
          title: "AI Defense Intelligence Framework",
          description:
            "Isang strategic research paper tungkol sa kung paano mapapalakas ng AI ang defense at national security operations sa Pilipinas.",
          impact: "Published Research",
          metric: "Policy framework",
          industry: "Defense & Intelligence",
          tags: ["Research", "Defense", "AI Policy"],
        },
      ],
    },

    clients: {
      title: "Pinagkakatiwalaan ng mga kompanyang humihingi ng resulta",
      logos: [
        { name: "Exelon", logo: "/clients/exelon.png" },
        { name: "BGE", logo: "/clients/bge.jpg" },
        { name: "Entergy", logo: "/clients/entergy.webp" },
        { name: "Xcel Energy", logo: "/clients/xcel.png" },
        { name: "DILG", logo: "/clients/dilg.png" },
      ],
    },

    research: {
      title: "Research at Resources",
      subtitle:
        "Ang pag-iisip namin tungkol sa kung paano malulutas ng bagong teknolohiya ang totoong problema",
      documents: [
        {
          title: "AI Defense Intelligence Framework para sa Pilipinas",
          description:
            "Research paper tungkol sa kung paano magagamit ang AI para palakasin ang defense at intelligence operations sa Pilipinas.",
          category: "Defense at AI",
          date: "Pebrero 2026",
          fileSize: "PDF",
          downloadUrl:
            "/resources/AI_Defense_Intelligence_Framework_Philippines_Report.pdf",
          tags: [
            "AI",
            "Defense",
            "Pilipinas",
            "Policy",
            "Research",
          ],
        },
      ],
    },

    cta: {
      title: "Handa ka na bang i-upgrade ang operations mo?",
      description:
        "Ang mga pinakamahusay na negosyo ay hindi naghihintay. Pag-usapan natin kung paano makakatipid sa oras, mababawasan ang gastos, at makakatulong sa pag-grow ng negosyo mo ang tamang teknolohiya. Libre ang 30-minutong konsultasyon.",
      buttonText: "Mag-book ng Libreng Konsultasyon",
      buttonHref: "https://calendly.com/bpxailabs/30min",
      stats: [
        { label: "Libreng Konsultasyon", value: "30 min" },
        { label: "Tugon sa Loob ng", value: "<24 oras" },
        { label: "Nagsasalita Kami ng", value: "EN / TL" },
      ],
    },

    footer: {
      companyDescription:
        "Gumagawa kami ng matalinong teknolohiya para sa mga negosyo, gobyerno, at startups. AI-powered. Secure. Ginawa para tumagal.",
      contactInfo: {
        email: "bpxailabs@gmail.com",
        phone: "+63 917 713 8316",
        address: "Pilipinas at Buong Mundo",
      },
      quickLinks: [
        { label: "Ano ang Ginagawa Namin", href: "/#capabilities" },
        { label: "Mga Proyekto", href: "/#projects" },
        { label: "Research", href: "/#research" },
        { label: "Makipag-ugnayan", href: "/#contact" },
      ],
      solutions: [
        { label: "AI at Automation", href: "/#capabilities" },
        { label: "Blockchain Solutions", href: "/#capabilities" },
        { label: "Risk at Compliance", href: "/#capabilities" },
        { label: "Business Platforms", href: "/#capabilities" },
      ],
      copyright: `\u00A9 ${currentYear} BPxAI Labs. All rights reserved.`,
    },
  },
};
