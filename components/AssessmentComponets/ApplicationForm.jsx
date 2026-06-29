"use client";

import { useState } from "react";
import React from "react";

function ApplicationForm() {
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
            {currentStep === 0 && <ApplicantInformation />}
            {currentStep === 1 && <BusinessInformation />}
            {currentStep === 2 && <ExportStatus />}
            {currentStep === 3 && <ProductInformation />}
            {currentStep === 4 && <CommercialInformation />}
            {currentStep === 5 && <DocumentsUpload />}
            {currentStep === 6 && <SupportingDocuments />}
            {currentStep === 7 && <RegistryConsent />}
            {currentStep === 8 && <Declaration />}
            {currentStep === 9 && <PaymentSection />}
            {currentStep === 10 && <FinalSubmission />}

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

function ApplicantInformation() {
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Applicant Information</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Applicant Name" />
        <Input label="Designation" />
        <Input label="Email Address" type="email" />
        <Input label="Mobile / WhatsApp Number" />
      </div>
    </div>
  );
}

function BusinessInformation() {
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Business Information</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Legal Business Name" />
        <Input label="Brand / Trade Name" />

        <Input label="Country of Registration" />
        <Input label="City / State" />

        <Input label="Website" />
        <Input label="Year Established" />
      </div>

      <div className="mt-6">
        <label className="block mb-2">Registered Business Address</label>

        <textarea rows={4} className="w-full border rounded-lg p-3" />
      </div>

      <div className="mt-8">
        <label className="font-semibold block mb-4">Business Type</label>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Manufacturer",
            "Trader",
            "Merchant Exporter",
            "Service Provider",
            "Distributor",
            "Brand Owner"
          ].map((item) => (
            <Checkbox key={item} label={item} />
          ))}

          <Input label="Other" />
        </div>
      </div>
    </div>
  );
}

function ProductInformation() {
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Product / Service Information</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Product / Service Category" />

        <Input label="Monthly Production / Supply Capacity" />

        <Input label="Minimum Order Quantity" />

        <Input label="Product Shelf Life" />
      </div>

      <div className="mt-6">
        <label className="block mb-2">Product / Service Description</label>

        <textarea rows="4" className="w-full border rounded-lg p-3" />
      </div>

      <div className="mt-8">
        <h3 className="font-semibold mb-4">
          Main Products / SKUs to be Assessed
        </h3>

        <div className="space-y-4">
          <Input label="SKU 1" />
          <Input label="SKU 2" />
          <Input label="SKU 3" />
          <Input label="SKU 4" />
          <Input label="SKU 5" />
        </div>
      </div>
    </div>
  );
}

function CommercialInformation() {
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Commercial Information</h2>

      <div className="space-y-8">
        <div>
          <h3 className="font-semibold mb-4">Current Price List Available?</h3>

          <Checkbox label="Yes" />
          <Checkbox label="No" />
        </div>

        <div>
          <h3 className="font-semibold mb-4">Export Price List Available?</h3>

          <Checkbox label="Yes" />
          <Checkbox label="No" />
        </div>

        <div>
          <h3 className="font-semibold mb-4">Preferred Pricing Currency</h3>

          <div className="grid md:grid-cols-3 gap-4">
            {["USD", "INR", "EUR", "GBP", "AED"].map((item) => (
              <Checkbox key={item} label={item} />
            ))}
          </div>

          <div className="mt-4">
            <Input label="Other Currency" />
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Payment Terms</h3>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "100% advance",
              "Advance + balance before dispatch",
              "Letter of Credit",
              "Credit period",
              "Negotiable",
              "Not finalised"
            ].map((item) => (
              <Checkbox key={item} label={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DocumentsUpload() {
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Documents Upload</h2>

      {[
        "Business Documents",
        "Product / Service Documents",
        "Packaging Documents",
        "Certification & Quality Documents",
        "Past Export Documents"
      ].map((section) => (
        <div key={section} className="mb-8">
          <h3 className="font-semibold text-lg mb-4">{section}</h3>

          <input
            type="file"
            multiple
            className="w-full border rounded-lg p-3"
          />
        </div>
      ))}
    </div>
  );
}

function SupportingDocuments() {
  const docs = [
    "Website Link",
    "Buyer Enquiry Emails",
    "Distributor Agreement",
    "Product Videos",
    "Factory Photos",
    "Quality Control Process Document",
    "Logistics Partner Details"
  ];

  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Optional Supporting Documents</h2>

      <div className="space-y-4">
        {docs.map((item) => (
          <Checkbox key={item} label={item} />
        ))}
      </div>

      <div className="mt-8">
        <input type="file" multiple className="w-full border rounded-lg p-3" />
      </div>
    </div>
  );
}

function RegistryConsent() {
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Registry Consent</h2>

      <p className="text-slate-600 mb-6">
        Do you want your business to be listed on the XportScore Verified
        Registry if certified?
      </p>

      <div className="space-y-3">
        <Radio label="Yes" />
        <Radio label="No" />
        <Radio label="Decide Later" />
      </div>

      <div className="mt-8 bg-slate-50 rounded-lg p-5">
        <h4 className="font-semibold mb-3">Public Registry May Display</h4>

        <ul className="list-disc ml-5 space-y-2">
          <li>Company Name</li>
          <li>Country</li>
          <li>Product Category</li>
          <li>Readiness Status</li>
          <li>Certificate Validity</li>
          <li>Verification Status</li>
        </ul>
      </div>
    </div>
  );
}

function Declaration() {
  const declarations = [
    "Information Accuracy",
    "Document Authenticity",
    "Private Audit Acknowledgement",
    "No Guarantee Acknowledgement",
    "Revocation Acknowledgement",
    "Data Consent"
  ];

  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Declaration</h2>

      <div className="space-y-5">
        {declarations.map((item) => (
          <Checkbox key={item} label={item} />
        ))}
      </div>
    </div>
  );
}

function PaymentSection() {
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Payment Confirmation</h2>

      <div className="bg-[#041B4D] text-white rounded-xl p-6 mb-8">
        <p className="text-sm uppercase">Assessment Fee</p>

        <h3 className="text-4xl font-bold mt-2">USD 299</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Payment Reference Number" />

        <Input label="Billing Name" />

        <Input label="Billing Email" type="email" />
      </div>

      <div className="mt-6">
        <label className="block mb-2">Billing Address</label>
        <textarea rows="4" className="w-full border rounded-lg p-3" />
      </div>
    </div>
  );
}

function FinalSubmission() {
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Final Submission</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Applicant Name" />

        <Input label="Company Name" />

        <Input label="Date" type="date" />

        <Input label="Digital Signature" />
      </div>

      <button
        type="submit"
        className="mt-10 w-full bg-[#041B4D] text-white py-4 rounded-lg font-medium hover:bg-[#062766]"
      >
        Submit Application for XportScore Audit
      </button>
    </div>
  );
}

function ExportStatus() {
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Export Status</h2>

      <div className="space-y-4">
        {[
          "Already exporting",
          "Export-ready but not yet exporting",
          "Preparing to export",
          "Only samples sent",
          "International enquiries received",
          "Not exported yet"
        ].map((item) => (
          <Checkbox key={item} label={item} />
        ))}
      </div>

      <div className="mt-8">
        <Input label="Countries Exported To" />
      </div>

      <div className="mt-8">
        <label className="font-semibold block mb-4">
          IEC / Export Registration
        </label>

        {["Yes", "No", "Applied", "Not Applicable"].map((item) => (
          <Checkbox key={item} label={item} />
        ))}
      </div>
    </div>
  );
}

function Radio({ label }) {
  return (
    <label className="flex items-center gap-3">
      <input type="radio" name="radio-group" />
      <span>{label}</span>
    </label>
  );
}

function Input({ label, type = "text" }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">{label}</label>

      <input type={type} className="w-full border rounded-lg p-3" />
    </div>
  );
}

function Checkbox({ label }) {
  return (
    <label className="flex items-center gap-3">
      <input type="checkbox" />
      <span>{label}</span>
    </label>
  );
}

export default ApplicationForm;
