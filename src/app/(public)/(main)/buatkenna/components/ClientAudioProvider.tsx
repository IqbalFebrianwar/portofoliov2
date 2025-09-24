"use client";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";

type Ctx = {
  playing: boolean;
  play: () => Promise<void>;
  pause: () => void;
  toggle: () => Promise<void>;
};
const AudioCtx = createContext<Ctx | null>(null);
export const useAudio = () => {
  const v = useContext(AudioCtx);
  if (!v) throw new Error("useAudio must be used within ClientAudioProvider");
  return v;
};

export default function ClientAudioProvider({ src, children }: { src: string; children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  // sinkronkan state saat <audio> play/pause
  useEffect(() => {
    const a = audioRef.current!;
    if (!a) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);
    return () => {
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
    };
  }, []);

  const play = async () => {
    const a = audioRef.current!;
    a.volume = 0;
    await a.play(); // butuh user gesture pertama kali
    // fade-in lembut
    const id = setInterval(() => {
      if (!audioRef.current) return;
      a.volume = Math.min(1, a.volume + 0.05);
      if (a.volume >= 1) clearInterval(id);
    }, 80);
  };
  const pause = () => audioRef.current?.pause();
  const toggle = async () => (playing ? pause() : play());

  return (
    <AudioCtx.Provider value={{ playing, play, pause, toggle }}>
      {/* audio disini -> tidak unmount saat ganti halaman */}
      <audio ref={audioRef} src={src} loop preload="auto" />
      {children}
    </AudioCtx.Provider>
  );
}
