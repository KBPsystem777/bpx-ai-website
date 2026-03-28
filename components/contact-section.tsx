"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2 } from "lucide-react";
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
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.company.contact.email,
      href: `mailto:${siteConfig.company.contact.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.company.contact.phone,
      href: `tel:${siteConfig.company.contact.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Operations",
      value: siteConfig.company.contact.address,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm text-brand font-medium mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4 tracking-tight">
            {siteConfig.contact.title}
          </h2>
          <p className="text-lg text-black max-w-2xl">
            {siteConfig.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-5 rounded-xl border border-gray-200 bg-white"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-xs text-black tracking-wide uppercase mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-black font-medium hover:text-brand transition-colors text-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-black font-medium text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="p-5 rounded-xl border border-gray-200 bg-white">
              <p className="text-sm text-black mb-2.5">
                Prefer a live conversation? Book a 30-minute strategy session.
              </p>
              <a
                href="https://calendly.com/bpxailabs/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-black font-medium hover:text-brand transition-colors"
              >
                Book on Calendly
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-8 rounded-2xl border border-gray-200 bg-white">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mb-4" />
                <h3 className="text-lg font-bold text-black mb-2">Message Sent</h3>
                <p className="text-black text-sm">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">Name</label>
                    <Input
                      id="contact-name"
                      name="name"
                      placeholder={siteConfig.contact.form.namePlaceholder}
                      required
                      className="bg-white border-gray-200 text-black placeholder:text-gray-400 focus:border-gray-400 focus:ring-gray-200 rounded-lg text-sm h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="sr-only">Email</label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder={siteConfig.contact.form.emailPlaceholder}
                      required
                      className="bg-white border-gray-200 text-black placeholder:text-gray-400 focus:border-gray-400 focus:ring-gray-200 rounded-lg text-sm h-11"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-company" className="sr-only">Company</label>
                  <Input
                    id="contact-company"
                    name="company"
                    placeholder={siteConfig.contact.form.companyPlaceholder}
                    className="bg-white border-gray-200 text-black placeholder:text-gray-400 focus:border-gray-400 focus:ring-gray-200 rounded-lg text-sm h-11"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="sr-only">Message</label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder={siteConfig.contact.form.messagePlaceholder}
                    rows={5}
                    required
                    className="bg-white border-gray-200 text-black placeholder:text-gray-400 focus:border-gray-400 focus:ring-gray-200 rounded-lg resize-none text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-brand hover:bg-brand-600 text-white font-medium rounded-lg h-11 px-6 text-sm transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      {siteConfig.contact.form.submitText}
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
