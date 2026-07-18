import React from "react";
import { Info } from "lucide-react";

function XportscoreBand() {
  const scoreBands = [
    {
      range: "0–39",
      color: "text-red-600",
      status: "Not Export Ready",
      recommendation:
        "Immediate foundational gaps identified. Core business documentation missing."
    },
    {
      range: "40–59",
      color: "text-slate-500",
      status: "Preparation Required",
      recommendation:
        "Business has potential but lacks critical certification or commercial clarity."
    },
    {
      range: "60–74",
      color: "text-teal-700",
      status: "Conditionally Export Ready",
      recommendation:
        "Ready for limited activity. Some minor compliance or packaging adjustments needed."
    },
    {
      range: "75–89",
      color: "text-teal-700",
      status: "Export Ready",
      recommendation:
        "Strong demonstration of readiness across all five pillars. Compliant and scalable."
    },
    {
      range: "90–100",
      color: "text-[#005b66]",
      status: "Global Buyer Ready",
      recommendation:
        "Elite preparedness level. Fully optimized for high-volume global partnerships.",
      highlight: true
    }
  ];
  return (
    <section className="bg-[#f4f5f9] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#f0f2f5] rounded-sm p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Side */}
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-bold text-[#07132D] mb-8">
                XportScore Bands
              </h2>

              <p className="text-gray-600 leading-8 mb-10 max-w-sm">
                Every assessment results in a weighted score between 0 and 100.
                This score determines the official export status reflected on
                the certificate.
              </p>

              <div className="bg-white border border-gray-200 p-6 max-w-sm">
                <div className="flex items-center gap-3 mb-5">
                  <Info size={22} className="text-[#006D77]" strokeWidth={2} />
                  <h3 className="text-2xl font-semibold text-[#07132D]">
                    The &quot;Bridge&quot; Metaphor
                  </h3>
                </div>

                <p className="text-gray-600 leading-7">
                  Our scoring mimics a bridge: the higher the score, the more
                  structurally sound your connection to global markets becomes.
                </p>
              </div>
            </div>

            {/* Right Side Table */}
            <div className="lg:col-span-8 overflow-hidden border border-gray-200">
              {/* Header */}
              <div className="grid grid-cols-12 bg-[#020817] text-white text-xs uppercase tracking-wider font-semibold">
                <div className="col-span-3 p-5 border-r border-gray-800">
                  Score Range
                </div>

                <div className="col-span-3 p-5 border-r border-gray-800">
                  Certified Status
                </div>

                <div className="col-span-6 p-5">Recommendation</div>
              </div>

              {/* Rows */}
              {scoreBands.map((band, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-12 border-t border-gray-200 ${
                    band.highlight ? "bg-[#A7E7E8]" : "bg-white"
                  }`}
                >
                  <div
                    className={`col-span-12 md:col-span-3 p-6 text-5xl font-bold ${band.color}`}
                  >
                    {band.range}
                  </div>

                  <div className="col-span-12 md:col-span-3 p-6 flex items-center font-semibold text-[#07132D]">
                    {band.status}
                  </div>

                  <div className="col-span-12 md:col-span-6 p-6 text-gray-600 leading-7">
                    {band.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default XportscoreBand;
