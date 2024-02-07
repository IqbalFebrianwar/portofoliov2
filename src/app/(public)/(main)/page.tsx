import Image from "next/image";
import BurgerIcon from "@/components/svg/burger.svg";
import dynamic from "next/dynamic";

const MainUI = dynamic(() => import("@/components/home/mainUI"));
const ContentUI = dynamic(() => import("@/components/home/contentUI"));
const BannerUI = dynamic(() => import("@/components/home/bannerUI"));
const ServiceUI = dynamic(() => import("@/components/home/serviceUI"));

export default function Home() {
  return (
    <MainUI>
      {/* Navbar */}
      <div className="navbar justify-between top-0 z-20 lg:px-40 max-md:px-10 py-5 backdrop-filter fixed backdrop-blur-3xl">
        <div className="flex-1">
          <span className="font-body bg-transparent border-0 font-bold text-gray-900 max-md:text-2xl lg:text-3xl">
            iqbal
          </span>
          <span className="font-body bg-transparent border-0 text-blue-700 max-md:text-2xl lg:text-3xl">
            dev
          </span>
        </div>
        <div className="flex-none">
          <button className="btn btn-square bg-transparent border-0">
            <Image
              className="max-lg:w-8 lg:hidden"
              alt="burger"
              src={BurgerIcon}
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>
      <ContentUI>
        <BannerUI />
        <ServiceUI />
      </ContentUI>
    </MainUI>
  );
}
