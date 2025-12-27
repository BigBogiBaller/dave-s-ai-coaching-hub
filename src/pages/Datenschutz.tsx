import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Datenschutz = () => {
  return (
    <>
      <Helmet>
        <title>Datenschutzerklärung | Stabil im Wandel - David Ayemle</title>
        <meta name="description" content="Datenschutzerklärung von Stabil im Wandel - David Ayemle. Informationen zur Erhebung und Verarbeitung personenbezogener Daten." />
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
                Datenschutzerklärung
              </h1>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  1. Datenschutz auf einen Blick
                </h2>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Allgemeine Hinweise
                </h3>
                <p className="text-muted-foreground">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  2. Verantwortliche Stelle
                </h2>
                <p className="text-muted-foreground">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <address className="not-italic text-muted-foreground mt-4">
                  <p className="mb-2">David Ayemle</p>
                  <p className="mb-2">Stabil im Wandel – Coaching & Beratung</p>
                  <p className="mb-2">[Adresse]</p>
                  <p className="mb-2">E-Mail: kontakt@stabilimwandel.com</p>
                </address>
                <p className="text-muted-foreground mt-4">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder 
                  gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen 
                  Daten entscheidet.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  3. Datenerfassung auf dieser Website
                </h2>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Kontaktformular
                </h3>
                <p className="text-muted-foreground">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                  der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                  wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="text-muted-foreground mt-2">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                  sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                  vorvertraglicher Maßnahmen erforderlich ist.
                </p>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">
                  KI-Sprachassistent
                </h3>
                <p className="text-muted-foreground">
                  Auf unserer Website verwenden wir einen KI-gestützten Sprachassistenten. Die Nutzung 
                  ist freiwillig. Bei der Nutzung werden:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mt-2">
                  <li>Ihre Texteingaben an unseren Server übermittelt</li>
                  <li>Audiodaten bei Sprachausgabe generiert</li>
                  <li>Keine dauerhaften Aufzeichnungen Ihrer Gespräche gespeichert</li>
                </ul>
                <p className="text-muted-foreground mt-2">
                  Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  4. Ihre Rechte
                </h2>
                <p className="text-muted-foreground">
                  Sie haben jederzeit das Recht:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mt-2">
                  <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
                  <li>die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
                  <li>die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
                  <li>die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
                  <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
                  <li>der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
                  <li>eine erteilte Einwilligung zu widerrufen (Art. 7 Abs. 3 DSGVO)</li>
                  <li>sich bei einer Aufsichtsbehörde zu beschweren (Art. 77 DSGVO)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  5. Hosting
                </h2>
                <p className="text-muted-foreground">
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website 
                  erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich 
                  v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, 
                  Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert 
                  werden, handeln.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  6. SSL- bzw. TLS-Verschlüsselung
                </h2>
                <p className="text-muted-foreground">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher 
                  Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber 
                  senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie 
                  daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an 
                  dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  7. Cookies
                </h2>
                <p className="text-muted-foreground">
                  Diese Website verwendet technisch notwendige Cookies, die für den Betrieb der Website 
                  erforderlich sind. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von 
                  Cookies informiert werden und Cookies nur im Einzelfall erlauben.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  8. Änderungen der Datenschutzerklärung
                </h2>
                <p className="text-muted-foreground">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
                  aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen 
                  in der Datenschutzerklärung umzusetzen.
                </p>
              </section>

              <section>
                <p className="text-muted-foreground text-sm">
                  Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
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

export default Datenschutz;
