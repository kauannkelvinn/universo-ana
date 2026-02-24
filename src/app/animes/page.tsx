import TemplateGaleria from "@/components/TemplateGaleria";

export default function AnimesPage() {
  const fotos = [
    { src: "/imagens/animes/beavisandbutheadbang.gif", titulo: "HEAVY METAL", data: "BEAVIS & BUTT-HEAD" },
    { src: "/imagens/animes/beavisandbutdancing.gif", titulo: "A VIBE", data: "BEAVIS & BUTT-HEAD" },
    { src: "/imagens/animes/dance-cartoon.gif", titulo: "NO SOFÁ", data: "BEAVIS & BUTT-HEAD" },
    { src: "/imagens/animes/a-tripulacao.gif", titulo: "OS CHAPÉUS DE PALHA", data: "ONE PIECE" },
    { src: "/imagens/animes/wanted.gif", titulo: "WANTED", data: "ONE PIECE" },
    { src: "/imagens/animes/ace.gif", titulo: "PUNHOS DE FOGO (ACE)", data: "ONE PIECE" },
    { src: "/imagens/animes/sanji.gif", titulo: "BLACK LEG SANJI", data: "ONE PIECE" },
    { src: "/imagens/animes/luffybattle.webp", titulo: "A LUTA", data: "ONE PIECE" },
    { src: "/imagens/animes/luffygear5olhos.webp", titulo: "GEAR 5", data: "ONE PIECE" },
  ];

  return (
    <TemplateGaleria 
      tituloPagina="ANIMES & TV" 
      corHoverTexto="#00e5ff" 
      fotos={fotos} 
    />
  );
}