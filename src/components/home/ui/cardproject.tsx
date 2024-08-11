import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CardProject = ({
  title,
  deskripsi,
  link,
}: {
  title: string;
  deskripsi: React.ReactNode;
  judullink: React.ReactNode;
  link: string;
}) => {
  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link href={link} className="card max-w-xl md:max-w-md bg-transparent border-2 border-gray-200">
          <div className="card-body justify-center">
            <h2 className="card-title text-start text-gray-700">{title}</h2>
            <p className="text-gray-500 text-start">{deskripsi}</p>
          </div>
        </Link>
      </motion.button>
    </>
  );
};
export default CardProject;
