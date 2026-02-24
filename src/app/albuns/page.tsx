import TemplateGaleria from "@/components/TemplateGaleria";

export default function AlbunsPage() {
  const fotos = [
    { src: "/imagens/albuns/afterhours.jpg", titulo: "AFTER HOURS", data: "THE WEEKND" },
    { src: "/imagens/albuns/entergalactic.jpg", titulo: "ENTERGALACTIC", data: "KID CUDI" },
    { src: "/imagens/albuns/longliveasap.jpg", titulo: "LONG.LIVE.A$AP", data: "A$AP ROCKY" },
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
    { src: "/imagens/albuns/meteora.jpg", titulo: "METEORA", data: "LINK PARK" },
    { src: "/imagens/albuns/followtheleader.jpg", titulo: "FOLLOW THE LEADER", data: "KORN" },
    { src: "/imagens/albuns/octane.jpg", titulo: "OCTANE", data: "DON TOLIVER" },
    { src: "/imagens/albuns/ridethelightning.jpg", titulo: "RIDE THE LIGHTNING", data: "METALLICA" },
  ];

  return (
    <TemplateGaleria 
      tituloPagina="DISCOGRAFIA" 
      fonteTitulo="font-y2k"
      corHoverTexto="#b25cff" 
      fotos={fotos} 
    />
  );
}