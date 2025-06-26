"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { siteConfig } from "@/config/config";
import { submitContactForm } from "@/app/actions";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    try {
      await submitContactForm(formData);
      // Reset form or show success message
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {siteConfig.contact.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {siteConfig.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white text-lg font-semibold">
                    {siteConfig.company.contact.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white text-lg font-semibold">
                    {siteConfig.company.contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Address</p>
                  <p className="text-white text-lg font-semibold">
                    {siteConfig.company.contact.address}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form action={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="name"
                  placeholder={siteConfig.contact.form.namePlaceholder}
                  required
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-400 focus:border-purple-500"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder={siteConfig.contact.form.emailPlaceholder}
                  required
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-400 focus:border-purple-500"
                />
              </div>

              <Input
                name="company"
                placeholder={siteConfig.contact.form.companyPlaceholder}
                className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-400 focus:border-purple-500"
              />

              <Textarea
                name="message"
                placeholder={siteConfig.contact.form.messagePlaceholder}
                rows={6}
                required
                className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-400 focus:border-purple-500 resize-none"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-2xl w-fit"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    {siteConfig.contact.form.submitText}
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
