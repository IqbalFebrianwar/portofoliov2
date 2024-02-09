import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iqbal Febrianwar - Front End dan Jasa Website Murah",
  description: "Situs portofolio Iqbal Febrianwar yang menawarkan layanan jasa pembuatan website dengan harga terjangkau.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white font-body">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
