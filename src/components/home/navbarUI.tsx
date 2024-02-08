"use client";
import Image from "next/image";
import BurgerIcon from "@/components/svg/burger.svg";
import CloseIcon from "@/components/svg/close.svg";
import { useState } from "react";

const NavbarUI = () => {
  const [Open, setOpen] = useState(true);  
  return (
    <>
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
          <button className="btn max-lg:hidden text-gray-700 hover:bg-transparent shadow-none hover:text-blue-700 active:text-blue-700 active:bg-transparent bg-transparent border-0">
            Home
          </button>
          <button className="btn max-lg:hidden text-gray-700 hover:bg-transparent shadow-none hover:text-blue-700 active:text-blue-700 active:bg-transparent bg-transparent border-0">
            Services
          </button>
          <button className="btn max-lg:hidden text-gray-700 hover:bg-transparent shadow-none hover:text-blue-700 active:text-blue-700 active:bg-transparent bg-transparent border-0">
            Skills
          </button>
          <button className="btn max-lg:hidden text-gray-700 hover:bg-transparent shadow-none hover:text-blue-700 active:text-blue-700 active:bg-transparent bg-transparent border-0">
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
                />
                <Image
                onClick={() => setOpen(!Open)}
                  className="max-lg:w-6 swap-on fill-current lg:hidden"
                  alt="close"
                  src={CloseIcon}
                  width={20}
                  height={20}
                />
          </label>
        </div>
      </div>
      {!Open && (
        <div className="bg-transparent max-w-xl rounded-full right-6 end-0 flex p-3 z-40 top-0 mt-24 backdrop-filter fixed backdrop-blur-3xl">
          <button className="btn lg:hidden text-gray-700 hover:bg-transparent shadow-none hover:text-blue-700 active:text-blue-700 active:bg-transparent bg-transparent border-0">
            Home
          </button>
          <button className="btn lg:hidden text-gray-700 hover:bg-transparent shadow-none hover:text-blue-700 active:text-blue-700 active:bg-transparent bg-transparent border-0">
            Services
          </button>
          <button className="btn lg:hidden text-gray-700 hover:bg-transparent shadow-none hover:text-blue-700 active:text-blue-700 active:bg-transparent bg-transparent border-0">
            Skills
          </button>
          <button className="btn lg:hidden text-gray-700 hover:bg-transparent shadow-none hover:text-blue-700 active:text-blue-700 active:bg-transparent bg-transparent border-0">
            Projects
          </button>
        </div>
      )}
    </>
  );
};
export default NavbarUI;
