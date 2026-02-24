"use client";

import Image from "next/image";
import Link from "next/link";

export default function AlbunsPage() {
  const fotos = [
    { src: "/imagens/albuns/afterhours.jpg", titulo: "AFTER HOURS", data: "THE WEEKND" },
    { src: "/imagens/albuns/eu-e-ela/entergalactic.jpg", titulo: "ENTERGALACTIC", data: "KID CUDI" },
    { src: "/imagens/albuns/eu-e-ela/longliveasap.jpg", titulo: "LONG.LIVE.A$AP", data: "A$AP ROCKY" },
    { src: "/imagens/albuns/astroworld.jpg", titulo: "ASTROWORLD", data: "TRAVIS SCOTT" },
    { src: "/imagens/albuns/korn.jpg", titulo: "KORN", data: "KORN" },
    { src: "/imagens/albuns/igor.jpg", titulo: "IGOR", data: "TYLER, THE CREATOR" },
    { src: "/imagens/albuns/euphoria.jpg", titulo: "EUPHORIA", data: "KENDRICK LAMAR" },
    { src: "/imagens/albuns/chocolatestarfish.jpg", titulo: "CHOCOLATE STARFISH", data: "LIMP BIZKIT" },
    { src: "/imagens/albuns/iamusic.jpg", titulo: "I AM MUSIC", data: "PLAYBOI CARTI" },
    { src: "/imagens/albuns/utopia.jpg", titulo: "UTOPIA", data: "TRAVIS SCOTT" },
    { src: "/imagens/albuns/birdsinthetrap.jpg", titulo: "BIRDS IN THE TRAP SING MCKNIGHT", data: "TRAVIS SCOTT" },
    { src: "/imagens/albuns/rodeo.jpg", titulo: "RODEO", data: "TRAVIS SCOTT" },
    { src: "/imagens/albuns/2093.jpg", titulo: "2093", data: "YEAT" },
    { src: "/imagens/albuns/dangerousummer.jpg", titulo: "DANGEROUS SUMMER", data: "YEAT" },
    { src: "/imagens/albuns/808seheartbreak.jpg", titulo: "808 & HEARTBREAK", data: "KANYE" },
    { src: "/imagens/albuns/donda.jpg", titulo: "DONDA", data: "KANYE" },
    { src: "/imagens/albuns/graduation.jpg", titulo: "GRADUATION", data: "KANYE" },
    { src: "/imagens/albuns/lateregistration.jpg", titulo: "LATE REGISTRATION", data: "KANYE" },
    { src: "/imagens/albuns/mybeautifuldarktwistedfantasy.jpg", titulo: "MY BEAUTIFUL DARK TWISTED FANTASY", data: "KANYE" },
    { src: "/imagens/albuns/thecollegedroppout.jpg", titulo: "THE COLLEGE DROPPOUT", data: "KANYE" },
    { src: "/imagens/albuns/yeezus.jpg", titulo: "YEEZUS", data: "KANYE" },
    { src: "/imagens/albuns/wolf.jpg", titulo: "WOLF", data: "TYLER, THE CREATOR" },
    { src: "/imagens/albuns/flowerboy.jpg", titulo: "FLOWER BOY", data: "TYLER, THE CREATOR" },
    { src: "/imagens/albuns/dontbedumb.jpg", titulo: "DON'T BE DUMB", data: "A$AP ROCKY" },
    { src: "/imagens/albuns/hurryuptomorrow.jpg", titulo: "HURRY UP TOMORROW", data: "THE WEEKND" },
    { src: "/imagens/albuns/goodkidmaadcity.jpg", titulo: "GOOD KID, M.A.A.D CITY", data: "KENDRICK LAMAR" },
    { src: "/imagens/albuns/notlikeus.jpg", titulo: "NOT LIKE US", data: "KENDRICK LAMAR" },
    { src: "/imagens/albuns/topimpabuterfly.jpg", titulo: "TO PIMP A BUTTERFLY", data: "KENDRICK LAMAR" },
    { src: "/imagens/albuns/mrmorales.jpg", titulo: "MR. MORALE & THE BIG STEPPERS", data: "KENDRICK LAMAR" },
    { src: "/imagens/albuns/oneofwun.jpg", titulo: "ONE OF WUN", data: "GUNNA" },
    { src: "/imagens/albuns/lastofwun.jpg", titulo: "THE LAST OF WUN", data: "GUNNA" },
    { src: "/imagens/albuns/blizzardofozz.jpg", titulo: "BLIZZARD OF OZZ", data: "OZZY OSBOURNE" },
    { src: "/imagens/albuns/dj.rxzrauer.jpg", titulo: "METEORA", data: "LINK PARK" },
    { src: "/imagens/albuns/followtheleader.jpg", titulo: "FOLLOW THE LEADER", data: "KORN" },
    { src: "/imagens/albuns/octane.jpg", titulo: "OCTANE", data: "DON TOLIVER" },
    { src: "/imagens/albuns/ridethelightning.jpg", titulo: "RIDE THE LIGHTNING", data: "METALLICA" },
  ];

  return (
    <main className="w-full min-h-screen bg-[#0a0a0a] text-zinc-300">
      
      {/* HEADER ROXO NEON */}
      <header className="w-full flex items-center justify-between p-6 border-b border-zinc-800">
        <Link href="/" className="font-y2k text-sm hover:text-[#b25cff] transition-colors tracking-widest">
          [ VOLTAR AO UNIVERSO ]
        </Link>
        <h1 className="font-metal text-4xl text-white tracking-widest absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
          DISCOGRAFIA
        </h1>
        <div className="w-24"></div> 
      </header>

      {/* O GRID PIMPAN */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-l border-zinc-800">
        
        {fotos.map((foto, index) => (
          <article key={index} className="relative flex flex-col h-[60vh] md:h-[80vh] border-r border-b border-zinc-800 p-6 group hover:bg-zinc-900/20 transition-colors">
            
            <div className="relative grow w-full overflow-hidden">
              <Image 
                src={foto.src} 
                alt={foto.titulo} 
                fill 
                className="object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-700" 
              />
            </div>

            <div className="flex justify-between items-end mt-6 font-y2k text-xs tracking-widest text-zinc-500 group-hover:text-white transition-colors">
              <span className="text-sm uppercase text-[#b25cff]/80 group-hover:text-[#b25cff]">{foto.titulo}</span>
              <span>{foto.data}</span>
            </div>

          </article>
        ))}

      </section>
    </main>
  );
}