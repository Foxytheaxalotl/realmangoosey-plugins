
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
    <div className="container px-4 sm:px-6 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="bg-modrinth-deepGreen/5 rounded-xl p-6 sm:p-8 border border-modrinth-green/10 transform hover:scale-[1.01] transition-all duration-300 animate-fade-in">
          <h2 className="font-minecraft text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-modrinth-green">
            Featured Plugin
          </h2>
          <h3 className="font-minecraft text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h3>
          
          <div className="flex items-center gap-2 text-muted-foreground mb-6 animate-scale-in">
            <Download className="h-5 w-5" />
            <span>{downloads.toLocaleString()} downloads</span>
          </div>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-8">
            {description}
          </p>
          
          <Button asChild className="font-minecraft w-full sm:w-auto">
            <a href={url} target="_blank" rel="noopener noreferrer" className="group">
              View on Modrinth 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
