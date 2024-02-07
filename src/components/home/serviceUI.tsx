import CardService from "./ui/cardservice";
import Perusahaan from "@/components/svg/perusahaan.svg";
import Bisnis from "@/components/svg/bisnis.svg";
import Marketing from "@/components/svg/marketing.svg";
import Personal from "@/components/svg/personal.svg";

const ServiceUI = () => {
  return (
    <div className="w-full mt-14 grid justify-start">
      <div className="w-full grid">
        <h1 className="text-blue-700 font-body text-xl font-bold">Services</h1>
        <h1 className="text-gray-700 font-body font-bold text-2xl">
          Jasa Web Development
        </h1>
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
        <div className="card md:max-w-md max-md:w-72 border bg-blue-700">
          <div className="card-body">
            <h2 className="card-title font-body text-white max-md:text-lg">
              Dan Lain-Lainnya.
            </h2>
            <p className=" text-white font-body max-md:text-sm">
              Klik Untuk Pesan Sekarang
            </p>
            <button className="btn bg-white text-gray-700 border-0 shadow-none w-48">Pesan Sekarang</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceUI;
