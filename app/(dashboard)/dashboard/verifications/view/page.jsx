"use client";

import React, { useState, useEffect } from "react";
import ViewVerificationDetails from "@/components/XportVerifyComponents/ViewVerificationDetails";

export default function VerificationViewPage() {
  const [verification, setVerification] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const verificationId = localStorage.getItem("verificationRequestId");

    if (!token || !verificationId) {
      setError("No active verification request session found.");
      setLoading(false);
      return;
    }

    const fetchVerification = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.xportscore.com/api/verify-requests/${verificationId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Xportscore@2026",
            "Authorization": `Bearer ${token}`
          }
        });
        const result = await res.json();
        if (res.ok && result?.success) {
          setVerification(result.data || result);
        } else {
          setError(result?.message || "Failed to load verification details.");
        }
      } catch (err) {
        console.error(err);
        setError("Something went wrong while fetching the verification details.");
      } finally {
        setLoading(false);
      }
    };

    fetchVerification();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-teal-600 border-t-transparent" />
          <p className="mt-4 text-slate-600 font-medium">Loading verification details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-md text-center py-16">
        <div className="rounded-2xl border border-red-100 bg-red-50 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-red-800">Error Loading Verification</h3>
          <p className="mt-2 text-sm text-red-600 leading-relaxed">{error}</p>
        </div>
      </div>
    );
  }

  return <ViewVerificationDetails verification={verification} />;
}
