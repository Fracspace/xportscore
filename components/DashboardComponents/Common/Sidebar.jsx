"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  ClipboardList,
  ShieldCheck,
  FileText,
  BadgeCheck,
  CreditCard,
  Settings,
  LogOut
} from "lucide-react";
import { useState } from "react";
import LogoutModal from "./LogoutModal";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "Assessments",
    href: "/dashboard/assessments",
    icon: ClipboardList
  },
  {
    title: "Verifications",
    href: "/dashboard/verifications",
    icon: ShieldCheck
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: FileText
  },
  {
    title: "Certificates",
    href: "/dashboard/certificates",
    icon: BadgeCheck
  }
];

const accountItems = [
  {
    title: "Billing",
    href: "/dashboard/billing",
    icon: CreditCard
  }
  //   {
  //     title: "Settings",
  //     href: "/dashboard/settings",
  //     icon: Settings
  //   }
];

export default function Sidebar({ closeSidebar }) {
  const pathname = usePathname();

  const [openLogout, setOpenLogout] = useState(false);
  const router = useRouter();

  const onClose = () => {
    setOpenLogout(false);
  };

  const onConfirm = () => {
    alert("logout!");
  };

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 px-6 py-8 flex flex-col">
      {/* Logo */}
      <h1
        onClick={() => router.push("/")}
        className="text-3xl cursor-pointer font-bold text-slate-900 mb-10"
      >
        XportScore
      </h1>

      {/* Main Menu */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;
          // || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeSidebar}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200
              ${
                active
                  ? "bg-teal-300 text-slate-900 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon size={18} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Account Section */}
      {/* <div className="mt-10">
        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">
          Account
        </p>

        <nav className="space-y-2">
          {accountItems.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200
                ${
                  active
                    ? "bg-cyan-300 text-slate-900 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon size={18} />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div> */}

      <div className="border-t border-gray-200 p-5 mt-auto bg-[#F7FAFF]">
        {/* User */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-[#08203D] text-white flex items-center justify-center font-bold text-sm">
            ABC
          </div>

          <div className="flex-1">
            <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-1">
              ABC Exports
              <span>👋</span>
            </h3>

            <p className="text-xs text-gray-500 truncate">company</p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={() => setOpenLogout(true)}
          className="mt-5 w-full flex items-center justify-center gap-2 rounded-lg border border-red-200 py-2.5 text-red-600 hover:bg-red-50 transition"
        >
          <LogOut size={18} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
      {openLogout && (
        <LogoutModal open={true} onClose={onClose} onConfirm={onConfirm} />
      )}
    </aside>
  );
}
