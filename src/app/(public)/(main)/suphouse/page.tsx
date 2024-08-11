import Link from "next/link";

export default function Suphouse() {
    return (
        <div className="w-full lg:px-40 max-lg:px-5 my-10 grid justify-start">
            <div className="w-full justify-start">
                <Link href="/" className="text-blue-700 btn my-5 bg-transparent border border-blue-700 hover:bg-transparent active:bg-transparent">Kembali</Link>
                <div className="card bg-black max-lg:w-72 lg:max-w-2xl">
                    <figure>
                        <img
                            src="https://res.cloudinary.com/df6nytit6/image/upload/v1723204392/image%20porto/suphouse.png"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                </div>
                <h1 className="text-gray-700 mt-5 font-bold text-2xl">
                    Suphouse
                </h1>
                <p className="text-gray-500 text-md mb-5">
                    Proyek Aplikasi Berbasis Website Admin Untuk Mengelola Produk Gudang
                </p>
                <div className="my-7">
                    <h1 className="text-gray-950 mt-5 mb-4 font-bold text-md">
                        Kegiatan:
                    </h1>
                    <p className="text-gray-900 text-md mb-2">
                        - Mengembangkan antarmuka pengguna (UI) untuk setiap halaman aplikasi.
                    </p>
                    <p className="text-gray-900 text-md mb-2">
                        - Melakukan analisis kebutuhan basis data dan merancang basis data menggunakan PostgreSQL.
                    </p>
                    <p className="text-gray-900 text-md mb-2">
                        - Implementasi autentikasi pengguna menggunakan NextAuth dan pengembangan middleware terkait.
                    </p>
                    <p className="text-gray-900 text-md mb-2">
                        - Mengimplementasikan pemanggilan basis data pada halaman server action Next.js untuk mengambil data pada setiap halaman.
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
                        Backend : Nextjs, Next Auth, PrismaORM
                    </p>
                    <p className="text-gray-900 text-md mb-2">
                        Database : PostgreSql
                    </p>
                </div>
                <div className="my-7">
                    <h1 className="text-gray-950 mt-5 mb-4 font-bold text-md">
                        Repositori Github :
                    </h1>
                    <Link href="https://github.com/IqbalFebrianwar/Suphouse" className="text-blue-700 text-md mb-2">
                        https://github.com/IqbalFebrianwar/Suphouse
                    </Link>
                </div>
            </div>
        </div>
    )
}