import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin, Video, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const eventTypes = [
    { icon: Users, label: "In-Person Meeting", color: "bg-event-purple" },
    { icon: Video, label: "Group Meeting", color: "bg-event-blue" },
    { icon: MapPin, label: "Onsite Meeting", color: "bg-event-green" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Event Management" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <Badge variant="secondary" className="w-fit">
              <Calendar className="h-4 w-4 mr-2" />
              Event Management Made Simple
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary to-event-blue bg-clip-text text-transparent">
                  Organize Events
                </span>
                <br />
                <span className="text-foreground">Like Never Before</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Create, manage, and organize three types of events seamlessly. 
                Integrate with Google Meet, Zoom, WhatsApp, and more platforms 
                for the ultimate event experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                Get Started Free
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="glass" size="xl">
                Watch Demo
              </Button>
            </div>

            {/* Event Types */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {eventTypes.map((type, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                  <div className={`p-2 rounded-lg ${type.color}/20`}>
                    <type.icon className={`h-5 w-5 text-white`} />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {type.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Events Created</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-event-blue mb-2">10k+</div>
              <div className="text-muted-foreground">Happy Users</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-event-green mb-2">99%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-event-orange mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;