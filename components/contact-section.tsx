"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { siteConfig } from "@/config/config";
import { submitContactForm } from "@/app/actions";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    try {
      await submitContactForm(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const contactItems = [
    { icon: Mail, label: "Email", value: siteConfig.company.contact.email, href: `mailto:${siteConfig.company.contact.email}` },
    { icon: Phone, label: "Phone", value: siteConfig.company.contact.phone, href: `tel:${siteConfig.company.contact.phone}` },
    { icon: MapPin, label: "Coverage", value: siteConfig.company.contact.address, href: undefined },
  ];

  return (
    <section id="contact" className="relative py-28 bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 font-semibold tracking-widest uppercase text-xs mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text-elite">
            {siteConfig.contact.title}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {siteConfig.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactItems.map((item, i) => (
              <div key={i} className="glass-card rounded-xl p-5 hover-glow transition-all duration-500 group">
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/10 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white font-semibold hover:text-purple-300 transition-colors text-sm">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Trust indicators */}
            <div className="pt-6">
              <p className="text-xs text-slate-600 mb-3 uppercase tracking-widest font-bold">Trusted by</p>
              <div className="flex flex-wrap gap-3">
                {["Government LGUs", "US Utilities", "SME Operators", "Web3 Startups"].map((tag, i) => (
                  <span key={i} className="text-[10px] px-3 py-1.5 rounded-full border border-slate-800 text-slate-500 bg-slate-900/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <div className="glass-card rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                  <Send className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent</h3>
                <p className="text-slate-400 text-sm">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <div className="glass-card rounded-2xl p-8">
                <form action={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input
                      name="name"
                      placeholder={siteConfig.contact.form.namePlaceholder}
                      required
                      className="bg-slate-900/50 border-slate-700/50 text-white placeholder:text-slate-600 focus:border-purple-500/50 focus:ring-purple-500/20 h-12 rounded-xl"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder={siteConfig.contact.form.emailPlaceholder}
                      required
                      className="bg-slate-900/50 border-slate-700/50 text-white placeholder:text-slate-600 focus:border-purple-500/50 focus:ring-purple-500/20 h-12 rounded-xl"
                    />
                  </div>

                  <Input
                    name="company"
                    placeholder={siteConfig.contact.form.companyPlaceholder}
                    className="bg-slate-900/50 border-slate-700/50 text-white placeholder:text-slate-600 focus:border-purple-500/50 focus:ring-purple-500/20 h-12 rounded-xl"
                  />

                  <Textarea
                    name="message"
                    placeholder={siteConfig.contact.form.messagePlaceholder}
                    rows={5}
                    required
                    className="bg-slate-900/50 border-slate-700/50 text-white placeholder:text-slate-600 focus:border-purple-500/50 focus:ring-purple-500/20 resize-none rounded-xl"
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white h-12 font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto px-8 group"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        {siteConfig.contact.form.submitText}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
