import { DM_Sans, Manrope, IBM_Plex_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";

const dm = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["500", "600", "700"]
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700"]
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"]
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dm.variable} ${manrope.variable} ${ibmPlexSans.variable} ${poppins.variable} h-full antialiased`}
    >
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
