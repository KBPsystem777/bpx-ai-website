"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type HeroProps = {
  content: {
    headline: string;
    subheadline: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
  };
};

export default function Hero({ content }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-blue-50 to-white relative overflow-hidden">
      {/* Abstract shapes for modern look */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-900 leading-tight">
            {content.headline}
          </h1>
          <p className="text-xl mb-10 text-blue-600">{content.subheadline}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={content.primaryCta.href} passHref target="_blank">
              <Button
                className="bg-blue-900 text-white hover:bg-blue-800 px-8 py-6 text-lg group"
                onClick={() => window.open(content.primaryCta.href, "_blank")}
              >
                {content.primaryCta.label}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Button
              variant="outline"
              className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg"
              onClick={() => {
                const element = document.querySelector(
                  content.secondaryCta.href
                );
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {content.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
