import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="bg-[#F8F8F8] py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Page Header */}
        <header className="mb-16 border-b border-slate-200 pb-10 md:mb-20 md:pb-12">
          <h1 className="text-4xl font-bold tracking-tight text-[#0B1F44] md:text-6xl">
            Terms & Conditions
            {/* <span className="block italic text-[#0D9488]">Conditions</span> */}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            Please read these Terms & Conditions carefully before using
            XportScore services, reports, certificates, and verification
            platform.
          </p>

          <p className="mt-6 text-sm font-medium text-slate-500">
            Effective Date: 24-06-2026
          </p>
        </header>

        {/* Terms Content */}
        <div className="space-y-14 md:space-y-16 text-slate-700">
          {/* 1. Introduction */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              1. Introduction
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>
                Welcome to XportScore (&quot;XportScore,&quot; &quot;we,&quot;
                &quot;our,&quot; or &quot;us&quot;).
              </p>

              <p>
                These Terms &amp; Conditions govern your access to and use of
                the XportScore website, export-readiness assessment services,
                certificate verification platform, reports, certificates, and
                related services.
              </p>

              <p>
                By accessing our website, submitting an application, uploading
                documents, making payment, or using any XportScore service, you
                agree to be bound by these Terms.
              </p>

              <p>
                If you do not agree with these Terms, you should not use our
                services.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 2. Nature of the Service */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              2. Nature of the Service
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>
                XportScore provides a private export-readiness assessment
                designed to evaluate a business&apos;s preparedness for
                export-facing activities.
              </p>

              <p>
                The assessment is based on information, documents, declarations,
                and materials submitted by the applicant and reviewed under the
                XportScore assessment framework.
              </p>

              <p>
                Additionally, XportScore offers a premium Global Expansion Program designed to provide market entry intelligence, strategic brand positioning, commercial risk-mitigation frameworks, and strategic buyer outreach support. This program is advisory in nature and does not guarantee specific export transactions, regulatory approvals, customs clearances, or target market commercial success.
              </p>

              <div className="pt-2">
                <h3 className="mb-3 text-xl font-semibold text-[#0B1F44]">
                  XportScore is:
                </h3>
                <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                  <li>A private audit and assessment service</li>
                  <li>A readiness evaluation tool</li>
                  <li>A supporting due-diligence document</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="mb-3 text-xl font-semibold text-[#0B1F44]">
                  XportScore is not:
                </h3>
                <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                  <li>A government certification</li>
                  <li>A regulatory approval</li>
                  <li>A customs clearance authorization</li>
                  <li>A product certification</li>
                  <li>A legal opinion</li>
                  <li>A banking appraisal</li>
                  <li>A credit rating</li>
                  <li>A trade finance approval</li>
                  <li>A guarantee of export success</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 3. Eligibility */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              3. Eligibility
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>You may use XportScore only if:</p>

              <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                <li>
                  You are legally authorized to represent the business being
                  assessed;
                </li>
                <li>The information submitted is accurate and lawful;</li>
                <li>You have authority to upload the documents provided.</li>
              </ul>

              <p>
                We reserve the right to reject applications that do not meet
                eligibility requirements.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 4. Assessment Process */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              4. Assessment Process
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>The assessment process may include:</p>

              <ol className="list-decimal space-y-2 pl-6 marker:text-slate-500">
                <li>Application submission</li>
                <li>Payment confirmation</li>
                <li>Document upload</li>
                <li>Internal completeness review</li>
                <li>Analyst assessment</li>
                <li>Senior reviewer approval</li>
                <li>Report and certificate issuance</li>
              </ol>

              <p>
                Submission of an application does not guarantee issuance of a
                certificate.
              </p>

              <p>
                XportScore reserves the right to request additional information
                at any stage.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 5. Applicant Responsibilities */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              5. Applicant Responsibilities
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>You agree that:</p>

              <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                <li>All information submitted is true and accurate.</li>
                <li>
                  Documents uploaded belong to the applicant business or are
                  lawfully authorized for submission.
                </li>
                <li>
                  You will not submit forged, misleading, altered, or fraudulent
                  information.
                </li>
                <li>
                  You will promptly notify XportScore if submitted information
                  becomes inaccurate.
                </li>
              </ul>

              <p>
                Any false or misleading information may result in rejection,
                suspension, revocation, or cancellation of an assessment or
                certificate.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 6. Scoring Methodology */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              6. Scoring Methodology
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>
                XportScore assessments are conducted using an internal
                export-readiness framework.
              </p>

              <p>
                Scoring methodologies, weighting models, review procedures, and
                internal criteria are proprietary and may be modified without
                prior notice.
              </p>

              <p>
                The final score issued by XportScore shall be considered final
                unless a review is approved by XportScore.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 7. Certificates */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              7. Certificates
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>Successful assessments may receive:</p>

              <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                <li>XportScore rating</li>
                <li>Readiness status</li>
                <li>Assessment report</li>
                <li>QR-verifiable certificate</li>
                <li>Certificate ID</li>
              </ul>

              <p>
                Certificates are issued solely based on the information
                available at the time of assessment.
              </p>

              <p>
                Certificate validity periods are determined by XportScore and
                stated on the issued certificate.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 8. Certificate Verification */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              8. Certificate Verification
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>
                XportScore may provide public certificate verification services.
              </p>

              <p>Public verification results may display:</p>

              <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                <li>Company name</li>
                <li>Product category</li>
                <li>Certificate status</li>
                <li>Readiness band</li>
                <li>Assessment date</li>
                <li>Validity date</li>
                <li>Certificate ID</li>
              </ul>

              <p>
                Confidential audit findings and detailed reports are not
                publicly disclosed.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 9. Certificate Revocation */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              9. Certificate Revocation
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>
                XportScore reserves the right to revoke, suspend, invalidate, or
                place a certificate on hold if:
              </p>

              <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                <li>False information was submitted;</li>
                <li>Material facts were omitted;</li>
                <li>Fraudulent documentation is identified;</li>
                <li>Misuse of the certificate occurs;</li>
                <li>Verification concerns arise after issuance.</li>
              </ul>

              <p>
                Revocation decisions are made solely at XportScore&apos;s
                discretion.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 10. Registry Listing */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              10. Registry Listing
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>
                Where applicants consent, limited information may be displayed
                in a public verification or registry system.
              </p>

              <p>Participation in any public registry is voluntary.</p>

              <p>
                Applicants may request removal from public listings subject to
                verification requirements.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 11. Fees and Payments */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              11. Fees and Payments
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>
                Assessment fees are displayed on the website at the time of
                application.
              </p>

              <p>Fees are payable in advance.</p>

              <p>
                No assessment will commence until payment is successfully
                received.
              </p>

              <p>
                Taxes, bank charges, currency conversion costs, and transaction
                fees remain the responsibility of the applicant.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 12. Refund Policy */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              12. Refund Policy
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>Unless otherwise stated in a separate Refund Policy:</p>

              <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                <li>
                  Fees become non-refundable once analyst review has commenced.
                </li>
                <li>
                  Administrative deductions may apply to approved refunds.
                </li>
                <li>Refund requests are evaluated on a case-by-case basis.</li>
              </ul>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 13. Intellectual Property */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              13. Intellectual Property
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>
                All content, methodologies, frameworks, branding, logos,
                reports, scoring models, website content, certificates, and
                related materials remain the exclusive property of XportScore.
              </p>

              <p>
                No part may be copied, reproduced, distributed, sold,
                reverse-engineered, or commercially exploited without written
                permission.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 14. Limitation of Liability */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              14. Limitation of Liability
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>
                To the fullest extent permitted by law, XportScore shall not be
                liable for:
              </p>

              <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                <li>Export losses</li>
                <li>Missed business opportunities</li>
                <li>Buyer decisions</li>
                <li>Distributor decisions</li>
                <li>Loan or finance rejections</li>
                <li>Customs issues</li>
                <li>Product compliance failures</li>
                <li>Regulatory actions</li>
                <li>Commercial losses</li>
              </ul>

              <p>Use of the assessment remains at the user&apos;s own risk.</p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 15. No Guarantee */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              15. No Guarantee
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>XportScore does not guarantee:</p>

              <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                <li>Export orders</li>
                <li>Buyer responses</li>
                <li>Distributor appointments</li>
                <li>Export approvals</li>
                <li>Bank funding</li>
                <li>Trade finance approvals</li>
                <li>Business success</li>
                <li>Market acceptance</li>
              </ul>

              <p>The assessment is intended solely as a readiness indicator.</p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 16. Confidentiality */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              16. Confidentiality
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>
                XportScore will treat submitted documents as confidential
                except:
              </p>

              <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
                <li>Where disclosure is legally required;</li>
                <li>For fraud prevention;</li>
                <li>For verification services authorized by the applicant;</li>
                <li>To service providers supporting assessment operations.</li>
              </ul>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 17. Termination */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              17. Termination
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>
                We may suspend or terminate access to our services at any time
                if these Terms are violated or if misuse is suspected.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 18. Governing Law */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              18. Governing Law
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>
                These Terms shall be governed by the laws of the jurisdiction in
                which XportScore is registered.
              </p>

              <p>
                Any disputes shall be subject to the exclusive jurisdiction of
                the competent courts of that jurisdiction.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 19. Changes to These Terms */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              19. Changes to These Terms
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>We may update these Terms at any time.</p>

              <p>
                Updated versions become effective upon publication on the
                website.
              </p>

              <p>
                Continued use of the services constitutes acceptance of the
                revised Terms.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* 20. Contact */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#0B1F44] md:text-3xl">
              20. Contact
            </h2>

            <div className="space-y-5 text-base leading-8 md:text-lg">
              <p>For questions regarding these Terms, contact:</p>

              <p>
                <Link
                  href="mailto:support@xportscore.com"
                  className="font-medium text-[#0D9488] underline underline-offset-4 hover:text-[#0b7f76]"
                >
                  support@xportscore.com
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
