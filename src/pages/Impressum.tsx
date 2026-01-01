import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Impressum = () => {
  return (
    <>
      <Helmet>
        <title>Impressum | Stabil im Wandel - David Ayemle</title>
        <meta name="description" content="Impressum und rechtliche Informationen von Stabil im Wandel - David Ayemle, Coaching und Beratung in Baden-Württemberg." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <Link to="/">
              <Button variant="ghost" className="mb-8 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Zurück zur Startseite
              </Button>
            </Link>

            <article className="prose prose-lg max-w-none">
              <h1 className="font-display text-4xl font-bold text-foreground mb-8">
                Impressum
              </h1>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Angaben gemäß § 5 TMG
                </h2>
                <address className="not-italic text-muted-foreground">
                  <p className="mb-2 font-semibold text-foreground">Stabil im Wandel</p>
                  <p className="mb-2">David Ayemle</p>
                  <p className="mb-2">Coaching & Beratung</p>
                  <p className="mb-2">Schulstrasse 8/4</p>
                  <p className="mb-2">74363 Güglingen</p>
                  <p>Deutschland</p>
                </address>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Kontakt
                </h2>
                <div className="text-muted-foreground">
                  <p className="mb-2">Telefon: +49 151 65248894</p>
                  <p className="mb-2">E-Mail: info@stabil-im-wandel.com</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Berufsbezeichnung
                </h2>
                <p className="text-muted-foreground">
                  Zertifizierter Coach für Persönlichkeitsbildung<br />
                  Land der Verleihung: Deutschland
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Umsatzsteuer-ID
                </h2>
                <p className="text-muted-foreground">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                  Kleinunternehmer gemäß § 19 UStG
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <p className="text-muted-foreground">
                  David Ayemle<br />
                  Schulstrasse 8/4<br />
                  74363 Güglingen
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  EU-Streitschlichtung
                </h2>
                <p className="text-muted-foreground">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a 
                    href="https://ec.europa.eu/consumers/odr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline ml-1"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-muted-foreground mt-2">
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Verbraucherstreitbeilegung / Universalschlichtungsstelle
                </h2>
                <p className="text-muted-foreground">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Haftung für Inhalte
                </h2>
                <p className="text-muted-foreground">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                  Tätigkeit hinweisen.
                </p>
                <p className="text-muted-foreground mt-2">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                  allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                  erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                  Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Haftung für Links
                </h2>
                <p className="text-muted-foreground">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                  Seiten verantwortlich.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Urheberrecht
                </h2>
                <p className="text-muted-foreground">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                  Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </section>
            </article>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Impressum;
