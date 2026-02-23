"use client";

import Image from "next/image";
import Link from "next/link";

export default function RockInRioPage() {
    // O teu array de fotos do Rock in Rio
    const fotos = [
        {
            src: "/imagens/eu-e-ela/rockinrio24/localizacao.PNG",
            titulo: "NO MESMO MAPA",
            data: "SET 2024"
        },
        {
            src: "/imagens/eu-e-ela/rockinrio24/travisfotofein.JPEG",
            titulo: "SHOW DO TRAVIS",
            data: "SET 2024"
        },
        {
            src: "/imagens/eu-e-ela/rockinrio24/noispulandoemfein.mp4",
            titulo: "O CAOS PERFEITO",
            data: "SET 2024"
        },
        {
            src: "/imagens/eu-e-ela/rockinrio24/travisfein2.mp4",
            titulo: "FE!N FE!N FE!N",
            data: "SET 2024"
        },
        {
            src: "/imagens/eu-e-ela/rockinrio24/vooimagem1.JPEG",
            titulo: "A IDA",
            data: "SET 2024"
        },
        {
            src: "/imagens/eu-e-ela/rockinrio24/vooimagem3.JPEG",
            titulo: "A PONTE AÉREA",
            data: "SET 2024"
        },
    ];

    return (
        <main className="w-full min-h-screen bg-[#0a0a0a] text-zinc-300">

            {/* HEADER (Botão de Voltar e Título) */}
            <header className="w-full flex items-center justify-between p-6 border-b border-zinc-800">
                <Link href="/" className="font-y2k text-sm hover:text-[#ff4500] transition-colors tracking-widest">
                    [ VOLTAR AO UNIVERSO ]
                </Link>
                <h1 className="font-metal text-4xl text-white tracking-widest absolute left-1/2 -translate-x-1/2">
                    ROCK IN RIO
                </h1>
                <div className="w-24"></div> {/* Espaçador para manter o título no centro */}
            </header>

            {/* O GRID ESTILO PIMPAN */}
            {/* grid-cols-1 no telemóvel, grid-cols-3 no PC. border-l para fechar a linha da esquerda */}
            <section className="grid grid-cols-1 md:grid-cols-3 border-l border-zinc-800">

                {fotos.map((foto, index) => (
                    // Cada item tem border-r e border-b para criar as grades
                    <article key={index} className="relative flex flex-col h-[60vh] md:h-[80vh] border-r border-b border-zinc-800 p-6 group hover:bg-zinc-900/20 transition-colors">

                        {/* A Imagem */}
                        <div className="relative grow w-full overflow-hidden">
                            {foto.src.endsWith(".mp4") ? (
                                <video
                                    src={foto.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-700"
                                />
                            ) : (
                                <Image
                                    src={foto.src}
                                    alt={foto.titulo}
                                    fill
                                    className="object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-700"
                                />
                            )}
                        </div>

                        {/* O Texto minimalista estilo Pimpan */}
                        <div className="flex justify-between items-end mt-6 font-y2k text-xs tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                            <span className="text-sm font-scrapbook uppercase">{foto.titulo}</span>
                            <span>{foto.data}</span>
                        </div>

                    </article>
                ))}

            </section>
        </main>
    );
}