"use client";

import { Hourglass, Clock3, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ReviewAssessmentCard() {
  const router = useRouter();
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
      <div className="p-8 flex flex-col items-center text-center">
        {/* Icon */}
        <div className="relative">
          <Hourglass
            size={48}
            className="text-blue-100"
            strokeWidth={1.5}
          />

          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
            !
          </div>
        </div>

        {/* Badge */}
        <span className="mt-5 px-4 py-1 rounded-full bg-blue-50 text-[11px] font-semibold tracking-wider uppercase text-slate-600">
          Under Review
        </span>

        {/* Title */}
        <h2 className="mt-6 text-3xl font-semibold text-slate-900 leading-snug">
          Export Readiness
          <br />
          Assessment
        </h2>

        <p className="mt-4 text-gray-500 text-sm">
          Submitted for Analyst Review
        </p>

        {/* ETA */}
        <div className="mt-8 w-full bg-blue-50 rounded-lg p-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center">
            <Clock3 size={20} className="text-slate-700" />
          </div>

          <div className="text-left">
            <p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold">
              Expected Completion
            </p>

            <p className="text-2xl font-bold text-slate-900">
              24–48 Hours
            </p>
          </div>
        </div>

        {/* Action button */}
        <button
          onClick={() => router.push("/dashboard/assessments/view")}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-50 hover:bg-blue-100 py-3.5 text-sm font-semibold text-slate-700 transition cursor-pointer"
        >
          <Eye size={17} />
          View Details
        </button>
      </div>
    </div>
  );
}