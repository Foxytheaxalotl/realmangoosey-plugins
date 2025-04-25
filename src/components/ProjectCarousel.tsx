
import { useQuery } from '@tanstack/react-query';
import { fetchModrinthUserProjects } from "@/utils/modrinth";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard";

const ProjectCarousel = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['modrinth-projects'],
    queryFn: () => fetchModrinthUserProjects('therealmangoosey'),
  });

  if (isLoading) {
    return (
      <div className="container px-4 py-12 text-center animate-pulse">
        <p className="font-minecraft text-modrinth-green">Loading plugins...</p>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-modrinth-deepGreen/5">
      <div className="container px-4 sm:px-6">
        <h2 className="font-minecraft text-2xl md:text-3xl text-center mb-8 text-modrinth-green">
          All Plugins
        </h2>
        
        <div className="relative">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects?.map((project) => (
                <CarouselItem key={project.slug} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    downloads={project.downloads}
                    imageUrl="/placeholder.svg"
                    url={`https://modrinth.com/plugin/${project.slug}`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-0" />
            <CarouselNext className="hidden md:flex right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
