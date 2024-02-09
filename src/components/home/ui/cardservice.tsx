import React from "react";
import Image from "next/image";

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
    <div className="card md:max-w-md max-md:w-72 border bg-white">
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
    </div>
  );
};
export default CardService;
