import FadeSection from "./FadeSection";

const ApologySection = () => (
  <section className="min-h-screen flex items-center justify-center px-6 py-20">
    <div className="max-w-xl">
      <FadeSection>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-10">
          I'm sorry.
        </h2>
      </FadeSection>
      <FadeSection delay={300}>
        <p className="text-muted-foreground leading-relaxed mb-6 font-light">
          I've carried these words for a long time now. A whole year has passed, and
          not a day went by without me thinking about what happened between us — and
          what I could have done differently.
        </p>
      </FadeSection>
      <FadeSection delay={500}>
        <p className="text-muted-foreground leading-relaxed mb-6 font-light">
          I'm not here to make excuses or shift blame. I hurt you, and I take full
          responsibility for that. The way I acted, the things I said — or didn't
          say — those were my failures, not yours.
        </p>
      </FadeSection>
      <FadeSection delay={700}>
        <p className="text-foreground leading-relaxed font-light">
          I don't miss just the comfort of having someone. I miss <em>you</em> — your
          laugh, the way you saw things, the conversations that made everything feel
          lighter. That kind of connection doesn't come around often, and I didn't
          treat it the way it deserved.
        </p>
      </FadeSection>
    </div>
  </section>
);

export default ApologySection;
