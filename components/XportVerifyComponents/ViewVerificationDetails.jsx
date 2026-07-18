"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle2, Building, Globe, ShieldCheck, Check, FileText, ExternalLink, HelpCircle, Download, Layers } from "lucide-react";

export default function ViewVerificationDetails({ verification }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("requestingCompany");

  const reqCompany = verification?.requesting_company || {};
  const bizToVerify = verification?.business_to_verify || {};
  const relationship = verification?.relationship || {};
  const scope = verification?.verification_scope || {};
  const supporting = verification?.supporting_info || {};
  const declaration = verification?.declaration || {};
  const submission = verification?.submission || {};

  const tabs = [
    { id: "requestingCompany", label: "Requesting Company" },
    { id: "businessToVerify", label: "Business to Verify" },
    { id: "relationship", label: "Purpose & Relationship" },
    { id: "scope", label: "Verification Scope" },
    { id: "supporting", label: "Supporting Info" },
    { id: "submission", label: "Consent & Signature" },
    { id: "audit", label: "Verification Progress" }
  ];

  // Helper to filter active relationship options
  const getActivePurposes = () => {
    const labels = {
      beforeAppointingDistributor: "Before Appointing Distributor",
      beforeAppointingImporter: "Before Appointing Importer",
      beforeAppointingSupplier: "Before Appointing Supplier",
      beforeMakingPayment: "Before Making Payment",
      beforePlacingOrder: "Before Placing Order",
      beforeShippingGoods: "Before Shipping Goods",
      investmentDueDiligence: "Investment Due Diligence",
      strategicPartnership: "Strategic Partnership",
      vendorOnboarding: "Vendor Onboarding"
    };

    return Object.keys(relationship)
      .filter((key) => relationship[key] === true)
      .map((key) => labels[key] || key);
  };

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
                <h1 className="text-2xl font-bold text-slate-900">Business Verification Request</h1>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 capitalize">
                  <CheckCircle2 size={13} />
                  {verification?.status || "Submitted"}
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-1">Request ID: {verification?.id || "—"}</p>
            </div>
          </div>
          <button
            onClick={() => router.push("/dashboard")}
            className="flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 cursor-pointer"
          >
            Return to Dashboard
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Navigation Sidebar */}
          <aside className="bg-white rounded-2xl border border-slate-200 p-5 h-fit sticky top-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4 px-2 text-xs uppercase tracking-wider">
              Verification Summary
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
            {activeTab === "requestingCompany" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Building className="text-teal-600" size={22} />
                  <h2 className="text-xl font-bold text-slate-900">Requesting Company</h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <DetailRow label="Company Name" value={reqCompany.companyName} />
                  <DetailRow label="Contact Representative" value={reqCompany.contactPerson} />
                  <DetailRow label="Designation" value={reqCompany.designation} />
                  <DetailRow label="Corporate Email" value={reqCompany.email} />
                  <DetailRow label="Phone Number" value={reqCompany.phone} />
                  <DetailRow label="Country" value={reqCompany.country} />
                </div>
              </div>
            )}

            {activeTab === "businessToVerify" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Building className="text-teal-600" size={22} />
                  <h2 className="text-xl font-bold text-slate-900">Business To Verify (Target Company)</h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <DetailRow label="Legal Company Name" value={bizToVerify.legalCompanyName} />
                  <DetailRow label="Brand / Trading Name" value={bizToVerify.brandTradingName} />
                  <DetailRow label="Target Contact Person" value={bizToVerify.businessContactPerson} />
                  <DetailRow label="Registered Address" value={bizToVerify.registeredAddress} colSpan={2} />
                  <DetailRow label="Country of Incorporation" value={bizToVerify.countryOfCompany} />
                  <DetailRow label="Corporate Email" value={bizToVerify.companyEmail} />
                  <DetailRow label="Company Phone Number" value={bizToVerify.companyPhone} />
                  <DetailRow label="Website Address" value={bizToVerify.website} isUrl />
                  <DetailRow label="Business Registration No." value={bizToVerify.businessRegistrationNumber} />
                  <DetailRow label="Import / Export Registration Code (IEC)" value={bizToVerify.importExportRegistrationNumber} />
                  <DetailRow label="Tax / VAT Identification Number" value={bizToVerify.taxVatNumber} />
                </div>
              </div>
            )}

            {activeTab === "relationship" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <HelpCircle className="text-teal-600" size={22} />
                  <h2 className="text-xl font-bold text-slate-900">Purpose & Relationship</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-sm font-medium text-slate-500 mb-2">Selected reasons for conducting this corporate verification:</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {getActivePurposes().map((purpose, index) => (
                      <div key={index} className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-teal-600 text-white">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="text-sm font-semibold text-slate-700 leading-snug">{purpose}</span>
                      </div>
                    ))}
                    {getActivePurposes().length === 0 && (
                      <span className="text-sm text-slate-400 italic">No purpose checked</span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "scope" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Layers className="text-teal-600" size={22} />
                  <h2 className="text-xl font-bold text-slate-900">Verification Scope Selection</h2>
                </div>
                <div className="space-y-6">
                  <ScopeSection label="Identity Verification" items={scope.identityVerification} />
                  <ScopeSection label="Contact Verification" items={scope.contactVerification} />
                  <ScopeSection label="Compliance Review" items={scope.complianceReview} />
                  <ScopeSection label="Business Reputation" items={scope.businessReputation} />
                  <ScopeSection label="Operational Review" items={scope.operationalReview} />
                  <ScopeSection label="Trade Intelligence" items={scope.tradeIntelligence} />
                  <ScopeSection label="Risk & Due Diligence" items={scope.riskDueDiligence} />
                </div>
              </div>
            )}

            {activeTab === "supporting" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileText className="text-teal-600" size={22} />
                  <h2 className="text-xl font-bold text-slate-900">Supporting Info</h2>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Required Documents Checked</span>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {supporting.supportingDocuments?.map((doc, idx) => (
                        <div key={idx} className="flex items-center gap-2 rounded-xl border border-slate-200 p-3 bg-slate-50">
                          <Check size={14} className="text-teal-600" />
                          <span className="text-xs font-semibold text-slate-700">{doc}</span>
                        </div>
                      ))}
                      {(!supporting.supportingDocuments || supporting.supportingDocuments.length === 0) && (
                        <span className="text-sm text-slate-400 italic">No supporting documents listed</span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 pt-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Additional Investigation Comments</span>
                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm font-medium text-slate-700 leading-relaxed min-h-[80px]">
                      {verification?.additional_information || "No comments entered."}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "submission" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShieldCheck className="text-teal-600" size={22} />
                  <h2 className="text-xl font-bold text-slate-900">Consent & Digital Signatures</h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <DetailRow label="Requestor Name" value={submission.requestorName || declaration.requestorName} />
                  <DetailRow label="Company" value={submission.company || declaration.company} />
                  <DetailRow label="Date" value={submission.date || declaration.date} />
                  <DetailRow label="Digital Signature Verification" value={submission.digitalSignature || declaration.digitalSignature} />
                  <div className="sm:col-span-2">
                    <ConsentCheck label="I certify that all details submitted represent a legitimate interest in business verification and the target company details are authentic." checked={submission.agree || declaration.agree} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "audit" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShieldCheck className="text-teal-600" size={22} />
                  <h2 className="text-xl font-bold text-slate-900">Verification Deliverables</h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <DetailRow label="Verification Status" value={verification?.status || "Submitted"} />
                  <DetailRow label="Request Created" value={verification?.created_at ? new Date(verification.created_at).toLocaleString() : "—"} />
                  <DetailRow label="Last Updated" value={verification?.updated_at ? new Date(verification.updated_at).toLocaleString() : "—"} />
                  
                  <div className="sm:col-span-2 border-t border-slate-100 pt-6">
                    <h3 className="text-md font-semibold text-slate-800 mb-4">Official Verification Outputs</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-slate-200 p-4 bg-slate-50 flex flex-col justify-between h-36">
                        <div>
                          <h4 className="font-semibold text-slate-800 text-sm">Corporate Audit Report</h4>
                          <p className="text-xs text-slate-500 mt-1">Detailed legal and compliance verification report PDF.</p>
                        </div>
                        {verification?.report_url ? (
                          <a
                            href={verification.report_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm cursor-pointer"
                          >
                            <Download size={16} />
                            Download Verification Report PDF
                          </a>
                        ) : (
                          <span className="text-xs text-slate-400 italic">Report PDF generation pending review</span>
                        )}
                      </div>

                      <div className="rounded-xl border border-slate-200 p-4 bg-slate-50 flex flex-col justify-between h-36">
                        <div>
                          <h4 className="font-semibold text-slate-800 text-sm">Verified Credentials Certificate</h4>
                          <p className="text-xs text-slate-500 mt-1">Official verified status certificate certifying global compliance status.</p>
                        </div>
                        {verification?.certificate_url ? (
                          <a
                            href={verification.certificate_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm cursor-pointer"
                          >
                            <ExternalLink size={16} />
                            View Verification Certificate
                          </a>
                        ) : (
                          <span className="text-xs text-slate-400 italic">Certificate generation pending review</span>
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

function ScopeSection({ label, items }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="space-y-2">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span key={index} className="inline-flex items-center gap-1 rounded-full bg-teal-50 border border-teal-100 px-3.5 py-1 text-xs font-medium text-teal-700">
            <Check size={12} strokeWidth={2.5} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
