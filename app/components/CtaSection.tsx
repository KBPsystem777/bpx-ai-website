"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type CtaSectionProps = {
  content: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
};

export default function CtaSection({ content }: CtaSectionProps) {
  return (
    <section id="contact" className="py-20 px-4 bg-blue-900 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">{content.title}</h2>
        <p className="text-lg mb-10 text-blue-100 max-w-2xl mx-auto">
          {content.description}
        </p>
        <Link href={content.buttonHref} passHref target="_blank">
          <Button
            className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg"
            onClick={() =>
              window.open("https://calendly.com/bpxailabs/30min", "_blank")
            }
          >
            {content.buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
}
