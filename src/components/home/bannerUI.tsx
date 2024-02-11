import React from "react";
import Image from "next/image";
import HelloIcon from "@/components/svg/hello.svg";
import GithubIcon from "@/components/svg/github.svg";
import LinkedinIcon from "@/components/svg/linkedin.svg";
import InstagramIcon from "@/components/svg/instagram.svg";
import Avatar from "@/components/svg/avatar.svg";
import Link from "next/link";
import { motion } from "framer-motion";

const BannerUI = () => {
  return (
    <div className="w-full flex max-md:grid items-center justify-center">
      <div className="w-full">
        <div className="w-full flex">
          <motion.h1
            initial={{ opacity: 0, x: -170 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
            }}
            className="text-gray-500 text-2xl"
          >
            hi
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              alt="hello"
              width={20}
              height={20}
              src={HelloIcon}
              className=" w-8"
              quality={10}
            />
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
          }}
          className="gap-y-4"
        >
          <h1 className="text-gray-700 text-4xl font-bold ">
            I&apos;m <span className="text-blue-700">Iqbal</span> Febrianwar
          </h1>
          <motion.h1
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
            }}
            className="text-gray-500 text-md  mt-2"
          >
            seorang{" "}
            <span className="text-gray-700 font-semibold ">
              Front-end Developer
            </span>{" "}
            yang menyukai design modern dan clean design.
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full mt-5 flex"
        >
          <Link
            href="https://wa.me/6285780294072?text=Hai%20Mas%20Iqbal,%20Saya%20Ingin%20Bertanya%20Seputar%20Website"
            className="btn font-bold active:text-blue-700 hover:text-blue-700 active:bg-white hover:bg-white  shadow-none text-md bg-blue-700 text-gray-200 px-10 normal-case border-0"
          >
            hire me
          </Link>
          <button className="btn active:text-blue-700 hover:text-blue-700 active:bg-white hover:bg-white bg-transparent shadow-none  text-md text-gray-500 px-5 border-0 uppercase">
            Resume
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -160 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
          }}
          className="w-full"
        >
          <h1 className=" mt-5 text-gray-500 text-md">sosial media: </h1>
          <div className="py-2 px-2 gap-x-2 flex">
            <Link href="https://github.com/IqbalFebrianwar">
              <Image
                loading="lazy"
                alt="sosmed"
                width={20}
                height={20}
                quality={10}
                src={GithubIcon}
                className="w-6"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/iqbal-febrianwar-366094224/">
              <Image
                loading="lazy"
                alt="sosmed"
                width={20}
                height={20}
                quality={10}
                src={LinkedinIcon}
                className="w-6"
              />
            </Link>
            <Link href="https://www.instagram.com/iqbale.fr/">
              <Image
                alt="sosmed"
                width={20}
                height={20}
                src={InstagramIcon}
                quality={10}
                className="w-6"
                loading="lazy"
              />
            </Link>
          </div>
        </motion.div>
      </div>
      <Image
        className=" w-2/6 max-md:mt-10 max-md:w-9/12"
        src={Avatar}
        width={100}
        height={100}
        quality={20}
        alt="Avatar"
        priority
      />
    </div>
  );
};
export default BannerUI;
