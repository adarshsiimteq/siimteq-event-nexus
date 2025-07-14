import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone,
  Shield,
  Zap,
  BarChart3,
  Clock,
  Users,
  MapPin,
  Video,
  MessageSquare,
  Calendar,
  Bell,
  Download
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "Multi-layer security with Supabase and Clerk integration",
      color: "event-purple"
    },
    {
      icon: Video,
      title: "Platform Integration", 
      description: "Google Meet, Zoom, Teams, WhatsApp, Facebook support",
      color: "event-blue"
    },
    {
      icon: MapPin,
      title: "Location Services",
      description: "Interactive maps, address management, and venue booking",
      color: "event-green"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered scheduling with conflict detection",
      color: "event-orange"
    },
    {
      icon: Bell,
      title: "Real-time Notifications",
      description: "Instant updates via email, SMS, and push notifications",
      color: "event-purple"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Detailed insights on event performance and attendance",
      color: "event-blue"
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Seamless experience across all devices and platforms",
      color: "event-green"
    },
    {
      icon: Download,
      title: "Export & Backup",
      description: "Export event data and automated backups",
      color: "event-orange"
    }
  ];

  const integrationLogos = [
    "Google Meet", "Zoom", "Microsoft Teams", "WhatsApp", 
    "Facebook", "Google Maps", "Calendar", "Slack"
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Zap className="h-4 w-4 mr-2" />
            Features
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Powerful Features for</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-event-blue bg-clip-text text-transparent">
              Modern Event Management
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create, manage, and execute successful events 
            with seamless integrations and advanced functionality.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-${feature.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                </div>
                <CardTitle className="text-lg font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Section */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-event-blue bg-clip-text text-transparent">
                Seamless Integrations
              </span>
            </h3>
            <p className="text-muted-foreground">
              Connect with your favorite platforms and tools for the ultimate event experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrationLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <span className="font-medium text-sm text-foreground">{logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <div className="text-muted-foreground">Platform Integrations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-event-blue mb-2">3</div>
            <div className="text-muted-foreground">Event Types</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-event-green mb-2">100%</div>
            <div className="text-muted-foreground">Mobile Responsive</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-event-orange mb-2">Real-time</div>
            <div className="text-muted-foreground">Sync & Updates</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;