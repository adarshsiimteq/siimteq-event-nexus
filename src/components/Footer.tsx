import { Calendar, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-event-blue bg-clip-text text-transparent">
                Siimteq Event
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Modern event management platform for creating, organizing, and managing 
              events with powerful integrations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#events" className="text-muted-foreground hover:text-primary transition-colors">Event Types</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Event Types */}
          <div>
            <h4 className="font-semibold mb-4">Event Types</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground">In-Person Meeting</span></li>
              <li><span className="text-muted-foreground">Group Meeting</span></li>
              <li><span className="text-muted-foreground">Onsite Meeting</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@siimteq.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Siimteq Event. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;