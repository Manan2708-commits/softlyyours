import FadeSection from "./FadeSection";
import { Heart, Sparkles } from "lucide-react";

const FinalSection = () => (
  <section className="py-36 px-6 gradient-final relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px section-divider" />
    <div className="absolute top-20 left-1/3 w-64 h-64 rounded-full bg-rose-light/30 blur-3xl animate-pulse-glow" />
    <div className="absolute bottom-20 right-1/3 w-48 h-48 rounded-full bg-lavender/25 blur-3xl animate-pulse-glow delay-1000" />

    <div className="max-w-lg mx-auto text-center relative z-10">
      <FadeSection>
        <div className="flex justify-center mb-8">
          <div className="p-4 rounded-full bg-gradient-to-br from-rose/20 to-lavender/20 glow-rose">
            <Heart className="w-8 h-8 text-rose" />
          </div>
        </div>
        <p className="text-foreground font-serif text-2xl md:text-3xl font-light leading-relaxed mb-4">
          I don't expect anything from you.
        </p>
        <p className="text-foreground font-serif text-2xl md:text-3xl font-light leading-relaxed mb-10">
          I just wanted to say <span className="text-gradient font-medium">I'm sorry.</span>
        </p>
      </FadeSection>

      <FadeSection delay={400}>
        <p className="text-muted-foreground font-light mb-14 leading-relaxed">
          If you ever feel like talking, I'll be here. No rush. No pressure.
          Just an open door, whenever — if ever — you're ready.
        </p>
      </FadeSection>

      <FadeSection delay={700}>
        <a
          href="mailto:"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-rose/15 via-lavender/15 to-peach/15 border border-rose/25 text-foreground font-light text-sm tracking-widest uppercase hover:from-rose/25 hover:via-lavender/25 hover:to-peach/25 transition-all duration-700 glow-rose"
        >
          <Sparkles className="w-4 h-4 text-gold" />
          No pressure. Just a chance to reconnect.
          <Heart className="w-4 h-4 text-rose" />
        </a>
      </FadeSection>

      <FadeSection delay={1200}>
        <div className="mt-24 flex items-center gap-3 justify-center">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose/30" />
          <p className="text-muted-foreground/40 text-xs font-light italic">
            With all my heart — and all the words I should've said sooner
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose/30" />
        </div>
      </FadeSection>
    </div>
  </section>
);

export default FinalSection;
