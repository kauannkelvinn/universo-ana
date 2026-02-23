"use client";

import Image from "next/image";
import Link from "next/link";

export default function ReveillonPage() {
  const fotos = [
    { 
      src: "/imagens/eu-e-ela/viagemreveillon25/estacaoluz.jpg", 
      titulo: "A ROTINA EM SP", 
      data: "JAN 2026" 
    },
    { 
      src: "/imagens/eu-e-ela/viagemreveillon25/burguernoairbnb.jpg", 
      titulo: "NOITES NO AIRBNB", 
      data: "JAN 2026" 
    },
    { 
      src: "/imagens/eu-e-ela/viagemreveillon25/heloisaeeu.jpg", 
      titulo: "FAMÍLIA", 
      data: "JAN 2026" 
    },
    { 
      src: "/imagens/eu-e-ela/viagemreveillon25/pizza.jpg", 
      titulo: "A NOSSA PIZZA", 
      data: "JAN 2026" 
    },
    { 
      src: "/imagens/eu-e-ela/viagemreveillon25/rockburguer.JPG", 
      titulo: "ROCK BURGUER", 
      data: "JAN 2026" 
    },
    { 
      src: "/imagens/eu-e-ela/viagemreveillon25/fogosanonovo.mp4", 
      titulo: "FELIZ ANO NOVO", 
      data: "JAN 2026" 
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#0a0a0a] text-zinc-300">
      <header className="w-full flex items-center justify-between p-6 border-b border-zinc-800">
        <Link href="/" className="font-y2k text-sm hover:text-[#ff007f] transition-colors tracking-widest">
          [ VOLTAR AO UNIVERSO ]
        </Link>
        <h1 className="font-metal text-4xl text-white tracking-widest absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
          UM MES EM SP
        </h1>
        <div className="w-24"></div> 
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 border-l border-zinc-800">
        {fotos.map((foto, index) => (
          <article key={index} className="relative flex flex-col h-[60vh] md:h-[80vh] border-r border-b border-zinc-800 p-6 group hover:bg-zinc-900/20 transition-colors">
            
            <div className="relative grow w-full overflow-hidden">
              {foto.src.endsWith(".mp4") ? (
                <video src={foto.src} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-700" />
              ) : (
                <Image src={foto.src} alt={foto.titulo} fill className="object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-700" />
              )}
            </div>

            <div className="flex justify-between items-end mt-6 font-y2k text-xs tracking-widest text-zinc-500 group-hover:text-white transition-colors">
              <span className="text-sm font-scrapbook uppercase text-[#ff007f]/80 group-hover:text-[#ff007f]">{foto.titulo}</span>
              <span>{foto.data}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}