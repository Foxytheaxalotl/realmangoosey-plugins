
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, Github, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-md bg-modrinth-purple flex items-center justify-center text-white font-bold text-lg">M</div>
            <span className="font-bold text-xl hidden sm:block">TheRealMangoosey</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition">Home</Link>
          <Link to="/projects" className="text-foreground/80 hover:text-foreground transition">Projects</Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition">About</Link>
          <a 
            href="https://modrinth.com/user/therealmangoosey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-foreground transition flex items-center gap-1"
          >
            <span>Modrinth</span>
          </a>
          <a 
            href="https://github.com/therealmangoosey" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 flex flex-col gap-4 animate-fade-in">
          <Link 
            to="/" 
            className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            to="/about" 
            className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <a 
            href="https://modrinth.com/user/therealmangoosey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Modrinth
          </a>
          <a 
            href="https://github.com/therealmangoosey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition"
            onClick={() => setIsMenuOpen(false)}
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
