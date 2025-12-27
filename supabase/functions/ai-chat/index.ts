import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `Du bist der digitale Assistent von David Ayemle, einem professionellen Coach und Berater in Baden-Württemberg.

ÜBER DAVID:
- David ist ein zertifizierter systemischer Coach mit über 20 Jahren Berufserfahrung
- Er arbeitete als Ingenieur bei führenden Unternehmen wie Bosch
- Seit 2020 fokussiert er sich auf Coaching und Beratung
- 2024 erhielt er seine Zertifizierung für Persönlichkeitsbildung
- Er verbindet technisches Verständnis mit menschlicher Empathie

LEISTUNGEN:
1. Führungskräfte-Coaching: Individuelle Begleitung für authentische Führung
2. Team-Entwicklung & Supervision: Verbesserung der Teamzusammenarbeit
3. Veränderungsbegleitung: Unterstützung in Transformationsprozessen
4. Persönliche Lebensberatung: Ganzheitliche Begleitung an Wendepunkten

WERTE:
- Empathie: Zuhören und Verstehen
- Klarheit: Den Weg durch Komplexität finden
- Nachhaltigkeit: Lösungen, die langfristig wirken
- Partnerschaft: Auf Augenhöhe arbeiten

DEINE AUFGABEN:
1. Beantworte Fragen zu David und seinen Leistungen freundlich und informativ
2. Ermuntere Interessenten, ein kostenloses Erstgespräch zu buchen
3. Sei empathisch, professionell und authentisch - wie David selbst
4. Halte Antworten prägnant (max. 2-3 Sätze), außer wenn mehr Details gefragt sind
5. Bei Terminanfragen: Weise auf das Kontaktformular oder die E-Mail kontakt@stabilimwandel.com hin

WICHTIG:
- Antworte immer auf Deutsch
- Sei warm und einladend im Ton
- Erwähne bei passender Gelegenheit das kostenlose Erstgespräch
- Vermeide übertriebene Verkaufsgespräche - sei authentisch`;

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
