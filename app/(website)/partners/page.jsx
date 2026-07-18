"use client"

import PartnerModels from "@/components/PartnersComponents/PartnerModels";
import PartnersHero from "@/components/PartnersComponents/PartnersHero";
import WhoCanPartner from "@/components/PartnersComponents/WhoCanPartner";
import PartnerForm from "@/components/PartnersComponents/PartnerForm";
import React from "react";

function Partners() {
  return (
    <div className="mt-10">
      <PartnersHero />
      <WhoCanPartner />
      <PartnerModels />
      <PartnerForm />
    </div>
  );
}

export default Partners;
