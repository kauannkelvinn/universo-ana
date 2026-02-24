"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MEMORIES = [
  {
    id: 1,
    date: "MAR . 2024",
    title: "O MAIOR ALIVIO",
    desc: "O marco mais importante. O momento em que a sua mãe curou do câncer. Uma vitória gigante que trouxe a luz de volta pros nossos dias.",
    link: "/maecurada",
    img: "/imagens/maecuradadocancer.jpg",
    alt: "Mãe curada",
    color: "#39ff14",
    dotShadow: "shadow-[0_0_15px_#39ff14]",
    textClass: "text-[#39ff14]",
    borderClass: "border-[#39ff14]/30",
    cardShadow: "shadow-[0_0_20px_rgba(57,255,20,0.1)]",
    isEven: false, // Controla se a imagem fica na direita ou na esquerda
  },
  {
    id: 2,
    date: "SET . 2024",
    title: "PRAISE GOD",
    desc: "A primeira vez que a gente se viu pessoalmente. Rock in Rio, o caos perfeito no show do Travis Scott, Inesquecível.",
    link: "/rockinrio",
    img: "/imagens/eu_e_ela_rockinrio.JPEG",
    alt: "Rock in Rio",
    color: "#ff4500",
    dotShadow: "shadow-[0_0_15px_#ff4500]",
    textClass: "text-[#ff4500]",
    borderClass: "border-[#ff4500]/30",
    cardShadow: "shadow-[0_0_20px_rgba(255,69,0,0.1)]",
    isEven: true,
  },
  {
    id: 3,
    date: "30 . SET . 2025",
    title: "SING ABOUT ME",
    desc: "Viajei pra te ver e curtir o show do Kendrick Lamar contigo. Aquele momento nosso cantando alto junto com a multidao.",
    link: "/kendrick",
    img: "/imagens/pulseirashowkendrick.jpg",
    alt: "Kendrick Lamar",
    color: "#00ffff",
    dotShadow: "shadow-[0_0_15px_#00ffff]",
    textClass: "text-[#00ffff]",
    borderClass: "border-[#00ffff]/30",
    cardShadow: "shadow-[0_0_20px_rgba(0,255,255,0.1)]",
    isEven: false,
  },
  {
    id: 4,
    date: "DEZ . 2025",
    title: "UM MES EM SP",
    desc: "A ponte aerea Fortaleza x Sao Paulo. Um mes inteiro vivendo do teu lado, terminando o ano juntos num Reveillon perfeito.",
    link: "/reveillon",
    img: "/imagens/airbnb.jpg",
    alt: "Réveillon SP",
    color: "#ff007f",
    dotShadow: "shadow-[0_0_15px_#ff007f]",
    textClass: "text-[#ff007f]",
    borderClass: "border-[#ff007f]/30",
    cardShadow: "shadow-[0_0_20px_rgba(255,0,127,0.1)]",
    isEven: true,
  },
  {
    id: 5,
    date: "2023 - 2025",
    title: "A ESTETICA",
    desc: "Os detalhes, os shows absurdos, as flores e os momentos que constroem quem tu és.",
    link: "/estetica",
    img: "/imagens/MemoriasDela/nossostenis.jpg",
    alt: "A Estética",
    color: "#ffd700",
    dotShadow: "shadow-[0_0_15px_#ffd700]",
    textClass: "text-[#ffd700]",
    borderClass: "border-[#ffd700]/30",
    cardShadow: "shadow-[0_0_20px_rgba(255,215,0,0.1)]",
    isEven: false,
  },
];

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
    <section ref={timelineRef} className="relative w-full min-h-screen bg-[#0a0a0a] px-6 py-16 flex flex-col items-center z-10 overflow-hidden">
      
      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
        
        <h2 className="font-bold text-6xl md:text-8xl text-center text-[#e0e0e0] mb-20 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          A NOSSA <span className="text-[#b25cff]">JORNADA</span>
        </h2>

        <div className="absolute left-6 md:left-1/2 top-48 bottom-0 w-0.5 bg-linear-to-b from-[#b25cff] via-[#39ff14] to-[#ff007f] md:-translate-x-1/2 opacity-30"></div>

        <div className="w-full flex flex-col gap-24">
          
          {MEMORIES.map((memory) => (
            <div key={memory.id} className="memory-card relative w-full flex flex-col md:flex-row items-center justify-between pl-10 md:pl-0">
              
              <div className="absolute -left-1.25 md:relative md:left-0 md:w-[10%] flex justify-center z-10">
                <div className={`w-4 h-4 rounded-full bg-[${memory.color}] ${memory.dotShadow}`}></div>
              </div>

              <div className={`w-full md:w-[45%] mb-6 md:mb-0 ${memory.isEven ? '' : 'md:text-right md:-order-1'}`}>
                <p className={`font-y2k md:text-xl ${memory.textClass}`}>{memory.date}</p>
                <h3 className="font-bold text-4xl md:text-5xl text-white mt-2 tracking-widest">{memory.title}</h3>
                <p className="md:text-xl font-light md:font-medium text-gray-300 mt-4 leading-relaxed">
                  {memory.desc}
                </p>
              </div>

              <Link 
                href={memory.link} 
                className={`w-full md:w-[45%] h-64 md:h-80 relative rounded-lg overflow-hidden border ${memory.borderClass} ${memory.cardShadow} block cursor-pointer hover:scale-105 transition-transform duration-300 group ${memory.isEven ? 'md:-order-1' : ''}`}
              >
                <Image src={memory.img} alt={memory.alt} fill className="object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className={`font-y2k tracking-widest drop-shadow-lg text-sm ${memory.textClass}`}>[ VER GALERIA ]</p>
                </div>
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}