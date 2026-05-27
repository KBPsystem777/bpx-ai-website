// This file centralizes all content for easy CMS integration in the future.
// All copy here derives from MESSAGING.md (repo root). Treat that document as canonical.

const currentYear = new Date().getFullYear();

export const siteContent: Record<string, any> = {
  en: {
    meta: {
      siteName: "BPxAI",
      description:
        "The Philippine practice for post-quantum cryptography, applied AI, and blockchain-verified systems.",
    },

    navigation: {
      links: [
        { label: "Practices", href: "/#capabilities" },
        { label: "Quantum", href: "/quantum" },
        { label: "Ronway Scanner", href: "/ronway" },
        { label: "Research", href: "/#research" },
        { label: "Contact", href: "/#contact" },
      ],
      ctaButton: {
        label: "Brief our partners",
        href: "/#contact",
      },
    },

    hero: {
      tagline: "Post-Quantum · Applied AI · Verifiable Systems",
      headline:
        "Engineered for the post-quantum decade.",
      subheadline:
        "BPxAI is the Philippine market's specialist consultancy for post-quantum cryptography, applied artificial intelligence, and blockchain-verified systems. We work with the institutions whose continuity depends on cryptographic resilience and decision-grade intelligence in the decade ahead.",
      metrics: [
        {
          value: "FIPS 203 / 204 / 205",
          label: "NIST-aligned migration practice",
          sublabel: "Hybrid PQC, in production",
        },
        {
          value: "4",
          label: "Fortune 500 utilities delivered",
          sublabel: "Exelon · BGE · Entergy · Xcel",
        },
        {
          value: "PH-built",
          label: "Ronway PQC Scanner",
          sublabel: "First Philippine-developed",
        },
        {
          value: "EN / FIL",
          label: "Institutional bilingual delivery",
          sublabel: "Sovereign-grade localization",
        },
      ],
      primaryCta: {
        label: "Brief our partners",
        href: "/#contact",
      },
      secondaryCta: {
        label: "Scan a system with Ronway",
        href: "/ronway",
      },
      trustedBy:
        "Engagements with Fortune 500 U.S. utilities, Philippine local government units, and the Department of the Interior and Local Government.",
    },

    capabilities: {
      sectionLabel: "Practices",
      title:
        "Three disciplines. One institutional posture for the next decade.",
      subtitle:
        "Most firms still treat post-quantum cryptography, applied AI, and verifiable systems as separate conversations. We work where they converge — at the cryptographic and intelligence layer underneath the institution.",
      pillars: [
        {
          id: "pqc",
          title: "Post-Quantum Cryptography",
          shortTitle: "Quantum",
          description:
            "NIST finalized FIPS 203, 204, and 205 in August 2024. Migration windows for institutional cryptography run five to seven years. We map your cryptographic surface, score the exposure, and engineer hybrid PQC deployments in sequence — board-readable on one end, production-grade on the other.",
          capabilities: [
            "Cryptographic inventory & exposure mapping",
            "Hybrid PQC migration architecture",
            "Ronway Scanner (public surface)",
            "Regulatory readiness briefings",
          ],
          metric: "Aligned to NIST FIPS 203 / 204 / 205",
        },
        {
          id: "ai",
          title: "Applied Artificial Intelligence",
          shortTitle: "AI",
          description:
            "We deliver AI where institutional consequence is high — clinical triage, defense doctrine, regulated financial operations. Decision-grade systems, not productivity wrappers. We have published doctrine on AI in national defense and shipped clinical-triage infrastructure into the Philippine health system.",
          capabilities: [
            "AI strategy & governance for regulated institutions",
            "Clinical & operational triage systems",
            "Defense and intelligence AI doctrine",
            "Agentic systems for institutional back-office",
          ],
          metric: "Doctrine published. Deployments running.",
        },
        {
          id: "web3",
          title: "Blockchain & Digital Trust",
          shortTitle: "Trust",
          description:
            "Verifiable systems for transactions, records, and processes where institutional trust is the product. We do not treat blockchain as a marketing layer. We use it where verifiability — not novelty — is the institutional requirement.",
          capabilities: [
            "Tokenization for regulated assets",
            "On-chain provenance for sovereign procurement",
            "Verifiable credential systems",
            "Smart-contract audit & oversight",
          ],
          metric: "Live across U.S. residential markets",
        },
      ],
    },

    services: {
      title: "How an engagement begins",
      subtitle:
        "Three entry points, calibrated to the depth of question on the table.",
      items: [
        {
          title: "Ronway Consultation",
          description:
            "A sixty-to-ninety-minute working session with our cryptographic partners, anchored on the result of a Ronway scan of your environment. We walk through the full exposure map, identify systems the public scan could not reach, and propose a migration sequence. Output: a written remediation brief delivered within seven days.",
          iconName: "Search",
          pricing: "Entry engagement",
          deliverables: [
            "Ronway scan of nominated environment",
            "Full exposure map & priority matrix",
            "Migration sequence proposal",
            "Written remediation brief (7 days)",
          ],
          timeline: "1 week",
        },
        {
          title: "Cryptographic Discovery",
          description:
            "A formal cryptographic inventory and exposure assessment of your institutional environment — internal and external surface. Algorithm-by-algorithm risk scoring against NIST timelines, regulator-aligned. Concludes with a board-readable executive summary and a roadmap-ready exposure matrix.",
          iconName: "Copy",
          pricing: "Discovery engagement",
          deliverables: [
            "Full cryptographic inventory",
            "NIST-aligned exposure scoring",
            "Regulatory alignment memo",
            "Board-readable executive summary",
          ],
          timeline: "2–4 weeks",
        },
        {
          title: "Migration Architecture",
          description:
            "Discovery plus a complete migration architecture — hybrid PQC design, system sequencing, certificate-chain replacement plan, vendor and library assessment, and the engineering oversight to deliver it. The outcome is a migration your engineering team can execute and your regulator can audit.",
          iconName: "Rocket",
          pricing: "Full engagement",
          deliverables: [
            "Hybrid PQC architecture",
            "Migration sequencing & timeline",
            "Vendor & library assessment",
            "Engineering oversight through cutover",
          ],
          timeline: "8–16 weeks",
        },
      ],
    },

    projectHighlights: {
      title: "Selected engagements",
      subtitle:
        "Engagements we can speak to publicly. Sovereign and defense work is referenced only at the level our principals are authorized to discuss.",
      items: [
        {
          title: "AI Defense Intelligence Framework — Philippines",
          description:
            "Published strategic doctrine on the application of artificial intelligence to Philippine defense and national-security operations. First-mover position in the country's AI-defense thought-leadership conversation.",
          impact: "Doctrine, published",
          metric: "Strategic framework",
          industry: "Defense & National Security",
          tags: ["AI Doctrine", "Defense", "Published Research"],
        },
        {
          title: "Sovereign Revenue Infrastructure — Philippine LGUs",
          description:
            "Designed and delivered the digital backbone for real-property tax assessment, computation, and collection across Philippine local government units. Modernized a category of sovereign revenue infrastructure that had operated on paper for a generation.",
          impact: "+30% public revenue collection",
          metric: "+30% collections lift",
          industry: "Public Sector",
          tags: ["Sovereign Capability", "Tax Infrastructure", "DILG"],
        },
        {
          title: "Billing Accuracy — Fortune 500 U.S. Utilities",
          description:
            "Engineered billing accuracy and customer-portal automation for four Fortune 500 U.S. utilities — Exelon, Baltimore Gas and Electric, Entergy, and Xcel Energy. The same transactional surface that, in a Philippine financial-services context, becomes inter-bank messaging.",
          impact: "70% reduction in billing-error rates",
          metric: "−70% error rate",
          industry: "Energy & Utilities",
          tags: ["Fortune 500", "Billing Integrity", "Automation"],
        },
        {
          title: "MedixAI — Clinical Triage Infrastructure",
          description:
            "Clinical-triage and provider-matching infrastructure for the Philippine health system. AI-mediated initial assessment that routes patients to appropriately credentialed providers. Currently in limited release.",
          impact: "Limited release, Philippine market",
          metric: "AI clinical triage",
          industry: "Healthcare",
          tags: ["Clinical AI", "Healthcare", "Limited Release"],
        },
        {
          title: "ManageLife — Blockchain-Verified Housing",
          description:
            "Tokenized fractional-ownership infrastructure for U.S. residential housing. On-chain provenance and verifiable property records, delivered as production infrastructure rather than proof-of-concept.",
          impact: "Live, U.S. residential markets",
          metric: "On-chain provenance",
          industry: "Financial Services",
          tags: ["Tokenization", "Verifiable Records", "Real Assets"],
        },
        {
          title: "Operational Systems — Emerging Enterprise",
          description:
            "Unified operational platform replacing fragmented spreadsheet workflows for an emerging Philippine enterprise. Attendance, sales, inventory, expenses — consolidated into a single intelligence surface.",
          impact: "Daily operational use",
          metric: "Unified intelligence surface",
          industry: "Enterprise",
          tags: ["Operational Intelligence", "Consolidation"],
        },
      ],
    },

    clients: {
      title: "Institutional engagements to date",
      logos: [
        { name: "Exelon", logo: "/clients/exelon.png" },
        { name: "BGE", logo: "/clients/bge.jpg" },
        { name: "Entergy", logo: "/clients/entergy.webp" },
        { name: "Xcel Energy", logo: "/clients/xcel.png" },
        { name: "DILG", logo: "/clients/dilg.png" },
      ],
    },

    ronway: {
      sectionLabel: "Ronway Scanner",
      title:
        "The first Philippine-developed post-quantum cryptography scanner.",
      subtitle:
        "Ronway scans the public cryptographic surface of any institutional system — TLS configurations, certificate chains, signing infrastructure, key-exchange protocols — and returns the proportion of that surface that will not survive the post-quantum transition. The scan is free. The remediation plan is the consultation.",
      bullets: [
        "TLS configuration & cipher-suite analysis",
        "Certificate-chain post-quantum readiness",
        "Signing-algorithm exposure (RSA, ECDSA, Ed25519)",
        "Key-exchange protocol assessment",
      ],
      disclosure:
        "Ronway scans public cryptographic surface only. Internal HSMs, key-management systems, and air-gapped infrastructure are not in scope of the free scan. Where the scanner cannot reach, the consultation begins.",
      primaryCta: {
        label: "Scan a system",
        href: "/ronway",
      },
      secondaryCta: {
        label: "Book a Ronway consultation",
        href: "/#contact",
      },
    },

    research: {
      title: "Research & Doctrine",
      subtitle:
        "Published positions on the standards migrations, regulatory transitions, and institutional questions that define the post-quantum decade.",
      documents: [
        {
          title: "AI Defense Intelligence Framework for the Philippines",
          description:
            "Strategic doctrine on the application of artificial intelligence to Philippine defense and intelligence operations. Published as part of BPxAI's first-mover position in the national-security technology conversation.",
          category: "Defense & National Security",
          date: "February 2026",
          fileSize: "PDF",
          downloadUrl:
            "/resources/AI_Defense_Intelligence_Framework_Philippines_Report.pdf",
          tags: [
            "AI Doctrine",
            "Defense",
            "National Security",
            "Philippines",
          ],
        },
      ],
    },

    cta: {
      title: "Begin the conversation before the agenda is finalized.",
      description:
        "If post-quantum cryptography, applied AI, or verifiable systems sit on your institutional agenda for the next twelve months — formally or informally — we should speak. A thirty-minute partner briefing is the standard entry point.",
      buttonText: "Brief our partners",
      buttonHref: "https://calendly.com/bpxailabs/30min",
      stats: [
        { label: "Partner briefing", value: "30 min" },
        { label: "Response window", value: "<24h" },
        { label: "Working languages", value: "EN / FIL" },
      ],
    },

    footer: {
      companyDescription:
        "The Philippine practice for post-quantum cryptography, applied AI, and blockchain-verified systems. Engineered for the institutions of the next decade.",
      contactInfo: {
        email: "bpxailabs@gmail.com",
        phone: "+63 917 713 8316",
        address: "Manila · Philippines · Global engagement",
      },
      quickLinks: [
        { label: "Practices", href: "/#capabilities" },
        { label: "Quantum Practice", href: "/quantum" },
        { label: "Ronway Scanner", href: "/ronway" },
        { label: "Research", href: "/#research" },
        { label: "Contact", href: "/#contact" },
      ],
      solutions: [
        { label: "Post-Quantum Cryptography", href: "/quantum" },
        { label: "Applied AI", href: "/#capabilities" },
        { label: "Blockchain & Digital Trust", href: "/#capabilities" },
        { label: "Ronway Scanner", href: "/ronway" },
      ],
      copyright: `© ${currentYear} BPxAI. All rights reserved.`,
    },
  },

  tl: {
    meta: {
      siteName: "BPxAI",
      description:
        "Ang Filipinong praktis para sa post-quantum cryptography, inilapat na AI, at mga sistemang may katibayang on-chain.",
    },

    navigation: {
      links: [
        { label: "Mga Praktis", href: "/#capabilities" },
        { label: "Quantum", href: "/quantum" },
        { label: "Ronway Scanner", href: "/ronway" },
        { label: "Pananaliksik", href: "/#research" },
        { label: "Makipag-ugnayan", href: "/#contact" },
      ],
      ctaButton: {
        label: "Makipag-ugnayan sa aming partners",
        href: "/#contact",
      },
    },

    hero: {
      tagline: "Post-Quantum · Inilapat na AI · Mga Sistemang May Katibayan",
      headline:
        "Itinatayo para sa dekada ng post-quantum.",
      subheadline:
        "Ang BPxAI ang Filipinong praktis para sa post-quantum cryptography, inilapat na artificial intelligence, at mga sistemang may katibayang on-chain. Naglilingkod kami sa mga institusyon na ang pagpapatuloy ng operasyon ay nakasalalay sa katibayang kriptograpiko at sa kalidad ng pasiyang nakabatay sa kaalaman, sa darating na dekada.",
      metrics: [
        {
          value: "FIPS 203 / 204 / 205",
          label: "Praktis na nakaayon sa NIST",
          sublabel: "Hybrid PQC, sa produksyon",
        },
        {
          value: "4",
          label: "Mga Fortune 500 utility na natupad",
          sublabel: "Exelon · BGE · Entergy · Xcel",
        },
        {
          value: "PH-built",
          label: "Ronway PQC Scanner",
          sublabel: "Unang Filipinong nilikha",
        },
        {
          value: "EN / FIL",
          label: "Institusyonal na bilinggwal",
          sublabel: "Lokalisasyong sovereign-grade",
        },
      ],
      primaryCta: {
        label: "Makipag-ugnayan sa aming partners",
        href: "/#contact",
      },
      secondaryCta: {
        label: "I-scan ang isang sistema",
        href: "/ronway",
      },
      trustedBy:
        "Mga engagement sa mga Fortune 500 utility ng Estados Unidos, mga lokal na pamahalaan ng Pilipinas, at ang Department of the Interior and Local Government.",
    },

    capabilities: {
      sectionLabel: "Mga Praktis",
      title:
        "Tatlong disiplina. Isang institusyonal na panindigan para sa susunod na dekada.",
      subtitle:
        "Hiwa-hiwalay pa rin sa karamihan ng kumpanya ang post-quantum cryptography, inilapat na AI, at mga sistemang may katibayan. Sa amin, pinagtatagpo namin ang tatlo — sa antas na kriptograpiko at maalam, na nasa ilalim ng buong institusyon.",
      pillars: [
        {
          id: "pqc",
          title: "Post-Quantum Cryptography",
          shortTitle: "Quantum",
          description:
            "Pinagtibay ng NIST ang FIPS 203, 204, at 205 noong Agosto 2024. Ang yugto ng paglipat para sa kriptograpiya ng mga institusyon ay tumatakbo ng lima hanggang pitong taon. Tinutukoy namin ang kabuuan ng inyong kriptograpikong saklaw, sinusukat ang panganib, at idinidisenyo ang sunud-sunod na hybrid PQC deployment — basahin ng lupon sa isang dulo, handa sa produksyon sa kabila.",
          capabilities: [
            "Imbentaryo at pagmamapa ng kriptograpikong saklaw",
            "Arkitektura ng paglipat sa hybrid PQC",
            "Ronway Scanner (panlabas na saklaw)",
            "Paghahanda sa pangangasiwang pang-regulatoryo",
          ],
          metric: "Nakaayon sa NIST FIPS 203 / 204 / 205",
        },
        {
          id: "ai",
          title: "Inilapat na Artificial Intelligence",
          shortTitle: "AI",
          description:
            "Itinatayo namin ang AI kung saan malaki ang institusyonal na bunga — klinikal na triage, doktrinang pantanggulan, at mga regulated na operasyong pinansiyal. Mga sistemang pang-pasiya, hindi pampabilis lamang ng gawain. May naipalathala kaming doktrina sa AI para sa pambansang tanggulan, at may umiiral na kliniko-AI sa sistemang pangkalusugan ng Pilipinas.",
          capabilities: [
            "Estratehiya at pamamahala ng AI sa mga regulated na institusyon",
            "Mga klinikal at operasyonal na sistemang triage",
            "Doktrina sa AI para sa tanggulan at intelidyensya",
            "Mga agentic system para sa institusyonal na back-office",
          ],
          metric: "May naipalathalang doktrina. May tumatakbong deployment.",
        },
        {
          id: "web3",
          title: "Blockchain at Katibayang Digital",
          shortTitle: "Katibayan",
          description:
            "Mga sistemang may katibayan para sa transaksyon, talaan, at proseso kung saan ang institusyonal na pagtitiwala mismo ang produkto. Hindi namin ginagamit ang blockchain bilang pampaganda. Ginagamit namin kung saan ang katibayan — hindi ang pagiging bago — ang institusyonal na pangangailangan.",
          capabilities: [
            "Tokenization para sa mga regulated na ari-arian",
            "On-chain provenance para sa sovereign na pagbili",
            "Mga sistemang verifiable credential",
            "Pag-audit at pagmamatyag sa smart contract",
          ],
          metric: "Live sa mga residential market ng Estados Unidos",
        },
      ],
    },

    services: {
      title: "Paano nagsisimula ang isang engagement",
      subtitle:
        "Tatlong pasukan, naaayon sa lalim ng tanong na nakatakda sa harap ninyo.",
      items: [
        {
          title: "Ronway Consultation",
          description:
            "Isang animnapu-hanggang-siyamnapung-minutong working session kasama ang aming mga kriptograpikong partner, nakabatay sa resulta ng Ronway scan ng inyong kapaligiran. Tatalakayin namin ang buong mapa ng panganib, tutukuyin ang mga sistemang hindi narating ng panlabas na scan, at mag-iiwan ng iminumungkahing pagkakasunod-sunod ng paglipat. Output: isang nakasulat na remediation brief na ihahatid sa loob ng pitong araw.",
          iconName: "Search",
          pricing: "Panimulang engagement",
          deliverables: [
            "Ronway scan ng itinakdang kapaligiran",
            "Buong mapa ng panganib at matrix ng priyoridad",
            "Mungkahi para sa pagkakasunod-sunod ng paglipat",
            "Nakasulat na remediation brief (7 araw)",
          ],
          timeline: "1 linggo",
        },
        {
          title: "Cryptographic Discovery",
          description:
            "Pormal na imbentaryo at pagsusuri ng panganib ng inyong institusyonal na kapaligiran — panloob at panlabas. Pagsusuri ng panganib batay sa NIST timeline, algorithm bawat algorithm, at nakaayon sa regulator. Nagtatapos sa isang executive summary na mababasa ng lupon at isang exposure matrix na handang isalang sa roadmap.",
          iconName: "Copy",
          pricing: "Engagement ng pagsusuri",
          deliverables: [
            "Buong imbentaryong kriptograpiko",
            "Pagmamarka ng panganib na nakaayon sa NIST",
            "Memorandum ng pagsasaayos sa regulator",
            "Executive summary para sa lupon",
          ],
          timeline: "2–4 na linggo",
        },
        {
          title: "Migration Architecture",
          description:
            "Pagsusuri kasama ang kumpletong arkitektura ng paglipat — disenyo ng hybrid PQC, pagkakasunod-sunod ng mga sistema, plano sa pagpapalit ng kadena ng certificate, pagsusuri ng vendor at library, at ang engineering oversight para maipatupad. Ang resulta: isang paglipat na kayang gawin ng inyong engineering team at kayang i-audit ng inyong regulator.",
          iconName: "Rocket",
          pricing: "Buong engagement",
          deliverables: [
            "Arkitektura ng hybrid PQC",
            "Pagkakasunod-sunod at takdang panahon ng paglipat",
            "Pagsusuri sa vendor at library",
            "Engineering oversight hanggang sa cutover",
          ],
          timeline: "8–16 na linggo",
        },
      ],
    },

    projectHighlights: {
      title: "Mga piling engagement",
      subtitle:
        "Mga engagement na maipapahayag namin sa publiko. Ang sovereign at pantanggulang gawain ay binabanggit lamang sa antas na pinahihintulutan ng aming mga partner.",
      items: [
        {
          title: "AI Defense Intelligence Framework — Pilipinas",
          description:
            "Naipalathalang estratehikong doktrina sa paggamit ng artificial intelligence para sa operasyong pantanggulan at intelidyensya ng Pilipinas. Unang panindigan sa pambansang pag-uusap hinggil sa AI at seguridad.",
          impact: "Naipalathalang doktrina",
          metric: "Estratehikong framework",
          industry: "Tanggulan at Pambansang Seguridad",
          tags: ["Doktrinang AI", "Tanggulan", "Naipalathalang Pananaliksik"],
        },
        {
          title: "Sovereign na Imprastraktura ng Kita — Mga LGU ng Pilipinas",
          description:
            "Idinisenyo at itinayo ang digital na backbone ng pagtatasa, pagkukwenta, at pagkolekta ng buwis sa totoong ari-arian sa mga lokal na pamahalaan ng Pilipinas. Ginawang moderno ang isang kategorya ng sovereign na imprastraktura ng kita na isang henerasyong umiral sa papel.",
          impact: "+30% na koleksyon ng pampublikong kita",
          metric: "+30% na pagtaas ng koleksyon",
          industry: "Pampublikong Sektor",
          tags: ["Sovereign na Kapasidad", "Imprastraktura ng Buwis", "DILG"],
        },
        {
          title: "Katumpakan sa Pagsingil — Mga Fortune 500 Utility ng U.S.",
          description:
            "Itinayo ang katumpakan ng pagsingil at automation ng customer portal para sa apat na Fortune 500 utility ng Estados Unidos — Exelon, Baltimore Gas and Electric, Entergy, at Xcel Energy. Katulad na transaksyonal na saklaw ang nagiging inter-bank messaging sa konteksto ng pinansiyal na sektor ng Pilipinas.",
          impact: "70% na pagbawas sa antas ng pagkakamali sa pagsingil",
          metric: "−70% na pagkakamali",
          industry: "Enerhiya at Utilities",
          tags: ["Fortune 500", "Katumpakan sa Pagsingil", "Automation"],
        },
        {
          title: "MedixAI — Imprastraktura ng Klinikal na Triage",
          description:
            "Imprastraktura ng klinikal na triage at pagtutugma ng provider para sa sistemang pangkalusugan ng Pilipinas. Inisyal na pagtatasang pinapagana ng AI na nagruruta ng pasyente sa mga provider na may tamang kredensyal. Kasalukuyang nasa limitadong pagpapalabas.",
          impact: "Limitadong pagpapalabas, merkado ng Pilipinas",
          metric: "Klinikal na triage gamit ang AI",
          industry: "Pangkalusugan",
          tags: ["Klinikal na AI", "Pangkalusugan", "Limitadong Pagpapalabas"],
        },
        {
          title: "ManageLife — Pabahay na May Katibayang On-chain",
          description:
            "Imprastraktura ng tokenized na fractional ownership para sa residential housing ng Estados Unidos. On-chain provenance at verifiable na talaan ng ari-arian, inihahatid bilang imprastrakturang nasa produksyon, hindi proof-of-concept.",
          impact: "Live, mga residential market ng U.S.",
          metric: "On-chain provenance",
          industry: "Pinansiyal na Sektor",
          tags: ["Tokenization", "Mga Talaang Verifiable", "Real Assets"],
        },
        {
          title: "Operasyonal na Sistema — Umuusbong na Negosyo",
          description:
            "Pinag-isang operasyonal na platform na pumalit sa pira-pirasong daloy ng spreadsheet para sa isang umuusbong na negosyo sa Pilipinas. Attendance, benta, inventory, at gastos — pinagsama sa isang maalam na surface.",
          impact: "Pang-araw-araw na operasyonal na paggamit",
          metric: "Pinag-isang maalam na surface",
          industry: "Negosyo",
          tags: ["Operasyonal na Kaalaman", "Konsolidasyon"],
        },
      ],
    },

    clients: {
      title: "Mga institusyonal na engagement hanggang sa kasalukuyan",
      logos: [
        { name: "Exelon", logo: "/clients/exelon.png" },
        { name: "BGE", logo: "/clients/bge.jpg" },
        { name: "Entergy", logo: "/clients/entergy.webp" },
        { name: "Xcel Energy", logo: "/clients/xcel.png" },
        { name: "DILG", logo: "/clients/dilg.png" },
      ],
    },

    ronway: {
      sectionLabel: "Ronway Scanner",
      title:
        "Ang unang Filipinong nilikhang scanner para sa post-quantum cryptography.",
      subtitle:
        "Sinusuri ng Ronway ang panlabas na kriptograpikong saklaw ng anumang institusyonal na sistema — TLS configuration, certificate chain, signing infrastructure, key-exchange protocol — at ibinabalik ang proporsyon ng saklaw na hindi tatagal sa paglipat sa post-quantum. Libre ang pag-scan. Ang remediation plan ay ang konsultasyon.",
      bullets: [
        "Pagsusuri ng TLS configuration at cipher-suite",
        "Paghahandang post-quantum ng kadena ng certificate",
        "Saklaw ng panganib sa signing algorithm (RSA, ECDSA, Ed25519)",
        "Pagsusuri ng protocol ng key-exchange",
      ],
      disclosure:
        "Sinusuri lamang ng Ronway ang panlabas na kriptograpikong saklaw. Hindi saklaw ng libreng scan ang mga panloob na HSM, sistema ng key-management, at air-gapped na imprastraktura. Sa kung saan hindi narating ng scanner, doon nagsisimula ang konsultasyon.",
      primaryCta: {
        label: "I-scan ang isang sistema",
        href: "/ronway",
      },
      secondaryCta: {
        label: "Mag-book ng Ronway consultation",
        href: "/#contact",
      },
    },

    research: {
      title: "Pananaliksik at Doktrina",
      subtitle:
        "Mga naipalathalang panindigan sa paglipat ng pamantayan, pagbabagong regulatoryo, at institusyonal na tanong na bumubuo sa dekada ng post-quantum.",
      documents: [
        {
          title: "AI Defense Intelligence Framework para sa Pilipinas",
          description:
            "Estratehikong doktrina sa paggamit ng artificial intelligence para sa operasyong pantanggulan at intelidyensya ng Pilipinas. Naipalathala bilang bahagi ng unang panindigan ng BPxAI sa pag-uusap hinggil sa teknolohiya at pambansang seguridad.",
          category: "Tanggulan at Pambansang Seguridad",
          date: "Pebrero 2026",
          fileSize: "PDF",
          downloadUrl:
            "/resources/AI_Defense_Intelligence_Framework_Philippines_Report.pdf",
          tags: [
            "Doktrinang AI",
            "Tanggulan",
            "Pambansang Seguridad",
            "Pilipinas",
          ],
        },
      ],
    },

    cta: {
      title:
        "Simulan ang pag-uusap bago matapos ang agenda.",
      description:
        "Kung ang post-quantum cryptography, inilapat na AI, o mga sistemang may katibayan ay nasa inyong institusyonal na agenda sa susunod na labindalawang buwan — pormal man o hindi — dapat tayong magkita. Ang tatlumpung-minutong partner briefing ang karaniwang pasukan.",
      buttonText: "Makipag-ugnayan sa aming partners",
      buttonHref: "https://calendly.com/bpxailabs/30min",
      stats: [
        { label: "Partner briefing", value: "30 min" },
        { label: "Yugto ng tugon", value: "<24h" },
        { label: "Wika ng pag-uusap", value: "EN / FIL" },
      ],
    },

    footer: {
      companyDescription:
        "Ang Filipinong praktis para sa post-quantum cryptography, inilapat na AI, at mga sistemang may katibayan. Itinatayo para sa mga institusyon ng susunod na dekada.",
      contactInfo: {
        email: "bpxailabs@gmail.com",
        phone: "+63 917 713 8316",
        address: "Maynila · Pilipinas · Pandaigdigang engagement",
      },
      quickLinks: [
        { label: "Mga Praktis", href: "/#capabilities" },
        { label: "Quantum Practice", href: "/quantum" },
        { label: "Ronway Scanner", href: "/ronway" },
        { label: "Pananaliksik", href: "/#research" },
        { label: "Makipag-ugnayan", href: "/#contact" },
      ],
      solutions: [
        { label: "Post-Quantum Cryptography", href: "/quantum" },
        { label: "Inilapat na AI", href: "/#capabilities" },
        { label: "Blockchain at Katibayang Digital", href: "/#capabilities" },
        { label: "Ronway Scanner", href: "/ronway" },
      ],
      copyright: `© ${currentYear} BPxAI. Lahat ng karapatan ay nakalaan.`,
    },
  },
};
