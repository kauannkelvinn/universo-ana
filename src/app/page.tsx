"use client";

import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Retrospectiva = dynamic(() => import("@/components/Retrospectiva"));
const Vitrola = dynamic(() => import("@/components/Vitrola"), { ssr: false });
const Hobbies = dynamic(() => import("@/components/Hobbies"));
const PresenteFinal = dynamic(() => import("@/components/PresenteFinal"));

export default function Home() {
  return (
    <main className="w-full bg-[#0a0a0a] overflow-x-hidden">
      <Hero />
      <Retrospectiva />
      <Vitrola />
      <Hobbies />
      <PresenteFinal />
      <Footer />
    </main>
  );
}