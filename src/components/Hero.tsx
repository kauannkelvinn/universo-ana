"use client";

import { useRef, useState, useLayoutEffect } from "react";
import Spline from "@splinetool/react-spline";
import type { Application, SPEObject } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tampaRef = useRef<SPEObject | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  function onLoad(splineApp: Application) {
    const tampa = splineApp.findObjectByName("Tampa");
    if (tampa) tampaRef.current = tampa;
    setIsLoaded(true);
  }

  useLayoutEffect(() => {
    if (!isLoaded || !tampaRef.current) return;

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
  }, [isLoaded]);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh]">
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center">
        <Spline
          scene="https://prod.spline.design/ojGpXy7Tba71aG2z/scene.splinecode"
          onLoad={onLoad}
          className="w-full h-full"
        />
        <div className="absolute bottom-12 text-[#b25cff] font-y2k text-xl tracking-widest animate-pulse pointer-events-none">
          [ ROLE PARA ABRIR ]
        </div>
      </div>
    </section>
  );
}