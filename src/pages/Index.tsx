import { useState } from "react";
import LandingSection from "@/components/LandingSection";
import ApologySection from "@/components/ApologySection";
import MemoriesSection from "@/components/MemoriesSection";
import LessonsSection from "@/components/LessonsSection";
import FinalSection from "@/components/FinalSection";
import MusicToggle from "@/components/MusicToggle";

const Index = () => {
  const [entered, setEntered] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <MusicToggle />
      {!entered ? (
        <LandingSection onEnter={() => setEntered(true)} />
      ) : (
        <main className="animate-fade-in">
          <ApologySection />
          <MemoriesSection />
          <LessonsSection />
          <FinalSection />
        </main>
      )}
    </div>
  );
};

export default Index;
