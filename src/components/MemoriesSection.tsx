import FadeSection from "./FadeSection";

const memories = [
  {
    text: "That evening we spent talking until the sky turned pink, forgetting everything else existed.",
  },
  {
    text: "The way you'd laugh at the smallest things — and suddenly the whole room felt warmer.",
  },
  {
    text: "Those quiet moments where nothing needed to be said, and everything still felt right.",
  },
];

const MemoriesSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-xl mx-auto">
      <FadeSection>
        <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-12 text-center">
          Small moments I still carry
        </h2>
      </FadeSection>
      <div className="space-y-8">
        {memories.map((memory, i) => (
          <FadeSection key={i} delay={i * 300}>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <p className="text-muted-foreground font-light italic leading-relaxed">
                "{memory.text}"
              </p>
            </div>
          </FadeSection>
        ))}
      </div>
    </div>
  </section>
);

export default MemoriesSection;
