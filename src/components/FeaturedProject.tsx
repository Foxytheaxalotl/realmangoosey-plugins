
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface FeaturedProjectProps {
  title: string;
  description: string;
  downloads: number;
  url: string;
}

const FeaturedProject = ({ 
  title, 
  description, 
  downloads, 
  url 
}: FeaturedProjectProps) => {
  return (
    <div className="container py-16">
      <div className="max-w-3xl mx-auto">
        <div className="bg-modrinth-deepGreen/5 rounded-xl p-8 border border-modrinth-green/10">
          <h2 className="font-minecraft text-2xl md:text-3xl font-bold mb-4 text-modrinth-green">
            Featured Plugin
          </h2>
          <h3 className="font-minecraft text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h3>
          
          <div className="flex items-center gap-2 text-muted-foreground mb-6">
            <Download className="h-5 w-5" />
            <span>{downloads.toLocaleString()} downloads</span>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8">
            {description}
          </p>
          
          <Button asChild className="font-minecraft">
            <a href={url} target="_blank" rel="noopener noreferrer">
              View on Modrinth <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
