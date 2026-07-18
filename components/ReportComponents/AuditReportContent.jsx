import React from "react";
import {
  BookOpen,
  BadgePercent,
  Blocks,
  ClipboardList,
  Settings,
  FileText
} from "lucide-react";

function AuditReportContent() {
  const reportItems = [
    {
      icon: BookOpen,
      iconBg: "bg-[#0A1735]",
      iconColor: "text-white",
      title: "Cover & Profile",
      description:
        "Professional branding, assessment IDs, and a validated company overview verified by official trade databases."
    },
    {
      icon: BadgePercent,
      iconBg: "bg-[#B8F0EE]",
      iconColor: "text-[#006D77]",
      title: "Final XportScore",
      description:
        "Your weighted score against global standards, including readiness status and market accessibility indicators."
    },
    {
      icon: Blocks,
      iconBg: "bg-[#0A1735]",
      iconColor: "text-white",
      title: "5-Pillar Scorecard",
      description:
        "Detailed breakdown across Compliance, Product Exportability, Logistics, Pricing, and Market Readiness."
    },
    {
      icon: ClipboardList,
      iconBg: "bg-gray-100",
      iconColor: "text-[#0A1735]",
      title: "Audit Observations",
      description:
        "Specific strengths identified and gaps that need to be addressed to achieve higher compliance tiers."
    },
    {
      icon: Settings,
      iconBg: "bg-[#B8F0EE]",
      iconColor: "text-[#006D77]",
      title: "Certificate & QR",
      description:
        "A shareable digital certificate with unique QR verification linked to our real-time portal for partners."
    },
    {
      icon: FileText,
      iconBg: "bg-[#0A1735]",
      iconColor: "text-white",
      title: "Methodology Note",
      description:
        "Transparent disclosure of the audit framework and international trade standards used for benchmarking."
    }
  ];

  return (
    <section className="bg-[#F5F6FA] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#07132D] mb-5">
            What&apos;s Inside Your Audit Report?
          </h2>

          <p className="text-gray-500 text-lg leading-8">
            A comprehensive 15-page document detailing every facet of your
            export ecosystem, designed for global credibility.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reportItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-md p-8 hover:shadow-lg transition duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded flex items-center justify-center mb-8 ${item.iconBg}`}
                >
                  <Icon size={24} className={item.iconColor} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-[#07132D] mb-5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 leading-8">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AuditReportContent;
