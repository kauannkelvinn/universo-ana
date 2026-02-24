"use client";

import { useRef, useState, useLayoutEffect, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import type { Application, SPEObject } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tampaRef = useRef<SPEObject | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
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

  function onLoad(splineApp: Application) {
    const tampa = splineApp.findObjectByName("Tampa");
    if (tampa) tampaRef.current = tampa;
    setIsLoaded(true);
  }

  useLayoutEffect(() => {
    if (!isLoaded || !tampaRef.current || isLowEnd) return;

    const ctx = gsap.context(() => {
      gsap.to(tampaRef.current!.position, {
        y: tampaRef.current!.position.y + 600,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1000",
          scrub: 1,
        },
      });

      gsap.to(tampaRef.current!.rotation, {
        x: Math.PI / 4,
        y: Math.PI / 2,
        ease: "none",
        scrollTrigger: { trigger: containerRef.current, start: "top top", end: "+=1000", scrub: 1 },
      });
    });

    return () => ctx.revert();
  }, [isLoaded, isLowEnd]);

  return (
    <section ref={containerRef} className="relative w-full h-full">
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center bg-[#0a0a0a]">
        
        {isLowEnd ? (
          <div className="relative w-full max-w-75 md:max-w-125 aspect-square flex items-center justify-center">
             <Image 
               src="/imagens/presente-fallback.png" 
               alt="Presente 3D" 
               fill 
               className="object-contain drop-shadow-[0_0_50px_rgba(178,92,255,0.4)]"
               priority
             />
          </div>
        ) : (
          <Spline
            scene="https://prod.spline.design/ojGpXy7Tba71aG2z/scene.splinecode"
            onLoad={onLoad}
            className="w-full h-full"
          />
        )}

        <div className="absolute bottom-12 text-[#b25cff] font-y2k text-xl tracking-widest animate-pulse pointer-events-none drop-shadow-[0_0_10px_rgba(178,92,255,0.8)]">
          [ ROLE PARA ABRIR ]
        </div>
      </div>
    </section>
  );
}