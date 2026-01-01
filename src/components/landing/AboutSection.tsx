import { Heart, Eye, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import davidPhoto from "@/assets/david-ayemle.png";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Akzeptanz",
      description: "Ich begegne dir so, wie du bist – als Mensch, mit all deinen Gedanken, Wünschen, deiner Kraft und deinem ganzen Wesen. In meiner Begleitung gibt es kein Richtig oder Falsch.",
    },
    {
      icon: Eye,
      title: "Einfühlendes Verstehen",
      description: "Für mich ist es wichtig, dich wirklich zu verstehen. Ich konzentriere mich auf dich, auf dein Erleben, und möchte die Welt mit deinen Augen sehen.",
    },
    {
      icon: Sparkles,
      title: "Echtheit",
      description: "Ich begegne dir als Klient:in mit meinem ganzen Wesen. Indem ich mich selbst erlebe und zeige, wie ich bin, eröffne ich dir den Raum, auch du selbst zu sein – authentisch.",
    },
  ];

  const experience = [
    "Über 17 Jahre in der Entwicklung und Automobilindustrie",
    "Mehrjährige Erfahrung in Zusammenarbeit und Führung von Agilen Teams",
    "Mehrjährige Erfahrung mit Führungskräfte-Coaching und Mitarbeiterentwicklung",
    "Begleitung von Transformation- und Veränderungsprojekten",
    "Kulturgestaltung, Mindset-Entwicklung",
    "Seit 2025: Zertifizierter Coach für Persönlichkeitsbildung",
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
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
                  Vor vielen Jahren bin ich nach Deutschland gekommen – allein, in eine völlig neue Welt. 
                  Die Sprache, das Klima, die Kultur – alles war fremd. Es war nicht leicht, aber genau 
                  diese Erfahrungen haben mich geprägt.
                </p>
                <p>
                  Ich habe ein Ingenieurstudium abgeschlossen und arbeite heute als Coach und Berater 
                  bei einem großen Automobilzulieferer. Die größten Lektionen meines Lebens kamen jedoch 
                  nicht aus dem Studium oder Beruf, sondern aus persönlichen Momenten.
                </p>
                <p className="text-foreground font-medium border-l-4 border-primary pl-4">
                  Ein Abend im Juni 2018 hat vieles verändert. Dieser Moment war der Wendepunkt. 
                  Seitdem beschäftige ich mich intensiv mit Persönlichkeitsentwicklung – und begleite 
                  heute andere auf ihrem Weg zu mehr Bewusstheit und innerer Stärke.
                </p>
              </div>

              {/* Profile Image for Mobile */}
              <div className="lg:hidden my-8">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-elevated">
                  <img 
                    src={davidPhoto} 
                    alt="David Ayemle" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Experience List */}
              <div className="pt-4">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Erfahrung</h3>
                <ul className="space-y-2">
                  {experience.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Values Grid */}
          <div className="space-y-6">
            {/* Hidden profile for desktop */}
            <div className="hidden lg:block mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-elevated mx-auto lg:mx-0">
                <img 
                  src={davidPhoto} 
                  alt="David Ayemle" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            
            <AnimatedSection animation="fade-up">
              <p className="text-lg text-muted-foreground italic mb-8">
                "Unser Ausgangspunkt ist: Du bist ok. Ich bin ok."
              </p>
            </AnimatedSection>

            {values.map((value, index) => (
              <AnimatedSection key={value.title} animation="fade-up" delay={index * 100}>
                <div className="p-6 rounded-xl bg-background shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
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
