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
    <main className="min-h-screen bg-slate-900 pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 px-4 py-2 rounded-full mb-8"
          >
            <GraduationCap className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">
              BPxAI Academy: Future-Proofing Leaders
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Master AI for{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Practical Results
            </span>
          </motion.h1>
          <p className="text-xl text-gray-400">
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
          className="relative rounded-[40px] overflow-hidden bg-slate-800 border border-slate-700 mb-32"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative h-64 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                alt="Featured Course"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-r" />
              <button className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-purple-600 ml-1" />
              </button>
            </div>
            <div className="lg:w-1/2 p-8 lg:p-16">
              <div className="text-sm font-bold text-purple-400 mb-4 uppercase tracking-widest">
                Free Introduction
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 underline decoration-purple-500/30">
                The Digital Renaissance: Transform or Fade
              </h2>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                Learn why 70% of companies fail their digital transformation and
                how to ensure your SME is the 30% that thrives in the Age of
                Intelligence.
              </p>
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center space-x-2 text-gray-300 font-medium">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span>15 Mins</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 font-medium">
                  <BookOpen className="w-5 h-5 text-gray-500" />
                  <span>Foundational Case Study</span>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-gray-200 px-8 py-7 text-lg font-bold rounded-2xl group flex items-center space-x-3"
              >
                <span>Start Learning Now</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Modules Grid */}
        <div className="mb-32">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Curriculum for Scale
              </h2>
              <p className="text-gray-400">
                Deep-dive modules covering every aspect of AI implementation.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-800/50 rounded-3xl border border-slate-700/50 overflow-hidden hover:border-blue-500/40 transition-all flex flex-col"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={module.image}
                    alt={module.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-xs font-bold text-white">
                    {module.category}
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {module.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mt-auto">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{module.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{module.lessons} Lessons</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <section className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-white/10 rounded-[40px] p-12 text-center overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Want a tailored workshop?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              We host exclusive webinars and workshops for LGU leaders and
              corporate executives. Book a diagnostic call to learn more.
            </p>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl shadow-purple-500/20"
            >
              Host a Workshop
            </Button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-[120px] opacity-20 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[120px] opacity-20 -ml-32 -mb-32"></div>
        </section>
      </div>
    </main>
  );
}
