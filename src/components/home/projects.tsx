import CardProject from "./ui/cardproject";
import Westock from "@/components/image/westock.png"
import Tehlink from "@/components/image/tehlink.png"
import I6stuff from "@/components/image/i6stuff.png"
import FTI from "@/components/image/fti.png"
import Kiyomidev from "@/components/image/kiyomidev.png"
import Fakestore from "@/components/image/fakestore.png"
import Komikuzen from "@/components/image/komikuzen.png"

const ProjectsUI = () => {
    return (
      <div className="w-full mt-16  grid justify-start">
        <div className="w-full justify-start">
          <h1 className="text-blue-700 font-bold text-xl">Projects</h1>
          <h1 className="text-gray-700 font-bold text-2xl">
            Web Yang Pernah di Kerjakan
          </h1>
          <p className="text-gray-500 text-md mt-5">
            Lihat semua Website Yang Pernah Saya Kerjakan.
          </p>
        </div>
        <div className="mt-10 w-full gap-10 justify-start flex flex-row flex-wrap">
          <CardProject 
            judullink="Apakah Kamu ingin Kunjungi Website ini ?"
            link="https://westockid.vercel.app"
            imageproject={Westock}
            title="Westock"
            deskripsi="Website Image API Search Engine with Unsplash"
            badge="Next.js"
          />
          <CardProject 
            judullink="Apakah Kamu ingin Kunjungi Website ini ?"
            link="https://jspstock.my.id"
            imageproject="https://res.cloudinary.com/df6nytit6/image/upload/v1717938376/jsp_vyf6zg.png"
            title="JspStock"
            deskripsi="Aplikasi Berbasis Website Admin untuk mengelola penjualan produk"
            badge="Next.js"
          />
          <CardProject 
            judullink="Apakah Kamu ingin Kunjungi Website ini ?"
            link="https://tehlink.vercel.app"
            imageproject={Tehlink}
            title="Tehlink"
            deskripsi="Website Landing Page Portofolio Tehlink"
            badge="Next.js"
          />
          <CardProject 
            judullink="Apakah Kamu ingin Kunjungi Website ini ?"
            link="https://demo-i6stuff.vercel.app"
            imageproject={I6stuff}
            title="i6Stuff"
            deskripsi="Website Landing Page E-Commerce"
            badge="Next.js"
          />
          <CardProject 
            judullink="Apakah Kamu ingin Kunjungi Website ini ?"
            link="https://fti.undira.ac.id"
            imageproject={FTI}
            title="Universitas Dian Nusantara"
            deskripsi="Website Landing Page Untuk Fakultas Teknik Informatika Undira"
            badge="Wordpress + Figma"
          />
          <CardProject 
            judullink="Maaf Website Tidak tersedia :("
            link="/"
            imageproject={Kiyomidev}
            title="KiyomiDev"
            deskripsi="Website Landing Page Portofolio Kiyomidev"
            badge="HTML + CSS"
          />
          <CardProject 
            judullink="Apakah Kamu ingin Kunjungi Website ini ?"
            link="https://tehlinkstore.vercel.app"
            imageproject={Fakestore}
            title="Fakestore API"
            deskripsi="Website Fakestore menggunakan API"
            badge="Next.js"
          />
          <CardProject 
            judullink="Apakah Kamu ingin Kunjungi Website ini ?"
            link="https://komiku-zen.vercel.app"
            imageproject={Komikuzen}
            title="Komikuzen"
            deskripsi="Website Untuk Membaca Komik"
            badge="Next.js"
          />
        </div>
      </div>
    );
  };
  export default ProjectsUI;
  