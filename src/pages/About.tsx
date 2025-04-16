
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main className="container py-8">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Hello! I'm TheRealMangoosey, a Minecraft plugin and mod developer focused on creating high-quality, 
              free, and open-source tools for the Minecraft community.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              My journey in plugin development started with a passion for Minecraft and coding. I wanted to create tools 
              that would enhance the gameplay experience while maintaining performance and stability.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Development Philosophy</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              When creating plugins, I follow these core principles:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-lg">
                <strong>Performance First:</strong> Plugins should enhance your server, not slow it down.
              </li>
              <li className="text-lg">
                <strong>User-Friendly:</strong> Easy installation and configuration for server administrators.
              </li>
              <li className="text-lg">
                <strong>Open Source:</strong> All code is available for review, learning, and modification.
              </li>
              <li className="text-lg">
                <strong>Free:</strong> Available to everyone without any cost.
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Connect With Me</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              I'm always open to feedback, suggestions, or just chatting about Minecraft and plugin development.
              Feel free to reach out through any of these platforms:
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild>
                <a href="https://modrinth.com/user/therealmangoosey" target="_blank" rel="noopener noreferrer">
                  <div className="w-4 h-4 bg-white text-modrinth-purple flex items-center justify-center rounded-sm font-bold mr-2">M</div>
                  Modrinth
                </a>
              </Button>
              
              <Button asChild variant="outline">
                <a href="https://github.com/therealmangoosey" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> 
                  GitHub
                </a>
              </Button>
            </div>
            
            <p className="text-lg leading-relaxed">
              Thank you for your interest in my work. I hope my plugins enhance your Minecraft experience!
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
