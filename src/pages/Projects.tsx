
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchModrinthUserProjects } from "@/utils/modrinth";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const Projects = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['modrinth-projects'],
    queryFn: () => fetchModrinthUserProjects('therealmangoosey'),
    refetchInterval: 300000, // Refetch every 5 minutes
  });

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
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Projects</h1>
            <p className="text-muted-foreground text-lg">
              Browse all my Paper MC plugins, available for free on Modrinth.
            </p>
          </div>
          
          <Button asChild variant="outline" className="font-minecraft">
            <a href="https://dsc.gg/fruitsnacks" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Suggest Features
            </a>
          </Button>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project) => (
              <ProjectCard 
                key={project.slug}
                title={project.title}
                description={project.description}
                imageUrl={`https://via.placeholder.com/800x400/1a1f2c/ffffff?text=${encodeURIComponent(project.title)}`}
                downloads={project.downloads}
                url={`https://modrinth.com/plugin/${project.slug}`}
              />
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
