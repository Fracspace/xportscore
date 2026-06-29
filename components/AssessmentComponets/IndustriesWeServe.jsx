import React from "react";
import {
  Tractor,
  Utensils,
  Shirt,
  Wrench,
  Gift,
  FlaskConical,
  Pill,
  Gem,
  Zap,
  Sofa,
  Package,
  Grid3X3,
  Code2,
  Headphones,
  Compass,
  Users,
  GraduationCap,
  HeartPulse,
  Truck,
  Palette,
  Scale,
  Settings,
  Plane,
  MoreHorizontal
} from "lucide-react";

function IndustriesWeServe() {
  const products = [
    { title: "Agriculture & Agri Products", icon: Tractor },
    { title: "Food & Beverages", icon: Utensils },
    { title: "Textiles, Apparels & Fabrics", icon: Shirt },
    { title: "Engineering & Machinery", icon: Wrench },
    { title: "Handicrafts, Gifts & Lifestyle", icon: Gift },
    { title: "Chemicals & Allied Products", icon: FlaskConical },
    { title: "Pharmaceuticals & Healthcare", icon: Pill },
    { title: "Gems, Jewellery & Precious Metals", icon: Gem },
    { title: "Electronics & Electricals", icon: Zap },
    { title: "Furniture, Fixtures & Fittings", icon: Sofa },
    { title: "Paper, Packaging & Printing", icon: Package },
    { title: "Others", icon: Grid3X3 }
  ];

  const services = [
    { title: "IT & Software Services", icon: Code2 },
    { title: "ITeS & BPO Services", icon: Headphones },
    { title: "Engineering & Technical Services", icon: Compass },
    { title: "Consulting & Advisory Services", icon: Users },
    { title: "Education & Training Services", icon: GraduationCap },
    { title: "Healthcare & Wellness Services", icon: HeartPulse },
    { title: "Logistics & Supply Chain Services", icon: Truck },
    { title: "Design, Media & Creative Services", icon: Palette },
    { title: "Financial & Legal Services", icon: Scale },
    { title: "Maintenance & Facility Management", icon: Settings },
    { title: "Travel, Tourism & Hospitality Services", icon: Plane },
    { title: "Others", icon: MoreHorizontal }
  ];
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Industries We Serve
          </h2>

          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-teal-500" />
        </div>

        {/* Products */}
        <div className="mt-16">
          <h3 className="text-center text-3xl font-semibold text-teal-600">
            Products (Goods)
          </h3>

          <p className="mt-4 text-center text-sm text-gray-500">
            For businesses that manufacture, produce, process or trade physical
            products.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex min-h-[130px] flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <Icon
                    size={28}
                    className="mb-4 text-slate-700"
                    strokeWidth={1.8}
                  />

                  <h4 className="text-sm font-semibold text-slate-800">
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 border-t border-gray-200" />

        {/* Services */}
        <div>
          <h3 className="text-center text-3xl font-semibold text-teal-600">
            Services
          </h3>

          <p className="mt-4 text-center text-sm text-gray-500">
            For businesses that provide professional, technical or specialized
            services.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex min-h-[130px] flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <Icon
                    size={28}
                    className="mb-4 text-slate-700"
                    strokeWidth={1.8}
                  />

                  <h4 className="text-sm font-semibold text-slate-800">
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustriesWeServe;
