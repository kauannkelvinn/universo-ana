"use client";

import Image from "next/image";
import Link from "next/link";

export default function EsteticaPage() {
  const fotos = [
    { 
      src: "/imagens/MemoriasDela/nossostenis.jpg", 
      titulo: "TENIS COMBINANDO", 
      data: "VIBES" 
    },
    { 
      src: "/imagens/MemoriasDela/primeirasflores.jpg", 
      titulo: "PRIMEIRAS FLORES", 
      data: "VIBES" 
    },
    { 
      src: "/imagens/MemoriasDela/showsystemofadown.jpg", 
      titulo: "SYSTEM OF A DOWN", 
      data: "SHOWS" 
    },
    { 
      src: "/imagens/MemoriasDela/circusmaximusallianz.jpg", 
      titulo: "CIRCUS MAXIMUS", 
      data: "SHOWS" 
    },
    { 
      src: "/imagens/MemoriasDela/travistocandonamao.JPEG", 
      titulo: "JA PODE BOTAR NO CURRICULO", 
      data: "SHOWS" 
    },
    { 
      src: "/imagens/MemoriasDela/fortniteeasfloresroxas.jpg", 
      titulo: "SETUP & FLORES", 
      data: "VIBES" 
    },
    { 
      src: "/imagens/MemoriasDela/showtravislook.jpeg", 
      titulo: "OH MUIE LINDA", 
      data: "SHOWS" 
    },
    { 
      src: "/imagens/MemoriasDela/kendricktv.jpg", 
      titulo: "A VIBE EM CASA", 
      data: "VIBES" 
    },
    { src: "/imagens/MemoriasDela/fotocarolmrmorales.jpg", titulo: "MR. MORALE", data: "VIBES" },
    { src: "/imagens/MemoriasDela/grupinhotravisscotteelathetown.jpg", titulo: "O SQUAD", data: "THE TOWN" },
    { src: "/imagens/MemoriasDela/Screenshot_2.png", titulo: "LIMP BIZKIT", data: "SHOWS" },
    { src: "/imagens/MemoriasDela/kendrickshow2023.jpg", titulo: "KENDRICK 2023", data: "SHOWS" },
    { src: "/imagens/MemoriasDela/kendrickshowallianzgnx.jpg", titulo: "GOOD CREDIT", data: "SHOWS" },
    { src: "/imagens/MemoriasDela/euphoria.jpg", titulo: "GNX", data: "SHOWS" },
    { src: "/imagens/MemoriasDela/travisshowthetown.jpg", titulo: "TRAVIS NO THE TOWN", data: "SHOWS" },
    { src: "/imagens/MemoriasDela/travisshowallianz.jpg", titulo: "CIRCUS MAXIMUS SP", data: "SHOWS" },
    { src: "/imagens/MemoriasDela/touchthesky.jpg", titulo: "TOUCH THE SKY", data: "VIBES" },
    { src: "/imagens/MemoriasDela/highestintheroom.jpg", titulo: "HIGHEST IN THE ROOM", data: "VIBES" },
    { src: "/imagens/MemoriasDela/mesentindoxtranho.jpg", titulo: "ME SENTINDO MEI XTRANHO", data: "SHOWS" },
    { src: "/imagens/MemoriasDela/paisagem.jpg", titulo: "OLHANDO PRO NADA", data: "VIBES" },
    { src: "/imagens/MemoriasDela/roles.jpg", titulo: "MUCHA COMIDA PAPAI", data: "VIBES" },
  ];

  return (
    <main className="w-full min-h-screen bg-[#0a0a0a] text-zinc-300">
      
      {/* HEADER AMARLEO / DOURADO */}
      <header className="w-full flex items-center justify-between p-6 border-b border-zinc-800">
        <Link href="/" className="font-y2k text-sm hover:text-[#ffd700] transition-colors tracking-widest">
          [ VOLTAR AO UNIVERSO ]
        </Link>
        <h1 className="font-y2k text-4xl hidden md:block text-white tracking-widest absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
          A ESTETICA
        </h1>
        <div className="w-24"></div> 
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 border-l border-zinc-800">
        
        {fotos.map((foto, index) => (
          <article key={index} className="relative flex flex-col h-[60vh] md:h-[80vh] border-r border-b border-zinc-800 p-6 group hover:bg-zinc-900/20 transition-colors">
            
            <div className="relative grow w-full overflow-hidden">
              {foto.src.endsWith(".mp4") || foto.src.endsWith(".MOV") ? (
                <video src={foto.src} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-700" />
              ) : (
                <Image src={foto.src} alt={foto.titulo} fill className="object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-700" />
              )}
            </div>

            <div className="flex justify-between items-end mt-6 font-y2k text-xs tracking-widest text-zinc-500 group-hover:text-white transition-colors">
              <span className="text-sm font-medium uppercase text-[#ffd700]/80 group-hover:text-[#ffd700]">{foto.titulo}</span>
              <span>{foto.data}</span>
            </div>

          </article>
        ))}

      </section>
    </main>
  );
}