import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import xportImg from "../../assets/xportImg.png";

function PartnersHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFB] py-16 lg:py-24">
      {/* Dotted Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#16a085 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full bg-teal-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700">
              Partner Network
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Assist Businesses Become
              <br />
              <span className="text-teal-600">Export-Ready</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Partner with XportScore to help businesses assess their readiness
              before they enter global markets. Our data-driven audits provide
              the institutional credibility your clients need.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-8 py-4 font-medium text-white transition hover:bg-slate-800">
                Apply for Partnership
                <ArrowRight size={18} />
              </button>

              {/* <button className="rounded-lg border border-slate-300 bg-white px-8 py-4 font-medium text-slate-800 transition hover:bg-slate-50">
                View Partner Models
              </button> */}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px]">
              <div className="overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
                <Image
                  src={xportImg}
                  alt="Export Ready"
                  width={600}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersHero;
