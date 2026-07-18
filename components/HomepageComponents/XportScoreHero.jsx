"use client";

import {
  ArrowRight,
  ShieldCheck,
  Package,
  ClipboardList,
  DollarSign,
  Users,
  CheckCircle2,
  FileText
} from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Compliance",
    desc: "Legal & Regulatory Documentation"
  },
  {
    icon: Package,
    title: "Product Exportability",
    desc: "HS Codes & Market Suitability"
  },
  {
    icon: ClipboardList,
    title: "Packaging & Certification",
    desc: "Labels & Certifications"
  },
  {
    icon: DollarSign,
    title: "Pricing Readiness",
    desc: "Costing & Pricing Strategy"
  },
  {
    icon: Users,
    title: "Market & Buyer Readiness",
    desc: "Market Presence"
  }
];

export default function ExportScoreHero() {
  return (
    <section className="bg-slate-50 p-3  lg:p-5">
      <div className="mx-auto max-w-[1600px] rounded-[32px] border bg-white p-5 lg:p-6">
        {/* ======================= */}
        {/* HERO */}
        {/* ======================= */}

        <div className="grid gap-5 xl:grid-cols-12">
          {/* LEFT */}
          <div className="xl:col-span-5 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-5">
              {["PRIVATE", "INDEPENDENT", "TRUSTED"].map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-100 px-4 py-2 rounded-full text-xs font-medium text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl xl:text-6xl font-bold leading-none text-[#071D49]">
              Before You Export,
            </h1>

            <h2 className="mt-3 text-5xl xl:text-6xl font-bold italic text-teal-700 leading-none">
              Get Your XportScore
            </h2>

            <p className="mt-6 text-slate-500 text-lg max-w-lg">
              A private export-readiness score, report and certificate for
              Indian businesses.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-[#071D49] text-white rounded-2xl px-8 py-4 font-medium flex items-center gap-2">
                Check My Export Readiness
                <ArrowRight size={18} />
              </button>

              <button className="border rounded-2xl px-8 py-4 font-medium flex items-center gap-2">
                <FileText size={18} />
                View Sample Report
              </button>
            </div>
          </div>

          {/* SCORE */}
          <div className="xl:col-span-4">
            <div className="border rounded-[28px] p-6 h-full">
              <p className="text-center text-xs uppercase text-slate-500 tracking-wide">
                Your Export Readiness Score
              </p>

              <div className="flex justify-center mt-6">
                <div className="relative h-44 w-44">
                  <svg
                    className="-rotate-90 h-full w-full"
                    viewBox="0 0 160 160"
                  >
                    <circle
                      cx="80"
                      cy="80"
                      r="60"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="10"
                    />

                    <circle
                      cx="80"
                      cy="80"
                      r="60"
                      fill="none"
                      stroke="#0f766e"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray="377"
                      strokeDashoffset="74"
                    />
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold">724</span>
                    <span className="text-xl text-slate-400">/900</span>
                  </div>
                </div>
              </div>

              <h3 className="text-center text-3xl font-semibold text-teal-700 mt-4">
                Export Ready
              </h3>

              <p className="text-center text-slate-500 mt-2">
                Strong readiness across key export pillars
              </p>

              <div className="grid grid-cols-3 mt-8 text-center">
                <div>
                  <p className="text-xs text-slate-500">Percentile</p>
                  <p className="font-semibold">Top 28%</p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">Risk Level</p>
                  <p className="font-semibold text-green-600">Low</p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">Valid Till</p>
                  <p className="font-semibold">18 Dec 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* CERTIFICATE */}
          <div className="xl:col-span-3">
            <div className="border rounded-[28px] p-6 h-full">
              <p className="text-center text-xs uppercase text-slate-500">
                QR Verified Certificate
              </p>

              <div className="bg-slate-50 rounded-3xl mt-6 p-6 flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-[#071D49]" />

                <h4 className="font-semibold text-2xl mt-5">XportScore</h4>

                <p className="text-slate-500 mt-2">
                  Export Readiness Certificate
                </p>

                <div className="w-28 h-28 bg-slate-300 rounded-xl mt-8" />

                <p className="text-3xl font-bold text-teal-700 mt-6">
                  724 / 900
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES */}

        <div className="grid md:grid-cols-5 gap-4 border-y py-5 mt-6">
          {[
            "IEC Check",
            "RCMC Mapping",
            "QR Verification",
            "6-Month Validity",
            "Private Export Readiness Standard"
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-2 text-sm"
            >
              <CheckCircle2 size={16} className="text-teal-600" />
              {item}
            </div>
          ))}
        </div>

        {/* PILLARS */}

        <div className="grid xl:grid-cols-12 gap-10 mt-8">
          <div className="xl:col-span-8">
            <p className="text-xs tracking-[4px] text-slate-500 mb-6">
              THE 5 PILLARS OF EXPORT READINESS
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div key={pillar.title} className="text-center">
                    <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center mx-auto">
                      <Icon className="text-teal-700" size={22} />
                    </div>

                    <h4 className="font-semibold mt-3">{pillar.title}</h4>

                    <p className="text-sm text-slate-500 mt-2">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* HOW IT WORKS */}

          <div className="xl:col-span-4">
            <p className="text-xs tracking-[4px] text-slate-500 mb-6">
              HOW IT WORKS
            </p>

            <div className="flex justify-between">
              {["Apply", "Get Assessed", "Receive Certificate"].map(
                (step, index) => (
                  <div key={step} className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#071D49] text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>

                    <p className="mt-3 text-sm">{step}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* PARTNERS */}

        <div className="mt-10">
          <p className="text-center text-xs tracking-[4px] text-slate-500 mb-5">
            TRUSTED BY BUSINESSES. RECOGNISED BY PARTNERS.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-3">
            {[
              "GlobalTrade",
              "Vista Advisors",
              "PortWise",
              "TransWorld",
              "SecureShip",
              "TradeBridge",
              "ComplianceHub",
              "Export Connect"
            ].map((partner) => (
              <div
                key={partner}
                className="h-12 bg-slate-100 rounded-lg flex items-center justify-center text-sm text-slate-500"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}

        <div className="mt-8 rounded-[28px] bg-gradient-to-r from-teal-700 to-teal-600 p-8 flex flex-col lg:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-white text-4xl font-bold">
              Make Export Readiness Your First Step
            </h3>

            <p className="text-teal-100 mt-2 text-lg">
              Know your readiness. Strengthen your business.
            </p>
          </div>

          <button className="bg-white text-teal-700 px-8 py-4 rounded-2xl font-semibold flex items-center gap-2">
            Get Assessed Now
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
