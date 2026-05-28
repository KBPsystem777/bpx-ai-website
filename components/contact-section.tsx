"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/app/actions";

const editorialEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(formData: FormData) {
    setState("submitting");
    setErrorMessage("");
    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setState("success");
      } else {
        setState("error");
        setErrorMessage(result.error ?? "Failed to send message.");
      }
    } catch (error) {
      setState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message.",
      );
    }
  }

  const inputBase =
    "bg-transparent border-border text-foreground placeholder:text-muted-foreground/70 focus-visible:border-accent focus-visible:ring-0 rounded-sm text-sm h-12";

  return (
    <section
      id="contact"
      className="relative py-32 lg:py-40 bg-surface border-t border-border/60"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: editorialEase }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <h2 className="font-display text-foreground text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.02] tracking-tighter mb-6">
            Contact.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Manila · Philippines · Global engagement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: editorialEase, delay: 0.1 }}
          viewport={{ once: true, margin: "-40px" }}
          className="max-w-xl mx-auto"
        >
          {state === "success" ? (
            <div className="flex flex-col items-center text-center gap-5 py-10">
              <CheckCircle2 className="w-10 h-10 text-accent" aria-hidden />
              <div>
                <h3 className="font-display text-foreground text-2xl tracking-tight mb-3">
                  Received.
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  A partner will respond within one working day.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(new FormData(e.currentTarget));
              }}
              className="space-y-4"
            >
              <Input
                name="name"
                placeholder="Name"
                required
                className={inputBase}
                aria-label="Name"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                required
                className={inputBase}
                aria-label="Email"
              />
              <Textarea
                name="message"
                placeholder="Message"
                rows={5}
                required
                className="bg-transparent border-border text-foreground placeholder:text-muted-foreground/70 focus-visible:border-accent focus-visible:ring-0 rounded-sm resize-none text-sm"
                aria-label="Message"
              />

              {state === "error" && (
                <p
                  className="text-sm text-destructive leading-relaxed"
                  role="alert"
                >
                  {errorMessage || "Something went wrong. Please try again."}
                </p>
              )}

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Button
                  type="submit"
                  size="lg"
                  disabled={state === "submitting"}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-12 px-8 text-[13px] font-medium tracking-tight disabled:opacity-50"
                >
                  {state === "submitting" ? (
                    <span>Sending…</span>
                  ) : (
                    <>
                      Send
                      <Send className="w-4 h-4" aria-hidden />
                    </>
                  )}
                </Button>

                <a
                  href="https://calendly.com/bpxailabs/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-[13px] font-medium tracking-tight border border-border bg-transparent text-foreground hover:bg-muted/40 rounded-sm h-12 px-6 transition-colors"
                >
                  <Calendar className="w-4 h-4" aria-hidden />
                  Book a briefing
                  <ArrowUpRight className="w-4 h-4" aria-hidden />
                </a>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
