"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BriefcaseBusiness } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/howitworks" },
  { label: "Framework", href: "/assessmentframework" },
  { label: "XportVerify", href: "/xportverify" },
  { label: "XportAssessment", href: "/startassessment" },
  { label: "Sample Report", href: "/samplereport" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState();
  const router = useRouter();
  const pathname = usePathname();

  // console.log("pathname is",pathname)

  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200">
            <BriefcaseBusiness size={20} />
          </div>

          <span className="text-xl font-ibm font-bold text-black">
            XportScore
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-dm transition-colors hover:text-cyan-600 ${
                link?.href === pathname
                  ? "border-b-2 border-cyan-500 pb-1 text-cyan-600"
                  : "text-gray-700"
              }`}
              onClick={() => setSelected(link?.label)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => {
              setSelected("startassessment");
              router.push("/login");
            }}
            className="rounded-md font-ibm bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-900 cursor-pointer"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="py-3 text-gray-700 hover:text-cyan-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <button className="mt-4 rounded-md bg-black px-5 py-3 text-white">
              Get Your XportScore
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
