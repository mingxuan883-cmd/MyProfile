"use client";

import { useRef, useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMusicContext } from "@/contexts/music-context";

export function BackgroundMusic() {
  const { isPlaying, setIsPlaying } = useMusicContext();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }

    // Add global click listener to start music on first user interaction
    const handleFirstClick = () => {
      if (!hasUserInteracted && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasUserInteracted(true);
        }).catch((error) => {
          console.log("Music play failed:", error);
        });
      }
    };

    // Add listener to document to catch any click
    document.addEventListener('click', handleFirstClick);

    return () => {
      document.removeEventListener('click', handleFirstClick);
    };
  }, [hasUserInteracted, setIsPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={togglePlay}
        size="icon"
        variant="outline"
        className="rounded-full w-12 h-12 shadow-lg"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </Button>
      <audio
        ref={audioRef}
        src="/raulespa-lofi-relax-song-for-summer-vibes-156087.mp3"
        loop
      />
    </div>
  );
}