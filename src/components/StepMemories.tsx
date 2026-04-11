import { useState } from "react";
import { Cloud, Star, Flower2, Eye } from "lucide-react";

interface StepProps {
  onNext: () => void;
}

const memories = [
  {
    front: "A sky that turned pink",
    back: "That evening we spent talking until the sky turned pink, forgetting everything else existed.",
    icon: Cloud,
    gradient: "from-rose-light/70 to-lavender/40",
    backGradient: "from-rose/20 to-lavender-deep/20",
    iconColor: "text-rose",
  },
  {
    front: "The warmest laugh",
    back: "The way you'd laugh at the smallest things — and suddenly the whole room felt warmer.",
    icon: Star,
    gradient: "from-peach/60 to-gold-light/50",
    backGradient: "from-gold/20 to-peach/20",
    iconColor: "text-gold",
  },
  {
    front: "Comfortable silence",
    back: "Those quiet moments where nothing needed to be said, and everything still felt right.",
    icon: Flower2,
    gradient: "from-lavender/60 to-sky/40",
    backGradient: "from-lavender-deep/20 to-sky/20",
    iconColor: "text-lavender-deep",
  },
];

const StepMemories = ({ onNext }: StepProps) => {
  const [flipped, setFlipped] = useState<number[]>([]);
  const allFlipped = flipped.length === memories.length;

  const handleFlip = (i: number) => {
    if (flipped.includes(i)) return;
    setFlipped([...flipped, i]);
  };

  return (
    <div className="h-screen flex items-center justify-center px-6 relative">
      <div className="absolute top-32 left-1/4 w-56 h-56 rounded-full bg-peach/20 blur-3xl" />

      <div className="max-w-lg w-full relative z-10 pt-16">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-gradient mb-3 text-center animate-fade-up">
          Moments I still carry
        </h2>
        <p className="text-center text-muted-foreground/60 text-xs mb-10 animate-fade-up delay-200 font-light">
          Flip each card to reveal a memory
        </p>

        <div className="grid grid-cols-1 gap-4">
          {memories.map((m, i) => {
            const Icon = m.icon;
            const isFlipped = flipped.includes(i);
            return (
              <div
                key={i}
                className="flip-card animate-fade-up"
                style={{ animationDelay: `${i * 200 + 400}ms` }}
                onClick={() => handleFlip(i)}
              >
                <div className={`flip-card-inner relative ${isFlipped ? "flipped" : ""}`}
                  style={{ transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)", transformStyle: "preserve-3d", transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)" }}>
                  {/* Front */}
                  <div className={`flip-card-front p-6 rounded-2xl bg-gradient-to-br ${m.gradient} border border-border/50 flex items-center gap-4`}
                    style={{ backfaceVisibility: "hidden" }}>
                    <div className="p-3 rounded-xl bg-background/50">
                      <Icon className={`w-6 h-6 ${m.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-serif text-lg text-foreground">{m.front}</p>
                      <p className="text-xs text-muted-foreground mt-1">Tap to reveal</p>
                    </div>
                    <Eye className="w-4 h-4 text-muted-foreground/50" />
                  </div>

                  {/* Back */}
                  <div className={`flip-card-back absolute inset-0 p-6 rounded-2xl bg-gradient-to-br ${m.backGradient} border border-rose/20 flex items-center glow-lavender`}
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                    <p className="text-foreground font-serif text-base italic leading-relaxed">
                      "{m.back}"
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {allFlipped && (
          <div className="mt-8 text-center animate-bounce-in">
            <button
              onClick={onNext}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-gold/15 to-peach/15 border border-gold/25 text-foreground font-light text-sm tracking-wider hover:from-gold/25 hover:to-peach/25 transition-all duration-500 glow-gold"
            >
              Continue →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepMemories;
