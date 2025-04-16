
interface ModrinthProject {
  downloads: number;
  title: string;
  description: string;
  slug: string;
}

export const fetchModrinthUserProjects = async (username: string): Promise<ModrinthProject[]> => {
  try {
    const response = await fetch(`https://api.modrinth.com/v2/user/${username}/projects`);
    if (!response.ok) throw new Error('Failed to fetch projects');
    const data = await response.json();
    
    return data.map((project: any) => ({
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
