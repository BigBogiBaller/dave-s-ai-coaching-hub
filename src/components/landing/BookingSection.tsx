import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "./AnimatedSection";

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Anfrage gesendet!",
      description: "David wird sich in Kürze bei Ihnen melden.",
    });
  };

  const benefits = [
    "Unverbindliches Kennenlerngespräch",
    "Bedarfsklärung und erste Impulse",
    "Gemeinsame Reise beginnen",
    "Nachhaltige Veränderungen schaffen",
  ];

  return (
    <section id="booking" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <AnimatedSection animation="fade-right">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Jetzt kommt es auf Sie an
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Ihr Kontakt ist der Beginn einer erfolgreichen Reise
              </h2>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ich bin hier, um Sie auf Ihrem Weg zu unterstützen. Gemeinsam lassen wir 
                die Transformation zu und schaffen nachhaltige Veränderungen.
              </p>

              <p className="text-primary font-medium text-xl">
                Ich freue mich auf unsere gemeinsame Reise!
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li 
                    key={benefit} 
                    className="flex items-center gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="pt-8 border-t border-border space-y-4">
                <h3 className="font-semibold text-foreground">Kontaktieren Sie mich direkt:</h3>
                <div className="space-y-3">
                  <a 
                    href="mailto:info@stabil-im-wandel.com" 
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    info@stabil-im-wandel.com
                  </a>
                  <a 
                    href="tel:+4915165248894"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    +49 151 65248894
                  </a>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      Schulstrasse 8/4<br />
                      74363 Güglingen<br />
                      Deutschland
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendly Placeholder */}
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="h-6 w-6 text-primary" />
                  <span className="font-semibold text-foreground">Online-Terminbuchung</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Calendly-Integration wird hier eingebunden, sobald der Link verfügbar ist.
                </p>
                <Button disabled className="w-full">
                  Termin online buchen (bald verfügbar)
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fade-left" delay={200}>
            <div className="p-8 rounded-2xl bg-background shadow-elevated">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Erstgespräch anfragen
              </h3>
              <p className="text-muted-foreground mb-8">
                Füllen Sie das Formular aus – ich melde mich innerhalb von 24 Stunden bei Ihnen.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12 animate-scale-in">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                    Vielen Dank!
                  </h4>
                  <p className="text-muted-foreground">
                    Ihre Anfrage ist eingegangen. David wird sich in Kürze bei Ihnen melden.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      required
                      placeholder="Ihr vollständiger Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-Mail *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="ihre.email@beispiel.de"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefon (optional)
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+49 123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Ihr Anliegen *
                    </label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Beschreiben Sie kurz, wobei ich Sie unterstützen kann..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full py-6 text-lg hover:scale-[1.02] transition-transform duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Wird gesendet..." : "Erstgespräch anfragen"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß 
                    unserer <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> zu.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
