"use client";

import React, { useState, useEffect } from "react";
import ViewAssessmentDetails from "@/components/AssessmentComponets/AppForm/ViewAssessmentDetails";

export default function AssessmentViewPage() {
  const [assessment, setAssessment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const assessmentId = localStorage.getItem("assessmentId");

    if (!token || !assessmentId) {
      setError("No active assessment session found.");
      setLoading(false);
      return;
    }

    const fetchAssessment = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.xportscore.com/api/export-assessments/${assessmentId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Xportscore@2026",
            "Authorization": `Bearer ${token}`
          }
        });
        const result = await res.json();
        console.log("inside view result is", result);
        
        if (res.ok && result?.success) {
          setAssessment(result.data || result);
        } else {
          setError(result?.message || "Failed to load assessment details.");
        }
      } catch (err) {
        console.error(err);
        setError("Something went wrong while fetching the assessment details.");
      } finally {
        setLoading(false);
      }
    };

    fetchAssessment();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-teal-600 border-t-transparent" />
          <p className="mt-4 text-slate-600 font-medium">Loading assessment details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-md text-center py-16">
        <div className="rounded-2xl border border-red-100 bg-red-50 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-red-800">Error Loading Assessment</h3>
          <p className="mt-2 text-sm text-red-600 leading-relaxed">{error}</p>
        </div>
      </div>
    );
  }

  return <ViewAssessmentDetails assessment={assessment} />;
}
