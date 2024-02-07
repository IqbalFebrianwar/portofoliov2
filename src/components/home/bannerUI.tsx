import React from "react";
import Image from "next/image";
import HelloIcon from "@/components/svg/hello.svg";
import GithubIcon from "@/components/svg/github.svg";
import LinkedinIcon from "@/components/svg/linkedin.svg";
import InstagramIcon from "@/components/svg/instagram.svg";
import Avatar from "@/components/svg/avatar.svg";

const BannerUI = () => {
  return (
    <div className="w-full flex max-md:grid items-center justify-center">
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
          <h1 className="text-gray-700 text-4xl font-bold font-body">
            I&apos;m <span className="text-blue-700">Iqbal</span> Febrianwar
          </h1>
          <h1 className="text-gray-500 text-md font-body mt-2">
            seorang{" "}
            <span className="text-gray-700 font-semibold font-body">
              Front-end Developer
            </span>{" "}
            yang menyukai design modern dan clean design.
          </h1>
        </div>

        <div className="w-full mt-5 flex">
          <button className="btn font-bold font-body text-md bg-blue-700 text-gray-200 px-10 normal-case border-0">
            hire me
          </button>
          <button className="btn bg-transparent font-body text-md text-gray-500 px-5 border-0 uppercase">
            Resume
          </button>
        </div>
        <div className="w-full">
          <h1 className="font-body mt-5 text-gray-500 text-md">
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
      </div>
      <Image className=" w-2/6 max-md:mt-10 max-md:w-9/12" src={Avatar} width={100} height={100} quality={100} alt="Avatar" />
    </div>
  );
};
export default BannerUI;
