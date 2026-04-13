import { useState, useCallback } from "react";
import LandingSection from "@/components/LandingSection";
import StepApology from "@/components/StepApology";
import StepMemories from "@/components/StepMemories";
import StepLessons from "@/components/StepLessons";
import FinalSection from "@/components/FinalSection";
import ApologyNote from "@/components/ApologyNote";
import PetalParticles from "@/components/PetalParticles";
import ProgressBar from "@/components/ProgressBar";

const STEP_LABELS = ["The Apology", "Memories", "Growth", "Final Words"];

const Index = () => {
  const [step, setStep] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goToStep = useCallback((next: number) => {
    setTransitioning(true);
    setTimeout(() => {
      setStep(next);
      setTransitioning(false);
    }, 400);
  }, []);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <LandingSection onEnter={() => goToStep(1)} />;
      case 1:
        return <StepApology onNext={() => goToStep(2)} />;
      case 2:
        return <StepMemories onNext={() => goToStep(3)} />;
      case 3:
        return <StepLessons onNext={() => goToStep(4)} />;
      case 4:
        return <FinalSection onNote={() => goToStep(5)} />;
      case 5:
        return <ApologyNote />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-background relative overflow-hidden">
      <PetalParticles />
      {step > 0 && step <= 4 && (
        <ProgressBar currentStep={step} totalSteps={4} labels={STEP_LABELS} />
      )}
      {step > 0 && (
        <button
          onClick={() => goToStep(step - 1)}
          className="absolute top-20 left-4 z-40 flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-foreground/70 hover:text-foreground hover:border-rose/40 text-xs font-light transition-all duration-300 shadow-sm"
        >
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">go back</span>
        </button>
      )}
      <div
        className={`h-full transition-all duration-400 ${
          transitioning ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"
        }`}
        style={{ transition: "opacity 0.4s, transform 0.4s, filter 0.4s" }}
      >
        {renderStep()}
      </div>
    </div>
  );
};

export default Index;
