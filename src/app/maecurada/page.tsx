import TemplateGaleria from "@/components/TemplateGaleria";

export default function MaeCuradaPage() {
  const fotos = [
    { src: "/imagens/MemoriasDela/maecuradadocancer.jpg", titulo: "A GRANDE VITORIA", data: "MAR 2024" },
    { src: "/imagens/MemoriasDela/guilhermeelaura1.webp", titulo: "A BASE DE TUDO", data: "AUG 2022" },
    { src: "/imagens/MemoriasDela/lauramenorzinha.jpg", titulo: "LAURA", data: "MAR 2020" },
    { src: "/imagens/MemoriasDela/guilhermemenorzinho.jpg", titulo: "GUILHERME", data: "MAR 2020" },
  ];

  return (
    <TemplateGaleria 
      tituloPagina="O MAIOR ALIVIO" 
      corHoverTexto="#39ff14" 
      fotos={fotos} 
    />
  );
}