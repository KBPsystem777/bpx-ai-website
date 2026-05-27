"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { siteConfig } from "@/config/config";
import { submitContactForm } from "@/app/actions";

const editorialEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
      label: "Direct",
      value: siteConfig.company.contact.email,
      href: `mailto:${siteConfig.company.contact.email}`,
    },
    {
      icon: Phone,
      label: "Voice",
      value: siteConfig.company.contact.phone,
      href: `tel:${siteConfig.company.contact.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Operating",
      value: "Manila · Philippines · Global engagement",
    },
  ];

  const inputBase =
    "bg-transparent border-border text-foreground placeholder:text-muted-foreground/70 focus-visible:border-accent focus-visible:ring-0 rounded-sm text-sm h-11";

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-surface border-t border-border/60"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: editorialEase }}
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-start mb-16 lg:mb-20"
        >
          <div>
            <div className="eyebrow mb-5">Direct Correspondence</div>
            <h2 className="font-display text-foreground text-[clamp(1.875rem,4vw,3rem)] font-light leading-[1.08] tracking-tighter">
              For the conversations that begin in writing.
            </h2>
          </div>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl lg:pt-3">
            Most institutional engagements begin with a brief written
            introduction — context, question, timeline. Our partners respond
            within one working day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
          {/* Contact channels */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: editorialEase }}
            viewport={{ once: true, margin: "-40px" }}
            className="bg-background p-8 lg:p-10"
          >
            <div className="eyebrow mb-6">Channels</div>
            <ul className="space-y-px">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-center justify-between gap-4 py-4 border-t border-border/60 first:border-t-0">
                    <div className="flex items-center gap-4 min-w-0">
                      <Icon
                        className="w-4 h-4 text-accent shrink-0"
                        aria-hidden
                      />
                      <div className="min-w-0">
                        <p className="text-[11px] tracking-widest uppercase text-muted-foreground font-mono mb-1">
                          {item.label}
                        </p>
                        <p className="text-sm text-foreground truncate">
                          {item.value}
                        </p>
                      </div>
                    </div>
                    {item.href && (
                      <ArrowUpRight
                        className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0"
                        aria-hidden
                      />
                    )}
                  </div>
                );

                return (
                  <li key={index}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="group block hover:bg-muted/20 transition-colors -mx-2 px-2"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="-mx-2 px-2">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 pt-8 border-t border-border/60">
              <p className="text-sm text-muted-foreground mb-3">
                Prefer to speak first.
              </p>
              <a
                href="https://calendly.com/bpxailabs/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                Book a partner briefing
                <ArrowUpRight className="w-4 h-4" aria-hidden />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: editorialEase, delay: 0.1 }}
            viewport={{ once: true, margin: "-40px" }}
            className="bg-background p-8 lg:p-10"
          >
            <div className="eyebrow mb-6">Written Introduction</div>

            {isSubmitted ? (
              <div className="flex flex-col items-start gap-4 py-6">
                <CheckCircle2
                  className="w-8 h-8 text-accent"
                  aria-hidden
                />
                <div>
                  <h3 className="font-display text-foreground text-xl tracking-tight mb-2">
                    Received.
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                    A partner will respond within one working day. For
                    sovereign or defense-adjacent engagements, please indicate
                    the appropriate channel in your message.
                  </p>
                </div>
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="sr-only"
                    >
                      Name
                    </label>
                    <Input
                      id="contact-name"
                      name="name"
                      placeholder={siteConfig.contact.form.namePlaceholder}
                      required
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="sr-only"
                    >
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder={siteConfig.contact.form.emailPlaceholder}
                      required
                      className={inputBase}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-company"
                    className="sr-only"
                  >
                    Institution
                  </label>
                  <Input
                    id="contact-company"
                    name="company"
                    placeholder="Institution / Organization"
                    className={inputBase}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="sr-only"
                  >
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="Context, question, and timeline — a few sentences are enough."
                    rows={5}
                    required
                    className="bg-transparent border-border text-foreground placeholder:text-muted-foreground/70 focus-visible:border-accent focus-visible:ring-0 rounded-sm resize-none text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-11 px-6 text-[13px] font-medium tracking-tight disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending…</span>
                  ) : (
                    <>
                      Send introduction
                      <Send className="w-4 h-4" aria-hidden />
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
