"use client";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const NavbarComponent = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="navbar">
            <div className="flex-none">
              <button data-aos="flip-up" className="btn btn-square">
                <label htmlFor="my-drawer" className="btn drawer-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </button>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li className="mt-5">
              <Link href="/">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/about">
                Tentang
              </Link>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Kontak</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default NavbarComponent;
