"use client";

import React, { useState } from "react";
import QRCode from "react-qr-code";
import { Download, ExternalLink } from "lucide-react";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";

export default function Certificate({
  company = "ABC Exports Private Limited",
  score = 724,
  total = 900,
  certificateId = "XS-24-000789",
  issueDate = "18 Jan 2024",
  validTill = "18 Dec 2025",
  verifyUrl = "https://www.xportscore.com/verify"
}) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);

  const handleDownloadCertificate = async () => {
    try {
      setIsDownloading(true);
      setIsCapturing(true);

      // Wait a frame for DOM to re-render with PDF-only link enabled
      await new Promise((resolve) => setTimeout(resolve, 150));

      const element = document.getElementById("certificate-card");
      if (!element) return;

      const dataUrl = await toPng(element, {
        pixelRatio: 3,
        cacheBust: true,
        backgroundColor: "#ffffff"
      });

      // PDF dimensions (A4 Landscape: 297mm x 210mm)
      const pdf = new jsPDF("landscape", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = 260; // mm
      const imgProps = pdf.getImageProperties(dataUrl);
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

      const xOffset = (pdfWidth - imgWidth) / 2;
      const yOffset = (pdfHeight - imgHeight) / 2;

      pdf.addImage(dataUrl, "PNG", xOffset, yOffset, imgWidth, imgHeight);

      // Add interactive PDF hyperlink over bottom text area
      pdf.link(xOffset, yOffset + imgHeight - 16, imgWidth, 14, {
        url: "https://www.xportscore.com"
      });

      const fileName = `XportScore_Certificate_${certificateId.replace(/[^a-zA-Z0-9-]/g, "_")}.pdf`;
      pdf.save(fileName);
    } catch (err) {
      console.error("Failed to generate certificate PDF:", err);
    } finally {
      setIsCapturing(false);
      setIsDownloading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Certificate Card Container */}
      <div
        id="certificate-card"
        className="w-full rounded-2xl border-4 border-slate-200 bg-white shadow-xl p-6 md:p-10 relative overflow-hidden"
      >
        {/* Decorative Corners */}
        <div className="absolute left-4 top-4 h-7 w-7 border-l-4 border-t-4 border-teal-500" />
        <div className="absolute right-4 top-4 h-7 w-7 border-r-4 border-t-4 border-teal-500" />
        <div className="absolute left-4 bottom-4 h-7 w-7 border-l-4 border-b-4 border-teal-500" />
        <div className="absolute right-4 bottom-4 h-7 w-7 border-r-4 border-b-4 border-teal-500" />

        {/* Heading */}
        <h3 className="text-center text-xs md:text-sm tracking-[4px] font-semibold text-slate-500 uppercase">
          QR Verifiable Certificate
        </h3>

        {/* Body */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left */}
          <div className="flex-1">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-8">
              <div>
                <h1 className="text-4xl font-bold text-slate-900">XportScore</h1>
                <p className="text-gray-500 text-sm">
                  India&apos;s Private Export Readiness Standard
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-lg">This is to certify that</p>

            <h2 className="text-4xl font-bold mt-3">{company}</h2>

            <p className="text-gray-600 mt-5 text-xl">
              has been assessed and certified with
            </p>

            <div className="mt-4 flex items-center gap-3 flex-wrap">
              <span className="text-4xl font-bold">XportScore</span>

              <span className="text-5xl font-extrabold text-teal-600">
                {score}
              </span>

              <span className="text-3xl text-gray-500">/ {total}</span>
            </div>
          </div>

          {/* QR */}
          <div className="rounded-xl border-4 border-gray-300 p-4">
            <QRCode value={verifyUrl} size={150} />
          </div>
        </div>

        {/* Footer Grid */}
        <div className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center ${isCapturing ? "border-b border-slate-100 pb-8" : ""}`}>
          <div>
            <p className="text-gray-500 text-sm">Certificate ID</p>
            <h4 className="font-bold text-lg mt-1">{certificateId}</h4>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Date of Issue</p>
            <h4 className="font-bold text-lg mt-1">{issueDate}</h4>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Valid Till</p>
            <h4 className="font-bold text-lg mt-1">{validTill}</h4>
          </div>
        </div>

        {/* Bottom Center Sapphire Blue Hyperlink (Rendered ONLY in PDF export) */}
        {isCapturing && (
          <div className="mt-6 text-center">
            <a
              href="https://www.xportscore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#0D9488] underline underline-offset-4 hover:text-[#0b7f76] cursor-pointer"
            >
              Verify &amp; Explore at www.xportscore.com
              <ExternalLink size={14} className="shrink-0" />
            </a>
          </div>
        )}
      </div>

      {/* Centered Download Button (Matching + New Assessment button style) */}
      <div className="mt-8 flex justify-center pb-10">
        <button
          onClick={handleDownloadCertificate}
          disabled={isDownloading}
          className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-slate-800 transition cursor-pointer shadow-sm disabled:bg-slate-400 disabled:cursor-not-allowed"
        >
          <Download size={18} />
          <span>{isDownloading ? "Generating PDF..." : "Download Certificate"}</span>
        </button>
      </div>
    </div>
  );
}
