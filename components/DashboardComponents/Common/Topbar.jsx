"use client";

import { Bell, Search, Plus,Menu } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Topbar({onMenuClick}) {
  const router = useRouter();
  return (
    // <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between">

    //   <div>
    //     <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>

    //     <p className="text-sm text-gray-500 mt-1">
    //       Welcome back, your institutional export standard is up to date.
    //     </p>
    //   </div>

    //   <div className="flex items-center gap-4">
    //     {/* Notification */}
    //     <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
    //       <Bell className="w-5 h-5 text-slate-700" />

    //       <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
    //     </button>

    //     <button
    //       onClick={() => router.push("/xportverifyform")}
    //       className="flex items-center cursor-pointer gap-2 border border-cyan-500 text-slate-700 px-6 py-3 rounded-md hover:bg-cyan-50 transition"
    //     >
    //       <Search size={18} />

    //       <span className="font-medium">Verify Business</span>
    //     </button>

    //     <button
    //       onClick={() => router.push("/xportassessmentform")}
    //       className="flex items-center cursor-pointer gap-2 bg-slate-900 text-white px-6 py-3 rounded-md hover:bg-slate-800 transition"
    //     >
    //       <Plus size={18} />

    //       <span className="font-medium">New Assessment</span>
    //     </button>
    //   </div>
    // </header>

    <header className="bg-white border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Mobile Menu */}
        <button onClick={onMenuClick} className="lg:hidden">
          <Menu size={26} />
        </button>

        <div>
          <h1 className="text-xl md:text-3xl font-bold text-slate-900">
            Dashboard
          </h1>

          <p className="hidden md:block text-sm text-gray-500 mt-1">
            Welcome back, your institutional export standard is up to date.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button className="relative p-2 rounded-lg hover:bg-gray-100">
          <Bell className="w-5 h-5" />

          <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full" />
        </button>

        {/* Hide on Mobile */}
        <button
          onClick={() => router.push("/xportverifyform")}
          className="hidden md:flex items-center gap-2 border border-cyan-500 px-4 py-2 rounded-md"
        >
          <Search size={18} />
          Verify Business
        </button>

        <button
          onClick={() => router.push("/xportassessmentform")}
          className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md"
        >
          <Plus size={18} />
          New Assessment
        </button>

        {/* Mobile only */}
        {/* <button
          onClick={() => router.push("/xportassessmentform")}
          className="md:hidden bg-slate-900 text-white p-2 rounded-md"
        >
          <Plus size={18} />
        </button> */}
      </div>
    </header>
  );
}
