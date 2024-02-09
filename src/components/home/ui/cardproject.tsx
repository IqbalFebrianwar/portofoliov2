import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

const CardProject = ({
  imageproject,
  title,
  deskripsi,
  badge,
}: {
  imageproject: string | StaticImageData;
  title: string;
  deskripsi: React.ReactNode;
  badge: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="card max-w-xl md:max-w-md bg-transparent border-2 border-gray-200"
    >
      <figure>
        <Image
          loading="lazy"
          alt="Image"
          src={imageproject}
          width={1000}
          height={1000}
          quality={80}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-gray-700">{title}</h2>
        <p className="text-gray-500">{deskripsi}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline text-gray-500">{badge}</div>
        </div>
      </div>
    </motion.div>
  );
};
export default CardProject;
