import CorePillars from "@/components/FrameworkComponents/CorePillars";
import FrameworkHero from "@/components/FrameworkComponents/FrameworkHero";
import ReadyToBenchMark from "@/components/FrameworkComponents/ReadyToBenchMark";
import WhoReviewsAssessment from "@/components/FrameworkComponents/WhoReviewsAssessment";
import XportscoreBand from "@/components/FrameworkComponents/XportscoreBand";
import React from "react";

function AssessmentFramework() {
  return (
    <div>
      <div className=" mt-15">
        <FrameworkHero />
        <CorePillars />
        <XportscoreBand />
        <WhoReviewsAssessment />
        <ReadyToBenchMark />
      </div>
    </div>
  );
}

export default AssessmentFramework;
