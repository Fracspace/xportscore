"use client";

import React from "react";
import VerifiedBusinessCard from "../Common/XportVerifyComponents/VerifiedBusinessCard";
import VerificationProgressCard from "../Common/XportVerifyComponents/VerificationProgressCard";
import FinalStageCard from "../Common/XportVerifyComponents/FinalStageCard";

function BusinessVerification({ verification, loading }) {
  if (loading) {
    return null;
  }

  if (!verification) {
    return (
      <div className="flex flex-col items-center justify-center p-10 bg-white border border-gray-200 rounded-xl text-center">
        <h3 className="text-xl font-semibold text-slate-800">No Business Verification Request Found</h3>
        <p className="mt-2 text-sm text-gray-500 max-w-sm">
          You haven't initiated a corporate/business verification yet. Start a verification to build export trust.
        </p>
      </div>
    );
  }

  const isDone = verification.status === "completed" || verification.status === "done" || verification.status === "approved" || verification.verificationStatus === "completed" || verification.verificationStatus === "done" || verification.verificationStatus === "approved";

  return (
    <div>
      <div className="mt-4">
        {isDone ? (
          <VerifiedBusinessCard verification={verification} />
        ) : (
          <>
            <VerificationProgressCard verification={verification} />
            <div className="mt-4">
              <FinalStageCard />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BusinessVerification;
