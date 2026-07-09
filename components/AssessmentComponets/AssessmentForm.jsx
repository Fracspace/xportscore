"use client";

import { useState, useEffect } from "react";

// ─── Responsive hook ──────────────────────────────────────────────────────────
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = {
  navy: "#0B1437",
  navyMid: "#0F1F5C",
  teal: "#0D9B70",
  tealLight: "#E6F7F2",
  tealDark: "#065F46",
  white: "#FFFFFF",
  bodyBg: "#F0F4FA",
  cardBorder: "#E2E8F0",
  inputBorder: "#CBD5E1",
  textPrimary: "#1E293B",
  textSecondary: "#475569",
  textMuted: "#94A3B8",
  textLabel: "#64748B"
};

// ─── Primitives ───────────────────────────────────────────────────────────────

function Field({ label, required, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: T.textLabel
        }}
      >
        {label}
        {required && <span style={{ color: "#E53E3E", marginLeft: 2 }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const baseInput = {
  border: `1px solid ${T.inputBorder}`,
  borderRadius: 8,
  padding: "10px 14px",
  fontSize: 14,
  color: T.textPrimary,
  background: T.white,
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "inherit",
  transition: "border-color 0.15s, box-shadow 0.15s"
};

function Input({ value, onChange, placeholder, type = "text" }) {
  const [f, setF] = useState(false);
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      onFocus={() => setF(true)}
      onBlur={() => setF(false)}
      style={{
        ...baseInput,
        borderColor: f ? T.teal : T.inputBorder,
        boxShadow: f ? `0 0 0 3px rgba(13,155,112,0.12)` : "none"
      }}
    />
  );
}

function Textarea({ value, onChange, rows = 3 }) {
  const [f, setF] = useState(false);
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      onFocus={() => setF(true)}
      onBlur={() => setF(false)}
      style={{
        ...baseInput,
        resize: "none",
        borderColor: f ? T.teal : T.inputBorder,
        boxShadow: f ? `0 0 0 3px rgba(13,155,112,0.12)` : "none"
      }}
    />
  );
}

function Checkbox({ checked, onChange }) {
  return (
    <div
      onClick={onChange}
      style={{
        width: 18,
        height: 18,
        borderRadius: 4,
        flexShrink: 0,
        cursor: "pointer",
        border: checked ? `2px solid ${T.teal}` : `2px solid ${T.inputBorder}`,
        background: checked ? T.teal : T.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.15s"
      }}
    >
      {checked && (
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path
            d="M1 4L4 7L9 1"
            stroke="#FFF"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

function Radio({ checked }) {
  return (
    <div
      style={{
        width: 18,
        height: 18,
        borderRadius: "50%",
        flexShrink: 0,
        border: checked ? `2px solid ${T.teal}` : `2px solid ${T.inputBorder}`,
        background: T.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.15s"
      }}
    >
      {checked && (
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: T.teal
          }}
        />
      )}
    </div>
  );
}

function CheckGroup({ options, selected, onChange }) {
  const toggle = (opt) =>
    onChange(
      selected.includes(opt)
        ? selected.filter((x) => x !== opt)
        : [...selected, opt]
    );
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {options.map((opt) => (
        <label
          key={opt}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            cursor: "pointer",
            fontSize: 14,
            color: "#334155"
          }}
        >
          <Checkbox
            checked={selected.includes(opt)}
            onChange={() => toggle(opt)}
          />
          {opt}
        </label>
      ))}
    </div>
  );
}

function RadioGroup({ options, selected, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {options.map((opt) => (
        <label
          key={opt}
          onClick={() => onChange(opt)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            cursor: "pointer",
            fontSize: 14,
            color: "#334155"
          }}
        >
          <Radio checked={selected === opt} />
          {opt}
        </label>
      ))}
    </div>
  );
}

function SectionCard({ title, subtitle, children }) {
  return (
    <div
      style={{
        background: T.white,
        borderRadius: 12,
        border: `1px solid ${T.cardBorder}`,
        padding: "20px 20px",
        marginBottom: 16
      }}
    >
      {title && (
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: T.teal,
            marginBottom: subtitle ? 2 : 16,
            marginTop: 0
          }}
        >
          {title}
        </p>
      )}
      {subtitle && (
        <p
          style={{
            fontSize: 12,
            color: T.textMuted,
            marginBottom: 16,
            marginTop: 0
          }}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}

function Grid2({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
        gap: 14
      }}
    >
      {children}
    </div>
  );
}

function DocField({ label }) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 14px",
        border: `1px dashed ${T.inputBorder}`,
        borderRadius: 8,
        cursor: "pointer",
        transition: "border-color 0.15s, background 0.15s"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = T.teal;
        e.currentTarget.style.background = "#F0FDF9";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = T.inputBorder;
        e.currentTarget.style.background = "transparent";
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: T.tealLight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke={T.teal}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#334155",
            margin: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          {label}
        </p>
        <p style={{ fontSize: 11, color: T.textMuted, margin: 0 }}>
          PDF, JPG, PNG · max 5 MB
        </p>
      </div>
      <input
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        style={{ display: "none" }}
      />
    </label>
  );
}

// ─── Section content ──────────────────────────────────────────────────────────

function S1({ form, set }) {
  return (
    <>
      <SectionCard title="Assessment Type">
        <RadioGroup
          options={["Product Export Assessment", "Service Export Assessment"]}
          selected={
            form.assessmentType === "product"
              ? "Product Export Assessment"
              : form.assessmentType === "service"
                ? "Service Export Assessment"
                : ""
          }
          onChange={(v) =>
            set("assessmentType", v.includes("Product") ? "product" : "service")
          }
        />
        <div
          style={{
            marginTop: 16,
            padding: "10px 14px",
            background: "#F8FAFC",
            borderRadius: 8,
            border: `1px solid ${T.cardBorder}`,
            fontSize: 13,
            color: T.textSecondary
          }}
        >
          Assessment Fee: <strong style={{ color: T.navy }}>USD 149</strong> +
          Applicable Taxes
        </div>
      </SectionCard>
      <SectionCard title="Person Completing This Assessment">
        <Grid2>
          <Field label="Full Name" required>
            <Input
              value={form.fullName}
              onChange={(v) => set("fullName", v)}
              placeholder="Enter your full name"
            />
          </Field>
          <Field label="Designation" required>
            <Input
              value={form.designation}
              onChange={(v) => set("designation", v)}
              placeholder="e.g. CEO, Export Manager"
            />
          </Field>
          <Field label="Corporate Email" required>
            <Input
              value={form.email}
              onChange={(v) => set("email", v)}
              type="email"
              placeholder="name@company.com"
            />
          </Field>
          <Field label="Mobile / WhatsApp" required>
            <Input
              value={form.phone}
              onChange={(v) => set("phone", v)}
              placeholder="+1 (555) 000-0000"
            />
          </Field>
        </Grid2>
      </SectionCard>
    </>
  );
}

function S2({ form, set }) {
  return (
    <>
      <SectionCard title="Business Profile">
        <Grid2>
          <Field label="Legal Business Name" required>
            <Input
              value={form.legalName}
              onChange={(v) => set("legalName", v)}
              placeholder="Registered business name"
            />
          </Field>
          <Field label="Brand / Trade Name">
            <Input
              value={form.brandName}
              onChange={(v) => set("brandName", v)}
              placeholder="If different from legal name"
            />
          </Field>
          <Field label="Country" required>
            <Input
              value={form.country}
              onChange={(v) => set("country", v)}
              placeholder="Country of incorporation"
            />
          </Field>
          <Field label="City / State" required>
            <Input
              value={form.cityState}
              onChange={(v) => set("cityState", v)}
              placeholder="City, State / Province"
            />
          </Field>
          <Field label="Website">
            <Input
              value={form.website}
              onChange={(v) => set("website", v)}
              placeholder="https://yourcompany.com"
            />
          </Field>
          <Field label="Year Established" required>
            <Input
              value={form.yearEstablished}
              onChange={(v) => set("yearEstablished", v)}
              placeholder="e.g. 2010"
            />
          </Field>
        </Grid2>
        <div style={{ marginTop: 14 }}>
          <Field label="Registered Address" required>
            <Textarea
              value={form.registeredAddress}
              onChange={(v) => set("registeredAddress", v)}
              rows={2}
            />
          </Field>
        </div>
      </SectionCard>
      <SectionCard title="Business Type" subtitle="Select all that apply">
        <CheckGroup
          options={[
            "Manufacturer",
            "Trader",
            "Merchant Exporter",
            "Service Provider",
            "Distributor",
            "Brand Owner"
          ]}
          selected={form.businessTypes}
          onChange={(v) => set("businessTypes", v)}
        />
      </SectionCard>
    </>
  );
}

function S3({ form, set }) {
  return (
    <>
      <SectionCard title="Current International Activity">
        <CheckGroup
          options={[
            "Currently Exporting Products",
            "Currently Providing Services Internationally",
            "Planning to Start Exporting",
            "Not Currently Exporting"
          ]}
          selected={form.currentActivity}
          onChange={(v) => set("currentActivity", v)}
        />
      </SectionCard>
      <SectionCard title="Export Markets">
        <Field label="Countries Served / Exported To">
          <Textarea
            value={form.exportMarkets}
            onChange={(v) => set("exportMarkets", v)}
            rows={2}
          />
        </Field>
      </SectionCard>
      <SectionCard title="Registration & Compliance">
        <Grid2>
          <Field label="Legal Entity Registration" required>
            <Input
              value={form.legalEntityReg}
              onChange={(v) => set("legalEntityReg", v)}
            />
          </Field>
          <Field label="Registration Number">
            <Input
              value={form.registrationNumber}
              onChange={(v) => set("registrationNumber", v)}
            />
          </Field>
          <Field label="Tax Registration" required>
            <Input
              value={form.taxRegistration}
              onChange={(v) => set("taxRegistration", v)}
            />
          </Field>
          <Field label="Export Registration (IEC / Equivalent)" required>
            <Input
              value={form.exportRegistration}
              onChange={(v) => set("exportRegistration", v)}
            />
          </Field>
          <Field label="Other Registrations / Licenses">
            <Input
              value={form.otherRegistrations}
              onChange={(v) => set("otherRegistrations", v)}
            />
          </Field>
          <Field label="Industry Certifications">
            <Input
              value={form.industryCertifications}
              onChange={(v) => set("industryCertifications", v)}
            />
          </Field>
        </Grid2>
      </SectionCard>
    </>
  );
}

function S4({ form, set }) {
  const isProduct = form.assessmentType === "product";
  const isService = form.assessmentType === "service";
  return (
    <>
      {!form.assessmentType && (
        <div
          style={{
            background: "#FFFBEB",
            border: "1px solid #FDE68A",
            borderRadius: 10,
            padding: "12px 16px",
            marginBottom: 16,
            fontSize: 13,
            color: "#92400E"
          }}
        >
          Please select an assessment type in Section 1 to see relevant fields.
        </div>
      )}
      {(isProduct || !form.assessmentType) && (
        <SectionCard
          title="4A — Product Information"
          subtitle="Complete only for product exporters"
        >
          <Grid2>
            <Field label="Product Category" required>
              <Input
                value={form.productCategory}
                onChange={(v) => set("productCategory", v)}
              />
            </Field>
            <Field label="Main Products / SKUs" required>
              <Input
                value={form.mainProducts}
                onChange={(v) => set("mainProducts", v)}
              />
            </Field>
            <Field label="Monthly Production Capacity" required>
              <Input
                value={form.monthlyCapacity}
                onChange={(v) => set("monthlyCapacity", v)}
              />
            </Field>
            <Field label="Capacity Unit" required>
              <Input
                value={form.capacityUnit}
                onChange={(v) => set("capacityUnit", v)}
                placeholder="kg / units / MT"
              />
            </Field>
            <Field label="MOQ" required>
              <Input value={form.moq} onChange={(v) => set("moq", v)} />
            </Field>
            <Field label="MOQ Unit" required>
              <Input value={form.moqUnit} onChange={(v) => set("moqUnit", v)} />
            </Field>
            <Field label="Product Shelf Life" required>
              <Input
                value={form.shelfLife}
                onChange={(v) => set("shelfLife", v)}
              />
            </Field>
            <Field label="Shelf Life Unit" required>
              <Input
                value={form.shelfLifeUnit}
                onChange={(v) => set("shelfLifeUnit", v)}
                placeholder="Days / Months / Years"
              />
            </Field>
          </Grid2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              marginTop: 14
            }}
          >
            <Field label="Product Description" required>
              <Textarea
                value={form.productDescription}
                onChange={(v) => set("productDescription", v)}
                rows={3}
              />
            </Field>
            <Field label="Product Specifications" required>
              <Textarea
                value={form.productSpecs}
                onChange={(v) => set("productSpecs", v)}
                rows={3}
              />
            </Field>
          </div>
          <div style={{ marginTop: 14 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: T.textLabel,
                marginBottom: 10
              }}
            >
              Sample Availability *
            </p>
            <RadioGroup
              options={[
                "Samples Available",
                "Samples Available on Request",
                "Samples Not Available"
              ]}
              selected={form.sampleAvailability}
              onChange={(v) => set("sampleAvailability", v)}
            />
          </div>
        </SectionCard>
      )}
      {(isService || !form.assessmentType) && (
        <SectionCard
          title="4B — Service Information"
          subtitle="Complete only for service exporters"
        >
          <Grid2>
            <Field label="Primary Service Category" required>
              <Input
                value={form.serviceCategory}
                onChange={(v) => set("serviceCategory", v)}
              />
            </Field>
            <Field label="Key Service Lines" required>
              <Input
                value={form.keyServiceLines}
                onChange={(v) => set("keyServiceLines", v)}
              />
            </Field>
            <Field label="Industries / Sectors Served" required>
              <Input
                value={form.industriesServed}
                onChange={(v) => set("industriesServed", v)}
              />
            </Field>
            <Field label="Team Size" required>
              <Input
                value={form.teamSize}
                onChange={(v) => set("teamSize", v)}
              />
            </Field>
            <Field label="Delivery Capacity (Projects / Month)">
              <Input
                value={form.deliveryCapacity}
                onChange={(v) => set("deliveryCapacity", v)}
              />
            </Field>
            <Field label="Avg Project Size (USD)" required>
              <Input
                value={form.avgProjectSize}
                onChange={(v) => set("avgProjectSize", v)}
              />
            </Field>
            <Field label="Min Engagement Value (USD)" required>
              <Input
                value={form.minEngagementValue}
                onChange={(v) => set("minEngagementValue", v)}
              />
            </Field>
            <Field label="Avg Turnaround Time" required>
              <Input
                value={form.avgTurnaround}
                onChange={(v) => set("avgTurnaround", v)}
              />
            </Field>
          </Grid2>
          <div style={{ marginTop: 14 }}>
            <Field label="Detailed Service Description" required>
              <Textarea
                value={form.serviceDescription}
                onChange={(v) => set("serviceDescription", v)}
                rows={4}
              />
            </Field>
          </div>
          <div style={{ marginTop: 14 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: T.textLabel,
                marginBottom: 10
              }}
            >
              Delivery Model *
            </p>
            <CheckGroup
              options={["Remote", "On-site", "Hybrid"]}
              selected={form.deliveryModel}
              onChange={(v) => set("deliveryModel", v)}
            />
          </div>
        </SectionCard>
      )}
    </>
  );
}

function S5({ form, set }) {
  return (
    <>
      <SectionCard title="Pricing & Commercial Terms">
        <Grid2>
          <Field label="Pricing Currency" required>
            <Input
              value={form.pricingCurrency}
              onChange={(v) => set("pricingCurrency", v)}
              placeholder="USD"
            />
          </Field>
          <Field label="Payment Terms" required>
            <Input
              value={form.paymentTerms}
              onChange={(v) => set("paymentTerms", v)}
              placeholder="30% advance, balance on delivery"
            />
          </Field>
        </Grid2>
      </SectionCard>
      {(form.assessmentType === "product" || !form.assessmentType) && (
        <SectionCard title="Price Lists — Product Exporters">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: T.textSecondary,
                  marginBottom: 10,
                  marginTop: 0
                }}
              >
                Current Price List Available
              </p>
              <RadioGroup
                options={["Yes", "No"]}
                selected={form.currentPriceList}
                onChange={(v) => set("currentPriceList", v)}
              />
            </div>
            <div>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: T.textSecondary,
                  marginBottom: 10,
                  marginTop: 0
                }}
              >
                Export Price List Available
              </p>
              <RadioGroup
                options={["Yes", "No"]}
                selected={form.exportPriceList}
                onChange={(v) => set("exportPriceList", v)}
              />
            </div>
          </div>
        </SectionCard>
      )}
      {(form.assessmentType === "service" || !form.assessmentType) && (
        <SectionCard title="Engagement Details — Service Exporters">
          <Grid2>
            <Field label="Average Contract Value">
              <Input
                value={form.avgContractValue}
                onChange={(v) => set("avgContractValue", v)}
              />
            </Field>
            <Field label="Client Engagement Model">
              <Input
                value={form.clientEngagementModel}
                onChange={(v) => set("clientEngagementModel", v)}
              />
            </Field>
            <Field label="Existing International Clients">
              <Input
                value={form.existingIntlClients}
                onChange={(v) => set("existingIntlClients", v)}
              />
            </Field>
            <Field label="Key Markets Served">
              <Input
                value={form.keyMarketsServed}
                onChange={(v) => set("keyMarketsServed", v)}
              />
            </Field>
          </Grid2>
        </SectionCard>
      )}
    </>
  );
}

function S6({ form }) {
  const isProduct = form.assessmentType === "product" || !form.assessmentType;
  const isService = form.assessmentType === "service" || !form.assessmentType;
  return (
    <>
      <SectionCard
        title="Mandatory Documents"
        subtitle="Required for all applicants"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            "Business Registration Certificate",
            "Tax Registration Certificate",
            "Export Registration (IEC / Equivalent)",
            "Certifications / Licenses (if applicable)"
          ].map((d) => (
            <DocField key={d} label={d} />
          ))}
        </div>
      </SectionCard>
      {isProduct && (
        <SectionCard title="Product Exporter Documents">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              "Product Catalogue / Brochure",
              "Product Photos",
              "Packaging Photos",
              "Product Specification Sheet",
              "Current Price List",
              "Certifications & Test Reports",
              "Previous Export Documents (Optional)"
            ].map((d) => (
              <DocField key={d} label={d} />
            ))}
          </div>
        </SectionCard>
      )}
      {isService && (
        <SectionCard title="Service Exporter Documents">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              "Company Profile",
              "Capability Statement / Capability Deck",
              "Service Portfolio",
              "Client References",
              "Case Studies",
              "Service Certifications",
              "Sample Contracts (Optional)"
            ].map((d) => (
              <DocField key={d} label={d} />
            ))}
          </div>
        </SectionCard>
      )}
    </>
  );
}

function S7({ form, set }) {
  const opts = [
    "Website Links",
    "Product Videos",
    "Factory Photos",
    "Buyer Enquiries",
    "Distributor Agreements",
    "Client Testimonials",
    "Quality Control Procedures",
    "Logistics Information",
    "Market Research Reports"
  ];
  return (
    <SectionCard title="Registry Consent & Supporting Docs">
      <label
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 12,
          cursor: "pointer",
          marginBottom: 20
        }}
      >
        <Checkbox
          checked={form.registryConsent}
          onChange={() => set("registryConsent", !form.registryConsent)}
        />
        <span style={{ fontSize: 14, color: "#334155", lineHeight: 1.6 }}>
          I consent to be listed in the XportScore® Exporter Registry and allow
          my business information to be shared with potential international
          buyers, distributors, and sourcing agents.
        </span>
      </label>
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: T.textLabel,
          marginBottom: 12
        }}
      >
        Supporting Documents (Optional)
      </p>
      <CheckGroup
        options={opts}
        selected={form.supportingDocs}
        onChange={(v) => set("supportingDocs", v)}
      />
    </SectionCard>
  );
}

function S8({ form, set }) {
  const statements = [
    "The information provided is true and accurate.",
    "All uploaded documents are authentic and valid.",
    "I understand this assessment is an independent export readiness evaluation.",
    "I understand that certification does not guarantee export orders or contracts.",
    "I agree to comply with XportScore® verification requirements.",
    "I consent to the processing of information for assessment and registry purposes."
  ];
  return (
    <>
      <SectionCard title="Declaration">
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {statements.map((s) => (
            <label
              key={s}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                cursor: "pointer"
              }}
            >
              <div style={{ marginTop: 1 }}>
                <Checkbox
                  checked={form.declarationChecks.includes(s)}
                  onChange={() =>
                    set(
                      "declarationChecks",
                      form.declarationChecks.includes(s)
                        ? form.declarationChecks.filter((x) => x !== s)
                        : [...form.declarationChecks, s]
                    )
                  }
                />
              </div>
              <span style={{ fontSize: 14, color: "#334155", lineHeight: 1.6 }}>
                {s}
              </span>
            </label>
          ))}
        </div>
      </SectionCard>
      <SectionCard title="Payment Confirmation">
        <div
          style={{
            background: T.tealLight,
            borderRadius: 8,
            padding: "10px 14px",
            marginBottom: 16,
            fontSize: 13,
            color: T.tealDark
          }}
        >
          Assessment Fee: <strong>USD 149</strong> + Applicable Taxes
        </div>
        <Grid2>
          <Field label="Payment Reference Number" required>
            <Input
              value={form.paymentRef}
              onChange={(v) => set("paymentRef", v)}
            />
          </Field>
          <Field label="Billing Name" required>
            <Input
              value={form.billingName}
              onChange={(v) => set("billingName", v)}
            />
          </Field>
          <Field label="Billing Email" required>
            <Input
              value={form.billingEmail}
              onChange={(v) => set("billingEmail", v)}
              type="email"
            />
          </Field>
        </Grid2>
        <div style={{ marginTop: 14 }}>
          <Field label="Billing Address" required>
            <Textarea
              value={form.billingAddress}
              onChange={(v) => set("billingAddress", v)}
              rows={2}
            />
          </Field>
        </div>
      </SectionCard>
    </>
  );
}

function S9({ form, set }) {
  return (
    <SectionCard title="Final Submission">
      <Grid2>
        <Field label="Applicant Name" required>
          <Input
            value={form.applicantName}
            onChange={(v) => set("applicantName", v)}
          />
        </Field>
        <Field label="Company Name" required>
          <Input
            value={form.companyName}
            onChange={(v) => set("companyName", v)}
          />
        </Field>
        <Field label="Date" required>
          <Input
            value={form.date}
            onChange={(v) => set("date", v)}
            type="date"
          />
        </Field>
      </Grid2>
      <div style={{ marginTop: 20 }}>
        <label
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
            cursor: "pointer"
          }}
        >
          <div style={{ marginTop: 1 }}>
            <Checkbox
              checked={form.finalConfirm}
              onChange={() => set("finalConfirm", !form.finalConfirm)}
            />
          </div>
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#334155",
              lineHeight: 1.6
            }}
          >
            I confirm that all information submitted is complete and accurate.
          </span>
        </label>
      </div>
      <div
        style={{
          marginTop: 20,
          background: "#F8FAFC",
          borderRadius: 10,
          border: `1px solid ${T.cardBorder}`,
          padding: "16px 18px"
        }}
      >
        <p
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: T.navy,
            marginBottom: 12,
            marginTop: 0
          }}
        >
          Upon successful assessment you will receive:
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
            gap: 8
          }}
        >
          {[
            "XportScore® Readiness Score",
            "Global Benchmark Comparison",
            "Export Readiness Classification",
            "Gap Analysis Report",
            "Priority Improvement Recommendations",
            "Export Development Roadmap",
            "Registry Eligibility Status",
            "Buyer Readiness Assessment"
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                color: "#334155"
              }}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: T.tealLight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}
              >
                <svg width="9" height="7" viewBox="0 0 10 8" fill="none">
                  <path
                    d="M1 4L4 7L9 1"
                    stroke={T.teal}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {item}
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}

// ─── Constants ────────────────────────────────────────────────────────────────

const SECTIONS = [
  { label: "1. Applicant Info" },
  { label: "2. Business Details" },
  { label: "3. Export Status" },
  { label: "4. Product/Service" },
  { label: "5. Commercial Info" },
  { label: "6. Documentation" },
  { label: "7. Registry Consent" },
  { label: "8. Declaration" },
  { label: "9. Final Submission" }
];

const SECTION_HEADINGS = [
  "Applicant Information",
  "Business Details",
  "Export Status",
  "Product / Service",
  "Commercial Info",
  "Documentation",
  "Registry & Supporting Docs",
  "Declaration & Payment",
  "Final Submission"
];

const DEFAULT_FORM = {
  assessmentType: "",
  fullName: "",
  designation: "",
  email: "",
  phone: "",
  legalName: "",
  brandName: "",
  country: "",
  cityState: "",
  website: "",
  yearEstablished: "",
  registeredAddress: "",
  businessTypes: [],
  currentActivity: [],
  exportMarkets: "",
  legalEntityReg: "",
  registrationNumber: "",
  taxRegistration: "",
  exportRegistration: "",
  otherRegistrations: "",
  industryCertifications: "",
  productCategory: "",
  mainProducts: "",
  monthlyCapacity: "",
  capacityUnit: "",
  moq: "",
  moqUnit: "",
  shelfLife: "",
  shelfLifeUnit: "",
  productDescription: "",
  productSpecs: "",
  sampleAvailability: "",
  serviceCategory: "",
  keyServiceLines: "",
  industriesServed: "",
  teamSize: "",
  deliveryCapacity: "",
  avgProjectSize: "",
  minEngagementValue: "",
  avgTurnaround: "",
  serviceDescription: "",
  deliveryModel: [],
  pricingCurrency: "",
  paymentTerms: "",
  currentPriceList: "",
  exportPriceList: "",
  avgContractValue: "",
  clientEngagementModel: "",
  existingIntlClients: "",
  keyMarketsServed: "",
  supportingDocs: [],
  registryConsent: false,
  declarationChecks: [],
  paymentRef: "",
  billingName: "",
  billingEmail: "",
  billingAddress: "",
  applicantName: "",
  companyName: "",
  date: "",
  finalConfirm: false
};

// ─── Main component ───────────────────────────────────────────────────────────

export default function AssessmentForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(DEFAULT_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile(768);

  const set = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const sections = [
    <S1 form={form} set={set} />,
    <S2 form={form} set={set} />,
    <S3 form={form} set={set} />,
    <S4 form={form} set={set} />,
    <S5 form={form} set={set} />,
    <S6 form={form} />,
    <S7 form={form} set={set} />,
    <S8 form={form} set={set} />,
    <S9 form={form} set={set} />
  ];

  const goTo = (i) => {
    setStep(i);
    setSidebarOpen(false);
    if (isMobile) window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const progress = Math.round(((step + 1) / SECTIONS.length) * 100);

  // ── Success screen ──
  if (submitted) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: T.bodyBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24
        }}
      >
        <div
          style={{
            background: T.white,
            borderRadius: 16,
            border: `1px solid ${T.cardBorder}`,
            padding: isMobile ? "36px 24px" : "48px 40px",
            maxWidth: 440,
            width: "100%",
            textAlign: "center"
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: T.tealLight,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px"
            }}
          >
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
              <path
                d="M2 11L10 19L26 3"
                stroke={T.teal}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: T.navy,
              margin: "0 0 8px"
            }}
          >
            Assessment Submitted
          </h2>
          <p
            style={{
              fontSize: 14,
              color: T.textMuted,
              lineHeight: 1.6,
              margin: "0 0 28px"
            }}
          >
            Your XportScore® Export Readiness Assessment has been received.
            You'll be notified once the review is complete.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setStep(0);
              setForm(DEFAULT_FORM);
            }}
            style={{
              fontSize: 13,
              color: T.teal,
              background: "none",
              border: "none",
              cursor: "pointer",
              textDecoration: "underline"
            }}
          >
            Submit another assessment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: T.bodyBg,
        fontFamily: "'Inter', system-ui, sans-serif"
      }}
    >
      {/* ── Hero ── */}
      <div
        style={{
          background: `linear-gradient(135deg, ${T.navy} 0%, ${T.navyMid} 100%)`,
          padding: isMobile ? "32px 20px 36px" : "40px 32px 48px"
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {/* Mobile: stacked. Desktop: side-by-side */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? 28 : 32,
              alignItems: isMobile ? "stretch" : "center"
            }}
          >
            {/* Left copy */}
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: T.teal,
                  margin: "0 0 10px"
                }}
              >
                Institutional Audit Portal
              </p>
              <h1
                style={{
                  fontSize: isMobile ? 26 : 32,
                  fontWeight: 800,
                  color: T.white,
                  margin: "0 0 12px",
                  lineHeight: 1.25
                }}
              >
                Start Your XportScore Assessment
              </h1>
              <p
                style={{
                  fontSize: 14,
                  color: T.textMuted,
                  lineHeight: 1.65,
                  margin: "0 0 16px"
                }}
              >
                Complete your application and get your comprehensive
                export-readiness audit, score and a QR-verifiable certificate
                for international trade partners.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  fontWeight: 600,
                  color: T.teal
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Secure ISO-Standard Protocol
              </div>
            </div>

            {/* Pricing card */}
            <div
              style={{
                background: T.white,
                borderRadius: 14,
                padding: isMobile ? "20px" : "24px 28px",
                width: isMobile ? "100%" : "auto",
                minWidth: isMobile ? "auto" : 220,
                boxSizing: "border-box"
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: T.textMuted,
                  margin: "0 0 6px"
                }}
              >
                Global Price
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 6,
                  marginBottom: 16
                }}
              >
                <span
                  style={{
                    fontSize: isMobile ? 26 : 30,
                    fontWeight: 800,
                    color: T.navy
                  }}
                >
                  USD 299
                </span>
                <span style={{ fontSize: 13, color: T.textMuted }}>
                  / audit
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr",
                  gap: isMobile ? "6px 16px" : 0
                }}
              >
                {[
                  "Comprehensive XportScore",
                  "Readiness Status Audit",
                  "QR-Verifiable Certificate",
                  "6-Month Validity",
                  "Online Verification Portal"
                ].map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 13,
                      color: "#334155",
                      marginBottom: isMobile ? 0 : 8
                    }}
                  >
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: T.tealLight,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <svg width="9" height="7" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M1 4L4 7L9 1"
                          stroke={T.teal}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {f}
                  </div>
                ))}
              </div>
              <button
                onClick={() =>
                  document
                    .getElementById("form-area")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  width: "100%",
                  marginTop: 16,
                  background: T.teal,
                  color: T.white,
                  border: "none",
                  borderRadius: 8,
                  padding: "11px 0",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer"
                }}
              >
                Proceed to Assessment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile: sticky progress bar ── */}
      {isMobile && (
        <div
          style={{
            background: T.white,
            borderBottom: `1px solid ${T.cardBorder}`,
            padding: "10px 16px",
            position: "sticky",
            top: 0,
            zIndex: 30,
            display: "flex",
            alignItems: "center",
            gap: 12
          }}
        >
          {/* Hamburger / section nav */}
          <button
            onClick={() => setSidebarOpen(true)}
            style={{
              background: "none",
              border: `1px solid ${T.cardBorder}`,
              borderRadius: 8,
              padding: "6px 10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
              flexShrink: 0
            }}
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path
                d="M1 1h14M1 6h14M1 11h14"
                stroke={T.navy}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 4
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, color: T.navy }}>
                {SECTIONS[step].label}
              </span>
              <span style={{ fontSize: 12, fontWeight: 700, color: T.teal }}>
                {progress}%
              </span>
            </div>
            <div
              style={{
                height: 4,
                background: T.cardBorder,
                borderRadius: 999,
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  height: "100%",
                  background: T.teal,
                  borderRadius: 999,
                  width: `${progress}%`,
                  transition: "width 0.3s"
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile sidebar drawer overlay ── */}
      {isMobile && sidebarOpen && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex" }}
        >
          <div
            onClick={() => setSidebarOpen(false)}
            style={{ flex: 1, background: "rgba(0,0,0,0.4)" }}
          />
          <div
            style={{
              width: 260,
              background: T.white,
              height: "100%",
              overflowY: "auto",
              boxShadow: "-4px 0 24px rgba(0,0,0,0.15)"
            }}
          >
            <div
              style={{
                padding: "16px 16px 12px",
                borderBottom: `1px solid ${T.cardBorder}`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 700, color: T.navy }}>
                Application Sections
              </span>
              <button
                onClick={() => setSidebarOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 4
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 1l12 12M13 1L1 13"
                    stroke={T.textSecondary}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <nav style={{ padding: "8px 0" }}>
              {SECTIONS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    width: "100%",
                    padding: "10px 16px",
                    background: i === step ? T.tealLight : "transparent",
                    border: "none",
                    borderLeft:
                      i === step
                        ? `3px solid ${T.teal}`
                        : "3px solid transparent",
                    fontSize: 13,
                    fontWeight: i === step ? 700 : 500,
                    color:
                      i === step ? T.tealDark : i < step ? T.teal : T.textLabel,
                    cursor: "pointer",
                    textAlign: "left"
                  }}
                >
                  {i < step && (
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 10 8"
                      fill="none"
                      style={{ flexShrink: 0 }}
                    >
                      <path
                        d="M1 4L4 7L9 1"
                        stroke={T.teal}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {s.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* ── Form area ── */}
      <div
        id="form-area"
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: isMobile ? "20px 12px 80px" : "32px 16px 60px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "200px 1fr",
          gap: 24,
          alignItems: "start"
        }}
      >
        {/* Desktop sidebar */}
        {!isMobile && (
          <aside
            style={{
              background: T.white,
              borderRadius: 12,
              border: `1px solid ${T.cardBorder}`,
              overflow: "hidden",
              position: "sticky",
              top: 16
            }}
          >
            <div
              style={{
                padding: "12px 16px",
                borderBottom: `1px solid ${T.cardBorder}`,
                display: "flex",
                alignItems: "center",
                gap: 6
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={T.teal}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: T.textLabel
                }}
              >
                Application Sections
              </span>
            </div>
            <nav style={{ padding: "8px 0" }}>
              {SECTIONS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    width: "100%",
                    padding: "9px 16px",
                    background: i === step ? T.tealLight : "transparent",
                    border: "none",
                    borderLeft:
                      i === step
                        ? `3px solid ${T.teal}`
                        : "3px solid transparent",
                    fontSize: 13,
                    fontWeight: i === step ? 700 : 500,
                    color:
                      i === step ? T.tealDark : i < step ? T.teal : T.textLabel,
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.12s"
                  }}
                >
                  {i < step && (
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 10 8"
                      fill="none"
                      style={{ flexShrink: 0 }}
                    >
                      <path
                        d="M1 4L4 7L9 1"
                        stroke={T.teal}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {s.label}
                </button>
              ))}
            </nav>
          </aside>
        )}

        {/* Content panel */}
        <div>
          {/* Step header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 20,
              flexWrap: "wrap"
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: T.navy,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 800, color: T.teal }}>
                {String(step + 1).padStart(2, "0")}
              </span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h2
                style={{
                  fontSize: isMobile ? 18 : 22,
                  fontWeight: 800,
                  color: T.navy,
                  margin: 0,
                  lineHeight: 1.2
                }}
              >
                {SECTION_HEADINGS[step]}
              </h2>
              <p style={{ fontSize: 12, color: T.textMuted, margin: 0 }}>
                Step {step + 1} of {SECTIONS.length}
              </p>
            </div>
            {!isMobile && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 4
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 700, color: T.teal }}>
                  {progress}%
                </span>
                <div
                  style={{
                    width: 80,
                    height: 5,
                    background: T.cardBorder,
                    borderRadius: 999,
                    overflow: "hidden"
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      background: T.teal,
                      borderRadius: 999,
                      width: `${progress}%`,
                      transition: "width 0.3s"
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Section */}
          {sections[step]}

          {/* Nav buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 8,
              gap: 12
            }}
          >
            <button
              onClick={() => goTo(Math.max(0, step - 1))}
              disabled={step === 0}
              style={{
                padding: isMobile ? "10px 18px" : "10px 22px",
                borderRadius: 8,
                border: `1px solid ${T.inputBorder}`,
                background: T.white,
                fontSize: 14,
                fontWeight: 600,
                color: T.textSecondary,
                cursor: step === 0 ? "not-allowed" : "pointer",
                opacity: step === 0 ? 0.4 : 1,
                flexShrink: 0
              }}
            >
              ← Previous
            </button>
            {step < SECTIONS.length - 1 ? (
              <button
                onClick={() => goTo(step + 1)}
                style={{
                  padding: isMobile ? "10px 18px" : "10px 28px",
                  borderRadius: 8,
                  border: "none",
                  background: T.navy,
                  fontSize: 14,
                  fontWeight: 700,
                  color: T.white,
                  cursor: "pointer",
                  flexShrink: 0
                }}
              >
                Next Section →
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                disabled={!form.finalConfirm}
                style={{
                  padding: isMobile ? "10px 18px" : "10px 28px",
                  borderRadius: 8,
                  border: "none",
                  background: form.finalConfirm ? T.teal : T.inputBorder,
                  fontSize: 14,
                  fontWeight: 700,
                  color: T.white,
                  cursor: form.finalConfirm ? "pointer" : "not-allowed",
                  transition: "background 0.15s",
                  flexShrink: 0
                }}
              >
                Submit Assessment
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Privacy footer */}
      <div
        style={{
          borderTop: `1px solid ${T.cardBorder}`,
          background: T.white,
          padding: "16px 24px",
          textAlign: "center"
        }}
      >
        <p style={{ fontSize: 12, color: T.textMuted, margin: 0 }}>
          All information submitted is treated as confidential in accordance
          with the XportScore® Privacy Policy.
        </p>
      </div>
    </div>
  );
}
