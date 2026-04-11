import { useState } from "react";
import TypingText from "./TypingText";
import { Heart, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface LandingSectionProps {
  onEnter: () => void;
}

const LandingSection = ({ onEnter }: LandingSectionProps) => {
  const [typingDone, setTypingDone] = useState(false);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
    >
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        width={1920}
        height={1080}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />

      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-rose-light/50 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-32 right-16 w-40 h-40 rounded-full bg-lavender/40 blur-3xl animate-pulse-glow delay-1000" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-peach/30 blur-2xl animate-pulse-glow delay-500" />

      <div className="relative z-10">
        {/* Floating icons */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <Sparkles className="w-4 h-4 text-gold animate-float-reverse" />
          <Heart className="w-7 h-7 text-rose animate-float" />
          <Sparkles className="w-4 h-4 text-lavender-deep animate-float-reverse" />
        </div>

        <h1 className="font-serif text-3xl md:text-5xl font-light leading-relaxed max-w-2xl">
          <TypingText
            text="I know it's been a while… but this was always left unsaid."
            speed={50}
            delay={500}
            onComplete={() => setTypingDone(true)}
            className="text-gradient"
          />
        </h1>

        {typingDone && (
          <button
            onClick={onEnter}
            className="mt-14 animate-fade-up px-10 py-4 rounded-full bg-gradient-to-r from-rose/20 via-lavender/20 to-peach/20 border border-rose/30 text-foreground font-light text-sm tracking-widest uppercase hover:from-rose/30 hover:via-lavender/30 hover:to-peach/30 hover:shadow-lg transition-all duration-700 glow-rose"
          >
            If you're willing… click here
          </button>
        )}
      </div>
    </section>
  );
};

export default LandingSection;
