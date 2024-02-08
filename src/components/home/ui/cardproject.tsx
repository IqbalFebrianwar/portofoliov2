import React from "react";
import Image, { StaticImageData } from "next/image";

const CardProject = ({imageproject, title, deskripsi, badge} : {imageproject : string | StaticImageData, title : string, deskripsi : React.ReactNode, badge : React.ReactNode}) => {
  return (
    <div className="card max-w-xl md:max-w-md bg-transparent border-2 border-gray-200">
      <figure>
        <Image
        loading="lazy"
        alt="Image"
        src={imageproject}
        width={1000}
        height={1000}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-body text-gray-700">
          {title}
        </h2>
        <p className="font-body text-gray-500">{deskripsi}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline text-gray-500">{badge}</div>
        </div>
      </div>
    </div>
  );
};
export default CardProject;
