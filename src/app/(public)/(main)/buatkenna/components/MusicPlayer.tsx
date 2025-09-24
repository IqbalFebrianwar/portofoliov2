"use client";
import { useRef, useState } from "react";


type Props = { src: string; onPlay?: () => void };


export default function MusicPlayer({ src, onPlay }: Props) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState(false);


    const toggle = async () => {
        const audio = audioRef.current!;
        try {
            if (!playing) {
                await audio.play();
                setPlaying(true);
                onPlay?.();
            } else {
                audio.pause();
                setPlaying(false);
            }
        } catch (e) {
            // biarkan user klik lagi jika gagal
        }
    };


    return (
        <div className="flex items-center gap-3">
            <button onClick={toggle} className="rounded-2xl px-5 py-2.5 bg-pink-500/90 text-white shadow hover:shadow-md transition active:scale-[.98]">
                {playing ? "Jeda Musik" : "Nyalakan Musik"}
            </button>
            <audio ref={audioRef} src={src} loop preload="auto" />
        </div>
    );
}