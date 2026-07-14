"use client";

import React from "react";

import {
  ArrowRight,
  ShieldCheck,
  Globe,
  FileCheck,
  BadgeCheck,
  ClipboardList,
  Package,
  DollarSign,
  Users,
  CheckCircle2
} from "lucide-react";
import { useRouter } from "next/navigation";

import QRCode from "react-qr-code";

function MainSection() {
  const router = useRouter();
   const verifyUrl = "https://www.xportscore.com/verifycertificates";
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
      desc: "Packaging, Labels & Certifications"
    },
    {
      icon: DollarSign,
      title: "Pricing Readiness",
      desc: "Costing & Pricing Strategy"
    },
    {
      icon: Users,
      title: "Market & Buyer Readiness",
      desc: "Buyer Intelligence & Market Presence"
    }
  ];

  return (
    <section className="w-full bg-white rounded-3xl border border-slate-200 p-4 md:p-8">
      {/* Top Section */}
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Left */}
        <div className="lg:col-span-5">
          <div className="flex gap-2 mb-4">
            {/* <span className="text-xs px-3 py-1 bg-slate-100 rounded-full">
              PRIVATE
            </span>
            <span className="text-xs px-3 py-1 bg-slate-100 rounded-full">
              INDEPENDENT
            </span> */}
            <span className="text-xs px-3 py-1 bg-slate-100 rounded-full">
              TRUSTED
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Before You Export,
            <span className="block text-teal-600 italic">
              Get Your XportScore
            </span>
          </h1>

          <p className="mt-4 text-slate-600 max-w-lg">
            A private export-readiness score, report and certificate for Indian
            businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => router.push("/startassessment")}
              className="bg-[#0A2342] cursor-pointer text-white px-6 py-4 rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-[#081c36] transition"
            >
              Check My Export Readiness
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => router.push("/samplereport")}
              className="border cursor-pointer border-slate-300 px-6 py-4 rounded-xl font-medium hover:bg-slate-50"
            >
              View Sample Report
            </button>
          </div>
        </div>

        {/* Score Card */}
        <div className="lg:col-span-4">
          <div className="border rounded-2xl p-6 h-full">
            <p className="text-xs uppercase text-slate-500 text-center">
              Your Export Readiness Score
            </p>

            <div className="flex justify-center my-6">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="65"
                    stroke="#E5E7EB"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="65"
                    stroke="#0F766E"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray="408"
                    strokeDashoffset="82"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold">724</span>
                  <span className="text-slate-400">/900</span>
                </div>
              </div>
            </div>

            <h3 className="text-center font-semibold text-teal-700 text-lg">
              Export Ready
            </h3>

            <p className="text-center text-sm text-slate-500 mt-2">
              Strong readiness across key export pillars.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8 text-center">
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
                <p className="font-semibold">18 Dec 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate */}
        <div className="lg:col-span-3">
          <div className="border rounded-2xl p-5 h-full flex flex-col items-center">
            <p className="text-xs uppercase text-slate-500 mb-4">
              QR Verified Certificate
            </p>

            <div className="w-full bg-slate-50 rounded-xl p-4 text-center flex-1">
              <BadgeCheck className="mx-auto text-teal-600 mb-3" size={32} />

              <h4 className="font-semibold">XportScore</h4>

              <p className="text-xs text-slate-500 mt-2">
                Export Readiness Certificate
              </p>

              {/* <div className="w-20 h-20 bg-slate-300 mx-auto mt-6 rounded" /> */}
              <QRCode value={verifyUrl} className="w-20 h-20 mx-auto mt-4"  />


              <p className="mt-4 font-medium text-teal-600">724 / 900</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10 border-y py-6">
        {[
          "IEC Check",
          "RCMC Mapping",
          "QR Verification",
          "12-Month Validity",
          "Private Export Readiness Standard"
        ].map((item) => (
          <div
            key={item}
            className="flex items-center justify-center gap-2 text-sm text-slate-600"
          >
            <CheckCircle2 size={16} className="text-teal-600" />
            {item}
          </div>
        ))}
      </div>
      

      {/* Pillars + How It Works */}
      <div className="grid lg:grid-cols-3 gap-10 mt-12">
        {/* Pillars */}
        <div className="lg:col-span-2">
          <h3 className="font-semibold text-slate-900 mb-6">
            THE 5 PILLARS OF EXPORT READINESS
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center mx-auto">
                    <Icon className="text-teal-600" size={24} />
                  </div>

                  <h4 className="font-medium mt-3">{pillar.title}</h4>

                  <p className="text-xs text-slate-500 mt-2">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* How It Works */}
        <div>
          <h3 className="font-semibold mb-6">HOW IT WORKS</h3>

          <div className="space-y-6">
            {["Apply", "Get Assessed", "Receive Score & Certificate"].map(
              (step, idx) => (
                <div key={step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0A2342] text-white flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>

                  <div>
                    <h4 className="font-medium">{step}</h4>

                    <p className="text-sm text-slate-500">
                      Complete the process and unlock export readiness insights.
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      {/* <div className="mt-14">
        <p className="text-center text-sm text-slate-500 mb-6">
          TRUSTED BY BUSINESSES. RECOGNISED BY PARTNERS.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-12 rounded-lg bg-slate-100 flex items-center justify-center text-xs text-slate-500"
            >
              Partner {i + 1}
            </div>
          ))}
        </div>
      </div> */}

      {/* CTA */}
      <div className="mt-14 rounded-3xl bg-gradient-to-r from-teal-700 to-teal-600 text-white p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-2xl font-bold">
            Make Export Readiness Your First Step
          </h3>

          <p className="text-teal-100 mt-2">
            Know your readiness. Strengthen your business. Export with
            confidence.
          </p>
        </div>

        <button
          onClick={() => router.push("/startassessment")}
          className="bg-white text-teal-700 px-6 py-4 rounded-xl font-semibold flex items-center gap-2"
        >
          Get Assessed Now
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

export default MainSection;
