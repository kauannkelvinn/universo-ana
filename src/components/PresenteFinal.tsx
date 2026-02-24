"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PresenteFinal() {
  const [aberto, setAberto] = useState(false);
  const [hackeando, setHackeando] = useState(false);

  const abrirPresente = () => {
    setHackeando(true);
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
            className="relative group w-64 h-20 bg-[#1a0b2e] border-2 border-[#b25cff] rounded-2xl flex items-center justify-center overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(178,92,255,0.4)] hover:shadow-[0_0_50px_rgba(178,92,255,0.8)]"
          >
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
          
            <div className="inline-block border border-[#b25cff]/50 bg-[#b25cff]/10 px-6 py-3 rounded-full animate-pulse shadow-[0_0_20px_rgba(178,92,255,0.2)] mb-8">
              <span className="font-y2k text-[#b25cff] tracking-[0.2em] text-sm md:text-base uppercase font-bold">
                [ DISPONÍVEL PARA RESGATE: DIA 25 ]
              </span>
            </div>

            <div className="w-full bg-black/60 border border-[#b25cff]/40 p-5 md:p-6 rounded-2xl text-left max-w-md mx-auto relative overflow-hidden group hover:border-[#39ff14] transition-colors shadow-xl">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#b25cff] group-hover:bg-[#39ff14] transition-colors"></div>
              
              <p className="text-[#39ff14] font-y2k text-xs md:text-sm tracking-[0.2em] mb-4 flex items-center gap-2">
                <span className="animate-ping w-2 h-2 bg-[#39ff14] rounded-full inline-block shadow-[0_0_8px_#39ff14]"></span>
                COORDENADAS DE EXTRAÇÃO
              </p>
              
              <div className="flex flex-col gap-3 font-sans">
                <p className="text-white text-sm md:text-base">
                  <span className="font-black text-[#b25cff] uppercase mr-2">Local:</span> 
                  Agência Shopee
                </p>
                
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                  <span className="font-black text-[#b25cff] uppercase mr-2">Endereço:</span> 
                  Av Brasilia, 93 - Loja - Jardim Alvorada, Santo André - SP, 09180260
                </p>

                <div className="mt-4 p-4 bg-[#1a0b2e] border border-[#b25cff]/30 rounded-xl relative overflow-hidden group-hover:border-[#39ff14]/50 transition-colors">
                  <div className="absolute -right-10 -top-10 w-24 h-24 bg-[#b25cff]/10 rounded-full blur-xl"></div>
                  
                  <p className="text-zinc-400 font-bold text-xs uppercase tracking-wider mb-1 text-center">
                    CÓDIGO DE AUTORIZAÇÃO (PIN)
                  </p>
                  <p className="text-[#39ff14] font-black text-3xl md:text-4xl tracking-[0.3em] text-center drop-shadow-[0_0_10px_rgba(57,255,20,0.4)]">
                    198111
                  </p>
                  
                  <div className="w-full h-px bg-zinc-800 my-3"></div>
                  
                  <p className="text-red-400 font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                    Data limite: 05/03/2026
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}