import Hero from "@/components/XportVerifyComponents/Hero";
import Pricing from "@/components/XportVerifyComponents/Pricing";
import VerificationAreas from "@/components/XportVerifyComponents/VerificationAreas";
import VerificationRequestForm from "@/components/XportVerifyComponents/VerifyForm/VerificationRequestForm";
import VerifyForm from "@/components/XportVerifyComponents/VerifyForm/VerifyForm";
import React from "react";

function page() {
  return (
    <div>
      <h1>Export Verify</h1>
      <div>
        <Hero />
        <VerificationAreas />
        <Pricing />
        <VerificationRequestForm />
        {/* <VerifyForm /> */}
      </div>
    </div>
  );
}

export default page;
