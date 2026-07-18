"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle2, Building, Globe, Layers, BadgePercent, ShieldCheck, Check, FileText, ExternalLink, Download } from "lucide-react";

export default function ViewAssessmentDetails({ assessment }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("business");

  const business = assessment?.business || {};
  const exportStatusObj = assessment?.export_status || {};
  const productService = assessment?.product_service || {};
  const commercial = assessment?.commercial_information || {};
  const declaration = assessment?.declaration || {};
  const uploadDocs = assessment?.upload_documents || {};
  const supportingDocs = assessment?.supporting_documents || {};

  const tabs = [
    { id: "business", label: "Business Profile" },
    { id: "applicant", label: "Applicant Profile" },
    { id: "export", label: "Export Status" },
    { id: "productService", label: "Product & Service" },
    { id: "commercial", label: "Commercial Info" },
    { id: "documents", label: "Uploaded Documents" },
    { id: "declaration", label: "Consent & Declaration" },
    { id: "audit", label: "Audit Overview" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/dashboard")}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition cursor-pointer"
            >
              <ArrowLeft size={18} />
            </button>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-slate-900">Export Readiness Assessment</h1>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 size={13} />
                  {assessment?.assessment_status || assessment?.assessmentStatus || "Completed"}
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-1">Assessment ID: {assessment?.id || "—"}</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Readiness Score</span>
              <div className="text-2xl font-extrabold text-teal-700">
                {assessment?.score !== null && assessment?.score !== undefined ? assessment.score : "Pending"}
              </div>
            </div>
            <button
              onClick={() => router.push("/dashboard")}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 cursor-pointer"
            >
              Return to Dashboard
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Navigation Sidebar */}
          <aside className="bg-white rounded-2xl border border-slate-200 p-5 h-fit sticky top-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4 px-2 text-xs uppercase tracking-wider">
              Assessment Summary
            </h3>
            <div className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center gap-2 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors cursor-pointer
                    ${
                      activeTab === tab.id
                        ? "bg-teal-50 text-teal-800"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </aside>

          {/* Detailed Content Panels */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            {activeTab === "business" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Building className="text-teal-600" size={22} />
                  <h2 className="text-xl font-bold text-slate-900">Business Profile</h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <DetailRow label="Legal Business Name" value={business.legalBusinessName} />
                  <DetailRow label="Brand Name" value={business.brandName} />
                  <DetailRow label="Country" value={business.country} />
                  <DetailRow label="City / Region" value={business.city} />
                  <DetailRow label="Full Registered Address" value={business.address} colSpan={2} />
                  <DetailRow label="Corporate Website" value={business.website} isUrl />
                  <DetailRow label="Business Type" value={business.businessType === "Other" ? business.otherBusinessType : business.businessType} />
                  <DetailRow label="Year Established" value={business.yearEstablished} />
                </div>
              </div>
            )}

            {activeTab === "applicant" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Building className="text-teal-600" size={22} />
                  <h2 className="text-xl font-bold text-slate-900">Applicant Profile</h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <DetailRow label="Contact Representative" value={assessment?.applicant?.fullname} />
                  <DetailRow label="Representative Email" value={assessment?.applicant?.email} />
                  <DetailRow label="Phone / Mobile" value={assessment?.applicant?.phone} />
                  <DetailRow label="Corporate Designation" value={assessment?.applicant?.designation} />
                </div>
              </div>
            )}

            {activeTab === "export" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Globe className="text-teal-600" size={22} />
                  <h2 className="text-xl font-bold text-slate-900">Export Status & Registration</h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <DetailRow label="Export Status" value={exportStatusObj.exportStatus} />
                  <DetailRow label="IEC Export Registration Code" value={exportStatusObj.iecExportRegistration} />
                  <DetailRow
                    label="Countries Exported To"
                    value={
                      Array.isArray(exportStatusObj.countriesExportedTo)
                        ? exportStatusObj.countriesExportedTo.join(", ")
                        : exportStatusObj.countriesExportedTo
                    }
                    colSpan={2}
                  />
                </div>
              </div>
            )}

            {activeTab === "productService" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Layers className="text-teal-600" size={22} />
                  <h2 className="text-xl font-bold text-slate-900">
                    {productService.exportType === "service" ? "Service Capabilities" : "Product Capabilities"}
                  </h2>
                </div>

                {productService.exportType === "service" ? (
                  <div className="grid gap-6 sm:grid-cols-2">
                    <DetailRow label="Primary Service Category" value={productService.primaryServiceCategory} />
                    <DetailRow label="Key Service Lines" value={productService.keyServiceLines} />
                    <DetailRow
                      label="Industries Served"
                      value={
                        Array.isArray(productService.industriesServed)
                          ? productService.industriesServed.join(", ")
                          : productService.industriesServed
                      }
                      colSpan={2}
                    />
                    <DetailRow label="Team Size" value={productService.teamSize} />
                    <DetailRow label="Delivery Capacity" value={productService.deliveryCapacity} />
                    <DetailRow label="Average Project Size" value={productService.avgProjectSize} />
                    <DetailRow label="Minimum Engagement Value" value={productService.minEngagementValue} />
                    <DetailRow label="Average Turnaround Time" value={productService.avgTurnaroundTime} />
                    <DetailRow label="Service Model" value={productService.deliveryModel} />
                    <DetailRow label="Service Description" value={productService.serviceDescription} colSpan={2} />
                  </div>
                ) : (
                  <div className="grid gap-6 sm:grid-cols-2">
                    <DetailRow label="Product Category" value={productService.productCategory} />
                    <DetailRow label="Monthly Production Capacity" value={productService.monthlyProductionCapacity} />
                    <DetailRow label="Minimum Order Quantity (MOQ)" value={productService.minimumOrderQuantity} />
                    <DetailRow label="Product Shelf Life" value={productService.productShelfLife} />
                    <DetailRow label="Product Description" value={productService.productDescription} colSpan={2} />
                    <DetailRow
                      label="SKUs Catalog Offered"
                      value={
                        Array.isArray(productService.skus)
                          ? productService.skus.join(", ")
                          : productService.skus
                      }
                      colSpan={2}
                    />
                  </div>
                )}
              </div>
            )}

            {activeTab === "commercial" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <BadgePercent className="text-teal-600" size={22} />
                  <h2 className="text-xl font-bold text-slate-900">Commercial & Pricing Terms</h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <DetailRow label="Price List Available?" value={commercial.currentPriceListAvailable} />
                  <DetailRow label="Export Pricing List Available?" value={commercial.exportPriceListAvailable} />
                  <DetailRow
                    label="Preferred Pricing Currencies"
                    value={
                      Array.isArray(commercial.preferredPricingCurrency)
                        ? commercial.preferredPricingCurrency.join(", ")
                        : commercial.preferredPricingCurrency
                    }
                  />
                  {commercial.otherCurrency && (
                    <DetailRow label="Other Currencies" value={commercial.otherCurrency} />
                  )}
                  <DetailRow
                    label="Preferred Payment Terms"
                    value={
                      Array.isArray(commercial.paymentTerms)
                        ? commercial.paymentTerms.join(", ")
                        : commercial.paymentTerms
                    }
                    colSpan={2}
                  />
                </div>
              </div>
            )}

            {activeTab === "documents" && (
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-6">
                    <FileText className="text-teal-600" size={22} />
                    <h2 className="text-xl font-bold text-slate-900">Core Business Documents</h2>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <DocumentLinkList label="Business Registration / Recognition" urls={uploadDocs.businessDocuments} />
                    <DocumentLinkList label="Product / Service Catalogs" urls={uploadDocs.productServiceDocuments} />
                    <DocumentLinkList label="Packaging Specifications" urls={uploadDocs.packagingDocuments} />
                    <DocumentLinkList label="Quality & Standards Certificates" urls={uploadDocs.certificationQualityDocuments} />
                    <DocumentLinkList label="Past Export Proofs / Invoices" urls={uploadDocs.pastExportDocuments} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-6">
                    <FileText className="text-teal-600" size={22} />
                    <h2 className="text-xl font-bold text-slate-900">Supporting Assets & Media</h2>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <DocumentLinkList label="Distributor / Agent Agreement Draft" urls={supportingDocs.distributorAgreement} />
                    <DocumentLinkList label="Quality Process Documents" urls={supportingDocs.qualityControlProcessDocuments} />
                    <DocumentLinkList label="Factory Photos" urls={supportingDocs.factoryPhotos} />
                    <DocumentLinkList label="Product Video Links" urls={supportingDocs.productVideos} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "declaration" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShieldCheck className="text-teal-600" size={22} />
                  <h2 className="text-xl font-bold text-slate-900">Consent & Declarations</h2>
                </div>
                <div className="space-y-4">
                  <ConsentCheck label="Accuracy of Information Provided" checked={declaration.informationAccuracy} />
                  <ConsentCheck label="Authenticity of Uploaded Business Documents" checked={declaration.documentAuthenticity} />
                  <ConsentCheck label="Acknowledgement of Audit Standards" checked={declaration.privateAuditAcknowledgement} />
                  <ConsentCheck label="Acknowledgement of Onboarding Decisions" checked={declaration.noGuaranteeAcknowledgement} />
                  <ConsentCheck label="Acknowledgement of Assessment Revocation" checked={declaration.revocationAcknowledgement} />
                  <ConsentCheck label="Consent to Share Anonymized Data with Enablers" checked={declaration.dataConsent} />
                </div>
              </div>
            )}

            {activeTab === "audit" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShieldCheck className="text-teal-600" size={22} />
                  <h2 className="text-xl font-bold text-slate-900">Audit Overview & Deliverables</h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <DetailRow label="Assessment Status" value={assessment?.assessment_status || assessment?.assessmentStatus} />
                  <DetailRow label="Readiness Score" value={assessment?.score !== null && assessment?.score !== undefined ? assessment.score : "Under Evaluation / Pending"} />
                  <DetailRow label="Certificate Number" value={assessment?.certificate_number || "Pending Release"} />
                  <DetailRow label="Created Date" value={assessment?.created_at ? new Date(assessment.created_at).toLocaleString() : "—"} />
                  <DetailRow label="Last Update Date" value={assessment?.updated_at ? new Date(assessment.updated_at).toLocaleString() : "—"} />
                  
                  <div className="sm:col-span-2 border-t border-slate-100 pt-6">
                    <h3 className="text-md font-semibold text-slate-800 mb-4">Official Documentation</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-slate-200 p-4 bg-slate-50 flex flex-col justify-between h-36">
                        <div>
                          <h4 className="font-semibold text-slate-800 text-sm">Readiness Evaluation Report</h4>
                          <p className="text-xs text-slate-500 mt-1">Detailed assessment scorecard and analyst feedback PDF.</p>
                        </div>
                        {assessment?.report_url ? (
                          <a
                            href={assessment.report_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm cursor-pointer"
                          >
                            <Download size={16} />
                            Download Report PDF
                          </a>
                        ) : (
                          <span className="text-xs text-slate-400 italic">Report PDF generation in progress</span>
                        )}
                      </div>

                      <div className="rounded-xl border border-slate-200 p-4 bg-slate-50 flex flex-col justify-between h-36">
                        <div>
                          <h4 className="font-semibold text-slate-800 text-sm">XportScore Official Certificate</h4>
                          <p className="text-xs text-slate-500 mt-1">Credential certificate certifying export readiness status.</p>
                        </div>
                        {assessment?.certificate_url ? (
                          <a
                            href={assessment.certificate_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm cursor-pointer"
                          >
                            <ExternalLink size={16} />
                            View Assessment Certificate
                          </a>
                        ) : (
                          <span className="text-xs text-slate-400 italic">Certificate generation in progress</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value, colSpan = 1, isUrl = false }) {
  const spanClass = colSpan === 2 ? "sm:col-span-2" : "";
  return (
    <div className={`space-y-1.5 ${spanClass}`}>
      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{label}</span>
      <div className="rounded-xl bg-slate-50 border border-slate-200/60 p-3.5 text-sm font-medium text-slate-800">
        {isUrl && value ? (
          <a href={value.startsWith("http") ? value : `https://${value}`} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline flex items-center gap-1">
            {value}
            <Globe size={14} className="inline" />
          </a>
        ) : (
          value || "—"
        )}
      </div>
    </div>
  );
}

function ConsentCheck({ label, checked }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 bg-slate-50/50">
      <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-white transition-colors
        ${checked ? "bg-teal-600 border-teal-600" : "border-slate-300 bg-white"}`}>
        {checked && <Check size={14} strokeWidth={3} />}
      </div>
      <p className="text-sm font-medium text-slate-700 leading-snug">{label}</p>
    </div>
  );
}

function DocumentLinkList({ label, urls }) {
  const getFileName = (url) => {
    if (!url) return "";
    const parts = url.split("/");
    const lastPart = parts[parts.length - 1];
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}_/i;
    return lastPart.replace(uuidRegex, "");
  };

  return (
    <div className="space-y-1.5">
      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{label}</span>
      <div className="rounded-xl bg-slate-50 border border-slate-200/60 p-4 min-h-[50px] flex flex-col justify-center">
        {urls && urls.length > 0 ? (
          <div className="space-y-2">
            {urls.map((url, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center gap-1.5 break-all"
              >
                <ExternalLink size={15} className="shrink-0" />
                {getFileName(url) || `document_${idx + 1}`}
              </a>
            ))}
          </div>
        ) : (
          <span className="text-sm text-slate-500 italic">No document uploaded</span>
        )}
      </div>
    </div>
  );
}
