import CardService from "./ui/cardservice";
import Perusahaan from "@/components/svg/perusahaan.svg";
import Bisnis from "@/components/svg/bisnis.svg";
import Marketing from "@/components/svg/marketing.svg";
import Personal from "@/components/svg/personal.svg";
import Link from "next/link";
import { motion } from "framer-motion";

const ServiceUI = () => {
  return (
    <div className="w-full mt-16 grid justify-start">
      <div className="w-full grid">
        <h1 className="text-blue-700 text-xl font-bold">Services</h1>
        <h1 className="text-gray-700 font-bold text-2xl">
          Jasa Web Development
        </h1>
        <p className="text-gray-500 text-md mt-5">
          Lihat semua Jasa Yang Sudah Saya Sediakan.
        </p>
      </div>
      <div className="mt-10 w-full justify-center grid md:grid-cols-3 max-md:gap-y-5 md:gap-5">
        <CardService
          icon={Perusahaan}
          bgcolor="bg-blue-700"
          title="Website Perusahaan"
          deks="Membuat Website Untuk Perusahaan dan instasi."
        />
        <CardService
          icon={Marketing}
          bgcolor="bg-blue-600"
          title="Website Marketing"
          deks="Membuat Website Untuk Penjualan."
        />
        <CardService
          icon={Bisnis}
          bgcolor="bg-blue-500"
          title="Website UMKM / Bisnis"
          deks="Membuat Website Untuk Website Berbagai Bisnis Tradisional Maupun Modern."
        />
        <CardService
          icon={Personal}
          bgcolor="bg-blue-400"
          title="Website Personal"
          deks="Membuat Website Untuk Website Personal Branding dan Portofolio Diri."
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card md:max-w-md max-md:w-72 border bg-blue-700"
        >
          <div className="card-body">
            <h2 className="card-title text-white max-md:text-lg">
              Dan Lain-Lainnya.
            </h2>
            <p className=" text-white max-md:text-sm">
              Klik Untuk Pesan Sekarang
            </p>
            <Link
              href="https://wa.me/6285780294072?text=Hai%20Iqbal,%20Saya%20Ingin%20Pesan%20Jasa%20Pembuatan%20Website"
              className="btn active:text-white hover:text-white active:bg-blue-500 hover:bg-blue-500 bg-white text-gray-700 border-0 shadow-none w-48"
            >
              Pesan Sekarang
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default ServiceUI;
