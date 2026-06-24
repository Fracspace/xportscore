import AuditReportContent from "@/components/ReportComponents/AuditReportContent";
import ReportHero from "@/components/ReportComponents/ReportHero";
import VisualRediness from "@/components/ReportComponents/VisualRediness";
import React from "react";

function SampleReport() {
  return (
    <div>
      <div className="mt-15">
        <ReportHero />
        <AuditReportContent />
        <VisualRediness />
      </div>
    </div>
  );
}

export default SampleReport;
