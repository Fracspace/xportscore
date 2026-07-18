"use client"

import React from "react";

import { FileText, BarChart3, UserCheck } from "lucide-react";
import { useRouter } from "next/navigation";

function AssessmentBasis() {
  const router = useRouter();
  const features = [
    {
      icon: FileText,
      title: "Document Focused",
      description:
        "The score is derived purely from verified corporate and trade documentation submitted during the audit process."
    },
    {
      icon: BarChart3,
      title: "Scoring Framework",
      description:
        "Internal audit and AI framework use proprietary algorithms benchmarked against industry standards and target market requirements."
    },
    {
      icon: UserCheck,
      title: "Dual-Human Review",
      description:
        "Every report undergoes two stages of expert review verification — Analyst and Senior Reviewer — to prevent bias."
    }
  ];

  return (
    <section className="bg-[#f5f7fb] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            The Basis of Our Assessment
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            XportScore is an objective, document-driven standard. We don&apos;t rely
            on self declarations; we audit the evidence.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-md transition"
              >
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-slate-700" />
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-[#A7F0F2] rounded-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                Ready to know your export readiness?
              </h3>

              <p className="mt-3 text-gray-700 max-w-2xl">
                Join thousands of businesses benchmarking their potential
                against global trade standards.
              </p>
            </div>

            <button onClick={()=>router.push('/startassessment')} className="bg-slate-950 cursor-pointer hover:bg-slate-800 transition text-white px-8 py-4 rounded-lg font-medium whitespace-nowrap">
              Get Your XportScore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AssessmentBasis;
