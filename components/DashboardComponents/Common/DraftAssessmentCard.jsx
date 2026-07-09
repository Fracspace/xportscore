"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DraftAssessmentCard() {
    const router = useRouter();
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        {/* Top */}
        <div className="flex justify-between items-center mb-8">
          <span className="px-4 py-1 rounded-full bg-blue-100 text-[11px] font-semibold tracking-wide text-slate-600">
            ERA-2026-000145
          </span>

          <span className="flex items-center gap-2 text-xs uppercase font-semibold text-gray-500">
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
            Draft
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-semibold text-slate-900 leading-snug">
          Export Readiness
          <br />
          Assessment
        </h2>

        <p className="mt-3 text-sm text-gray-500">Started: 05 July 2026</p>

        {/* Progress */}
        <div className="mt-8">
          <div className="flex justify-between text-sm font-medium text-slate-700 mb-3">
            <span>Progress (Step 4 of 9)</span>

            <span>45%</span>
          </div>

          <div className="w-full h-2 rounded-full bg-blue-100 overflow-hidden">
            <div className="h-full bg-slate-900 rounded-full w-[45%]"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <button 
      onClick={()=>router.push("/dashboard/continueassessment")}
      className="w-full cursor-pointer border-t border-gray-200 py-5 flex justify-center items-center gap-3 text-lg font-semibold text-slate-900 hover:bg-gray-50 transition">
        Continue Assessment
        <ArrowRight size={20} />
      </button>
    </div>
  );
}
