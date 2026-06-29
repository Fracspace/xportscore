"use client";

import { useState } from "react";
import React from "react";

import ApplicantInfo from "./ApplicantInfo";
import BusinessInfo from "./BusinessInfo";
import CommercialInfo from "./CommercialInfo";
import Declaration from "./Declaration";
import ExportStatus from "./ExportStatus";
import FinalSubmission from "./FinalSubmission";
import Payment from "./Payment";
import ProductInfo from "./ProductInfo";
import RegistryConset from "./RegistryConset";
import ServiceInfo from "./ServiceInfo";
import SupportingDocs from "./SupportingDocs";
import UploadDocs from "./UploadDocs";

function AppForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const sections = [
    "Applicant Information",
    "Business Information",
    "Export Status",
    "Product / Service",
    "Commercial Info",
    "Documentation",
    "Supporting Docs",
    "Registry Consent",
    "Declaration",
    "Payment",
    "Final Submission"
  ];
  return (
    <section className="bg-slate-100 min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <aside className="bg-white rounded-xl border p-6 h-fit sticky top-10">
            <h3 className="font-semibold text-slate-800 mb-6">
              Application Sections
            </h3>

            <div className="space-y-4">
              {sections.map((item, index) => (
                <button
                  key={item}
                  onClick={() => setCurrentStep(index)}
                  className={`block text-left w-full text-sm ${
                    currentStep === index
                      ? "text-teal-700 font-semibold"
                      : "text-slate-600"
                  }`}
                >
                  {index + 1}. {item}
                </button>
              ))}
            </div>
          </aside>

          {/* Content */}
          <div className="space-y-8">
            {currentStep === 0 && <ApplicantInfo />}
            {currentStep === 1 && <BusinessInfo />}
            {currentStep === 2 && <ExportStatus />}
            {currentStep === 3 && <ProductInfo />}
            {currentStep === 4 && <CommercialInfo />}
            {currentStep === 5 && <UploadDocs />}
            {currentStep === 6 && <SupportingDocs />}
            {currentStep === 7 && <RegistryConset />}
            {currentStep === 8 && <Declaration />}
            {currentStep === 9 && <Payment />}
            {currentStep === 10 && <FinalSubmission />}
            {/* {currentStep === 11 && <ServiceInfo />} */}

            <div className="flex justify-between">
              <button
                disabled={currentStep === 0}
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="px-6 py-3 border rounded-lg"
              >
                Previous
              </button>

              <button
                disabled={currentStep === sections.length - 1}
                onClick={() => setCurrentStep((prev) => prev + 1)}
                className="bg-[#041B4D] text-white px-6 py-3 rounded-lg"
              >
                Next Section
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppForm;
