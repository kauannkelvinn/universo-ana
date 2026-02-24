"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Hobbies() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-item", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full max-w-5xl mx-auto px-6 py-32 z-10">

      {/* Título */}
      <div className="text-center mb-16">
        <h2 className="font-black text-5xl md:text-7xl text-[#e0e0e0] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] uppercase">
          O QUE ELA <span className="text-[#ff007f] drop-shadow-[0_0_15px_rgba(255,0,127,0.5)]">AMA</span>
        </h2>
        <p className="text-zinc-400 font-regular mt-4 text-xl md:text-2xl">
          A curadoria das vibes, dos jogos aos sons que batem forte.
        </p>
      </div>

      {/* BENTO GRID MOSAICO (Perfeitamente encaixado) */}
      <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[250px] gap-4">

        {/* 1. THE WEEKND (Quadrado) */}
        <div className="bento-item relative rounded-3xl overflow-hidden border-2 border-zinc-800/50 group bg-zinc-900">
          <Image src="/imagens/albuns/afterhours.jpg" alt="The Weeknd" fill className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
        </div>

        {/* 2. BEAVIS & BUTTHEAD (Quadrado) */}
        <div className="bento-item relative rounded-3xl overflow-hidden border-2 border-zinc-800/50 group bg-zinc-900">
          <Image src="/imagens/animes/beavisandbutheadbang2.gif" alt="Beavis" fill unoptimized className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
        </div>

        {/* 3. A SKIN DO FORTNITE (Retângulo Alto - Ocupa 2 linhas) -> LINK PARA O LOBBY */}
        <Link href="/fortnite" className="bento-item relative col-span-2 md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden border-2 border-blue-900/50 bg-[#001538] group cursor-pointer hover:border-[#fbff00] transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,144,226,0.2)_0%,transparent_70%)]"></div>
          <Image src="/imagens/fortnite/noodle2.png" alt="Skin Fortnite" fill className="object-contain object-bottom p-4 group-hover:scale-110 transition-transform duration-500 z-10" />
          
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex flex-col items-center justify-center backdrop-blur-sm">
             <span className="font-sans font-black text-[#fbff00] text-2xl italic uppercase drop-shadow-lg text-center px-4">ABRIR LOBBY</span>
          </div>
        </Link>

        {/* 4. NOSSO DUO (Retângulo Largo - Ocupa 2 colunas) */}
        <div className="bento-item relative col-span-2 rounded-3xl overflow-hidden border-2 border-zinc-800/50 group bg-black">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500">
            <source src="/imagens/gameplay/nossovideo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80"></div>
          <h3 className="absolute bottom-6 left-6 font-black text-2xl text-white drop-shadow-lg z-10 tracking-wider">NOSSA DUPLA</h3>
        </div>

        {/* 5. KORN (Quadrado) */}
        <div className="bento-item relative rounded-3xl overflow-hidden border-2 border-zinc-800/50 group bg-zinc-900 md:hidden"> 
          <Image src="/imagens/albuns/korn.jpg" alt="Korn" fill className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
        </div>

      </div>
    </section>
  );
}