import AppForm from "@/components/AssessmentComponets/AppForm/AppForm";
import ApplicationForm from "@/components/AssessmentComponets/ApplicationForm";
import AssessmentCTA from "@/components/AssessmentComponets/AssessmentCTA";
import AssessmentForm from "@/components/AssessmentComponets/AssessmentForm";
import IndustriesWeServe from "@/components/AssessmentComponets/IndustriesWeServe";
import React from "react";

function page() {
  return (
    <div className="mt-12">
      <AssessmentCTA />
      <IndustriesWeServe />
      {/* <ApplicationForm /> */}
      {/* <AssessmentForm /> */}
      <AppForm />
    </div>
  );
}

export default page;
