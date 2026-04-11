import { Heart, Sparkles, Check } from "lucide-react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  labels: string[];
}

const ProgressBar = ({ currentStep, totalSteps, labels }: ProgressBarProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-md mx-auto">
        {/* Step counter */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground font-light tracking-wider uppercase">
            Chapter {currentStep} of {totalSteps}
          </span>
          <span className="text-xs text-muted-foreground font-light font-serif italic">
            {labels[currentStep - 1]}
          </span>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalSteps }).map((_, i) => {
            const step = i + 1;
            const isActive = step === currentStep;
            const isCompleted = step < currentStep;

            return (
              <div key={i} className="flex-1 flex items-center">
                <div
                  className={`progress-dot w-full h-1.5 rounded-full transition-all duration-500 ${
                    isCompleted
                      ? "bg-gradient-to-r from-rose to-lavender-deep"
                      : isActive
                      ? "bg-gradient-to-r from-rose/60 to-lavender-deep/40 animate-pulse-glow"
                      : "bg-border"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
