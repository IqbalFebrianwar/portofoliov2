import Image from "next/image";
import GithubIcon from "@/components/svg/githubwhite.svg";
import LinkedinIcon from "@/components/svg/linkedinwhite.svg";
import InstagramIcon from "@/components/svg/instagramwhite.svg";
import Link from "next/link";

const FooterUI = () => {
  return (
    <div className="w-full p-10 bg-blue-700 max-md:px-5 px-48 justify-center">
      <div className="gap-y-4">
          <h1 className="text-white text-xl font-bold ">
            IqbalDev
          </h1>
          <h1 className="text-white text-md  mt-2">
            Seorang{" "}
            <span className="text-whitefont-semibold ">
              Fullstack Developer
            </span>{" "}
            yang menyukai design modern dan clean design.
          </h1>
          <h1 className="text-white text-md">
             dan Saya Menyediakan Layanan Jasa Pembuatan Website dengan Design Modern dan Responsive.
          </h1>
        </div>
      <footer className="footer footer-start mt-10 text-white">
        <nav>
          <h6 className="footer-title text-white">Services</h6>
          <a className="link link-hover">Website Perusahaan</a>
          <a className="link link-hover">Website Marketing</a>
          <a className="link link-hover">Website UMKM / Bisnis</a>
          <a className="link link-hover">Website Personal</a>
        </nav>
        <nav>
          <h6 className="footer-title">Price List</h6>
          <a className="link link-hover">Paket Silver</a>
          <a className="link link-hover">Paket Gold</a>
          <a className="link link-hover">Paket Diamond</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <div className="py-2 px-2 gap-x-2 flex">
              <Link href="https://github.com/IqbalFebrianwar">
                <Image
                  loading="lazy"
                  alt="sosmed"
                  width={20}
                  height={20}
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
                  className="w-6"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - Iqbal Febrianwar</p>
        </aside>
      </footer>
    </div>
  );
};
export default FooterUI;
