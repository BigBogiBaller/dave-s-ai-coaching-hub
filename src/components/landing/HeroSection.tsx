import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import davidPhoto from "@/assets/david-ayemle.png";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div 
            className={`space-y-8 transition-all duration-1000 ease-out ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
              Stabil im Wandel
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Transformation zulassen und <span className="text-primary">gestalten</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Potentiale entfalten – klar, mutig und mit der passenden Haltung. 
              Ich begleite Menschen hin zu innerer Stärke, Klarheit und einem 
              bewussten, vertrauensvollen Umgang mit dem Wandel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToBooking}
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 shadow-elevated hover:scale-105 transition-transform duration-300"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Kostenloses Erstgespräch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
              >
                Mehr erfahren
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground text-2xl">17+</span>
                <span>Jahre<br/>Erfahrung</span>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground text-2xl">2025</span>
                <span>Zertifizierter<br/>Coach</span>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="flex items-center gap-2 hidden sm:flex">
                <span className="font-semibold text-foreground text-2xl">100%</span>
                <span>Persönlicher<br/>Ansatz</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div 
            className={`relative transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated hover:shadow-2xl transition-shadow duration-500">
              <img 
                src={davidPhoto} 
                alt="David Ayemle - Coach und Berater" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-elevated animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Zertifiziert</p>
                  <p className="text-sm text-muted-foreground">Coach für Persönlichkeitsbildung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
