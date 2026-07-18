"use client";

import React from "react";
import CompletedAssessmentCard from "../Common/CompletedAssessmentCard";
import DraftAssessmentCard from "../Common/DraftAssessmentCard";
import ReviewAssessmentCard from "../Common/ReviewAssessmentCard";

function ExportAssessment({ assessment, loading }) {
  console.log("assessment is", assessment);
  if (loading) {
    return (
      <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded-xl">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-teal-600 border-t-transparent" />
      </div>
    );
  }

  if (!assessment) {
    return (
      <div className="flex flex-col items-center justify-center p-10 bg-white border border-gray-200 rounded-xl text-center">
        <h3 className="text-xl font-semibold text-slate-800">No Export Assessment Found</h3>
        <p className="mt-2 text-sm text-gray-500 max-w-sm">
          You haven't started an Export Readiness Assessment yet. Get started to evaluate your capabilities.
        </p>
      </div>
    );
  }

  const isCompleted = assessment.status === "completed" || assessment.assessmentStatus === "completed" || assessment.assessmentStatus === "active";
  const isUnderReview = assessment.status === "review" || assessment.status === "in_review";

  return (
    <div>
      {/* <div className="mt-4">
        {isCompleted && <CompletedAssessmentCard />}
        {isUnderReview && <ReviewAssessmentCard />}
        {!isCompleted && !isUnderReview && <DraftAssessmentCard />}
      </div> */}
      <div className="mt-4">
        <div className="">
          <CompletedAssessmentCard />
        </div>
        <div className="mt-4">
          <ReviewAssessmentCard />
        </div>
        <div className="mt-4">
          <DraftAssessmentCard />
        </div>
      </div>
    </div>
  );
}

export default ExportAssessment;
