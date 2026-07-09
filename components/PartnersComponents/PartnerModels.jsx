import React from "react";
import { Users, Rocket, Building2, Handshake, ArrowRight } from "lucide-react";

function PartnerModels() {
  const partnerModels = [
    {
      title: "Referral Partner",
      description:
        "Refer businesses looking for global expansion and earn partner benefits for every successful audit completion.",
      button: "Learn Benefits",
      icon: Users,
      featured: false
    },
    {
      title: "Assessment Drive Partner",
      description:
        "Conduct large-scale XportScore readiness drives for association members or business communities at scale.",
      button: "Start a Drive",
      icon: Rocket,
      featured: true
    },
    {
      title: "Institutional Partner",
      description:
        "Use XportScore as a supporting readiness document for business onboarding, advisory or export-preparation workflows.",
      button: "Institutional Access",
      icon: Building2,
      featured: false
    }
  ];
  return (
    <section className="bg-[#f7f9fb]">
      {/* PARTNER MODELS */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">Partner Models</h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-teal-600" />
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {partnerModels.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`relative rounded-2xl border bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  item.featured
                    ? "border-teal-600 shadow-lg"
                    : "border-slate-200"
                }`}
              >
                {item.featured && (
                  <div className="absolute right-0 top-0 rounded-bl-xl rounded-tr-2xl bg-teal-700 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    Popular
                  </div>
                )}

                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-xl ${
                    item.featured
                      ? "bg-teal-700 text-white"
                      : "bg-teal-50 text-teal-700"
                  }`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* <button className="mt-8 inline-flex items-center gap-2 font-medium text-teal-700 hover:text-teal-800">
                  {item.button}
                  <ArrowRight size={18} />
                </button> */}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-teal-50">
              <Handshake size={36} className="text-teal-700" />
            </div>

            <h2 className="mt-8 text-4xl font-bold text-slate-900 md:text-5xl">
              Ready to partner with us?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Join the global network of trade enablers and help businesses
              bridge the gap to international success. Our team will review your
              application within 48 hours.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-xl bg-slate-950 px-8 py-4 font-medium text-white transition hover:bg-slate-800">
                Become an XportScore Partner
              </button>

              {/* <button className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-medium text-slate-900 transition hover:bg-slate-50">
                Talk to Partner Success
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnerModels;
