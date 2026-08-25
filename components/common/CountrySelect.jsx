"use client";

import React, { useState, useRef, useEffect } from "react";
import { Country } from "country-state-city";
import flags from "react-phone-number-input/flags";
import { ChevronDown, Search, Check } from "lucide-react";

export default function CountrySelect({
  label,
  required = false,
  value = "",
  onChange,
  error = "",
  placeholder = "Select Country",
  className = ""
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef(null);

  const countries = Country.getAllCountries();

  const selectedCountryObj = countries.find(
    (c) => c.name.toLowerCase() === (value || "").toLowerCase()
  );

  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (countryName) => {
    if (onChange) {
      onChange(countryName);
    }
    setIsOpen(false);
    setSearch("");
  };

  const renderFlag = (isoCode) => {
    if (!isoCode) return null;
    const FlagComponent = flags[isoCode.toUpperCase()];
    if (FlagComponent) {
      return <FlagComponent title={isoCode} className="w-5 h-3.5 object-cover rounded-xs shrink-0 shadow-2xs" />;
    }
    return null;
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {label && (
        <label className="mb-2 block text-sm font-medium">
          {label} {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}

      {/* Select Box Trigger for error */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full rounded-lg border p-3 bg-white flex items-center justify-between cursor-pointer transition-colors ${error ? "border-red-500" : "border-gray-300 hover:border-blue-600"
          }`}
      >
        <div className="flex items-center gap-2.5 overflow-hidden">
          {selectedCountryObj ? (
            <>
              {renderFlag(selectedCountryObj.isoCode)}
              <span className="text-sm text-gray-800 truncate">{selectedCountryObj.name}</span>
            </>
          ) : (
            <span className="text-sm text-gray-400">{placeholder}</span>
          )}
        </div>
        <ChevronDown size={18} className="text-gray-500 shrink-0 ml-2" />
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}

      {/* {drop down for Selecting country} */}
      {isOpen && (
        <div className="absolute z-50 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-xl max-h-64 flex flex-col overflow-hidden">
          <div className="p-2 border-b border-gray-100 flex items-center gap-2 bg-gray-50/50">
            <Search size={16} className="text-gray-400 ml-1" />
            <input
              type="text"
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country..."
              className="w-full text-sm bg-transparent outline-none py-1 text-gray-700"
            />
          </div>

          <div className="overflow-y-auto flex-1 divide-y divide-gray-50">
            {filteredCountries.length === 0 ? (
              <div className="p-3 text-sm text-gray-400 text-center">No country found</div>
            ) : (
              filteredCountries.map((c) => {
                const isSelected = value?.toLowerCase() === c.name.toLowerCase();
                return (
                  <div
                    key={c.isoCode}
                    onClick={() => handleSelect(c.name)}
                    className={`flex items-center justify-between px-3 py-2.5 text-sm cursor-pointer transition-colors hover:bg-blue-50 ${isSelected ? "bg-blue-50/70 font-medium text-blue-900" : "text-gray-700"
                      }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      {renderFlag(c.isoCode)}
                      <span className="truncate">{c.name}</span>
                    </div>
                    {isSelected && <Check size={16} className="text-blue-600 shrink-0" />}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
