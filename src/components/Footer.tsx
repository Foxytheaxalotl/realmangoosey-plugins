
import { Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-card mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-modrinth-purple flex items-center justify-center text-white font-bold text-sm">M</div>
              <h3 className="font-bold text-lg">TheRealMangoosey</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Creating high-quality Minecraft plugins and mods, available for free on Modrinth.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://modrinth.com/user/therealmangoosey" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Modrinth Profile
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/therealmangoosey" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <p className="text-sm text-muted-foreground">
              Developer of free, open-source Minecraft plugins and mods. All projects are available on Modrinth.
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-4 flex flex-col md:flex-row justify-between text-sm text-muted-foreground">
          <p>© {currentYear} TheRealMangoosey. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/therealmangoosey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition flex items-center gap-1"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
