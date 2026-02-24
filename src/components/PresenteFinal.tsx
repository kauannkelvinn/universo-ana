"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PresenteFinal() {
  const [aberto, setAberto] = useState(false);
  const [hackeando, setHackeando] = useState(false);

  const abrirPresente = () => {
    setHackeando(true);
    // Simula um tempo de "descriptografia" de 2 segundos
    setTimeout(() => {
      setHackeando(false);
      setAberto(true);
    }, 2000);
  };

  return (
    <section className="relative w-full max-w-4xl mx-auto px-6 py-32 z-10 flex flex-col items-center justify-center text-center">
      
      {/* Título */}
      <div className="mb-10">
        <h2 className="font-sans font-black text-4xl md:text-6xl text-white uppercase drop-shadow-[0_0_15px_rgba(178,92,255,0.5)]">
          SUPPLY DROP <span className="text-[#b25cff]">MÍTICO</span>
        </h2>
        <p className="font-y2k text-zinc-400 mt-4 text-sm tracking-[0.2em] uppercase">
          [ AVISO DO SISTEMA: Loot interceptado em Santo André ]
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!aberto ? (
          <motion.button
            key="botao-fechado"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={abrirPresente}
            disabled={hackeando}
            // Botão ROXO NEON
            className="relative group w-64 h-20 bg-[#1a0b2e] border-2 border-[#b25cff] rounded-2xl flex items-center justify-center overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(178,92,255,0.4)] hover:shadow-[0_0_50px_rgba(178,92,255,0.8)]"
          >
            {/* Efeito de scanline no botão */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(178,92,255,0.1)_50%)] bg-size-[100%_4px] pointer-events-none"></div>
            
            <span className="font-y2k text-[#b25cff] tracking-[0.3em] text-sm group-hover:text-white transition-colors z-10">
              {hackeando ? "RASTREANDO..." : "[ REVELAR COORDENADAS ]"}
            </span>
            
            {hackeando && (
              <motion.div 
                className="absolute left-0 top-0 h-full bg-[#b25cff]/30 z-0"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "linear" }}
              />
            )}
          </motion.button>
        ) : (
          <motion.div
            key="mensagem-aberta"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-[#0d0514] border-2 border-[#b25cff] rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(178,92,255,0.3)] relative overflow-hidden"
          >
            {/* Luz de fundo roxa */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#b25cff]/20 rounded-full blur-[100px] pointer-events-none"></div>

            <h3 className="font-sans font-black text-2xl md:text-4xl text-white uppercase mb-6">
              MISSÃO DE <span className="text-[#39ff14]">ANIVERSÁRIO</span>
            </h3>
            
            <p className="font-light text-sm md:text-lg text-zinc-300 mb-6 leading-relaxed max-w-2xl mx-auto">
              Ana Carolinne, o universo digital só consegue guardar uma parte da nossa história. O seu loot real dropou e você já pode ouvir os tambores da liberdade tocando. 🥁
            </p>

            <p className="font-bold text-sm md:text-lg text-white mb-8 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
              Um item de raridade Mítica (Gear 5) está aguardando o seu resgate lá perto da sua casa, em Santo André.
            </p>

            <div className="inline-block border border-[#b25cff]/50 bg-[#b25cff]/10 px-6 py-3 rounded-full animate-pulse shadow-[0_0_20px_rgba(178,92,255,0.2)]">
              <span className="font-y2k text-[#b25cff] tracking-[0.2em] text-sm md:text-base uppercase font-bold">
                [ DISPONÍVEL PARA RESGATE: DIA 25 ]
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}