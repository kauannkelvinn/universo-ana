import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const vcrFont = localFont({
  src: "./fonts/vcr.ttf",
  variable: "--font-vcr",
});

const khTeka = localFont({
  src: [
    {
      path: "./fonts/khtekaregular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/khtekamedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/khtekabold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/khtekablack.woff2", // Black sem itálico!
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/khtekalight.woff2", // Black sem itálico!
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-kh-teka",
});

export const metadata: Metadata = {
  title: "Projeto 25/02",
  description: "Uma surpresa especial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${vcrFont.variable} ${khTeka.variable}`}>
      <body className="bg-[#0a0a0a] text-[#e0e0e0] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}