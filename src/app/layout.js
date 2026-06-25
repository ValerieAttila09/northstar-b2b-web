import { IBM_Plex_Mono, Noto_Sans_KR, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";
import SmoothScrollProvider from "../components/common/SmoothScrollProvider";
import { LanguageProvider } from "../context/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space"
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono"
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kr"
});

export const metadata = {
  title: "Northstar Systems | B2B Scale Infrastructure",
  description: "A premium B2B startup website concept built with Next.js, Tailwind CSS, and GSAP."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} ${notoSansKr.variable}`}>
      <body className="relative min-h-screen">
        <LanguageProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
