"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import QRCode from "react-qr-code";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function VerifyCertificates({}) {
  const company = "ABC Exports Private Limited";
  const score = 724;
  const total = 900;
  const certificateId = "XS-24-000789";
  const issueDate = "18 Jan 2024";
  const validTill = "18 Dec 2025";
  const verifyUrl = "https://www.xportscore.com/verifycertificates";

  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  console.log("search id is", id);

  async function getData() {
    try {
      const res = await fetch(
        `https://api.xportscore.com/api/certificates/validate/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Xportscore@2026"
          }
        }
      );

      console.log("res is",res);

      const data = await res.json();

      console.log("data is ", data);
    } catch (error) {
      console.log("error is", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full mt-26 mb-12 max-w-5xl mx-auto rounded-2xl border-4 border-slate-200 bg-white shadow-xl p-6 md:p-10 relative overflow-hidden">
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
            {/* <Image src="/logo.png" alt="XportScore" width={70} height={70} /> */}

            <div>
              <h1 className="text-4xl font-bold text-slate-900">XportScore</h1>

              <p className="text-gray-500 text-sm">
                India's Private Export Readiness Standard
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

      {/* Footer */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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

      {/* <div className="mt-10 text-center text-teal-700 font-semibold">
        Verify at xportscore.com/verify
      </div> */}
    </div>
  );
}
