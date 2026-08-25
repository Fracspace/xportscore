"use client";

import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function Faq() {
  const [openIndex, setOpenIndex] = useState();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What is XportScore?",
      answer:
        "XportScore is a private export-readiness audit, score and certificate for businesses planning to enter global markets."
    },
    {
      question: "Is XportScore mandatory?",
      answer:
        "XportScore is not legally mandatory. It is designed as a practical readiness checkpoint to help evaluate cross-border trade, bankers and clientele before they begin export-facing activities."
    },
    {
      question: "Does XportScore guarantee export orders?",
      answer:
        "No. XportScore does not guarantee export orders, buyer responses, distributor appointments or export success."
    },
    {
      question: "Does XportScore help me get buyers?",
      answer:
        "The standard XportScore audit does not include buyer discovery. It only assesses export readiness."
    },
    {
      question: "Does XportScore replace export registration?",
      answer:
        "XportScore does not replace export registrations, licenses, certifications, customs requirements or country-specific import compliance."
    },
    {
      question: "Can banks use XportScore?",
      answer:
        "Banks, NBFCs and trade finance providers may use XportScore as a supporting export-readiness document."
    },
    {
      question: "What is the score based on?",
      answer:
        "The score is based on submitted documents, business information, product/service details and review under the XportScore framework, and sometimes, if needed, a physical inspection to validate authenticity."
    },
    {
      question: "Who reviews my assessment?",
      answer:
        "Your assessment is reviewed by a team of XportScore assessment analysts and approved by an authorised reviewer."
    },
    {
      question: "How long is the certificate valid?",
      answer: "The certificate is valid for 12 months from the date of issue."
    },
    {
      question: "Can my certificate be revoked?",
      answer:
        "Yes. XportScore may revoke a certificate if submitted information is found to be false, misleading or incomplete."
    },
    {
      question: "How long does the audit take?",
      answer:
        "The audit is usually completed within 72 working hours after complete document submission."
    },
    {
      question: "What does it cost?",
      answer: "Global Price: USD 299."
    },
    {
      question: "Is my information confidential?",
      answer:
        "Yes. Your submitted documents and audit report are confidential. Public verification shows only limited certificate information."
    }
  ];
  return (
    <section className="bg-[#f7f9fb] py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-teal-700">
            Support Center
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            Find answers to common questions about the XportScore audit,
            framework, and certification process. Clear, technical, and
            transparent guidance for your export journey.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer"
              >
                <span className="text-base font-medium text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-slate-100 px-6 py-5 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
