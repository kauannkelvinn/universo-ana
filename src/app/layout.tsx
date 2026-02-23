import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const vcrFont = localFont({
  src: "./fonts/vcr.ttf",
  variable: "--font-vcr",
});

const momsFont = localFont({
  src: "./fonts/moms.ttf",
  variable: "--font-moms",
});

const blackhawkFont = localFont({
  src: "./fonts/blackhawk.otf",
  variable: "--font-blackhawk",
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
    <html lang="pt-BR" className={`${vcrFont.variable} ${momsFont.variable} ${blackhawkFont.variable}`}>
      <body className="bg-[#0a0a0a] text-[#e0e0e0] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}