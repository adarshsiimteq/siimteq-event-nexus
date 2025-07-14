import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventTypes from "@/components/EventTypes";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <EventTypes />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
