"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GaleriaModal from "./GaleriaModal";

// Definindo o formato dos dados que o template vai receber
export interface FotoDado {
  src: string;
  titulo: string;
  data: string;
}

interface TemplateGaleriaProps {
  tituloPagina: string;
  corHoverTexto: string; // Ex: "#ff4500" para o Rock in Rio, "#00e5ff" pros Animes
  fonteTitulo?: string; // Para permitir usar a font-metal nos álbuns ou font-y2k no resto
  fotos: FotoDado[];
}

export default function TemplateGaleria({ tituloPagina, corHoverTexto, fonteTitulo = "font-y2k", fotos }: TemplateGaleriaProps) {
  const [modalAberto, setModalAberto] = useState(false);
  const [fotoAtual, setFotoAtual] = useState(0);

  // Filtra apenas as imagens (ignora vídeos) para o Modal poder funcionar perfeitamente
  const apenasImagensParaModal = fotos.map(f => f.src).filter(src => !src.endsWith(".mp4") && !src.endsWith(".MOV"));

  const abrirModal = (indexDaFoto: number) => {
    // Se for vídeo, não abre o modal (vídeo já toca na tela)
    if (fotos[indexDaFoto].src.endsWith(".mp4") || fotos[indexDaFoto].src.endsWith(".MOV")) return;
    setFotoAtual(indexDaFoto);
    setModalAberto(true);
  };

  return (
    <main className="w-full min-h-screen bg-[#0a0a0a] text-zinc-300 relative">

      {/* HEADER DINÂMICO */}
      <header className="w-full flex items-center justify-between p-6 border-b border-zinc-800">
        <Link 
          href="/" 
          className="font-y2k text-sm transition-colors tracking-widest"
          style={{ '--hover-color': corHoverTexto } as React.CSSProperties}
          onMouseEnter={(e) => e.currentTarget.style.color = corHoverTexto}
          onMouseLeave={(e) => e.currentTarget.style.color = ""}
        >
          [ VOLTAR AO UNIVERSO ]
        </Link>
        
        <h1 className={`${fonteTitulo} hidden md:block text-4xl text-white tracking-widest absolute left-1/2 -translate-x-1/2 whitespace-nowrap`}>
          {tituloPagina}
        </h1>
        <div className="w-24"></div> 
      </header>

      {/* GRID ESTILO PIMPAN */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-l border-zinc-800">
        {fotos.map((foto, index) => {
          const isVideo = foto.src.endsWith(".mp4") || foto.src.endsWith(".MOV");

          return (
            <article 
              key={index} 
              onClick={() => abrirModal(index)}
              className={`relative flex flex-col h-[60vh] md:h-[80vh] border-r border-b border-zinc-800 p-6 group hover:bg-zinc-900/20 transition-colors ${!isVideo ? 'cursor-pointer' : ''}`}
            >
              
              {/* ÁREA DA MÍDIA */}
              <div className="relative grow w-full overflow-hidden">
                {isVideo ? (
                  <video 
                    src={foto.src} 
                    autoPlay loop muted playsInline preload="none"
                    className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-700" 
                  />
                ) : (
                  <Image 
                    src={foto.src} 
                    alt={foto.titulo} 
                    fill 
                    loading="lazy"
                    unoptimized={foto.src.endsWith(".gif")} // Suporte pra os GIFs de Animes!
                    className="object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-700" 
                  />
                )}
              </div>

              {/* RODAPÉ DO CARD COM COR DINÂMICA NO HOVER */}
              <div 
                className="flex justify-between items-end mt-6 font-y2k text-xs tracking-widest text-zinc-500 transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                <span 
                  className="text-sm font-medium uppercase"
                  style={{ color: `${corHoverTexto}cc` }} // cc no final é 80% de opacidade no hex
                >
                  {foto.titulo}
                </span>
                <span>{foto.data}</span>
              </div>
            </article>
          );
        })}
      </section>

      {/* MODAL (Só carrega se estiver aberto) */}
      {modalAberto && (
        <GaleriaModal 
          imagens={apenasImagensParaModal} 
          onClose={() => setModalAberto(false)} 
        />
      )}
    </main>
  );
}