"use client";

import {
  Building2,
  Users,
  Briefcase,
  History,
  ThumbsUp,
  Globe,
  Scale,
  FileCheck,
  Award,
  Factory,
  Contact,
  FileText,
  ShieldAlert,
  Gavel,
  BadgeDollarSign,
  Handshake,
  BrainCircuit,
  ShieldCheck
} from "lucide-react";

const verificationAreas = [
  {
    id: "01",
    title: "Business Identity",
    description: "Registration, status, age, addresses & corporate structure.",
    icon: Building2
  },
  {
    id: "02",
    title: "Ownership & Management",
    description: "Directors, shareholders, UBO & senior management team.",
    icon: Users
  },
  {
    id: "03",
    title: "Business Profile",
    description: "Industry, products, services, markets & operations.",
    icon: Briefcase
  },
  {
    id: "04",
    title: "Previous Trades",
    description: "Import/export history, countries, HS codes, volumes.",
    icon: History,
    badge: "NEW"
  },
  {
    id: "05",
    title: "Importer Reputation",
    description: "Payment behavior, reviews, disputes, reliability score.",
    icon: ThumbsUp,
    badge: "NEW"
  },
  {
    id: "06",
    title: "Digital Presence",
    description: "Website, domain, emails, social media & trust score.",
    icon: Globe
  },
  {
    id: "07",
    title: "Public Records",
    description: "Government, court, legal & regulatory records.",
    icon: Scale
  },
  {
    id: "08",
    title: "Registrations & Licenses",
    description: "Business, tax, VAT, import/export & other licenses.",
    icon: FileCheck
  },
  {
    id: "09",
    title: "Certifications",
    description: "ISO, CE, FDA, HACCP, BSCI & other certificates.",
    icon: Award
  },
  {
    id: "10",
    title: "Facility Verification",
    description: "Office, factory, warehouse images & location check.",
    icon: Factory
  },
  {
    id: "11",
    title: "Contact Verification",
    description: "Phone, email, address & map verification.",
    icon: Contact
  },
  {
    id: "12",
    title: "Trade Documents",
    description: "Invoices, B/L, CO, licenses & supporting docs.",
    icon: FileText
  },
  {
    id: "13",
    title: "Sanctions & Watchlist",
    description: "Global sanctions, PEP & watchlist screening.",
    icon: ShieldAlert
  },
  {
    id: "14",
    title: "Litigation & Insolvency",
    description: "Lawsuits, insolvency, bankruptcy & judgments.",
    icon: Gavel
  },
  {
    id: "15",
    title: "Financial Snapshot",
    description: "Revenue range, credit info, financial indicators.",
    icon: BadgeDollarSign
  },
  {
    id: "16",
    title: "References & Partners",
    description: "Banks, suppliers, customers, freight forwarders.",
    icon: Handshake
  },
  {
    id: "17",
    title: "AI Trade Intelligence",
    description: "AI-powered risk insights, strengths & observations.",
    icon: BrainCircuit
  },
  {
    id: "18",
    title: "Overall Risk Assessment",
    description: "Comprehensive risk rating & recommendations.",
    icon: ShieldCheck
  }
];

export default function VerificationAreas() {
  return (
    <section className="bg-[#F3F7FC] py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}

        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            In-Depth Verification Across
            <span className="text-teal-700"> 18 </span>
            Critical Areas
          </h2>

          <p className="mt-4 text-slate-500">
            Our reports leave no stone unturned in ensuring your trade security.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {verificationAreas.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group relative rounded-xl border border-teal-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg"
              >
                {item.badge && (
                  <span className="absolute right-5 top-4 rounded bg-teal-500 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                    {item.badge}
                  </span>
                )}

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <Icon size={22} strokeWidth={2} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-400">
                        {item.id}
                      </span>

                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
