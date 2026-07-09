import React from "react";
import CompletedAssessmentCard from "../Common/CompletedAssessmentCard";
import DraftAssessmentCard from "../Common/DraftAssessmentCard";
import ReviewAssessmentCard from "../Common/ReviewAssessmentCard";

function ExportAssessment() {
  return (
    <div>
      <div className="mt-4">
        <CompletedAssessmentCard />
      </div>
      <div className="mt-4">
        <DraftAssessmentCard />
      </div>
      <div className="mt-4">
        <ReviewAssessmentCard />
      </div>
    </div>
  );
}

export default ExportAssessment;
