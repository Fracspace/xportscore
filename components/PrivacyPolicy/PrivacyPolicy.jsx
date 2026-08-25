import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#F8F8F8] py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Page Header */}
        <header className="mb-16 border-b border-slate-200 pb-10 md:mb-20 md:pb-12">
          <h1 className="text-4xl font-bold tracking-tight text-[#0B1F44] md:text-6xl">
            Privacy Policy
            {/* <span className="block italic text-[#0D9488]">Policy</span> */}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            This Privacy Policy explains how XportScore collects, uses, stores,
            processes, and protects personal and business information submitted
            through our website and assessment platform.
          </p>

          <p className="mt-6 text-sm font-medium text-slate-500">
            Effective Date: 24-06-2026
          </p>
        </header>

        {/* Policy Content */}
        <div className="space-y-14 text-slate-700 md:space-y-16">
          {/* 1. Introduction */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              1. Introduction
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>
                XportScore respects your privacy and is committed to protecting
                personal and business information submitted through our website
                and assessment platform.
              </p>

              <p>
                This Privacy Policy explains how we collect, use, store,
                process, disclose, and protect information provided by
                applicants, partners, visitors, and certificate holders.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 2. Information We Collect */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              2. Information We Collect
            </h2>

            <div className="space-y-8 text-base leading-8 md:text-lg">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-[#0B1F44]">
                  A. Business Information
                </h3>
                <p className="mb-3">We may collect:</p>
                <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                  <li>Company name</li>
                  <li>Business registration details</li>
                  <li>Tax registration details</li>
                  <li>Export registration details</li>
                  <li>Business address</li>
                  <li>Website information</li>
                  <li>Company profile</li>
                  <li>Product and service information</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-[#0B1F44]">
                  B. Personal Information
                </h3>
                <p className="mb-3">We may collect:</p>
                <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                  <li>Contact person name</li>
                  <li>Designation</li>
                  <li>Email address</li>
                  <li>Telephone number</li>
                  <li>WhatsApp number</li>
                  <li>Billing information</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-[#0B1F44]">
                  C. Assessment Documents
                </h3>
                <p className="mb-3">We may collect:</p>
                <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                  <li>Business registrations</li>
                  <li>Tax registrations</li>
                  <li>Product catalogues</li>
                  <li>Product photos</li>
                  <li>Packaging images</li>
                  <li>Certifications</li>
                  <li>Testing reports</li>
                  <li>Export documents</li>
                  <li>Commercial information</li>
                  <li>Supporting documentation</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-[#0B1F44]">
                  D. Technical Information
                </h3>
                <p className="mb-3">
                  When visiting our website, we may automatically collect:
                </p>
                <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                  <li>IP address</li>
                  <li>Browser information</li>
                  <li>Device information</li>
                  <li>Access logs</li>
                  <li>Cookies and analytics data</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 3. How We Use Information */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              3. How We Use Information
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>We use information to:</p>

              <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                <li>Process applications</li>
                <li>Conduct export-readiness assessments</li>
                <li>Administer and execute the Global Expansion Program, including target market identification and buyer outreach</li>
                <li>Review submitted documents</li>
                <li>Generate reports</li>
                <li>Issue certificates</li>
                <li>Maintain verification records</li>
                <li>Provide customer support</li>
                <li>Improve our services</li>
                <li>Prevent fraud and abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 4. Legal Basis for Processing */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              4. Legal Basis for Processing
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>We process information based on:</p>

              <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                <li>User consent</li>
                <li>Performance of requested services</li>
                <li>Legitimate business interests</li>
                <li>Compliance with legal obligations</li>
              </ul>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 5. Certificate Verification Information */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              5. Certificate Verification Information
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>
                Where certificates are issued, limited information may be made
                publicly available through verification systems.
              </p>

              <p>Public verification may include:</p>

              <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                <li>Company name</li>
                <li>Product category</li>
                <li>Certificate status</li>
                <li>Readiness status</li>
                <li>Assessment date</li>
                <li>Certificate validity date</li>
                <li>Certificate ID</li>
              </ul>

              <p>
                Detailed reports and confidential assessment materials are not
                publicly displayed.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 6. Registry Listings */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              6. Registry Listings
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>
                If you consent to inclusion in a public registry, limited
                business information may be displayed.
              </p>

              <p>
                Participation is voluntary and consent may be withdrawn, subject
                to verification requirements.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 7. Information Sharing */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              7. Information Sharing
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>We do not sell personal information.</p>

              <p>Information may be shared with:</p>

              <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                <li>Internal assessment teams</li>
                <li>Senior reviewers</li>
                <li>Technology service providers</li>
                <li>Payment processors</li>
                <li>Legal and regulatory authorities where required</li>
              </ul>

              <p>
                All disclosures are limited to legitimate operational purposes.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 8. International Transfers */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              8. International Transfers
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>
                Because XportScore serves businesses globally, information may
                be processed or stored in jurisdictions outside your country.
              </p>

              <p>
                By using our services, you consent to such transfers where
                legally permitted.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 9. Data Retention */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              9. Data Retention
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>We retain information for as long as necessary to:</p>

              <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                <li>Conduct assessments</li>
                <li>Maintain certificate records</li>
                <li>Support verification systems</li>
                <li>Meet legal obligations</li>
                <li>Resolve disputes</li>
              </ul>

              <p>
                Records may be retained after certificate expiry where necessary
                for audit, verification, fraud prevention, or compliance
                purposes.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 10. Data Security */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              10. Data Security
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>
                We implement reasonable technical and organizational measures to
                protect information from:
              </p>

              <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                <li>Unauthorized access</li>
                <li>Disclosure</li>
                <li>Alteration</li>
                <li>Destruction</li>
                <li>Misuse</li>
              </ul>

              <p>
                However, no electronic transmission or storage method can be
                guaranteed to be completely secure.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 11. Your Rights */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              11. Your Rights
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>Subject to applicable law, you may request:</p>

              <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                <li>Access to your information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of eligible information</li>
                <li>Withdrawal of consent</li>
                <li>Restriction of processing</li>
                <li>Information regarding data use</li>
              </ul>

              <p>Requests may be submitted to our privacy contact address.</p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 12. Cookies */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              12. Cookies
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>Our website may use cookies and similar technologies for:</p>

              <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                <li>Site functionality</li>
                <li>Analytics</li>
                <li>Security</li>
                <li>User experience improvements</li>
              </ul>

              <p>Users may control cookies through browser settings.</p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 13. Third-Party Services */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              13. Third-Party Services
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>
                Our website may contain links to third-party websites or
                services.
              </p>

              <p>
                XportScore is not responsible for the privacy practices of
                external websites.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 14. Children's Privacy */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              14. Children&apos;s Privacy
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>
                XportScore services are intended for businesses and
                professionals.
              </p>

              <p>
                We do not knowingly collect personal information from
                individuals under the age of 18.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 15. Changes to This Policy */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              15. Changes to This Policy
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>We may update this Privacy Policy periodically.</p>

              <p>
                Updated versions will be published on the website with a revised
                effective date.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 16. Contact Us */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              16. Contact Us
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>For privacy-related enquiries:</p>

              <p>
                Email:{" "}
                <Link
                  href="mailto:support@xportscore.com"
                  className="font-medium text-[#0D9488] underline underline-offset-4 hover:text-[#0b7f76]"
                >
                  support@xportscore.com
                </Link>
              </p>

              <p>
                If a dedicated privacy contact is established, XportScore may
                update this section accordingly.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
