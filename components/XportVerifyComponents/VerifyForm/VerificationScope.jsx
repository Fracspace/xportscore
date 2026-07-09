import React from "react";
import Checkbox from "@/components/common/Checkbox";
import { useFormContext } from "react-hook-form";

function VerificationScope() {
  const {
    register,
    formState: { error }
  } = useFormContext();
  return (
    <div>
      <div className="border-t border-slate-200 p-10">
        <h2 className="text-3xl font-bold text-slate-800">
          Section 4: Requested Verification Scope
        </h2>

        <div className="mt-10 space-y-10">
          {/* Identity & Business Verification */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-slate-800">
              Identity & Business Verification
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value="Company registration status"
                  {...register("identityVerification")}
                />
                <span>Company registration status</span>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value="Legal business identity"
                  {...register("identityVerification")}
                />
                <span>Legal business identity</span>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value="Company age"
                  {...register("identityVerification")}
                />
                <span>Company age</span>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value="Registered address"
                  {...register("identityVerification")}
                />
                <span>Registered address</span>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value="Operational address"
                  {...register("identityVerification")}
                />
                <span>Operational address</span>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value="Business ownership"
                  {...register("identityVerification")}
                />
                <span>Business ownership (where available)</span>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value="Directors / Key management"
                  {...register("identityVerification")}
                />
                <span>Directors / Key management (where available)</span>
              </label>
             
            </div>
          </div>

          {/* Trade Intelligence */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-slate-800">
              Trade Intelligence
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
              <Checkbox
                label="Previous import activity"
                value="Previous import activity"
                {...register("tradeIntelligence")}
              />
              <Checkbox
                label="Previous export activity"
                value="Previous export activity"
                {...register("tradeIntelligence")}
              />
              <Checkbox
                label="Countries traded with"
                value="Countries traded with"
                {...register("tradeIntelligence")}
              />
              <Checkbox
                label="Shipment history"
                value="Shipment history"
                {...register("tradeIntelligence")}
              />
              <Checkbox
                label="Product categories traded"
                value="Product categories traded"
                {...register("tradeIntelligence")}
              />
              <Checkbox
                label="HS Codes"
                value="HS Codes"
                {...register("tradeIntelligence")}
              />
              <Checkbox
                label="Estimated shipment frequency"
                value="Estimated shipment frequency"
                {...register("tradeIntelligence")}
              />
              <Checkbox
                label="Estimated trade volumes"
                value="Estimated trade volumes"
                {...register("tradeIntelligence")}
              />
            </div>
          </div>

          {/* Business Reputation */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-slate-800">
              Business Reputation
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
              <Checkbox
                label="Industry reputation"
                value="Industry reputation"
                {...register("businessReputation")}
              />
              <Checkbox
                label="Customer reviews"
                value="Customer reviews"
                {...register("businessReputation")}
              />
              <Checkbox
                label="Supplier reviews"
                value="Supplier reviews"
                {...register("businessReputation")}
              />
              <Checkbox
                label="Public complaints"
                value="Public complaints"
                {...register("businessReputation")}
              />
              <Checkbox
                label="Trade references (where available)"
                value="Trade references"
                {...register("businessReputation")}
              />
              <Checkbox
                label="Media mentions"
                value="Media mentions"
                {...register("businessReputation")}
              />
              <Checkbox
                label="Digital trust assessment"
                value="Digital trust assessment"
                {...register("businessReputation")}
              />
            </div>
          </div>

          {/* Operational Review */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-slate-800">
              Operational Review
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
              <Checkbox
                label="Products / Services offered"
                value="Products / Services offered"
                {...register("operationalReview")}
              />
              <Checkbox
                label="Manufacturing capability"
                value="Manufacturing capability"
                {...register("operationalReview")}
              />
              <Checkbox
                label="Warehouse / Facility presence"
                value="Warehouse / Facility presence"
                {...register("operationalReview")}
              />
              <Checkbox
                label="Employee size estimate"
                value="Employee size estimate"
                {...register("operationalReview")}
              />
              <Checkbox
                label="Global market presence"
                value="Global market presence"
                {...register("operationalReview")}
              />
            </div>
          </div>

          {/* Compliance Review */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-slate-800">
              Compliance Review
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
              <Checkbox
                label="Business registrations"
                value="Business registrations"
                {...register("complianceReview")}
              />
              <Checkbox
                label="Import / Export licences"
                value="Import / Export licences"
                {...register("complianceReview")}
              />
              <Checkbox
                label="Product certifications"
                value="Product certifications"
                {...register("complianceReview")}
              />
              <Checkbox
                label="ISO / HACCP / CE / FDA / GMP / Halal (where applicable)"
                value="ISO / HACCP / CE / FDA / GMP / Halal"
                {...register("complianceReview")}
              />
              <Checkbox
                label="Regulatory filings"
                value="Regulatory filings"
                {...register("complianceReview")}
              />
            </div>
          </div>

          {/* Risk & Due Diligence */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-slate-800">
              Risk & Due Diligence
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
              <Checkbox
                label="Litigation search"
                value="Litigation search"
                {...register("riskDueDiligence")}
              />
              <Checkbox
                label="Insolvency / bankruptcy search"
                value="Insolvency / bankruptcy search"
                {...register("riskDueDiligence")}
              />
              <Checkbox
                label="Regulatory actions"
                value="Regulatory actions"
                {...register("riskDueDiligence")}
              />
              <Checkbox
                label="Global sanctions screening"
                value="Global sanctions screening"
                {...register("riskDueDiligence")}
              />
              <Checkbox
                label="Politically Exposed Person (PEP) screening"
                value="Politically Exposed Person (PEP) screening"
                {...register("riskDueDiligence")}
              />
              <Checkbox
                label="Adverse media review"
                value="Adverse media review"
                {...register("riskDueDiligence")}
              />
              <Checkbox
                label="Fraud / risk indicators"
                value="Fraud / risk indicators"
                {...register("riskDueDiligence")}
              />
            </div>
          </div>

          {/* Contact Verification */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-slate-800">
              Contact Verification
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
              <Checkbox
                label="Phone verification"
                value="Phone verification"
                {...register("contactVerification")}
              />
              <Checkbox
                label="Email verification"
                value="Email verification"
                {...register("contactVerification")}
              />
              <Checkbox
                label="Website review"
                value="Website review"
                {...register("contactVerification")}
              />
              <Checkbox
                label="Domain review"
                value="Domain review"
                {...register("contactVerification")}
              />
              <Checkbox
                label="Office location verification"
                value="Office location verification"
                {...register("contactVerification")}
              />
              <Checkbox
                label="Google Maps verification"
                value="Google Maps verification"
                {...register("contactVerification")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerificationScope;
