import { Button } from "@/components/ui/button";
import { Briefcase, Users, RefreshCw, Compass, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Führungskräfte-Coaching",
      description: "Individuelle Begleitung für Führungspersönlichkeiten, die ihre Wirksamkeit steigern und authentisch führen wollen.",
      benefits: ["Stärkung der Führungskompetenz", "Klarheit in schwierigen Entscheidungen", "Work-Life-Balance"],
    },
    {
      icon: Users,
      title: "Team-Entwicklung & Supervision",
      description: "Professionelle Begleitung für Teams, die ihre Zusammenarbeit verbessern und gemeinsam wachsen möchten.",
      benefits: ["Verbesserte Kommunikation", "Konfliktlösung", "Gemeinsame Vision entwickeln"],
    },
    {
      icon: RefreshCw,
      title: "Veränderungsbegleitung",
      description: "Unterstützung in Transformationsprozessen – für Organisationen und Einzelpersonen, die Wandel gestalten.",
      benefits: ["Change-Management", "Resilienz aufbauen", "Neue Perspektiven gewinnen"],
    },
    {
      icon: Compass,
      title: "Persönliche Lebensberatung",
      description: "Ganzheitliche Begleitung für Menschen an Wendepunkten ihres Lebens – beruflich wie privat.",
      benefits: ["Standortbestimmung", "Ziele definieren", "Potenziale entfalten"],
    },
  ];

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Meine Leistungen
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professionelle Begleitung für nachhaltige Entwicklung
          </h2>
          <p className="text-muted-foreground text-lg">
            Ob als Führungskraft, im Team oder persönlich – ich unterstütze Sie dabei, 
            Ihre Ziele zu erreichen und Herausforderungen zu meistern.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto text-primary hover:text-primary/80"
                    onClick={scrollToBooking}
                  >
                    Mehr erfahren
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
