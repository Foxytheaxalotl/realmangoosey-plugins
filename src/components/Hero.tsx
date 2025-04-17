
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchModrinthStats } from "@/utils/modrinth";

const Hero = () => {
  const { data: stats } = useQuery({
    queryKey: ['modrinth-stats'],
    queryFn: () => fetchModrinthStats('therealmangoosey'),
    refetchInterval: 300000, // Refetch every 5 minutes
  });

  return (
    <div className="relative overflow-hidden bg-modrinth-deepGreen/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
      
      <div className="container py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="font-minecraft text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 mx-auto">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-modrinth-green to-modrinth-vivid inline-block text-center">
              TheRealManjuicy's Plugins
            </span>
          </h1>
          
          {stats && (
            <div className="flex items-center justify-center gap-2 text-modrinth-green mb-6 animate-scale-in">
              <Download className="h-5 w-5" />
              <span className="font-minecraft">{stats.totalDownloads.toLocaleString()} Total Downloads</span>
            </div>
          )}
          
          <p className="text-xl text-muted-foreground mb-8 md:mb-12 animate-fade-in">
            Free plugins to enhance your Minecraft experience. 
            Designed with performance and simplicity in mind.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="font-minecraft">
              <Link to="/projects">
                Browse Plugins <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-minecraft">
              <a href="https://dsc.gg/fruitsnacks" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-modrinth-green/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-modrinth-vivid/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Hero;
