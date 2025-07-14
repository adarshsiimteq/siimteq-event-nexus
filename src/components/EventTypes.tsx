import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Video, 
  MapPin, 
  Calendar, 
  Clock,
  Zap,
  Globe,
  MessageSquare,
  Phone
} from "lucide-react";

const EventTypes = () => {
  const eventCategories = [
    {
      id: "in-person",
      title: "In-Person Meeting",
      description: "Face-to-face meetings with location mapping and address management",
      icon: Users,
      color: "event-purple",
      features: [
        "Google Maps Integration",
        "Address Management", 
        "Venue Booking",
        "Attendee Check-in",
        "Real-time Location Sharing"
      ],
      integrations: ["Google Maps", "WhatsApp Location", "Calendar"],
      popular: true
    },
    {
      id: "group",
      title: "Group Meeting", 
      description: "Virtual group meetings with multiple platform integrations",
      icon: Video,
      color: "event-blue",
      features: [
        "Multi-platform Support",
        "Screen Sharing",
        "Recording Options",
        "Chat Integration",
        "Breakout Rooms"
      ],
      integrations: ["Google Meet", "Zoom", "Teams", "WhatsApp", "Facebook"],
      popular: false
    },
    {
      id: "onsite",
      title: "Onsite Meeting",
      description: "Professional onsite meetings with advanced scheduling",
      icon: MapPin,
      color: "event-green", 
      features: [
        "Site Management",
        "Equipment Booking",
        "Staff Coordination",
        "Access Control",
        "Resource Planning"
      ],
      integrations: ["Calendar", "Teams", "WhatsApp", "Email"],
      popular: false
    }
  ];

  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Zap className="h-4 w-4 mr-2" />
            Event Types
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-event-blue bg-clip-text text-transparent">
              Three Ways to Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from three different event types, each designed for specific needs 
            with powerful integrations and seamless booking management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {eventCategories.map((category) => (
            <Card key={category.id} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-border/50">
              {category.popular && (
                <Badge className="absolute top-4 right-4 bg-event-orange text-white">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-${category.color}/20 flex items-center justify-center mb-4`}>
                  <category.icon className={`h-6 w-6 text-${category.color}`} />
                </div>
                <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {category.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {category.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    Integrations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.integrations.map((integration, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {integration}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  variant={category.popular ? "hero" : "outline"} 
                  className="w-full"
                >
                  Create {category.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            <MessageSquare className="h-4 w-4 mr-2" />
            Start Creating Events Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventTypes;