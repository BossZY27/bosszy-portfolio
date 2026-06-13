import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BossZY | CS @ KKU & Developer Portfolio",
  description: "พอร์ตโฟลิโอสะสมผลงานของ BossZY (Pakin Meksuwan) รวบรวมโปรเจกต์กว่า 29+ ชิ้น ครอบคลุม Web App, Mobile App, Trading Bot (MT5), AI & ML และระบบ Automation",
  keywords: ["BossZY", "Pakin Meksuwan", "portfolio", "developer", "full-stack", "AI Engineer", "trading bot", "automation", "Web Developer Thailand"],
  authors: [{ name: "BossZY" }],
  creator: "BossZY",
  openGraph: {
    title: "BossZY — CS @ KKU & Developer Portfolio",
    description: "รวบรวมผลงานกว่า 29+ โปรเจกต์ ตั้งแต่ Web App, Mobile App, Trading Bot (MT5), AI & ML ไปจนถึงระบบ Auto-click/Automation",
    url: "https://portfolio-bosszy27s-projects.vercel.app",
    siteName: "BossZY Portfolio",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "BossZY Portfolio Preview",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BossZY — CS @ KKU & Developer Portfolio",
    description: "รวบรวมผลงานกว่า 29+ โปรเจกต์ ตั้งแต่ Web App, Mobile App, Trading Bot, AI & ML ไปจนถึงระบบ Automation",
    images: ["/og-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-100">
        {children}
      </body>
    </html>
  );
}
