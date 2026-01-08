import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

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
  description: "映像クリエイター・稲葉成人のポートフォリオサイト。映像制作・AI導入支援・広報支援を通じて、本質的な問いを投げかけます。",
  keywords: ["映像制作", "AI導入支援", "広報支援", "クリエイティブ"],
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
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="antialiased selection:bg-rose-100 selection:text-rose-900">
        <Header />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
