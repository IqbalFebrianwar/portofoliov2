import Image from "next/image";
import BurgerIcon from "@/components/svg/burger.svg";
import HelloIcon from "@/components/svg/hello.svg";
import GithubIcon from "@/components/svg/github.svg";
import LinkedinIcon from "@/components/svg/linkedin.svg";
import InstagramIcon from "@/components/svg/instagram.svg";

export default function Home() {
  return (
    <main className="w-full flex">
      {/* Navbar */}
      <div className="navbar justify-between top-0 z-20 lg:px-40 max-md:px-10 py-5 backdrop-filter fixed backdrop-blur-3xl">
        <div className="flex-1">
          <span className="font-body bg-transparent border-0 font-bold text-white max-md:text-2xl lg:text-3xl">
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

      {/* content */}
      <div className="w-full mt-36 px-5 justify-center">
        {/* Banner */}
        <div className="w-full">
          <div className="w-full flex">
            <h1 className="text-gray-500 text-2xl">hi</h1>
            <Image
              alt="hello"
              width={20}
              height={20}
              src={HelloIcon}
              className=" w-8"
            />
          </div>
          <div className="gap-y-4">
            <h1 className="text-gray-200 text-4xl font-bold font-body">
              I&apos;m <span className="text-blue-700">Iqbal</span> Febrianwar
            </h1>
            <h1 className="text-gray-500 text-md font-body mt-2">
              seorang{" "}
              <span className="text-gray-200 font-semibold font-body">
                Front-end Developer
              </span>{" "}
              yang menyukai design modern dan clean design.
            </h1>
          </div>
          <div className="w-full">
            <h1 className="font-body mt-2 text-gray-500 text-md">
              sosial media:{" "}
            </h1>
            <div className="py-2 px-2 gap-x-2 flex">
              <button>
                <Image
                  alt="sosmed"
                  width={20}
                  height={20}
                  src={GithubIcon}
                  className="w-6"
                />
              </button>
              <button>
                <Image
                  alt="sosmed"
                  width={20}
                  height={20}
                  src={LinkedinIcon}
                  className="w-6"
                />
              </button>
              <button>
                <Image
                  alt="sosmed"
                  width={20}
                  height={20}
                  src={InstagramIcon}
                  className="w-6"
                />
              </button>
            </div>
          </div>
          <div className="w-full mt-5 flex">
            <button className="btn font-bold font-body text-md bg-blue-700 text-gray-200 px-10 normal-case border-0">
              hire me
            </button>
            <button className="btn bg-transparent font-body text-md text-gray-500 px-5 border-0 uppercase">
              Resume
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
