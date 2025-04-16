
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  downloads: number;
  url: string;
}

const ProjectCard = ({ title, description, imageUrl, downloads, url }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md">
      <div className="aspect-video w-full bg-muted overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm flex items-center gap-2">
          <Download className="h-4 w-4" />
          <span>{downloads.toLocaleString()} downloads</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="default">
          <a href={url} target="_blank" rel="noopener noreferrer">
            View on Modrinth <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
