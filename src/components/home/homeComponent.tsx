"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import BurgerIcon from "@/components/svg/burger.svg";
import CloseIcon from "@/components/svg/close.svg";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const MainUI = dynamic(() => import("@/components/home/mainUI"));
const ContentUI = dynamic(() => import("@/components/home/contentUI"));
const BannerUI = dynamic(() => import("@/components/home/bannerUI"));
const ServiceUI = dynamic(() => import("@/components/home/serviceUI"));
const SkillsUI = dynamic(() => import("@/components/home/skillsUI"));
const ProjectsUI = dynamic(() => import("@/components/home/projects"));
const PriceUI = dynamic(() => import("@/components/home/price"));
const FooterUI = dynamic(() => import("@/components/home/footerUI"));
const KonsultasiUI = dynamic(() => import("@/components/home/konsultanUI"));

export default function HomeComponent() {
  const [Open, setOpen] = useState(true);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const serviceRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  return (
    <MainUI>
      <div className="navbar justify-between top-0 z-20 lg:px-40 max-md:px-10 py-5 backdrop-filter fixed backdrop-blur-3xl">
        <div className="flex-1">
          <span className="bg-transparent border-0 font-bold text-gray-900 max-md:text-2xl lg:text-3xl">
            iqbal
          </span>
          <span className="bg-transparent border-0 text-blue-700 max-md:text-2xl lg:text-3xl">
            dev
          </span>
        </div>
        <div className="flex-none">
          <button
            onClick={() => {
              homeRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn max-lg:hidden text-gray-700 hover:bg-transparent shadow-none hover:text-blue-700 active:text-blue-700 active:bg-transparent bg-transparent border-0"
          >
            Home
          </button>
          <button
            onClick={() => {
              serviceRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn max-lg:hidden text-gray-700 hover:bg-transparent shadow-none hover:text-blue-700 active:text-blue-700 active:bg-transparent bg-transparent border-0"
          >
            Services
          </button>
          <button
            onClick={() => {
              skillsRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn max-lg:hidden text-gray-700 hover:bg-transparent shadow-none hover:text-blue-700 active:text-blue-700 active:bg-transparent bg-transparent border-0"
          >
            Skills
          </button>
          <button
            onClick={() => {
              projectsRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn max-lg:hidden text-gray-700 hover:bg-transparent shadow-none hover:text-blue-700 active:text-blue-700 active:bg-transparent bg-transparent border-0"
          >
            Projects
          </button>
          <label className="btn btn-circle swap swap-rotate lg:hidden bg-transparent shadow-none border-0">
            <input type="checkbox" />
            <Image
              onClick={() => setOpen(!Open)}
              className="max-lg:w-8 swap-off fill-current lg:hidden"
              alt="burger"
              src={BurgerIcon}
              width={40}
              height={40}
              loading="lazy"
              quality={40}
            />
            <Image
              onClick={() => setOpen(!Open)}
              className="max-lg:w-6 swap-on fill-current lg:hidden"
              alt="close"
              loading="lazy"
              src={CloseIcon}
              width={20}
              height={20}
              quality={40}
            />
          </label>
        </div>
      </div>
      {!Open && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="bg-transparent max-w-xl rounded-full right-6 end-0 flex p-3 z-40 top-0 mt-24 backdrop-filter fixed backdrop-blur-3xl"
        >
          <button
            onClick={() => {
              homeRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn lg:hidden text-gray-700 hover:bg-transparent shadow-none hover:text-blue-700 active:text-blue-700 active:bg-transparent bg-transparent border-0"
          >
            Home
          </button>
          <button
            onClick={() => {
              serviceRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn lg:hidden text-gray-700 hover:bg-transparent shadow-none hover:text-blue-700 active:text-blue-700 active:bg-transparent bg-transparent border-0"
          >
            Services
          </button>
          <button
            onClick={() => {
              skillsRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn lg:hidden text-gray-700 hover:bg-transparent shadow-none hover:text-blue-700 active:text-blue-700 active:bg-transparent bg-transparent border-0"
          >
            Skills
          </button>
          <button
            onClick={() => {
              projectsRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn lg:hidden text-gray-700 hover:bg-transparent shadow-none hover:text-blue-700 active:text-blue-700 active:bg-transparent bg-transparent border-0"
          >
            Projects
          </button>
        </motion.div>
      )}
      <div ref={homeRef} className="mb-32"></div>
      <ContentUI>
        <BannerUI />
        <div ref={serviceRef} className="mb-32"></div>
        <ServiceUI />
        <div ref={skillsRef} className="mb-32"></div>
        <SkillsUI />
        <div ref={projectsRef} className="mb-32"></div>
        <ProjectsUI />
        <PriceUI />
        <KonsultasiUI />
      </ContentUI>
      <FooterUI />
    </MainUI>
  );
}
