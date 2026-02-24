"use client";

import Image from "next/image";
import Link from "next/link";

export default function KendrickPage() {
  const fotos = [
    // O início de tudo (The Pop Out)
    { 
      src: "/imagens/eu-e-ela/thepopoutkendrick24/eventoquefezagenteseconhecer.JPEG", 
      titulo: "O INÍCIO DE TUDO (THE POP OUT)",
      data: "JUN 2024" 
    },
    { 
      src: "/imagens/eu-e-ela/thepopoutkendrick24/videoquegraveidatv.mp4", // <- LEMBRA DE CONVERTER PRA MP4!
      titulo: "ASSISTINDO DE LONGE", 
      data: "JUN 2024" 
    },
    // A viagem e o show real
    { 
      src: "/imagens/eu-e-ela/viagemkendrick2025/avpaulista.jpg", 
      titulo: "SÃO PAULO", 
      data: "SET 2025" 
    },
    { 
      src: "/imagens/eu-e-ela/viagemkendrick2025/pulseirashowkendrick.jpg", 
      titulo: "A ESPERA", 
      data: "SET 2025" 
    },
    { 
      src: "/imagens/eu-e-ela/viagemkendrick2025/fotokendrick.jpg", 
      titulo: "ELE NA NOSSA FRENTE", 
      data: "SET 2025" 
    },
    { 
      src: "/imagens/eu-e-ela/viagemkendrick2025/notlikeus.mp4", // <- LEMBRA DE CONVERTER E TIRAR O ESPAÇO!
      titulo: "WOP WOP WOP WOP WOP", 
      data: "SET 2025" 
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#0a0a0a] text-zinc-300">
      <header className="w-full flex items-center justify-between p-6 border-b border-zinc-800">
        <Link href="/" className="font-y2k text-sm hover:text-[#00ffff] transition-colors tracking-widest">
          [ VOLTAR AO UNIVERSO ]
        </Link>
        <h1 className="font-metal text-4xl text-white tracking-widest absolute left-1/2 -translate-x-1/2">
          SING ABOUT ME
        </h1>
        <div className="w-24"></div> 
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 border-l border-zinc-800">
        {fotos.map((foto, index) => (
          <article key={index} className="relative flex flex-col h-[60vh] md:h-[80vh] border-r border-b border-zinc-800 p-6 group hover:bg-zinc-900/20 transition-colors">
            
            {/* Lógica inteligente para Imagem ou Vídeo */}
            <div className="relative grow w-full overflow-hidden">
              {foto.src.endsWith(".mp4") ? (
                <video src={foto.src} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-700" />
              ) : (
                <Image src={foto.src} alt={foto.titulo} fill className="object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-700" />
              )}
            </div>

            <div className="flex justify-between items-end mt-6 font-y2k text-xs tracking-widest text-zinc-500 group-hover:text-white transition-colors">
              <span className="text-sm font-scrapbook uppercase text-[#00ffff]/80 group-hover:text-[#00ffff]">{foto.titulo}</span>
              <span>{foto.data}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}