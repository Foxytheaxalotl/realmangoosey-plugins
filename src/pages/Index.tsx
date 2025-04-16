
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { fetchModrinthUserProjects } from "@/utils/modrinth";

const Index = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchModrinthUserProjects('therealmangoosey');
      setProjects(data);
      setIsLoading(false);
    };

    loadProjects();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main>
        <Hero />
        
        {isLoading ? (
          <div className="container py-16 text-center">
            <p className="font-minecraft text-modrinth-green">Loading projects...</p>
          </div>
        ) : projects.length > 0 ? (
          <FeaturedProject 
            title={projects[0].title}
            description={projects[0].description || "A free plugin that adds new functionality to your Paper MC server."}
            downloads={projects[0].downloads}
            url={`https://modrinth.com/plugin/${projects[0].slug}`}
          />
        ) : (
          <FeaturedProject 
            title="Paper Plugin"
            description="A free plugin that adds new functionality to your Paper MC server."
            downloads={0}
            url="https://modrinth.com/user/therealmangoosey"
          />
        )}
        
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
