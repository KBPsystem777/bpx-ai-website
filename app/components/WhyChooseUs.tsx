import type React from "react";

import { PenToolIcon as Tool, Rocket, Lock, Handshake } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type WhyChooseUsItem = {
  title: string;
  description: string;
  iconName: string;
};

type WhyChooseUsProps = {
  content: {
    title: string;
    items: WhyChooseUsItem[];
  };
};

export default function WhyChooseUs({ content }: WhyChooseUsProps) {
  // Map icon names to actual icon components
  const iconMap: Record<string, React.ElementType> = {
    Tool,
    Rocket,
    Lock,
    Handshake,
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">
          {content.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.items.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Tool;

            return (
              <Card key={index} className="bg-blue-50 border-none text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-white p-3 rounded-full">
                      <IconComponent className="w-6 h-6 text-blue-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-blue-700">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
