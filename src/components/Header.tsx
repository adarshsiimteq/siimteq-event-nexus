import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, LogIn, UserPlus } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Calendar className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-event-blue bg-clip-text text-transparent">
            Siimteq Event
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#events" className="text-foreground hover:text-primary transition-colors">
            Events
          </a>
          <a href="#features" className="text-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm">
            <LogIn className="h-4 w-4 mr-1" />
            Login
          </Button>
          <Button variant="hero" size="sm">
            <UserPlus className="h-4 w-4 mr-1" />
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;