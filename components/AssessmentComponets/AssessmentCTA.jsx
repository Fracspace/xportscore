import React from "react";
import { Shield, CheckCircle } from "lucide-react";

function AssessmentCTA({onProceed}) {
  const features = [
    "Comprehensive XportScore",
    "Readiness Status Audit",
    "QR-Verifiable Certificate",
    "6-Month Validity",
    "Online Verification Portal"
  ];
  return (
    <section className="bg-[#041B4D] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
              Institutional Audit Portal
            </p>

            <h2 className="max-w-xl text-4xl font-bold leading-tight text-white md:text-5xl">
              Start Your XportScore Assessment
            </h2>

            <p className="mt-6 max-w-lg text-slate-300">
              Complete your application and get your comprehensive
              export-readiness audit, score and a QR-verifiable certificate for
              international trade partners.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Shield size={18} className="text-teal-400" />

              <span className="text-sm font-medium text-teal-300">
                Secure ISO-Standard Protocol
              </span>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Global Price
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-5xl font-bold text-slate-900">
                  USD 299
                </span>

                <span className="mb-2 text-sm text-slate-500">/ audit</span>
              </div>

              <div className="mt-8 space-y-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-teal-600" />

                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button onClick={onProceed} className="mt-8 w-full cursor-pointer rounded-md bg-teal-700 px-6 py-3 font-medium text-white transition hover:bg-teal-800">
                Proceed to Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AssessmentCTA;
