import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import BookingSection from "@/components/landing/BookingSection";
import Footer from "@/components/landing/Footer";
import VoiceAssistant from "@/components/landing/VoiceAssistant";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Stabil im Wandel | David Ayemle - Coaching & Beratung Baden-Württemberg</title>
        <meta 
          name="description" 
          content="Professionelles Coaching für Führungskräfte und Teams in Baden-Württemberg. David Ayemle begleitet Sie durch Veränderung hin zu Stabilität, Klarheit und Vertrauen." 
        />
        <meta name="keywords" content="Coaching Baden-Württemberg, Führungskräfteentwicklung, Veränderungscoaching, Resilienztraining, Team-Entwicklung, Systemisches Coaching" />
        <link rel="canonical" href="https://stabilimwandel.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Stabil im Wandel | David Ayemle - Coaching & Beratung" />
        <meta property="og:description" content="Professionelles Coaching für Führungskräfte und Teams in Baden-Württemberg." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stabilimwandel.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Stabil im Wandel - David Ayemle",
            "description": "Professionelles Coaching für Führungskräfte und Teams in Baden-Württemberg",
            "url": "https://stabilimwandel.com",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Baden-Württemberg",
              "addressCountry": "DE"
            },
            "priceRange": "$$",
            "areaServed": "Baden-Württemberg",
            "serviceType": ["Führungskräfte-Coaching", "Team-Entwicklung", "Veränderungsbegleitung", "Lebensberatung"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <TestimonialsSection />
          <BookingSection />
        </main>
        <Footer />
        <VoiceAssistant />
      </div>
    </>
  );
};

export default Index;
