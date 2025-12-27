import { Quote, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Schmidt",
      role: "Abteilungsleiterin, Automobilindustrie",
      content: "David hat mir geholfen, in einer sehr herausfordernden Umstrukturierung die Ruhe zu bewahren und mein Team sicher durch den Wandel zu führen. Seine Kombination aus technischem Verständnis und menschlicher Empathie ist einzigartig.",
      rating: 5,
    },
    {
      name: "Thomas Weber",
      role: "Geschäftsführer, Mittelständisches Unternehmen",
      content: "Die Zusammenarbeit mit David war ein Wendepunkt für mich. Er hat mir gezeigt, wie ich authentisch führen kann, ohne mich selbst zu verlieren. Die Gespräche waren immer auf Augenhöhe.",
      rating: 5,
    },
    {
      name: "Dr. Sandra Müller",
      role: "Teamleiterin, IT-Unternehmen",
      content: "Nach 6 Monaten Coaching fühle ich mich in meiner Führungsrolle endlich sicher. David versteht die Herausforderungen der Tech-Branche und bringt wertvolle Perspektiven ein.",
      rating: 5,
    },
  ];

  const stats = [
    { value: "50+", label: "Zufriedene Klienten" },
    { value: "95%", label: "Weiterempfehlung" },
    { value: "200+", label: "Coaching-Sessions" },
    { value: "5/5", label: "Durchschnittsbewertung" },
  ];

  return (
    <section id="testimonials" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Das sagen meine Klienten
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Echte Geschichten, echte Veränderung
          </h2>
          <p className="text-muted-foreground text-lg">
            Vertrauen entsteht durch Erfahrung. Lesen Sie, was Menschen sagen, 
            die den Weg des Wandels bereits gegangen sind.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} animation="fade-up" delay={index * 150}>
              <div className="p-8 rounded-2xl bg-card shadow-soft hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 h-full">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-display font-semibold text-primary">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} animation="scale" delay={index * 100 + 300}>
              <div className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Company Logos Placeholder */}
        <AnimatedSection animation="fade-up" delay={500}>
          <div className="mt-16 pt-16 border-t border-border">
            <p className="text-center text-muted-foreground mb-8">
              Erfahrung aus führenden Unternehmen
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {["Bosch", "Mercedes-Benz", "SAP", "Siemens"].map((company, index) => (
                <div 
                  key={company}
                  className="px-6 py-3 rounded-lg bg-muted text-muted-foreground font-semibold opacity-60 hover:opacity-100 transition-opacity duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
