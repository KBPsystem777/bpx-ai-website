"use client";

import { Download, FileText, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";

interface ResearchDocument {
  title: string;
  description: string;
  category: string;
  date: string;
  fileSize: string;
  downloadUrl: string;
  tags: string[];
}

export function ResearchSection() {
  const { t } = useLanguage();
  const research = t("research");

  const handleDownload = (url: string, title: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="research"
      className="py-24 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{research.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {research.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {Array.isArray(research.documents) &&
            research.documents.map((doc: ResearchDocument, index: number) => (
              <Card
                key={index}
                className="flex flex-col hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <FileText className="h-10 w-10 text-primary mb-4" />
                    <Badge variant="secondary">{doc.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{doc.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {doc.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{doc.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      <span>{doc.fileSize}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {doc.tags.map((tag: string, tagIndex: number) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    onClick={() => handleDownload(doc.downloadUrl, doc.title)}
                    className="w-full"
                    variant="default"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Framework
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Disclaimer:</strong> These documents are provided as
            conceptual frameworks and project overviews for informational
            purposes. They represent ongoing research and development
            initiatives.
          </p>
        </div>
      </div>
    </section>
  );
}
