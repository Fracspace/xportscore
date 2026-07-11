"use client";

import React, { useState } from "react";
import Input from "@/components/common/Input";
import CompanyDetails from "./CompanyDetails";
import BusinessDetails from "./BusinessDetails";
import BusinessRelation from "./BusinessRelation";
import VerificationScope from "./VerificationScope";
import SupportingInfo from "./SupportingInfo";
import AdditionalInfo from "./AdditionalInfo";
import Deliverables from "./Deliverables";
import VerifyDeclaration from "./VerifyDeclaration";
import Submission from "./Submission";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { verifySchema } from "../VerifySchemas/verifySchema";
import { verifyformSteps } from "../VerifySchemas/verifySchema";

function VerifyForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const methods = useForm({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      identityVerification: [],
      tradeIntelligence: [],
      businessReputation: [],
      operationalReview: [],
      complianceReview: [],
      riskDueDiligence: [],
      contactVerification: [],

      supportingDocuments: [],
      uploadedDocuments: []
    }
  });

  const sections = [
    "Requesting Company",
    "Business to Verify",
    "Relationship Nature",
    "Verification Scope",
    "Supporting Info",
    "Additional Info",
    "Deliverables",
    "Declaration",
    "Submission"
  ];

  const handleNext = async () => {
    console.log("current step is", currentStep);
    const formData = methods.getValues();

    console.log("Form Data:", formData);
    let fields = verifyformSteps[currentStep].fields;
    console.log("fields are", fields);
    console.log("Errors:", methods?.formState?.errors);
    const isValid = await methods.trigger(fields);

    if (currentStep == 6) {
      setCurrentStep((prev) => prev + 1);
    }

    if (!isValid) return;
    setCurrentStep((prev) => prev + 1);
  };

  const onSubmit = (data) => {
    const formData = methods.getValues();

    console.log("Form Data:", formData);
    console.log("Final Data", data);
  };

  return (
    <section>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit, (errors) => {
            console.log("Validation Errors:", errors);
            console.log("Current Form Data:", methods.getValues());
          })}
        >
          <main className="min-h-screen bg-gray-50 p-8">
            <div className="mx-auto max-w-7xl">
              <h1 className="text-center text-4xl font-bold text-slate-800">
                Begin Your Verification Assessment
              </h1>

              <p className="mt-2 text-center text-gray-500">
                Complete the form below to initiate verification.
              </p>

              <div className="mt-10 grid grid-cols-12 md:gap-8">
                <div className="col-span-3 hidden md:block">
                  <div className="space-y-4">
                    {sections?.map((step, index) => (
                      <div
                        onClick={() => setCurrentStep(index)}
                        key={step}
                        className={`flex items-center gap-3 rounded-lg px-4 py-3 transition
          ${index === currentStep ? "border-l-4 border-teal-600 bg-blue-50" : ""}`}
                      >
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold
            ${
              index === currentStep
                ? "bg-teal-600 text-white"
                : "bg-slate-200 text-slate-600"
            }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <span
                          className={`text-sm ${
                            index === currentStep
                              ? "font-semibold text-slate-800"
                              : "text-gray-500"
                          }`}
                        >
                          {step}
                        </span>
                      </div>
                    ))}

                    <div className="mt-10 rounded-xl bg-slate-900 p-5 text-white">
                      <p className="text-sm opacity-70">
                        Estimated processing time
                      </p>

                      <p className="mt-2 text-xl font-bold">
                        24–48 Business Hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-9">
                  <div className="rounded-2xl border bg-white shadow-sm">
                    {/* <ProgressBar progress={10} /> */}

                    {currentStep === 0 && <CompanyDetails />}
                    {currentStep === 1 && <BusinessDetails />}
                    {currentStep === 2 && <BusinessRelation />}
                    {currentStep === 3 && <VerificationScope />}
                    {currentStep === 4 && <SupportingInfo />}
                    {currentStep === 5 && <AdditionalInfo />}
                    {currentStep === 6 && <Deliverables />}
                    {currentStep === 7 && <VerifyDeclaration />}
                    {currentStep === 8 && <Submission />}
                    {/* <hr className="my-10" /> */}

                    <div className="flex ml-6 mr-6 mb-8 items-center justify-between">
                      <button
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="rounded-lg border px-4 py-1 md:px-8 md:py-3 font-medium text-slate-700 hover:bg-gray-100"
                      >
                        ← Previous Step
                      </button>
                      {currentStep !== sections.length - 1 ? (
                        <button
                          type="button"
                          onClick={handleNext}
                          className="rounded-lg bg-teal-700 px-4 py-1 md:px-10 md:py-3 font-semibold text-white hover:bg-teal-800"
                        >
                          Next Step →
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="bg-[#041B4D] text-white px-4 py-1 md:px-6 md:py-3 rounded-lg"
                        >
                          Submit Application
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </form>
      </FormProvider>
    </section>
  );
}

export default VerifyForm;
