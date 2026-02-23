import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hobbies from "@/components/Hobbies";
import PresenteFinal from "@/components/PresenteFinal";
import Retrospectiva from "@/components/Retrospectiva";
import Vitrola from "@/components/Vitrola";

export default function Home() {
  return (
    <main className="w-full bg-[#0a0a0a] overflow-hidden">
      <Hero />
      <Retrospectiva />
      <Vitrola />
      <Hobbies />
      <PresenteFinal />
      <Footer />
    </main>
  );
}