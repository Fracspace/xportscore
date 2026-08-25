"use client";

import AppForm from "@/components/AssessmentComponets/AppForm/AppForm";
import React from "react";

import { Suspense } from "react";

import { ArrowLeft, ShieldCheck, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

function XportAssessment() {
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const assessmentId = searchParams.get("assessmentId");
  // const token = searchParams.get("token");

  // console.log("Assessment ID:", assessmentId);
  // console.log("Token:", token);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className="pt-28 md:pt-36 pb-12 bg-gray-50 min-h-screen">
          <div
            onClick={() => router.back()}
            className="inline-flex cursor-pointer ml-6 md:ml-12 bg-black px-3 py-2 rounded-lg text-white items-center gap-2 text-sm transition hover:bg-gray-800"
          >
            <ArrowLeft size={16} />
            Back
          </div>
          <AppForm />
        </div>
      </div>
    </Suspense>
  );
}

export default XportAssessment;
