
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-card mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-modrinth-green flex items-center justify-center text-white font-bold text-sm">M</div>
              <h3 className="font-bold text-lg">TheRealMangoosey</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Creating high-quality Paper MC plugins, available on Modrinth.
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
                  href="https://dsc.gg/fruitsnacks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Discord Server
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
