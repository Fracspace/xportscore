"use client";

import VerifyForm from "@/components/XportVerifyComponents/VerifyForm/VerifyForm";
import React from "react";
import { ArrowLeft, ShieldCheck, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";

function VerifyFormPage() {
  const router = useRouter();
  return (
    <div>
      <div className="mt-25 ">
        <div
          onClick={() => router.back()}
          className="inline-flex cursor-pointer ml-12 bg-black px-2 py-2 rounded-lg text-white items-center gap-2 text-sm text-gray-500  transition"
        >
          <ArrowLeft size={16} />
          Back
        </div>
        <VerifyForm />
      </div>
    </div>
  );
}

export default VerifyFormPage;
