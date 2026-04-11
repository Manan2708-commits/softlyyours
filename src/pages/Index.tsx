import { useState, useCallback } from "react";
import LandingSection from "@/components/LandingSection";
import StepApology from "@/components/StepApology";
import StepMemories from "@/components/StepMemories";
import StepLessons from "@/components/StepLessons";
import FinalSection from "@/components/FinalSection";
import MusicToggle from "@/components/MusicToggle";
import PetalParticles from "@/components/PetalParticles";
import ProgressBar from "@/components/ProgressBar";

const STEP_LABELS = ["The Apology", "Memories", "Growth", "Final Words"];

const Index = () => {
  const [step, setStep] = useState(0); // 0 = landing
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
        return <FinalSection />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-background relative overflow-hidden">
      <PetalParticles />
      <MusicToggle />
      {step > 0 && step <= 4 && (
        <ProgressBar currentStep={step} totalSteps={4} labels={STEP_LABELS} />
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
