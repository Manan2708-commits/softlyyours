import { useState, useEffect } from "react";
import { Heart, Sparkles, Mail, MessageCircle } from "lucide-react";

const FinalSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
    setTimeout(() => setShowButton(true), 2000);
    setTimeout(() => setShowConfetti(true), 500);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Confetti-like particles */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${8 + i * 8}%`,
                top: "-10px",
                width: `${6 + (i % 3) * 3}px`,
                height: `${6 + (i % 3) * 3}px`,
                background: [
                  "hsl(340, 60%, 75%)",
                  "hsl(270, 45%, 80%)",
                  "hsl(40, 70%, 80%)",
                  "hsl(20, 70%, 85%)",
                ][i % 4],
                animation: `confetti-fall ${8 + (i % 5) * 2}s linear infinite`,
                animationDelay: `${i * 0.5}s`,
                opacity: 0.6,
              }}
            />
          ))}
        </div>
      )}

      <div className="absolute top-20 left-1/3 w-64 h-64 rounded-full bg-rose-light/30 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-1/3 w-48 h-48 rounded-full bg-lavender/25 blur-3xl animate-pulse-glow delay-1000" />

      <div className="max-w-lg w-full text-center relative z-10 pt-16">
        {showContent && (
          <>
            <div className="animate-bounce-in mb-8">
              <div className="inline-flex p-5 rounded-full bg-gradient-to-br from-rose/20 to-lavender/20 glow-rose">
                <Heart className="w-10 h-10 text-rose animate-heartbeat" />
              </div>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-light leading-relaxed mb-3 animate-fade-up delay-300">
              I don't expect anything from you.
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl font-light leading-relaxed mb-10 animate-fade-up delay-500">
              I just wanted to say <span className="text-gradient font-medium">I'm sorry.</span>
            </h2>

            <p className="text-muted-foreground font-light mb-14 leading-relaxed animate-fade-up delay-700 text-sm max-w-sm mx-auto">
              If you ever feel like talking, I'll be here. No rush. No pressure.
              Just an open door, whenever — if ever — you're ready.
            </p>
          </>
        )}

        {showButton && (
          <div className="space-y-4 animate-bounce-in">
            <a
              href="mailto:"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-rose/15 via-lavender/15 to-peach/15 border border-rose/25 text-foreground font-light text-sm tracking-wider hover:from-rose/25 hover:via-lavender/25 hover:to-peach/25 transition-all duration-700 glow-rose"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              No pressure. Just a chance to reconnect.
              <Heart className="w-4 h-4 text-rose" />
            </a>

            <div className="flex items-center justify-center gap-3 pt-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose/20" />
              <p className="text-muted-foreground/40 text-xs font-light italic font-serif">
                With all my heart — and all the words I should've said sooner
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose/20" />
            </div>

            <div className="pt-6">
              <p className="text-muted-foreground/30 text-xs animate-fade-in delay-2000">
                Thank you for reading all of this. It means everything. 💛
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinalSection;
