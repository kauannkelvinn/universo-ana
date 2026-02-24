"use function";

export default function Footer() {
  return (
    <footer className="relative w-full py-32 flex flex-col items-center justify-center bg-[#050505] border-t border-zinc-900 z-10 overflow-hidden">
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#b25cff]/10 blur-[100px] pointer-events-none"></div>

      <div className="text-center px-6 max-w-3xl">
        <h2 className="font-black text-xl md:text-5xl text-[#e0e0e0] mb-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
          FELIZ ANIVERSÁRIO MEU BEM!!
        </h2>
    

        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-px bg-linear-to-r from-transparent via-[#39ff14] to-transparent"></div>
          <p className="font-light text-white text-[10px] md:text-sm tracking-[0.3em]">
            FEITO COM 🤍 PARA A ANA CAROLINNE, ISSO É APENAS O COMEÇO. TE AMO
          </p>
        </div>
      </div>
    </footer>
  );
}