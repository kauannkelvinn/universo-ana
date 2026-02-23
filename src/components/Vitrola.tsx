"use client";

import { useRef, useState, useLayoutEffect, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import type { Application, SPEObject } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 🎵 A TUA PLAYLIST MÁGICA AQUI:
// Podes adicionar quantas quiseres copiando a linha e mudando os nomes!
const PLAYLIST = [
  { title: "Niagara Falls", artist: "The Weeknd", src: "/musicas/niagarafalls-theweeknd.mp3" },
  { title: "Not Like Us", artist: "Kendrick Lamar", src: "/musicas/eu-e-ela/notlikeus-kendrick.mp3" },
  { title: "Stargazing", artist: "Travis Scott", src: "/musicas/stargazing-travisscott.mp3" },
  { title: "Toxicity", artist: "System Of A Down", src: "/musicas/toxicity-systemofadown.mp3" },
  { title: "Blind", artist: "Korn", src: "/musicas/blind-korn.mp3" },
];

export default function Vitrola() {
  const containerRef = useRef<HTMLDivElement>(null);
  const discoRef = useRef<SPEObject | null>(null);
  const bracoRef = useRef<SPEObject | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Estado para controlar a música atual
  const [currentTrack, setCurrentTrack] = useState(0);

  function onLoad(splineApp: Application) {
    const disco = splineApp.findObjectByName("Disco");
    const braco = splineApp.findObjectByName("Braco");
    if (disco) discoRef.current = disco;
    if (braco) bracoRef.current = braco;
    setIsLoaded(true);
  }

  // Funções para mudar de música
  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % PLAYLIST.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
  };

  // Efeito para tocar automaticamente quando mudas de música
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => console.log("Aguardando interação do utilizador"));
    }
  }, [currentTrack]);

  useLayoutEffect(() => {
    if (!isLoaded || !discoRef.current || !bracoRef.current) return;

    const ctx = gsap.context(() => {
      // Disco a rodar
      gsap.to(discoRef.current!.rotation, {
        y: "+=" + Math.PI * 2,
        repeat: -1,
        duration: 4, 
        ease: "none", 
      });

      // Braço a descer
      gsap.to(bracoRef.current!.rotation, {
        y: 0.6, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center", 
          end: "center center",
          scrub: 1,
          onToggle: (self) => {
            if (self.isActive) {
              audioRef.current?.play().catch(console.error);
            } else {
              audioRef.current?.pause();
            }
          }
        },
      });
    });

    return () => ctx.revert();
  }, [isLoaded]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex flex-col items-center py-32 bg-linear-to-brom-[#0a0a0a] to-[#121212]">
      <h2 className="font-metal text-5xl md:text-7xl text-center text-[#e0e0e0] mb-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        O SEU <span className="text-[#39ff14]">UNIVERSO</span>
      </h2>
      
      <p className="font-scrapbook text-xl text-gray-400 text-center max-w-2xl mb-16 px-6">
        A trilha sonora dos nossos dias, os mundos que tu exploras e as vibezinhas que te fazem ser tu.
      </p>

      <div className="w-full h-125 md:h-175ative">
        <Spline 
          scene="https://prod.spline.design/pVz-RhBk-aI5Yb1K/scene.splinecode" 
          onLoad={onLoad} 
          className="w-full h-full" 
        />
        
        {/* PLAYER INTERATIVO */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 md:gap-6 bg-black/80 backdrop-blur-md px-6 md:px-8 py-4 rounded-full border border-zinc-700 shadow-[0_0_30px_rgba(57,255,20,0.1)] pointer-events-auto z-50 transition-all">
          
          {/* Vinil girando */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-800 animate-spin flex items-center justify-center border-2 border-zinc-600" style={{ animationDuration: '4s' }}>
             <div className="w-3 h-3 bg-[#39ff14] rounded-full"></div>
          </div>
          
          {/* Info da Música */}
          <div className="min-w-30in-w-[160px]">
            <p className="font-y2k text-[#39ff14] text-[10px] md:text-xs tracking-widest mb-1">NOW PLAYING</p>
            <p className="font-scrapbook text-white text-base md:text-lg truncate max-w-37.5 md:max-w-50">
              {PLAYLIST[currentTrack].title}
            </p>
            <p className="font-scrapbook text-gray-400 text-xs md:text-sm truncate">
              {PLAYLIST[currentTrack].artist}
            </p>
          </div>

          {/* Botões de Controle */}
          <div className="flex items-center gap-3 border-l border-zinc-600 pl-4 md:pl-6 ml-2">
            <button onClick={prevTrack} className="text-zinc-400 hover:text-[#39ff14] hover:scale-110 transition-all text-xl md:text-2xl active:scale-95">
              ⏮
            </button>
            <button onClick={nextTrack} className="text-zinc-400 hover:text-[#39ff14] hover:scale-110 transition-all text-xl md:text-2xl active:scale-95">
              ⏭
            </button>
          </div>

        </div>
      </div>

      {/* Áudio invisível que toca a música atual - avança para a próxima quando acaba! */}
      <audio 
        ref={audioRef} 
        src={PLAYLIST[currentTrack].src} 
        onEnded={nextTrack}
        preload="auto" 
      />
    </section>
  );
}