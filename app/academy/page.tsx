"use client";

import { motion } from "framer-motion";
import { Play, BookOpen, GraduationCap, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AcademyPage() {
  const modules = [
    {
      title: "AI Strategy for Founders",
      category: "Strategic",
      duration: "45 mins",
      lessons: 5,
      image:
        "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Building Workflow Automations",
      category: "Technical",
      duration: "120 mins",
      lessons: 12,
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Prompt Engineering for Business",
      category: "Technical",
      duration: "60 mins",
      lessons: 8,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full mb-8"
          >
            <GraduationCap className="w-5 h-5 text-accent" aria-hidden />
            <span className="text-sm font-medium text-accent">
              BPxAI Academy: Future-Proofing Leaders
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-foreground text-[clamp(2.5rem,7vw,5rem)] font-light leading-[1.0] tracking-tighter mb-6"
          >
            Master AI for <span className="text-accent">Practical Results</span>
          </motion.h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            No fluff. Only the frameworks and tools we use to transform SMEs in
            the Philippines.
          </p>
        </div>

        {/* Featured Course */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-lg overflow-hidden bg-surface border border-border/60 mb-32"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative h-64 lg:h-auto min-h-[280px]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                alt="Featured Course"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button
                className="absolute inset-0 m-auto w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                aria-label="Play preview"
              >
                <Play className="w-7 h-7 text-accent ml-1" aria-hidden />
              </button>
            </div>
            <div className="lg:w-1/2 p-8 lg:p-14">
              <div className="text-[11px] font-mono font-medium text-accent mb-4 uppercase tracking-widest">
                Free Introduction
              </div>
              <h2 className="font-display text-foreground text-3xl md:text-4xl font-light leading-tight tracking-tight mb-6">
                The Digital Renaissance: Transform or Fade
              </h2>
              <p className="text-muted-foreground mb-10 text-base lg:text-lg leading-relaxed">
                Learn why 70% of companies fail their digital transformation and
                how to ensure your SME is the 30% that thrives in the Age of
                Intelligence.
              </p>
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2 text-foreground/80 text-sm font-medium">
                  <Clock className="w-5 h-5 text-muted-foreground" aria-hidden />
                  <span>15 Mins</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80 text-sm font-medium">
                  <BookOpen className="w-5 h-5 text-muted-foreground" aria-hidden />
                  <span>Foundational Case Study</span>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-12 px-8 text-[13px] font-medium tracking-tight group inline-flex items-center gap-2"
              >
                <span>Start Learning Now</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Modules Grid */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-foreground text-3xl md:text-4xl font-light tracking-tight mb-4">
              Curriculum for Scale
            </h2>
            <p className="text-muted-foreground">
              Deep-dive modules covering every aspect of AI implementation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-surface rounded-lg border border-border/60 overflow-hidden hover:border-accent/40 transition-all flex flex-col"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={module.image}
                    alt={module.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-sm border border-border text-[11px] font-mono uppercase tracking-wider font-medium text-foreground">
                    {module.category}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-display text-foreground text-xl font-light tracking-tight mb-4 group-hover:text-accent transition-colors">
                    {module.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-auto">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" aria-hidden />
                      <span>{module.duration}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" aria-hidden />
                      <span>{module.lessons} Lessons</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <section className="bg-surface border border-border/60 rounded-lg p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-foreground text-3xl md:text-5xl font-light tracking-tighter mb-6">
              Want a tailored workshop?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              We host exclusive webinars and workshops for LGU leaders and
              corporate executives. Book a diagnostic call to learn more.
            </p>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-12 px-8 text-[13px] font-medium tracking-tight"
            >
              Host a Workshop
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
