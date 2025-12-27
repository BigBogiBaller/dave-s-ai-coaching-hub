import { Heart, Target, Lightbulb, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Empathie",
      description: "Ich höre zu und verstehe Ihre einzigartige Situation.",
    },
    {
      icon: Target,
      title: "Klarheit",
      description: "Gemeinsam finden wir den Weg durch Komplexität.",
    },
    {
      icon: Lightbulb,
      title: "Nachhaltigkeit",
      description: "Lösungen, die langfristig tragen und wirken.",
    },
    {
      icon: Users,
      title: "Partnerschaft",
      description: "Auf Augenhöhe – Sie sind der Experte für Ihr Leben.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <AnimatedSection animation="fade-right">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Über mich
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Von der Technik zur menschlichen Entwicklung
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mein Weg begann als Ingenieur in der Automobilindustrie. Über 20 Jahre 
                  lang habe ich bei führenden Unternehmen wie Bosch komplexe technische 
                  Herausforderungen gemeistert und Teams durch Veränderungsprozesse geführt.
                </p>
                <p>
                  In dieser Zeit habe ich erkannt: <span className="text-foreground font-medium">
                  Der entscheidende Faktor für Erfolg ist nicht die Technik – es sind die Menschen.</span> 
                  Ihre Fähigkeit, mit Wandel umzugehen, klare Entscheidungen zu treffen und 
                  authentisch zu führen.
                </p>
                <p>
                  Heute verbinde ich meine jahrelange Führungserfahrung mit einer zertifizierten 
                  Ausbildung zum systemischen Coach. Ich begleite Führungskräfte und Teams dabei, 
                  in Zeiten des Wandels nicht nur zu bestehen, sondern zu wachsen.
                </p>
              </div>

              {/* Timeline */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex-1 h-px bg-border" />
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <span className="block font-display text-2xl font-bold text-primary">2000</span>
                    <span className="text-muted-foreground">Start bei Bosch</span>
                  </div>
                  <div className="w-8 h-px bg-primary" />
                  <div className="text-center">
                    <span className="block font-display text-2xl font-bold text-primary">2020</span>
                    <span className="text-muted-foreground">Coaching-Start</span>
                  </div>
                  <div className="w-8 h-px bg-primary" />
                  <div className="text-center">
                    <span className="block font-display text-2xl font-bold text-primary">2024</span>
                    <span className="text-muted-foreground">Zertifizierung</span>
                  </div>
                </div>
                <div className="flex-1 h-px bg-border" />
              </div>
            </div>
          </AnimatedSection>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} animation="fade-up" delay={index * 100}>
                <div className="p-6 rounded-xl bg-background shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
