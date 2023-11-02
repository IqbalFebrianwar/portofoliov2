"use client";
import NavbarComponent from "@/components/navbar";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import ParticleComponent from "./particles";

const HomepageComponent = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Web Developer", " ", "Full Stack Web Developer", " ", "Full Stack Web Developer", " ", "Full Stack Web Developer"],
      typeSpeed: 70,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="w-full justify-center">
      <ParticleComponent />
      <NavbarComponent />
      <div className="w-full mt-20 justify-center px-5">
        <div data-aos-duration="1000" data-aos="fade-right" className="">
          <p className="text-sm text-blue-300">Hai,👋🏼 Nama saya</p>
          <h2 className="text-5xl">Iqbal Febrianwar</h2>
          <div className="mt-3">
            <span ref={el} className="text-lg font-semibold text-blue-300">
              ""
            </span>
          </div>
          <h4 className="text-sm mt-5">
            Saya seorang full stack web developer yang memiliki kemampuan desain
            web responsif dan UI yang indah dan membangun web dinamis. saya suka
            mempelajari hal-hal baru di bidang saya. Bagi saya, bekerja adalah
            suatu tanggung jawab yang dilaksanakan secara hati-hati dan
            semaksimal mungkin, baik secara pribadi maupun kerja sama tim
          </h4>
          <button className="btn mt-5 btn-outline rounded-xl hover:bg-blue-300 hover:text-black active:bg-blue-300 active:text-black">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomepageComponent;
