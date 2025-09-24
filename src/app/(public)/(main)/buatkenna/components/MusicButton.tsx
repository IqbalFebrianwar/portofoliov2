"use client";
import { useAudio } from "../components/ClientAudioProvider";

export default function MusicButton() {
  const { playing, toggle } = useAudio();
  return (
    <button
      onClick={toggle}
      className="rounded-2xl px-5 py-2.5 bg-pink-500/90 text-white shadow hover:shadow-md transition active:scale-[.98]"
    >
      {playing ? "Jeda Musik" : "Nyalakan Musik"}
    </button>
  );
}
