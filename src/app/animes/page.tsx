"use client";

import Image from "next/image";
import Link from "next/link";

export default function AnimesPage() {
 const fotos = [
    // --- BEAVIS & BUTT-HEAD (A Vibe) ---
    { src: "/imagens/animes/beavisandbutheadbang.gif", titulo: "HEAVY METAL", data: "BEAVIS & BUTT-HEAD" },
    { src: "/imagens/animes/beavisandbutdancing.gif", titulo: "A VIBE", data: "BEAVIS & BUTT-HEAD" },
    { src: "/imagens/animes/dance-cartoon.gif", titulo: "NO SOFÁ", data: "BEAVIS & BUTT-HEAD" }, // Aquele clássico deles dançando

    // --- ONE PIECE (A Tripulação e o Caos) ---
    { src: "/imagens/animes/a-tripulacao.gif", titulo: "OS CHAPÉUS DE PALHA", data: "ONE PIECE" },
    { src: "/imagens/animes/wanted.gif", titulo: "WANTED", data: "ONE PIECE" },
    { src: "/imagens/animes/ace.gif", titulo: "PUNHOS DE FOGO (ACE)", data: "ONE PIECE" },
    { src: "/imagens/animes/sanji.gif", titulo: "BLACK LEG SANJI", data: "ONE PIECE" },
    { src: "/imagens/animes/luffybattle.webp", titulo: "A LUTA", data: "ONE PIECE" },
    { src: "/imagens/animes/luffygear5olhos.webp", titulo: "GEAR 5", data: "ONE PIECE" },
  ];

  return (
    <main className="w-full min-h-screen bg-[#0a0a0a] text-zinc-300">
      
      {/* HEADER AZUL NEON */}
      <header className="w-full flex items-center justify-between p-6 border-b border-zinc-800">
        <Link href="/" className="font-y2k text-sm hover:text-[#00e5ff] transition-colors tracking-widest">
          [ VOLTAR AO UNIVERSO ]
        </Link>
        <h1 className="font-metal text-4xl text-white tracking-widest absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
          ANIMES & TV
        </h1>
        <div className="w-24"></div> 
      </header>

      {/* O GRID PIMPAN */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-l border-zinc-800">
        
        {fotos.map((foto, index) => (
          <article key={index} className="relative flex flex-col h-[60vh] md:h-[80vh] border-r border-b border-zinc-800 p-6 group hover:bg-zinc-900/20 transition-colors">
            
            <div className="relative grow w-full overflow-hidden">
              {/* O unoptimized={true} é crucial para os GIFs não travarem no Next.js! */}
              <Image 
                src={foto.src} 
                alt={foto.titulo} 
                fill 
                unoptimized={true}
                className="object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-700" 
              />
            </div>

            <div className="flex justify-between items-end mt-6 font-y2k text-xs tracking-widest text-zinc-500 group-hover:text-white transition-colors">
              <span className="text-sm uppercase text-[#00e5ff]/80 group-hover:text-[#00e5ff]">{foto.titulo}</span>
              <span>{foto.data}</span>
            </div>

          </article>
        ))}

      </section>
    </main>
  );
}