"use client"

import { Building2, Landmark, Briefcase, Boxes } from "lucide-react";
import { useRouter } from "next/navigation";

const partners = [
  {
    icon: Building2,
    title: "Logistics Companies",
  },
  {
    icon: Landmark,
    title: "Trade Finance",
  },
  {
    icon: Briefcase,
    title: "Export Consultants",
  },
  {
    icon: Boxes,
    title: "Export Clusters",
  },
];

export default function PartnersCTA() {
  const router = useRouter()
  return (
    <>
      {/* Partner Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Cards */}
            <div className="grid grid-cols-2 gap-4">
              {partners.map((partner, index) => {
                const Icon = partner.icon;

                return (
                  <div
                    key={index}
                    className="border bg-gray-50 py-8 px-4 text-center hover:shadow-md transition"
                  >
                    <Icon
                      size={18}
                      className="mx-auto mb-3 text-slate-700"
                    />

                    <p className="text-sm font-medium text-slate-800">
                      {partner.title}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">
                For Partners
              </h2>

              <p className="text-gray-500 leading-7 mb-8">
                We partner with leading institutions across the global trade
                ecosystem to provide standardized readiness assessments for
                their clients.
              </p>

              <button onClick={()=>router.push('/partners')} className="border cursor-pointer border-slate-800 px-6 py-3 text-sm font-medium hover:bg-slate-900 hover:text-white transition">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#020826] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">
            Make export readiness your first step.
          </h2>

          <p className="text-cyan-300 max-w-2xl mx-auto mb-10 leading-7">
            Don&apos;t wait for a shipment rejection to realize your gaps.
            Get assessed today and trade with earned confidence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={()=>router.push('/startassessment')} className="bg-white cursor-pointer text-slate-900 px-8 py-3 font-medium hover:bg-gray-100 transition">
              Get Started Now ↗
            </button>

            {/* <button className="border border-gray-500 text-white px-8 py-3 font-medium hover:bg-white hover:text-slate-900 transition">
              Schedule a Demo
            </button> */}
          </div>
        </div>
      </section>
    </>
  );
}