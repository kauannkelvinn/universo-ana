"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Definindo o tipo (pra não dar erro de TypeScript)
type LocalMapa = {
  id: string;
  nome: string;
  top: string;
  left: string;
  midia: string;
  tipo: string;
  formato?: "retrato" | "paisagem"; // <- O truque está aqui!
};

// --- 📍 AS TUAS COORDENADAS (INTOCADAS!) ---
const locaisDoMapa: LocalMapa[] = [
  {
    id: "tilted",
    nome: "TILTED TOWERS",
    top: "48%",
    left: "41.90%",
    midia: "/imagens/gameplay/nossovideo.mp4",
    tipo: "video",
    formato: "paisagem", 
  },
  {
    id: "pleasant",
    nome: "PLEASANT PARK",
    top: "28%",
    left: "37.60%",
    midia: "/imagens/gameplay/nossafoto.jpg",
    tipo: "imagem",
    formato: "paisagem"
  },
  {
    id: "lazy",
    nome: "LAZY LINKS",
    top: "20%", 
    left: "50%", 
    midia: "/imagens/gameplay/fotoposando.jpg", 
    tipo: "imagem",
    formato: "retrato" 
  },
  {
    id: "risky",
    nome: "RISKY REELS",
    top: "18%",
    left: "60%", 
    midia: "/imagens/gameplay/videodancando.mp4", 
    tipo: "video",
    formato: "retrato" 
  },
  {
    id: "salty",
    nome: "SALTY SPRINGS",
    top: "59.90%",
    left: "51.65%", 
    midia: "/imagens/gameplay/gameplayacao.mp4", 
    tipo: "video",
    formato: "paisagem" 
  },
  {
    id: "paradise",
    nome: "PARADISE PALMS",
    top: "72%",
    left: "64%", 
    midia: "/imagens/gameplay/gameplayvideo2.mp4", 
    tipo: "video",
    formato: "retrato" 
  },
];

export default function MapaPage() {
  const [localAtivo, setLocalAtivo] = useState<LocalMapa | null>(null);

  return (
    <main className="w-full min-h-screen bg-[#000a1a] overflow-hidden flex flex-col relative">
      
      {/* HEADER FLUTUANTE ESTILO LOBBY */}
      <header className="absolute top-0 left-0 w-full p-6 z-20 flex items-center pointer-events-none">
        <Link href="/fortnite" className="pointer-events-auto font-y2k text-sm text-zinc-300 hover:text-[#fbff00] transition-colors tracking-widest flex items-center gap-2 font-bold uppercase bg-[#001538]/90 px-6 py-3 rounded-2xl border-b-4 border-black/30 backdrop-blur-md shadow-lg hover:-translate-y-1">
          <span className="text-lg">⇦</span> VOLTAR AO LOBBY
        </Link>
      </header>

      <section className="w-full h-screen flex items-center justify-center relative group">
         
         <Image 
           src="/imagens/fortnite/mapafortniteog.png" 
           alt="Mapa OG Estilizado" 
           fill 
           className="object-contain object-center p-4 md:p-10" 
         />

         {locaisDoMapa.map((local) => (
            <button
              key={local.id}
              onClick={() => setLocalAtivo(local)}
              className="absolute z-10 w-4 h-4 md:w-5 md:h-5 bg-[#f9ff00] rounded-full shadow-[0_0_20px_#f9ff00] hover:scale-125 transition-transform cursor-crosshair group/radar border-2 border-white/80"
              style={{ top: local.top, left: local.left }}
            >
              <span className="absolute -inset-3 rounded-full border-2 border-[#f9ff00] animate-ping opacity-60"></span>
              
              {/* TOOLTIP COM A FONTE E DESIGN DO JOGO */}
              <span className="absolute top-8 left-1/2 -translate-x-1/2 text-sm text-white font-sans font-black italic tracking-wider whitespace-nowrap opacity-0 group-hover/radar:opacity-100 transition-opacity bg-[#394a5c] border-b-4 border-black/30 px-3 py-1 rounded-xl pointer-events-none shadow-xl drop-shadow-md uppercase">
                {local.nome}
              </span>
            </button>
         ))}

         <AnimatePresence>
            {localAtivo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: "spring", bounce: 0.4 }}
                // --- O MODAL COM A CAIXA E BORDAS DO JOGO ---
                className={`absolute bg-[#12233a] border-b-4 border-black/50 rounded-3xl z-30 flex flex-col overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] ring-2 ring-blue-900/50 ${
                  localAtivo.formato === "retrato"
                    ? "top-6 bottom-6 md:top-12 md:bottom-12 left-1/2 -translate-x-1/2 w-[90%] max-w-sm" // Janela Celular
                    : "inset-4 md:inset-20" // Janela TV
                }`}
              >
                {/* BARRA SUPERIOR (Imitando o Menu) */}
                <div className="w-full flex justify-between items-center p-4 md:p-5 bg-[#394a5c] border-b-4 border-black/20 shadow-md z-10">
                  <h3 className="font-sans font-black text-white tracking-widest text-2xl md:text-3xl drop-shadow-md italic uppercase px-2">
                    {localAtivo.nome}
                  </h3>
                  
                  {/* BOTÃO FECHAR (Com o Efeito do Botão Amarelo PLAY) */}
                  <button onClick={() => setLocalAtivo(null)} className="bg-[#f9ff00] text-[#111] font-sans font-black text-lg px-5 py-2 rounded-xl flex justify-center items-center outline-none ring-0 hover:ring-4er:ring-white hover:ring-offset-4 hover:ring-offset-[#394a5c] transition-all duration-200 cursor-pointer shadow-lg active:scale-[0.95] uppercase">
                    FECHAR
                  </button>
                </div>

                {/* ÁREA DO VÍDEO/FOTO */}
                <div className="relative grow w-full bg-[#00050b] flex items-center justify-center p-2 md:p-4">
                  {localAtivo.tipo === "video" ? (
                    <video src={localAtivo.midia} autoPlay loop controls={false} className="w-full h-full object-cover rounded-2xl shadow-inner" />
                  ) : (
                    <Image src={localAtivo.midia} alt={localAtivo.nome} fill className="object-contain rounded-2xl p-2 md:p-4" />
                  )}
                </div>
              </motion.div>
            )}
         </AnimatePresence>
      </section>
    </main>
  );
}