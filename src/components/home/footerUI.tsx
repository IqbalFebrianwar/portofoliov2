import Image from "next/image";
import GithubIcon from "@/components/svg/github.svg";
import LinkedinIcon from "@/components/svg/linkedin.svg";
import InstagramIcon from "@/components/svg/instagram.svg";
import Link from "next/link";

const FooterUI = () => {
  return (
    <footer className="footer footer-start p-10 mt-20 bg-white text-gray-700">
      <nav>
        <h6 className="footer-title">Services</h6>
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
  );
};
export default FooterUI;
