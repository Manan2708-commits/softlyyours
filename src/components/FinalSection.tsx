import FadeSection from "./FadeSection";
import { Heart } from "lucide-react";

const FinalSection = () => (
  <section className="py-32 px-6">
    <div className="max-w-lg mx-auto text-center">
      <FadeSection>
        <p className="text-foreground font-serif text-xl md:text-2xl font-light leading-relaxed mb-8">
          I don't expect anything from you. I just wanted to say I'm sorry.
        </p>
      </FadeSection>
      <FadeSection delay={400}>
        <p className="text-muted-foreground font-light mb-12">
          If you ever feel like talking, I'll be here. No rush. No pressure.
          Just an open door, whenever — if ever — you're ready.
        </p>
      </FadeSection>
      <FadeSection delay={700}>
        <a
          href="mailto:"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary/10 border border-primary/20 text-foreground font-light text-sm tracking-wide hover:bg-primary/20 transition-all duration-500"
        >
          <Heart className="w-3.5 h-3.5 text-primary" />
          No pressure. Just a chance to reconnect.
        </a>
      </FadeSection>
      <FadeSection delay={1000}>
        <p className="mt-20 text-muted-foreground/50 text-xs font-light">
          With all my heart — and all the words I should've said sooner.
        </p>
      </FadeSection>
    </div>
  </section>
);

export default FinalSection;
