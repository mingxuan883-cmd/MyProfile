"use client";

import { Music } from "lucide-react";
import { useMusicContext } from "@/contexts/music-context";

export function SpotifyClient() {
  const { isPlaying } = useMusicContext();

  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <Music className="w-4 h-4" />
      <span className="text-sm">{isPlaying ? "Playing" : "Not playing"}</span>
    </div>
  );
}
