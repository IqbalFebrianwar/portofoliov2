import React from "react";
import Image from "next/image";

const CardProject = ({image, title, deskripsi, badge} : {image : string, title : React.ReactNode, deskripsi : React.ReactNode, badge : React.ReactNode}) => {
  return (
    <div className="card w-96 bg-transparent border-2 border-gray-500">
      <figure>
        <Image
        loading="lazy"
        alt="Image"
        src={image}
        width={10}
        height={10}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-body text-gray-200">
          {title}
        </h2>
        <p className="font-body text-gray-500">{deskripsi}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline text-gray-200">{badge}</div>
        </div>
      </div>
    </div>
  );
};
export default CardProject;
