
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Minecraft/Modrinth-themed placeholder images
const PROJECT_IMAGE = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
const FUTURE_IMAGE = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";

const Projects = () => {
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
        
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Browse all my Minecraft plugins and mods, available for free on Modrinth.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Forge Plugin"
            description="A powerful plugin for Minecraft Forge servers that adds new functionality and features."
            imageUrl={PROJECT_IMAGE}
            downloads={1000}
            url="https://modrinth.com/user/therealmangoosey"
          />
          
          <ProjectCard 
            title="Coming Soon!"
            description="More exciting plugins are in development. Check back soon for updates and new releases."
            imageUrl={FUTURE_IMAGE}
            downloads={0}
            url="https://modrinth.com/user/therealmangoosey"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
