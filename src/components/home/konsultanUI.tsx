import Link from "next/link";

const KonsultasiUI = () => {
  return (
    <div className="w-full mt-16  grid justify-start">
      <div className="w-full justify-start">
        <h1 className="text-blue-700 text-xl font-bold">Konsultasi</h1>
        <h1 className="text-gray-700 font-bold text-2xl">
          Konsultasikan Segera Untuk Pembuatan Website
        </h1>
        <p className="text-gray-500 text-md mt-5">
          Segera Konsultasikan Jika Kamu Ingin Membutuhkan Jasa Pembuatan
          Website Tertentu dan Ingin Request Beberapa Fitur Tertentu. Saya Siap
          Untuk Membantu Kamu.
        </p>
        <p className="text-gray-500 text-md mt-5">Kontak Saya Disini :</p>
        <Link href="https://wa.me/6285780294072?text=Hai%20Iqbal,%20Saya%20Ingin%20Pesan%20Jasa%20Pembuatan%20Website">
          <button className="text-center active:text-white hover:text-white active:bg-blue-500 hover:bg-blue-500 m-5 mb-10 py-4 px-10 text-blue-700 border-2 border-blue-400 text-xs font-semibold justify-center rounded-full">
            Konsultasi Sekarang
          </button>
        </Link>
      </div>
    </div>
  );
};
export default KonsultasiUI;
