import React from "react";
import VerifiedBusinessCard from "../Common/XportVerifyComponents/VerifiedBusinessCard";
import VerificationProgressCard from "../Common/XportVerifyComponents/VerificationProgressCard";
import FinalStageCard from "../Common/XportVerifyComponents/FinalStageCard";

function BusinessVerification() {
  return (
    <div>
      <div className="mt-4">
        <VerifiedBusinessCard />
      </div>
      <div className="mt-4">
        <VerificationProgressCard />
      </div>
      <div className="mt-4">
        <FinalStageCard />
      </div>
    </div>
  );
}

export default BusinessVerification;
