import type { Metadata } from "next";
import Nav from "@/components/Nav";
import VideoHero from "@/components/sections/VideoHero";
import Lore from "@/components/sections/Lore";
import Levels from "@/components/sections/Levels";
import StickySwap from "@/components/sections/StickySwap";
import Rewards from "@/components/sections/Rewards";
import RoiCalc from "@/components/sections/RoiCalc";
import Join from "@/components/sections/Join";

export const metadata: Metadata = {
  title: "FIRO | Inversion con leasing en operaciones roboticas gestionadas",
  description:
    "Invierte en operaciones roboticas FIRO con modelo leasing, despliegue operativo, metricas transparentes y escenarios claros de retorno para inversionistas.",
  alternates: {
    canonical: "/es",
  },
  openGraph: {
    locale: "es_ES",
    title: "FIRO | Inversion con leasing en operaciones roboticas gestionadas",
    description:
      "Financia leasing mensual, FIRO opera, y sigue retornos para inversionistas con supuestos transparentes.",
    url: "/es",
    images: [
      {
        url: "/assets/hero/dashboard.png",
        width: 1200,
        height: 800,
        alt: "Dashboard FIRO para inversion en activos roboticos",
      },
    ],
  },
};

export default function PageEs() {
  return (
    <main id="top">
      <Nav locale="es" />
      <VideoHero locale="es" />
      <Lore locale="es" />
      <Levels locale="es" />
      <div id="thesis">
        <StickySwap locale="es" />
      </div>
      <Rewards locale="es" />
      <RoiCalc locale="es" />
      <Join locale="es" />
    </main>
  );
}
