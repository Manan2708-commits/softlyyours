import { useState } from "react";
import TypingText from "./TypingText";
import { Heart } from "lucide-react";

interface LandingSectionProps {
  onEnter: () => void;
}

const LandingSection = ({ onEnter }: LandingSectionProps) => {
  const [typingDone, setTypingDone] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <Heart className="w-6 h-6 text-primary mb-8 animate-float" />
      <h1 className="font-serif text-2xl md:text-4xl font-light text-foreground leading-relaxed max-w-lg">
        <TypingText
          text="I know it's been a while… but this was always left unsaid."
          speed={55}
          delay={500}
          onComplete={() => setTypingDone(true)}
        />
      </h1>
      {typingDone && (
        <button
          onClick={onEnter}
          className="mt-12 animate-fade-up px-8 py-3 rounded-full bg-primary/10 border border-primary/20 text-foreground font-light text-sm tracking-wide hover:bg-primary/20 transition-all duration-500"
        >
          If you're willing… click here
        </button>
      )}
    </section>
  );
};

export default LandingSection;
