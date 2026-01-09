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

// In-memory rate limiting (per function instance)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 20; // 20 requests per minute per IP

function getRateLimitKey(req: Request): string {
  // Use client IP or fallback to a generic key
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
  return ip;
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(key);
  
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  
  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  
  entry.count++;
  return false;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

function validateMessages(messages: unknown): Message[] {
  if (!Array.isArray(messages)) {
    throw new Error("Messages must be an array");
  }
  
  if (messages.length === 0) {
    throw new Error("Messages array cannot be empty");
  }
  
  if (messages.length > 50) {
    throw new Error("Too many messages");
  }
  
  return messages.map((msg, index) => {
    if (typeof msg !== "object" || msg === null) {
      throw new Error(`Invalid message at index ${index}`);
    }
    
    const { role, content } = msg as Record<string, unknown>;
    
    if (!role || !["user", "assistant"].includes(role as string)) {
      throw new Error(`Invalid message role at index ${index}`);
    }
    
    if (typeof content !== "string") {
      throw new Error(`Invalid message content at index ${index}`);
    }
    
    // Limit content length to prevent token abuse
    if (content.length > 2000) {
      throw new Error(`Message at index ${index} exceeds maximum length of 2000 characters`);
    }
    
    return { 
      role: role as "user" | "assistant", 
      content: content.trim() 
    };
  });
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const rateLimitKey = getRateLimitKey(req);
    if (isRateLimited(rateLimitKey)) {
      console.warn(`Rate limit exceeded for: ${rateLimitKey}`);
      return new Response(
        JSON.stringify({ error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const body = await req.json();
    
    // Validate and sanitize input messages
    const validatedMessages = validateMessages(body.messages);
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Der Service ist vorübergehend nicht verfügbar." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
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
          ...validatedMessages,
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Der Service ist vorübergehend nicht verfügbar." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      // Log detailed error server-side, return generic message to client
      return new Response(
        JSON.stringify({ error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const assistantResponse = data.choices?.[0]?.message?.content || "Entschuldigung, ich konnte keine Antwort generieren.";

    return new Response(
      JSON.stringify({ response: assistantResponse }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    // Log detailed error server-side
    console.error("Chat function error:", {
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    });
    
    // Return generic message to client
    return new Response(
      JSON.stringify({ error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
