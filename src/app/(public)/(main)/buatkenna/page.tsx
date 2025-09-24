"use client";
import Hearts from "./components/Hearts";
import GlassCard from "./components/GlassCard";
import Link from "next/link";
import MusicButton from "./components/MusicButton";
import { useAudio } from "./components/ClientAudioProvider";
import { useEffect, useState } from "react";

export default function Page() {
  const { playing } = useAudio();
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(playing); }, [playing]);

  return (
    <main className="flex min-h-dvh items-center justify-center p-6">
      <Hearts />
      <GlassCard>
        <h1 className="font-script text-5xl text-pink-600 text-center mb-4">alloooow, kennaaa</h1>
        <p className="font-display text-xl text-center mb-6">Boleh pinjam beberapa menit hatimu?</p>
        <div className="flex items-center justify-center gap-3 mb-8">
          <MusicButton />
          <Link
            href="/buatkenna/confess"
            className={`rounded-2xl px-5 py-2.5 shadow hover:shadow-md text-white transition ${ready ? "bg-pink-500/90" : "bg-pink-300 cursor-not-allowed pointer-events-none"}`}
            aria-disabled={!ready}
          >
            Lanjut
          </Link>
        </div>
        <p className="text-center text-sm text-gray-600">— {`dari ibaall`}</p>
      </GlassCard>
    </main>
  );
}
