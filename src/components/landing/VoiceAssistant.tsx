import { useState, useCallback, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { X, Send, Volume2, VolumeX, Loader2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import chatbotAvatar from "@/assets/chatbot-avatar.png";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const VoiceAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const greetingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-chat`;
  const TTS_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/text-to-speech`;

  // Auto-greeting after 5 seconds
  useEffect(() => {
    if (!hasGreeted) {
      greetingTimeoutRef.current = setTimeout(() => {
        setIsOpen(true);
        setHasGreeted(true);
        setMessages([
          {
            id: "greeting",
            role: "assistant",
            content: "Hallo und herzlich willkommen! 👋\n\nIch bin Davids digitaler Assistent. Wie geht es Ihnen heute? Haben Sie Fragen zu Coaching, Teamentwicklung oder möchten Sie ein kostenloses Erstgespräch vereinbaren?\n\nIch bin hier, um Ihnen zu helfen!",
          },
        ]);
      }, 5000);
    }

    return () => {
      if (greetingTimeoutRef.current) {
        clearTimeout(greetingTimeoutRef.current);
      }
    };
  }, [hasGreeted]);

  // Initialize with greeting when opened manually
  useEffect(() => {
    if (isOpen && messages.length === 0 && !hasGreeted) {
      setHasGreeted(true);
      setMessages([
        {
          id: "greeting",
          role: "assistant",
          content: "Hallo und herzlich willkommen! 👋\n\nIch bin Davids digitaler Assistent. Wie geht es Ihnen heute? Haben Sie Fragen zu Coaching, Teamentwicklung oder möchten Sie ein kostenloses Erstgespräch vereinbaren?\n\nIch bin hier, um Ihnen zu helfen!",
        },
      ]);
    }
  }, [isOpen, messages.length, hasGreeted]);

  const playAudio = async (text: string) => {
    if (!voiceEnabled) return;
    
    try {
      setIsSpeaking(true);
      const response = await fetch(TTS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        console.error("TTS failed:", response.status);
        setIsSpeaking(false);
        return;
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      
      if (audioRef.current) {
        audioRef.current.src = audioUrl;
        audioRef.current.onended = () => {
          setIsSpeaking(false);
          URL.revokeObjectURL(audioUrl);
        };
        await audioRef.current.play();
      }
    } catch (error) {
      console.error("Audio playback error:", error);
      setIsSpeaking(false);
    }
  };

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Chat request failed");
      }

      const data = await response.json();
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      
      // Play audio only if voice is enabled
      if (voiceEnabled) {
        playAudio(data.response);
      }
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Entschuldigung, es gab einen Fehler. Bitte versuchen Sie es erneut oder kontaktieren Sie David direkt unter info@stabil-im-wandel.com",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading, voiceEnabled]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const scrollToBooking = () => {
    setIsOpen(false);
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hidden audio element for TTS playback */}
      <audio ref={audioRef} className="hidden" />

      {/* Chat Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-elevated flex items-center justify-center transition-all duration-300 overflow-hidden ${
          isOpen ? "bg-foreground text-background" : "bg-white border-2 border-primary/30"
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <img 
            src={chatbotAvatar} 
            alt="Chat mit Davids Assistent" 
            className="w-full h-full object-cover"
          />
        )}
      </button>

      {/* Notification dot when not opened */}
      {!isOpen && hasGreeted && messages.length > 0 && (
        <div className="fixed bottom-20 right-6 z-50 animate-bounce">
          <div className="w-3 h-3 rounded-full bg-accent" />
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-card rounded-2xl shadow-elevated border border-border animate-slide-in-right overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <span className="font-display font-bold">DA</span>
                </div>
                <div>
                  <h3 className="font-semibold">Davids Assistent</h3>
                  <p className="text-xs text-primary-foreground/80 flex items-center gap-1">
                    {isSpeaking && <Volume2 className="h-3 w-3 animate-pulse" />}
                    {isSpeaking ? "Spricht..." : "Online"}
                  </p>
                </div>
              </div>
              
              {/* Voice Toggle */}
              <div className="flex items-center gap-2">
                {voiceEnabled ? (
                  <Volume2 className="h-4 w-4" />
                ) : (
                  <VolumeX className="h-4 w-4 opacity-60" />
                )}
                <Switch
                  checked={voiceEnabled}
                  onCheckedChange={setVoiceEnabled}
                  className="data-[state=checked]:bg-primary-foreground/30"
                />
              </div>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="h-[350px] p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary text-secondary-foreground rounded-bl-md"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-secondary text-secondary-foreground p-3 rounded-2xl rounded-bl-md">
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t border-border flex gap-2 overflow-x-auto">
            <button
              onClick={() => sendMessage("Was bietet David an?")}
              className="flex-shrink-0 px-3 py-1.5 text-xs bg-secondary hover:bg-secondary/80 rounded-full transition-colors"
            >
              Leistungen
            </button>
            <button
              onClick={scrollToBooking}
              className="flex-shrink-0 px-3 py-1.5 text-xs bg-accent text-accent-foreground hover:bg-accent/80 rounded-full transition-colors"
            >
              Erstgespräch buchen
            </button>
            <button
              onClick={() => sendMessage("Erzähl mir mehr über David")}
              className="flex-shrink-0 px-3 py-1.5 text-xs bg-secondary hover:bg-secondary/80 rounded-full transition-colors"
            >
              Über David
            </button>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ihre Frage..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
            {voiceEnabled && (
              <p className="text-xs text-muted-foreground mt-2 text-center">
                🔊 Sprachausgabe aktiviert
              </p>
            )}
          </form>
        </div>
      )}
    </>
  );
};

export default VoiceAssistant;
