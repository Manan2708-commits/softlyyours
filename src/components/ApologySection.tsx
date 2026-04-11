import FadeSection from "./FadeSection";
import { Heart } from "lucide-react";

const ApologySection = () => (
  <section className="min-h-screen flex items-center justify-center px-6 py-24 relative">
    {/* Background accents */}
    <div className="absolute top-0 left-0 w-full h-px section-divider" />
    <div className="absolute top-20 right-10 w-48 h-48 rounded-full bg-lavender/30 blur-3xl" />
    <div className="absolute bottom-20 left-10 w-36 h-36 rounded-full bg-peach/25 blur-3xl" />

    <div className="max-w-xl relative z-10">
      <FadeSection>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-rose/30" />
          <Heart className="w-5 h-5 text-rose" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-rose/30" />
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-gradient mb-12 text-center">
          I'm sorry.
        </h2>
      </FadeSection>

      <FadeSection delay={300}>
        <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border glow-lavender mb-6">
          <p className="text-muted-foreground leading-relaxed font-light">
            I've carried these words for a long time now. A whole year has passed, and
            not a day went by without me thinking about what happened between us — and
            what I could have done differently.
          </p>
        </div>
      </FadeSection>

      <FadeSection delay={500}>
        <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-light/50 to-lavender/30 border border-rose/10 mb-6">
          <p className="text-muted-foreground leading-relaxed font-light">
            I'm not here to make excuses or shift blame. I hurt you, and I take full
            responsibility for that. The way I acted, the things I said — or didn't
            say — those were my failures, not yours.
          </p>
        </div>
      </FadeSection>

      <FadeSection delay={700}>
        <div className="p-6 rounded-2xl bg-gradient-to-br from-peach/40 to-gold-light/30 border border-gold/15">
          <p className="text-foreground leading-relaxed font-light">
            I don't miss just the comfort of having someone. I miss <em className="text-rose font-serif text-lg">you</em> — your
            laugh, the way you saw things, the conversations that made everything feel
            lighter. That kind of connection doesn't come around often, and I didn't
            treat it the way it deserved.
          </p>
        </div>
      </FadeSection>
    </div>
  </section>
);

export default ApologySection;
