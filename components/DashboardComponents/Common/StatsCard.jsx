import Link from "next/link";

export default function StatsCard({
  icon,
  badge,
  title,
  value,
  label,
  footer,
  footerLink
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between mb-6">
        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0A2342]">
          {icon}
        </div>

        {badge && (
          <span className="px-3 py-1 rounded bg-cyan-100 text-cyan-700 text-[10px] font-bold tracking-wide uppercase">
            {badge}
          </span>
        )}
      </div>

      <h4 className="text-sm text-gray-600 mb-2">{title}</h4>

      <div className="flex items-end gap-2 mb-5">
        <h2 className="text-4xl font-bold text-slate-900">{value}</h2>

        <span className="text-sm text-gray-500 mb-1">{label}</span>
      </div>

      {typeof footer === "string" ? (
        <p className="text-xs text-gray-500">{footer}</p>
      ) : (
        footer
      )}

      {footerLink && (
        <Link
          href={footerLink.href}
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-cyan-700 hover:text-cyan-900"
        >
          {footerLink.label}
        </Link>
      )}
    </div>
  );
}
