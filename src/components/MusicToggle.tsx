import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Using a royalty-free piano ambient track
    audioRef.current = new Audio(
      "https://cdn.pixabay.com/audio/2022/02/23/audio_ea70ad08e0.mp3"
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-5 right-5 z-50 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-blush transition-colors"
      aria-label={playing ? "Mute music" : "Play music"}
    >
      {playing ? (
        <Volume2 className="w-4 h-4 text-foreground" />
      ) : (
        <VolumeX className="w-4 h-4 text-muted-foreground" />
      )}
    </button>
  );
};

export default MusicToggle;
