
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github } from "lucide-react";
import { Link } from "react-router-dom";

interface FeaturedProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  downloads: number;
  url: string;
  githubUrl?: string;
}

const FeaturedProject = ({ 
  title, 
  description, 
  imageUrl, 
  downloads, 
  url, 
  githubUrl 
}: FeaturedProjectProps) => {
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Featured Project
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-modrinth-purple to-modrinth-vivid">
            {title}
          </h3>
          
          <div className="flex items-center gap-2 text-muted-foreground mb-6">
            <Download className="h-5 w-5" />
            <span>{downloads.toLocaleString()} downloads</span>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href={url} target="_blank" rel="noopener noreferrer">
                View on Modrinth <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            {githubUrl && (
              <Button asChild variant="outline">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Source Code
                </a>
              </Button>
            )}
          </div>
        </div>
        
        <div className="order-1 md:order-2">
          <div className="rounded-xl overflow-hidden border border-border shadow-lg">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
