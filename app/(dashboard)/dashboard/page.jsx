"use client";

import React, { useState, useEffect } from "react";
import ExportAssessment from "@/components/DashboardComponents/AssessmentComponents/ExportAssessment";
import BusinessVerification from "@/components/DashboardComponents/BusinessVerification/BusinessVerification";
import StatsSection from "@/components/DashboardComponents/Common/StatsSection";

function Dashboard() {
  const tabs = ["All Projects", "Export Readiness", "Business Verification"];
  const [activeTab, setActiveTab] = useState("All Projects");

  const [assessment, setAssessment] = useState(null);
  const [verification, setVerification] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {
    const token = localStorage.getItem("token");
    const assessmentId = localStorage.getItem("assessmentId");
    const verificationId = localStorage.getItem("verificationRequestId");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      if (assessmentId) {
        const res = await fetch(`https://api.xportscore.com/api/export-assessments/${assessmentId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Xportscore@2026",
            "Authorization": `Bearer ${token}`
          }
        });
        const result = await res.json();

        console.log("assessment result is", result);
        if (res.ok && result?.success) {
          setAssessment(result.data || result);
        }
      }
    } catch (err) {
      console.error("Error fetching assessment stats:", err);
    }

    try {
      if (verificationId) {
        const res = await fetch(`https://api.xportscore.com/api/verify-requests/${verificationId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Xportscore@2026",
            "Authorization": `Bearer ${token}`
          }
        });
        const result = await res.json();
        console.log("verification result is", result);
        if (res.ok && result?.success) {
          setVerification(result.data || result);
        }
      }
    } catch (err) {
      console.error("Error fetching verification stats:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div>
      <div className="ml-4 mr-4 mt-8">
        <StatsSection assessment={assessment} verification={verification} loading={loading} />
      </div>
      <div className="border-b border-gray-200 ml-12 mt-12">
        <div className="flex items-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-4 text-sm font-medium transition-colors duration-200 ${activeTab === tab ? "text-slate-900" : "text-gray-500 hover:text-slate-800"
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
        {activeTab === "All Projects" && (
          <div>
            <div>
              <ExportAssessment assessment={assessment} loading={loading} />
            </div>
            <div className="mt-6">
              <BusinessVerification verification={verification} loading={loading} />
            </div>
          </div>
        )}

        {activeTab === "Export Readiness" && (
          <ExportAssessment assessment={assessment} loading={loading} />
        )}

        {activeTab === "Business Verification" && (
          <BusinessVerification verification={verification} loading={loading} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
