"use client";

import React, { useState } from "react";
import { Country } from "country-state-city";

import { Mail, Handshake, Phone, MapPin, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function ContactSection() {
  const router = useRouter();
  const countries = Country.getAllCountries();
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    enquiryType: "Standard Readiness Audit",
    message: "",
    agree: false
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agree) {
      setError("You must agree to the Privacy Policy to submit your enquiry.");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess(false);

    const payload = {
      name: formData.name,
      email: formData.email,
      subject: formData.enquiryType,
      message: formData.message,
      companyName: formData.companyName,
      phone: formData.phone,
      country: formData.country
    };

    try {
      const response = await fetch("https://api.xportscore.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "Xportscore@2026",
          accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok && (result?.success || result?.message === "success" || !result?.error)) {
        setSuccess(true);
        setFormData({
          name: "",
          companyName: "",
          email: "",
          phone: "",
          country: "United States",
          enquiryType: "Standard Readiness Audit",
          message: "",
          agree: false
        });
      } else {
        setError(result?.message || result?.error?.message || "Failed to submit enquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

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
                    value: "+91 92479 52344",
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

              <p className="mt-3 text-slate-600 mb-6">
                Please fill out the form below. Our trade compliance specialists
                typically respond within 12 business hours.
              </p>

              {success ? (
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-8 text-center shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-900">Enquiry Submitted!</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed max-w-md mx-auto">
                    Thank you for contacting XportScore. Your enquiry has been received and our trade compliance specialists will review it shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-8 rounded-xl bg-[#041B4D] px-6 py-3 font-medium text-white transition hover:bg-[#062766]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Input
                      label="FULL NAME"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />

                    <Input
                      label="COMPANY NAME"
                      placeholder="Global Exports Inc."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Input
                      label="BUSINESS EMAIL"
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />

                    <Input
                      label="PHONE NUMBER"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-semibold tracking-wide text-slate-600">
                        COUNTRY OF OPERATION
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        required
                        className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none text-sm text-gray-700 bg-white"
                      >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                          <option key={country.isoCode} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <Select
                      label="ENQUIRY TYPE"
                      options={[
                        "Xport Score",
                        "Xport Verify",
                        "Partnership",

                      ]}
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold tracking-wide text-slate-600">
                      MESSAGE / DETAILS
                    </label>

                    <textarea
                      rows="5"
                      placeholder="Briefly describe your requirements or question..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none"
                    />
                  </div>

                   <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1"
                      checked={formData.agree}
                      onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                      required
                    />

                    <p className="text-sm text-slate-600">
                      I agree to the{" "}
                      <Link href="/privacypolicy" className="text-teal-600 hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      regarding the handling of my business data.
                    </p>
                  </div>

                  {error && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-3">
                      {error}
                    </p>
                  )}

                  <button
                    disabled={loading}
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-md bg-[#041B4D] px-6 py-4 font-medium text-white transition hover:bg-[#062766] disabled:bg-slate-400 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : "Submit Enquiry"}
                    {!loading && <ArrowRight size={18} />}
                  </button>
                </form>
              )}
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

function Input({ label, placeholder, value, onChange, required, type = "text" }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold tracking-wide text-slate-600">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none"
      />
    </div>
  );
}

function Select({ label, options, value, onChange }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold tracking-wide text-slate-600">
        {label}
      </label>

      <select
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ContactSection;
