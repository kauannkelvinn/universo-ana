"use client";

import { useRef, useState, useLayoutEffect, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import type { Application, SPEObject } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const PLAYLIST = [
  {
    title: "Niagara Falls",
    artist: "The Weeknd",
    src: "/musicas/niagarafalls-theweeknd.mp3",
    cover: "/imagens/albuns/hurryuptomorrow.jpg",
    startTime: 0,
  },
  {
    title: "Collect Calls",
    artist: "Kendrick Lamar",
    src: "/musicas/collectcalls.webm",
    cover: "/imagens/albuns/goodkidmaadcity.jpg",
    startTime: 0,
  },
  {
    title: "Nightcrawler",
    artist: "Travis Scott",
    src: "/musicas/nightcrawler.mp3",
    cover: "/imagens/albuns/rodeo.jpg",
    startTime: 0,
  },
  {
    title: "Freak On A Leash",
    artist: "Korn",
    src: "/musicas/freakonaleash.mp3",
    cover: "/imagens/albuns/followtheleader.jpg",
    startTime: 0,
  },
  {
    title: "Sing About Me",
    artist: "Kendrick Lamar",
    src: "/musicas/singaboutme.mp3",
    cover: "/imagens/albuns/goodkidmaadcity.jpg",
    startTime: 0,
  },
  {
    title: "Praise God",
    artist: "Kanye West & Travis Scott",
    src: "/musicas/praisegod.mp3",
    cover: "/imagens/albuns/donda.jpg",
    startTime: 0,
  },
  {
    title: "Butterfly Effect",
    artist: "Travis Scott",
    src: "/musicas/butterflyeffect.mp3",
    cover: "/imagens/albuns/astroworld.jpg",
    startTime: 0,
  },
  {
    title: "HOT",
    artist: "Young Thug & Gunna",
    src: "/musicas/hot.mp3",
    cover: "/imagens/albuns/somuchfun.jpg",
    startTime: 0,
  },
  {
    title: "Endless",
    artist: "Gunna",
    src: "/musicas/endless.mp3",
    cover: "/imagens/albuns/lastofwun.jpg",
    startTime: 0,
  },
  {
    title: "Die Hard",
    artist: "Kendrick Lamar",
    src: "/musicas/diehard.mp3",
    cover: "/imagens/albuns/mrmorales.jpg",
    startTime: 0,
  },
  {
    title: "Numb",
    artist: "Link Park",
    src: "/musicas/numb.mp3",
    cover: "/imagens/albuns/meteora.jpg",
    startTime: 2,
  },
  {
    title: "TRIM",
    artist: "Playboi Carti",
    src: "/musicas/trim.mp3",
    cover: "/imagens/albuns/iamusic.jpg",
    startTime: 0,
  },
  {
    title: "Toxicity",
    artist: "System of a Down",
    src: "/musicas/toxicity.mp3",
    cover: "/imagens/albuns/toxicity.jpg",
    startTime: 0,
  },
  {
    title: "Never Let Me Down",
    artist: "Kanye West",
    src: "/musicas/neverletmedown.mp3",
    cover: "/imagens/albuns/thecollegedroppout.jpg",
    startTime: 0,
  },
  {
    title: "After Hours",
    artist: "The Weeknd",
    src: "/musicas/afterhours.mp3",
    cover: "/imagens/albuns/afterhours.jpg",
    startTime: 0,
  },
  {
    title: "Good Morning",
    artist: "Kanye West",
    src: "/musicas/goodmorning.mp3",
    cover: "/imagens/albuns/graduation.jpg",
    startTime: 0,
  },
  {
    title: "Come N Go",
    artist: "Yeat",
    src: "/musicas/comengo.mp3",
    cover: "/imagens/albuns/dangerousummer.jpg",
    startTime: 0,
  },
  {
    title: "All Of The Lights",
    artist: "Korn",
    src: "/musicas/allofthelights.mp3",
    cover: "/imagens/albuns/mybeautiful.jpg",
    startTime: 0,
  },
];

export default function Vitrola() {
  const containerRef = useRef<HTMLDivElement>(null);
  const discoRef = useRef<SPEObject | null>(null);
  const bracoRef = useRef<SPEObject | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nav = navigator as Navigator & {
        deviceMemory?: number;
        connection?: { effectiveType?: string; saveData?: boolean };
        mozConnection?: { effectiveType?: string; saveData?: boolean };
        webkitConnection?: { effectiveType?: string; saveData?: boolean };
      };
      
      const ram = nav.deviceMemory || 4; 
      const cpuCores = navigator.hardwareConcurrency || 4; 
      const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
      const isSlowNetwork = connection ? (connection.effectiveType === '2g' || connection.effectiveType === '3g' || connection.saveData) : false;
      
      if (ram < 4 || cpuCores < 4 || isSlowNetwork) {
        setIsLowEnd(true);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoaded || isLowEnd) return;

    let frameCount = 0;
    let lastTime = performance.now();
    let rafId: number;
    let lagSpikes = 0;

    const checkFPS = () => {
      const now = performance.now();
      frameCount++;

      if (now - lastTime >= 1000) {
        if (frameCount < 24) {
          lagSpikes++;
        } else {
          lagSpikes = 0;
        }

        if (lagSpikes >= 2) {
          setIsLowEnd(true);
          cancelAnimationFrame(rafId);
          return;
        }

        frameCount = 0;
        lastTime = now;
      }
      rafId = requestAnimationFrame(checkFPS);
    };

    const startTimer = setTimeout(() => {
      rafId = requestAnimationFrame(checkFPS);
    }, 2000);

    return () => {
      clearTimeout(startTimer);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isLoaded, isLowEnd]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = PLAYLIST[currentTrack].startTime || 0;
      if (isPlaying) {
        audioRef.current.play().catch(console.error);
      }
    }
  }, [currentTrack, isPlaying]);

  function onLoad(splineApp: Application) {
    const disco = splineApp.findObjectByName("Disco");
    const braco = splineApp.findObjectByName("Braco");
    if (disco) discoRef.current = disco;
    if (braco) bracoRef.current = braco;
    setIsLoaded(true);
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(console.error);
        setIsPlaying(true);
      }
    }
  };

  const nextTrack = () => setCurrentTrack((prev) => (prev + 1) % PLAYLIST.length);
  const prevTrack = () => setCurrentTrack((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);

  useLayoutEffect(() => {
    if (!isLowEnd && !isLoaded) return;

    const ctx = gsap.context(() => {
      
      if (playerRef.current) {
        gsap.to(playerRef.current, {
          opacity: 1,
          pointerEvents: "auto",
          y: -15,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "center center",
            toggleActions: "play reverse play reverse",
          },
        });
      }

      if (!isLowEnd && discoRef.current && bracoRef.current) {
        gsap.to(discoRef.current.rotation, {
          y: "+=" + Math.PI * 2,
          repeat: -1,
          duration: 4,
          ease: "none",
          paused: !isPlaying,
        });

        gsap.to(bracoRef.current.rotation, {
          y: -0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "center center",
            scrub: 1,
          },
        });
      }
    });

    return () => ctx.revert();
  }, [isLoaded, isPlaying, isLowEnd]);

  const track = PLAYLIST[currentTrack];

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex flex-col items-center justify-center gap-y-6 py-12 md:py-16 bg-[#0a0a0a] overflow-hidden">
      <div className="z-10 text-center px-6">
        <h2 className="font-teka font-black text-4xl md:text-7xl text-[#e0e0e0] uppercase tracking-tighter">
          O SEU UNIVERSO
        </h2>
        <p className="font-teka font-light text-zinc-400 text-sm md:text-lg max-w-xl mx-auto mt-2 md:mt-4">
          A trilha sonora dos nossos dias, os mundos que tu exploras e as vibezinhas que te fazem ser tu.
        </p>
      </div>

      <div className="relative w-full flex-none h-90 md:h-130 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full scale-[1.1] sm:scale-[0.85] md:scale-[1.15] lg:scale-[1.3] transition-transform duration-700 relative flex justify-center items-center">
          
          {isLowEnd ? (
            <Image 
              src="/imagens/vitrola-fallbacck.png" 
              alt="Vitrola" 
              width={600} 
              height={600} 
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              priority
            />
          ) : (
            <Spline
              scene="https://prod.spline.design/pVz-RhBk-aI5Yb1K/scene.splinecode"
              onLoad={onLoad}
              className="w-full h-full"
            />
          )}

        </div>
      </div>

      <div 
        ref={playerRef} 
        className="w-[90%] max-w-85 md:max-w-md flex items-center gap-4 bg-black/90 backdrop-blur-xl px-4 py-3 rounded-2xl border border-zinc-800 shadow-2xl z-50 opacity-0 pointer-events-none translate-y-4"
      >
        <div className={`relative shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-700 ${isPlaying ? "animate-spin" : ""}`} style={{ animationDuration: "8s" }}>
          <Image src={track.cover} alt="Capa" fill className="object-cover" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-white font-teka font-bold text-sm truncate">{track.title}</p>
          <p className="text-zinc-500 font-teka text-xs truncate">{track.artist}</p>
        </div>

        <div className="flex items-center gap-2 border-l border-zinc-800 pl-3">
          <button onClick={prevTrack} className="text-zinc-400 hover:text-white transition-colors p-1 cursor-pointer">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" /></svg>
          </button>

          <button onClick={togglePlay} className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-black hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg">
            {isPlaying ? (
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
            ) : (
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="ml-0.5"><path d="M8 5v14l11-7z" /></svg>
            )}
          </button>

          <button onClick={nextTrack} className="text-zinc-400 hover:text-white transition-colors p-1 cursor-pointer">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
          </button>
        </div>
      </div>

      <audio ref={audioRef} src={track.src} onEnded={nextTrack} preload="auto" />
    </section>
  );
}