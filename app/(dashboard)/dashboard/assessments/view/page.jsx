"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ViewAssessmentDetails from "@/components/AssessmentComponets/AppForm/ViewAssessmentDetails";

function AssessmentViewContent() {
  const searchParams = useSearchParams();
  const [assessment, setAssessment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const urlId = searchParams ? searchParams.get("id") : null;
    const storageId = typeof window !== "undefined" ? localStorage.getItem("assessmentId") : null;
    const assessmentId = urlId || storageId;

    if (!assessmentId) {
      setError("No active assessment ID found. Please select an assessment from your dashboard.");
      setLoading(false);
      return;
    }

    const fetchAssessment = async () => {
      try {
        setLoading(true);
        const headers = {
          "Content-Type": "application/json",
          "x-api-key": "Xportscore@2026"
        };
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }

        const res = await fetch(`https://api.xportscore.com/api/export-assessments/${assessmentId}`, {
          method: "GET",
          headers
        });
        const result = await res.json();
        console.log("inside view result is", result);

        if (res.ok && (result?.success || result?.data || !result?.error)) {
          setAssessment(result.data || result);
        } else {
          setError(result?.message || result?.error?.message || "Failed to load assessment details.");
        }
      } catch (err) {
        console.error(err);
        setError("Something went wrong while fetching the assessment details.");
      } finally {
        setLoading(false);
      }
    };

    fetchAssessment();
  }, [searchParams]);

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

export default function AssessmentViewPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-teal-600 border-t-transparent" />
            <p className="mt-4 text-slate-600 font-medium">Loading assessment page...</p>
          </div>
        </div>
      }
    >
      <AssessmentViewContent />
    </Suspense>
  );
}
