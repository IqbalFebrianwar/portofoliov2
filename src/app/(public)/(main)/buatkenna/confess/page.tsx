import GlassCard from "../components/GlassCard";
import Hearts from "../components/Hearts";

export default function Confess() {
  return (
    <main className="flex min-h-dvh items-center justify-center p-6">
      <Hearts />
      <GlassCard>
        <h2 className="font-script text-5xl text-center text-pink-600 mb-6">Aku suka kamu</h2>
        <p className="text-center mb-3">Aku ingin mengenalmu lebih dekat, perlahan, tanpa terburu-buru.</p>
        <p className="text-center mb-8">Kalau boleh, kita mulai dari satu janji kecil ya, saling jujur dan saling menjaga hati, Kamu mau tidaaa jadi kekasih acu aww, mw gaa??</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://wa.me/6285780294072?text=Aku%20mau%20coba%20bersama%20kamu%20🤍" className="rounded-2xl px-5 py-2.5 bg-pink-500/90 text-white shadow hover:shadow-md text-center">
            Iya, aku mau
          </a>
          <a href="https://wa.me/6285780294072?text=Maaf%2C%20mungkin%20belum%20sekarang.%20Terima%20kasih%20sudah%20jujur%20ya.%20💖" className="rounded-2xl px-5 py-2.5 bg-white/80 hover:bg-white text-pink-700 border border-pink-200 shadow text-center">
            Nanti dulu ya
          </a>
        </div>
      </GlassCard>
    </main>
  );
}
