// This file centralizes all content for easy CMS integration in the future

const currentYear = new Date().getFullYear();

export const siteContent = {
  meta: {
    siteName: "BPxAI",
    description: "Your trusted partner for web and app development solutions",
  },

  navigation: {
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    ctaButton: {
      label: "Talk to Us",
      href: "#contact",
    },
  },

  hero: {
    headline: "Custom Software That Solves Real Business Problems",
    subheadline: "Web Apps | Mobile Solutions | Business Automation",
    primaryCta: {
      label: "Book a Consultation",
      href: "https://calendly.com/bpxailabs/30min",
    },
    secondaryCta: {
      label: "View Our Work",
      href: "#projects",
    },
  },

  about: {
    title: "Who We Are",
    mainHeadline: "Technology experts who speak your language",
    description:
      "BPxAI was founded on a simple principle: great technology should solve real business problems. Our team combines deep technical expertise with business acumen to deliver solutions that create measurable value for organizations of all sizes.",
    features: [
      "Collaborative approach that puts your business needs first",
      "Transparent communication in plain language, not tech jargon",
      "Scalable solutions that grow with your business",
      "Ongoing support and partnership beyond project completion",
      "Industry-specific expertise across multiple sectors",
    ],
    conclusion:
      "From startups to enterprises, we're the technology partner you'll actually enjoy working with.",
  },

  services: {
    title: "Services",
    items: [
      {
        title: "Web & Mobile Applications",
        description:
          "Customer-facing apps and internal tools that streamline your business operations and enhance user experience.",
        iconName: "Code",
      },
      {
        title: "Business Process Automation",
        description:
          "Identify and eliminate inefficiencies by automating repetitive tasks and workflows.",
        iconName: "Database",
      },
      {
        title: "Practical AI Integration",
        description:
          "Enhance your existing systems with AI capabilities that deliver immediate business value.",
        iconName: "Bot",
      },
      {
        title: "Technology Strategy",
        description:
          "Roadmapping and planning to align your technology investments with business objectives.",
        iconName: "Lightbulb",
      },
    ],
  },

  whyChooseUs: {
    title: "Why Businesses Choose Us",
    items: [
      {
        title: "Business-First Approach",
        description: "We focus on outcomes, not just outputs",
        iconName: "Tool",
      },
      {
        title: "Rapid Time-to-Value",
        description: "Solutions deployed in weeks, not months",
        iconName: "Rocket",
      },
      {
        title: "Enterprise-Grade Security",
        description: "Bank-level protection for your data and systems",
        iconName: "Lock",
      },
      {
        title: "Long-Term Partnership",
        description: "We're invested in your ongoing success",
        iconName: "Handshake",
      },
    ],
  },

  projectHighlights: {
    title: "Our Success Stories",
    items: [
      {
        title: "Onchain Commerce Platform",
        description:
          "50% faster checkout process and 35% increase in mobile conversions",
      },
      {
        title: "Baltimore Gas & Electric",
        description:
          "Payment processing system that made it easier for 1.2 million customers to pay their bills",
      },
      {
        title: "ManageLife",
        description:
          "Making housing and property management easier for 1,000+ users",
      },
      {
        title: "Entergy",
        description:
          "Automated financial reporting system that reduced manual work by 80%",
      },
    ],
  },

  testimonial: {
    quote:
      "BPxAI understood our business challenges immediately and delivered a solution that not only met our technical requirements but actually improved our business processes. They're partners, not just vendors.",
    author: "Operations Director, Retail Enterprise",
  },

  cta: {
    title: "Ready to Transform Your Business?",
    description:
      "Book a 30-minute consultation and let's discuss how we can help you achieve your business goals with the right technology solutions.",
    buttonText: "Book Your Free Consultation",
    buttonHref: "https://calendly.com/bpxailabs/30min",
  },

  footer: {
    companyDescription: "Technology Solutions That Drive Business Growth",
    contactInfo: {
      email: "bpxailabs@gmail.com",
      phone: "09177138316",
      address: "San Juan City, Philippines 1500",
    },
    socialLinks: [
      { platform: "Facebook", href: "https://www.facebook.com/bpxai" },
    ],
    quickLinks: [
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    copyright: `© ${currentYear} BPxAI. All rights reserved.`,
  },
};
