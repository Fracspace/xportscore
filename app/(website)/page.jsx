import Navbar from "@/components/common/Navbar";
import CertificationSection from "@/components/HomepageComponents/CertificationSection";
import ExportReadiness from "@/components/HomepageComponents/ExportReadiness";
import FivePillars from "@/components/HomepageComponents/FivePillars";
import HeroSection from "@/components/HomepageComponents/HeroSection";
import MainSection from "@/components/HomepageComponents/MainSection";
import PartnersCTA from "@/components/HomepageComponents/PartnersCTA";
import ScoreGuide from "@/components/HomepageComponents/ScoreGuide";
import Standards from "@/components/HomepageComponents/Standards";
import XportScoreHero from "@/components/HomepageComponents/XportScoreHero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <XportScoreHero /> */}
      <div className="mt-16">
        <MainSection />
      </div>
      {/* <HeroSection /> */}
      <Standards />
      <ExportReadiness />
      <FivePillars />
      <ScoreGuide />
      <CertificationSection />
      <PartnersCTA />
    </div>
  );
}
