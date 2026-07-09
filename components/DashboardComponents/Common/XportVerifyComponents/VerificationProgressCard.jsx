"use client";

import { Building2, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

export default function VerificationProgressCard() {
  const router = useRouter();
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <span className="px-4 py-1 rounded-full bg-blue-100 text-[11px] font-semibold tracking-wide text-slate-600">
              VER-GLOBAL-88
            </span>

            <span className="flex items-center gap-2 text-xs uppercase font-semibold text-gray-500">
              <span className="w-2 h-2 rounded-full bg-gray-400"></span>
              Draft
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-7 text-3xl font-semibold text-slate-900">
          Business Verification
        </h2>

        {/* Company */}
        <div className="flex items-center gap-2 mt-4 text-gray-700">
          <Building2 size={16} />

          <span className="text-sm">ABC Global Ltd (China)</span>
        </div>

        {/* Progress */}
        <div className="mt-8">
          <div className="flex justify-between mb-3 text-sm font-medium">
            <span>Submission Progress</span>

            <span>60%</span>
          </div>

          <div className="w-full h-2 rounded-full bg-blue-100 overflow-hidden">
            <div className="h-full w-[60%] bg-teal-700 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <button
        onClick={() => router.push("/dashboard/continueverification")}
        className="border-t cursor-pointer border-gray-200 w-full py-5 flex justify-center items-center gap-3 text-teal-700 font-semibold hover:bg-gray-50 transition"
      >
        Continue Verification
        <ExternalLink size={18} />
      </button>
    </div>
  );
}
