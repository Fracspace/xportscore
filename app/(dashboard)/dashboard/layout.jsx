"use client";

import { useState } from "react";
import React from "react";
import Sidebar from "@/components/DashboardComponents/Common/Sidebar";
import Topbar from "@/components/DashboardComponents/Common/Topbar";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F6F8FC] overflow-hidden">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static
          top-0 left-0
          z-50
          h-full
          w-64
          bg-white
          border-r
          border-gray-200
          transform
          transition-transform
          duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <Sidebar closeSidebar={() => setSidebarOpen(false)} />
      </aside>

      {/* Main */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
