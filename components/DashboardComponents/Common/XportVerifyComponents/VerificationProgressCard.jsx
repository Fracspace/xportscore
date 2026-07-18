"use client";

import { Building2, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

export default function VerificationProgressCard({ verification }) {
  const router = useRouter();
  const isSubmitted = verification?.status === "submitted" || verification?.status === "in_review";

  const reqId = verification?.id ? `VER-${verification.id.substring(0, 8).toUpperCase()}` : "VER-GLOBAL-88";
  const statusText = isSubmitted ? (verification?.status === "in_review" ? "In Review" : "Submitted") : "Draft";
  const statusColor = isSubmitted ? (verification?.status === "in_review" ? "bg-amber-500" : "bg-teal-500") : "bg-gray-400";
  const companyName = verification?.business_to_verify?.legalCompanyName || "ABC Global Ltd";

  const progressPercent = isSubmitted ? "100%" : "60%";
  const progressWidthClass = isSubmitted ? "w-full bg-teal-600" : "w-[60%] bg-teal-700";

  const footerText = isSubmitted ? "View Submitted Details" : "Continue Verification";
  const destination = isSubmitted ? "/dashboard/verifications/view" : "/dashboard/continueverification";

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <span className="px-4 py-1 rounded-full bg-blue-100 text-[11px] font-semibold tracking-wide text-slate-600">
              {reqId}
            </span>

            <span className="flex items-center gap-2 text-xs uppercase font-semibold text-gray-500">
              <span className={`w-2 h-2 rounded-full ${statusColor}`}></span>
              {statusText}
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
          <span className="text-sm">{companyName}</span>
        </div>

        {/* Progress */}
        <div className="mt-8">
          <div className="flex justify-between mb-3 text-sm font-medium">
            <span>Submission Progress</span>
            <span>{progressPercent}</span>
          </div>

          <div className="w-full h-2 rounded-full bg-blue-100 overflow-hidden">
            <div className={`h-full rounded-full ${progressWidthClass}`}></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <button
        onClick={() => router.push(destination)}
        className="border-t cursor-pointer border-gray-200 w-full py-5 flex justify-center items-center gap-3 text-teal-700 font-semibold hover:bg-gray-50 transition"
      >
        {footerText}
        <ExternalLink size={18} />
      </button>
    </div>
  );
}
