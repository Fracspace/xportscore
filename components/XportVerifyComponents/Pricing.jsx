"use client";

import Link from "next/link";
import {
  ArrowRight,
  Database,
  FileText,
  Globe,
  BrainCircuit,
  Clock3,
  CircleCheck
} from "lucide-react";


const features = [
  "250+ Data Points",
  "30+ Page Detailed Report",
  "Global Data Sources",
  "AI-Powered Insights",
  "24–48 Hour Delivery"
];

const highlights = [
  {
    title: "Enterprise Ready",
    description: "Used by multinational corporations and government agencies."
  },
  {
    title: "Scalable Operations",
    description: "Order single reports or integrate via API for volume checks."
  }
];

export default function Pricing() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <div className="max-w-xl">
            <h2 className="text-4xl font-bold leading-tight text-slate-900">
              Institutional Grade Intelligence,
              <br />
              Accessible to All.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our standard verification report provides the depth of information
              typically reserved for global financial institutions, delivered
              with the speed of a modern SaaS platform.
            </p>

            <div className="mt-10 space-y-8">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1">
                    <CircleCheck size={22} className="text-teal-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PRICING CARD */}

          <div className="mx-auto w-full max-w-md">
            <div className="rounded-2xl bg-[#041C33] p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold">
                Standard Verification Report
              </h3>

              <p className="mt-2 text-xs uppercase tracking-widest text-slate-400">
                Fixed One-Time Fee
              </p>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-5xl font-bold">USD 299</span>

                <span className="mb-2 text-slate-400">Per Report</span>
              </div>

              <div className="my-8 h-px bg-slate-700"></div>

              <div className="space-y-5">
                <Feature icon={<Database size={18} />} text={features[0]} />

                <Feature icon={<FileText size={18} />} text={features[1]} />

                <Feature icon={<Globe size={18} />} text={features[2]} />

                <Feature icon={<BrainCircuit size={18} />} text={features[3]} />

                <Feature icon={<Clock3 size={18} />} text={features[4]} />
              </div>

              {/* <Link
                href="#"
                className="mt-10 flex w-full items-center justify-center rounded-lg bg-teal-600 px-6 py-4 font-semibold transition hover:bg-teal-700"
              >
                Verify an Importer Now
                <ArrowRight className="ml-2" size={18} />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-600/15 text-teal-400">
        {icon}
      </div>

      <span className="text-slate-200">{text}</span>
    </div>
  );
}
