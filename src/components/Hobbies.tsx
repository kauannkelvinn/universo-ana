"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 🗄️ DICIONÁRIO DO BENTO GRID: Fácil de adicionar, remover ou mudar a ordem no futuro.
const BENTO_ITEMS = [
  {
    id: "weeknd",
    type: "image-link",
    href: "/albuns",
    src: "/imagens/albuns/afterhours.jpg",
    alt: "The Weeknd",
    containerClass: "border-zinc-800/50 bg-zinc-900 block cursor-pointer",
  },
  {
    id: "beavis",
    type: "image-link",
    href: "/animes",
    src: "/imagens/animes/beavisandbutheadbang2.gif",
    alt: "Beavis",
    containerClass: "border-zinc-800/50 bg-zinc-900 block cursor-pointer",
    unoptimized: true, // Necessário para o GIF funcionar
  },
  {
    id: "fortnite",
    type: "fortnite-card",
    href: "/fortnite",
    src: "/imagens/fortnite/noodle2.png",
    containerClass: "col-span-2 md:col-span-1 md:row-span-2 border-blue-900/50 bg-[#001538] cursor-pointer hover:border-[#fbff00] transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)]",
  },
  {
    id: "duo",
    type: "video",
    src: "https://res.cloudinary.com/dyxzqghnx/video/upload/v1771948886/Nossovideo_uzgnn0.mp4",
    title: "NOSSA DUPLA",
    containerClass: "col-span-2 border-zinc-800/50 bg-black",
  },
  {
    id: "korn",
    type: "image-div",
    src: "/imagens/albuns/korn.jpg",
    alt: "Korn",
    containerClass: "border-zinc-800/50 bg-zinc-900 md:hidden",
  },
];

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
        <h2 className="font-black text-[43px] md:text-7xl text-[#e0e0e0] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] uppercase">
          O QUE ELA AMA
        </h2>
        <p className="text-zinc-400 font-bold md:font-regular mt-4 text-xl md:text-2xl">
          A curadoria das vibes, dos jogos aos sons que batem forte.
        </p>
      </div>

      {/* BENTO GRID MOSAICO */}
      <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[250px] gap-4">
        
        {BENTO_ITEMS.map((item) => {
          const baseClasses = `bento-item relative rounded-3xl overflow-hidden border-2 group ${item.containerClass}`;

          if (item.type === "image-link") {
            return (
              <Link key={item.id} href={item.href!} className={baseClasses}>
                <Image src={item.src} alt={item.alt!} fill unoptimized={item.unoptimized} loading="lazy" className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
              </Link>
            );
          }

          if (item.type === "image-div") {
            return (
              <div key={item.id} className={baseClasses}>
                <Image src={item.src} alt={item.alt!} fill loading="lazy" className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
              </div>
            );
          }

          if (item.type === "fortnite-card") {
            return (
              <Link key={item.id} href={item.href!} className={baseClasses}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,144,226,0.2)_0%,transparent_70%)]"></div>
                <Image src={item.src} alt="Skin Fortnite" fill loading="lazy" className="object-contain object-bottom p-4 group-hover:scale-110 transition-transform duration-500 z-10" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex flex-col items-center justify-center backdrop-blur-sm">
                  <span className="font-sans font-black text-[#fbff00] text-2xl italic uppercase drop-shadow-lg text-center px-4">ABRIR LOBBY</span>
                </div>
              </Link>
            );
          }

          if (item.type === "video") {
            return (
              <div key={item.id} className={baseClasses}>
                <video autoPlay muted loop playsInline preload="none" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <source src={item.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80"></div>
                <h3 className="absolute bottom-6 left-6 font-black md:text-2xl text-white drop-shadow-lg z-10 tracking-wider">{item.title}</h3>
              </div>
            );
          }
        })}

      </div>
    </section>
  );
}