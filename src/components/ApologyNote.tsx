import { useState, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";

const ApologyNote = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
    document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = "hidden"; };
  }, []);

  return (
    <div className="min-h-screen flex items-start justify-center px-5 py-20 relative overflow-y-auto">
      <div className="absolute top-16 left-1/4 w-64 h-64 rounded-full bg-rose-light/25 blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-16 right-1/4 w-48 h-48 rounded-full bg-lavender/20 blur-3xl animate-pulse-glow delay-1000 pointer-events-none" />

      {/* Cute image */}
      <img
        src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=140&h=140&fit=crop&crop=center"
        alt="flowers"
        className="absolute top-12 right-4 w-16 h-16 md:w-20 md:h-20 rounded-full object-cover opacity-40 animate-float shadow-md border-2 border-rose/20 pointer-events-none"
      />

      {visible && (
        <div className="max-w-md w-full relative z-10 animate-fade-up">
          {/* Envelope header */}
          <div className="text-center mb-6">
            <span className="text-4xl">💌</span>
            <h2 className="font-serif text-2xl font-light text-gradient mt-2">
              Apology Message
            </h2>
          </div>

          {/* Letter card */}
          <div className="bg-card/60 backdrop-blur-sm border border-rose/20 rounded-3xl p-6 md:p-8 shadow-xl glow-rose space-y-4">
            <p className="text-muted-foreground font-light text-sm leading-relaxed italic font-serif">
              I don't know if you'll read this… but I've been wanting to say this for a long time.
            </p>
            <p className="text-foreground font-light text-sm leading-relaxed">
              I'm really sorry. Sorry for the things I said, the things I didn't say, and the way everything turned out. Back then, I didn't fully understand what I was losing… but I do now.
            </p>
            <p className="text-foreground font-light text-sm leading-relaxed">
              This past year gave me a lot of time to think, to reflect, and to realize where I went wrong. And more than anything, I miss the connection we had — not just the moments, but you.
            </p>
            <p className="text-foreground font-light text-sm leading-relaxed">
              I'm not here to change your mind or expect anything from you. I just wanted to say this, honestly and from the heart.
            </p>
            <p className="text-foreground font-light text-sm leading-relaxed">
              If someday you feel like talking, even just for a moment… I'll be here.
            </p>
            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              Take care, always. 💛
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-rose/10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-rose/20" />
              <p className="font-serif text-muted-foreground/60 text-sm italic whitespace-nowrap">
                Signing off — Manan Mrig
              </p>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-rose/20" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApologyNote;
