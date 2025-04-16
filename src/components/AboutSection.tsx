
import { Button } from "@/components/ui/button";
import { Code, FileCode, Package, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">About My Plugins</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          I create free, open-source Minecraft plugins that focus on performance,
          reliability, and ease of use.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">High Performance</h3>
          <p className="text-muted-foreground">
            Optimized code that won't slow down your server, even with many players online.
          </p>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <Package className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Free & Open Source</h3>
          <p className="text-muted-foreground">
            All my plugins are completely free and open source, available for anyone to use and modify.
          </p>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <FileCode className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy Configuration</h3>
          <p className="text-muted-foreground">
            Simple configuration files with clear documentation to get you up and running quickly.
          </p>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <Code className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Regular Updates</h3>
          <p className="text-muted-foreground">
            Constantly improving and updating plugins to ensure compatibility with the latest Minecraft versions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
