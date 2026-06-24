import PartnerModels from "@/components/PartnersComponents/PartnerModels";
import PartnersHero from "@/components/PartnersComponents/PartnersHero";
import WhoCanPartner from "@/components/PartnersComponents/WhoCanPartner";
import React from "react";

function Partners() {
  return (
    <div className="mt-10">
      <PartnersHero />
      <WhoCanPartner />
      <PartnerModels />
    </div>
  );
}

export default Partners;
