import {
  ShieldCheck,
  User,
  Mail,
  Phone,
  Briefcase,
  Building2
} from "lucide-react";
import Link from "next/link";

import { Country } from "country-state-city";

export default function SignupPage() {
  const countries = Country.getAllCountries();
  return (
    <main className="min-h-screen bg-[#f5f7fb] bg-[radial-gradient(#d9dde7_1px,transparent_1px)] [background-size:20px_20px] flex items-center justify-center mt-12 py-12 px-4">
      <div className="w-full max-w-xl bg-white border border-gray-200 shadow-lg rounded-sm px-10 py-12">
        {/* Heading */}

        <div className="text-center">
          <h1 className="text-[46px] leading-[52px] font-bold text-[#081A3B]">
            XportScore
          </h1>

          <p className="mt-5 text-[15px] leading-6 text-gray-500">
            Join XportScore to benchmark your readiness for
            <br />
            international markets and obtain verified certification.
          </p>
        </div>

        {/* Form */}

        <form className="mt-10 space-y-5">
          {/* Full Name */}
          <div>
            <label className="mb-2 block text-[10px] font-bold tracking-[2px] text-gray-600 uppercase">
              FULL NAME
            </label>
            <input
              type="text"
              placeholder="Johnathan Doe"
              className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4 text-sm placeholder:text-gray-400 focus:border-[#0B1E48] focus:ring-2 focus:ring-blue-100 outline-none transition"
            />
          </div>

          {/* Work Email */}
          <div>
            <label className="mb-2 block text-[10px] font-bold tracking-[2px] text-gray-600 uppercase">
              WORK EMAIL
            </label>
            <input
              type="email"
              placeholder="j.doe@company.com"
              className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4 text-sm placeholder:text-gray-400 focus:border-[#0B1E48] focus:ring-2 focus:ring-blue-100 outline-none transition"
            />
          </div>

          {/* Mobile & Designation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-[10px] font-bold tracking-[2px] text-gray-600 uppercase">
                MOBILE NUMBER
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4 text-sm placeholder:text-gray-400 focus:border-[#0B1E48] focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>

            <div>
              <label className="mb-2 block text-[10px] font-bold tracking-[2px] text-gray-600 uppercase">
                DESIGNATION
              </label>
              <input
                type="text"
                placeholder="Export Manager"
                className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4 text-sm placeholder:text-gray-400 focus:border-[#0B1E48] focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>
          </div>

          {/* Company Name */}
          <div>
            <label className="mb-2 block text-[10px] font-bold tracking-[2px] text-gray-600 uppercase">
              COMPANY NAME
            </label>
            <input
              type="text"
              placeholder="Global Logistics Inc."
              className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4 text-sm placeholder:text-gray-400 focus:border-[#0B1E48] focus:ring-2 focus:ring-blue-100 outline-none transition"
            />
          </div>

          {/* Country */}
          <div>
            <label className="mb-2 block text-[10px] font-bold tracking-[2px] text-gray-600 uppercase">
              COUNTRY
            </label>

            <select className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4 text-sm text-gray-700 focus:border-[#0B1E48] focus:ring-2 focus:ring-blue-100 outline-none transition">
              <option value="">Select Country</option>

              {countries.map((country) => (
                <option key={country.isoCode} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* Info Box */}
          <div className="flex gap-4 rounded bg-[#f4f7fb] border-l-4 border-teal-600 p-5">
            <ShieldCheck className="text-[#0d8a80] mt-0.5 shrink-0" size={18} />

            <div>
              <h3 className="text-sm font-semibold text-[#081A3B]">
                Email Verification
              </h3>

              <p className="mt-1 text-sm text-gray-500 leading-6">
                A one-time verification OTP will be sent to your work email to
                validate your institutional access.
              </p>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#0B1E48] hover:bg-[#091738] text-white font-semibold py-4 rounded shadow-md transition"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-[#081A3B] hover:text-teal-600"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}

function Input({ label, placeholder, icon }) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-bold tracking-[2px] text-gray-600 uppercase">
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </span>

        <input
          type="text"
          placeholder={placeholder}
          className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] pl-10 pr-4 text-sm placeholder:text-gray-400 focus:border-[#0B1E48] focus:ring-2 focus:ring-blue-100 outline-none transition"
        />
      </div>
    </div>
  );
}
