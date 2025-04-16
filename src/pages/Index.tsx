
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Minecraft/Modrinth-themed placeholder image
const FEATURED_IMAGE = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main>
        <Hero />
        
        <FeaturedProject 
          title="Forge Plugin"
          description="A free and open-source Minecraft plugin that adds new functionality to your Forge server. Built with performance in mind and highly configurable to suit your server's needs. Download now from Modrinth!"
          imageUrl={FEATURED_IMAGE}
          downloads={1000}
          url="https://modrinth.com/user/therealmangoosey"
          githubUrl="https://github.com/therealmangoosey"
        />
        
        <AboutSection />
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
