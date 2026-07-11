"use client";

import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { useRouter } from "next/navigation";

function ReportHero() {
  const score = 76;
  const circumference = 2 * Math.PI * 65;
  const progress = circumference - (score / 100) * circumference;

  const router = useRouter();

  return (
    <section className="bg-[#f5f6fa] py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#B9F0EE] text-[#006D77] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-[#006D77]" />
            Official Audit Sample
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-[#07132D] leading-tight mb-8">
            View a Sample <br />
            XportScore Report
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-8 max-w-xl mb-10">
            See what your business receives after completing the XportScore
            Export Readiness Audit. Our reports bridge the gap between
            traditional trade and data-driven intelligence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* <button className="bg-[#020817] text-white px-8 py-4 rounded font-semibold flex items-center justify-center gap-2 hover:bg-[#0f172a] transition">
              <Download size={18} />
              Download Sample Report
            </button> */}

            <button
              onClick={() => router.push("/startassessment")}
              className="border bg-[#020817] cursor-pointer border-gray-300 px-8 py-4 rounded font-semibold text-white flex items-center justify-center gap-2 hover:bg-gray-800 transition"
            >
              Get Your XportScore
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Report Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
          {/* Header */}
          <div className="flex justify-between items-start pb-6 border-b border-gray-200">
            <div>
              <h3 className="text-4xl font-bold text-[#07132D]">
                ABC Exports Limited
              </h3>

              <p className="text-gray-500 mt-2">Sector: Processed Foods</p>
            </div>

            <div className="text-right">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                Audit ID
              </p>

              <p className="font-medium text-[#07132D]">XS-24-000789</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 flex flex-col md:flex-row gap-8 items-center">
            {/* Score Circle */}
            <div className="relative w-40 h-40">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                <circle
                  cx="80"
                  cy="80"
                  r="65"
                  stroke="#E5E7EB"
                  strokeWidth="10"
                  fill="none"
                />

                <circle
                  cx="80"
                  cy="80"
                  r="65"
                  stroke="#006D77"
                  strokeWidth="10"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={progress}
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-[#07132D]">76</span>

                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Out of 100
                </span>
              </div>
            </div>

            {/* Score Details */}
            <div className="flex-1 w-full">
              <div className="inline-block bg-[#B9F0EE] text-[#006D77] px-4 py-2 rounded font-semibold mb-5">
                Export Ready
              </div>

              <p className="text-gray-600 leading-7 mb-6">
                Demonstrating strong potential for international market
                penetration.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded">
                  <p className="text-xs uppercase text-gray-500 mb-1">
                    Validity
                  </p>

                  <p className="font-semibold text-[#07132D]">6 Months</p>
                </div>

                <div className="bg-gray-100 p-4 rounded">
                  <p className="text-xs uppercase text-gray-500 mb-1">
                    Risk Level
                  </p>

                  <p className="font-semibold text-[#006D77]">Low</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReportHero;
