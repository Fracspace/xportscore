"use client";

import AppForm from "@/components/AssessmentComponets/AppForm/AppForm";
import React from "react";

import { ArrowLeft, ShieldCheck, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";

function page() {
  return (
    <div>
      <div className="mt-16 pt-12 bg-gray-50">
        <div
          onClick={() => router.back()}
          className="inline-flex cursor-pointer ml-12 bg-black px-2 py-2 rounded-lg text-white items-center gap-2 text-sm text-gray-500  transition"
        >
          <ArrowLeft size={16} />
          Back
        </div>
        <AppForm />
      </div>
    </div>
  );
}

export default page;
