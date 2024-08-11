import Link from "next/link";

export default function Sugihwaras() {
    return (
        <div className="w-full lg:px-40 max-lg:px-5 my-10 grid justify-start">
            <div className="w-full justify-start">
                <Link href="/" className="text-blue-700 btn my-5 bg-transparent border border-blue-700 hover:bg-transparent active:bg-transparent">Kembali</Link>
                <div className="card bg-black max-lg:w-72 lg:max-w-2xl">
                    <figure>
                        <img
                            src="https://res.cloudinary.com/df6nytit6/image/upload/v1723204392/image%20porto/sugihwaras.png"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                </div>
                <h1 className="text-gray-700 mt-5 font-bold text-2xl">
                    Sugihwaras
                </h1>
                <p className="text-gray-500 text-md mb-5">
                    Proyek dari Client Membuat Aplikasi Berbasis Website Untuk Mengelola E-Commerce Penjualan Baju, Serta Membuat Landing Page untuk Menampilkan Data Produk.
                </p>
                <div className="my-7">
                    <h1 className="text-gray-950 mt-5 mb-4 font-bold text-md">
                        Kegiatan:
                    </h1>
                    <p className="text-gray-900 text-md mb-2">
                        - Mengembangkan antarmuka pengguna (UI) untuk setiap halaman aplikasi.
                    </p>
                    <p className="text-gray-900 text-md mb-2">
                        - Melakukan analisis kebutuhan basis data dan merancang basis data menggunakan PostgreSQL dan Prisma.
                    </p>
                    <p className="text-gray-900 text-md mb-2">
                        - Implementasi autentikasi pengguna menggunakan NextAuth dan pengembangan middleware.
                    </p>
                    <p className="text-gray-900 text-md mb-2">
                        - Pengembangan REST API menggunakan NestJS dan Prisma.
                    </p>
                    <p className="text-gray-900 text-md mb-2">
                        - Mengimplementasikan pemanggilan basis data pada halaman server action Next.js untuk mengambil data pada setiap halaman.
                    </p>
                    <p className="text-gray-900 text-md mb-2">
                        - Integrasi API Cloudinary dengan kode untuk menyimpan gambar di konsol Cloudinary.
                    </p>
                </div>
                <div className="my-7">
                    <h1 className="text-gray-950 mt-5 mb-4 font-bold text-md">
                        Teknologi :
                    </h1>
                    <p className="text-gray-900 text-md mb-2">
                        Bahasa : Typescript
                    </p>
                    <p className="text-gray-900 text-md mb-2">
                        Frontend : Reactjs, Nextjs, Tailwindcss, DaisyUI
                    </p>
                    <p className="text-gray-900 text-md mb-2">
                        Backend : Next js, Nest js, Next Auth, PrismaORM
                    </p>
                    <p className="text-gray-900 text-md mb-2">
                        Database : PostgreSql
                    </p>
                </div>
                <div className="my-7 grid">
                    <h1 className="text-gray-950 mt-5 mb-4 font-bold text-md">
                        Repositori Github :
                    </h1>
                    <Link href="https://github.com/sugihwaras16/frontend-sugihwaras" className="text-blue-700 text-md mb-2">
                        https://github.com/sugihwaras16/frontend-sugihwaras
                    </Link>
                    <Link href="https://github.com/IqbalFebrianwar/backend-sugihwaras" className="text-blue-700 text-md mb-2">
                        https://github.com/IqbalFebrianwar/backend-sugihwaras
                    </Link>
                </div>
                <div className="my-7">
                    <h1 className="text-gray-950 mt-5 mb-4 font-bold text-md">
                        Demo :
                    </h1>
                    <Link href="https://sugihwaras.vercel.app" className="text-blue-700 text-md mb-2">
                        https://sugihwaras.vercel.app
                    </Link>
                </div>
            </div>
        </div>
    )
}