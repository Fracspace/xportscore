"use client";

import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Rocket,
  Globe,
  CheckCircle2,
  Layers,
  Package,
  Map,
  CreditCard
} from "lucide-react";

export default function GlobalExpansion() {
  return (
    <main className="bg-surface text-on-surface">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-margin-desktop overflow-hidden">
        <div className="max-w-container-max mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-variant rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="font-label-md text-label-md text-primary-container uppercase tracking-wider">Premium Service Tier</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-primary max-w-4xl mx-auto mb-6">
            Don't Just Get Export Ready. <br />
            <span className="text-secondary">Build Your Global Market Presence.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            A high-touch international market-entry program designed for scale. Execute your expansion with institutional precision. <br />
            <strong>Investment: $20,000 USD</strong>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              className="inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary font-label-md text-label-md px-8 py-4 rounded hover:bg-inverse-surface transition-colors shadow-sm"
              href="/contact"
            >
              Apply for the Global Expansion Program
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, #dce9ff 0%, transparent 70%)" }}></div>
      </section>

      {/* What Comes Next Section (Bento Grid) */}
      <section className="py-24 px-margin-desktop bg-surface-bright">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">The Evolution of Global Entry</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">From assessment to full-scale market execution.</p>
          </div>
          <div className="bento-grid">
            <div className="col-span-12 md:col-span-5 glass-card p-8 rounded-xl flex flex-col justify-center border border-outline-variant bg-surface-container-lowest relative overflow-hidden">
              <div className="relative z-10">
                <TrendingUp className="text-secondary w-10 h-10 mb-4" />
                <h3 className="font-headline-md text-headline-md text-primary mb-2">Phase 1: Assessment</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">The XportScore benchmark establishes your baseline readiness and operational gaps.</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-2 flex items-center justify-center py-8">
              <ArrowRight className="text-outline w-8 h-8 rotate-90 md:rotate-0" />
            </div>
            <div className="col-span-12 md:col-span-5 p-8 rounded-xl bg-primary-container text-on-primary border border-primary-container relative overflow-hidden shadow-[0_8px_30px_rgb(0,43,73,0.12)]">
              <div className="relative z-10">
                <Rocket className="text-secondary-fixed w-10 h-10 mb-4" />
                <h3 className="font-headline-md text-headline-md text-on-primary mb-2">Phase 2: Execution Engine</h3>
                <p className="font-body-md text-body-md text-primary-fixed">The Global Expansion Program takes your baseline and deploys a dedicated team to build your international presence.</p>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-10">
                <Globe className="w-36 h-36" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build With You */}
      <section className="py-24 px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">What We Build With You</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">A systematic, 6-pillar approach to institutionalizing your export capabilities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-surface p-8 rounded-xl border border-outline-variant hover:border-primary-container transition-colors">
              <div className="text-secondary font-bold text-xl mb-4">01</div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Global Market Intelligence</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary w-5 h-5 shrink-0 mt-1" />
                  <span className="font-body-md text-body-md text-on-surface-variant">Identify 3 top-tier international markets using quantitative data (trade flows, tariff structures, competitor density).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary w-5 h-5 shrink-0 mt-1" />
                  <span className="font-body-md text-body-md text-on-surface-variant">Analyze regulatory barriers and compliance requirements for each target market.</span>
                </li>
              </ul>
              <div className="bg-surface-container-low p-4 rounded">
                <strong className="text-primary text-sm uppercase tracking-wider block mb-1">Outcome:</strong>
                <span className="text-on-surface-variant text-sm">Data-driven market selection eliminating "guesswork" expansion.</span>
              </div>
            </div>
            {/* Pillar 2 */}
            <div className="bg-surface p-8 rounded-xl border border-outline-variant hover:border-primary-container transition-colors">
              <div className="text-secondary font-bold text-xl mb-4">02</div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">International Market Positioning</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary w-5 h-5 shrink-0 mt-1" />
                  <span className="font-body-md text-body-md text-on-surface-variant">Development of a culturally nuanced, globally credible brand identity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary w-5 h-5 shrink-0 mt-1" />
                  <span className="font-body-md text-body-md text-on-surface-variant">Creation of institutional-grade marketing assets (company profiles, technical data sheets, localized websites).</span>
                </li>
              </ul>
              <div className="bg-surface-container-low p-4 rounded">
                <strong className="text-primary text-sm uppercase tracking-wider block mb-1">Outcome:</strong>
                <span className="text-on-surface-variant text-sm">Brand perception aligned with tier-1 international supplier expectations.</span>
              </div>
            </div>
            {/* Pillar 3 */}
            <div className="bg-surface p-8 rounded-xl border border-outline-variant hover:border-primary-container transition-colors">
              <div className="text-secondary font-bold text-xl mb-4">03</div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Export Business Strategy</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary w-5 h-5 shrink-0 mt-1" />
                  <span className="font-body-md text-body-md text-on-surface-variant">Pricing strategy optimization for varying international tariff and tax structures.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary w-5 h-5 shrink-0 mt-1" />
                  <span className="font-body-md text-body-md text-on-surface-variant">Supply chain and logistics planning (Incoterms, freight forwarding selection, insurance optimization).</span>
                </li>
              </ul>
              <div className="bg-surface-container-low p-4 rounded">
                <strong className="text-primary text-sm uppercase tracking-wider block mb-1">Outcome:</strong>
                <span className="text-on-surface-variant text-sm">A profitable and operationally resilient export model.</span>
              </div>
            </div>
            {/* Pillar 4 */}
            <div className="bg-surface p-8 rounded-xl border border-outline-variant hover:border-primary-container transition-colors">
              <div className="text-secondary font-bold text-xl mb-4">04</div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Buyer Discovery &amp; International Outreach</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary w-5 h-5 shrink-0 mt-1" />
                  <span className="font-body-md text-body-md text-on-surface-variant">Curated list of verified international buyers, distributors, and strategic partners.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary w-5 h-5 shrink-0 mt-1" />
                  <span className="font-body-md text-body-md text-on-surface-variant">Execution of multi-channel outreach campaigns (LinkedIn, targeted email, industry-specific networks).</span>
                </li>
              </ul>
              <div className="bg-surface-container-low p-4 rounded">
                <strong className="text-primary text-sm uppercase tracking-wider block mb-1">Outcome:</strong>
                <span className="text-on-surface-variant text-sm">A qualified pipeline of international prospects.</span>
              </div>
            </div>
            {/* Pillar 5 */}
            <div className="bg-surface p-8 rounded-xl border border-outline-variant hover:border-primary-container transition-colors">
              <div className="text-secondary font-bold text-xl mb-4">05</div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">International Sales Enablement</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary w-5 h-5 shrink-0 mt-1" />
                  <span className="font-body-md text-body-md text-on-surface-variant">Development of standardized international commercial contracts and terms of trade.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary w-5 h-5 shrink-0 mt-1" />
                  <span className="font-body-md text-body-md text-on-surface-variant">Training your internal team on cross-cultural negotiation and international sales cycles.</span>
                </li>
              </ul>
              <div className="bg-surface-container-low p-4 rounded">
                <strong className="text-primary text-sm uppercase tracking-wider block mb-1">Outcome:</strong>
                <span className="text-on-surface-variant text-sm">Internal capability to close complex cross-border deals.</span>
              </div>
            </div>
            {/* Pillar 6 */}
            <div className="bg-surface p-8 rounded-xl border border-outline-variant hover:border-primary-container transition-colors">
              <div className="text-secondary font-bold text-xl mb-4">06</div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Market Entry Execution</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary w-5 h-5 shrink-0 mt-1" />
                  <span className="font-body-md text-body-md text-on-surface-variant">Ongoing advisory during the critical first 12 months of market entry.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary w-5 h-5 shrink-0 mt-1" />
                  <span className="font-body-md text-body-md text-on-surface-variant">Assistance with initial order fulfillment, documentation, and payment realization structure.</span>
                </li>
              </ul>
              <div className="bg-surface-container-low p-4 rounded">
                <strong className="text-primary text-sm uppercase tracking-wider block mb-1">Outcome:</strong>
                <span className="text-on-surface-variant text-sm">Successful execution of initial export transactions and established market presence.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Dedicated Global Expansion Team */}
      <section className="py-24 px-margin-desktop bg-surface-bright border-y border-outline-variant">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">A Dedicated Global Expansion Team</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                When you invest in the Global Expansion Program, you aren't just getting advice. You are deploying a fractional international operations team dedicated to your market entry.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <div className="p-2 bg-surface rounded-full border border-outline-variant shadow-sm flex items-center justify-center">
                      <Users className="text-primary-container w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Market Intelligence Specialists</h4>
                    <p className="text-on-surface-variant text-sm">For data-driven targeting.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1">
                    <div className="p-2 bg-surface rounded-full border border-outline-variant shadow-sm flex items-center justify-center">
                      <Gavel className="text-primary-container w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">International Trade Experts</h4>
                    <p className="text-on-surface-variant text-sm">For compliance, logistics, and structuring.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1">
                    <div className="p-2 bg-surface rounded-full border border-outline-variant shadow-sm flex items-center justify-center">
                      <Layers className="text-primary-container w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Brand &amp; Positioning Professionals</h4>
                    <p className="text-on-surface-variant text-sm">To elevate your global perception.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1">
                    <div className="p-2 bg-surface rounded-full border border-outline-variant shadow-sm flex items-center justify-center">
                      <Handshake className="text-primary-container w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Business Development Executives</h4>
                    <p className="text-on-surface-variant text-sm">To drive buyer outreach.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1">
                    <div className="p-2 bg-surface rounded-full border border-outline-variant shadow-sm flex items-center justify-center">
                      <Compass className="text-primary-container w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Lead Strategy Consultant</h4>
                    <p className="text-on-surface-variant text-sm">Your primary point of contact orchestrating the expansion.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-primary-container p-10 rounded-2xl text-on-primary shadow-xl relative overflow-hidden">
                <div className="absolute -right-10 -top-10 opacity-10">
                  <Globe className="w-36 h-36" />
                </div>
                <h3 className="font-headline-md text-headline-md mb-6 relative z-10">What You Receive: The Global Expansion Engine</h3>
                <ul className="space-y-4 relative z-10">
                  <li className="border-b border-primary/20 pb-4">
                    <strong className="block text-secondary-fixed mb-1">Market:</strong>
                    <span className="text-sm">Comprehensive Go-To-Market strategy for 3 target countries.</span>
                  </li>
                  <li className="border-b border-primary/20 pb-4">
                    <strong className="block text-secondary-fixed mb-1">Brand:</strong>
                    <span className="text-sm">Complete international brand kit &amp; localized digital assets.</span>
                  </li>
                  <li className="border-b border-primary/20 pb-4">
                    <strong className="block text-secondary-fixed mb-1">Commercial:</strong>
                    <span className="text-sm">Optimized pricing models, contract templates, and risk mitigation frameworks.</span>
                  </li>
                  <li className="border-b border-primary/20 pb-4">
                    <strong className="block text-secondary-fixed mb-1">Business Development:</strong>
                    <span className="text-sm">Curated list of 100+ verified international prospects and executed outreach campaigns.</span>
                  </li>
                  <li>
                    <strong className="block text-secondary-fixed mb-1">Execution:</strong>
                    <span className="text-sm">12 months of dedicated strategic support and advisory.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For? */}
      <section className="py-24 px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Who Is This For?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">The Global Expansion Program is exclusively for ambitious enterprises ready to institutionalize their growth.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface p-6 rounded-xl border border-outline-variant text-center">
              <Package className="text-secondary w-10 h-10 mx-auto mb-4" />
              <h4 className="font-bold text-primary mb-2">Proven Product</h4>
              <p className="text-sm text-on-surface-variant">Companies with established domestic success or early export traction.</p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-outline-variant text-center">
              <TrendingUp className="text-secondary w-10 h-10 mx-auto mb-4" />
              <h4 className="font-bold text-primary mb-2">Capacity to Scale</h4>
              <p className="text-sm text-on-surface-variant">Manufacturers and service providers with the operational bandwidth to handle international volume.</p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-outline-variant text-center">
              <Map className="text-secondary w-10 h-10 mx-auto mb-4" />
              <h4 className="font-bold text-primary mb-2">Strategic Intent</h4>
              <p className="text-sm text-on-surface-variant">Leadership committed to long-term international market entry, not just opportunistic spot-sales.</p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-outline-variant text-center">
              <CreditCard className="text-secondary w-10 h-10 mx-auto mb-4" />
              <h4 className="font-bold text-primary mb-2">Ready to Invest</h4>
              <p className="text-sm text-on-surface-variant">Organizations prepared to allocate capital to build sustainable global infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Value Section */}
      <section className="py-24 px-margin-desktop bg-primary-container text-on-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg mb-8">$20,000 USD Isn't the Cost of a Report. <br /><span className="text-secondary-fixed">It's the Cost of an Execution Team.</span></h2>
          <div className="bg-inverse-surface/50 p-8 rounded-xl backdrop-blur-sm border border-primary-fixed/20 text-left mb-10">
            <p className="font-body-lg text-body-lg text-primary-fixed leading-relaxed">
              You could spend months trying to piece together market data, hire fragmented consultants, struggle with cultural branding nuances, and burn capital on misaligned buyer outreach. Or, you can partner with XportScore to deploy a comprehensive, synchronized global expansion engine from day one.
            </p>
          </div>
          <h3 className="font-display-lg text-display-lg mb-4">Your Next Market Could Be Worth More Than Your Current One.</h3>
          <p className="font-body-lg text-body-lg text-primary-fixed mb-10">Don't leave global expansion to chance.</p>
        </div>
      </section>
    </main>
  );
}
