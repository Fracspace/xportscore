"use client";

import { Building2 } from "lucide-react";

export default function FinalStageCard() {
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-lg transition"
      style={{
        backgroundImage:
          "linear-gradient(#f5f5f5 1px, transparent 1px), linear-gradient(90deg,#f5f5f5 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }}
    >
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex justify-between">
          <span className="px-4 py-1 rounded-full bg-gray-100 text-xs font-semibold uppercase text-slate-600">
            In-Transit
          </span>

          <span className="text-xs uppercase tracking-widest font-semibold text-slate-500">
            Analyst Review
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-7 text-2xl font-bold text-slate-900">
          Business Verification
        </h2>

        {/* Company */}
        <div className="flex items-center gap-2 mt-4 text-sm text-slate-700">
          <Building2 size={15} />
          <span>ABC Global Ltd</span>
        </div>

        {/* Progress */}
        <div className="mt-10 flex items-center gap-3">
          <div className="flex-1 h-[3px] rounded-full bg-teal-600"></div>

          <span className="font-semibold text-slate-700 whitespace-nowrap">
            Final Stage
          </span>

          <div className="flex-1 h-[3px] rounded-full bg-gray-300"></div>
        </div>

        {/* Text */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 leading-7">
            Expected completion in approximately
          </p>

          <p className="mt-2 text-lg font-semibold text-slate-900">
            24 Hours.
          </p>
        </div>
      </div>
    </div>
  );
}