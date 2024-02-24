import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const CardProject = ({
  imageproject,
  title,
  deskripsi,
  badge,
  judullink,
  link,
}: {
  imageproject: string | StaticImageData;
  title: string;
  deskripsi: React.ReactNode;
  judullink: React.ReactNode;
  badge: React.ReactNode;
  link: string;
}) => {
  const modalId = `modal_${title.replace(/\s/g, '_')}`;
  const handleLinkClick = () => {
    window.location.href = link;
  };

  const openModal = () => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) modal.showModal();
  };
  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="card max-w-xl md:max-w-md bg-transparent border-2 border-gray-200"
        onClick={openModal}
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
        <div className="card-body justify-center">
          <h2 className="card-title text-start text-gray-700">{title}</h2>
          <p className="text-gray-500 text-start">{deskripsi}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline text-end text-gray-500">{badge}</div>
          </div>
        </div>
      </motion.button>
      <dialog id={modalId}className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg"></h3>
          <p className="py-4 font-bold text-gray-800">{judullink}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-white text-gray-800 hover:text-white active:text-white">Tutup</button>
            </form>
            <button onClick={handleLinkClick} className="btn bg-blue-700 text-white border-0">Iya</button>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default CardProject;
