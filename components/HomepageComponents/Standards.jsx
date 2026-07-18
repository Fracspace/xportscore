import React from "react";
import emergingExportsImg from "../../assets/emergingExports.webp";
import Image from "next/image";

function Standards() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-[#09122f] leading-tight">
              The Standard for Emerging
              <br />
              Exporters
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
              XportScore is a data-driven private audit framework that evaluates
              a business&apos;s capability to successfully trade across borders. We
              don&apos;t just give you a certificate; we provide a rigorous 360°
              evaluation of your compliance, pricing, and product readiness.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-700 flex items-center justify-center text-white text-xs mt-1">
                  ✓
                </div>
                <p className="text-gray-700">
                  Objective performance scoring based on industry benchmarks.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-700 flex items-center justify-center text-white text-xs mt-1">
                  ✓
                </div>
                <p className="text-gray-700">
                  Identifies critical gaps before they lead to shipment
                  rejections.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-700 flex items-center justify-center text-white text-xs mt-1">
                  ✓
                </div>
                <p className="text-gray-700">
                  Recognized by global logistics and finance partners.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <Image
                src={emergingExportsImg}
                alt="Export Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Standards;
