import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CardService = ({
  bgcolor,
  icon,
  title,
  deks,
}: {
  bgcolor: React.ReactNode;
  icon: string;
  title: string;
  deks: React.ReactNode;
}) => {
  return (
    <motion.div 
    initial={{opacity:0, scale:0}}
    whileInView={{opacity:1, scale:1}}
    transition={{duration:0.6}}
    viewport={{once:true}}
    className="card md:max-w-md max-md:w-72 border bg-white">
      <div className="card-body">
        <div className={`p-2 w-10 rounded-lg ${bgcolor}`}>
          <Image
            loading="lazy"
            src={icon}
            alt="icon layanan"
            className="w-10"
            quality={50}
          />
        </div>
        <h2 className="card-title text-gray-700 max-md:text-lg">
          {title}
        </h2>
        <p className=" text-gray-500 max-md:text-sm">{deks}</p>
      </div>
    </motion.div>
  );
};
export default CardService;
