
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode based on local storage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || 
        (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleDarkMode}
            className="text-foreground/80 hover:text-foreground hover:bg-muted transition mr-2"
            aria-label="Toggle dark mode"
          >
            <div className="relative w-5 h-5">
              <Sun className={`h-5 w-5 absolute transition-all duration-300 ${isDarkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
              <Moon className={`h-5 w-5 absolute transition-all duration-300 ${isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`} />
            </div>
          </Button>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-md bg-modrinth-green flex items-center justify-center text-white font-bold text-lg">M</div>
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
        </div>

        <div className="md:hidden flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:bg-muted"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
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
          <div 
            className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition cursor-pointer"
            onClick={() => {
              toggleDarkMode();
              setIsMenuOpen(false);
            }}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
