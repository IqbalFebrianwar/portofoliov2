import Link from "next/link";

export default function i6stuff() {
    return(
        <div className="w-full lg:px-40 max-lg:px-5 my-10 grid justify-start">
            <div className="w-full justify-start">
                <Link href="/" className="text-blue-700 btn my-5 bg-transparent border border-blue-700 hover:bg-transparent active:bg-transparent">Kembali</Link>
                <div className="card bg-black max-lg:w-72 lg:max-w-2xl">
                    <figure>
                        <img
                            src="https://res.cloudinary.com/df6nytit6/image/upload/v1723203917/image%20porto/i6stuff_yvsmm3.png"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                </div>
                <h1 className="text-gray-700 mt-5 font-bold text-2xl">
                    i6Stuff
                </h1>
                <p className="text-gray-500 text-md mb-5">
                    Proyek dari Client Aplikasi Berbasis Website Admin Untuk E-Commerce Baju
                </p>
                <div className="my-7">
                    <h1 className="text-gray-950 mt-5 mb-4 font-bold text-md">
                        Kegiatan:
                    </h1>
                    <p className="text-gray-900 text-md mb-2">
                        - Mengembangkan antarmuka pengguna (UI) untuk setiap halaman aplikasi.
                    </p>
                </div>
                <div className="my-7">
                    <h1 className="text-gray-950 mt-5 mb-4 font-bold text-md">
                        Teknologi :
                    </h1>
                    <p className="text-gray-900 text-md mb-2">
                        Bahasa : Javascript
                    </p>
                    <p className="text-gray-900 text-md mb-2">
                        Frontend : Reactjs, Nextjs, Tailwindcss, DaisyUI
                    </p>
                </div>
                <div className="my-7">
                    <h1 className="text-gray-950 mt-5 mb-4 font-bold text-md">
                        Repositori Github :
                    </h1>
                    <Link href="https://github.com/IqbalFebrianwar/demo-i6stuff" className="text-blue-700 text-md mb-2">
                        https://github.com/IqbalFebrianwar/demo-i6stuff
                    </Link>
                </div>
                <div className="my-7">
                    <h1 className="text-gray-950 mt-5 mb-4 font-bold text-md">
                        Demo :
                    </h1>
                    <Link href="https://demo-i6stuff.vercel.app/" className="text-blue-700 text-md mb-2">
                        https://demo-i6stuff.vercel.app/
                    </Link>
                </div>
            </div>
        </div>
    )
}