import TemplateGaleria from "@/components/TemplateGaleria";

export default function RockInRioPage() {
  const fotos = [
    { src: "/imagens/eu-e-ela/rockinrio24/localizacao.PNG", titulo: "NO MESMO MAPA", data: "SET 2024" },
    { src: "/imagens/eu-e-ela/rockinrio24/travisfotofein.JPEG", titulo: "SHOW DO TRAVIS", data: "SET 2024" },
    { src: "https://xcvpkzhmpeytdubs.public.blob.vercel-storage.com/feinvideo.mp4", titulo: "O CAOS PERFEITO", data: "SET 2024" },
    { src: "https://xcvpkzhmpeytdubs.public.blob.vercel-storage.com/travisfeinshow.mp4", titulo: "FE!N FE!N FE!N", data: "SET 2024" },
    { src: "/imagens/eu-e-ela/rockinrio24/vooimagem1.JPEG", titulo: "A IDA", data: "SET 2024" },
    { src: "/imagens/eu-e-ela/rockinrio24/vooimagem3.JPEG", titulo: "A PONTE AÉREA", data: "SET 2024" },
  ];

  return (
    <TemplateGaleria 
      tituloPagina="ROCK IN RIO" 
      corHoverTexto="#ff4500" 
      fotos={fotos} 
    />
  );
}