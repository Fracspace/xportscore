import React from "react";

function Sidebar() {
  const steps = [
    "Requesting Company",
    "Business to Verify",
    "Relationship Nature",
    "Verification Scope",
    "Supporting Info",
    "Additional Info",
    "Deliverables",
    "Declaration",
    "Payment",
    "Submission"
  ];
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div
          key={step}
          className={`flex items-center gap-3 rounded-lg px-4 py-3 transition
          ${index === 0 ? "border-l-4 border-teal-600 bg-blue-50" : ""}`}
        >
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold
            ${
              index === 0
                ? "bg-teal-600 text-white"
                : "bg-slate-200 text-slate-600"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          <span
            className={`text-sm ${
              index === 0 ? "font-semibold text-slate-800" : "text-gray-500"
            }`}
          >
            {step}
          </span>
        </div>
      ))}

      <div className="mt-10 rounded-xl bg-slate-900 p-5 text-white">
        <p className="text-sm opacity-70">Estimated processing time</p>

        <p className="mt-2 text-xl font-bold">24–48 Business Hours</p>
      </div>
    </div>
  );
}

export default Sidebar;
