"use client";

import { Building2, Eye, Download } from "lucide-react";
import { useRouter } from "next/navigation";

export default function VerifiedBusinessCard({ verification }) {
  const router = useRouter();
  const companyName = verification?.business_to_verify?.legalCompanyName || "ABC Global Ltd";

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="px-4 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold uppercase">
          Verified
        </span>

        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700">
          <span className="w-2 h-2 rounded-full bg-teal-600"></span>
          Completed
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-7 text-2xl font-bold text-slate-900">
        Business Verification
      </h2>

      {/* Company */}
      <div className="flex items-center gap-2 mt-4 text-sm text-slate-700">
        <Building2 size={15} />
        <span>{companyName}</span>
      </div>

      {/* Result */}
      <div className="mt-6 rounded-lg bg-blue-50 p-4">
        <p className="text-sm leading-6 text-slate-700">
          Compliance status:
          <span className="font-bold text-teal-700">
            {" "}
            CLEAR.
          </span>{" "}
          No major financial or legal risks identified in
          high-priority sectors.
        </p>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        <button
          onClick={() => router.push("/dashboard/verifications/view")}
          className="flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white py-3 font-medium hover:bg-slate-800 transition cursor-pointer"
        >
          <Eye size={18} />
          View Full
        </button>

        <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 py-3 font-medium text-slate-700 hover:bg-gray-50 transition">
          <Download size={18} />
          PDF
        </button>
      </div>
    </div>
  );
}