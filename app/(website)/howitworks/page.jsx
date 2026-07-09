import AssessmentBasis from "@/components/HowitworksComponents/AssessmentBasis";
import AssessmentSteps from "@/components/HowitworksComponents/AssessmentSteps";
import HowXportscoreWorks from "@/components/HowitworksComponents/HowXportscoreWorks";
import React from "react";

function HowItWorks() {
  return (
    <section className="mt-12">
      <HowXportscoreWorks />
      <AssessmentSteps />
      <AssessmentBasis />
    </section>
  );
}

export default HowItWorks;
