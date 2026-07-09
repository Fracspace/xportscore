"use client";

import Link from "next/link";
import {
  BadgeCheck,
  ShieldCheck,
  Star,
  Wallet,
  ArrowRight,
  FileText,
  MapPinned
} from "lucide-react";
import Image from "next/image";
import xportVerifyImg from "../../assets/xportVerify.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <span className="inline-flex items-center rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold text-white">
              <span className="ml-2">
                XportVerify – Global Business Verification & Trade Due Diligence
              </span>
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#081B4B] lg:text-7xl">
              Know Who You're
              <br />
              <span className="text-[#0A6D7E]">Trading With.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Reduce risk. Build trust. Trade with confidence. XportVerify
              provides a comprehensive Business Verification & Trade Due
              Diligence Report on importers and overseas companies using 250+
              data points from global sources.
            </p>

            {/* Features */}

            <div className="mt-10 grid grid-cols-2 gap-5">
              <Feature
                icon={<Wallet size={18} />}
                title="Reduce Payment Risk"
              />

              <Feature
                icon={<ShieldCheck size={18} />}
                title="Verify Authenticity"
              />

              <Feature icon={<Star size={18} />} title="Check Reputation" />

              <Feature
                icon={<BadgeCheck size={18} />}
                title="Trade Confidently"
              />
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#"
                className="flex items-center justify-center rounded-xl bg-teal-500 px-7 py-4 font-semibold text-white transition hover:bg-teal-600"
              >
                Verify an Importer Now
                <ArrowRight className="ml-2" size={18} />
              </Link>

              <Link
                href="#"
                className="flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-[#081B4B] transition hover:border-[#081B4B]"
              >
                View Sample Report
                <FileText className="ml-2" size={18} />
              </Link>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">
            {/* Floating Card */}

            <div className="rounded-3xl border bg-white p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-[#081B4B] text-xl">
                  XportVerify
                </h3>

                <span className="rounded-md bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  VERIFIED LOW RISK
                </span>
              </div>

              <div className="mt-8 flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-[#081B4B]">
                    ABC Global Imports Ltd.
                  </h2>

                  <div className="mt-2 flex items-center gap-2 text-slate-500">
                    <MapPinned size={16} />
                    United Kingdom
                  </div>
                </div>

                <div className="rounded-xl border-4 border-teal-700 px-5 py-4">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-teal-700">82</h2>

                    <p className="text-xs font-semibold text-slate-500">
                      SAFETY SCORE
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-slate-100 p-5">
                  <p className="text-sm text-slate-500">
                    Verification Confidence
                  </p>

                  <div className="mt-4 h-2 rounded-full bg-slate-300">
                    <div className="h-full w-4/5 rounded-full bg-teal-600"></div>
                  </div>

                  <p className="mt-3 font-semibold text-teal-700">High</p>
                </div>

                <div className="rounded-xl bg-slate-100 p-5">
                  <p className="text-sm text-slate-500">Importer Reputation</p>

                  <h3 className="mt-3 text-xl font-bold">4.3 ★★★★☆</h3>
                </div>
              </div>

              {/* Map */}

              <div className="mt-6 h-56 overflow-hidden rounded-2xl bg-[#0D2D45]">
                <Image
                  src={xportVerifyImg}
                  alt="xport verify image"
                  className="h-full w-full object-cover opacity-60"
                />
              </div>
            </div>

            {/* Floating Counter */}

            <div className="absolute -bottom-10 left-0 rounded-2xl bg-teal-700 cursor-pointer p-6 text-white shadow-2xl">
              <p className="text-xs uppercase tracking-wider">
                VERIFIED ENTITIES
              </p>

              <h2 className="mt-2 text-4xl font-bold">25,000+</h2>

              <p className="mt-2 max-w-[180px] text-sm text-slate-300">
                Trusted business verification across 150+ countries worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-full bg-[#E8F4F6] p-2 text-[#0A6D7E]">{icon}</div>

      <span className="font-medium text-[#081B4B]">{title}</span>
    </div>
  );
}
