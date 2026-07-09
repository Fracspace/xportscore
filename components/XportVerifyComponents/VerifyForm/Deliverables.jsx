import React from "react";

function Deliverables() {
  return (
    <div>
      <div className="border-t border-slate-200 p-10">
        <h2 className="text-3xl font-bold text-slate-800">
          Section 7: Report Deliverables
        </h2>

        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-8">
          <h3 className="mb-6 text-xl font-semibold text-slate-800">
            The XportVerify Standard Report may include:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-600"></span>
              <p>Executive Summary</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-600"></span>
              <p>Verification Confidence Rating</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-600"></span>
              <p>Business Identity Verification</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-600"></span>
              <p>Company Registration Review</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-600"></span>
              <p>Ownership & Management Overview (where available)</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-600"></span>
              <p>Previous Trade Intelligence*</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-600"></span>
              <p>Import / Export Activity Snapshot*</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-600"></span>
              <p>Countries Traded With*</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-600"></span>
              <p>Shipment Intelligence*</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-600"></span>
              <p>Business Reputation Analysis</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-600"></span>
              <p>Digital Presence Assessment</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-600"></span>
              <p>Contact Verification</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-600"></span>
              <p>Certifications & Licences Review</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-600"></span>
              <p>Litigation & Regulatory Screening</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-600"></span>
              <p>Sanctions & Watchlist Screening</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-600"></span>
              <p>AI Trade Intelligence Summary</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-600"></span>
              <p>Overall Risk Assessment</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-600"></span>
              <p>QR-Verifiable Report</p>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm leading-7 text-slate-700">
              <strong>*Note:</strong> Information marked with an asterisk (*) is
              included where lawfully available from commercial databases,
              public records, or other authorised sources. Availability varies
              depending on the country and data provider.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deliverables;
