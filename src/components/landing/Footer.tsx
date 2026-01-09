import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Stabil im Wandel" className="h-12 w-auto" />
            </div>
            <p className="text-background/70 mb-2 font-semibold">
              David Ayemle
            </p>
            <p className="text-background/70 mb-6 max-w-md">
              Coaching & Beratung für Führungskräfte und Teams. 
              Transformation zulassen und gestalten – dabei Potentiale entfalten.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/david-ayemle-876259180/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profil"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@stabil-im-wandel.com"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="E-Mail senden"
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
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@stabil-im-wandel.com" className="hover:text-background transition-colors">
                  info@stabil-im-wandel.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+4915165248894" className="hover:text-background transition-colors">
                  +49 151 65248894
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>
                  Schulstrasse 8/4<br />
                  74363 Güglingen
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>© {currentYear} Stabil im Wandel - David Ayemle. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="/impressum" className="hover:text-background transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-background transition-colors">Datenschutz</a>
          </div>
        </div>

        {/* Made By */}
        <div className="mt-6 text-center text-sm text-background/50">
          <span>Made By </span>
          <a 
            href="https://bogdanlekic.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold hover:text-background transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-background after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Bogi
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
