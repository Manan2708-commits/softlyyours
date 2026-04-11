import FadeSection from "./FadeSection";
import { Leaf, Sun, Feather } from "lucide-react";

const lessons = [
  {
    text: "I've understood where I went wrong — and stopped running from it.",
    icon: Leaf,
    color: "text-rose",
    bg: "bg-rose-light/50",
  },
  {
    text: "I've learned that patience isn't waiting for things to fix themselves, it's doing the quiet work.",
    icon: Sun,
    color: "text-gold",
    bg: "bg-gold-light/50",
  },
  {
    text: "I've grown enough to know that saying sorry isn't about me feeling better — it's about you knowing the truth.",
    icon: Feather,
    color: "text-lavender-deep",
    bg: "bg-lavender/50",
  },
];

const LessonsSection = () => (
  <section className="py-28 px-6 relative">
    <div className="absolute top-0 left-0 w-full h-px section-divider" />
    <div className="absolute top-32 left-1/4 w-56 h-56 rounded-full bg-peach/20 blur-3xl" />
    <div className="absolute bottom-20 right-1/4 w-44 h-44 rounded-full bg-lavender/20 blur-3xl" />

    <div className="max-w-xl mx-auto relative z-10">
      <FadeSection>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-gradient mb-4 text-center">
          What I've learned
        </h2>
        <p className="text-center text-muted-foreground font-light text-sm mb-14">
          Growth that came from losing you
        </p>
      </FadeSection>

      <div className="space-y-5">
        {lessons.map((lesson, i) => {
          const Icon = lesson.icon;
          return (
            <FadeSection key={i} delay={i * 250}>
              <div className="flex items-start gap-5 p-5 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50">
                <div className={`p-2.5 rounded-xl ${lesson.bg} flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${lesson.color}`} />
                </div>
                <p className="text-muted-foreground font-light leading-relaxed pt-1">
                  {lesson.text}
                </p>
              </div>
            </FadeSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default LessonsSection;
