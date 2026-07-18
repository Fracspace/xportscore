import React from "react";

function ExportReadiness() {
  return (
    <section className="bg-[#f4f6fb] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#09122f]">
            Exporting without readiness can cost time, money and opportunity.
          </h2>

          <p className="mt-4 text-gray-600">
            Minimize risks and maximize your global potential with a
            pre-departure audit.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition">
            <div className="mb-5 text-xl">🤝</div>

            <h3 className="text-lg font-semibold text-[#09122f]">
              Meeting International Buyers
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Present your XportScore to build immediate trust and prove your
              operational readiness to global clients.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition">
            <div className="mb-5 text-xl">📄</div>

            <h3 className="text-lg font-semibold text-[#09122f]">
              Applying for Trade Finance
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Lenders value certified readiness. A high score can streamline
              your credit assessment process.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition">
            <div className="mb-5 text-xl">📊</div>

            <h3 className="text-lg font-semibold text-[#09122f]">
              Finalizing Pricing Models
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Audit your pricing readiness to ensure you haven&apos;t overlooked
              hidden logistics or compliance costs.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition">
            <div className="mb-5 text-xl">📦</div>

            <h3 className="text-lg font-semibold text-[#09122f]">
              Expanding Product Lines
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Validate if your new products meet the specific regulatory
              standards of your target export markets.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition">
            <div className="mb-5 text-xl">☑️</div>

            <h3 className="text-lg font-semibold text-[#09122f]">
              Vendor Onboarding
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Use the score as a requirement for your own suppliers to ensure
              supply chain integrity.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition">
            <div className="mb-5 text-xl">🚀</div>

            <h3 className="text-lg font-semibold text-[#09122f]">
              Entering New Geographies
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Benchmark your compliance against different global regions before
              committing resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExportReadiness;
