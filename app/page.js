import BeneficiosSection from "@/components/BeneficiosSection";
import CasosExitoSection from "@/components/CasosExitoSection";
import EquiposSection from "@/components/EquiposSection";
import FaqSection from "@/components/FaqSection";
import NoticiasSection from "@/components/NoticiasSection";
import M2MSection from "@/components/M2MSection";
import MarqueeSection from "@/components/MarqueeSection";
import SectoresSection from "@/components/SectoresSection";
import Home1 from "@/components/slider/Home1";
import NetBandLayout from "@/layouts/NetBandLayout";

const page = () => {
  return (
    <NetBandLayout header={1}>
      {/*<< Hero Section Start >>*/}
      <Home1 />
      {/*<< M2M / IoT Section Start >>*/}
      <M2MSection />
      {/*<< Sectores Section Start >>*/}
      <SectoresSection />
      {/*<< Marquee Section Start >>*/}
      <MarqueeSection />
      {/*<< Beneficios Section Start >>*/}
      <BeneficiosSection />
      {/*<< Equipos Section Start >>*/}
      <EquiposSection />
      {/*<< Casos de Éxito Section Start >>*/}
      <CasosExitoSection />
      {/*<< FAQ Section Start >>*/}
      <FaqSection />
      {/*<< Noticias Section Start >>*/}
      <NoticiasSection />
    </NetBandLayout>
  );
};
export default page;
