"use client";

import React from "react";
import {
  ClipboardCheck,
  BadgeCheck,
  FileText,
  ShieldCheck,
  Download,
  ExternalLink
} from "lucide-react";

import StatsCard from "./StatsCard";

export default function StatsSection({ assessment, verification, loading }) {
  const totalAssessments = loading ? "..." : (assessment ? 1 : 0);
  const draftAssessments = loading ? 0 : ((assessment && (assessment.status !== "completed" && assessment.assessmentStatus !== "completed" && assessment.assessmentStatus !== "active")) ? 1 : 0);
  const completedAssessments = loading ? 0 : ((assessment && (assessment.status === "completed" || assessment.assessmentStatus === "completed" || assessment.assessmentStatus === "active")) ? 1 : 0);

  const totalVerifications = loading ? "..." : (verification ? 1 : 0);
  const reviewVerifications = loading ? 0 : ((verification && (verification.status !== "completed" && verification.status !== "done" && verification.status !== "approved" && verification.verificationStatus !== "completed" && verification.verificationStatus !== "done" && verification.verificationStatus !== "approved")) ? 1 : 0);
  const doneVerifications = loading ? 0 : ((verification && (verification.status === "completed" || verification.status === "done" || verification.status === "approved" || verification.verificationStatus === "completed" || verification.verificationStatus === "done" || verification.verificationStatus === "approved")) ? 1 : 0);

  const reportsCount = loading ? "..." : ((assessment && (assessment.status === "completed" || assessment.assessmentStatus === "completed" || assessment.assessmentStatus === "active")) ? 1 : 0);

  const certificatesCount = loading ? "..." : ((verification && (verification.status === "completed" || verification.status === "done" || verification.status === "approved" || verification.verificationStatus === "completed" || verification.verificationStatus === "done" || verification.verificationStatus === "approved")) ? 1 : 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <StatsCard
        icon={<ClipboardCheck size={18} />}
        badge="REAL-TIME"
        title="Export Readiness"
        value={totalAssessments.toString()}
        label="Total"
        footer={
          <div className="flex gap-4 text-xs text-gray-500">
            <span>● {draftAssessments} Draft</span>
            <span className="text-cyan-700">● {completedAssessments} Completed</span>
          </div>
        }
      />

      <StatsCard
        icon={<ShieldCheck size={18} />}
        title="Business Verification"
        value={totalVerifications.toString()}
        label="Requests"
        footer={
          <div className="flex gap-4 text-xs text-gray-500">
            <span>● {reviewVerifications} Review</span>
            <span className="text-cyan-700">● {doneVerifications} Done</span>
          </div>
        }
      />

      <StatsCard
        icon={<FileText size={18} />}
        title="Reports Available"
        value={reportsCount.toString()}
        label="PDF Assets"
        footerLink={{
          label: (
            <>
              View Report  <ExternalLink size={14} />
            </>
          ),
          href: "/dashboard/reports"
        }}
      />

      <StatsCard
        icon={<BadgeCheck size={18} />}
        title="Certificates"
        value={certificatesCount.toString()}
        label="Active"
        footerLink={{
          label: (
            <>
              View Valid
              <ExternalLink size={14} />
            </>
          ),
          href: "/dashboard/certificates"
        }}
      />
    </div>
  );
}
