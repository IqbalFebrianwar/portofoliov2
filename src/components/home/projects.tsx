import CardProject from "./ui/cardproject";

const ProjectsUI = () => {
  return (
    <div className="w-full mt-16 grid justify-start">
      <div className="w-full justify-start">
        <h1 className="text-blue-700 font-bold text-xl">Projects</h1>
        <h1 className="text-gray-700 font-bold text-2xl">
          Proyek Yang Pernah di Kerjakan
        </h1>
        <p className="text-gray-500 text-md mb-5">
          Klik Jika Ingin Melihat Detail.
        </p>
        <p className="text-gray-500 text-md mt-5">
          Lihat semua Proyek Yang Pernah Saya Kerjakan.
        </p>
      </div>
      <div className="mt-10 w-full gap-10 justify-start flex flex-row flex-wrap">
        <CardProject
          judullink="Apakah Kamu ingin Kunjungi Website ini ?"
          link="/dolistku"
          title="dolistku"
          deskripsi="Aplikasi Berbasis Android Untuk Mencatat List Rencana Sehari-hari."
        />
        <CardProject
          judullink="Apakah Kamu ingin Kunjungi Website ini ?"
          link="/sugihwaras"
          title="Sugihwaras"
          deskripsi="Aplikasi Berbasis Website Admin Untuk Mengelola Toko Online"
        />
        <CardProject
          judullink="Apakah Kamu ingin Kunjungi Website ini ?"
          link="/suphouse"
          title="Suphouse"
          deskripsi="Aplikasi Berbasis Website Admin Untuk Mengelola Produk Gudang"
        />
        <CardProject
          judullink="Apakah Kamu ingin Kunjungi Website ini ?"
          link="/tsa"
          title="Tsa"
          deskripsi="Aplikasi Berbasis Website Admin Untuk Mengelola Absensi dan Penilaian Siswa"
        />
        <CardProject
          judullink="Apakah Kamu ingin Kunjungi Website ini ?"
          link="/westock"
          title="Westock"
          deskripsi="Website Image API Search Engine with Unsplash"
        />
        <CardProject
          judullink="Apakah Kamu ingin Kunjungi Website ini ?"
          link="/jsp"
          title="JspStock"
          deskripsi="Aplikasi Berbasis Website Admin untuk mengelola penjualan produk"
        />
        <CardProject
          judullink="Apakah Kamu ingin Kunjungi Website ini ?"
          link="/i6stuff"
          title="i6Stuff"
          deskripsi="Website Landing Page E-Commerce"
        />
      </div>
    </div>
  );
};
export default ProjectsUI;
