import { useState, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";

interface FinalSectionProps {
  onNote: () => void;
}

const FinalSection = ({ onNote }: FinalSectionProps) => {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
    setTimeout(() => setShowButton(true), 2000);
    setTimeout(() => setShowConfetti(true), 500);
    setTimeout(() => setShowPopup(true), 5000);
  }, []);

  useEffect(() => {
    if (!showPopup) return;
    if (countdown === 0) return;
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [showPopup, countdown]);

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
              No pressure at all…
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl font-light leading-relaxed mb-10 animate-fade-up delay-500">
              just a quiet attempt to say  <span className="text-gradient font-medium">I’m really sorry.</span>
            </h2>

            <p className="text-muted-foreground font-light mb-14 leading-relaxed animate-fade-up delay-700 text-sm max-w-sm mx-auto">
              If you ever feel like talking, I'll be here. No rush. No pressure.
              Just an open door, whenever — if ever — you're ready.
            </p>
          </>
        )}

        {showButton && (
          <div className="space-y-4 animate-fade-up">
            <button
              onClick={onNote}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-rose/15 via-lavender/15 to-peach/15 border border-rose/25 text-foreground font-light text-sm tracking-wider hover:from-rose/25 hover:via-lavender/25 hover:to-peach/25 transition-all duration-700 glow-rose"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              Something I owe you.
              <Heart className="w-4 h-4 text-rose" />
            </button>

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

      {/* Popup after 5s */}
      {showPopup && (
        <div className="absolute inset-0 z-50 flex items-center justify-center px-6 animate-fade-up bg-background/60 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-card border border-rose/40 rounded-3xl p-8 shadow-2xl glow-rose text-center">
            <div className="text-4xl mb-4">💌</div>
            <p className="font-serif text-xl text-foreground font-light mb-2">
              There's one last thing…
            </p>
            <p className="text-muted-foreground text-sm font-light mb-8 leading-relaxed">
              Something I've been wanting to say for a while.
            </p>
            <button
              onClick={onNote}
              className="w-full py-4 rounded-full bg-gradient-to-r from-rose/40 via-lavender/40 to-peach/40 border border-rose/40 text-foreground font-light text-sm tracking-wider hover:from-rose/60 hover:via-lavender/60 hover:to-peach/60 transition-all duration-500 glow-rose flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 text-rose" />
              Open it now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinalSection;
