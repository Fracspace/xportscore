"use client";

import { Eye, Download, BadgeCheck, ShieldCheck } from "lucide-react";

export default function CompletedAssessmentCard() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
      {/* Top */}
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="px-4 py-1 rounded-full bg-blue-100 text-[11px] font-semibold tracking-wide text-slate-600">
              ERA-2026-000121
            </span>

            <span className="text-xs font-bold text-teal-700 uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              Export Ready
            </span>
          </div>
        </div>

        {/* Score */}
        <div className="w-16 h-16 rounded-2xl bg-cyan-300 border border-cyan-500 flex items-center justify-center text-2xl font-bold text-slate-900">
          89
        </div>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-semibold mt-8 leading-snug text-slate-900">
        Export Readiness
        <br />
        Assessment
      </h2>

      <p className="mt-3 text-sm text-gray-500">Completed: 28 June 2026</p>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3 mt-8">
        <button className="flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 rounded-lg py-3 text-sm font-medium text-slate-700 transition">
          <Eye size={17} />
          View Report
        </button>

        <button className="flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 rounded-lg py-3 text-sm font-medium text-slate-700 transition">
          <Download size={17} />
          PDF Report
        </button>

        <button className="flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 rounded-lg py-3 text-sm font-medium text-slate-700 transition">
          <BadgeCheck size={17} />
          Certificate
        </button>

        <button className="flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 rounded-lg py-3 text-sm font-medium text-slate-700 transition">
          <ShieldCheck size={17} />
          Verify
        </button>
      </div>
    </div>
  );
}
