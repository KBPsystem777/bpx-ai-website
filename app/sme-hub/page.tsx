"use client";

import { motion } from "framer-motion";
import { BarChart3, Rocket, Target, ShieldCheck, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SMEHubPage() {
  const roadmaps = [
    {
      title: "Startup Stage",
      desc: "Digitizing basic records and customer interactions.",
      icon: Target,
      tools: ["WhatsApp AI Bot", "Cloud Bookkeeping"],
    },
    {
      title: "Optimized Stage",
      desc: "Automating repetitive workflows and reporting.",
      icon: BarChart3,
      tools: ["Auto-Billing", "Inventory AI"],
    },
    {
      title: "Scaling Stage",
      desc: "Integrating blockchain and advanced predictive AI.",
      icon: Rocket,
      tools: ["Onchain Payments", "Predictive Analytics"],
    },
  ];

  const playbooks = [
    "The LGU Digitalization Playbook (Abra Case Study)",
    "AI for Retail Supply Chain Management",
    "Blockchain for Real Estate: The ManageLife Story",
  ];

  const toolkit = ["Supabase", "Base", "OpenAI", "Vercel"];

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-foreground text-[clamp(2.5rem,7vw,5rem)] font-light leading-[1.0] tracking-tighter mb-6"
          >
            SME Growth Hub
          </motion.h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Your all-in-one resource for scaling your business to global
            standards. Access playbooks, toolkits, and roadmaps.
          </p>
        </div>

        {/* Growth Roadmap */}
        <section className="mb-32">
          <h2 className="font-display text-foreground text-3xl md:text-4xl font-light tracking-tight mb-12 text-center">
            Transformation Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmaps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface p-8 rounded-lg border border-border/60 hover:border-accent/40 transition-all"
              >
                <step.icon className="w-10 h-10 text-accent mb-6" aria-hidden />
                <h3 className="font-display text-foreground text-2xl font-light tracking-tight mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.desc}
                </p>
                <div className="space-y-2">
                  {step.tools.map((tool, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <ShieldCheck className="w-4 h-4 text-accent" aria-hidden />
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Success Vault Playbooks */}
        <section className="bg-surface rounded-lg p-8 md:p-16 border border-border/60 mb-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="font-display text-foreground text-3xl md:text-4xl font-light tracking-tight mb-6">
                Access the Success Vault
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Download our detailed playbooks on how we helped PH SMEs and
                LGUs achieve 30%+ revenue growth.
              </p>
              <ul className="space-y-4 mb-8">
                {playbooks.map((title, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-foreground/80"
                  >
                    <Download className="w-5 h-5 text-accent shrink-0" aria-hidden />
                    <span>{title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full max-w-md bg-background p-8 rounded-lg border border-border/60 shadow-[0_20px_60px_-30px_rgba(11,15,26,0.25)]">
              <h3 className="font-display text-foreground text-xl font-light tracking-tight mb-6 text-center">
                Get Free Access
              </h3>
              <form className="space-y-4">
                <Input
                  placeholder="Full Name"
                  className="bg-transparent border-border text-foreground placeholder:text-muted-foreground/70 focus-visible:border-accent focus-visible:ring-0 rounded-sm h-12"
                  aria-label="Full Name"
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="bg-transparent border-border text-foreground placeholder:text-muted-foreground/70 focus-visible:border-accent focus-visible:ring-0 rounded-sm h-12"
                  aria-label="Email Address"
                />
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 rounded-sm font-medium tracking-tight">
                  Download All Playbooks
                </Button>
                <p className="text-[10px] text-muted-foreground text-center">
                  By signing up, you agree to receive growth tips from BPxAI Labs.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Tech Toolkit */}
        <section className="text-center">
          <h2 className="font-display text-foreground text-3xl md:text-4xl font-light tracking-tight mb-12">
            The Tech Access Toolkit
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {toolkit.map((tool) => (
              <div
                key={tool}
                className="flex items-center bg-surface px-6 py-4 rounded-sm border border-border/60 transition-colors hover:border-accent/40"
              >
                <span className="text-lg font-semibold text-foreground">
                  {tool}
                </span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-12 max-w-2xl mx-auto leading-relaxed">
            We use these world-class tools to build your infrastructure,
            ensuring your business stays at the cutting edge of tech.
          </p>
        </section>
      </div>
    </main>
  );
}
