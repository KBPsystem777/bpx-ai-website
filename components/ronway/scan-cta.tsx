import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/constants/links";

interface ScanCtaProps {
  heading: string;
  description: string;
}

/**
 * Shared closing call-to-action for the Ronway directory and detail pages:
 * book a consultation, or run a fresh scan. Copy is caller-supplied so each
 * page can frame it in context without duplicating the layout.
 */
export function ScanCta({ heading, description }: ScanCtaProps) {
  return (
    <section className="relative py-24 lg:py-32 bg-surface border-t border-border/60 overflow-hidden">
      <div
        className="absolute inset-x-0 bottom-0 h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 100%, hsl(var(--accent) / 0.08) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-mono tracking-widest uppercase text-accent mb-6 font-medium">
            BPxAI · Ronway
          </p>
          <h2 className="font-display text-foreground text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.02] tracking-tighter mb-6">
            {heading}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-12 px-8 text-sm font-medium tracking-tight"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4" aria-hidden />
                Book consultation
                <ArrowUpRight className="w-4 h-4" aria-hidden />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border border-border bg-transparent text-foreground hover:bg-muted/40 rounded-sm h-12 px-8 text-sm font-medium tracking-tight"
            >
              <Link href="/ronway">Free scanner</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
