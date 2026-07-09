"use client";

import {
  ClipboardCheck,
  BadgeCheck,
  FileText,
  ShieldCheck,
  Download,
  ExternalLink
} from "lucide-react";

import StatsCard from "./StatsCard";

export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <StatsCard
        icon={<ClipboardCheck size={18} />}
        badge="REAL-TIME"
        title="Export Readiness"
        value="3"
        label="Total"
        footer={
          <div className="flex gap-4 text-xs text-gray-500">
            <span>● 1 Draft</span>
            <span className="text-cyan-700">● 2 Completed</span>
          </div>
        }
      />

      <StatsCard
        icon={<ShieldCheck size={18} />}
        title="Business Verification"
        value="5"
        label="Requests"
        footer={
          <div className="flex gap-4 text-xs text-gray-500">
            <span>● 2 Review</span>
            <span className="text-cyan-700">● 3 Done</span>
          </div>
        }
      />

      <StatsCard
        icon={<FileText size={18} />}
        title="Reports Available"
        value="5"
        label="PDF Assets"
        footerLink={{
          label: (
            <>
              Download Anytime
              <Download size={14} />
            </>
          ),
          href: "/dashboard/reports"
        }}
      />

      <StatsCard
        icon={<BadgeCheck size={18} />}
        title="Certificates"
        value="2"
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
