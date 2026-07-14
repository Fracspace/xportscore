"use client";

import React from "react";
import CompletedAssessmentCard from "../Common/CompletedAssessmentCard";
import DraftAssessmentCard from "../Common/DraftAssessmentCard";
import ReviewAssessmentCard from "../Common/ReviewAssessmentCard";

import { useAuth } from "@/app/context/AuthContext";
import { useState, useEffect } from "react";

function ExportAssessment() {
  // const { token } = useAuth();

  // console.log("token")

  // const { token } = useAuth();

  // Replace this with wherever you're storing the assessment ID
  let assessmentId;
  if (typeof window !== "undefined") {
    assessmentId = localStorage.getItem("assessmentId");
  }

  console.log("assesment id is", assessmentId);
  const assessmentId1 = "56623c58-8ed1-4638-8bd1-b90cac2a1017";

  const [assessment, setAssessment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // if (!token || !assessmentId) {
    //   setLoading(false);
    //   return;
    // }

    const fetchAssessment = async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem("token");

        console.log("token is ", token);

        const response = await fetch(
          `https://api.xportscore.com/api/export-assessments/${assessmentId1}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "Xportscore@2026",
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = await response.json();

        console.log("Assessment Response:", data);

        if (!response.ok) {
          throw new Error(data?.message || "Failed to fetch assessment");
        }

        setAssessment(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAssessment();
  }, []);

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
