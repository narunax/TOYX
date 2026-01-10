import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GeometricLines from "@/components/effects/GeometricLines";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "TOYX | 問いかけることで、本質が見える",
    template: "%s | TOYX",
  },
  description: "Creative AI Director・稲葉成人のポートフォリオ。Concept Design、Visual Architecture、AI Product Designを統合し、消費ではなく「資産」となるプロジェクトを設計します。",
  keywords: ["Concept Design", "Visual Architecture", "AI Product Design", "Branding", "Creative AI"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://toyx.jp",
    siteName: "TOYX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`} suppressHydrationWarning>
      <body className="antialiased selection:bg-rose-100 selection:text-rose-900 min-h-screen relative caustic-bg">
        <GeometricLines />
        <Header />
        <div className="pt-16 relative z-10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
