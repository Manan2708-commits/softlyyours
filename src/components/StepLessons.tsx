import { useState } from "react";
import { Leaf, Sun, Feather, ChevronRight } from "lucide-react";

interface StepProps {
  onNext: () => void;
}

const lessons = [
  {
    question: "What did I learn about myself?",
    answer: "I've understood where I went wrong — and stopped running from it.",
    icon: Leaf,
    color: "text-rose",
    bg: "bg-rose-light/50",
    activeBg: "from-rose-light/60 to-lavender/30",
  },
  {
    question: "How have I changed?",
    answer: "I've learned that patience isn't waiting for things to fix themselves, it's doing the quiet work.",
    icon: Sun,
    color: "text-gold",
    bg: "bg-gold-light/50",
    activeBg: "from-gold-light/60 to-peach/30",
  },
  {
    question: "Why am I telling you this?",
    answer: "Because saying sorry isn't about me feeling better — it's about you knowing the truth.",
    icon: Feather,
    color: "text-lavender-deep",
    bg: "bg-lavender/50",
    activeBg: "from-lavender/60 to-sky/30",
  },
];

const StepLessons = ({ onNext }: StepProps) => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [answered, setAnswered] = useState<number[]>([]);

  const handleExpand = (i: number) => {
    setExpanded(expanded === i ? null : i);
    if (!answered.includes(i)) {
      setAnswered([...answered, i]);
    }
  };

  const allAnswered = answered.length === lessons.length;

  return (
    <div className="h-screen flex items-center justify-center px-6 relative">
      <div className="absolute bottom-20 right-1/4 w-44 h-44 rounded-full bg-lavender/20 blur-3xl" />

      <div className="max-w-lg w-full relative z-10 pt-16">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-gradient mb-3 text-center animate-fade-up">
          What I've learned
        </h2>
        <p className="text-center text-muted-foreground/60 text-xs mb-10 animate-fade-up delay-200 font-light">
          Tap each question to see the answer
        </p>

        <div className="space-y-3">
          {lessons.map((l, i) => {
            const Icon = l.icon;
            const isExpanded = expanded === i;
            const isAnswered = answered.includes(i);

            return (
              <div
                key={i}
                className="animate-fade-up"
                style={{ animationDelay: `${i * 200 + 400}ms` }}
              >
                <button
                  onClick={() => handleExpand(i)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-500 ${
                    isExpanded
                      ? `bg-gradient-to-br ${l.activeBg} border-border/50 glow-lavender`
                      : isAnswered
                      ? "bg-card/80 border-border/50"
                      : "bg-card/40 border-border hover:border-rose/30 hover:bg-card/60"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-xl ${l.bg} transition-transform duration-300 ${isExpanded ? "scale-110" : ""}`}>
                      <Icon className={`w-5 h-5 ${l.color}`} />
                    </div>
                    <span className="flex-1 font-serif text-base text-foreground">
                      {l.question}
                    </span>
                    <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} />
                  </div>

                  <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="text-muted-foreground font-light text-sm leading-relaxed pl-14">
                      {l.answer}
                    </p>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {allAnswered && (
          <div className="mt-8 text-center animate-bounce-in">
            <button
              onClick={onNext}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-lavender/15 to-rose/15 border border-lavender-deep/25 text-foreground font-light text-sm tracking-wider hover:from-lavender/25 hover:to-rose/25 transition-all duration-500 glow-lavender"
            >
              One last thing →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepLessons;
