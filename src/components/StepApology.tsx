import { useState, useEffect } from "react";
import TypingText from "./TypingText";
import { Lock, Unlock, Heart } from "lucide-react";

interface StepProps {
  onNext: () => void;
}

const paragraphs = [
  "I've carried these words for a long time now. A whole year has passed, and not a day went by without me thinking about what happened between us.",
  "I'm not here to make excuses. I hurt you, and I take full responsibility for that.",
  "I don't miss just the comfort of having someone. I miss you — your laugh, the way you saw things, the conversations that made everything feel lighter.",
];

const StepApology = ({ onNext }: StepProps) => {
  const [revealed, setRevealed] = useState<number[]>([]);
  const [allRevealed, setAllRevealed] = useState(false);

  const handleReveal = (index: number) => {
    if (revealed.includes(index)) return;
    const next = [...revealed, index];
    setRevealed(next);
    if (next.length === paragraphs.length) {
      setTimeout(() => setAllRevealed(true), 600);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center px-6 relative">
      <div className="absolute top-20 right-10 w-48 h-48 rounded-full bg-lavender/30 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-36 h-36 rounded-full bg-peach/25 blur-3xl" />

      <div className="max-w-lg w-full relative z-10 pt-16">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-gradient mb-4 text-center animate-fade-up">
          I'm sorry.
        </h2>
        <p className="text-center text-muted-foreground/60 text-xs mb-10 animate-fade-up delay-300 font-light">
          Tap each lock to reveal what's inside
        </p>

        <div className="space-y-4">
          {paragraphs.map((text, i) => {
            const isRevealed = revealed.includes(i);
            const colors = [
              "from-rose-light/60 to-lavender/30 border-rose/20",
              "from-lavender/40 to-sky/30 border-lavender-deep/20",
              "from-peach/50 to-gold-light/30 border-gold/20",
            ];
            return (
              <div
                key={i}
                onClick={() => handleReveal(i)}
                className={`animate-fade-up p-5 rounded-2xl border cursor-pointer transition-all duration-700 ${
                  isRevealed
                    ? `bg-gradient-to-br ${colors[i]} glow-lavender`
                    : "bg-card/50 border-border hover:border-rose/30 hover:bg-card/80"
                }`}
                style={{ animationDelay: `${i * 150 + 400}ms` }}
              >
                {isRevealed ? (
                  <div className="flex items-start gap-3 animate-fade-in">
                    <Unlock className="w-4 h-4 text-rose mt-1 flex-shrink-0" />
                    <p className="text-foreground font-light leading-relaxed text-sm">
                      {text}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 py-2">
                    <Lock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground font-light text-sm">
                      Tap to unlock this message…
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {allRevealed && (
          <div className="mt-8 text-center animate-bounce-in">
            <button
              onClick={onNext}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-rose/15 to-lavender/15 border border-rose/25 text-foreground font-light text-sm tracking-wider hover:from-rose/25 hover:to-lavender/25 transition-all duration-500 glow-rose"
            >
              Continue →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepApology;
