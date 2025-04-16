
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
      
      <div className="container py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-modrinth-purple to-modrinth-vivid">
              Minecraft Plugins
            </span>{" "}
            by TheRealMangoosey
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 md:mb-12">
            Free, open-source plugins and mods to enhance your Minecraft experience. 
            Designed with performance and simplicity in mind.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/projects">
                Browse Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://modrinth.com/user/therealmangoosey" target="_blank" rel="noopener noreferrer">
                Modrinth Profile
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-modrinth-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-modrinth-vivid/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Hero;
