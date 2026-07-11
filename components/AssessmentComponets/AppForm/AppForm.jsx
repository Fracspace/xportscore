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

import { applicationSchema } from "../Schemas/applicationSchema";
import { formSteps } from "../Schemas/applicationSchema";

function AppForm() {
  const [currentStep, setCurrentStep] = useState(0);
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

  const handleNext = async () => {
    let fields = formSteps[currentStep].fields;

    // Special case for Product / Service step
    if (currentStep === 3) {
      const exportType = methods.getValues("exportType");

      fields =
        exportType === "product"
          ? formSteps[currentStep].productFields
          : formSteps[currentStep].serviceFields;
    }

    const isValid = await methods.trigger(fields);

    if (!isValid) return;

    console.log("Current Step Data:", methods.getValues(fields));
    console.log("Complete Form:", methods.getValues());

    // setCurrentStep((prev) => prev + 1);

    try {
      const formData = methods.getValues();
      console.log("form data is", formData);

      const values = methods.getValues();

      const payload = {
        applicant: {
          fullname: "Vishnuteja",
          designation: "Export Director",
          email: "vishnuteja476@gmail.com",
          phone: "+916304798328"
        },

        business: {
          legalBusinessName: "ACME Exports Ltd",
          brandName: "ACME",
          country: "India",
          city: "Mumbai",
          address: "123 Industrial Area, Phase II",
          website: "https://www.acmeexports.com",
          businessType: "Manufacturer",
          otherBusinessType: "OEM Contractor",
          yearEstablished: "2015"
        },

        exportStatus: {
          exportStatus: "Already exporting",
          countriesExportedTo: "USA, Germany, UAE",
          iecExportRegistration: "Yes"
        },

        productService: {
          exportType: "product",
          productCategory: "Textiles & Apparel",
          monthlyProductionCapacity: "50,000 units",
          minimumOrderQuantity: "1,000 units",
          productShelfLife: "Not Applicable",
          productDescription: "Premium organic cotton t-shirts and hoodies",
          skus: ["SKU-COT-BLK-S", "SKU-COT-BLK-M"],
          primaryServiceCategory: "IT Consulting",
          keyServiceLines: "Custom software development",
          industriesServed: "Retail, FinTech",
          teamSize: "25",
          deliveryCapacity: "3 projects concurrently",
          avgProjectSize: "$50,000",
          minEngagementValue: "$10,000",
          avgTurnaroundTime: "3 months",
          serviceDescription: "Agile development and architecture design",
          deliveryModel: "Dedicated team"
        },

        commercialInformation: {
          currentPriceListAvailable: "Yes",
          exportPriceListAvailable: "Yes",
          preferredPricingCurrency: ["USD", "EUR"],
          otherCurrency: "INR",
          paymentTerms: ["100% advance", "Letter of Credit"]
        },

        registryConsent: {
          registryConsent: "Yes"
        },

        uploadDocuments: {
          businessDocuments: [
            "https://d2j0qyp55z3e9s.cloudfront.net/assessments/test-file.pdf"
          ],
          productServiceDocuments: [],
          packagingDocuments: [],
          certificationQualityDocuments: [],
          pastExportDocuments: []
        },

        supportingDocuments: {
          distributorAgreement: [],
          productVideos: [],
          factoryPhotos: [],
          qualityControlProcessDocuments: []
        },

        declaration: {
          informationAccuracy: true,
          documentAuthenticity: true,
          privateAuditAcknowledgement: true,
          noGuaranteeAcknowledgement: true,
          revocationAcknowledgement: true,
          dataConsent: true
        },

        finalSubmission: {
          applicantName: "John Doe",
          companyName: "ACME Exports Ltd",
          date: new Date().toISOString(),
          digitalSignature: "/s/ John Doe"
        },

        assessmentStatus: "draft"
      };

      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZjE1ZTRjLTMyNzEtNDM1OS1hOTk3LTdmMGNiOWVkZjIwZCIsInJvbGUiOiJhcHBsaWNhbnQiLCJlbWFpbCI6InZpc2hudXRlamE0NzZAZ21haWwuY29tIiwiaWF0IjoxNzgzNzQ4MzA0LCJleHAiOjE3ODYzNDAzMDR9.1xa7VE_ayOv_nqzJp8n8hkRl-hM7Ym9ETypJz0skZsM";

      const response = await fetch(
        "https://api.xportscore.com/api/export-assessments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Xportscore@2026",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(payload)
        }
      );

      const data = await response.json();
      console.log("form resp is", data);

      if (!response.ok) {
        throw new Error(data.message);
      }

      // setCurrentStep((prev) => prev + 1);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const sections = [
    "Applicant Information",
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
        onSubmit={methods.handleSubmit(onSubmit, (errors) => {
          console.log("Validation Errors:", errors);
        })}
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
                {currentStep === 0 && <ApplicantInfo />}
                {currentStep === 1 && <BusinessInfo />}
                {currentStep === 2 && <ExportStatus />}
                {currentStep === 3 && <ProductServiceInfo />}
                {currentStep === 4 && <CommercialInfo />}
                {currentStep === 5 && <UploadDocs />}
                {currentStep === 6 && <SupportingDocs />}
                {currentStep === 7 && <RegistryConset />}
                {currentStep === 8 && <Declaration />}
                {currentStep === 9 && <Payment />}
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
                      type="submit"
                      className="bg-[#041B4D] text-white px-6 py-3 rounded-lg"
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
