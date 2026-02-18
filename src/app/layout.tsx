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
  metadataBase: new URL("https://www.firoassets.com"),
  title: {
    default: "FIRO | Robotic Assets, Real Yield",
    template: "%s | FIRO",
  },
  description:
    "FIRO turns humanoid robots into yield-generating assets. Own the unit, FIRO runs ops, and track utilization, uptime, and payouts in one dashboard.",
  keywords: [
    "FIRO",
    "robotic assets",
    "robot investment",
    "humanoid robots",
    "robotics yield",
    "events robotics",
    "robot ROI",
    "automation",
  ],
  authors: [{ name: "FIRO", url: "https://www.firoassets.com" }],
  creator: "FIRO",
  publisher: "FIRO",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "FIRO",
    title: "FIRO | Robotic Assets, Real Yield",
    description:
      "Own or finance a robot. FIRO operates deployment and tracks utilization, uptime, and payouts.",
    images: [
      {
        url: "/assets/hero/dashboard.png",
        width: 1200,
        height: 800,
        alt: "FIRO dashboard preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIRO | Robotic Assets, Real Yield",
    description:
      "FIRO converts humanoid robots into measurable, managed, yield-generating assets.",
    images: ["/assets/hero/dashboard.png"],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
