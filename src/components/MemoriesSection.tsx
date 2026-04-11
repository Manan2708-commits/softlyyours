import FadeSection from "./FadeSection";
import { Flower2, Cloud, Star } from "lucide-react";

const memories = [
  {
    text: "That evening we spent talking until the sky turned pink, forgetting everything else existed.",
    icon: Cloud,
    gradient: "from-rose-light/60 to-lavender/40",
    iconColor: "text-rose",
  },
  {
    text: "The way you'd laugh at the smallest things — and suddenly the whole room felt warmer.",
    icon: Star,
    gradient: "from-peach/50 to-gold-light/40",
    iconColor: "text-gold",
  },
  {
    text: "Those quiet moments where nothing needed to be said, and everything still felt right.",
    icon: Flower2,
    gradient: "from-lavender/50 to-sky/30",
    iconColor: "text-lavender-deep",
  },
];

const MemoriesSection = () => (
  <section className="py-28 px-6 gradient-section-alt relative">
    <div className="absolute top-0 left-0 w-full h-px section-divider" />
    <div className="max-w-xl mx-auto">
      <FadeSection>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-gradient mb-4 text-center">
          Small moments I still carry
        </h2>
        <p className="text-center text-muted-foreground font-light text-sm mb-14">
          Little pieces of us that never faded
        </p>
      </FadeSection>

      <div className="space-y-6">
        {memories.map((memory, i) => {
          const Icon = memory.icon;
          return (
            <FadeSection key={i} delay={i * 300}>
              <div className={`p-7 rounded-2xl bg-gradient-to-br ${memory.gradient} border border-border/50 backdrop-blur-sm glow-lavender relative overflow-hidden`}>
                <Icon className={`w-8 h-8 ${memory.iconColor} opacity-20 absolute top-4 right-4`} />
                <p className="text-foreground font-light italic leading-relaxed font-serif text-lg">
                  "{memory.text}"
                </p>
              </div>
            </FadeSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default MemoriesSection;
