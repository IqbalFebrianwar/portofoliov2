import CheckList from "@/components/svg/checklist.svg";
import Image from "next/image";
import Link from "next/link";

const PriceUI = () => {
  return (
    <div className="w-full mt-16  grid justify-start">
      <div className="w-full justify-start">
        <h1 className="text-blue-700  text-xl font-bold">Price List</h1>
        <h1 className="text-gray-700  font-bold text-2xl">
          Biaya Harga Pembuatan Website
        </h1>
        <p className="text-gray-500  text-md mt-5">
          Lihat semua Harga Pembuatan Website yang Tersedia.
        </p>
        <ul className="max-w-3xl space-y-1 mt-2 text-gray-500 list-disc list-inside">
          <li>
            <span className="font-bold text-gray-700">Paket Silver </span>Cocok
            Untuk Website Sederhana seperti Landing Page dll.
          </li>
          <li>
            <span className="font-bold text-gray-700">Paket Gold </span>Cocok
            Untuk yang Membutuhkan Website Untuk Profile Bisnis guna
            Meningkatkan Online Presence.
          </li>
          <li>
            <span className="font-bold text-gray-700">Paket Diamond </span>Cocok
            Untuk yang Membutuhkan Website yang Membutuhkan Storage Besar dan
            Fitur Khusus yang Lebih Kompleks.
          </li>
        </ul>
      </div>
      <div className="w-full mt-10 justify-start gap-10 flex flex-row flex-wrap">
        <div className="bg-white border-2 rounded-2xl border-gray-200 w-80">
          <h1 className=" font-bold text-center text-gray-700 text-2xl p-14">
            Paket Silver
          </h1>
          <div className=" w-64 p-2 justify-center text-center rounded-r-full bg-gradient-to-r from-slate-300 to-slate-500">
            <h1 className="text-white relative w-full ordinal p-2 text-center text-sm  font-normal">
              Rp.<span className="text-2xl font-bold">650</span>Ribu
            </h1>
          </div>
          <ul className="list-inside text-gray-600 text-sm p-5">
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              Free Domain
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              1GB Space
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              Email Domain
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              Tanpa cPanel
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              Design Standar
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              Free SSL
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              WhatsApp Chat
            </li>
          </ul>
          <Link href="https://wa.me/6285780294072?text=Hai%Iqbal,%Saya%Ingin%Membuat%Website%Dengan%Paket%Silver">
            <button className="text-center active:text-white hover:text-white active:bg-slate-400 hover:bg-slate-400 m-5 mb-10 py-4 px-10 text-gray-500  border-2 border-gray-300 text-xs font-semibold justify-center rounded-full">
              Pilih Paket
            </button>
          </Link>
        </div>
        <div className="bg-white border-2 rounded-2xl border-gray-200 w-80">
          <h1 className=" font-bold text-center text-gray-700 text-2xl p-14">
            Paket Gold
          </h1>
          <div className=" w-64 p-2 justify-center text-center rounded-r-full bg-gradient-to-r from-amber-200 to-yellow-500">
            <h1 className="text-white relative w-full ordinal p-2 text-center text-sm  font-normal">
              Rp.<span className="text-2xl font-bold">1.5</span>Juta
            </h1>
          </div>
          <ul className="list-inside text-gray-600 text-sm p-5">
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              Free Domain .com / .id
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              5GB Space
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              Email Domain
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              Tanpa cPanel
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              Design Premium
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              Free SSL
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              WhatsApp Chat
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              Intregasi Sosmed
            </li>
          </ul>
          <Link href="https://wa.me/6285780294072?text=Hai%Iqbal,%Saya%Ingin%Membuat%Website%Dengan%Paket%Gold">
            <button className="text-center active:text-white hover:text-white active:bg-amber-300 hover:bg-amber-300 m-5 mb-10 py-4 px-10 text-amber-500  border-2 border-amber-300 text-xs font-semibold justify-center rounded-full">
              Pilih Paket
            </button>
          </Link>
        </div>
        <div className="bg-white border-2 rounded-2xl mb-5 border-gray-200 w-80">
          <h1 className=" font-bold text-center text-gray-700 text-2xl p-14">
            Paket Diamond
          </h1>
          <div className=" w-64 p-2 justify-center text-center rounded-r-full bg-gradient-to-r from-indigo-400 to-cyan-400">
            <h1 className="text-white relative w-full ordinal p-2 text-center text-sm  font-normal">
              Rp.<span className="text-2xl font-bold">3</span>Juta
            </h1>
          </div>
          <ul className="list-inside text-gray-600 text-sm p-5">
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              Free Domain .com / .id
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              Unlimited Space
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              Email Domain
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              Dengan cPanel
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              Design Costum
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              Free SSL
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              WhatsApp Chat
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              Integrasi Sosmed
            </li>
            <li className="flex items-center gap-2">
              <Image
                src={CheckList}
                className="w-3 bg-gray-400 rounded-full"
                width={5}
                height={5}
                alt="checklist"
              />
              Request Fitur Tertentu
            </li>
          </ul>
          <Link href="https://wa.me/6285780294072?text=Hai%Iqbal,%Saya%Ingin%Membuat%Website%Dengan%Paket%Diamond">
            <button className="text-center active:text-white hover:text-white active:bg-indigo-400 hover:bg-indigo-400 m-5 mb-10 py-4 px-10 text-indigo-700  border-2 border-indigo-400 text-xs font-semibold justify-center rounded-full">
              Pilih Paket
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PriceUI;
