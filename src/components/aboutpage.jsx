"use client";

import ParticleComponent from "./particles";
import NavbarComponent from "@/components/navbar";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import Image from "next/image";
import imageIqbal from "@/app/images/iqbale.jpg"

const AboutpageComponent = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="w-full justify-center">
      <ParticleComponent />
      <NavbarComponent />
      <div className="w-full mt-5 justify-center px-5">
        <div className="w-full mt-5 justify-center px-5">
          <div data-aos-duration="500" data-aos="fade-right">
           <h1 className="text-xl font-bold">Tentang</h1>
          </div>
          <div data-aos-duration="1000" data-aos="fade-right">
           <Image
            src={imageIqbal}
            width={200}
            height={200}
            alt="Iqbal Image"
            className="mt-5 rounded-lg"
           />
          </div>
          <div data-aos-duration="2000" data-aos="fade-right">
           <h1 className="text-xl mt-10 font-bold">Pendidikan</h1>
           <p className="text-md mt-3 font-bold">Universitas Dian Nusantara</p>
           <p className="text-sm">Teknik Informatika</p>
           <p className="text-sm">2021 - Sekarang</p>
           <p className="text-md mt-3 font-bold">SMK Tamansiswa 2 Jakarta</p>
           <p className="text-sm">Rekayasa Perangkat Lunak</p>
           <p className="text-sm">2019 - 2021</p>
          </div>
          <div data-aos-duration="2000" data-aos="fade-left">
           <h1 className="text-xl mt-10 font-bold">Pengalaman</h1>
           <p className="text-md mt-3 font-bold">Universitas Dian Nusantara</p>
           <p className="text-sm">Magang | Wordpress Design UI</p>
           <li className="text-sm mt-2">Membuat design UI menggunakan tools figma</li>
           <li className="text-sm">Slincing Design UI ke Wordpress</li>
           <p className="text-sm mt-2">Keahlian : Figma, Wordpress</p>
           <p className="text-md mt-7 font-bold">Komikuzen</p>
           <p className="text-sm">Front End Developer</p>
           <li className="text-sm mt-2">Membuat Website Design Website Komik menggunakan framework</li>
           <p className="text-sm mt-2">Keahlian : HTML5, CSS3 Tailwind CSS, React JS, Next JS</p>
           <p className="mb-20"></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutpageComponent;
