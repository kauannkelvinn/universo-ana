import TemplateGaleria from "@/components/TemplateGaleria";

export default function ReveillonPage() {
  const fotos = [
    { src: "/imagens/eu-e-ela/viagemreveillon25/estacaoluz.jpg", titulo: "A ROTINA EM SP", data: "JAN 2026" },
    { src: "/imagens/eu-e-ela/viagemreveillon25/burguernoairbnb.jpg", titulo: "NOITES NO AIRBNB", data: "JAN 2026" },
    { src: "/imagens/eu-e-ela/viagemreveillon25/heloisaeeu.jpg", titulo: "FAMÍLIA", data: "JAN 2026" },
    { src: "/imagens/eu-e-ela/viagemreveillon25/pizza.jpg", titulo: "A NOSSA PIZZA", data: "JAN 2026" },
    { src: "/imagens/eu-e-ela/viagemreveillon25/rockburguer.JPG", titulo: "ROCK BURGUER", data: "JAN 2026" },
    { src: "https://res.cloudinary.com/dyxzqghnx/video/upload/v1771948888/Fogosanonovo_omn1iv.mp4", titulo: "FELIZ ANO NOVO", data: "JAN 2026" },
  ];

  return (
    <TemplateGaleria 
      tituloPagina="UM MES EM SP" 
      corHoverTexto="#ff007f" 
      fotos={fotos} 
    />
  );
}