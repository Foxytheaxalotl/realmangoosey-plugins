
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main>
        <Hero />
        
        <FeaturedProject 
          title="Paper Plugin"
          description="A free plugin that adds new functionality to your Paper MC server. Built with performance in mind and highly configurable to suit your server's needs."
          downloads={1000}
          url="https://modrinth.com/user/therealmangoosey"
        />
        
        <AboutSection />
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
