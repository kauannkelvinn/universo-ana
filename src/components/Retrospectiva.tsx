"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Retrospectiva() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".memory-card") as HTMLElement[];
      cards.forEach((card) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 80%" },
        });
      });
    }, timelineRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={timelineRef} className="relative w-full max-w-5xl mx-auto px-6 py-32 flex flex-col items-center z-10">
      <h2 className="font-metal text-6xl md:text-8xl text-center text-[#e0e0e0] mb-32 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
        A NOSSA <span className="text-[#b25cff]">JORNADA</span>
      </h2>

      <div className="absolute left-6 md:left-1/2 top-64 bottom-0 w-0.5 bg-linear-to-b from-[#b25cff] via-[#39ff14] to-[#ff007f] md:-translate-x-1/2 opacity-30"></div>

      <div className="w-full flex flex-col gap-24">
        
        {/* MEMÓRIA 1 - MÃE */}
        <div className="memory-card relative w-full flex flex-col md:flex-row items-center justify-between pl-10 md:pl-0">
          <div className="absolute -left-1.25 md:relative md:left-0 md:w-[10%] flex justify-center z-10">
            <div className="w-4 h-4 rounded-full bg-[#39ff14] shadow-[0_0_15px_#39ff14]"></div>
          </div>
          <div className="w-full md:w-[45%] md:text-right md:-order-1 mb-6 md:mb-0">
            <p className="font-y2k text-[#39ff14] text-xl">MAR . 2024</p>
            <h3 className="font-metal text-5xl text-white mt-2 tracking-widest">O MAIOR ALIVIO</h3>
            <p className="font-scrapbook text-xl text-gray-300 mt-4 leading-relaxed">
              O marco mais importante. O momento em que a sua mãe curou do câncer. Uma vitória gigante que trouxe a luz de volta pros nossos dias.
            </p>
          </div>
          <Link 
            href="/maecurada" 
            className="w-full md:w-[45%] h-64 md:h-80 relative rounded-lg overflow-hidden border border-[#39ff14]/30 shadow-[0_0_20px_rgba(57,255,20,0.1)] block cursor-pointer hover:scale-105 transition-transform duration-300 group"
          >
            <Image src="/imagens/maecuradadocancer.jpg" alt="Mãe curada" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-y2k text-[#39ff14] tracking-widest drop-shadow-lg text-sm">[ VER GALERIA ]</p>
            </div>
          </Link>
        </div>

        {/* MEMÓRIA 2 - ROCK IN RIO */}
        <div className="memory-card relative w-full flex flex-col md:flex-row items-center justify-between pl-10 md:pl-0">
          <div className="absolute -left-1.25 md:relative md:left-0 md:w-[10%] flex justify-center z-10">
            <div className="w-4 h-4 rounded-full bg-[#ff4500] shadow-[0_0_15px_#ff4500]"></div>
          </div>
          <div className="w-full md:w-[45%] mb-6 md:mb-0">
            <p className="font-y2k text-[#ff4500] text-xl">SET . 2024</p>
            <h3 className="font-metal text-5xl text-white mt-2 tracking-widest">PRAISE GOD</h3>
            <p className="font-scrapbook text-xl text-gray-300 mt-4 leading-relaxed">
              A primeira vez que a gente se viu pessoalmente. Rock in Rio, o caos perfeito no show do Travis Scott, resenhando com o grupinho do show. Inesquecível.
            </p>
          </div>
          <Link 
            href="/rockinrio" 
            className="w-full md:w-[45%] h-64 md:h-80 relative rounded-lg overflow-hidden border border-[#ff4500]/30 shadow-[0_0_20px_rgba(255,69,0,0.1)] md:-order-1 block cursor-pointer hover:scale-105 transition-transform duration-300 group"
          >
            <Image src="/imagens/eu_e_ela_rockinrio.JPEG" alt="Rock in Rio" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-y2k text-[#ff4500] tracking-widest drop-shadow-lg text-sm">[ VER GALERIA ]</p>
            </div>
          </Link>
        </div>

        {/* MEMÓRIA 3 - KENDRICK LAMAR */}
        <div className="memory-card relative w-full flex flex-col md:flex-row items-center justify-between pl-10 md:pl-0">
          <div className="absolute -left-1.25 md:relative md:left-0 md:w-[10%] flex justify-center z-10">
            <div className="w-4 h-4 rounded-full bg-[#00ffff] shadow-[0_0_15px_#00ffff]"></div>
          </div>
          <div className="w-full md:w-[45%] md:text-right md:-order-1 mb-6 md:mb-0">
            <p className="font-y2k text-[#00ffff] text-xl">30 . SET . 2025</p>
            <h3 className="font-metal text-5xl text-white mt-2 tracking-widest">SING ABOUT ME</h3>
            <p className="font-scrapbook text-xl text-gray-300 mt-4 leading-relaxed">
              Viajei pra te ver e curtir o show do Kendrick Lamar contigo. Aquele momento nosso cantando alto junto com a multidao.
            </p>
          </div>
          <Link 
            href="/kendrick" 
            className="w-full md:w-[45%] h-64 md:h-80 relative rounded-lg overflow-hidden border border-[#00ffff]/30 shadow-[0_0_20px_rgba(0,255,255,0.1)] block cursor-pointer hover:scale-105 transition-transform duration-300 group"
          >
            <Image src="/imagens/pulseirashowkendrick.jpg" alt="Kendrick Lamar" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-y2k text-[#00ffff] tracking-widest drop-shadow-lg text-sm">[ VER GALERIA ]</p>
            </div>
          </Link>
        </div>

        {/* MEMÓRIA 4 - RÉVEILLON SP */}
        <div className="memory-card relative w-full flex flex-col md:flex-row items-center justify-between pl-10 md:pl-0">
          <div className="absolute -left-1.25 md:relative md:left-0 md:w-[10%] flex justify-center z-10">
            <div className="w-4 h-4 rounded-full bg-[#ff007f] shadow-[0_0_15px_#ff007f]"></div>
          </div>
          <div className="w-full md:w-[45%] mb-6 md:mb-0">
            <p className="font-y2k text-[#ff007f] text-xl">DEZ . 2025</p>
            <h3 className="font-metal text-5xl text-white mt-2 tracking-widest">UM MES EM SP</h3>
            <p className="font-scrapbook text-xl text-gray-300 mt-4 leading-relaxed">
              A ponte aerea Fortaleza x Sao Paulo. Um mes inteiro vivendo do teu lado, terminando o ano juntos num Reveillon perfeito.
            </p>
          </div>
          <Link 
            href="/reveillon" 
            className="w-full md:w-[45%] h-64 md:h-80 relative rounded-lg overflow-hidden border border-[#ff007f]/30 shadow-[0_0_20px_rgba(255,0,127,0.1)] md:-order-1 block cursor-pointer hover:scale-105 transition-transform duration-300 group"
          >
            <Image src="/imagens/airbnb.jpg" alt="Réveillon SP" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-y2k text-[#ff007f] tracking-widest drop-shadow-lg text-sm">[ VER GALERIA ]</p>
            </div>
          </Link>
        </div>

        {/* MEMÓRIA 5 - DETALHES / VIBES */}
        <div className="memory-card relative w-full flex flex-col md:flex-row items-center justify-between pl-10 md:pl-0">
          <div className="absolute -left-1.25 md:relative md:left-0 md:w-[10%] flex justify-center z-10">
            <div className="w-4 h-4 rounded-full bg-[#ffd700] shadow-[0_0_15px_#ffd700]"></div>
          </div>
          <div className="w-full md:w-[45%] md:text-right md:-order-1 mb-6 md:mb-0">
            <p className="font-y2k text-[#ffd700] text-xl">2023 - 2025</p>
            <h3 className="font-metal text-5xl text-white mt-2 tracking-widest">A ESTETICA</h3>
            <p className="font-scrapbook text-xl text-gray-300 mt-4 leading-relaxed">
              Os detalhes, os shows absurdos, as flores e os momentos que constroem quem tu és.
            </p>
          </div>
          <Link 
            href="/estetica" 
            className="w-full md:w-[45%] h-64 md:h-80 relative rounded-lg overflow-hidden border border-[#ffd700]/30 shadow-[0_0_20px_rgba(255,215,0,0.1)] block cursor-pointer hover:scale-105 transition-transform duration-300 group"
          >
            <Image src="/imagens/MemoriasDela/nossostenis.jpg" alt="A Estética" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-y2k text-[#ffd700] tracking-widest drop-shadow-lg text-sm">[ VER GALERIA ]</p>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}