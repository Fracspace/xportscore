"use client";

export default function LogoutModal({
  open,
  onClose,
  onConfirm,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-xl bg-white shadow-2xl">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-semibold text-slate-900">
            Confirm Logout
          </h2>

          <p className="mt-3 text-gray-500">
            Are you sure you want to log out of your
            account?
          </p>
        </div>

        <div className="flex gap-4 p-5">
          <button
            onClick={onClose}
            className="flex-1 cursor-pointer rounded-lg border border-gray-300 py-3 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 cursor-pointer rounded-lg bg-red-600 py-3 text-white hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}