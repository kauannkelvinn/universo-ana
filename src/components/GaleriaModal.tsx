"use client";

import Image from "next/image";
import { useEffect } from "react";

interface GaleriaProps {
  imagens: string[];
  onClose: () => void;
}

export default function GaleriaModal({ imagens, onClose }: GaleriaProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!imagens || imagens.length === 0) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10">
      
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 md:top-10 md:right-10 text-white text-5xl hover:text-[#b25cff] transition-colors z-50"
      >
        &times;
      </button>
      
      <div className="w-full max-w-7xl h-[70vh] md:h-[85vh] overflow-x-auto flex gap-6 pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#b25cff] scrollbar-track-zinc-900">
        {imagens.map((img, index) => (
          <div 
            key={index} 
            className="relative min-w-[85vw] md:min-w-[60vw] h-full snap-center rounded-xl overflow-hidden border border-zinc-800 bg-black shrink-0"
          >
            <Image 
              src={img} 
              alt={`Foto da galeria ${index + 1}`} 
              fill 
              className="object-contain" 
            />
          </div>
        ))}
      </div>
      
      <p className="absolute bottom-6 font-y2k text-zinc-500 tracking-widest text-sm pointer-events-none animate-pulse">
        [ ARRASTE PARA O LADO ]
      </p>

    </div>
  );
}