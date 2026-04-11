import FadeSection from "./FadeSection";

const lessons = [
  "I've understood where I went wrong — and stopped running from it.",
  "I've learned that patience isn't waiting for things to fix themselves, it's doing the quiet work.",
  "I've grown enough to know that saying sorry isn't about me feeling better — it's about you knowing the truth.",
];

const LessonsSection = () => (
  <section className="py-24 px-6 bg-card/50">
    <div className="max-w-xl mx-auto">
      <FadeSection>
        <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-12 text-center">
          What I've learned
        </h2>
      </FadeSection>
      <div className="space-y-6">
        {lessons.map((lesson, i) => (
          <FadeSection key={i} delay={i * 250}>
            <div className="flex items-start gap-4">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary/40 flex-shrink-0" />
              <p className="text-muted-foreground font-light leading-relaxed">
                {lesson}
              </p>
            </div>
          </FadeSection>
        ))}
      </div>
    </div>
  </section>
);

export default LessonsSection;
