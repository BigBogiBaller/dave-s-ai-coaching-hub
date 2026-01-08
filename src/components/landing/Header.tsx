import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Stabil im Wandel" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Über mich
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Leistungen
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Referenzen
            </button>
            <Button 
              onClick={() => scrollToSection("booking")}
              className="bg-primary hover:bg-primary/90"
            >
              Erstgespräch buchen
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4 animate-fade-in">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Über mich
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Leistungen
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Referenzen
            </button>
            <Button 
              onClick={() => scrollToSection("booking")}
              className="bg-primary hover:bg-primary/90 w-full"
            >
              Erstgespräch buchen
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
