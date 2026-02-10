"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import {
  BarChart3,
  Rocket,
  Target,
  ShieldCheck,
  Download,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SMEHubPage() {
  const { t } = useLanguage();

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

  return (
    <main className="min-h-screen bg-slate-900 pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            SME Growth Hub
          </motion.h1>
          <p className="text-xl text-gray-400">
            Your all-in-one resource for scaling your business to global
            standards. Access playbooks, toolkits, and roadmaps.
          </p>
        </div>

        {/* Growth Roadmap */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Transformation Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roadmaps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-purple-500/50 transition-all"
              >
                <step.icon className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 mb-6">{step.desc}</p>
                <div className="space-y-2">
                  {step.tools.map((tool, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-2 text-sm text-gray-300"
                    >
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Success Vault Playbooks */}
        <section className="bg-slate-800/30 rounded-[40px] p-8 md:p-16 border border-slate-700/50 mb-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Access the Success Vault
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Download our detailed playbooks on how we helped PH SMEs and
                LGUs achieve 30%+ revenue growth.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3 text-gray-300">
                  <Download className="w-5 h-5 text-purple-400" />
                  <span>The LGU Digitalization Playbook (Abra Case Study)</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <Download className="w-5 h-5 text-purple-400" />
                  <span>AI for Retail Supply Chain Management</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <Download className="w-5 h-5 text-purple-400" />
                  <span>Blockchain for Real Estate: The ManageLife Story</span>
                </li>
              </ul>
            </div>

            <div className="w-full max-w-md bg-slate-900/50 p-8 rounded-3xl border border-slate-700 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                Get Free Access
              </h3>
              <form className="space-y-4">
                <Input
                  placeholder="Full Name"
                  className="bg-slate-800 border-slate-700"
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="bg-slate-800 border-slate-700"
                />
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 h-12 font-bold uppercase tracking-wider">
                  Download All Playbooks
                </Button>
                <p className="text-[10px] text-gray-500 text-center">
                  By signing up, you agree to receive growth tips from BPxAI Labs.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Tech Toolkit */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-12">
            The Tech Access Toolkit
          </h2>
          <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center space-x-2 bg-slate-800 px-6 py-4 rounded-2xl border border-slate-700">
              <span className="text-xl font-bold text-white">Supabase</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800 px-6 py-4 rounded-2xl border border-slate-700">
              <span className="text-xl font-bold text-white">Base</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800 px-6 py-4 rounded-2xl border border-slate-700">
              <span className="text-xl font-bold text-white">OpenAI</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800 px-6 py-4 rounded-2xl border border-slate-700">
              <span className="text-xl font-bold text-white">Vercel</span>
            </div>
          </div>
          <p className="text-gray-500 mt-12 max-w-2xl mx-auto">
            We use these world-class tools to build your infrastructure,
            ensuring your business stays at the cutting edge of tech.
          </p>
        </section>
      </div>
    </main>
  );
}
