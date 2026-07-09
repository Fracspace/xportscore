"use client";

import ExportAssessment from "@/components/DashboardComponents/AssessmentComponents/ExportAssessment";
import BusinessVerification from "@/components/DashboardComponents/BusinessVerification/BusinessVerification";
import CompletedAssessmentCard from "@/components/DashboardComponents/Common/CompletedAssessmentCard";
import DraftAssessmentCard from "@/components/DashboardComponents/Common/DraftAssessmentCard";
import ReviewAssessmentCard from "@/components/DashboardComponents/Common/ReviewAssessmentCard";
import StatsSection from "@/components/DashboardComponents/Common/StatsSection";
import VerificationProgressCard from "@/components/DashboardComponents/Common/XportVerifyComponents/VerificationProgressCard";
import React from "react";
import { useState } from "react";

function Dashboard() {
  const tabs = ["All Projects", "Export Readiness", "Business Verification"];

  const [activeTab, setActiveTab] = useState("All Projects");
  return (
    <div>
      <div className="ml-4 mr-4 mt-8">
        <StatsSection />
      </div>
      <div className="border-b border-gray-200 ml-12 mt-12">
        <div className="flex items-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-4 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab
                  ? "text-slate-900"
                  : "text-gray-500 hover:text-slate-800"
              }`}
            >
              {tab}

              {activeTab === tab && (
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-slate-900 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4">
        {activeTab == "All Projects" && (
          <div>
            <div>
              <ExportAssessment />
            </div>
            <div>
              <BusinessVerification />
            </div>
          </div>
        )}

        {activeTab == "Export Readiness" && <ExportAssessment />}

        {activeTab == "Business Verification" && <BusinessVerification />}

        {/* <div>
          <CompletedAssessmentCard />
        </div>
        <div className="mt-4">
          <DraftAssessmentCard />
        </div>
        <div className="mt-4">
          <ReviewAssessmentCard />
        </div>
        <div className="mt-4">
          <VerificationProgressCard />
        </div> */}
        <div></div>
      </div>
    </div>
  );
}

export default Dashboard;
