
interface ModrinthProject {
  downloads: number;
  title: string;
  description: string;
  slug: string;
}

interface ModrinthUserStats {
  totalDownloads: number;
  mostPopular: ModrinthProject | null;
}

export const fetchModrinthStats = async (username: string): Promise<ModrinthUserStats> => {
  try {
    const response = await fetch(`https://api.modrinth.com/v2/user/${username}/projects`);
    if (!response.ok) throw new Error('Failed to fetch projects');
    const projects = await response.json();
    
    let totalDownloads = 0;
    let mostPopular: ModrinthProject | null = null;
    
    const formattedProjects = projects.map((project: any) => {
      const downloads = project.downloads || 0;
      totalDownloads += downloads;
      
      const formattedProject = {
        downloads,
        title: project.title,
        description: project.description,
        slug: project.slug
      };
      
      if (!mostPopular || downloads > mostPopular.downloads) {
        mostPopular = formattedProject;
      }
      
      return formattedProject;
    });
    
    return {
      totalDownloads,
      mostPopular
    };
  } catch (error) {
    console.error('Error fetching Modrinth stats:', error);
    return {
      totalDownloads: 0,
      mostPopular: null
    };
  }
};

// Add the missing fetchModrinthUserProjects function
export const fetchModrinthUserProjects = async (username: string): Promise<ModrinthProject[]> => {
  try {
    const response = await fetch(`https://api.modrinth.com/v2/user/${username}/projects`);
    if (!response.ok) throw new Error('Failed to fetch projects');
    const projects = await response.json();
    
    return projects.map((project: any) => ({
      downloads: project.downloads || 0,
      title: project.title,
      description: project.description,
      slug: project.slug
    }));
  } catch (error) {
    console.error('Error fetching Modrinth projects:', error);
    return [];
  }
};
