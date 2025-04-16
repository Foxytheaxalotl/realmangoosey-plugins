
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="container py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground text-lg mb-8">
          Have questions about my plugins or need support? Feel free to reach out through these channels.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a 
            href="https://github.com/therealmangoosey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-card p-6 rounded-lg border border-border group-hover:border-primary/50 transition-all">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-muted-foreground mb-4">
                Open issues on GitHub for bug reports or feature requests.
              </p>
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                Visit GitHub <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </a>
          
          <a 
            href="https://modrinth.com/user/therealmangoosey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-card p-6 rounded-lg border border-border group-hover:border-primary/50 transition-all">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-modrinth-purple text-white flex items-center justify-center rounded-sm font-bold">M</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Modrinth</h3>
              <p className="text-muted-foreground mb-4">
                Message me on Modrinth for questions about specific plugins.
              </p>
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                Visit Modrinth <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
