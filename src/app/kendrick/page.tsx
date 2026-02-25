import TemplateGaleria from "@/components/TemplateGaleria";

export default function KendrickPage() {
  const fotos = [
    { src: "/imagens/eu-e-ela/thepopoutkendrick24/eventoquefezagenteseconhecer.JPEG", titulo: "O INÍCIO DE TUDO (THE POP OUT)", data: "JUN 2024" },
    { src: "https://xcvpkzhmpeytdubs.public.blob.vercel-storage.com/kendricktv.mp4", titulo: "ASSISTINDO DE LONGE", data: "JUN 2024" },
    { src: "/imagens/eu-e-ela/viagemkendrick2025/avpaulista.jpg", titulo: "SÃO PAULO", data: "SET 2025" },
    { src: "/imagens/eu-e-ela/viagemkendrick2025/pulseirashowkendrick.jpg", titulo: "A ESPERA", data: "SET 2025" },
    { src: "/imagens/eu-e-ela/viagemkendrick2025/fotokendrick.jpg", titulo: "ELE NA NOSSA FRENTE", data: "SET 2025" },
    { src: "https://xcvpkzhmpeytdubs.public.blob.vercel-storage.com/notlikeuskendrick.mp4", titulo: "WOP WOP WOP WOP WOP", data: "SET 2025" },
  ];

  return (
    <TemplateGaleria 
      tituloPagina="SING ABOUT ME" 
      corHoverTexto="#00ffff" 
      fotos={fotos} 
    />
  );
}