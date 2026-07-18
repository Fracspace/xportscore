"use client";

import { useState, useEffect } from "react";
import React from "react";

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

import { applicationSchema } from "../Schemas/ApplicationSchema";
import { formSteps } from "../Schemas/ApplicationSchema";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { useAuth } from "@/app/context/AuthContext";

function AppForm() {
  const searchParams = useSearchParams();
  const [assessmentId, setAsssessmentId] = useState();
  const [allStepPayloads, setAllStepPayloads] = useState({});

  const { token } = useAuth();
  console.log("Token:", token);

  const [loadingAssessment, setLoadingAssessment] = useState(false);
  const [assessmentData, setAssessmentData] = useState(null);

  useEffect(() => {
    const storedId = localStorage.getItem("assessmentId");
    if (storedId) {
      console.log("stored id is", storedId)
      setAsssessmentId(storedId);
      return;
    }

    const assessmentId1 = searchParams.get("assessmentId");

    if (assessmentId1) {
      localStorage.setItem("assessmentId", assessmentId1);
      setAsssessmentId(assessmentId1);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!assessmentId || !token) return;

    const fetchAssessmentDetails = async () => {
      try {
        setLoadingAssessment(true);
        const res = await fetch(`https://api.xportscore.com/api/export-assessments/${assessmentId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Xportscore@2026",
            "Authorization": `Bearer ${token}`
          }
        });
        const result = await res.json();
        if (res.ok && result?.success) {
          const assessment = result.data || result;
          setAssessmentData(assessment);

          // Map values back to flat form fields matching the backend snake_case structure
          const prefilledValues = {
            // Step 0: Business Info
            legalBusinessName: assessment.business?.legalBusinessName || "",
            brandName: assessment.business?.brandName || "",
            country: assessment.business?.country || "",
            city: assessment.business?.city || "",
            address: assessment.business?.address || "",
            website: assessment.business?.website || "",
            businessType: assessment.business?.businessType || "",
            otherBusinessType: assessment.business?.otherBusinessType || "",
            yearEstablished: assessment.business?.yearEstablished || "",

            // Step 1: Export Status
            exportStatus: assessment.export_status?.exportStatus || "",
            countriesExportedTo: assessment.export_status?.countriesExportedTo || [],
            iecExportRegistration: assessment.export_status?.iecExportRegistration || "",

            // Step 2: Product / Service
            exportType: assessment.product_service?.exportType || "product",
            productCategory: assessment.product_service?.productCategory || "",
            monthlyProductionCapacity: assessment.product_service?.monthlyProductionCapacity || "",
            minimumOrderQuantity: assessment.product_service?.minimumOrderQuantity || "",
            productShelfLife: assessment.product_service?.productShelfLife || "",
            productDescription: assessment.product_service?.productDescription || "",
            skus: assessment.product_service?.skus || [""],

            primaryServiceCategory: assessment.product_service?.primaryServiceCategory || "",
            keyServiceLines: assessment.product_service?.keyServiceLines || "",
            industriesServed: assessment.product_service?.industriesServed || [],
            teamSize: assessment.product_service?.teamSize || "",
            deliveryCapacity: assessment.product_service?.deliveryCapacity || "",
            avgProjectSize: assessment.product_service?.avgProjectSize || "",
            minEngagementValue: assessment.product_service?.minEngagementValue || "",
            avgTurnaroundTime: assessment.product_service?.avgTurnaroundTime || "",
            serviceDescription: assessment.product_service?.serviceDescription || "",
            deliveryModel: assessment.product_service?.deliveryModel || "",

            // Step 3: Commercial Info
            currentPriceListAvailable: assessment.commercial_information?.currentPriceListAvailable || "",
            exportPriceListAvailable: assessment.commercial_information?.exportPriceListAvailable || "",
            preferredPricingCurrency: assessment.commercial_information?.preferredPricingCurrency || [],
            otherCurrency: assessment.commercial_information?.otherCurrency || "",
            paymentTerms: assessment.commercial_information?.paymentTerms || [],

            // Step 6: Registry Consent
            registryConsent: assessment.registry_consent?.registryConsent || "",

            // Step 7: Declaration
            informationAccuracy: assessment.declaration?.informationAccuracy || false,
            documentAuthenticity: assessment.declaration?.documentAuthenticity || false,
            privateAuditAcknowledgement: assessment.declaration?.privateAuditAcknowledgement || false,
            noGuaranteeAcknowledgement: assessment.declaration?.noGuaranteeAcknowledgement || false,
            revocationAcknowledgement: assessment.declaration?.revocationAcknowledgement || false,
            dataConsent: assessment.declaration?.dataConsent || false
          };

          methods.reset(prefilledValues);
        }
      } catch (err) {
        console.error("Error loading assessment details:", err);
      } finally {
        setLoadingAssessment(false);
      }
    };

    fetchAssessmentDetails();
  }, [assessmentId, token]);

  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  const isCompleted = assessmentData && (assessmentData.status === "completed" || assessmentData.assessment_status === "active" || assessmentData.assessmentStatus === "completed" || assessmentData.assessmentStatus === "active" || assessmentData.status === "review" || assessmentData.status === "in_review");

  useEffect(() => {
    if (isCompleted) {
      router.replace("/dashboard/assessments/view");
    }
  }, [isCompleted, router]);

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
      // Offset by +1 to skip commented-out Applicant Information (formSteps[0])
      let fields = formSteps[currentStep + 1].fields;

      console.log("fielda rae", fields);

      // Handle Product / Service validation (Product / Service is formSteps[3], which corresponds to currentStep === 2)
      if (currentStep === 2) {
        const exportType = methods.getValues("exportType");

        fields =
          exportType === "product"
            ? formSteps[3].productFields
            : formSteps[3].serviceFields;
      }

      const uploadUrl = `https://api.xportscore.com/api/export-assessments/${assessmentId}/upload-document`;

      // Upload Documents at step 4
      if (currentStep === 4) {
        const values = methods.getValues();

        const uploadDocuments = {
          businessDocuments: values.businessDocuments,
          productServiceDocuments: values.productServiceDocuments,
          packagingDocuments: values.packagingDocuments,
          certificationQualityDocuments: values.certificationQualityDocuments,
          pastExportDocuments: values.pastExportDocuments
        };

        console.log("upload docs is", uploadDocuments);

        for (const [category, fileList] of Object.entries(uploadDocuments)) {
          if (!fileList || fileList.length === 0) continue;

          const formData = new FormData();
          formData.append("file", fileList[0]); // field name expected by backend
          formData.append("category", category);

          console.log("upload formdata  docs are :", formData);

          const response = await fetch(uploadUrl, {
            method: "POST",
            headers: {
              "x-api-key": "Xportscore@2026",
              Authorization: `Bearer ${token}`
            },
            body: formData
          });

          const data = await response.json();
          console.log(category, data);
        }

        const stepPayload = {
          [stepPayloadMap[currentStep]]: extractSectionValues(values, currentStep)
        };
        setAllStepPayloads((prev) => {
          const updated = { ...prev, ...stepPayload };
          console.log("Combined Accumulated Payloads sent so far:", updated);
          return updated;
        });

        setCurrentStep((prev) => prev + 1);
        return;
      }

      // Upload Optional Supporting Documents at step 5
      if (currentStep === 5) {
        const values = methods.getValues();

        const supportingDocuments = {
          distributorAgreement: values.distributorAgreement,
          productVideos: values.productVideos,
          factoryPhotos: values.factoryPhotos,
          qualityControlProcessDocuments: values.qualityControlProcessDocuments
        };

        console.log("upload supporting docs is", supportingDocuments);

        for (const [category, fileList] of Object.entries(supportingDocuments)) {
          if (!fileList || fileList.length === 0) continue;

          const formData = new FormData();
          formData.append("file", fileList[0]); // field name expected by backend
          formData.append("category", category);

          console.log("supporting form data is", formData)

          const response = await fetch(uploadUrl, {
            method: "POST",
            headers: {
              "x-api-key": "Xportscore@2026",
              Authorization: `Bearer ${token}`
            },
            body: formData
          });

          const data = await response.json();
          console.log(category, data);
        }

        const stepPayload = {
          [stepPayloadMap[currentStep]]: extractSectionValues(values, currentStep)
        };
        setAllStepPayloads((prev) => {
          const updated = { ...prev, ...stepPayload };
          console.log("Combined Accumulated Payloads sent so far:", updated);
          return updated;
        });

        setCurrentStep((prev) => prev + 1);
        return;
      }

      // Validate current step
      const isValid = await methods.trigger(fields);
      console.log("isValid", isValid);
      const values = methods.getValues();
      const payload1 = {
        [stepPayloadMap[currentStep]]: extractSectionValues(values, currentStep)
      };

      console.log("current payload1 details are :", payload1);

      // if (!isValid) return;

      const payload = { ...methods.getValues() };

      // Exclude files from the JSON PUT payload as they cannot be serialized
      const fileKeys = [
        "businessDocuments",
        "productServiceDocuments",
        "packagingDocuments",
        "certificationQualityDocuments",
        "pastExportDocuments",
        "distributorAgreement",
        "productVideos",
        "factoryPhotos",
        "qualityControlProcessDocuments"
      ];
      fileKeys.forEach((key) => {
        delete payload[key];
      });

      if (currentStep === sections.length - 1) {
        payload1.assessmentStatus = "active";
      }

      console.log("overal method values are :", payload);

      const url = `https://api.xportscore.com/api/export-assessments/${assessmentId}`;

      const method = "PUT";

      const headers = {
        "Content-Type": "application/json",
        "x-api-key": "Xportscore@2026",
        Authorization: `Bearer ${token}`
      };

      console.log("headers are", headers);

      console.log("Submitting with payload1...", url, {
        method,
        url,
        payload1
      });

      console.log("Submitting ***payload...", url, {
        method,
        url,
        payload
      });

      const response = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(payload1)
      });

      const data = await response.json();

      console.log("data is", data);

      if (!response.ok) {
        throw new Error(data?.message || "Something went wrong");
      }

      setAllStepPayloads((prev) => {
        const updated = { ...prev, ...payload1 };
        console.log("Combined Accumulated Payloads sent so far:", updated);
        return updated;
      });

      // Save assessment id after first creation
      if (!assessmentId && data?.data?.assessmentId) {
        localStorage.setItem("assessmentId", data.data.assessmentId);
      }

      console.log("API Success:", data);

      // Last step
      if (currentStep === sections.length - 1) {
        alert("Assessment submitted successfully!");
        // localStorage.removeItem("assessmentId");
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

  if (loadingAssessment) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-teal-600 border-t-transparent" />
          <p className="mt-4 text-slate-600 font-medium">Loading assessment details...</p>
        </div>
      </div>
    );
  }

  if (isCompleted) {
    return null; // Routed away in useEffect
  }

  return (
    <FormProvider {...methods}>
      <form

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
                      type="button"
                      onClick={() => setCurrentStep(index)}
                      className={`block text-left w-full text-sm ${currentStep === index
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
