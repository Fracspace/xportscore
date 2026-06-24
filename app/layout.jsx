import { DM_Sans, Manrope, IBM_Plex_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const dm = DM_Sans({
  variable: "--font-dm",
  weight: ["500", "600", "700"]
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: [""],
  weight: ["500", "600", "700"]
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm",
  subsets: [""],
  weight: ["400", "500", "600", "700"]
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "600", "700"]
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dm.variable} ${manrope.variable} ${ibmPlexSans.variable} ${poppins.variable} h-full antialiased`}
    >
      <div>
        <div className="fixed t-0 w-[100vw] z-100">
          <Navbar />
        </div>
        <body className="min-h-full font-dm flex flex-col">{children}</body>
        <Footer />
      </div>
    </html>
  );
}
