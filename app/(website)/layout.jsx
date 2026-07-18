import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function WebsiteLayout({ children }) {
  return (
    <div>
      <div className="fixed top-0 w-[100vw] z-[100]">
        <Navbar />
      </div>
      <div className="min-h-full font-dm flex flex-col pt-16 md:pt-12">{children}</div>
      <Footer />
    </div>
  );
}
