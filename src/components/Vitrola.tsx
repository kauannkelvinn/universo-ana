"use client";

import { useRef, useState, useLayoutEffect } from "react";
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
    src: "/musicas/collectcalls-kendrick.webm",
    cover: "/imagens/albuns/afterhours.jpg",
  },
];

export default function Vitrola() {
  const containerRef = useRef<HTMLDivElement>(null);
  const discoRef = useRef<SPEObject | null>(null);
  const bracoRef = useRef<SPEObject | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

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

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % PLAYLIST.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
  };

  useLayoutEffect(() => {
    if (!isLoaded || !discoRef.current || !bracoRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(discoRef.current!.rotation, {
        y: "+=" + Math.PI * 2,
        repeat: -1,
        duration: 4,
        ease: "none",
        paused: !isPlaying,
      });

      gsap.to(bracoRef.current!.rotation, {
        y: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "center center",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, [isLoaded, isPlaying]);

  const track = PLAYLIST[currentTrack];

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center gap-y-6 py-12 md:py-16 bg-gradient-to-b from-[#0a0a0a] to-[#121212] overflow-hidden"
    >
      <div className="z-10 text-center px-6">
        <h2 className="font-teka font-black text-4xl md:text-7xl text-[#e0e0e0] uppercase tracking-tighter">
          O SEU UNIVERSO
        </h2>
        <p className="font-teka font-light text-zinc-400 text-sm md:text-lg max-w-xl mx-auto mt-2 md:mt-4">
          A trilha sonora dos nossos dias, os mundos que tu exploras e as vibezinhas que te fazem ser tu.
        </p>
      </div>

      <div className="relative w-full flex-none h-[360px] md:h-[520px] flex items-center justify-center overflow-hidden">
        <div className="w-full h-full scale-[1.1] sm:scale-[0.85] md:scale-[1.15] lg:scale-[1.3] transition-transform duration-700">
          <Spline
            scene="https://prod.spline.design/pVz-RhBk-aI5Yb1K/scene.splinecode"
            onLoad={onLoad}
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="w-[90%] max-w-[340px] md:max-w-md flex items-center gap-4 bg-black/90 backdrop-blur-xl px-4 py-3 rounded-2xl border border-zinc-800 shadow-2xl z-50">
        <div
          className={`relative flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-700 ${isPlaying ? "animate-spin" : ""}`}
          style={{ animationDuration: "8s" }}
        >
          <Image src={track.cover} alt="Capa" fill className="object-cover" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-white font-teka font-bold text-sm truncate">{track.title}</p>
          <p className="text-zinc-500 font-teka text-xs truncate">{track.artist}</p>
        </div>

        <div className="flex items-center gap-2 border-l border-zinc-800 pl-3">
          <button onClick={prevTrack} className="text-zinc-400 hover:text-white transition-colors p-1">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
            </svg>
          </button>

          <button
            onClick={togglePlay}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-black hover:scale-105 active:scale-95 transition-all"
          >
            {isPlaying ? (
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="ml-[2px]">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <button onClick={nextTrack} className="text-zinc-400 hover:text-white transition-colors p-1">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={track.src}
        onEnded={nextTrack}
        preload="auto"
      />
    </section>
  );
}