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

import ProductServiceInfo from "./ProductServiceInfo";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


import { formSteps } from "../Schemas/applicationSchema";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { useAuth } from "@/app/context/AuthContext";

function AppForm() {
  const searchParams = useSearchParams();

  const assessmentId = searchParams.get("assessmentId");
  const token = searchParams.get("token");

  console.log("Assessment ID:", assessmentId);
  console.log("Token:", token);

  if (assessmentId) {
    localStorage.setItem("assessmentId", assessmentId);
  }

  const token1 = localStorage.getItem("token");

  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  const extractSectionValues = (values, currentStep) => {
    switch (currentStep) {
      case 0:
        return {
          legalBusinessName: values.legalBusinessName,
          brandName: values.brandName,
          country: values.country,
          city: values.city,
          address: values.address,
          website: values.website,
          businessType: values.businessType,
          otherBusinessType: values.otherBusinessType,
          yearEstablished: values.yearEstablished
        };

      case 1:
        return {
          exportStatus: values.exportStatus,
          countriesExportedTo: values.countriesExportedTo,
          iecExportRegistration: values.iecExportRegistration
        };

      case 2:
        return {
          exportType: values.exportType,
          productCategory: values.productCategory,
          monthlyProductionCapacity: values.monthlyProductionCapacity,
          minimumOrderQuantity: values.minimumOrderQuantity,
          productShelfLife: values.productShelfLife,
          productDescription: values.productDescription,
          skus: values.skus,

          primaryServiceCategory: values.primaryServiceCategory,
          keyServiceLines: values.keyServiceLines,
          industriesServed: values.industriesServed,
          teamSize: values.teamSize,
          deliveryCapacity: values.deliveryCapacity,
          avgProjectSize: values.avgProjectSize,
          minEngagementValue: values.minEngagementValue,
          avgTurnaroundTime: values.avgTurnaroundTime,
          serviceDescription: values.serviceDescription,
          deliveryModel: values.deliveryModel
        };

      case 3:
        return {
          currentPriceListAvailable: values.currentPriceListAvailable,
          exportPriceListAvailable: values.exportPriceListAvailable,
          preferredPricingCurrency: values.preferredPricingCurrency,
          otherCurrency: values.otherCurrency,
          paymentTerms: values.paymentTerms
        };

      case 4:
        return {
          businessDocuments: values.businessDocuments,
          productServiceDocuments: values.productServiceDocuments,
          packagingDocuments: values.packagingDocuments,
          certificationQualityDocuments: values.certificationQualityDocuments,
          pastExportDocuments: values.pastExportDocuments
        };

      case 5:
        return {
          distributorAgreement: values.distributorAgreement,
          productVideos: values.productVideos,
          factoryPhotos: values.factoryPhotos,
          qualityControlProcessDocuments: values.qualityControlProcessDocuments
        };

      case 6:
        return {
          registryConsent: values.registryConsent
        };

      case 7:
        return {
          informationAccuracy: values.informationAccuracy,
          documentAuthenticity: values.documentAuthenticity,
          privateAuditAcknowledgement: values.privateAuditAcknowledgement,
          noGuaranteeAcknowledgement: values.noGuaranteeAcknowledgement,
          revocationAcknowledgement: values.revocationAcknowledgement,
          dataConsent: values.dataConsent
        };

      default:
        return {};
    }
  };

  const stepPayloadMap = {
    0: "business",
    1: "exportStatus",
    2: "productService",
    3: "commercialInformation",
    4: "uploadDocuments",
    5: "supportingDocuments",
    6: "registryConsent",
    7: "declaration"
  };

  const methods = useForm({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      exportType: "product",
      skus: [""],
      exportStatus: "",

      currentPriceListAvailable: "",
      exportPriceListAvailable: "",
      preferredPricingCurrency: [],
      paymentTerms: [],

      iecExportRegistration: "",
      informationAccuracy: false,
      documentAuthenticity: false,
      privateAuditAcknowledgement: false,
      noGuaranteeAcknowledgement: false,
      revocationAcknowledgement: false,
      dataConsent: false,

      registryConsent: ""
    }
  });

  const handleNext = async (e) => {
    console.log("insided handle next", "current step is", currentStep);
    try {
      let fields = formSteps[currentStep].fields;

      console.log("fielda rae", fields);


      // Handle Product / Service validation
      if (currentStep === 3) {
        const exportType = methods.getValues("exportType");

        fields =
          exportType === "product"
            ? formSteps[currentStep].productFields
            : formSteps[currentStep].serviceFields;
      }

      // Validate current step
      const isValid = await methods.trigger(fields);
      console.log("isValid", isValid);
const values = methods.getValues();
      const payload1 = {
  [stepPayloadMap[currentStep]]: extractSectionValues(
    values,
    currentStep
  ),
};

console.log(payload1,"values");

      // if (!isValid) return;

      const payload = methods.getValues();
      // const assessmentId = localStorage.getItem("assessmentId");

      console.log("payload details are :", payload);

      const url = `https://api.xportscore.com/api/export-assessments/${assessmentId}`;

      const method = "PUT";

      const headers = {
        "Content-Type": "application/json",
        "x-api-key": "Xportscore@2026",
        Authorization: `Bearer ${token1}`
      };

      console.log("headers are", headers);

      console.log("Submitting...", url, {
        method,
        url,
        payload1
      });

      const response = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      console.log("data is", data);

      if (!response.ok) {
        throw new Error(data?.message || "Something went wrong");
      }

      // Save assessment id after first creation
      if (!assessmentId && data?.data?.assessmentId) {
        localStorage.setItem("assessmentId", data.data.assessmentId);
      }

      console.log("API Success:", data);

      // Last step
      if (currentStep === sections.length - 1) {
        alert("Assessment submitted successfully!");
        localStorage.removeItem("assessmentId");
        router.push("/");
        return;
      }

      // Next step
      setCurrentStep((prev) => prev + 1);
    } catch (err) {
      console.error("handleNext Error:", err);
      alert(err.message || "Something went wrong");
    }
  };

  const sections = [
    "Business Information",
    "Export Status",
    "Product / Service",
    "Commercial Info",
    "Documentation",
    "Supporting Docs",
    "Registry Consent",
    "Declaration"
  ];

  const onSubmit = (data) => {
    console.log("Final Data", data);

    // API Call
    // await axios.post(...)
  };

  return (
    <FormProvider {...methods}>
      <form
      // onSubmit={methods.handleSubmit(onSubmit, (errors) => {
      //   console.log("Validation Errors:", errors);
      // })}
      >
        <section className="bg-slate-100 min-h-screen py-10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
              {/* Sidebar */}
              <aside className="bg-white hidden md:block rounded-xl border p-6 h-fit sticky top-10">
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
                {/* {currentStep === 0 && <ApplicantInfo />} */}
                {currentStep === 0 && <BusinessInfo />}
                {currentStep === 1 && <ExportStatus />}
                {currentStep === 2 && <ProductServiceInfo />}
                {currentStep === 3 && <CommercialInfo />}
                {currentStep === 4 && <UploadDocs />}
                {currentStep === 5 && <SupportingDocs />}
                {currentStep === 6 && <RegistryConset />}
                {currentStep === 7 && <Declaration />}
                {/* {currentStep === 9 && <Payment />} */}
                {/* {currentStep === 10 && <FinalSubmission />} */}
                {/* {currentStep === 11 && <ServiceInfo />} */}

                <div className="flex justify-between">
                  <button
                    type="button"
                    disabled={currentStep === 0}
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className="px-6 py-3 border rounded-lg"
                  >
                    Previous
                  </button>

                  {/* <button
                    type="button"
                    disabled={currentStep === sections.length - 1}
                    onClick={handleNext}
                    className="bg-[#041B4D] text-white px-6 py-3 rounded-lg"
                  >
                    Next Section
                  </button> */}
                  {currentStep !== sections.length - 1 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-[#041B4D] text-white px-6 py-3 rounded-lg"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="bg-[#041B4D] text-white px-6 py-3 rounded-lg"
                      onClick={handleNext}
                    >
                      Submit Application
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </FormProvider>
  );
}

export default AppForm;
