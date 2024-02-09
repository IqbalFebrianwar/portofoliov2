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
            imageproject={Westock}
            title="Westock"
            deskripsi="Website Image API Search Engine with Unsplash"
            badge="Next.js"
          />
          <CardProject 
            imageproject={Tehlink}
            title="Tehlink"
            deskripsi="Website Landing Page Portofolio Tehlink"
            badge="Next.js"
          />
          <CardProject 
            imageproject={I6stuff}
            title="i6Stuff"
            deskripsi="Website Landing Page E-Commerce"
            badge="Next.js"
          />
          <CardProject 
            imageproject={FTI}
            title="Universitas Dian Nusantara"
            deskripsi="Website Landing Page Untuk Fakultas Teknik Informatika Undira"
            badge="Wordpress + Figma"
          />
          <CardProject 
            imageproject={Kiyomidev}
            title="KiyomiDev"
            deskripsi="Website Landing Page Portofolio Kiyomidev"
            badge="HTML + CSS"
          />
          <CardProject 
            imageproject={Fakestore}
            title="Fakestore API"
            deskripsi="Website Fakestore menggunakan API"
            badge="Next.js"
          />
          <CardProject 
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
  