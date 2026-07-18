import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/XPORTSCORE_IMG.png";

export default function Footer() {
  return (
    <footer className="bg-[#01081A] border-t border-[#101d35]">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo Section */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src={logoImg}
                alt="XportScore"
                className="h-16 md:h-20 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="text-gray-500 text-sm leading-6 max-w-xs">
              The Global Export Readiness Audit.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-wider uppercase mb-5">
              Platform
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/howitworks"
                  className="text-gray-400 hover:text-white transition"
                >
                  How It Works
                </Link>
              </li>

              <li>
                <Link
                  href="/assessmentframework"
                  className="text-gray-400 hover:text-white transition"
                >
                  Framework
                </Link>
              </li>

              <li>
                <Link
                  href="/samplereport"
                  className="text-gray-400 hover:text-white transition"
                >
                  Sample Report
                </Link>
              </li>

              {/* <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Verify Certificate
                </a>
              </li> */}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-wider uppercase mb-5">
              Company
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/partners"
                  className="text-gray-400 hover:text-white transition"
                >
                  For Partners
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-white transition"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-wider uppercase mb-5">
              Legal
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition"
                >
                  Terms of Use
                </Link>
              </li>

              <li>
                <Link
                  href="/privacypolicy"
                  className="text-gray-400 hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>

              {/* <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Disclaimer
                </a>
              </li> */}
              {/* 
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Refund Policy
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#101d35] mt-12 pt-8">
          <p className="text-[11px] text-gray-600 leading-6">
            XportScore is a support-readiness audit platform. It does not
            replace statutory registrations, government approvals, product
            certifications, banking approvals, customs requirements, or country
            specific import compliance.
          </p>

          <p className="text-[11px] text-gray-500 mt-6">
            © 2026 XportScore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
