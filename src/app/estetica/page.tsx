import TemplateGaleria from "@/components/TemplateGaleria";

export default function EsteticaPage() {
  const fotos = [
    { src: "/imagens/MemoriasDela/nossostenis.jpg", titulo: "TENIS COMBINANDO", data: "VIBES" },
    { src: "/imagens/MemoriasDela/primeirasflores.jpg", titulo: "PRIMEIRAS FLORES", data: "VIBES" },
    { src: "/imagens/MemoriasDela/showsystemofadown.jpg", titulo: "SYSTEM OF A DOWN", data: "SHOWS" },
    { src: "/imagens/MemoriasDela/circusmaximusallianz.jpg", titulo: "CIRCUS MAXIMUS", data: "SHOWS" },
    { src: "/imagens/MemoriasDela/travistocandonamao.JPEG", titulo: "JA PODE BOTAR NO CURRICULO", data: "SHOWS" },
    { src: "/imagens/MemoriasDela/fortniteeasfloresroxas.jpg", titulo: "SETUP & FLORES", data: "VIBES" },
    { src: "/imagens/MemoriasDela/showtravislook.jpeg", titulo: "OH MUIE LINDA", data: "SHOWS" },
    { src: "/imagens/MemoriasDela/kendricktv.jpg", titulo: "A VIBE EM CASA", data: "VIBES" },
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
    <TemplateGaleria 
      tituloPagina="A ESTETICA" 
      corHoverTexto="#ffd700" 
      fotos={fotos} 
    />
  );
}