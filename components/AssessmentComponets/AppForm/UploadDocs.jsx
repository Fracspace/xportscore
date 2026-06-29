import React from "react";

function UploadDocs() {
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Documents Upload</h2>
      {[
        "Business Documents",
        "Product / Service Documents",
        "Packaging Documents",
        "Certification & Quality Documents",
        "Past Export Documents"
      ].map((section) => (
        <div key={section} className="mb-8">
          <h3 className="font-semibold text-lg mb-4">{section}</h3>

          <input
            type="file"
            multiple
            className="w-full border rounded-lg p-3"
          />
        </div>
      ))}
    </div>
  );
}

export default UploadDocs;
