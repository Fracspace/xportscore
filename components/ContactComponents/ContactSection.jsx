"use client";

import React from "react";

import { Mail, Handshake, Phone, MapPin, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

function ContactSection() {
  const router = useRouter();
  return (
    <>
      <section className="bg-[#F7F9FC] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
            {/* Left Side */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                Direct Channels
              </h2>

              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "GENERAL SUPPORT",
                    value: "support@xportscore.com",
                    desc: "24/7 ticket response for active audit cycles."
                  },

                  // {
                  //   icon: Handshake,
                  //   label: "PARTNERSHIPS",
                  //   value: "partners@xportscore.com",
                  //   desc: "For government agencies and trade associations."
                  // }
                  {
                    icon: Phone,
                    label: "PHONE / WHATSAPP",
                    value: "+91 92479 52343",
                    desc: "Available Mon–Sat, 9:00 AM – 6:00 PM IST."
                  }
                  // {
                  //   icon: MapPin,
                  //   label: "REGISTERED ADDRESS",
                  //   value:
                  //     "100 Trade Tower, Suite 400 Financial District, NY 10004",
                  //   desc: ""
                  // }
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-xl border border-slate-200 bg-white p-5"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#041B4D]">
                          <Icon size={20} className="text-white" />
                        </div>

                        <div>
                          <p className="text-xs font-semibold tracking-wider text-slate-500">
                            {item.label}
                          </p>

                          <h4 className="mt-1 text-lg font-semibold text-slate-900">
                            {item.value}
                          </h4>

                          {item.desc && (
                            <p className="mt-2 text-sm text-slate-500">
                              {item.desc}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map */}
              {/* <div className="mt-5 overflow-hidden rounded-xl">
                <img
                  src="/images/contact-map.jpg"
                  alt="Map"
                  className="h-[220px] w-full object-cover"
                />
              </div> */}
            </div>

            {/* Right Side Form */}
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-4xl font-bold text-slate-900">
                Institutional Enquiry
              </h2>

              <p className="mt-3 text-slate-600">
                Please fill out the form below. Our trade compliance specialists
                typically respond within 12 business hours.
              </p>

              <form className="mt-8 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <Input label="FULL NAME" placeholder="John Doe" />

                  <Input
                    label="COMPANY NAME"
                    placeholder="Global Exports Inc."
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <Input
                    label="BUSINESS EMAIL"
                    placeholder="name@company.com"
                  />

                  <Input label="PHONE NUMBER" placeholder="+1 (555) 000-0000" />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <Select
                    label="COUNTRY OF OPERATION"
                    options={["United States", "India", "United Kingdom"]}
                  />

                  <Select
                    label="ENQUIRY TYPE"
                    options={[
                      "Standard Readiness Audit",
                      "Partnership",
                      "Certification"
                    ]}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold tracking-wide text-slate-600">
                    MESSAGE / DETAILS
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Briefly describe your requirements or question..."
                    className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />

                  <p className="text-sm text-slate-600">
                    I agree to the{" "}
                    <span className="text-teal-600">Privacy Policy</span>{" "}
                    regarding the handling of my business data.
                  </p>
                </div>

                <button
                  onClick={(e) => e.preventDefault()}
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-[#041B4D] px-6 py-4 font-medium text-white transition hover:bg-[#062766]"
                >
                  Submit Enquiry
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#041B4D] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white">
            Immediate Readiness Check?
          </h2>

          <p className="mt-4 text-slate-300">
            Skip the queue. Use our automated system to begin your preliminary
            export readiness assessment now.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={() => router.push("/startassessment")}
              className="rounded-md cursor-pointer bg-teal-600 px-8 py-3 font-medium text-white hover:bg-teal-700"
            >
              Start Assessment
            </button>

            {/* <button className="rounded-md border border-slate-500 px-8 py-3 font-medium text-white hover:bg-white/5">
              Download Guide PDF
            </button> */}
          </div>
        </div>
      </section>
    </>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold tracking-wide text-slate-600">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none"
      />
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold tracking-wide text-slate-600">
        {label}
      </label>

      <select className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default ContactSection;
