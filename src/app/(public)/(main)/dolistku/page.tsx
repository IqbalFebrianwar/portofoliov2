import Link from "next/link"

export default function Dolistku() {
    return (
        <div className="w-full lg:px-40 max-lg:px-5 my-10 grid justify-start">
            <div className="w-full justify-start">
                <Link href="/" className="text-blue-700 btn my-5 bg-transparent border border-blue-700 hover:bg-transparent active:bg-transparent">Kembali</Link>
                <div className="card bg-black max-lg:w-72 lg:max-w-2xl">
                    <figure>
                        <img
                            src="https://res.cloudinary.com/df6nytit6/image/upload/v1723342823/dolistku.jpg"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                </div>
                <h1 className="text-gray-700 mt-5 font-bold text-2xl">
                    Dolistku
                </h1>
                <p className="text-gray-500 text-md mb-5">
                    Proyek Aplikasi Berbasis Android Untuk Mencatat List Rencana Sehari-hari.
                </p>
                <div className="my-7">
                    <h1 className="text-gray-950 mt-5 mb-4 font-bold text-md">
                        Kegiatan:
                    </h1>
                    <p className="text-gray-900 text-md mb-2">
                        - Mengembangkan antarmuka pengguna (UI) untuk setiap halaman aplikasi.
                    </p>
                    <p className="text-gray-900 text-md mb-2">
                        - Pengembangan backend untuk menampilkan data secara real-time saat proses input data.
                    </p>
                    <p className="text-gray-900 text-md mb-2">
                        - Menerapkan fitur login dan pendaftaran pengguna.
                    </p>
                    <p className="text-gray-900 text-md mb-2">
                        - Melakukan analisis basis data untuk memenuhi kebutuhan aplikasi..
                    </p>
                </div>
                <div className="my-7">
                    <h1 className="text-gray-950 mt-5 mb-4 font-bold text-md">
                        Teknologi :
                    </h1>
                    <p className="text-gray-900 text-md mb-2">
                        Framework : Flutter
                    </p>
                    <p className="text-gray-900 text-md mb-2">
                        Backend : MonggoDB
                    </p>
                </div>
                <div className="my-7">
                    <h1 className="text-gray-950 mt-5 mb-4 font-bold text-md">
                        Download Apk :
                    </h1>
                    <Link href="https://drive.google.com/file/d/1hHKKfaHMAQ_ANOlh-ogoC9dGGt2xmPLf/view?usp=drive_link" className="text-blue-700 text-md mb-2">
                        Download
                    </Link>
                </div>
                <div className="my-7">
                    <h1 className="text-gray-950 mt-5 mb-4 font-bold text-md">
                        Repositori Github :
                    </h1>
                    <Link href="https://github.com/IqbalFebrianwar/dolistku" className="text-blue-700 text-md mb-2">
                        https://github.com/IqbalFebrianwar/dolistku
                    </Link>
                </div>
            </div>
        </div>
    )
}