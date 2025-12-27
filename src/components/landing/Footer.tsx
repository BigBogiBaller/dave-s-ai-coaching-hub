import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                <span className="font-display font-bold text-lg text-foreground">S</span>
              </div>
              <span className="font-display text-xl font-semibold">
                Stabil im Wandel
              </span>
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              Professionelles Coaching und Beratung für Führungskräfte und Teams 
              in Baden-Württemberg. Gemeinsam gestalten wir nachhaltige Veränderung.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/david-ayemle-876259180/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:kontakt@stabilimwandel.com"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <a href="#about" className="hover:text-background transition-colors">Über mich</a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">Leistungen</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-background transition-colors">Referenzen</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-background transition-colors">Kontakt</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:kontakt@stabilimwandel.com" className="hover:text-background transition-colors">
                  kontakt@stabilimwandel.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Nach Vereinbarung</span>
              </li>
              <li>
                Baden-Württemberg, Deutschland
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>© {currentYear} Stabil im Wandel - David Ayemle. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Impressum</a>
            <a href="#" className="hover:text-background transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
