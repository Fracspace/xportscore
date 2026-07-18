"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2 } from "lucide-react";
import Input from "@/components/common/Input";

export default function PartnerForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      partnershipType: "Referral Partner",
      message: ""
    }
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await fetch("https://api.xportscore.com/api/partners", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "Xportscore@2026",
          accept: "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      console.log("result is", result);

      if (response.ok && result?.success) {
        setSuccess(true);
        reset();
      } else {
        alert(result?.message || result?.error?.message || "Failed to submit partnership request.");
      }
    } catch (error) {
      console.error(error);
      alert(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="partner-form-section" className="bg-white py-20 border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900">Partner Application</h2>
          <p className="mt-4 text-slate-600">
            Submit your details below and our team will get back to you within 48 hours to explore synergy.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-teal-600" />
        </div>

        {success ? (
          <div className="rounded-2xl border border-teal-100 bg-teal-50/50 p-8 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-700">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-slate-900">Application Submitted!</h3>
            <p className="mt-3 text-slate-600 leading-relaxed max-w-md mx-auto">
              Thank you for your interest in partnering with XportScore. We have received your application and will contact you shortly.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-8 rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-800"
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-[#f8fafc] border border-slate-200/60 rounded-2xl p-8 sm:p-10 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2">
              <Input
                label="Company Name"
                placeholder="e.g. Global Trade Partners Ltd"
                {...register("companyName", { required: "Company Name is required" })}
                error={errors?.companyName?.message}
              />
              <Input
                label="Contact Person Name"
                placeholder="e.g. Raj Kumar"
                {...register("contactName", { required: "Contact Name is required" })}
                error={errors?.contactName?.message}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Input
                label="Email Address"
                type="email"
                placeholder="e.g. raj@globaltraders.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                error={errors?.email?.message}
              />
              <Input
                label="Phone / WhatsApp Number"
                placeholder="e.g. +919876543210"
                {...register("phone", {
                  required: "Phone is required",
                  minLength: {
                    value: 10,
                    message: "Phone number must be at least 10 characters"
                  }
                })}
                error={errors?.phone?.message}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Partnership Type</label>
              <select
                {...register("partnershipType", { required: "Partnership Type is required" })}
                className="w-full rounded-lg border border-gray-300 bg-white p-3 outline-none transition-colors focus:border-blue-600"
              >
                <option value="Referral Partner">Referral Partner</option>
                <option value="Assessment Drive Partner">Assessment Drive Partner</option>
                <option value="Institutional Partner">Institutional Partner</option>
                <option value="Other">Other</option>
              </select>
              {errors?.partnershipType && (
                <p className="mt-1 text-sm text-red-500">{errors.partnershipType.message}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Message / Proposal</label>
              <textarea
                placeholder="Briefly describe how we can cooperate..."
                rows={4}
                {...register("message", { required: "Message is required" })}
                className={`w-full rounded-lg border p-3 outline-none transition-colors
                  ${errors?.message
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-blue-600"
                  }`}
              />
              {errors?.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-teal-700 px-8 py-4 font-semibold text-white transition hover:bg-teal-800 disabled:opacity-50 cursor-pointer shadow-md"
              >
                {loading ? "Submitting Application..." : "Submit Application"}
                <Send size={18} />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
