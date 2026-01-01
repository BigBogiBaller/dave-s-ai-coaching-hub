import { Button } from "@/components/ui/button";
import { User, Users, UsersRound, Building2, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ServicesSection = () => {
  const services = [
    {
      icon: User,
      title: "Coaching für Persönlichkeitsbildung",
      tagline: "Klarheit gewinnen. Potenziale entfalten. Ziele erreichen.",
      description: "Das Paradoxon der Veränderung lautet: Erst wenn wir uns selbst annehmen, wie wir sind, können wir uns weiterentwickeln. Genau hier setze ich an – mit Empathie, Akzeptanz und echtem Einfühlungsvermögen begleite ich dich auf deinem Weg.",
      details: "Im Einzel-Coaching entsteht ein geschützter Raum, in dem du dich selbst besser verstehen, innere Blockaden lösen und deine eigene innere Stärke entfalten kannst. Ob es um persönliche Entwicklung, berufliche Herausforderungen oder wichtige Entscheidungen geht – ich unterstütze dich dabei, Veränderungen nicht als Hindernis, sondern als Chance zu sehen.",
      benefits: ["Mehr Klarheit", "Mehr Stabilität", "Mehr Vertrauen in die eigenen Fähigkeiten"],
    },
    {
      icon: Users,
      title: "Team Supervision",
      tagline: "Reflexion. Entwicklung. Zusammenarbeit stärken.",
      description: "In der Team-Supervision begleite ich Teams dabei, ihre Zusammenarbeit zu reflektieren, innere Dynamiken sichtbar zu machen und neue Perspektiven im Umgang mit Herausforderungen zu entwickeln.",
      details: "Dabei entsteht ein Raum, in dem Offenheit und Vertrauen wachsen dürfen – Grundvoraussetzungen für Veränderung und gemeinsame Entwicklung. Ich unterstütze Teams darin, eigene Muster zu erkennen, Stärken zu würdigen und Blockaden zu lösen.",
      benefits: ["Konstruktive Teamkultur", "Wachstum und Klarheit", "Flexibel und gestärkt"],
    },
    {
      icon: UsersRound,
      title: "Kollegiale Fallberatung",
      tagline: "Reflexion auf Augenhöhe. Souverän führen. Gemeinsam wachsen.",
      description: "Führung bedeutet, Entscheidungen unter Unsicherheit zu treffen, Konflikte zu navigieren und den Blick für das Wesentliche zu behalten – oft unter großem Druck und mit wenig Raum zur eigenen Reflexion.",
      details: "Ich begleite Gruppen von Führungskräften dabei, diesen Prozess professionell zu gestalten: mit klaren Rollen, methodischer Sicherheit und einer Atmosphäre, in der Vertrauen, Offenheit und gegenseitige Unterstützung wachsen können.",
      benefits: ["Mehr Klarheit", "Mehr Sicherheit im Handeln", "Mehr Verbindung zu den eigenen Stärken"],
    },
    {
      icon: Building2,
      title: "Coaching und Beratung für Unternehmen",
      tagline: "Organisationen weiterentwickeln. Kultur gestalten. Wandel begleiten.",
      description: "In einer Welt, die sich rasant verändert, sind Stabilität und Anpassungsfähigkeit kein Widerspruch – sie bilden die Grundlage für langfristigen Erfolg. Unternehmen, die bereit sind, sich kontinuierlich weiterzuentwickeln, bleiben konkurrenzfähig, innovativ und widerstandsfähig.",
      details: "Ich begleite Organisationen dabei, die nötigen Kompetenzen zu entwickeln, um Veränderung nicht als Störung, sondern als Gestaltungsraum zu begreifen. Durch eine wertschätzende, personenzentrierte Herangehensweise unterstütze ich Teams und Führungskräfte darin, innere Widerstände abzubauen und Klarheit in komplexen Situationen zu gewinnen.",
      benefits: ["Offenheit und Eigenverantwortung", "Nachhaltiges Wachstum", "Bewusste Wandelgestaltung"],
    },
  ];

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Meine Leistungen
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Widerstandsfähig – innovativ – erfolgreich
          </h2>
          <p className="text-muted-foreground text-lg">
            Ich begleite Organisationen dabei, Stabilität und Anpassungsfähigkeit zu vereinen – 
            für nachhaltigen Erfolg. Gemeinsam schaffen wir eine Kultur, in der Wandel bewusst 
            gestaltet und Chancen aktiv genutzt werden.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} animation="fade-up" delay={index * 100}>
              <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-start gap-6 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {service.title}
                    </h3>
                    <p className="text-primary font-medium text-sm">
                      {service.tagline}
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {service.details}
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
                  className="group/btn p-0 h-auto text-primary hover:text-primary/80 self-start"
                  onClick={scrollToBooking}
                >
                  Erstgespräch vereinbaren
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
