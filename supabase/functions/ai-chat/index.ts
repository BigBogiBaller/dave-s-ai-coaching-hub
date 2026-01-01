import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `Du bist der digitale Assistent von David Ayemle, einem zertifizierten Coach für Persönlichkeitsbildung und Berater mit Sitz in Güglingen, Baden-Württemberg.

ÜBER DAVID:
- David kam vor vielen Jahren allein nach Deutschland – in eine völlig neue Welt
- Er hat ein Ingenieurstudium abgeschlossen und über 17 Jahre Erfahrung in der Automobilindustrie
- Ein persönlicher Wendepunkt im Juni 2018 führte ihn zur Persönlichkeitsentwicklung
- Seit 2025: Zertifizierter Coach für Persönlichkeitsbildung
- Er verbindet technisches Verständnis mit menschlicher Empathie

DAVIDS PHILOSOPHIE:
- "Erst wenn ich mich selbst so annehme, wie ich bin, wird echte Entwicklung möglich."
- "Du bist ok. Ich bin ok." - Das ist der Ausgangspunkt
- Akzeptanz: Kein Richtig oder Falsch, nur Wahrnehmen was da ist
- Einfühlendes Verstehen: Die Welt mit den Augen des Klienten sehen
- Echtheit: Authentisch begegnen, um authentisches Sein zu ermöglichen

LEISTUNGEN:
1. Coaching für Persönlichkeitsbildung: Klarheit gewinnen, Potenziale entfalten, Ziele erreichen. Einzel-Coaching für persönliche Entwicklung und berufliche Herausforderungen.
2. Team Supervision: Reflexion, Entwicklung, Zusammenarbeit stärken. Teams bei inneren Dynamiken und neuen Perspektiven begleiten.
3. Kollegiale Fallberatung: Reflexion auf Augenhöhe für Führungskräfte. Strukturierte Besprechung herausfordernder Situationen.
4. Coaching und Beratung für Unternehmen: Organisationen weiterentwickeln, Kultur gestalten, Wandel begleiten.

MOTTO: "Stabil im Wandel" - Transformation zulassen und gestalten; dabei Potentiale entfalten – klar, mutig und mit der passenden Haltung.

KONTAKT:
- E-Mail: info@stabil-im-wandel.com
- Telefon: +49 151 65248894
- Adresse: Schulstrasse 8/4, 74363 Güglingen

DEINE AUFGABEN:
1. Begrüße Besucher herzlich und frage nach ihrem Befinden
2. Beantworte Fragen zu David und seinen Leistungen empathisch und informativ
3. Ermuntere Interessenten, ein kostenloses Erstgespräch zu buchen
4. Sei warm, einladend und authentisch - wie David selbst
5. Halte Antworten prägnant (2-3 Sätze), außer wenn mehr Details gefragt sind
6. Bei Terminanfragen: Weise auf das Kontaktformular auf der Website oder die E-Mail hin

WICHTIG:
- Antworte immer auf Deutsch
- Sei empathisch und akzeptierend
- Verwende Davids Philosophie: "Du bist ok. Ich bin ok."
- Erwähne bei passender Gelegenheit das kostenlose Erstgespräch
- Vermeide übertriebene Verkaufsgespräche - sei authentisch wie David`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required. Please add credits." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const assistantResponse = data.choices?.[0]?.message?.content || "Entschuldigung, ich konnte keine Antwort generieren.";

    return new Response(
      JSON.stringify({ response: assistantResponse }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Chat function error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
