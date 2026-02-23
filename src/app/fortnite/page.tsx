"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// --- A TUA LISTA DE SKINS ---
const skinsDoLobby = [
  { id: "skin1", nome: "NOODLE (GORILLAZ)", src: "/imagens/fortnite/noodle2.png" },
  { id: "skin2", nome: "TRAVIS SCOTT", src: "/imagens/fortnite/travis.png" },
  { id: "skin3", nome: "BUTT HEAD", src: "/imagens/fortnite/butthead.png" },
  { id: "skin4", nome: "ASAP ROCKY", src: "/imagens/fortnite/asaprocky.png" },
  { id: "skin5", nome: "AMP KAI", src: "/imagens/fortnite/ampkai.png" },
  { id: "skin6", nome: "BEAVIS", src: "/imagens/fortnite/beavis.png" },
  { id: "skin7", nome: "CARTI", src: "/imagens/fortnite/carti.png" },
  { id: "skin8", nome: "CHROMAKOPIAN", src: "/imagens/fortnite/chromakopian.png" },
  { id: "skin9", nome: "DON TOLIVER", src: "/imagens/fortnite/dontoliver.png" },
  { id: "skin10", nome: "DUSTIN", src: "/imagens/fortnite/dustin.png" },
  { id: "skin11", nome: "ERA", src: "/imagens/fortnite/era.png" },
  { id: "skin12", nome: "GUNNA", src: "/imagens/fortnite/gunna.png" },
  { id: "skin13", nome: "JAMES HETFIELD", src: "/imagens/fortnite/jameshetfield.png" },
  { id: "skin14", nome: "JUICE WRLD", src: "/imagens/fortnite/juicewrld.png" },
  { id: "skin15", nome: "KAI", src: "/imagens/fortnite/kai.png" },
  { id: "skin16", nome: "KING VAMP CARTI", src: "/imagens/fortnite/kingvampcarti.png" },
  { id: "skin17", nome: "LIL UZI VERT", src: "/imagens/fortnite/liluzivert.png" },
  { id: "skin18", nome: "MARGE SIMPSON", src: "/imagens/fortnite/margesimpson.png" },
  { id: "skin19", nome: "STRIPE SLINGER", src: "/imagens/fortnite/stripeslinger.png" },
  { id: "skin20", nome: "THE WEEKND", src: "/imagens/fortnite/theweeknd.png" },
  { id: "skin21", nome: "THE WEEKND COMBAT", src: "/imagens/fortnite/theweekndcombat1.png" },
  { id: "skin22", nome: "THE WEEKND COMBAT 2", src: "/imagens/fortnite/theweekndcombat2.png" },
  { id: "skin23", nome: "TYLER, THE CREATOR", src: "/imagens/fortnite/tyler.png" },
  { id: "skin24", nome: "VELMA", src: "/imagens/fortnite/velma.png" },
  { id: "skin25", nome: "YEAT", src: "/imagens/fortnite/yeat.png" },
];

export default function FortniteLobbyPage() {
  const [skinAtual, setSkinAtual] = useState(skinsDoLobby[0]);

  return (
    <main className="w-full min-h-screen bg-[#000a1a] overflow-hidden flex flex-col">

      {/* HEADER: Fonte ajustada para o padrão do jogo */}
      <header className="w-full flex items-center justify-end p-6 border-b border-blue-900/50 bg-[#001538]/90 backdrop-blur-md z-20">
        <div className="flex items-center gap-8 text-white font-sans font-black text-2xl tracking-widest uppercase">
          <Link href="/">
            <span className="cursor-pointer hover:opacity-100 transition-colors opacity-50">EXIT</span>
          </Link>
          <span className="cursor-pointer hover:opacity-100 transition-colors opacity-50">PLAY</span>
          <span className="cursor-pointer">LOCKER</span>
        </div>
      </header>

      <section className="grow relative flex flex-col md:flex-row items-center justify-center p-6 gap-8">

        <div className="absolute inset-0 z-0 bg-linear-to-b from-[#003B93] via-[#001d52] to-[#000a1a]"></div>

        {/* --- LADO ESQUERDO: A SKIN GIGANTE --- */}
        <div className="relative w-full md:w-1/2 h-[50vh] md:h-[80vh] flex items-end justify-center z-10">
          <div className="absolute bottom-5 w-64 h-16 bg-[#4A90E2]/20 rounded-[100%] blur-[2px] border-2 border-cyan-400/30 transform perspective-midrange rotateX-[70deg] shadow-[0_0_30px_rgba(74,144,226,0.5)]"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={skinAtual.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full h-full flex items-end justify-center pb-10"
            >
              <Image src={skinAtual.src} alt={skinAtual.nome} fill className="object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]" priority />
            </motion.div>
          </AnimatePresence>

          {/* NOME DA SKIN: Agora usando a fonte forte do jogo */}
          <div className="absolute bottom-20 left-0 md:left-10 flex flex-col">
            <span className="text-blue-400 text-sm tracking-widest italic uppercase font-sans font-bold">OUTFIT - FORTNITE STYLE</span>
            <h1 className="font-sans font-black text-6xl md:text-8xl text-white tracking-wider drop-shadow-lg italic uppercase">
              {skinAtual.nome}
            </h1>
          </div>
        </div>

        {/* --- LADO DIREITO: LOCKER & MAPA --- */}
        <div className="w-full md:w-1/2 flex flex-col z-10 gap-6 h-full md:h-[85vh]">

          {/* O SELETOR DE SKINS (Refatorado para combinar com o botão do mapa) */}
          <div className="flex flex-col gap-2 w-full bg-[#12233a] p-5 rounded-3xl border-b-4 border-black/30 shadow-2xl grow">

            {/* Header do Locker (Sem o Search!) */}
            <div className="flex justify-between items-center mb-1 pb-2">
              <h3 className="font-sans font-black text-3xl text-white italic drop-shadow-md uppercase tracking-wide px-1">
                CHARACTER
              </h3>
            </div>

            <div className="grid grid-cols-5 md:grid-cols-7 gap-2 md:gap-3 max-h-[40vh] overflow-y-auto p-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {skinsDoLobby.map((skin) => (
                <div key={skin.id} className="relative w-full aspect-square">
                  <button onClick={() => setSkinAtual(skin)} title={skin.nome} className={`absolute inset-0 w-full h-full rounded-xl overflow-hidden border-2 transition-all block ${skinAtual.id === skin.id ? "border-[#fbff00] scale-110 shadow-[0_0_15px_rgba(251,255,0,0.8)] z-20" : "border-[#4A90E2]/40 hover:border-white hover:scale-110 hover:z-10 z-0"} bg-linear-to-b from-[#417fd6] to-[#0b1f4a]`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] pointer-events-none"></div>
                    <div className="absolute inset-1 md:inset-2 pointer-events-none">
                      <Image src={skin.src} alt={skin.nome} fill sizes="(max-width: 768px) 20vw, 15vw" className="object-contain object-center drop-shadow-lg" />
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* --- CAIXA DE AÇÃO DO MAPA --- */}
          <div className="w-full bg-[#394a5c] rounded-3xl p-5 flex flex-col gap-4 shadow-2xl relative border-b-4 border-black/30">

            <h3 className="font-sans font-black text-white italic text-3xl tracking-wide uppercase drop-shadow-md px-1">
              MAPA INTERATIVO
            </h3>

            <div className="w-full bg-[#8797a8] border-[3px] border-[#a7b7c8] text-[#111] font-sans font-bold text-xl p-3 rounded-2xl flex items-center gap-3 transition-all hover:border-white hover:bg-[#9aacbf] cursor-default">
              <svg className="w-6 h-6 opacity-70" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" /></svg>
              Radares Confidenciais
            </div>

            <Link
              href="/fortnite/mapa"
              className="w-full bg-[#f9ff00] text-[#111] font-sans font-black text-4xl p-5 rounded-2xl flex justify-center items-center outline-none ring-0 hover:ring-[5px] hover:ring-white hover:ring-offset-[5px] hover:ring-offset-[#394a5c] transition-all duration-200 cursor-pointer shadow-lg active:scale-[0.98] uppercase"
            >
              ABRIR
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}